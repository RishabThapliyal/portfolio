import React, { useState, useEffect } from 'react';

const Header = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const navItems = [
    { name: language === 'english' ? 'Home' : 'होम', href: '#home' },
    { name: language === 'english' ? 'About' : 'मेरे बारे में', href: '#about' },
    { name: language === 'english' ? 'Skills' : 'कौशल', href: '#skills' },
    { name: language === 'english' ? 'Projects' : 'प्रोजेक्ट्स', href: '#projects' },
    { name: language === 'english' ? 'Contact' : 'संपर्क', href: '#contact' },
  ];

  // Searchable content with keywords and sections
  const searchableContent = [
    {
      section: 'home',
      href: '#home',
      title: language === 'english' ? 'Home' : 'होम',
      keywords: ['rishab', 'developer', 'software engineer', 'full stack', 'welcome', 'portfolio', 'hero', 'introduction', 'computer science', 'graduate', 'passionate', 'innovative', 'web solutions', 'applications', 'clean code', 'user experience', 'performance', 'optimization', 'ready', 'build', 'amazing', 'things']
    },
    {
      section: 'about',
      href: '#about',
      title: language === 'english' ? 'About' : 'मेरे बारे में',
      keywords: ['about', 'story', 'education', 'experience', 'background', 'personal', 'information', 'name', 'email', 'phone', 'location', 'software engineer', 'full stack developer', 'computer science', 'graduate', 'expertise', 'development', 'machine learning', 'innovative solutions', 'impact', 'foundation', 'specialize', 'web solutions', 'cutting edge', 'technologies', 'user centered', 'design principles', 'technical expertise', 'programming languages', 'frameworks', 'libraries', 'databases', 'tools', 'educational journey', 'key achievements', 'projects completed', 'technologies mastered', 'academic excellence', 'problem solving']
    },
    {
      section: 'skills',
      href: '#skills',
      title: language === 'english' ? 'Skills' : 'कौशल',
      keywords: ['skills', 'technologies', 'tools', 'programming', 'languages', 'frameworks', 'libraries', 'databases', 'frontend', 'backend', 'full stack', 'javascript', 'react', 'node.js', 'python', 'java', 'html', 'css', 'tailwind', 'mongodb', 'mysql', 'git', 'github', 'docker', 'aws', 'machine learning', 'ai', 'data science', 'algorithms', 'data structures', 'web development', 'mobile development', 'api', 'rest', 'graphql', 'testing', 'deployment', 'ci/cd', 'agile', 'scrum']
    },
    {
      section: 'projects',
      href: '#projects',
      title: language === 'english' ? 'Projects' : 'प्रोजेक्ट्स',
      keywords: ['projects', 'work', 'portfolio', 'applications', 'websites', 'ecommerce', 'blog', 'dashboard', 'chat', 'social media', 'weather', 'todo', 'calculator', 'game', 'api', 'frontend', 'full stack', 'machine learning', 'python', 'react', 'node.js', 'mongodb', 'mysql', 'tailwind', 'javascript', 'html', 'css', 'github', 'live', 'demo', 'features', 'technologies', 'description', 'view code', 'ready to work', 'conversation']
    },
    {
      section: 'contact',
      href: '#contact',
      title: language === 'english' ? 'Contact' : 'संपर्क',
      keywords: ['contact', 'email', 'message', 'get in touch', 'reach out', 'work together', 'collaborations', 'friendly', 'hello', 'name', 'email', 'message', 'send message', 'contact information', 'get in touch', 'form', 'submit', 'collaborate', 'hire', 'project', 'opportunity', 'discussion', 'meeting', 'call', 'phone', 'linkedin', 'github', 'social media']
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = searchableContent.filter(content => {
      const searchLower = query.toLowerCase();
      return content.title.toLowerCase().includes(searchLower) ||
             content.keywords.some(keyword => keyword.toLowerCase().includes(searchLower));
    });

    setSearchResults(results);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      scrollToSection(searchResults[0].href);
    }
  };

  // Close search modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchOpen && !event.target.closest('.search-modal')) {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  // Close search modal on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' 
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative group">
                <h1 className={`text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105 ${
                  darkMode ? 'drop-shadow-lg' : ''
                }`}>
                  Rishab
                </h1>
                <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-base font-semibold transition-colors duration-200 hover:text-primary-500 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    darkMode ? 'text-gray-300 hover:text-primary-400' : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Toggle Buttons & Mobile Menu Button */}
            <div className="flex items-center space-x-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-blue-400' 
                    : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
                }`}
                aria-label="Toggle language"
              >
                {language === 'english' ? 'हिंदी' : 'ENG'}
              </button>

              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-3 rounded-xl transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-green-400' 
                    : 'bg-gray-100 hover:bg-gray-200 text-green-600'
                }`}
                aria-label="Search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-3 rounded-xl transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 rounded-xl transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden py-6 border-t ${
              darkMode ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left text-base font-semibold transition-colors duration-200 hover:text-primary-500 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                      darkMode ? 'text-gray-300 hover:text-primary-400' : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className={`fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 ${
          darkMode ? 'bg-black/50' : 'bg-black/30'
        }`}>
          <div className={`search-modal w-full max-w-2xl rounded-2xl shadow-2xl ${
            darkMode 
              ? 'bg-gray-900 border border-gray-700' 
              : 'bg-white border border-gray-200'
          }`}>
            {/* Search Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className={`text-lg font-semibold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {language === 'english' ? 'Search Portfolio' : 'पोर्टफोलियो खोजें'}
              </h3>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                  setSearchResults([]);
                }}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode 
                    ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search Input */}
            <div className="p-6">
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={language === 'english' ? 'Search for anything... (e.g., React, Python, Projects, Contact)' : 'कुछ भी खोजें... (जैसे React, Python, Projects, Contact)'}
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className={`w-full px-4 py-3 pl-12 pr-4 rounded-xl text-base border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                    autoFocus
                  />
                  <svg 
                    className={`absolute left-4 top-3.5 h-5 w-5 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </form>

              {/* Search Results */}
              {searchQuery && (
                <div className="mt-4">
                  {searchResults.length > 0 ? (
                    <div className="space-y-2">
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {language === 'english' ? 'Found' : 'मिला'} {searchResults.length} {language === 'english' ? 'result(s)' : 'परिणाम'}
                      </p>
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToSection(result.href)}
                          className={`w-full p-4 rounded-xl text-left transition-colors duration-200 ${
                            darkMode 
                              ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                              : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className={`font-semibold ${
                                darkMode ? 'text-white' : 'text-gray-900'
                              }`}>
                                {result.title}
                              </h4>
                              <p className={`text-sm mt-1 ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {language === 'english' ? 'Click to navigate to this section' : 'इस खंड पर जाने के लिए क्लिक करें'}
                              </p>
                            </div>
                            <svg className={`w-5 h-5 ${
                              darkMode ? 'text-gray-400' : 'text-gray-500'
                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className={`text-center py-8 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <p className="text-lg font-medium">
                        {language === 'english' ? 'No results found' : 'कोई परिणाम नहीं मिला'}
                      </p>
                      <p className="text-sm mt-2">
                        {language === 'english' ? 'Try searching for: React, Python, Projects, Skills, Contact' : 'इन्हें खोजने का प्रयास करें: React, Python, Projects, Skills, Contact'}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 