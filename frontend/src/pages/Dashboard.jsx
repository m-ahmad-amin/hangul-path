import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../api/client';
import Navbar from '../components/Navbar';
import ProgressBar from '../components/ProgressBar';
import ConfirmModal from '../components/ConfirmModal';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

export default function Dashboard() {
  const { user, refreshUser } = useAuth();
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [starting, setStarting] = useState(false);

  const currentDay = user?.currentDay || 0;
  const completedQuizzes = user?.completedQuizzes || [];
  const quizDay = currentDay - 1;
  const quizAttempted = completedQuizzes.some((q) => q.day === quizDay);

  const chartData = completedQuizzes
    .sort((a, b) => a.day - b.day)
    .map((q) => ({
      day: `D${q.day}`,
      score: Math.round((q.score / q.total) * 100),
    }));

  const handleReset = async () => {
    setResetting(true);
    try {
      await api.resetProgress();
      await refreshUser();
      setShowResetModal(false);
    } catch (err) {
      alert(err.message);
    } finally {
      setResetting(false);
    }
  };

  const handleStartCourse = async () => {
    setStarting(true);
    try {
      await api.startCourse();
      await refreshUser();
    } catch (err) {
      alert(err.message);
    } finally {
      setStarting(false);
    }
  };

  if (!user?.startDate) {
    return (
      <div className="min-h-screen bg-navy">
        <Navbar />
        <div className="max-w-lg mx-auto px-4 py-24 text-center page-enter">
          <span className="text-gold font-korean text-5xl block mb-6">시작</span>
          <h1 className="text-3xl font-bold mb-4">Ready to begin?</h1>
          <p className="text-gray-400 mb-8">
            Your 30-day Korean journey starts now. One new lesson unlocks each day.
          </p>
          <button
            onClick={handleStartCourse}
            disabled={starting}
            className="btn-primary disabled:opacity-50"
          >
            {starting ? 'Starting...' : 'Start Course — Day 1'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy page-enter">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">
            Welcome back, {user.name}
          </h1>
          <p className="text-gray-400">Keep up the momentum. You&apos;re doing great.</p>
        </div>

        <div className="mb-8">
          <ProgressBar current={currentDay} label="Course Progress" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link
            to={`/lesson/${currentDay}`}
            className="card hover:border-gold/40 transition-all group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded">
                Today
              </span>
              <span className="text-gray-500 group-hover:text-gold transition-colors">→</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Day {currentDay} Lesson</h2>
            <p className="text-gray-400 text-sm">
              {currentDay >= 30
                ? 'Final lesson — congratulations on reaching the end!'
                : 'Read today\'s webtoon-style lesson panels.'}
            </p>
          </Link>

          {quizDay >= 1 && (
            <Link
              to={`/quiz/${quizDay}`}
              className={`card hover:border-gold/40 transition-all group cursor-pointer ${
                quizAttempted ? 'opacity-75' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded">
                  {quizAttempted ? 'Completed' : 'Available'}
                </span>
                <span className="text-gray-500 group-hover:text-gold transition-colors">→</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">Day {quizDay} Quiz</h2>
              <p className="text-gray-400 text-sm">
                {quizAttempted
                  ? `Score: ${completedQuizzes.find((q) => q.day === quizDay)?.score}/${
                      completedQuizzes.find((q) => q.day === quizDay)?.total
                    } — retake to review`
                  : 'Test what you learned yesterday.'}
              </p>
            </Link>
          )}
        </div>

        {chartData.length > 0 && (
          <div className="card mb-8">
            <h2 className="text-lg font-semibold mb-4">Quiz Scores</h2>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="day" stroke="#6b7280" fontSize={12} />
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

        <div className="flex flex-wrap gap-4">
          <Link to="/progress" className="btn-secondary text-sm">
            View Full Progress
          </Link>
          <button
            onClick={() => setShowResetModal(true)}
            className="text-red-400 hover:text-red-300 text-sm transition-colors"
          >
            Reset Course
          </button>
        </div>
      </main>

      <ConfirmModal
        isOpen={showResetModal}
        title="Reset Course?"
        message="This will restart you at Day 1 and clear all quiz scores. This cannot be undone."
        confirmText={resetting ? 'Resetting...' : 'Reset Course'}
        onConfirm={handleReset}
        onCancel={() => setShowResetModal(false)}
        danger
      />
    </div>
  );
}
