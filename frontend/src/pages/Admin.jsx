import { useState, useEffect } from 'react';
import api from '../api/client';
import Navbar from '../components/Navbar';

const sampleLessonPages = JSON.stringify(
  [
    {
      pageNumber: 1,
      koreanText: '감사합니다',
      romanization: 'gamsahamnida',
      explanation: 'Formal way to say "Thank you."',
    },
  ],
  null,
  2
);

const sampleQuizQuestions = JSON.stringify(
  [
    {
      question: 'What does 감사합니다 mean?',
      options: ['Hello', 'Thank you', 'Goodbye', 'Sorry'],
      correctAnswer: 1,
    },
  ],
  null,
  2
);

export default function Admin() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lessonForm, setLessonForm] = useState({
    day: 1,
    title: '',
    pages: sampleLessonPages,
  });
  const [quizForm, setQuizForm] = useState({
    day: 1,
    questions: sampleQuizQuestions,
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await api.getStudents();
      setStudents(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLessonSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const pages = JSON.parse(lessonForm.pages);
      await api.createLesson({
        day: Number(lessonForm.day),
        title: lessonForm.title,
        pages,
      });
      setMessage(`Lesson for Day ${lessonForm.day} uploaded successfully`);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleQuizSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const questions = JSON.parse(quizForm.questions);
      await api.createQuiz({
        day: Number(quizForm.day),
        questions,
      });
      setMessage(`Quiz for Day ${quizForm.day} uploaded successfully`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-navy page-enter">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Admin Panel</h1>
        <p className="text-gray-400 mb-8">Upload lessons and quizzes, manage students</p>

        {message && (
          <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <form onSubmit={handleLessonSubmit} className="card">
            <h2 className="text-lg font-semibold text-gold mb-4">Upload Lesson</h2>

            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-2">Day (1-30)</label>
              <input
                type="number"
                min={1}
                max={30}
                value={lessonForm.day}
                onChange={(e) => setLessonForm({ ...lessonForm, day: e.target.value })}
                className="input-field"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-2">Title</label>
              <input
                type="text"
                value={lessonForm.title}
                onChange={(e) => setLessonForm({ ...lessonForm, title: e.target.value })}
                className="input-field"
                placeholder="Lesson title"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-2">
                Pages (JSON array)
              </label>
              <textarea
                value={lessonForm.pages}
                onChange={(e) => setLessonForm({ ...lessonForm, pages: e.target.value })}
                className="input-field font-mono text-xs h-48"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Upload Lesson
            </button>
          </form>

          <form onSubmit={handleQuizSubmit} className="card">
            <h2 className="text-lg font-semibold text-gold mb-4">Upload Quiz</h2>

            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-2">Day (1-30)</label>
              <input
                type="number"
                min={1}
                max={30}
                value={quizForm.day}
                onChange={(e) => setQuizForm({ ...quizForm, day: e.target.value })}
                className="input-field"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-2">
                Questions (JSON array)
              </label>
              <textarea
                value={quizForm.questions}
                onChange={(e) => setQuizForm({ ...quizForm, questions: e.target.value })}
                className="input-field font-mono text-xs h-64"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Upload Quiz
            </button>
          </form>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-gold mb-4">
            Students ({students.length})
          </h2>

          {loading ? (
            <p className="text-gray-400">Loading...</p>
          ) : students.length === 0 ? (
            <p className="text-gray-400">No students registered yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-800">
                    <th className="text-left py-3 px-2">Name</th>
                    <th className="text-left py-3 px-2">Email</th>
                    <th className="text-left py-3 px-2">Current Day</th>
                    <th className="text-left py-3 px-2">Quizzes</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s.id} className="border-b border-gray-800/50">
                      <td className="py-3 px-2">{s.name}</td>
                      <td className="py-3 px-2 text-gray-400">{s.email}</td>
                      <td className="py-3 px-2">
                        {s.startDate ? `Day ${s.currentDay}` : 'Not started'}
                      </td>
                      <td className="py-3 px-2 text-gray-400">
                        {s.completedQuizzes.length > 0
                          ? s.completedQuizzes
                              .map((q) => `D${q.day}: ${q.score}/${q.total}`)
                              .join(', ')
                          : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
