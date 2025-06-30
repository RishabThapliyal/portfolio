import React, { useState } from 'react';

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Video Scene Classification System',
      description: 'Revolutionary AI-powered application that intelligently classifies video scenes and enables natural language search. Built with cutting-edge technologies including CLIP and Sentence Transformers for advanced computer vision and NLP capabilities.',
      longDescription: 'A full-stack application that combines computer vision and natural language processing to automatically classify video scenes and allow users to search through video content using natural language queries. Features real-time processing, RESTful APIs, and a modern React frontend.',
      image: '🎬',
      category: 'fullstack',
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Python (Flask)', 'OpenCV', 'CLIP', 'Sentence Transformers', 'RESTful APIs'],
      githubUrl: 'https://github.com/RishabThapliyal/Video-Scene-Classification-System',
      featured: true,
      difficulty: 'Advanced',
      impact: 'High Impact',
      duration: '3 months'
    },
    {
      id: 2,
      title: 'Diabetes Prediction System',
      description: 'Machine learning system that predicts diabetes risk with 84.4% accuracy using Support Vector Machines. Includes comprehensive data preprocessing and model evaluation pipeline.',
      longDescription: 'A comprehensive machine learning solution that analyzes patient data to predict diabetes risk. Features advanced data preprocessing, feature engineering, and model optimization techniques. Achieved high accuracy through careful hyperparameter tuning and cross-validation.',
      image: '🩺',
      category: 'machinelearning',
      technologies: ['Python', 'SVM', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
      githubUrl: 'https://github.com/RishabThapliyal/Diabetes-Prediction-System',
      featured: true,
      difficulty: 'Intermediate',
      impact: 'Healthcare',
      duration: '2 months'
    },
    {
      id: 3,
      title: 'Spam Mail Prediction',
      description: 'Advanced email classification system using Logistic Regression and TF-IDF vectorization. Achieved 97%+ accuracy in distinguishing spam from legitimate emails.',
      longDescription: 'A natural language processing project that uses machine learning to classify emails as spam or legitimate. Implements TF-IDF vectorization, feature engineering, and logistic regression for high-accuracy classification.',
      image: '📧',
      category: 'machinelearning',
      technologies: ['Python', 'Logistic Regression', 'NLP', 'TF-IDF', 'Feature Engineering', 'Scikit-learn', 'NLTK'],
      githubUrl: 'https://github.com/RishabThapliyal/Spam-Mail-Prediction-',
      featured: false,
      difficulty: 'Intermediate',
      impact: 'Security',
      duration: '1.5 months'
    },
    {
      id: 4,
      title: 'Snake Game',
      description: 'Classic Snake game reimagined with modern web technologies. Features smooth animations, collision detection, score tracking, and responsive design.',
      longDescription: 'A modern implementation of the classic Snake game using vanilla JavaScript. Includes advanced features like smooth animations, sound effects, high score tracking, and responsive design that works across all devices.',
      image: '🐍',
      category: 'frontend',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'Local Storage', 'Responsive Design', 'Game Development'],
      githubUrl: 'https://github.com/RishabThapliyal/Snake-Game',
      featured: false,
      difficulty: 'Beginner',
      impact: 'Entertainment',
      duration: '1 month'
    },
    {
      id: 5,
      title: 'Spell Corrector',
      description: 'Intelligent spell checking tool with Tkinter GUI and TextBlob integration. Provides real-time text correction and suggestions.',
      longDescription: 'A user-friendly desktop application that helps users correct spelling mistakes in real-time. Features an intuitive GUI built with Tkinter and leverages TextBlob for accurate spell checking and correction.',
      image: '🔤',
      category: 'python',
      technologies: ['Python', 'Tkinter', 'TextBlob', 'NLP', 'GUI Development', 'Text Processing'],
      githubUrl: 'https://github.com/RishabThapliyal/Spell-Corrector-Using-Python',
      featured: false,
      difficulty: 'Beginner',
      impact: 'Productivity',
      duration: '2 weeks'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'machinelearning', label: 'Machine Learning', count: projects.filter(p => p.category === 'machinelearning').length },
    { id: 'python', label: 'Python', count: projects.filter(p => p.category === 'python').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Advanced': return 'from-red-500 to-pink-500';
      case 'Intermediate': return 'from-yellow-500 to-orange-500';
      case 'Beginner': return 'from-green-500 to-blue-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getImpactColor = (impact) => {
    switch(impact) {
      case 'High Impact': return 'from-purple-500 to-pink-500';
      case 'Healthcare': return 'from-green-500 to-teal-500';
      case 'Security': return 'from-red-500 to-orange-500';
      case 'Entertainment': return 'from-blue-500 to-purple-500';
      case 'Productivity': return 'from-indigo-500 to-blue-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="projects" className="section-padding gradient-bg">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className={`text-responsive-sm font-medium ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              My Work
            </span>
          </div>
          
          <h2 className={`text-responsive-3xl font-bold mb-4 sm:mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6 sm:mb-8"></div>
          
          <p className={`text-responsive-base max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are some of the projects I've worked on. Each project represents 
            a unique challenge and learning experience in my development journey.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-2xl text-responsive-xs font-semibold transition-all duration-300 hover:scale-105 focus-ring ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25'
                  : darkMode
                    ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white glass-effect'
                    : 'bg-white/50 text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 glass-effect'
              }`}
            >
              {filter.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-responsive-xs ${
                activeFilter === filter.id
                  ? 'bg-white/20'
                  : darkMode ? 'bg-gray-700/50' : 'bg-gray-200/50'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-responsive">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group ${
                darkMode 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-blue-500/50' 
                  : 'bg-white/50 hover:bg-white/70 shadow-xl hover:shadow-2xl border border-gray-200/50 hover:border-blue-500/50'
              } glass-effect`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className={`relative h-40 sm:h-48 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl transition-all duration-500 group-hover:scale-110 ${
                darkMode ? 'bg-gray-900/50' : 'bg-gray-100/50'
              }`}>
                <div className="relative z-10">{project.image}</div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <span className="px-2 sm:px-3 py-1 text-responsive-xs font-bold rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white animate-pulse">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-responsive-base">
                {/* Project Header */}
                <div className="mb-4">
                  <h3 className={`text-responsive-lg font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-responsive-sm leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                </div>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-2 py-1 text-responsive-xs rounded-full bg-gradient-to-r ${getDifficultyColor(project.difficulty)} text-white font-semibold`}>
                    {project.difficulty}
                  </span>
                  <span className={`px-2 py-1 text-responsive-xs rounded-full bg-gradient-to-r ${getImpactColor(project.impact)} text-white font-semibold`}>
                    {project.impact}
                  </span>
                  <span className={`px-2 py-1 text-responsive-xs rounded-full ${
                    darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100/50 text-gray-700'
                  }`}>
                    {project.duration}
                  </span>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className={`text-responsive-sm font-semibold mb-2 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 text-responsive-xs rounded-full ${
                          darkMode 
                            ? 'bg-gray-700/50 text-gray-300' 
                            : 'bg-gray-100/50 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={`px-2 py-1 text-responsive-xs rounded-full ${
                        darkMode 
                          ? 'bg-gray-700/50 text-gray-300' 
                          : 'bg-gray-100/50 text-gray-700'
                      }`}>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-center group"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View Code</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-slide-up">
          <div className={`max-w-2xl mx-auto p-8 rounded-3xl glass-effect ${
            darkMode ? 'bg-gray-800/30' : 'bg-white/30'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to work together?
            </h3>
            <p className={`text-lg mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's discuss your project and bring your ideas to life!
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary text-lg px-8 py-4 group"
            >
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Start a Conversation</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 