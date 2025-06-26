import React, { useState } from 'react';

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Video Scene Classification System',
      description: 'Full-stack AI-powered app for intelligent video scene classification and natural language search. React frontend, Flask backend, OpenCV, CLIP, Sentence Transformers, RESTful APIs.',
      image: '🎬',
      category: 'fullstack',
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Python (Flask)', 'OpenCV', 'CLIP', 'Sentence Transformers', 'RESTful APIs'],
      githubUrl: 'https://github.com/RishabThapliyal/Video-Scene-Classification-System',
      featured: true
    },
    {
      id: 2,
      title: 'Diabetes Prediction System',
      description: 'Predictive system using SVM for diabetes risk assessment. Includes data preprocessing, model training, and evaluation. Achieved 84.4% accuracy on test data.',
      image: '🩺',
      category: 'machinelearning',
      technologies: ['Python', 'SVM', 'Predictive Modeling', 'Data Preprocessing', 'Model Evaluation'],
      githubUrl: 'https://github.com/RishabThapliyal/Diabetes-Prediction-System',
      featured: true
    },
    {
      id: 3,
      title: 'Spam Mail Prediction',
      description: 'ML model to classify emails as spam or ham using Logistic Regression, TF-IDF, and label encoding. Achieved 97%+ accuracy.',
      image: '📧',
      category: 'machinelearning',
      technologies: ['Python', 'Logistic Regression', 'NLP', 'TF-IDF', 'Feature Engineering'],
      githubUrl: 'https://github.com/RishabThapliyal/Spam-Mail-Prediction-',
      featured: false
    },
    {
      id: 4,
      title: 'Snake Game',
      description: 'Classic Snake game built with HTML, CSS, and JavaScript. Features collision detection, score tracking, audio feedback, and responsive UI.',
      image: '🐍',
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'UI Design', 'Game Development'],
      githubUrl: 'https://github.com/RishabThapliyal/Snake-Game',
      featured: false
    },
    {
      id: 5,
      title: 'Spell Corrector',
      description: 'Python tool with Tkinter GUI and TextBlob for spell checking and correction. User-friendly interface for text input and correction.',
      image: '🔤',
      category: 'python',
      technologies: ['Python', 'Tkinter', 'TextBlob', 'Spell Checking', 'GUI Development'],
      githubUrl: 'https://github.com/RishabThapliyal/Spell-Corrector-Using-Python',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'machinelearning', label: 'Machine Learning' },
    { id: 'python', label: 'Python' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My Projects
          </h2>
          <div className={`w-24 h-1 bg-primary-600 mx-auto rounded-full ${
            darkMode ? 'bg-primary-400' : 'bg-primary-600'
          }`}></div>
          <p className={`text-lg mt-6 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are some of the projects I've worked on. Each project represents 
            a unique challenge and learning experience in my development journey.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-primary-500' 
                  : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-2xl border border-gray-200 hover:border-primary-500'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className={`h-48 flex items-center justify-center text-6xl transition-transform duration-300 group-hover:scale-110 ${
                darkMode ? 'bg-gray-900' : 'bg-gray-100'
              }`}>
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className={`px-2 py-1 text-xs font-medium rounded-full animate-pulse ${
                      darkMode 
                        ? 'bg-yellow-900 text-yellow-200' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      Featured
                    </span>
                  )}
                </div>

                <p className={`text-sm leading-relaxed mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 text-xs font-medium rounded transition-all duration-300 hover:scale-105 ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm px-4 py-2 transform hover:scale-105 transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up">
          <p className={`text-lg mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Interested in working together? Let's discuss your project!
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 