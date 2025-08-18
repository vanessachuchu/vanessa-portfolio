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
        greeting: 'Hello there.',
        title: '我用設計思維與溫暖初心\n打造有意義的數位產品',
        subtitle: '產品經理 • 專案管理 • AI 整合',
        letterIntro: 'Dear 未來的夥伴，',
        description: '每一個產品背後，都有一個想要解決真實問題的初心。我是劉筑，專精於金融科技產品設計與跨團隊協作。',
        description2: '在過去的 2 年多時間裡，我主導了基金觀測站生態系統的重構專案，成功整合 6 大子平台，為超過 1000 位金融從業者創造了更好的使用體驗。我相信，最好的產品是能夠真正改善人們工作與生活的產品。',
        signature: 'With passion,\nVanessa',
        portfolioBtn: '查看作品',
        contactBtn: '聯絡我',
        quote: '"Growth isn\'t about becoming someone else;\nit\'s about evolving into your best self."'
      },
      en: {
        greeting: 'Hello there.',
        title: 'I use design thinking and warm intentions\nto create meaningful digital products',
        subtitle: 'Product Manager • Project Management • AI Integration',
        letterIntro: 'Dear future partners,',
        description: 'Behind every product lies an intention to solve real problems. I\'m Vanessa, specialized in fintech product design and cross-team collaboration.',
        description2: 'Over the past 2+ years, I led the reconstruction project of the Fund Observatory ecosystem, successfully integrating 6 major platforms and creating better user experiences for over 1000 financial professionals. I believe the best products are those that truly improve people\'s work and life.',
        signature: 'With passion,\nVanessa',
        portfolioBtn: 'View Portfolio',
        contactBtn: 'Contact Me',
        quote: '"Growth isn\'t about becoming someone else;\nit\'s about evolving into your best self."'
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
        <div className="relative z-10 text-center max-w-2xl mx-auto section-padding text-[var(--text-primary)]">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* 問候語 */}
            <div className="text-base text-[var(--text-light)] mb-10 serif-heading fade-in">
              {currentContent.greeting}
            </div>
            
            {/* 主標題 */}
            <h1 className="text-3xl lg:text-4xl font-medium mb-8 serif-heading leading-relaxed fade-in fade-in-1">
              {currentContent.title.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </h1>
            
            {/* 副標題 */}
            <div className="text-sm text-[var(--text-light)] mb-12 noto-font fade-in fade-in-2" style={{letterSpacing: '2px'}}>
              {currentContent.subtitle}
            </div>
            
            {/* 描述信件 */}
            <div className="text-left mb-12 fade-in fade-in-3">
              <div className="glass-card p-8 border-l-4 border-[var(--primary-color)]">
                <div className="text-sm text-[var(--text-light)] italic mb-4 noto-font">
                  {currentContent.letterIntro}
                </div>
                
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed noto-font">
                  {currentContent.description}
                </p>
                
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed noto-font">
                  {currentContent.description2}
                </p>
                
                <div className="text-right text-sm text-[var(--primary-color)] font-medium noto-font">
                  {currentContent.signature.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index === 0 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            
            {/* 按鈕 */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 fade-in fade-in-4">
              <button 
                onClick={() => document.getElementById('featured').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary noto-font"
              >
                {currentContent.portfolioBtn}
              </button>
              <a 
                href="mailto:vanessachuliu@gmail.com"
                className="btn-secondary noto-font text-center"
              >
                {currentContent.contactBtn}
              </a>
            </div>
            
            {/* 技能標籤 */}
            <div className="flex justify-center gap-4 flex-wrap mb-12 fade-in fade-in-4">
              <span className="skill-item">金融科技</span>
              <span className="skill-item">B2B 產品設計</span>
              <span className="skill-item">系統整合</span>
              <span className="skill-item">敏捷專案管理</span>
              <span className="skill-item">AI 工具應用</span>
            </div>
            
            {/* 成就數據 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-lg mx-auto mb-10 fade-in fade-in-5">
              <div className="glass-card p-4 text-center">
                <div className="text-xl font-semibold text-[var(--primary-color)] serif-heading">2+</div>
                <div className="text-xs text-[var(--text-light)] noto-font">年經驗</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-xl font-semibold text-[var(--primary-color)] serif-heading">6</div>
                <div className="text-xs text-[var(--text-light)] noto-font">大平台</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-xl font-semibold text-[var(--primary-color)] serif-heading">214</div>
                <div className="text-xs text-[var(--text-light)] noto-font">天交付</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-xl font-semibold text-[var(--primary-color)] serif-heading">1000+</div>
                <div className="text-xs text-[var(--text-light)] noto-font">使用者</div>
              </div>
            </div>
            
            {/* 底部引言 */}
            <div className="text-sm text-[var(--text-light)] italic serif-heading fade-in fade-in-5">
              {currentContent.quote.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}