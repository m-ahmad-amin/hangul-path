import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/client';
import Navbar from '../components/Navbar';
import ProgressBar from '../components/ProgressBar';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

export default function Progress() {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const data = await api.getProgress();
        setProgress(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProgress();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const { currentDay = 0, completedQuizzes = [] } = progress || {};
  const quizMap = Object.fromEntries(completedQuizzes.map((q) => [q.day, q]));

  const chartData = completedQuizzes
    .sort((a, b) => a.day - b.day)
    .map((q) => ({
      day: `Day ${q.day}`,
      score: Math.round((q.score / q.total) * 100),
    }));

  const getDayStatus = (day) => {
    if (day > currentDay) return 'locked';
    if (quizMap[day]) return 'quiz-done';
    if (day <= currentDay) return 'lesson-available';
    return 'locked';
  };

  const statusConfig = {
    locked: { label: 'Locked', color: 'bg-gray-800 text-gray-500 border-gray-700' },
    'lesson-available': { label: 'Lesson', color: 'bg-gold/10 text-gold border-gold/30' },
    'quiz-done': { label: 'Done', color: 'bg-green-500/10 text-green-400 border-green-500/30' },
  };

  return (
    <div className="min-h-screen bg-navy page-enter">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Your Progress</h1>
          <p className="text-gray-400">30-day journey timeline</p>
        </div>

        {currentDay > 0 && (
          <div className="mb-8">
            <ProgressBar current={currentDay} />
          </div>
        )}

        {chartData.length > 0 && (
          <div className="card mb-8">
            <h2 className="text-lg font-semibold mb-4">Quiz Scores Over Time</h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="day" stroke="#6b7280" fontSize={11} angle={-45} textAnchor="end" height={60} />
                <YAxis stroke="#6b7280" fontSize={12} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#111827',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                  }}
                  formatter={(value) => [`${value}%`, 'Score']}
                />
                <Bar dataKey="score" fill="#c9a84c" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {Array.from({ length: 30 }, (_, i) => {
            const day = i + 1;
            const status = getDayStatus(day);
            const config = statusConfig[status];
            const quiz = quizMap[day];

            return (
              <div
                key={day}
                className={`card p-4 text-center border ${config.color} ${
                  day <= currentDay ? 'hover:border-gold/50' : ''
                } transition-colors`}
              >
                <div className="text-lg font-bold mb-1">Day {day}</div>
                <div className="text-xs mb-2">{config.label}</div>
                {quiz && (
                  <div className="text-xs text-green-400">
                    {quiz.score}/{quiz.total}
                  </div>
                )}
                {day <= currentDay && (
                  <div className="mt-2 flex flex-col gap-1">
                    <Link
                      to={`/lesson/${day}`}
                      className="text-xs text-gold hover:underline"
                    >
                      Lesson
                    </Link>
                    {day <= currentDay - 1 && (
                      <Link
                        to={`/quiz/${day}`}
                        className="text-xs text-gray-400 hover:text-gold hover:underline"
                      >
                        Quiz
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <Link to="/dashboard" className="btn-secondary text-sm">
            ← Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
