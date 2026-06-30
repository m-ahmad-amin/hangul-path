import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-navy page-enter">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <header className="relative max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gold font-korean text-3xl font-bold">한</span>
          <span className="text-white font-semibold text-xl">Hangul Path</span>
        </div>
        <div className="flex gap-3">
          <Link to="/login" className="btn-secondary px-4 py-2 text-sm">
            Login
          </Link>
          <Link to="/register" className="btn-primary px-4 py-2 text-sm">
            Get Started
          </Link>
        </div>
      </header>

      <main className="relative max-w-6xl mx-auto px-4 pt-16 pb-24">
        <section className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
            30-Day Korean Course
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Learn Korean in{' '}
            <span className="text-gold">30 Days</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10">
            A structured path from Hangul basics to everyday conversation. One lesson
            unlocks each day | Read, practice, and quiz your way to fluency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-primary text-center">
              Start Learning Free
            </Link>
            <Link to="/login" className="btn-secondary text-center">
              I Have an Account
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: 'Daily Lessons',
              desc: 'Webtoon-style panels make each day\'s content engaging and easy to absorb.',
              icon: '📖',
            },
            {
              title: 'Progressive Unlock',
              desc: 'One lesson per day keeps you focused. Quizzes unlock the next day to reinforce learning.',
              icon: '🔓',
            },
            {
              title: 'AI Tutor',
              desc: 'Ask questions about today\'s lesson with a built-in Korean language assistant.',
              icon: '💬',
            },
          ].map((feature) => (
            <div key={feature.title} className="card hover:border-gold/30 transition-colors">
              <span className="text-2xl mb-4 block">{feature.icon}</span>
              <h3 className="text-lg font-semibold mb-2 text-gold">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </section>

        <section className="card text-center py-12">
          <p className="font-korean text-4xl text-gold mb-4">한글을 배워봐요</p>
          <p className="text-gray-400 mb-6">Let&apos;s learn Hangul together.</p>
          <Link to="/register" className="btn-primary inline-block">
            Begin Your Journey
          </Link>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>Hangul Path &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
