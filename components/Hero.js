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
        {/* 幾何背景動畫 */}
        {window.GeometricBackground && React.createElement(window.GeometricBackground, { variant: 'hero' })}

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
            
            {/* 左側內容 */}
            <div className={`space-y-8 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
              {/* 問候語 */}
              <div className="text-lg text-[var(--text-light)] noto-font">
                {currentContent.greeting}
              </div>
              
              {/* 主標題 */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight noto-font">
                {currentContent.title.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index === 0 && <br />}
                  </React.Fragment>
                ))}
              </h1>
              
              {/* 副標題 */}
              <div className="text-base text-[var(--text-secondary)] noto-font" style={{letterSpacing: '1px'}}>
                {currentContent.subtitle}
              </div>
              
              {/* 技能標籤 - 緊湊排列 */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 text-sm border border-[var(--border)] rounded-full text-[var(--text-secondary)] noto-font">
                  產品設計思維
                </span>
                <span className="px-4 py-2 text-sm border border-[var(--border)] rounded-full text-[var(--text-secondary)] noto-font">
                  AI 工具整合
                </span>
                <span className="px-4 py-2 text-sm border border-[var(--border)] rounded-full text-[var(--text-secondary)] noto-font">
                  敏捷專案管理
                </span>
              </div>
              
              {/* 成就數據 - 橫向排列 */}
              <div className="flex gap-8 lg:gap-12">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-[var(--primary-color)] noto-font">2+</div>
                  <div className="text-sm text-[var(--text-light)] noto-font">年經驗</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-[var(--primary-color)] noto-font">214</div>
                  <div className="text-sm text-[var(--text-light)] noto-font">天交付</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-[var(--primary-color)] noto-font">1000+</div>
                  <div className="text-sm text-[var(--text-light)] noto-font">使用者</div>
                </div>
              </div>
              
              {/* 按鈕 */}
              <div className="flex gap-4">
                <button 
                  onClick={() => document.getElementById('featured').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary noto-font"
                >
                  {currentContent.portfolioBtn}
                </button>
                <a 
                  href="mailto:vanessachuliu@gmail.com"
                  className="btn-secondary noto-font"
                >
                  {currentContent.contactBtn}
                </a>
              </div>
            </div>
            
            {/* 右側信件內容 */}
            <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
              <div className="glass-card p-8 lg:p-10 border-l-4 border-[var(--primary-color)]">
                <div className="text-sm text-[var(--text-light)] italic mb-6 noto-font">
                  {currentContent.letterIntro}
                </div>
                
                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed noto-font">
                  <p>{currentContent.description}</p>
                  <p>{currentContent.description2}</p>
                  <p>{currentContent.description3}</p>
                </div>
                
                <div className="text-right mt-8 text-sm text-[var(--primary-color)] font-medium noto-font">
                  {currentContent.signature.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index === 0 && <br />}
                    </React.Fragment>
                  ))}
                </div>
                
                {/* 底部引言 */}
                <div className="text-center mt-8 pt-6 border-t border-[var(--border)]">
                  <div className="text-sm text-[var(--text-light)] italic noto-font">
                    {currentContent.quote.replace(/"/g, '')}
                  </div>
                </div>
              </div>
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