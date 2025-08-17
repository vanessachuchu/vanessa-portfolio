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
          { id: 'tech', label: '技術棧', icon: 'code' },
          { id: 'results', label: '產品指標', icon: 'trending-up' }
        ],
        tabContent: {
          overview: {
            title: '脈德小腦瓜',
            subtitle: '從內向外伸展的想法落地生根系統 | 2024.11 - Present',
            description: '過去在數位領域的專業累積，讓我開始思考是否能創造一個空間，幫助人們練習「慢下來、感受當下」。這個專案靈感來自我一路以來對「思考如何落地行動」的探索，透過互動式思緒卡片，讓使用者可以自我覺察、自我提問，並練習將思考具體化。名字「mind-brain」象徵著從內向外伸展出來的想法落地生根。',
            targetUsers: '需要慢下來思考的現代人、追求自我覺察的個人、想要將想法具體化的創作者',
            demoBtn: '體驗 Live Demo',
            detailBtn: '查看專案源碼',
            items: [
              { problem: '思緒混亂', solution: '互動式思緒卡片整理', icon: 'brain' },
              { problem: '缺乏覺察', solution: '引導式自我提問系統', icon: 'eye' },
              { problem: '想法抽象', solution: '視覺化思考具體化', icon: 'target' },
              { problem: '生活急躁', solution: '冥想式慢思考練習', icon: 'heart' }
            ]
          },
          features: {
            title: '核心功能模組',
            items: [
              { icon: 'cards', title: '互動式思緒卡片', desc: '透過拖拽、點選等互動方式，讓抽象思考變得具體可見' },
              { icon: 'compass', title: '引導式自我探索', desc: '設計不同主題的提問路徑，協助使用者深入自我覺察' },
              { icon: 'tree-pine', title: '想法落地生根', desc: '將思考過程視覺化呈現，看見從mind到brain的思維擴展' },
              { icon: 'clock', title: '慢思考練習', desc: '提供節奏引導，讓使用者練習放慢思考速度，感受當下' },
              { icon: 'heart', title: '情緒覺察空間', desc: '結合冥想元素，幫助使用者覺察內在情緒與想法' },
              { icon: 'github', title: '開源專案', desc: '完全開源的專案，透過GitHub分享創作過程與技術實現' }
            ]
          },
          tech: {
            title: '技術架構',
            stack: [
              { category: '開發平台', tech: 'GitHub Pages 靜態部署' },
              { category: '前端框架', tech: 'Vanilla JavaScript + CSS3 + HTML5' },
              { category: 'UI 設計', tech: '自定義CSS + 動畫效果 + 響應式設計' },
              { category: '互動實現', tech: '原生 JavaScript 事件處理' },
              { category: '視覺效果', tech: 'CSS Transform + Transition + Animation' },
              { category: '資料存儲', tech: 'Local Storage + Session Storage' },
              { category: '部署方式', tech: 'GitHub Actions + GitHub Pages' },
              { category: '版本控制', tech: 'Git + GitHub Repository' },
              { category: '設計理念', tech: '極簡主義 + 使用者體驗優先' }
            ]
          },
          results: {
            title: '成功指標與產品 KPI',
            metrics: [
              { label: '使用者覺察提升度', target: '> 80%', desc: '用戶反饋在自我覺察方面的提升程度' },
              { label: '思考慢化成功率', target: '> 70%', desc: '用戶能夠放慢思考節奏，感受當下的比例' },
              { label: '想法具體化完成度', target: '> 60%', desc: '抽象想法成功轉化為具體可見的比例' },
              { label: '冥想練習持續性', target: '> 50%', desc: '用戶持續使用冥想思考功能的比例' },
              { label: '情緒覺察敏感度', target: '> 65%', desc: '用戶對內在情緒變化的察覺能力提升' },
              { label: '專案開源貢獻度', target: '持續更新', desc: 'GitHub專案的更新頻率與社群參與度' }
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
          { id: 'tech', label: 'Tech Stack', icon: 'code' },
          { id: 'results', label: 'Product Metrics', icon: 'trending-up' }
        ],
        tabContent: {
          overview: {
            title: 'Mind-Brain - Interactive Meditation & Thinking Project',
            subtitle: 'Ideas Rooting System from Inside Out | 2024.11 - Present',
            description: 'My professional experience in the digital field has led me to think about creating a space to help people practice "slowing down and feeling the present moment." This project is inspired by my ongoing exploration of "how to turn thoughts into actions" through interactive thought cards, allowing users to practice self-awareness, self-questioning, and making thinking concrete. The name "mind-brain" symbolizes ideas extending from inside out, taking root and growing.',
            targetUsers: 'Modern people who need to slow down, individuals pursuing self-awareness, creators wanting to materialize ideas',
            demoBtn: 'Experience Live Demo',
            detailBtn: 'View Project Source',
            items: [
              { problem: 'Chaotic Thoughts', solution: 'Interactive Thought Card Organization', icon: 'brain' },
              { problem: 'Lack of Awareness', solution: 'Guided Self-Inquiry System', icon: 'eye' },
              { problem: 'Abstract Ideas', solution: 'Visualization of Concrete Thinking', icon: 'target' },
              { problem: 'Rushed Living', solution: 'Meditative Slow Thinking Practice', icon: 'heart' }
            ]
          },
          features: {
            title: 'Core Feature Modules',
            items: [
              { icon: 'cards', title: 'Interactive Thought Cards', desc: 'Through drag-and-drop, clicking and other interactions, make abstract thinking concrete and visible' },
              { icon: 'compass', title: 'Guided Self-Exploration', desc: 'Design different themed inquiry paths to assist users in deep self-awareness' },
              { icon: 'tree-pine', title: 'Ideas Taking Root', desc: 'Visualize the thinking process, see the expansion from mind to brain' },
              { icon: 'clock', title: 'Slow Thinking Practice', desc: 'Provide rhythm guidance, let users practice slowing down thinking speed, feeling the present' },
              { icon: 'heart', title: 'Emotional Awareness Space', desc: 'Combine meditation elements to help users become aware of inner emotions and thoughts' },
              { icon: 'github', title: 'Open Source Project', desc: 'Completely open source project, sharing creative process and technical implementation through GitHub' }
            ]
          },
          tech: {
            title: 'Technical Architecture',
            stack: [
              { category: 'Development Platform', tech: 'GitHub Pages Static Deployment' },
              { category: 'Frontend Framework', tech: 'Vanilla JavaScript + CSS3 + HTML5' },
              { category: 'UI Design', tech: 'Custom CSS + Animation Effects + Responsive Design' },
              { category: 'Interaction Implementation', tech: 'Native JavaScript Event Handling' },
              { category: 'Visual Effects', tech: 'CSS Transform + Transition + Animation' },
              { category: 'Data Storage', tech: 'Local Storage + Session Storage' },
              { category: 'Deployment Method', tech: 'GitHub Actions + GitHub Pages' },
              { category: 'Version Control', tech: 'Git + GitHub Repository' },
              { category: 'Design Philosophy', tech: 'Minimalism + User Experience First' }
            ]
          },
          results: {
            title: 'Success Metrics & Product KPIs',
            metrics: [
              { label: 'User Awareness Enhancement', target: '> 80%', desc: 'User feedback on improvement in self-awareness levels' },
              { label: 'Thinking Slowdown Success Rate', target: '> 70%', desc: 'Percentage of users able to slow down thinking pace and feel the present' },
              { label: 'Idea Materialization Completion', target: '> 60%', desc: 'Percentage of abstract ideas successfully transformed into concrete forms' },
              { label: 'Meditation Practice Continuity', target: '> 50%', desc: 'Percentage of users who continue using meditation thinking features' },
              { label: 'Emotional Awareness Sensitivity', target: '> 65%', desc: 'Enhancement in users\' ability to perceive inner emotional changes' },
              { label: 'Open Source Contribution', target: 'Continuous Updates', desc: 'GitHub project update frequency and community participation' }
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
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto inter-font">
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
                    <h3 className="text-3xl font-bold mb-2 inter-font">{currentTabContent.title}</h3>
                    <p className="text-lg text-[var(--secondary-color)] mb-4 inter-font">{currentTabContent.subtitle}</p>
                    <p className="text-[var(--text-secondary)] max-w-4xl mx-auto mb-4 inter-font">{currentTabContent.description}</p>
                    
                    <div className="bg-[var(--bg-tertiary)] rounded-lg p-4 max-w-2xl mx-auto mb-6">
                      <p className="text-sm font-medium text-[var(--primary-color)] mb-1 inter-font">{currentLang === 'zh' ? '目標用戶' : 'Target Users'}</p>
                      <p className="text-sm text-[var(--text-secondary)] inter-font">{currentTabContent.targetUsers}</p>
                    </div>
                    
                    <div className="flex justify-center gap-4 mb-8">
                      <a 
                        href="https://vanessachuchu.github.io/mind-brain/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2 inter-font"
                      >
                        <div className="icon-external-link text-lg"></div>
                        <span>{currentTabContent.demoBtn}</span>
                      </a>
                      <a 
                        href="https://github.com/vanessachuchu/mind-brain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center gap-2 inter-font"
                      >
                        <div className="icon-file-text text-lg"></div>
                        <span>{currentTabContent.detailBtn}</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentTabContent.items.map((item, index) => (
                      <div key={index} className="minimal-card text-center hover-lift">
                        <div className="w-12 h-12 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className={`icon-${item.icon} text-lg text-white`}></div>
                        </div>
                        <h4 className="font-semibold mb-2 text-[var(--text-primary)] inter-font">
                          {currentLang === 'zh' ? '問題' : 'Problem'}：{item.problem}
                        </h4>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] mx-auto mb-2"></div>
                        <p className="text-sm text-[var(--primary-color)] font-medium inter-font">
                          {currentLang === 'zh' ? '解決' : 'Solution'}：{item.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-center inter-font">{currentTabContent.title}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentTabContent.items.map((item, index) => (
                      <div key={index} className="minimal-card hover-lift">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className={`icon-${item.icon} text-lg text-white`}></div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 inter-font">{item.title}</h4>
                            <p className="text-sm text-[var(--text-secondary)] inter-font">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'tech' && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-center inter-font">{currentTabContent.title}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentTabContent.stack.map((item, index) => (
                      <div key={index} className="interactive-card">
                        <h4 className="font-semibold text-[var(--primary-color)] mb-2 inter-font">{item.category}</h4>
                        <p className="text-[var(--text-secondary)] inter-font text-sm">{item.tech}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'results' && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-center inter-font">{currentTabContent.title}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentTabContent.metrics.map((item, index) => (
                      <div key={index} className="interactive-card">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold inter-font text-sm">{item.label}</h4>
                          <span className="text-xl font-bold gradient-text inter-font">{item.target}</span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] inter-font">{item.desc}</p>
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