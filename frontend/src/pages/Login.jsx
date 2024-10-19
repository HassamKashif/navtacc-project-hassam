import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const [info, setInfo] = useState({
    username: '',
    password: ''
  });
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/api/auth/login', info)
      .then((response) => {
        alert(response.data.message);
        const { username, email } = response.data.loginUser;
        const { token } = response.data;
        window.localStorage.setItem('username', username);
        window.localStorage.setItem('email', email);
        window.localStorage.setItem('token', token);
        setUser({ username, email, token });
        navigate('/');
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <section className="bg-gradient-to-br from-green-500 to-blue-500 text-white body-font min-h-screen flex items-center justify-center">
        <div className="container px-5 py-12 mx-auto">
          <form onSubmit={handleLogin} className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mx-auto w-full shadow-xl">
            <h2 className="text-blue-500 text-2xl font-bold title-font mb-5 text-center">Welcome Back</h2>

            <div className="relative mb-4">
              <label htmlFor="username" className="leading-7 text-sm text-gray-600">Username</label>
              <input
                value={info.username}
                onChange={handleInfo}
                type="text"
                id="username"
                name="username"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
              <input
                value={info.password}
                onChange={handleInfo}
                type="password"
                id="password"
                name="password"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="text-center">
              <button className="text-white bg-gradient-to-r from-green-400 to-blue-400 hover:from-blue-400 hover:to-green-400 rounded-lg py-2 px-8 font-bold focus:outline-none transition-colors duration-300">
                Login
              </button>
            </div>

            <div className="text-center mt-4">
              <Link to="/register" className="text-blue-500 hover:underline">Don't have an account? Register</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
