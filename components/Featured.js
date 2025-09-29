function Featured() {
  try {
    const [activeTab, setActiveTab] = React.useState('overview');
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
        title: '特色專案',
        subtitle: '展示我在 AI 整合與產品創新方面的核心能力',
        tabs: [
          { id: 'overview', label: '專案概述', icon: 'lightbulb' },
          { id: 'features', label: '功能特色', icon: 'zap' },
          { id: 'results', label: '使用體驗', icon: 'heart' }
        ],
        tabContent: {
          overview: {
            title: '脈德小腦瓜',
            subtitle: 'React + TypeScript 全端思考管理應用 | 2024.11 - Present',
            description: '這不只是一個專案，而是我對「如何讓科技真正貼近人心」的實踐。從設計到開發，每一個功能都在思考：如何讓忙碌的現代人有一個溫暖的數位空間，可以慢下來、整理思緒、感受內心。我用 React + TypeScript 打造了完整的前後端系統，但技術只是手段，真正的目標是創造一個讓人感到被理解的產品。',
            targetUsers: '忙碌卻渴望內心平靜的現代人、想要記錄思考歷程的創作者、追求自我覺察與成長的個人',
            demoBtn: '體驗 Live Demo',
            detailBtn: '查看專案源碼',
            items: [
              { problem: '思緒混亂無處安放', solution: '直覺式思緒卡片記錄', icon: 'brain' },
              { problem: '時間管理總是焦慮', solution: '溫柔的日曆與待辦整合', icon: 'eye' },
              { problem: '想法容易遺忘', solution: '智能搜索與分類系統', icon: 'target' },
              { problem: '缺乏反思空間', solution: '個人化的成長記錄', icon: 'heart' }
            ]
          },
          features: {
            title: '核心功能設計',
            items: [
              { icon: 'cards', title: '思緒卡片系統', desc: '直覺的卡片式思考記錄，每一張卡片都承載著一段心路歷程，讓想法有溫度地被保存' },
              { icon: 'calendar', title: '溫柔的時間管理', desc: '結合日曆與待辦事項，不是催促你快點完成，而是陪伴你慢慢實現目標' },
              { icon: 'search', title: '智能內容搜索', desc: '當你想回顧某個想法時，能快速找到那些珍貴的思考片段，每一次搜索都是重新發現自己' },
              { icon: 'user', title: '個人化成長空間', desc: '基於 Supabase 的使用者系統，創造專屬於你的心靈角落，安全且私密' },
              { icon: 'settings', title: '貼心的個人設定', desc: '從主題到功能，都能依照個人喜好調整，讓工具真正為你服務，而不是你遷就工具' },
              { icon: 'responsive', title: '隨時隨地的陪伴', desc: '響應式設計讓你在任何裝置上都能感受到一致的溫暖體驗，思考不受限於地點' }
            ]
          },
          results: {
            title: '使用體驗與真實回饋',
            experiences: [
              { aspect: '技術實現的溫度', feeling: '驚喜、感動', desc: '即使是技術性較強的 React + TypeScript 專案，使用起來仍然感到溫暖，技術是有溫度的' },
              { aspect: '思緒記錄的自然感', feeling: '流暢、直覺', desc: '卡片式的思考記錄讓人想到真實的筆記本，數位工具也能有手寫的親近感' },
              { aspect: '時間管理不再焦慮', feeling: '從容、安心', desc: '日曆功能不是提醒你有多少事要做，而是讓你看見自己的成長軌跡' },
              { aspect: '個人空間的安全感', feeling: '放心、信任', desc: '知道自己的想法被安全地保存，可以完全敞開心房記錄最真實的思考' },
              { aspect: '跨裝置的一致體驗', feeling: '便利、貼心', desc: '無論在電腦或手機上使用，都能感受到同樣的溫暖和便利' },
              { aspect: '開源精神的共鳴', feeling: '認同、參與', desc: '看到完整的技術實現過程，感受到創作者的用心和開放分享的精神' }
            ]
          }
        }
      },
      en: {
        title: 'Featured Projects',
        subtitle: 'Showcasing core capabilities in AI integration and product innovation',
        tabs: [
          { id: 'overview', label: 'Project Overview', icon: 'lightbulb' },
          { id: 'features', label: 'Key Features', icon: 'zap' },
          { id: 'results', label: 'User Experience', icon: 'heart' }
        ],
        tabContent: {
          overview: {
            title: 'Mind-Brain',
            subtitle: 'React + TypeScript Full-Stack Thinking Management App | 2024.11 - Present',
            description: 'This is not just a project, but my practice of "how to make technology truly touch people\'s hearts." From design to development, every feature considers: how can we give busy modern people a warm digital space to slow down, organize thoughts, and feel inner peace? I built a complete front-end and back-end system with React + TypeScript, but technology is just the means—the real goal is to create a product that makes people feel understood.',
            targetUsers: 'Busy people yearning for inner peace, creators wanting to record thought processes, individuals pursuing self-awareness and growth',
            demoBtn: 'Experience Live Demo',
            detailBtn: 'View Project Source',
            items: [
              { problem: 'Chaotic thoughts nowhere to go', solution: 'Intuitive thought card recording', icon: 'brain' },
              { problem: 'Time management anxiety', solution: 'Gentle calendar and todo integration', icon: 'eye' },
              { problem: 'Easily forgotten ideas', solution: 'Smart search and categorization', icon: 'target' },
              { problem: 'Lack of reflection space', solution: 'Personalized growth records', icon: 'heart' }
            ]
          },
          features: {
            title: 'Core Feature Design',
            items: [
              { icon: 'cards', title: 'Thought Card System', desc: 'Intuitive card-based thought recording, each card carries a piece of your journey, preserving ideas with warmth' },
              { icon: 'calendar', title: 'Gentle Time Management', desc: 'Combines calendar with todos—not rushing you to finish faster, but accompanying you to achieve goals slowly' },
              { icon: 'search', title: 'Smart Content Search', desc: 'When you want to revisit an idea, quickly find those precious thinking moments—each search is rediscovering yourself' },
              { icon: 'user', title: 'Personalized Growth Space', desc: 'Supabase-based user system creates your own soul corner, secure and private' },
              { icon: 'settings', title: 'Thoughtful Personal Settings', desc: 'From themes to features, customize according to personal preferences—let tools serve you, not the other way around' },
              { icon: 'responsive', title: 'Anytime, Anywhere Companionship', desc: 'Responsive design lets you feel consistent warmth on any device, thinking knows no boundaries' }
            ]
          },
          results: {
            title: 'User Experience & Real Feedback',
            experiences: [
              { aspect: 'Technology with Warmth', feeling: 'Surprised & Touched', desc: 'Even with technical React + TypeScript implementation, users still feel warmth—technology can have heart' },
              { aspect: 'Natural Thought Recording', feeling: 'Smooth & Intuitive', desc: 'Card-based thinking records feel like real notebooks—digital tools can have handwritten intimacy' },
              { aspect: 'No More Time Anxiety', feeling: 'Calm & Peaceful', desc: 'Calendar function doesn\'t remind you how much to do, but shows your growth journey' },
              { aspect: 'Personal Space Security', feeling: 'Safe & Trusted', desc: 'Knowing thoughts are safely stored, users can completely open up and record authentic thinking' },
              { aspect: 'Consistent Cross-Device Experience', feeling: 'Convenient & Caring', desc: 'Whether on computer or phone, users feel the same warmth and convenience' },
              { aspect: 'Open Source Spirit Resonance', feeling: 'Aligned & Engaged', desc: 'Seeing complete technical implementation, users feel the creator\'s care and open sharing spirit' }
            ]
          }
        }
      }
    };

    const currentContent = content[currentLang] || content.zh;
    const currentTabContent = currentContent.tabContent[activeTab];

    return (
      <section 
        id="featured" 
        className="section-padding"
        data-name="featured-section" 
        data-file="components/Featured.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 serif-heading">
              {currentContent.title}
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto noto-font">
              {currentContent.subtitle}
            </p>
          </div>

          <div className="surf-card p-8 lg:p-12 relative">
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {currentContent.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-medium transition-all duration-500 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'text-white shadow-lg pulse-glow'
                      : 'bg-white/70 text-[var(--text-secondary)] hover:bg-white hover:text-[var(--primary-color)] hover:shadow-md'
                  }`}
                  style={activeTab === tab.id ? {
                    background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'
                  } : {}}
                >
                  <div className={`icon-${tab.icon} text-lg`}></div>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="fade-in-up">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2 serif-heading">{currentTabContent.title}</h3>
                    <p className="text-lg text-[var(--secondary-color)] mb-4 noto-font">{currentTabContent.subtitle}</p>
                    <p className="text-[var(--text-secondary)] max-w-4xl mx-auto mb-4 noto-font">{currentTabContent.description}</p>
                    
                    <div className="bg-[var(--bg-tertiary)] rounded-lg p-4 max-w-2xl mx-auto mb-6">
                      <p className="text-sm font-medium text-[var(--primary-color)] mb-1 noto-font">{currentLang === 'zh' ? '目標用戶' : 'Target Users'}</p>
                      <p className="text-sm text-[var(--text-secondary)] noto-font">{currentTabContent.targetUsers}</p>
                    </div>
                    
                    <div className="flex justify-center gap-4 mb-8">
                      <a 
                        href="https://vanessachuchu.github.io/mind-brain/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2 noto-font"
                      >
                        <div className="icon-external-link text-lg"></div>
                        <span>{currentTabContent.demoBtn}</span>
                      </a>
                      <a 
                        href="https://github.com/vanessachuchu/mind-brain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center gap-2 noto-font"
                      >
                        <div className="icon-file-text text-lg"></div>
                        <span>{currentTabContent.detailBtn}</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentTabContent.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 bg-white/40 rounded-lg">
                          <div className="w-10 h-10 rounded-lg flex-shrink-0" style={{
                            background: index % 4 === 0 ? 'linear-gradient(135deg, var(--secondary-color), var(--primary-color))' :
                                       index % 4 === 1 ? 'linear-gradient(135deg, var(--accent-color), var(--primary-color))' :
                                       index % 4 === 2 ? 'linear-gradient(135deg, var(--accent-warm), var(--primary-color))' :
                                                        'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'
                          }}>
                            <div className="w-full h-full rounded-lg bg-white/20"></div>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-medium text-[var(--text-primary)] noto-font text-sm mb-1">
                              {item.problem}
                            </h5>
                            <p className="text-xs text-[var(--primary-color)] noto-font">
                              {item.solution}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-center serif-heading">{currentTabContent.title}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentTabContent.items.map((item, index) => (
                      <div key={index} className="glass-card p-6 hover-lift">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 relative" style={{
                            background: index % 6 === 0 ? 'linear-gradient(135deg, var(--secondary-color), var(--primary-color))' :
                                       index % 6 === 1 ? 'linear-gradient(135deg, var(--accent-color), var(--secondary-color))' :
                                       index % 6 === 2 ? 'linear-gradient(135deg, var(--accent-warm), var(--primary-color))' :
                                       index % 6 === 3 ? 'linear-gradient(135deg, var(--primary-color), var(--accent-color))' :
                                       index % 6 === 4 ? 'linear-gradient(135deg, var(--accent-warm), var(--secondary-color))' :
                                                        'linear-gradient(135deg, var(--primary-color), var(--accent-warm))'
                          }}>
                            {/* 特殊標記 - 互動式思緒卡片 */}
                            {item.title === '互動式思緒卡片' || item.title === 'Interactive Thought Cards' ? (
                              <div className="relative">
                                <div className="w-6 h-8 bg-white/90 rounded-sm transform -rotate-12 absolute -left-1"></div>
                                <div className="w-6 h-8 bg-white/70 rounded-sm transform rotate-6"></div>
                                <div className="w-6 h-8 bg-white/80 rounded-sm transform rotate-0 absolute top-0 left-0"></div>
                              </div>
                            ) : (
                              <div className="relative">
                                <div className="w-6 h-6 rounded-full bg-white/40 backdrop-blur-sm"></div>
                                <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-white/60"></div>
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 noto-font text-[var(--text-primary)]">{item.title}</h4>
                            <p className="text-sm text-[var(--text-secondary)] noto-font leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'results' && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-center serif-heading">{currentTabContent.title}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentTabContent.experiences.map((item, index) => (
                      <div key={index} className="glass-card p-6 hover-lift">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center relative" style={{
                            background: index % 6 === 0 ? 'linear-gradient(135deg, var(--secondary-color), var(--primary-color))' :
                                       index % 6 === 1 ? 'linear-gradient(135deg, var(--accent-color), var(--secondary-color))' :
                                       index % 6 === 2 ? 'linear-gradient(135deg, var(--accent-warm), var(--primary-color))' :
                                       index % 6 === 3 ? 'linear-gradient(135deg, var(--primary-color), var(--accent-color))' :
                                       index % 6 === 4 ? 'linear-gradient(135deg, var(--accent-warm), var(--secondary-color))' :
                                                        'linear-gradient(135deg, var(--primary-color), var(--accent-warm))'
                          }}>
                            <div className="relative">
                              <div className="w-5 h-5 rounded-full bg-white/50 backdrop-blur-sm pulse"></div>
                              <div className="absolute top-1 left-1 w-3 h-3 rounded-full bg-white/70"></div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold noto-font text-[var(--text-primary)]">{item.aspect}</h4>
                            <span className="text-sm text-[var(--primary-color)] noto-font font-medium">{item.feeling}</span>
                          </div>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] noto-font leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Featured component error:', error);
    return null;
  }
}