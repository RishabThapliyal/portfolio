import React from 'react';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML5 & CSS3', level: 90, icon: '🌐' },
        { name: 'JavaScript (ES6+)', level: 85, icon: '🟨' },
        { name: 'React.js', level: 80, icon: '⚛️' },
        { name: 'Bootstrap', level: 85, icon: '🎨' },
        { name: 'Tailwind CSS', level: 75, icon: '💨' },
        { name: 'Responsive Design', level: 90, icon: '📱' },
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 70, icon: '🟢' },
        { name: 'Express.js', level: 65, icon: '🚀' },
        { name: 'Python', level: 75, icon: '🐍' },
        { name: 'MongoDB', level: 70, icon: '🍃' },
        { name: 'MySQL', level: 75, icon: '🐬' },
        { name: 'RESTful APIs', level: 80, icon: '🔗' },
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 85, icon: '📝' },
        { name: 'VS Code', level: 90, icon: '💻' },
        { name: 'Postman', level: 75, icon: '📮' },
        { name: 'Figma', level: 60, icon: '🎨' },
        { name: 'Netlify', level: 70, icon: '☁️' },
        { name: 'Heroku', level: 65, icon: '🚀' },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Technologies
          </h2>
          <div className={`w-24 h-1 bg-primary-600 mx-auto rounded-full ${
            darkMode ? 'bg-primary-400' : 'bg-primary-600'
          }`}></div>
          <p className={`text-lg mt-6 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I work with a variety of technologies to create amazing web experiences. 
            Here are some of the tools and technologies I use regularly.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <h3 className={`text-2xl font-semibold mb-8 text-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                      darkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-primary-500' 
                        : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200 hover:border-primary-500'
                    }`}
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3 animate-pulse">{skill.icon}</span>
                      <h4 className={`text-lg font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {skill.name}
                      </h4>
                    </div>
                    
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                          Proficiency
                        </span>
                        <span className={darkMode ? 'text-primary-400' : 'text-primary-600'}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`w-full h-2 rounded-full overflow-hidden ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                            darkMode ? 'bg-primary-400' : 'bg-primary-600'
                          }`}
                          style={{ 
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${darkMode ? '#60a5fa' : '#3b82f6'} 0%, ${darkMode ? '#a78bfa' : '#8b5cf6'} 100%)`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 animate-slide-up">
          <h3 className={`text-2xl font-semibold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Other Skills & Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Problem Solving', 'Data Structures', 'Algorithms', 'Object-Oriented Programming',
              'Database Design', 'API Integration', 'Version Control', 'Debugging',
              'Code Review', 'Documentation', 'Team Collaboration', 'Agile Methodology',
              'Performance Optimization', 'Cross-browser Compatibility', 'Mobile-first Design'
            ].map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 