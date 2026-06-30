import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/client';
import Navbar from '../components/Navbar';

export default function Quiz() {
  const { day } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await api.getQuiz(day);
        setQuiz(data);
        setAnswers(new Array(data.questions.length).fill(null));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [day]);

  const handleSelect = (optionIndex) => {
    setSelected(optionIndex);
  };

  const handleNext = () => {
    if (selected === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQ] = selected;
    setAnswers(newAnswers);

    if (currentQ < quiz.questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    } else {
      handleSubmit(newAnswers);
    }
  };

  const handleSubmit = async (finalAnswers) => {
    setSubmitting(true);
    try {
      const data = await api.submitQuiz(day, finalAnswers);
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error && !result) {
    return (
      <div className="min-h-screen bg-navy">
        <Navbar />
        <div className="max-w-lg mx-auto px-4 py-24 text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <Link to="/dashboard" className="btn-secondary">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (result) {
    const percent = Math.round((result.score / result.total) * 100);
    return (
      <div className="min-h-screen bg-navy page-enter">
        <Navbar />
        <main className="max-w-lg mx-auto px-4 py-16 text-center animate-slide-up">
          <span className="text-gold font-korean text-4xl block mb-4">결과</span>
          <h1 className="text-3xl font-bold mb-2">
            {result.score} / {result.total}
          </h1>
          <p className="text-gray-400 mb-2">{percent}% correct</p>
          {result.alreadySubmitted && (
            <p className="text-yellow-500/80 text-sm mb-6">Previously submitted — showing saved score</p>
          )}

          <div className="card text-left mt-8 mb-8 space-y-4">
            <h2 className="font-semibold text-gold">Breakdown</h2>
            {result.breakdown.map((item, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg border ${
                  item.isCorrect
                    ? 'border-green-500/30 bg-green-500/5'
                    : 'border-red-500/30 bg-red-500/5'
                }`}
              >
                <p className="text-sm mb-2">{item.question}</p>
                <p className="text-xs text-gray-400">
                  Your answer: option #{item.yourAnswer !== null ? item.yourAnswer + 1 : '—'}
                  {!item.isCorrect && (
                    <span className="text-green-400 ml-2">
                      Correct: #{item.correctAnswer + 1}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center">
            <Link to="/dashboard" className="btn-primary">
              Back to Dashboard
            </Link>
            <Link to="/progress" className="btn-secondary">
              View Progress
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const question = quiz.questions[currentQ];

  return (
    <div className="min-h-screen bg-navy page-enter flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Day {day} Quiz</span>
            <span>
              Question {currentQ + 1} of {quiz.questions.length}
            </span>
          </div>
          <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-300"
              style={{ width: `${((currentQ + 1) / quiz.questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center animate-slide-up">
          <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-center leading-relaxed">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                  selected === index
                    ? 'border-gold bg-gold/10 text-white'
                    : 'border-gray-700 bg-navy-light hover:border-gray-600 text-gray-300'
                }`}
              >
                <span className="text-gold font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 pb-4">
          <button
            onClick={handleNext}
            disabled={selected === null || submitting}
            className="btn-primary w-full disabled:opacity-50"
          >
            {submitting
              ? 'Submitting...'
              : currentQ < quiz.questions.length - 1
                ? 'Next Question'
                : 'Submit Quiz'}
          </button>
        </div>
      </main>
    </div>
  );
}
