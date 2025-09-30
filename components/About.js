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
        className="section-padding bg-[var(--bg-secondary)]"
        data-name="about-section" 
        data-file="components/About.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 noto-font">
              {currentContent.title}
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto noto-font">
              {currentContent.subtitle}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className={`space-y-8 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
              <div className="space-y-6">
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed noto-font">
                  {currentContent.description1}
                </p>
                
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed noto-font">
                  {currentContent.description2}
                  <span className="text-[var(--primary-color)] font-semibold">{currentContent.highlight}</span>
                  {currentContent.description3}
                </p>
                
                <div className="flex flex-wrap gap-3 mt-8">
                  {currentContent.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full text-sm font-medium noto-font"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
              <div className="grid grid-cols-2 gap-6">
                <div className="minimal-card text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
                       style={{background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'}}>
                    <div className="icon-briefcase text-2xl text-white"></div>
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2 noto-font">{stats.experience}+</div>
                  <div className="text-[var(--text-secondary)] noto-font">{currentContent.stats.experience}</div>
                </div>
                <div className="minimal-card text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
                       style={{background: 'linear-gradient(135deg, var(--secondary-color), var(--accent-color))'}}>
                    <div className="icon-folder text-2xl text-white"></div>
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2 noto-font">{stats.projects}+</div>
                  <div className="text-[var(--text-secondary)] noto-font">{currentContent.stats.projects}</div>
                </div>
                <div className="minimal-card text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
                       style={{background: 'linear-gradient(135deg, var(--accent-color), var(--accent-warm))'}}>
                    <div className="icon-trending-up text-2xl text-white"></div>
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2 noto-font">{stats.efficiency}%</div>
                  <div className="text-[var(--text-secondary)] noto-font">{currentContent.stats.efficiency}</div>
                </div>
                <div className="minimal-card text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
                       style={{background: 'linear-gradient(135deg, var(--accent-warm), var(--primary-color))'}}>
                    <div className="icon-globe text-2xl text-white"></div>
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2 noto-font">{stats.languages}</div>
                  <div className="text-[var(--text-secondary)] noto-font">{currentContent.stats.languages}</div>
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