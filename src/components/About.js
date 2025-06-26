import React from 'react';

const About = ({ darkMode }) => {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '12+' },
    { label: 'Happy Clients', value: '8+' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 bg-primary-600 mx-auto rounded-full ${
            darkMode ? 'bg-primary-400' : 'bg-primary-600'
          }`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className={`relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl ${
              darkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <img
                src={process.env.PUBLIC_URL + '/mypic.jpg'}
                alt="Rishab Thapliyal"
                className="w-full h-full object-cover object-center rounded-2xl"
                style={{ minHeight: '100%', minWidth: '100%' }}
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h3 className={`text-2xl font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Software Engineer & Full Stack Developer
              </h3>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm a passionate software engineer with expertise in full-stack development, 
                specializing in modern web technologies. I love turning complex problems into 
                simple, beautiful, and intuitive solutions that users love to interact with.
              </p>
            </div>

            <div>
              <h4 className={`text-xl font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                What I Do
              </h4>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I develop end-to-end web applications, from concept to deployment. My expertise 
                includes frontend frameworks, backend development, database design, and cloud 
                services. I focus on creating scalable, maintainable, and user-friendly applications.
              </p>
            </div>

            <div>
              <h4 className={`text-xl font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                My Approach
              </h4>
              <ul className={`space-y-2 text-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  Clean, maintainable, and scalable code
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  User-centered design and experience
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  Performance optimization and best practices
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  Continuous learning and innovation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                  darkMode ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-medium ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 