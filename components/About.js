function About() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);
    const [currentLang, setCurrentLang] = React.useState('zh');
    const [stats, setStats] = React.useState({
      experience: 0,
      projects: 0,
      efficiency: 0,
      languages: 0
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
      const targets = { experience: 5, projects: 15, efficiency: 20, languages: 3 };
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

    // Hardcoded text content for both languages
    const content = {
      zh: {
        title: '關於我',
        subtitle: '擁有成長型思維，不斷尋求方式解決問題的產品經理',
        description1: '目前在澳洲打工度假，持續探索 AI 與自動化的應用可能性。擁有豐富的專案管理經驗，擅長資訊整合分析及危機處理，特別專精於跨部門協作與流程優化。',
        description2: '在多奇數位擔任專案經理期間，成功整合 AI 工具優化工作流程，',
        highlight: ' 有效縮短 20% 的專案執行時程',
        description3: '。目前正在開發「靈感管理與深度思考助手」，一個完整的想法生命週期管理系統。',
        skills: ['專案管理', 'AI 整合', '跨文化溝通', '流程優化', 'No-Code 開發', '數據分析'],
        stats: {
          experience: '年工作經驗',
          projects: '專案完成',
          efficiency: '效率提升',
          languages: '語言能力'
        }
      },
      en: {
        title: 'About Me',
        subtitle: 'Product manager with growth mindset, constantly seeking innovative solutions to complex problems',
        description1: 'Currently pursuing professional development through international experience in Australia, while actively researching AI and automation applications. Bringing extensive project management expertise with specialized competencies in information synthesis, crisis resolution, and cross-functional team leadership.',
        description2: 'During my tenure as Project Manager at Duotify Digital, I successfully integrated AI technologies to optimize operational workflows,',
        highlight: ' achieving a 20% reduction in project execution timelines',
        description3: '. Currently developing an "Inspiration Management and Deep Thinking Assistant," a comprehensive ideation lifecycle management system.',
        skills: ['Project Management', 'AI Integration', 'Cross-Cultural Communication', 'Process Optimization', 'No-Code Development', 'Data Analysis'],
        stats: {
          experience: 'Years Experience',
          projects: 'Projects Completed',
          efficiency: 'Efficiency Improvement',
          languages: 'Languages'
        }
      }
    };

    const currentContent = content[currentLang] || content.zh;

    return (
      <section 
        id="about" 
        className="py-32 px-8"
        data-name="about-section" 
        data-file="components/About.js"
        style={{backgroundColor: 'var(--bg-primary)'}}
      >
        <div className="max-w-7xl mx-auto">
          {/* 简洁标题设计 */}
          <div className="mb-16">
            <h2 className="text-6xl font-light mb-4 noto-font" style={{color: 'var(--text-primary)'}}>
              {currentContent.title}
            </h2>
            <div className="w-20 h-0.5" style={{backgroundColor: 'var(--primary-color)'}}></div>
          </div>
          
          {/* 12列网格布局 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* 左侧文字 - 5列 */}
            <div className={`lg:col-span-5 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
              <p className="text-lg leading-relaxed mb-8 noto-font" style={{color: 'var(--text-secondary)'}}>
                {currentContent.description1}
              </p>
              
              <p className="text-lg leading-relaxed mb-8 noto-font" style={{color: 'var(--text-secondary)'}}>
                {currentContent.description2}
                <span className="font-semibold" style={{color: 'var(--primary-color)'}}>{currentContent.highlight}</span>
                {currentContent.description3}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {currentContent.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium noto-font border"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-secondary)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 右侧数据与重点 - 7列 */}
            <div className={`lg:col-span-7 ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
              {/* 主要成就数据 */}
              <div className="flex items-start gap-8 mb-12">
                <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center flex-shrink-0" 
                     style={{borderColor: 'var(--primary-color)'}}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--primary-color)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-7xl font-light mb-3 noto-font" style={{color: 'var(--primary-color)'}}>{stats.efficiency}%</div>
                  <p className="leading-relaxed noto-font" style={{color: 'var(--text-secondary)'}}>
                    {currentContent.stats.efficiency}
                  </p>
                </div>
              </div>

              {/* 经验与专案数据 */}
              <div className="flex items-start gap-8 mb-12">
                <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center flex-shrink-0" 
                     style={{borderColor: 'var(--primary-color)'}}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--primary-color)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <div>
                  <div className="text-7xl font-light mb-3 noto-font" style={{color: 'var(--primary-color)'}}>{stats.experience}+</div>
                  <p className="leading-relaxed noto-font" style={{color: 'var(--text-secondary)'}}>
                    {currentContent.stats.experience} {currentLang === 'zh' ? '・' : '・'} {stats.projects}+ {currentContent.stats.projects}
                  </p>
                </div>
              </div>

              {/* 特色專案突出顯示 */}
              <div className="flex items-start gap-8">
                <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center flex-shrink-0" 
                     style={{borderColor: 'var(--primary-color)'}}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--primary-color)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-semibold mb-3 noto-font" style={{color: 'var(--primary-color)'}}>
                    {currentLang === 'zh' ? '脈德小腦瓜' : 'Mind-Brain'}
                  </div>
                  <p className="leading-relaxed noto-font mb-4" style={{color: 'var(--text-secondary)'}}>
                    {currentLang === 'zh' 
                      ? '互動式冥想思考專案，將抽象想法具體化的創新工具'
                      : 'Interactive meditation thinking project, innovative tool for materializing abstract ideas'
                    }
                  </p>
                  <a 
                    href="https://vanessachuchu.github.io/mind-brain/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium noto-font transition-all duration-200"
                    style={{color: 'var(--primary-color)'}}
                  >
                    {currentLang === 'zh' ? '體驗專案' : 'Experience Project'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}