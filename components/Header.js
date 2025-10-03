function Header({ activeSection }) {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [currentLang, setCurrentLang] = React.useState('zh');

    React.useEffect(() => {
      // Set initial language and listen for changes
      if (window.SimpleLanguage) {
        setCurrentLang(window.SimpleLanguage.getCurrentLanguage());
        
        const handleLanguageChange = (lang) => {
          setCurrentLang(lang);
        };
        
        window.SimpleLanguage.addListener(handleLanguageChange);
        
        return () => {
          window.SimpleLanguage.removeListener(handleLanguageChange);
        };
      }
    }, []);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    };

    const navItems = [
      { id: 'home', label: currentLang === 'zh' ? '首頁' : 'Home' },
      { id: 'about', label: currentLang === 'zh' ? '關於我' : 'About' },
      { id: 'experience', label: currentLang === 'zh' ? '工作經驗' : 'Experience' },
      { id: 'skills', label: currentLang === 'zh' ? '專業技能' : 'Skills' },
      { id: 'projects', label: currentLang === 'zh' ? '作品集' : 'Projects' },
      { id: 'contact', label: currentLang === 'zh' ? '聯絡我' : 'Contact' }
    ];

    return (
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-[var(--bg-tertiary)]' : 'bg-white/80 backdrop-blur-sm'
        }`}
        data-name="header" 
        data-file="components/Header.js"
      >
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-[var(--primary-color)]">Vanessa Liu</span>
            </div>
            
            <div className="hidden lg:block">
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? 'text-[var(--primary-color)] bg-[var(--accent-color)]/10'
                        : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)] hover:bg-[var(--accent-color)]/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="flex items-center space-x-2 ml-4">
                  {React.createElement(window.LanguageToggle)}
                  {React.createElement(window.ThemeToggle)}
                </div>
              </div>
            </div>
            
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[var(--text-primary)] hover:text-[var(--primary-color)] p-2"
              >
                <div className={`icon-${isMobileMenuOpen ? 'x' : 'menu'} text-xl`}></div>
              </button>
            </div>
          </div>
          
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-[var(--card-bg)]/95 backdrop-blur-sm mt-2 p-4 space-y-2 rounded-lg border border-[var(--border)]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] hover:bg-[var(--accent-color)]/5"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex justify-center items-center space-x-3 pt-2 border-t border-[var(--border)]">
                {React.createElement(window.LanguageToggle)}
                {React.createElement(window.ThemeToggle)}
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
