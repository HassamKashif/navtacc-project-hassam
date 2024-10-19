import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    setUser({ username: null, email: null, token: null });
    navigate('/login');
  };

  return (
    <>
      <header className="bg-gray-800 shadow-lg p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center text-white">
              <img src="https://w7.pngwing.com/pngs/1008/641/png-transparent-computer-icons-action-item-task-clean-miscellaneous-angle-text.png" className='w-10 mix-blend-color-burn' alt="" />
              <span className="ml-3 text-2xl font-bold w-full">Task Manager</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="relative flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-blue-400 transition duration-300'
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-blue-400 transition duration-300'
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-blue-400 transition duration-300'
              }
            >
              Contact
            </NavLink>

            {user.email && (
              <>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-blue-400 transition duration-300'
                  }
                >
                  Profile
                </NavLink>

                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-blue-400 transition duration-300'
                  }
                >
                  Dashboard
                </NavLink>
              </>
            )}
          </nav>

          <div className="flex items-center mt-4 md:mt-0">
            {!user.email ? (
              <button
                onClick={() => navigate('/login')}
                className="text-blue-400 border border-blue-400 hover:bg-blue-500 hover:text-gray-800 px-4 py-2 rounded-md transition duration-300 shadow-md"
              >
                Login
              </button>
            ) : (
              <button
                onClick={logout}
                className="text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md transition duration-300 shadow-md"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
