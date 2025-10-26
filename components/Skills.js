function Skills() {
  try {
    const [activeCategory, setActiveCategory] = React.useState('pm');
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

    // Hardcoded content for both languages
    const content = {
      zh: {
        title: '專業技能',
        subtitle: '持續學習心態的跨領域專業能力',
        experienceLabel: '經驗',
        skillCategories: {
          pm: {
            title: '產品管理',
            icon: 'target',
            color: 'from-gray-800 to-gray-900',
            skills: [
              { name: '產品策略規劃', level: 'expert', years: '2年以上', desc: '0-1 產品架構設計' },
              { name: '需求分析', level: 'expert', years: '2年以上', desc: '跨部門需求整合與優先級排序' },
              { name: '敏捷開發管理', level: 'advanced', years: '2年', desc: 'Scrum 流程管理與團隊協作' },
              { name: '用戶研究', level: 'intermediate', years: '1年', desc: '用戶訪談與行為分析' },
              { name: 'A/B 測試', level: 'intermediate', years: '1年', desc: '產品假設驗證與數據分析' }
            ]
          },
          tech: {
            title: '技術工具',
            icon: 'code',
            color: 'from-gray-700 to-gray-800',
            skills: [
              { name: 'Microsoft Office 365', level: 'expert', years: '5年以上', desc: 'Excel 進階函數、PowerBI 數據視覺化' },
              { name: 'Figma / Sketch', level: 'advanced', years: '2年', desc: 'UI/UX 設計、原型製作' },
              { name: 'Adobe Illustrator', level: 'intermediate', years: '3年', desc: '基礎向量圖形設計、品牌視覺' },
              { name: 'Notion / Trello', level: 'expert', years: '3年', desc: '專案管理、文件協作' },
              { name: 'AI 工具應用', level: 'advanced', years: '1年', desc: 'ChatGPT、Claude、Midjourney' },
              { name: 'No-code 平台', level: 'intermediate', years: '6個月', desc: 'Bubble、Zapier、GitHub Pages' }
            ]
          },
          analysis: {
            title: '數據分析',
            icon: 'bar-chart',
            color: 'from-gray-600 to-gray-700',
            skills: [
              { name: 'Google Analytics', level: 'advanced', years: '2年', desc: '用戶行為分析、轉換率優化' },
              { name: 'SQL 查詢', level: 'intermediate', years: '1年', desc: '資料庫查詢與報表生成' },
              { name: 'Excel 數據分析', level: 'expert', years: '3年', desc: '樞紐分析、統計函數' },
              { name: 'Power BI', level: 'intermediate', years: '1年', desc: '商業智慧報表設計' },
              { name: '統計分析', level: 'intermediate', years: '1年', desc: '假設檢定、回歸分析' }
            ]
          },
          soft: {
            title: '軟實力',
            icon: 'users',
            color: 'from-gray-700 to-gray-800',
            skills: [
              { name: '跨部門協作', level: 'expert', years: '2年以上', desc: '協調 IT、業務、設計、清潔、技術等多部門團隊，國際企業溝通經驗' },
              { name: '專案管理', level: 'expert', years: '2年以上', desc: '214 天大型專案準時交付' },
              { name: '溝通協調', level: 'expert', years: '3年', desc: '向上管理、橫向協作' },
              { name: '問題解決', level: 'advanced', years: '2年', desc: '系統化思考、創新解決方案' },
              { name: '危機管理', level: 'advanced', years: '1年', desc: '緊急應變與風險控制' }
            ]
          },
          lang: {
            title: '語言能力',
            icon: 'globe',
            color: 'from-gray-800 to-gray-900',
            skills: [
              { name: '中文（繁體）', level: 'native', years: '母語', desc: '母語、專業文件撰寫' },
              { name: '英語', level: 'advanced', years: '10年以上', desc: 'TOEIC 650分、IELTS 6.5、商業溝通、國際客戶服務' },
              { name: '台語', level: 'advanced', years: '母語', desc: '流利對話、在地化溝通' }
            ]
          }
        },
        stats: {
          professionalSkills: '專業技能',
          skillDomains: '技能領域',
          languages: '語言',
          projectExperience: '專案經驗'
        }
      },
      en: {
        title: 'Professional Skills',
        subtitle: 'Cross-domain expertise with a continuous learning mindset',
        experienceLabel: 'Experience',
        skillCategories: {
          pm: {
            title: 'Product Management',
            icon: 'target',
            color: 'from-gray-800 to-gray-900',
            skills: [
              { name: 'Product Strategy Planning', level: 'expert', years: '2+ years', desc: '0-to-1 product architecture design' },
              { name: 'Requirements Analysis', level: 'expert', years: '2+ years', desc: 'Cross-departmental requirement integration and prioritization' },
              { name: 'Agile Development Management', level: 'advanced', years: '2 years', desc: 'Scrum process management and team collaboration' },
              { name: 'User Research', level: 'intermediate', years: '1 year', desc: 'User interviews and behavioral analysis' },
              { name: 'A/B Testing', level: 'intermediate', years: '1 year', desc: 'Product hypothesis validation and data analysis' }
            ]
          },
          tech: {
            title: 'Technical Tools',
            icon: 'code',
            color: 'from-gray-700 to-gray-800',
            skills: [
              { name: 'Microsoft Office 365', level: 'expert', years: '5+ years', desc: 'Excel advanced formulas, PowerBI data visualization' },
              { name: 'Figma / Sketch', level: 'advanced', years: '2 years', desc: 'UI/UX design, prototyping' },
              { name: 'Adobe Illustrator', level: 'intermediate', years: '3 years', desc: 'Basic vector graphics design, brand visuals' },
              { name: 'Notion / Trello', level: 'expert', years: '3 years', desc: 'Project management, document collaboration' },
              { name: 'AI Tool Applications', level: 'advanced', years: '1 year', desc: 'ChatGPT, Claude, Midjourney' },
              { name: 'No-code Platforms', level: 'intermediate', years: '6 months', desc: 'Bubble, Zapier, GitHub Pages' }
            ]
          },
          analysis: {
            title: 'Data Analysis',
            icon: 'bar-chart',
            color: 'from-gray-600 to-gray-700',
            skills: [
              { name: 'Google Analytics', level: 'advanced', years: '2 years', desc: 'User behavior analysis, conversion rate optimization' },
              { name: 'SQL Queries', level: 'intermediate', years: '1 year', desc: 'Database querying and report generation' },
              { name: 'Excel Data Analysis', level: 'expert', years: '3 years', desc: 'Pivot analysis, statistical functions' },
              { name: 'Power BI', level: 'intermediate', years: '1 year', desc: 'Business intelligence report design' },
              { name: 'Statistical Analysis', level: 'intermediate', years: '1 year', desc: 'Hypothesis testing, regression analysis' }
            ]
          },
          soft: {
            title: 'Soft Skills',
            icon: 'users',
            color: 'from-gray-700 to-gray-800',
            skills: [
              { name: 'Cross-functional Collaboration', level: 'expert', years: '2+ years', desc: 'Coordinating IT, business, design, cleaning, technical teams, international enterprise communication experience' },
              { name: 'Project Management', level: 'expert', years: '2+ years', desc: '214-day large-scale project delivered on time' },
              { name: 'Communication & Coordination', level: 'expert', years: '3 years', desc: 'Upward management, lateral collaboration' },
              { name: 'Problem Solving', level: 'advanced', years: '2 years', desc: 'Systematic thinking, innovative solutions' },
              { name: 'Crisis Management', level: 'advanced', years: '1 year', desc: 'Emergency response and risk control' }
            ]
          },
          lang: {
            title: 'Languages',
            icon: 'globe',
            color: 'from-gray-800 to-gray-900',
            skills: [
              { name: 'Chinese (Traditional)', level: 'native', years: 'Native', desc: 'Native language, professional document writing' },
              { name: 'English', level: 'advanced', years: '10+ years', desc: 'TOEIC 650, IELTS 6.5, business communication, international customer service' },
              { name: 'Taiwanese', level: 'advanced', years: 'Native', desc: 'Fluent conversation, localized communication' }
            ]
          }
        },
        stats: {
          professionalSkills: 'Professional Skills',
          skillDomains: 'Skill Domains',
          languages: 'Languages',
          projectExperience: 'Project Experience'
        }
      }
    };

    const currentContent = content[currentLang] || content.zh;
    const skillCategories = currentContent.skillCategories;

    const levelColors = {
      expert: 'bg-[var(--primary-color)] text-white',
      advanced: 'bg-[var(--text-secondary)] text-white',
      intermediate: 'bg-[var(--muted)] text-[var(--text-primary)] border border-[var(--border)]',
      native: 'bg-[var(--primary-color)] text-white'
    };

    const levelLabels = {
      expert: currentLang === 'zh' ? '專家' : 'Expert',
      advanced: currentLang === 'zh' ? '進階' : 'Advanced',
      intermediate: currentLang === 'zh' ? '中階' : 'Intermediate',
      native: currentLang === 'zh' ? '母語' : 'Native'
    };

    return (
      <section
        id="skills"
        className="section-padding relative overflow-hidden"
        data-name="skills-section"
        data-file="components/Skills.js"
        style={{backgroundColor: 'var(--bg-primary)'}}
      >
        {/* 幾何背景動畫 */}
        {window.GeometricBackground && React.createElement(window.GeometricBackground, { variant: 'skills' })}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 noto-font" style={{color: 'var(--text-primary)'}}>
              {currentContent.title}
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto noto-font">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Skills Category Selector */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 noto-font ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-[var(--card-bg)] text-[var(--text-secondary)] hover:text-[var(--primary-color)] hover:shadow-md border border-[var(--border)]'
                }`}
              >
                <div className={`icon-${category.icon} text-lg`}></div>
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Display Area */}
          <div className="minimal-card p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 noto-font">
                {skillCategories[activeCategory].title}
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 hover-lift transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-[var(--text-primary)] noto-font">{skill.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[skill.level]}`}>
                      {levelLabels[skill.level]}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-sm font-medium text-[var(--primary-color)] noto-font">
                      {currentContent.experienceLabel}: {skill.years}
                    </span>
                  </div>
                  
                  <p className="text-sm text-[var(--text-secondary)] noto-font leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center glass-card p-6">
              <div className="text-3xl font-bold gradient-text mb-2 noto-font">25+</div>
              <div className="text-sm text-[var(--text-secondary)] noto-font">{currentContent.stats.professionalSkills}</div>
            </div>
            <div className="text-center glass-card p-6">
              <div className="text-3xl font-bold gradient-text mb-2 noto-font">5</div>
              <div className="text-sm text-[var(--text-secondary)] noto-font">{currentContent.stats.skillDomains}</div>
            </div>
            <div className="text-center glass-card p-6">
              <div className="text-3xl font-bold gradient-text mb-2 noto-font">3</div>
              <div className="text-sm text-[var(--text-secondary)] noto-font">{currentContent.stats.languages}</div>
            </div>
            <div className="text-center glass-card p-6">
              <div className="text-3xl font-bold gradient-text mb-2 noto-font">{currentLang === 'zh' ? '2年以上' : '2+ years'}</div>
              <div className="text-sm text-[var(--text-secondary)] noto-font">{currentContent.stats.projectExperience}</div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}