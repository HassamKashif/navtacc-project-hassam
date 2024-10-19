import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-300 contact-section h-screen flex items-center justify-center" id="contact-section">
      <div className="container mx-auto">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Reach Out to Us</h1>
            <p className="text-lg text-gray-700">We're here to help! Please fill out the form below, and we'll get back to you shortly.</p>
          </div>
        </div>
        <div className="contact__form mx-auto mt-4 max-w-lg">
          <form action="">
            <div className="grid gap-4">
              <input 
                type="text" 
                placeholder="Your Full Name" 
                name="name" 
                className="w-full py-4 text-base text-gray-900 placeholder-gray-500 bg-white border-b-2 border-blue-600 rounded-sm focus:outline-none focus:ring-0 px-3" 
              />
              <input 
                type="email" 
                placeholder="Your Email Address" 
                name="email" 
                className="w-full py-4 text-base text-gray-900 placeholder-gray-500 bg-white border-b-2 border-blue-600 rounded-sm focus:outline-none focus:ring-0 px-3" 
              />
              <input 
                type="tel" 
                name="contact" 
                placeholder="Your Phone Number" 
                id="phone" 
                className="w-full py-4 text-base text-gray-900 placeholder-gray-500 bg-white border-b-2 border-blue-600 rounded-sm focus:outline-none focus:ring-0 px-3" 
              />
              <textarea 
                placeholder="Type your message here..." 
                name="Description" 
                className="w-full py-4 text-base text-gray-900 placeholder-gray-500 bg-white border-b-2 border-blue-600 rounded-sm focus:outline-none focus:ring-0 px-3" 
              />
              <input 
                type="submit" 
                name="submit" 
                value="Send Your Message" 
                className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-200 shadow-md" 
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
