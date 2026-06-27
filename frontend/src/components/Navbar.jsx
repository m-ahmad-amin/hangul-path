import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="border-b border-gray-800 bg-navy/95 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to={user ? '/dashboard' : '/'} className="flex items-center gap-2 group">
          <span className="text-gold font-korean text-2xl font-bold">한</span>
          <span className="text-white font-semibold text-lg group-hover:text-gold transition-colors">
            Hangul Path
          </span>
        </Link>

        {user && (
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="text-gray-300 hover:text-gold text-sm font-medium transition-colors hidden sm:block"
            >
              Dashboard
            </Link>
            <Link
              to="/progress"
              className="text-gray-300 hover:text-gold text-sm font-medium transition-colors hidden sm:block"
            >
              Progress
            </Link>
            {user.role === 'admin' && (
              <Link
                to="/admin"
                className="text-gray-300 hover:text-gold text-sm font-medium transition-colors hidden sm:block"
              >
                Admin
              </Link>
            )}
            <span className="text-gray-500 text-sm hidden md:block">{user.name}</span>
            <button
              onClick={handleLogout}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
