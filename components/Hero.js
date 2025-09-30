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
        title: '我相信每個產品\n都應該走進人們的心裡',
        subtitle: '產品經理 • 工具探索者 • 體驗設計師',
        letterIntro: 'Dear 未來的夥伴，',
        description: '我是劉筑，一個相信產品應該有溫度的人。對我來說，做產品不只是把功能做出來，而是真正去思考：這個產品如何貼近人心？如何讓使用者感到被理解？',
        description2: '我很擅長用各種工具去探索和驗證想法，會把整個過程和可能的結果都嘗試過，然後找到最適合的方法。就像現在我在設計「脈德小腦瓜」一樣，從最初的靈感到每一個互動細節，都在思考如何讓使用者真正感受到內心的平靜。',
        description3: '我不想受限於任何單一領域的機會。無論是數位產品、AI 工具整合、還是使用者體驗優化，我都希望能用心去創造真正有意義的東西。',
        signature: 'With warm intentions,\nVanessa',
        portfolioBtn: '查看作品',
        contactBtn: '聯絡我',
        quote: '"最好的產品，是那些能讓人感到被真正理解的產品。"',
        skillsIntro: '我擅長的領域'
      },
      en: {
        greeting: 'Hello there.',
        title: 'I believe every product\nshould touch people\'s hearts',
        subtitle: 'Product Manager • Tool Explorer • Experience Designer',
        letterIntro: 'Dear future partners,',
        description: 'I\'m Vanessa, someone who believes products should have warmth. For me, creating products isn\'t just about building features—it\'s about truly thinking: How can this product touch people\'s hearts? How can users feel understood?',
        description2: 'I\'m skilled at using various tools to explore and validate ideas, trying out the entire process and possible outcomes, then finding the most suitable approach. Just like how I\'m currently designing "Mind-Brain"—from the initial inspiration to every interaction detail, I\'m thinking about how to let users truly feel inner peace.',
        description3: 'I don\'t want to be limited by opportunities in any single field. Whether it\'s digital products, AI tool integration, or user experience optimization, I hope to create truly meaningful things with genuine care.',
        signature: 'With warm intentions,\nVanessa',
        portfolioBtn: 'View Portfolio',
        contactBtn: 'Contact Me',
        quote: '"The best products are those that make people feel truly understood."',
        skillsIntro: 'What I\'m Good At'
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
                
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed noto-font">
                  {currentContent.description2}
                </p>
                
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed noto-font">
                  {currentContent.description3}
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
                className="btn-primary btn-3d noto-font"
              >
                <span className="icon-3d inline-block mr-2">🎯</span>
                {currentContent.portfolioBtn}
              </button>
              <a 
                href="mailto:vanessachuliu@gmail.com"
                className="btn-secondary btn-3d noto-font text-center"
              >
                <span className="icon-3d inline-block mr-2">💌</span>
                {currentContent.contactBtn}
              </a>
            </div>
            
            {/* 技能標籤 */}
            <div className="mb-12 fade-in fade-in-4">
              <div className="text-center text-sm text-[var(--text-light)] mb-6 noto-font">
                <span className="icon-3d inline-block mr-2">⭐</span>
                {currentContent.skillsIntro}
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                <span className="skill-item skill-3d">
                  <span className="icon-3d inline-block mr-1">🧠</span>
                  產品設計思維
                </span>
                <span className="skill-item skill-3d">
                  <span className="icon-3d inline-block mr-1">✨</span>
                  使用者體驗優化
                </span>
                <span className="skill-item skill-3d">
                  <span className="icon-3d inline-block mr-1">🤖</span>
                  AI 工具整合
                </span>
                <span className="skill-item skill-3d">
                  <span className="icon-3d inline-block mr-1">🤝</span>
                  跨團隊協作
                </span>
                <span className="skill-item skill-3d">
                  <span className="icon-3d inline-block mr-1">⚡</span>
                  敏捷專案管理
                </span>
                <span className="skill-item skill-3d">
                  <span className="icon-3d inline-block mr-1">🔧</span>
                  工具探索應用
                </span>
              </div>
            </div>
            
            {/* 成就數據 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-lg mx-auto mb-10 fade-in fade-in-5">
              <div className="glass-card card-3d p-4 text-center">
                <div className="icon-3d inline-block text-lg mb-2">📅</div>
                <div className="text-xl font-semibold text-[var(--primary-color)] serif-heading">2+</div>
                <div className="text-xs text-[var(--text-light)] noto-font">年經驗</div>
              </div>
              <div className="glass-card card-3d p-4 text-center">
                <div className="icon-3d inline-block text-lg mb-2">🏢</div>
                <div className="text-xl font-semibold text-[var(--primary-color)] serif-heading">6</div>
                <div className="text-xs text-[var(--text-light)] noto-font">大平台</div>
              </div>
              <div className="glass-card card-3d p-4 text-center">
                <div className="icon-3d inline-block text-lg mb-2">🚀</div>
                <div className="text-xl font-semibold text-[var(--primary-color)] serif-heading">214</div>
                <div className="text-xs text-[var(--text-light)] noto-font">天交付</div>
              </div>
              <div className="glass-card card-3d p-4 text-center">
                <div className="icon-3d inline-block text-lg mb-2">👥</div>
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