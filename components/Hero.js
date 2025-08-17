function Hero() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);
    const [currentLang, setCurrentLang] = React.useState('zh');

    React.useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 100);
      
      // Set initial language and listen for changes
      if (window.SimpleLanguage) {
        setCurrentLang(window.SimpleLanguage.getCurrentLanguage());
        
        const handleLanguageChange = (lang) => {
          setCurrentLang(lang);
        };
        
        window.SimpleLanguage.addListener(handleLanguageChange);
        
        return () => {
          clearTimeout(timer);
          window.SimpleLanguage.removeListener(handleLanguageChange);
        };
      }
      
      return () => clearTimeout(timer);
    }, []);

    // Hardcoded text content for both languages
    const content = {
      zh: {
        title: '打造數位產品\n解決真實問題',
        subtitle: '產品經理 • 專案管理 • AI 整合',
        description: '專精金融科技產品設計與專案管理，擅長 AI 工具應用與系統整合。2年多大型專案經驗，214 個工作天準時交付，成功整合6大子平台，服務1000+專業用戶。',
        portfolioBtn: '查看作品',
        contactBtn: '聯絡我'
      },
      en: {
        title: 'Building Digital Products\nThat Solve Real Problems',
        subtitle: 'Product Manager • Project Management • AI Integration',
        description: 'Specialized in fintech product design and project management, with expertise in AI tool application and system integration. Over 2 years of large-scale project experience, delivered on schedule in 214 working days, successfully integrated 6 major platforms serving 1000+ professional users.',
        portfolioBtn: 'View Portfolio',
        contactBtn: 'Contact Me'
      }
    };

    const currentContent = content[currentLang] || content.zh;

    return (
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        data-name="hero-section" 
        data-file="components/Hero.js"
        style={{backgroundColor: 'var(--bg-primary)'}}
      >
        
        <div className="relative z-10 text-center max-w-5xl mx-auto section-padding text-[var(--text-primary)]">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 serif-heading">
              {currentContent.title.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </h1>
            
            <h2 className="text-2xl lg:text-3xl mb-4 font-medium text-[var(--text-secondary)] inter-font">
              {currentContent.subtitle}
            </h2>
            
            <p className="text-lg lg:text-xl mb-12 max-w-4xl mx-auto text-[var(--text-secondary)] inter-font">
              {currentContent.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => document.getElementById('featured').scrollIntoView({ behavior: 'smooth' })}
                className="bg-[var(--accent-color)] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[var(--accent-warm)] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  <div className="icon-folder text-lg"></div>
                  {currentContent.portfolioBtn}
                </span>
              </button>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-[var(--primary-color)] text-[var(--primary-color)] px-8 py-4 rounded-xl font-semibold hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 inter-font"
              >
                <span className="flex items-center gap-3">
                  <div className="icon-mail text-lg"></div>
                  {currentContent.contactBtn}
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="icon-chevron-down text-3xl text-white/70"></div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}