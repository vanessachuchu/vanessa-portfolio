function About() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);
    const [currentLang, setCurrentLang] = React.useState('zh');
    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      const section = document.getElementById('about');
      if (section) observer.observe(section);

      window.addEventListener('scroll', handleScroll);

      // Set initial language and listen for changes
      if (window.SimpleLanguage) {
        setCurrentLang(window.SimpleLanguage.getCurrentLanguage());

        const handleLanguageChange = (lang) => {
          setCurrentLang(lang);
        };

        window.SimpleLanguage.addListener(handleLanguageChange);

        return () => {
          observer.disconnect();
          window.removeEventListener('scroll', handleScroll);
          window.SimpleLanguage.removeListener(handleLanguageChange);
        };
      }

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    // Content for both languages
    const content = {
      zh: {
        title: '關於我',
        description1: '擁有專案規劃及執行經驗，擅於資訊整合分析及危機處理能力。',
        description2: '對於生活充滿好奇心，擁有成長型思維，不斷尋求方式解決問題。喜愛與人溝通和團隊合作，並持續學習新知，成就更好的自己。',
        strengths: [
          {
            emoji: '🎯',
            title: '專案管理與流程優化',
            description: '精通 Trello、Azure DevOps、Figma 等專案管理工具，擅長資源整合與時程控管。運用 AI 工具優化工作流程，',
            highlight: '有效縮短 20% 專案執行時程',
            description2: '，確保專案高效落地。',
            layout: 'left'
          },
          {
            emoji: '💡',
            title: '數據分析與策略規劃',
            description: '習慣將專案成本與績效數據圖表化、量化分析，提供清晰決策依據。透過數據洞察重新包裝策略，',
            highlight: '成功提升銷售量 15%、電子報訂閱名單擴大 10 倍',
            description2: '。',
            layout: 'right'
          },
          {
            emoji: '🤝',
            title: '跨部門溝通與協調',
            description: '擅長跨部門團隊協作，促進溝通透明化與即時回饋。精準掌握內外部需求，觀察人事細節找出最佳解決方案，確保多方達成共識並',
            highlight: '有效減少溝通成本',
            description2: '。',
            layout: 'center'
          },
          {
            emoji: '🚀',
            title: '產品開發與 UX 設計思維',
            description: '主導金融觀測站及線上英文平台等多項開發案，從雛形到完整建置。運用 Figma 優化 UI/UX 設計，快速分析不同產業商業邏輯，',
            highlight: '洞察需求並推動產品創新',
            description2: '。',
            layout: 'left'
          },
          {
            emoji: '🌱',
            title: '成長型思維與快速學習力',
            description: '對生活充滿好奇心，持續學習新知與 AI 工具應用。積極探索 No-Code 開發，規劃從零到一打造 side project。',
            highlight: '跨文化適應力強',
            description2: '，善於在新環境中快速成長。',
            layout: 'right'
          }
        ]
      },
      en: {
        title: 'About Me',
        description1: 'Experienced in project planning and execution, skilled in information integration analysis and crisis management.',
        description2: 'Curious about life, possessing a growth mindset, constantly seeking ways to solve problems. Love communicating with people and teamwork, continuously learning new knowledge to become a better self.',
        strengths: [
          {
            emoji: '🎯',
            title: 'Project Management & Process Optimization',
            description: 'Proficient in project management tools like Trello, Azure DevOps, and Figma, skilled in resource integration and timeline control. Optimizing workflows with AI tools, ',
            highlight: 'effectively reducing project execution time by 20%',
            description2: ', ensuring efficient project delivery.',
            layout: 'left'
          },
          {
            emoji: '💡',
            title: 'Data Analysis & Strategic Planning',
            description: 'Accustomed to visualizing and quantifying project costs and performance data for clear decision-making. Through data insights and strategy repackaging, ',
            highlight: 'successfully increasing sales by 15% and expanding newsletter subscribers by 10x',
            description2: '.',
            layout: 'right'
          },
          {
            emoji: '🤝',
            title: 'Cross-Department Communication & Coordination',
            description: 'Excel at cross-departmental collaboration, promoting communication transparency and instant feedback. Precisely grasping internal and external needs, observing personnel details to find optimal solutions, ensuring consensus among parties and ',
            highlight: 'effectively reducing communication costs',
            description2: '.',
            layout: 'center'
          },
          {
            emoji: '🚀',
            title: 'Product Development & UX Design Thinking',
            description: 'Led multiple development projects including Fund Observatory and online English platform, from prototype to complete construction. Using Figma to optimize UI/UX design, quickly analyzing business logic across industries, ',
            highlight: 'gaining insights and driving product innovation',
            description2: '.',
            layout: 'left'
          },
          {
            emoji: '🌱',
            title: 'Growth Mindset & Rapid Learning',
            description: 'Curious about life, continuously learning new knowledge and AI tool applications. Actively exploring No-Code development, planning to build side projects from scratch. ',
            highlight: 'Strong cross-cultural adaptability',
            description2: ', skilled at rapid growth in new environments.',
            layout: 'right'
          }
        ]
      }
    };

    const currentContent = content[currentLang] || content.zh;

    return (
      <>
        {/* About Me 區塊 */}
        <section
          id="about"
          className="py-32 px-6 relative overflow-hidden"
          data-name="about-section"
          data-file="components/About.js"
          style={{backgroundColor: 'var(--bg-secondary)'}}
        >
          {/* 幾何背景動畫 */}
          {window.GeometricBackground && React.createElement(window.GeometricBackground, { variant: 'about' })}

          <div className="max-w-7xl mx-auto relative z-10">
            {/* About Me 標題 */}
            <div className="mb-20">
              <h2 className="text-6xl font-bold mb-6 noto-font" style={{color: 'var(--text-primary)'}}>
                {currentContent.title}
              </h2>
              <div className="w-20 h-1" style={{backgroundColor: 'var(--primary-color)'}}></div>
            </div>
            
            <div className="max-w-3xl">
              <div className={`${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
                <p className="text-lg leading-relaxed mb-8 noto-font" style={{color: 'var(--text-secondary)'}}>
                  {currentContent.description1}
                </p>
                <p className="leading-relaxed noto-font" style={{color: 'var(--text-light)'}}>
                  {currentContent.description2}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 核心優勢 - 動態互動式排版 */}
        <section className="py-32 px-6 relative overflow-hidden" style={{backgroundColor: 'var(--bg-primary)'}}>
          <div className="max-w-7xl mx-auto">

            {/* Strength 1: 專案管理 - Left with decorative elements on right */}
            <div className={`mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl font-bold noto-font mb-4" style={{color: 'var(--text-primary)'}}>
                    {currentContent.strengths[0].title}
                  </h2>
                  <p className="text-base leading-relaxed noto-font" style={{color: 'var(--text-secondary)'}}>
                    {currentContent.strengths[0].description}
                    <span className="font-bold" style={{color: 'var(--text-primary)'}}>{currentContent.strengths[0].highlight}</span>
                    {currentContent.strengths[0].description2}
                  </p>
                </div>

                {/* Grid + Orange Waves */}
                <div className="relative h-80">
                  <div className="absolute top-0 left-0 w-40 h-40 opacity-50"
                       style={{transform: `rotate(${scrollY * -0.03}deg)`, transition: 'transform 0.1s ease-out'}}>
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <pattern id="grid1" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#333" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#grid1)" />
                    </svg>
                  </div>

                  <div className="absolute bottom-0 right-0 w-96 h-64"
                       style={{transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px)`, transition: 'transform 0.1s ease-out'}}>
                    <svg viewBox="0 0 300 200" className="w-full h-full">
                      <defs>
                        <linearGradient id="orangeGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#FF8C8C', stopOpacity: 0.8}} />
                          <stop offset="100%" style={{stopColor: '#FFB4A8', stopOpacity: 0.6}} />
                        </linearGradient>
                      </defs>
                      <path d="M0,50 Q75,30 150,50 T300,50 L300,200 L0,200 Z" fill="url(#orangeGrad1)">
                        <animate attributeName="d" dur="5s" repeatCount="indefinite"
                          values="M0,50 Q75,30 150,50 T300,50 L300,200 L0,200 Z;M0,50 Q75,70 150,50 T300,50 L300,200 L0,200 Z;M0,50 Q75,30 150,50 T300,50 L300,200 L0,200 Z" />
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Strength 2: 數據分析 - Right with blue circle */}
            <div className={`mb-24 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-80 order-2 md:order-1">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72"
                       style={{transform: `translate(-50%, -50%) translateX(${Math.sin(scrollY * 0.01) * 15}px)`, transition: 'transform 0.1s ease-out'}}>
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <circle cx="100" cy="100" r="90" fill="#6366F1" opacity="0.7" />
                      <rect x="50" y="30" width="18" height="18" fill="white" opacity="0.9" />
                      <rect x="80" y="30" width="18" height="18" fill="white" opacity="0.9" />
                      <rect x="110" y="30" width="18" height="18" fill="white" opacity="0.9" />
                      <rect x="140" y="30" width="18" height="18" fill="white" opacity="0.9" />
                      <rect x="65" y="55" width="15" height="15" fill="white" opacity="0.7" />
                      <rect x="125" y="55" width="15" height="15" fill="white" opacity="0.7" />
                    </svg>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <h2 className="text-2xl font-bold noto-font mb-4" style={{color: 'var(--text-primary)'}}>
                    {currentContent.strengths[1].title}
                  </h2>
                  <p className="text-base leading-relaxed noto-font" style={{color: 'var(--text-secondary)'}}>
                    {currentContent.strengths[1].description}
                    <span className="font-bold" style={{color: 'var(--text-primary)'}}>{currentContent.strengths[1].highlight}</span>
                    {currentContent.strengths[1].description2}
                  </p>
                </div>
              </div>
            </div>

            {/* Strength 3: 跨部門溝通 - Center with yellow circle */}
            <div className={`mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                <div className="absolute top-0 right-20 w-52 h-52 rounded-full opacity-70 -z-10"
                     style={{backgroundColor: '#FBBF24', transform: `translateY(${Math.cos(scrollY * 0.01) * 25}px)`, transition: 'transform 0.1s ease-out'}}></div>

                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl font-bold noto-font mb-4" style={{color: 'var(--text-primary)'}}>
                    {currentContent.strengths[2].title}
                  </h2>
                  <p className="text-base leading-relaxed noto-font" style={{color: 'var(--text-secondary)'}}>
                    {currentContent.strengths[2].description}
                    <span className="font-bold" style={{color: 'var(--text-primary)'}}>{currentContent.strengths[2].highlight}</span>
                    {currentContent.strengths[2].description2}
                  </p>
                </div>
              </div>
            </div>

            {/* Strength 4: 產品開發 - Left with blue waves */}
            <div className={`mb-24 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl font-bold noto-font mb-4" style={{color: 'var(--text-primary)'}}>
                    {currentContent.strengths[3].title}
                  </h2>
                  <p className="text-base leading-relaxed noto-font" style={{color: 'var(--text-secondary)'}}>
                    {currentContent.strengths[3].description}
                    <span className="font-bold" style={{color: 'var(--text-primary)'}}>{currentContent.strengths[3].highlight}</span>
                    {currentContent.strengths[3].description2}
                  </p>
                </div>

                <div className="relative h-80">
                  <div className="absolute top-0 right-0 w-full h-full"
                       style={{transform: `translateY(${scrollY * -0.05}px)`, transition: 'transform 0.1s ease-out'}}>
                    <svg viewBox="0 0 300 300" className="w-full h-full">
                      <g opacity="0.6">
                        {[0,1,2,3,4,5,6,7].map((i) => (
                          <path key={i} d={`M${200 + i * 15},0 Q${180 + i * 15},150 ${200 + i * 15},300`}
                            fill="none" stroke="#6366F1" strokeWidth="10" opacity={0.8 - i * 0.08}>
                            <animate attributeName="d" dur={`${4 + i * 0.3}s`} repeatCount="indefinite"
                              values={`M${200 + i * 15},0 Q${180 + i * 15},150 ${200 + i * 15},300;M${200 + i * 15},0 Q${220 + i * 15},150 ${200 + i * 15},300;M${200 + i * 15},0 Q${180 + i * 15},150 ${200 + i * 15},300`} />
                          </path>
                        ))}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Strength 5: 成長思維 - Right with red/pink square */}
            <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-80 order-2 md:order-1">
                  <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-tl from-red-400 to-pink-400 opacity-30"
                       style={{transform: `rotate(${scrollY * 0.03}deg)`, transition: 'transform 0.1s ease-out'}}></div>

                  <div className="absolute top-10 right-10 w-32 h-32"
                       style={{transform: `rotate(${scrollY * -0.05}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.05})`, transition: 'transform 0.1s ease-out'}}>
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <rect width="100" height="100" fill="#EF4444" opacity="0.7" />
                      <rect x="15" y="15" width="20" height="20" fill="white" opacity="0.8" />
                      <rect x="45" y="15" width="20" height="20" fill="white" opacity="0.8" />
                      <rect x="75" y="15" width="10" height="10" fill="white" opacity="0.8" />
                    </svg>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <h2 className="text-2xl font-bold noto-font mb-4" style={{color: 'var(--text-primary)'}}>
                    {currentContent.strengths[4].title}
                  </h2>
                  <p className="text-base leading-relaxed noto-font" style={{color: 'var(--text-secondary)'}}>
                    {currentContent.strengths[4].description}
                    <span className="font-bold" style={{color: 'var(--text-primary)'}}>{currentContent.strengths[4].highlight}</span>
                    {currentContent.strengths[4].description2}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}