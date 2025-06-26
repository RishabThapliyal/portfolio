import React, { useState } from 'react';

const Contact = ({ darkMode }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // For now, we'll use a simple approach that opens email client
      // In a real implementation, you'd integrate with a backend service
      const subject = `Portfolio Contact from ${form.name}`;
      const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
      
      // Open email client with pre-filled message
      window.open(`mailto:rishabthapliyal04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Contact Me
          </h2>
          <div className={`w-24 h-1 bg-primary-600 mx-auto rounded-full ${
            darkMode ? 'bg-primary-400' : 'bg-primary-600'
          }`}></div>
          <p className={`text-lg mt-6 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have a question, proposal, or just want to say hello? Fill out the form below or contact me directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Get In Touch
              </h3>
              <p className={`text-lg leading-relaxed mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className={`flex items-center p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}>
                <div className={`p-3 rounded-full mr-4 ${
                  darkMode ? 'bg-primary-600' : 'bg-primary-500'
                }`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Email
                  </h4>
                  <a 
                    href="mailto:rishabthapliyal04@gmail.com"
                    className={`text-primary-600 hover:text-primary-500 transition-colors duration-200 ${
                      darkMode ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-500'
                    }`}
                  >
                    rishabthapliyal04@gmail.com
                  </a>
                  <br />
                  <a 
                    href="mailto:rishab.engineer04@gmail.com"
                    className={`text-primary-600 hover:text-primary-500 transition-colors duration-200 ${
                      darkMode ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-500'
                    }`}
                  >
                    rishab.engineer04@gmail.com
                  </a>
                </div>
              </div>

              <div className={`flex items-center p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}>
                <div className={`p-3 rounded-full mr-4 ${
                  darkMode ? 'bg-primary-600' : 'bg-primary-500'
                }`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Phone
                  </h4>
                  <a 
                    href="tel:+919119094811"
                    className={`text-primary-600 hover:text-primary-500 transition-colors duration-200 ${
                      darkMode ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-500'
                    }`}
                  >
                    +91 9119094811
                  </a>
                </div>
              </div>

              <div className={`flex items-center p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}>
                <div className={`p-3 rounded-full mr-4 ${
                  darkMode ? 'bg-primary-600' : 'bg-primary-500'
                }`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Location
                  </h4>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Dehradun, Uttarakhand, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className={`p-8 rounded-xl text-center text-lg font-semibold animate-slide-up ${
                darkMode ? 'bg-gray-800 text-primary-400' : 'bg-green-50 text-primary-600'
              }`}>
                <div className="text-4xl mb-4">✅</div>
                Thank you for reaching out! I'll get back to you soon.
                <button
                  onClick={() => setSubmitted(false)}
                  className="block mt-4 text-sm underline hover:no-underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={`space-y-6 p-8 rounded-xl shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all duration-200"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary w-full text-lg py-3 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 