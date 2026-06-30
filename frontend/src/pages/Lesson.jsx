import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/client';
import Navbar from '../components/Navbar';
import AiChat from '../components/AiChat';

export default function Lesson() {
  const { day } = useParams();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const panelsRef = useRef(null);

  useEffect(() => {
    const fetchLesson = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await api.getLesson(day);
        setLesson(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLesson();
  }, [day]);

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
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

  return (
    <div className="min-h-screen bg-navy page-enter pb-32">
      <Navbar />

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8 text-center animate-slide-up">
          <span className="text-gold text-sm font-medium">Day {lesson.day}</span>
          <h1 className="text-2xl sm:text-3xl font-bold mt-1">{lesson.title}</h1>
          <Link to="/dashboard" className="text-gray-500 hover:text-gold text-sm mt-2 inline-block">
            ← Back to Dashboard
          </Link>
        </div>

        <div ref={panelsRef} className="space-y-6">
          {lesson.pages
            .sort((a, b) => a.pageNumber - b.pageNumber)
            .map((page, index) => (
              <article
                key={page.pageNumber}
                className={`webtoon-panel p-8 sm:p-10 animate-slide-up ${
                  index % 2 === 1 ? 'webtoon-panel-alt' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-3 right-4 text-gray-400 text-xs font-medium">
                  {page.pageNumber} / {lesson.pages.length}
                </div>

                <div className="text-center mb-6 pt-4">
                  <p className="font-korean text-4xl sm:text-5xl text-gray-900 font-semibold leading-relaxed">
                    {page.koreanText}
                  </p>
                  <p className="text-gray-500 text-lg mt-3 italic">{page.romanization}</p>
                </div>

                <div className="border-t-2 border-gray-200 pt-5">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {page.explanation}
                  </p>
                </div>
              </article>
            ))}
        </div>
      </main>

      <AiChat lessonDay={parseInt(day, 10)} />
    </div>
  );
}
