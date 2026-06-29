const Lesson = require('../models/Lesson');
const Quiz = require('../models/Quiz');
const User = require('../models/User');
const { getCurrentDay } = require('../utils/currentDay');

exports.getMe = async (req, res) => {
  try {
    const user = req.user;
    const currentDay = getCurrentDay(user.startDate);

    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      startDate: user.startDate,
      currentDay,
      completedQuizzes: user.completedQuizzes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getLesson = async (req, res) => {
  try {
    const day = parseInt(req.params.day, 10);
    const currentDay = getCurrentDay(req.user.startDate);

    if (!req.user.startDate) {
      return res.status(403).json({ message: 'Please start the course first' });
    }

    if (day > currentDay) {
      return res.status(403).json({ message: 'This lesson is not yet unlocked' });
    }

    const lesson = await Lesson.findOne({ day });
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }

    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getQuiz = async (req, res) => {
  try {
    const day = parseInt(req.params.day, 10);
    const currentDay = getCurrentDay(req.user.startDate);
    const maxQuizDay = currentDay - 1;

    if (!req.user.startDate) {
      return res.status(403).json({ message: 'Please start the course first' });
    }

    if (day > maxQuizDay || day < 1) {
      return res.status(403).json({ message: 'This quiz is not yet unlocked' });
    }

    const quiz = await Quiz.findOne({ day });
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    const questions = quiz.questions.map((q) => ({
      question: q.question,
      options: q.options,
    }));

    res.json({ day: quiz.day, questions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.submitQuiz = async (req, res) => {
  try {
    const day = parseInt(req.params.day, 10);
    const { answers } = req.body;
    const currentDay = getCurrentDay(req.user.startDate);
    const maxQuizDay = currentDay - 1;

    if (!req.user.startDate) {
      return res.status(403).json({ message: 'Please start the course first' });
    }

    if (day > maxQuizDay || day < 1) {
      return res.status(403).json({ message: 'This quiz is not yet unlocked' });
    }

    const user = await User.findById(req.user._id);
    const existing = user.completedQuizzes.find((q) => q.day === day);

    if (existing) {
      const quiz = await Quiz.findOne({ day });
      const breakdown = quiz.questions.map((q, i) => ({
        question: q.question,
        yourAnswer: answers?.[i] ?? null,
        correctAnswer: q.correctAnswer,
        isCorrect: answers?.[i] === q.correctAnswer,
      }));

      return res.json({
        day,
        score: existing.score,
        total: existing.total,
        alreadySubmitted: true,
        breakdown,
      });
    }

    const quiz = await Quiz.findOne({ day });
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    if (!Array.isArray(answers) || answers.length !== quiz.questions.length) {
      return res.status(400).json({ message: 'Invalid answers format' });
    }

    let score = 0;
    const breakdown = quiz.questions.map((q, i) => {
      const isCorrect = answers[i] === q.correctAnswer;
      if (isCorrect) score++;
      return {
        question: q.question,
        yourAnswer: answers[i],
        correctAnswer: q.correctAnswer,
        isCorrect,
      };
    });

    user.completedQuizzes.push({
      day,
      score,
      total: quiz.questions.length,
      submittedAt: new Date(),
    });
    await user.save();

    res.json({
      day,
      score,
      total: quiz.questions.length,
      alreadySubmitted: false,
      breakdown,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProgress = async (req, res) => {
  try {
    const currentDay = getCurrentDay(req.user.startDate);

    res.json({
      currentDay,
      startDate: req.user.startDate,
      completedQuizzes: req.user.completedQuizzes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.resetProgress = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.startDate = new Date();
    user.completedQuizzes = [];
    await user.save();

    res.json({
      message: 'Progress reset successfully',
      startDate: user.startDate,
      currentDay: 1,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.startCourse = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user.startDate) {
      return res.status(400).json({ message: 'Course already started' });
    }

    user.startDate = new Date();
    await user.save();

    res.json({
      message: 'Course started',
      startDate: user.startDate,
      currentDay: 1,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
