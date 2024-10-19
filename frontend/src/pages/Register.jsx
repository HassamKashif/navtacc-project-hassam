import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [info, setInfo] = useState({
    username: '',
    email: '',
    contact: '',
    address: '',
    age: '',
    password: ''
  });

  const navigate = useNavigate();
  const handleInput = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
  
    const { username, email, contact, address, age, password } = info;
    if (!username || !email || !contact || !address || !age || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    axios.post('http://localhost:4000/api/auth/register', info)
      .then((response) => {
        alert('Successfully registered');
        navigate('/login');
      })
      .catch((err) => {
        console.log(err); 
        alert(err.response?.data?.message || 'Registration failed. Please try again.');
      });
  };
  

  return (
    <>
      <section className="bg-gradient-to-br from-blue-500 to-green-500 text-white body-font min-h-screen flex items-center justify-center">
        <div className="container px-5 py-12 mx-auto">
          <form onSubmit={handleRegister} className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mx-auto w-full shadow-xl">
            <h2 className="text-blue-500 text-2xl font-bold title-font mb-5 text-center">Create Your Account</h2>

            <div className="relative mb-4">
              <label htmlFor="username" className="leading-7 text-sm text-gray-600">Username</label>
              <input
                value={info.username}
                onChange={handleInput}
                type="text"
                id="username"
                name="username"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                value={info.email}
                onChange={handleInput}
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="contact" className="leading-7 text-sm text-gray-600">Contact</label>
              <input
                value={info.contact}
                onChange={handleInput}
                type="text"
                id="contact"
                name="contact"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
              <input
                value={info.address}
                onChange={handleInput}
                type="text"
                id="address"
                name="address"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="age" className="leading-7 text-sm text-gray-600">Age</label>
              <input
                value={info.age}
                onChange={handleInput}
                type="text"
                id="age"
                name="age"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
              <input
                value={info.password}
                onChange={handleInput}
                type="password"
                id="password"
                name="password"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="text-center">
              <button className="text-white bg-gradient-to-r from-green-400 to-blue-400 hover:from-blue-400 hover:to-green-400 rounded-lg py-2 px-8 font-bold focus:outline-none transition-colors duration-300">
                Sign Up
              </button>
            </div>

            <div className="text-center mt-4">
              <Link to="/login" className="text-blue-500 hover:underline">Already have an account? Log In</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
