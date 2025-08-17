function LanguageToggle() {
  try {
    const [currentLang, setCurrentLang] = React.useState('zh');

    React.useEffect(() => {
      // Set initial language
      if (window.SimpleLanguage) {
        setCurrentLang(window.SimpleLanguage.getCurrentLanguage());
        
        // Listen for language changes
        const handleLanguageChange = (lang) => {
          setCurrentLang(lang);
        };
        
        window.SimpleLanguage.addListener(handleLanguageChange);
        
        return () => {
          window.SimpleLanguage.removeListener(handleLanguageChange);
        };
      }
    }, []);

    const toggleLanguage = () => {
      const newLang = currentLang === 'zh' ? 'en' : 'zh';
      if (window.SimpleLanguage) {
        window.SimpleLanguage.setLanguage(newLang);
      }
    };

    return (
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[var(--accent-color)]/10 border border-[var(--border)]"
        >
          <div className="icon-globe text-sm"></div>
          <span>{currentLang === 'zh' ? '中文' : 'EN'}</span>
          <span className="text-xs text-[var(--text-secondary)]">
            {currentLang === 'zh' ? '/ EN' : '/ 中文'}
          </span>
        </button>
      </div>
    );
  } catch (error) {
    console.error('LanguageToggle component error:', error);
    return null;
  }
}

// Make LanguageToggle available globally
window.LanguageToggle = LanguageToggle;