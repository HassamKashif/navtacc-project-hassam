import React from 'react';

function Home() {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 py-16">
        {/* Image on top for small and medium screens */}
        <div className="w-full flex-shrink-0 mt-10 lg:mt-0 lg:w-1/2 order-1 lg:order-2">
          <img
            className="object-cover rounded-xl"
            src="https://img.freepik.com/free-vector/task-management-concept-illustration_114360-1189.jpg"
            alt="Task Management"
          />
        </div>
        
        {/* Text on bottom for small and medium screens */}
        <div className="lg:w-1/2 w-full lg:pr-10 order-2 lg:order-1">
          <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Manage Your Tasks Efficiently!</h1>
          <p className="mt-6 text-gray-500">
            Simplify your life by keeping track of your tasks with our intuitive task management app. 
            Organize, prioritize, and achieve your goals effortlessly. Let's get started on your journey to productivity!
          </p>
          <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:w-auto focus:outline-none">
            Get Started
          </button>
          <p className="mt-3 text-sm text-gray-400">No credit card required</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
