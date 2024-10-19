import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="text-gray-600 body-font bg-gray-300">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full mb-10">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About Our Task Management App
          </h1>
          <p className="mb-8 leading-relaxed">
            Our task management app is designed to help you stay organized and productive as you work towards your goals.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="lg:w-1/2 md:w-2/3 w-full object-cover object-center rounded"
            alt="Task Management"
            src="https://imgcdn.stablediffusionweb.com/2024/3/9/5b07779d-037a-4561-80cd-44f74cd04388.jpg"
          />
        </div>
        <div className="lg:w-2/3 w-full mt-10 text-center">
          <h2 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">
            Why Choose Us?
          </h2>
          <p className="mb-8 leading-relaxed">
            Our app is built with user experience in mind, offering a clean interface for easy task management.
          </p>
          <div className="flex justify-center">
            <Link to="/login" className="text-white bg-blue-600 border border-blue-700 hover:bg-blue-700 rounded-lg py-2 px-8 font-bold focus:outline-none transition-colors duration-200">
              Sign In
            </Link>
            <Link to="/contact" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
