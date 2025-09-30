function About() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);
    const [currentLang, setCurrentLang] = React.useState('zh');
    const [stats, setStats] = React.useState({
      efficiency: 0,
      experience: 0
    });

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            animateStats();
          }
        },
        { threshold: 0.1 }
      );

      const section = document.getElementById('about');
      if (section) observer.observe(section);

      // Set initial language and listen for changes
      if (window.SimpleLanguage) {
        setCurrentLang(window.SimpleLanguage.getCurrentLanguage());
        
        const handleLanguageChange = (lang) => {
          setCurrentLang(lang);
        };
        
        window.SimpleLanguage.addListener(handleLanguageChange);
        
        return () => {
          observer.disconnect();
          window.SimpleLanguage.removeListener(handleLanguageChange);
        };
      }

      return () => observer.disconnect();
    }, []);

    const animateStats = () => {
      const targets = { efficiency: 120, experience: 2 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      Object.keys(targets).forEach(key => {
        let current = 0;
        const increment = targets[key] / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= targets[key]) {
            current = targets[key];
            clearInterval(timer);
          }
          setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, stepDuration);
      });
    };

    // Content for both languages
    const content = {
      zh: {
        title: '關於我',
        description1: '我擅長將複雜的業務需求轉化為優雅的產品方案。結合策略思維與創意執行，不只追求功能完整，更注重使用者體驗的細膩度。',
        description2: '準備好開啟您的下一個專案了嗎？',
        efficiencyDesc: '透過導入 AI 工具與優化產品流程，在前 6 個月內平均提升團隊協作效率',
        point1: `擁有 ${stats.experience}+ 年的跨領域經驗，專注於創造直觀、以使用者為中心的設計，解決真實世界的問題，並提供無縫的數位體驗。`,
        point2: '善於與客戶緊密合作，融合創意與策略思維，將他們的願景轉化為深思熟慮、具影響力的設計解決方案。',
        strengthsTitle: '核心優勢',
        strengths: [
          {
            title: '金融科技專案經驗',
            description: '主導基金觀測站大型 B2B 平台，整合 6 大子平台系統，服務全台投信投顧業者。',
            tags: 'B2B 平台 · 系統整合 · 金融科技 · 跨部門協作'
          },
          {
            title: 'AI 工具深度應用',
            description: '熟練運用 ChatGPT、Claude、Cursor 等工具，提升團隊協作效率與產品交付品質。',
            tags: 'AI 整合 · 效率提升 · 工具應用 · 創新思維'
          },
          {
            title: '跨領域整合能力',
            description: '具備醫療科技、房地產、家具產業的跨領域經驗，能快速理解不同產業的需求痛點。',
            tags: '跨領域經驗 · 市場調研 · 數據分析 · 快速學習'
          },
          {
            title: '完整產品管理技能',
            description: '熟悉產品全生命週期管理，善用 Figma、Notion、Miro 等工具進行產品規劃與團隊協作。',
            tags: '產品規劃 · 原型設計 · 工具熟練 · 敏捷開發'
          }
        ]
      },
      en: {
        title: 'About Me',
        description1: 'I specialize in turning complex business requirements into elegant product solutions. Combining strategic thinking with creative execution, I focus not only on functional completeness but also on the finesse of user experience.',
        description2: 'Ready to start your next project?',
        efficiencyDesc: 'Average improvement in team collaboration efficiency within the first 6 months through AI tools and process optimization',
        point1: `With ${stats.experience}+ years of cross-domain experience, I focus on creating intuitive, user-centered designs that solve real-world problems and provide seamless digital experiences.`,
        point2: 'I excel at working closely with clients, blending creativity with strategic thinking to transform their vision into thoughtful, impactful design solutions.',
        strengthsTitle: 'Core Strengths',
        strengths: [
          {
            title: 'FinTech Project Experience',
            description: 'Led the Fund Observatory large-scale B2B platform, integrating 6 major sub-platform systems, serving investment trust and advisory firms across Taiwan.',
            tags: 'B2B Platform · System Integration · FinTech · Cross-functional Collaboration'
          },
          {
            title: 'Deep AI Tool Application',
            description: 'Proficient in using ChatGPT, Claude, Cursor and other tools to enhance team collaboration efficiency and product delivery quality.',
            tags: 'AI Integration · Efficiency Enhancement · Tool Application · Innovation'
          },
          {
            title: 'Cross-domain Integration',
            description: 'Experience in medical technology, real estate, and furniture industries, with ability to quickly understand different industry pain points.',
            tags: 'Cross-domain Experience · Market Research · Data Analysis · Rapid Learning'
          },
          {
            title: 'Complete Product Management',
            description: 'Familiar with full product lifecycle management, skilled in using Figma, Notion, Miro for product planning and team collaboration.',
            tags: 'Product Planning · Prototyping · Tool Proficiency · Agile Development'
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
          className="py-32 px-6"
          data-name="about-section" 
          data-file="components/About.js"
          style={{backgroundColor: 'var(--bg-secondary)'}}
        >
          <div className="max-w-7xl mx-auto">
            {/* About Me 標題 */}
            <div className="mb-20">
              <h2 className="text-6xl font-bold mb-6 noto-font" style={{color: 'var(--text-primary)'}}>
                {currentContent.title}
              </h2>
              <div className="w-20 h-1" style={{backgroundColor: 'var(--primary-color)'}}></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* 左側:文字描述 */}
              <div className={`lg:col-span-5 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
                <p className="text-lg leading-relaxed mb-8 noto-font" style={{color: 'var(--text-secondary)'}}>
                  {currentContent.description1}
                </p>
                <p className="leading-relaxed noto-font" style={{color: 'var(--text-light)'}}>
                  {currentContent.description2}
                </p>
              </div>

              {/* 右側:數據與重點 */}
              <div className={`lg:col-span-7 ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
                {/* 大數據展示 */}
                <div className="mb-12 flex items-start gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full border-2 flex items-center justify-center mb-4" 
                         style={{borderColor: 'var(--primary-color)'}}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--primary-color)'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="text-7xl font-bold mb-2 noto-font" style={{color: 'var(--primary-color)'}}>{stats.efficiency}%</div>
                    <p className="leading-relaxed max-w-md noto-font" style={{color: 'var(--text-light)'}}>
                      {currentContent.efficiencyDesc}
                    </p>
                  </div>
                </div>

                {/* 特色照片區域 - 佔位符 */}
                <div className="grid grid-cols-2 gap-6 mb-12">
                  <div className="aspect-square rounded-lg" style={{backgroundColor: 'var(--bg-tertiary)'}}></div>
                  <div className="aspect-square rounded-lg" style={{backgroundColor: 'var(--muted)'}}></div>
                </div>

                {/* 兩個重點說明 */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full text-white flex items-center justify-center flex-shrink-0 text-sm font-bold noto-font" 
                         style={{backgroundColor: 'var(--primary-color)'}}>
                      1
                    </div>
                    <div>
                      <p className="leading-relaxed noto-font" style={{color: 'var(--text-secondary)'}}>
                        {currentContent.point1}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full text-white flex items-center justify-center flex-shrink-0 text-sm font-bold noto-font" 
                         style={{backgroundColor: 'var(--primary-color)'}}>
                      2
                    </div>
                    <div>
                      <p className="leading-relaxed noto-font" style={{color: 'var(--text-secondary)'}}>
                        {currentContent.point2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 核心優勢 - 極簡列表式 */}
        <section className="py-32 px-6" style={{backgroundColor: 'var(--bg-primary)'}}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-20 noto-font" style={{color: 'var(--text-primary)'}}>
              {currentContent.strengthsTitle}
            </h2>
            
            <div className="space-y-16">
              {currentContent.strengths.map((strength, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 border-t pt-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} 
                     style={{borderColor: 'var(--border)', animationDelay: `${index * 0.2}s`}}>
                  <div className="lg:col-span-2">
                    <div className="text-5xl font-bold noto-font" style={{color: 'var(--border)'}}>
                      0{index + 1}
                    </div>
                  </div>
                  <div className="lg:col-span-10">
                    <h3 className="text-3xl font-bold mb-4 noto-font" style={{color: 'var(--text-primary)'}}>
                      {strength.title}
                    </h3>
                    <p className="text-xl leading-relaxed mb-4 noto-font" style={{color: 'var(--text-light)'}}>
                      {strength.description}
                    </p>
                    <div className="text-sm noto-font" style={{color: 'var(--text-light)'}}>
                      {strength.tags}
                    </div>
                  </div>
                </div>
              ))}
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