import React, { useState } from 'react';

const About = ({ darkMode }) => {
  const [activeCard, setActiveCard] = useState(null);

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: '🚀' },
    { label: 'Technologies Mastered', value: '15+', icon: '⚡' },
    { label: 'Academic Excellence', value: '8.5+', icon: '🏆' },
    { label: 'Problem Solving', value: '100%', icon: '💡' },
  ];

  const education = [
    
      {
        year: '2021 - 2025',
        degree: 'B.Tech. - Computer Science & Engineering',
        institution: 'Graphic Era Hill University, Dehradun',
        details: 'CGPA: 8.15/10 • Specialized in Software Engineering and Machine Learning',
        achievements: ['Strong academic performance with focus on practical learning', 'Participated in coding contests and tech events at university level', 'Worked on 5+ academic and personal technical projects']
      },
      {
        year: '2020 - 2021',
        degree: 'Higher Secondary Education (12th)',
        institution: 'Shri Guru Ram Rai Public School, Bindal, Dehradun',
        details: 'CBSE Board • Percentage: 86.50/100 • Science Stream with Mathematics',
        achievements: ['Scored well in Computer Science with strong conceptual understanding', 'Active participant in Science & IT Club activities', 'Took part in inter-school tech and science competitions']
      },
      {
        year: '2018 - 2019',
        degree: 'Secondary Education (10th)',
        institution: 'Shri Guru Ram Rai Public School, Bindal, Dehradun',
        details: 'CBSE Board • Percentage: 80/100 • Strong foundation in core subjects',
        achievements: ['Consistent academic performance', 'Active participation in school activities', 'Developed strong analytical skills']
      }
    
    
  ];

  const skills = [
    { category: 'Programming Languages', items: ['Python', 'JavaScript', 'Java', 'C++', 'HTML/CSS'] },
    { category: 'Frameworks & Libraries', items: ['React.js', 'Node.js', 'Flask', 'Bootstrap', 'Tailwind CSS'] },
    { category: 'Databases & Tools', items: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'VS Code'] },
    { category: 'Machine Learning', items: ['Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'NLP'] }
  ];

  const achievements = [
    'Developed AI-powered Video Scene Classification System with 95% accuracy',
    'Created Diabetes Prediction System achieving 84.4% accuracy using SVM',
    'Built Spam Mail Prediction model with 97%+ classification accuracy',
    'Completed 10+ projects showcasing full-stack development skills',
    'Maintained 8.5+ CGPA throughout academic career',
    'Active contributor to open-source projects on GitHub'
  ];

  return (
    <section id="about" className="section-padding gradient-bg">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className={`text-lg font-medium ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              My Story
            </span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A passionate Computer Science graduate with expertise in full-stack development and machine learning. 
            Committed to creating innovative solutions that make a real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image & Personal Info */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className={`relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <img
                  src={process.env.PUBLIC_URL + '/mypic.jpg'}
                  alt="Rishab Thapliyal"
                  className="w-full h-full object-cover object-center rounded-3xl hover:scale-110 transition-transform duration-500"
                  style={{ minHeight: '100%', minWidth: '100%' }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Personal Details */}
            <div className={`p-6 rounded-2xl glass-effect ${
              darkMode ? 'bg-gray-800/30' : 'bg-white/30'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Personal Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <strong>Name:</strong> Rishab Thapliyal
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <strong>Email:</strong> rishabthapliyal04@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <strong>Phone:</strong> +91 84490 12345
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <strong>Location:</strong> Dehradun, Uttarakhand, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className={`p-6 rounded-2xl glass-effect ${
              darkMode ? 'bg-gray-800/30' : 'bg-white/30'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Software Engineer & Full Stack Developer
              </h3>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm a passionate Computer Science graduate with a strong foundation in software development 
                and machine learning. I specialize in creating innovative web solutions that combine cutting-edge 
                technologies with user-centered design principles.
              </p>
            </div>

            {/* Key Skills */}
            <div className={`p-6 rounded-2xl glass-effect ${
              darkMode ? 'bg-gray-800/30' : 'bg-white/30'
            }`}>
              <h4 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Technical Expertise
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="space-y-2">
                    <h5 className={`font-semibold text-sm ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {skillGroup.category}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-2 py-1 text-xs rounded-full ${
                            darkMode 
                              ? 'bg-gray-700/50 text-gray-300' 
                              : 'bg-gray-100/50 text-gray-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className={`text-4xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Educational{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My academic path from school to university, building a strong foundation in computer science and technology.
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
              <div className="w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-30 animate-pulse"></div>
            </div>
            
            <div className="space-y-16">
              {education.map((edu, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Interactive Timeline Dot */}
                  <div 
                    className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 z-10 shadow-xl cursor-pointer hover:scale-125 transition-all duration-300 group/dot ${
                      activeCard === index ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''
                    }`}
                    onClick={() => setActiveCard(activeCard === index ? null : index)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-50"></div>
                    {/* Click indicator */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/dot:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {activeCard === index ? 'Hide details' : 'Click to view'}
                    </div>
                  </div>
                  
                  {/* Content Card with Enhanced Design */}
                  <div className={`w-5/12 relative rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500 ${
                    index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                  } ${activeCard === index ? 'scale-105 ring-2 ring-yellow-400' : ''}`}>
                    
                    {/* Background Image with Subtle Fade */}
                    <div className="absolute inset-0">
                      <img
                        src={process.env.PUBLIC_URL + (index === 0 ? '/Graphic Era University.jpg' : '/shri-guru-ram-rai-public-school.jpg')}
                        alt={edu.institution}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{
                          maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
                          WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
                        }}
                      />
                      {/* Subtle Fade Overlay - No right fade */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                      {/* Elegant Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                      {/* Hover Overlay - Darker for better text visibility */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-2 left-4 z-20">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {edu.year}
                      </div>
                    </div>

                    {/* Institution Badge */}
                    <div className="absolute top-2 right-4 z-20">
                      <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-medium">
                        {index === 0 ? 'University' : 'School'}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 text-white pt-16">
                      <h4 className="text-2xl font-bold mb-3 text-white drop-shadow-2xl group-hover:text-white transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      
                      <div className="text-lg font-semibold mb-4 text-white drop-shadow-2xl group-hover:text-white transition-colors duration-300">
                        {edu.institution}
                      </div>
                      
                      <p className="text-sm mb-4 text-gray-100 drop-shadow-xl group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {edu.details}
                      </p>
                      
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start space-x-3 text-gray-100 drop-shadow-xl group-hover:text-white transition-colors duration-300">
                            <span className="text-green-300 mt-1 drop-shadow-2xl group-hover:text-green-200 transition-colors duration-300">✓</span>
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Key Achievements
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl glass-effect ${
                  darkMode ? 'bg-gray-800/30' : 'bg-white/30'
                } hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl glass-effect transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-800/30' : 'bg-white/30'
                }`}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-2xl md:text-3xl font-bold mb-2 gradient-text`}>
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