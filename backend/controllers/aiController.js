const Groq = require('groq-sdk');
const Lesson = require('../models/Lesson');

let groqClient = null;

function getGroqClient() {
  if (!process.env.GROQ_API_KEY) {
    return null;
  }
  if (!groqClient) {
    groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }
  return groqClient;
}

exports.aiChat = async (req, res) => {
  try {
    const { message, lessonDay } = req.body;

    if (!message || !lessonDay) {
      return res.status(400).json({ message: 'Message and lessonDay are required' });
    }

    const groq = getGroqClient();
    if (!groq) {
      return res.status(503).json({
        message: 'AI assistant is not configured. Add GROQ_API_KEY to backend/.env',
      });
    }

    const lesson = await Lesson.findOne({ day: lessonDay });
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }

    const lessonContext = lesson.pages
      .map(
        (p) =>
          `Page ${p.pageNumber}: ${p.koreanText} (${p.romanization}) - ${p.explanation}`
      )
      .join('\n');

    const systemPrompt = `You are a Korean language tutor for Hangul Path. The student is on Day ${lessonDay}: ${lesson.title}. Only answer questions related to Korean language, today's lesson, grammar, or vocabulary. Be concise and beginner-friendly.

Today's lesson content:
${lessonContext}`;

    const completion = await groq.chat.completions.create({
      model: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      max_tokens: 512,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    res.json({ reply });
  } catch (error) {
    console.error('Groq API error:', error.message);
    const groqMessage = error?.error?.message || error?.message;
    res.status(500).json({
      message: groqMessage?.includes('decommissioned')
        ? 'AI model outdated — server needs a restart after update.'
        : 'AI assistant unavailable. Please try again later.',
    });
  }
};
