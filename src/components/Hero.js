import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { translations } from '../translations';

const Hero = ({ darkMode, language }) => {
  const [isTyping, setIsTyping] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const t = translations[language];

  const texts = useMemo(() => [
    language === 'english' ? 'Full Stack Developer' : 'फुल-स्टैक डेवलपर',
    language === 'english' ? 'Software Engineer' : 'सॉफ्टवेयर इंजीनियर',
    language === 'english' ? 'Machine Learning Enthusiast' : 'मशीन लर्निंग उत्साही',
    language === 'english' ? 'Problem Solver' : 'समस्या समाधानकर्ता',
    language === 'english' ? 'Creative Thinker' : 'रचनात्मक विचारक'
  ], [language]);

  const nextText = useCallback(() => {
    setTextIndex((prev) => (prev + 1) % texts.length);
  }, [texts.length]);

  useEffect(() => {
    setIsTyping(true);
    const interval = setInterval(nextText, 3000);
    return () => clearInterval(interval);
  }, [nextText]);

  useEffect(() => {
    let currentIndex = 0;
    const text = texts[textIndex];
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setCurrentText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [textIndex, texts]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Rishab_Resume.pdf';
    link.download = 'Rishab_Thapliyal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      {/* Animated Background - hidden on mobile */}
      <div className="absolute inset-0 gradient-bg hidden md:block pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient pointer-events-none"></div>
        {/* Floating Particles */}
        <div className="particles pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 3 + 3}s`
              }}
            ></div>
          ))}
        </div>
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float pointer-events-none" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-full blur-xl animate-float pointer-events-none" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-responsive-base animate-slide-up text-center lg:text-left relative z-10">
            <div className="space-responsive-sm">
              {/* Greeting */}
              <div className="flex items-center justify-center lg:justify-start space-x-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <span className={`text-responsive-sm font-medium ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {t.welcome}
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-responsive-sm">
                <h1 className={`text-responsive-4xl font-bold leading-tight ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {t.greeting}{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-extrabold">
                    Rishab Thapliyal
                  </span>
                </h1>
                
                {/* Animated Role */}
                <div className="h-16 sm:h-20 flex items-center justify-center lg:justify-start">
                  <h2 className={`text-responsive-lg font-semibold ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {language === 'english' ? "I'm a " : "मैं एक "}
                    <span className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold inline-block ${
                      isTyping ? 'typing-animation' : ''
                    }`} style={{ minWidth: '200px', sm: '250px', md: '300px' }}>
                      {currentText}
                      {isTyping && <span className="animate-pulse">|</span>}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className={`text-responsive-base leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } animate-slide-up`} style={{ animationDelay: '0.4s' }}>
              {t.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 py-4 sm:py-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className={`text-center p-responsive-sm rounded-2xl glass-effect ${
                darkMode ? 'bg-gray-800/50' : 'bg-white/50'
              }`}>
                <div className="text-responsive-lg font-bold gradient-text">10+</div>
                <div className={`text-responsive-xs ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{t.projects}</div>
              </div>
              <div className={`text-center p-responsive-sm rounded-2xl glass-effect ${
                darkMode ? 'bg-gray-800/50' : 'bg-white/50'
              }`}>
                <div className="text-responsive-lg font-bold gradient-text">15+</div>
                <div className={`text-responsive-xs ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{t.technologies}</div>
              </div>
              <div className={`text-center p-responsive-sm rounded-2xl glass-effect ${
                darkMode ? 'bg-gray-800/50' : 'bg-white/50'
              }`}>
                <div className="text-responsive-lg font-bold gradient-text">100%</div>
                <div className={`text-responsive-xs ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{t.dedication}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex-responsive-col justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <button
                onClick={scrollToContact}
                className="btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10">{t.getInTouch}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <button
                onClick={downloadResume}
                className="btn-outline group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{t.downloadResume}</span>
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 animate-slide-up" style={{ animationDelay: '1s' }}>
              <a
                href="https://github.com/rishabthapliyal"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:rotate-3 glass-effect ${
                  darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-100/50'
                }`}
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rishab-thapliyal-b72514221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:rotate-3 glass-effect ${
                  darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-100/50'
                }`}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:rishabthapliyal04@gmail.com"
                className={`p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:rotate-3 glass-effect ${
                  darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-100/50'
                }`}
                aria-label="Email"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-16 pointer-events-none md:pointer-events-auto">
            <div className="relative group">
              {/* Main Circle */}
              <div className={`relative circle-responsive-base rounded-full ${
                darkMode 
                  ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600' 
                  : 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'
              } flex items-center justify-center animate-glow shadow-2xl transition-all duration-1000 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] group-hover:animate-glow-intense`}>
                
                {/* Rotating Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-rotate-slow opacity-75 group-hover:opacity-100 transition-opacity duration-800"></div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-1000 scale-0 group-hover:scale-150"></div>
                
                {/* Floating Particles on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-800">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full animate-ping"
                      style={{
                        left: `${50 + 40 * Math.cos(i * Math.PI / 4)}%`,
                        top: `${50 + 40 * Math.sin(i * Math.PI / 4)}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '3s'
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Energy Rings on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
                  <div className="absolute inset-0 rounded-full border-2 border-pink-400 animate-ping" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
                </div>
                
                {/* Inner Circle */}
                <div className={`relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center transition-all duration-1000
                  ${darkMode ? 'bg-gray-900' : 'bg-white'}
                  shadow-inner
                  group-hover:shadow-[inset_0_0_30px_rgba(59,130,246,0.3)] group-hover:scale-105
                  before:absolute before:inset-0 before:rounded-full before:z-0
                  before:bg-gradient-to-br before:from-blue-500/20 before:via-purple-500/20 before:to-pink-500/20
                  before:blur-md before:opacity-80 md:before:opacity-0
                `}>
                  {/* Profile Image Placeholder */}
                  <div className="text-center transition-all duration-1000 group-hover:scale-110 relative z-10">
                    <div className={`text-6xl sm:text-7xl md:text-8xl font-bold animate-bounce-slow transition-all duration-1000
                      group-hover:animate-spin group-hover:text-7xl sm:group-hover:text-8xl md:group-hover:text-9xl
                      ${darkMode ? 'text-white group-hover:text-blue-300' : 'text-gray-900 group-hover:text-blue-600'}
                    `} style={{ animationDuration: '4s' }}>
                      👨‍💻
                    </div>
                    {/* Always show text on mobile, hover reveal on desktop */}
                    <div className="overflow-hidden">
                      <p className={`text-sm sm:text-base md:text-lg mt-2 sm:mt-4 font-semibold transition-all duration-1000 transform
                        ${darkMode ? 'text-gray-300' : 'text-gray-600'}
                        md:group-hover:translate-y-0 md:group-hover:opacity-100
                        md:translate-y-4 md:opacity-0
                        translate-y-0 opacity-100
                      `} style={{ transitionDelay: '0.5s' }}>
                        {t.readyToBuild}
                      </p>
                      <p className={`text-xs sm:text-sm mt-1 sm:mt-2 transition-all duration-1000 transform
                        ${darkMode ? 'text-gray-400' : 'text-gray-500'}
                        md:group-hover:translate-y-0 md:group-hover:opacity-100
                        md:translate-y-4 md:opacity-0
                        translate-y-0 opacity-100
                      `} style={{ transitionDelay: '1s' }}>
                        {t.amazingThings}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements with Enhanced Hover Effects */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-float flex items-center justify-center text-lg sm:text-2xl transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-lg" style={{ animationDuration: '6s' }}>
                ⚡
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-float flex items-center justify-center text-base sm:text-xl transition-all duration-1000 group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-lg" style={{ animationDelay: '2s', animationDuration: '6s' }}>
                🚀
              </div>
              <div className="absolute top-1/2 -left-4 sm:-left-8 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-float flex items-center justify-center text-sm sm:text-lg transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-lg" style={{ animationDelay: '4s', animationDuration: '6s' }}>
                💡
              </div>
              
              {/* Additional Hover Elements */}
              <div className="absolute top-1/4 -right-6 sm:-right-12 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 flex items-center justify-center text-xs sm:text-sm transform scale-0 group-hover:scale-100">
                🔥
              </div>
              <div className="absolute bottom-1/4 -right-6 sm:-right-12 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 flex items-center justify-center text-xs sm:text-sm transform scale-0 group-hover:scale-100" style={{ transitionDelay: '0.5s' }}>
                ⭐
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-5 h-8 sm:w-6 sm:h-10 border-2 rounded-full flex justify-center ${
          darkMode ? 'border-gray-400' : 'border-gray-600'
        }`}>
          <div className={`w-1 h-2 sm:h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-1 sm:mt-2 animate-pulse`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 