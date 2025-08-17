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
            title: '靈感管理與深度思考助手',
            subtitle: 'AI 驅動的完整想法生命週期系統 | 2024.11 - Present',
            description: '專為創意工作者與專業人士設計的靈感管理系統。提供日曆整合記錄、AI 智能對話引導、心智圖視覺化，以及自動行動計劃生成，打造從靈感捕捉到實際執行的完整閉環。',
            targetUsers: '創意工作者、企劃人員、需要系統化思考的專業人士',
            demoBtn: '體驗 Live Demo',
            detailBtn: '查看詳細介紹',
            items: [
              { problem: '靈感易逝', solution: '語音快捕 + 日曆整合', icon: 'zap' },
              { problem: '思路中斷', solution: 'AI 續接 + 對話保存', icon: 'refresh-cw' },
              { problem: '缺乏引導', solution: '智能對話 + 深度提問', icon: 'brain' },
              { problem: '行動落差', solution: '自動轉換 + Notion 同步', icon: 'target' }
            ]
          },
          features: {
            title: '核心功能模組',
            items: [
              { icon: 'calendar', title: '首頁日曆整合', desc: '月曆首頁顯示，點擊日期查看思緒，視覺化標示記錄日期' },
              { icon: 'edit-3', title: '思緒探索編輯整合', desc: '合併編輯與探索，點擊思緒直接進入 AI 對話，自動更新記錄' },
              { icon: 'git-branch', title: '一目瞭然心智圖', desc: '樹狀結構展現思考脈絡，不同顏色區分內容類型與進度狀態' },
              { icon: 'mic', title: '語音輸入體驗', desc: '即時語音識別，麥克風狀態視覺回饋，與文字輸入無縫切換' },
              { icon: 'message-circle', title: 'AI 對話引導', desc: '智能提問深化思考，自動滾動與清空，Enter 快速發送' },
              { icon: 'external-link', title: 'Notion API 整合', desc: '行動計劃自動同步至 Notion，支援雙向數據流動' }
            ]
          },
          tech: {
            title: '技術架構',
            stack: [
              { category: '開發平台', tech: 'Lovable (No-code) + GitHub' },
              { category: '前端框架', tech: 'React 18 + TypeScript + Vite' },
              { category: 'UI 元件庫', tech: 'shadcn/ui + Radix UI + Tailwind CSS' },
              { category: '後端服務', tech: 'Supabase (PostgreSQL + Auth + Functions)' },
              { category: 'AI 整合', tech: 'OpenAI API + Custom AI Hooks' },
              { category: '語音處理', tech: 'Web Speech API + 即時識別' },
              { category: '狀態管理', tech: 'React Query + Context API' },
              { category: '視覺化引擎', tech: 'Tree Layout + 自定義圖表' },
              { category: '外部整合', tech: 'Notion API + .ics 日曆生成' }
            ]
          },
          results: {
            title: '成功指標與產品 KPI',
            metrics: [
              { label: '思緒記錄完成率', target: '> 90%', desc: '用戶成功記錄並保存思緒的比例' },
              { label: 'AI 對話平均輪數', target: '> 3 輪', desc: '用戶與 AI 深度互動的程度指標' },
              { label: '心智圖查看率', target: '> 60%', desc: '用戶主動查看心智圖的使用比例' },
              { label: '想法轉行動比率', target: '> 40%', desc: '想法成功轉化為行動計劃的轉換率' },
              { label: '語音識別準確率', target: '> 85%', desc: '語音轉文字的準確性技術指標' },
              { label: 'AI 回應時間', target: '< 5 秒', desc: 'AI 智能回應的平均響應時間' }
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
            title: 'Inspiration Management & Deep Thinking Assistant',
            subtitle: 'AI-Driven Complete Ideation Lifecycle System | 2024.11 - Present',
            description: 'A comprehensive inspiration management system designed for creative professionals and knowledge workers. Features calendar integration, AI-powered dialogue guidance, mind map visualization, and automated action plan generation, creating a complete loop from inspiration capture to actual implementation.',
            targetUsers: 'Creative professionals, planners, and professionals requiring systematic thinking',
            demoBtn: 'Experience Live Demo',
            detailBtn: 'View Detailed Introduction',
            items: [
              { problem: 'Fleeting Ideas', solution: 'Voice Capture + Calendar Integration', icon: 'zap' },
              { problem: 'Interrupted Thinking', solution: 'AI Continuation + Dialogue Preservation', icon: 'refresh-cw' },
              { problem: 'Lack of Guidance', solution: 'Smart Dialogue + Deep Questioning', icon: 'brain' },
              { problem: 'Action Gap', solution: 'Auto Conversion + Notion Sync', icon: 'target' }
            ]
          },
          features: {
            title: 'Core Feature Modules',
            items: [
              { icon: 'calendar', title: 'Homepage Calendar Integration', desc: 'Monthly calendar homepage display, click dates to view thoughts, visual indication of recorded dates' },
              { icon: 'edit-3', title: 'Thought Exploration & Editing Integration', desc: 'Merged editing and exploration, click thoughts to directly enter AI dialogue, automatic record updates' },
              { icon: 'git-branch', title: 'Intuitive Mind Mapping', desc: 'Tree structure displays thinking patterns, different colors distinguish content types and progress status' },
              { icon: 'mic', title: 'Voice Input Experience', desc: 'Real-time voice recognition, microphone status visual feedback, seamless switching with text input' },
              { icon: 'message-circle', title: 'AI Dialogue Guidance', desc: 'Intelligent questioning deepens thinking, auto-scroll and clear functions, Enter for quick sending' },
              { icon: 'external-link', title: 'Notion API Integration', desc: 'Action plans automatically sync to Notion, supports bidirectional data flow' }
            ]
          },
          tech: {
            title: 'Technical Architecture',
            stack: [
              { category: 'Development Platform', tech: 'Lovable (No-code) + GitHub' },
              { category: 'Frontend Framework', tech: 'React 18 + TypeScript + Vite' },
              { category: 'UI Component Library', tech: 'shadcn/ui + Radix UI + Tailwind CSS' },
              { category: 'Backend Services', tech: 'Supabase (PostgreSQL + Auth + Functions)' },
              { category: 'AI Integration', tech: 'OpenAI API + Custom AI Hooks' },
              { category: 'Voice Processing', tech: 'Web Speech API + Real-time Recognition' },
              { category: 'State Management', tech: 'React Query + Context API' },
              { category: 'Visualization Engine', tech: 'Tree Layout + Custom Charts' },
              { category: 'External Integration', tech: 'Notion API + .ics Calendar Generation' }
            ]
          },
          results: {
            title: 'Success Metrics & Product KPIs',
            metrics: [
              { label: 'Thought Recording Completion Rate', target: '> 90%', desc: 'Percentage of users successfully recording and saving thoughts' },
              { label: 'AI Dialogue Average Rounds', target: '> 3 rounds', desc: 'User-AI deep interaction engagement indicator' },
              { label: 'Mind Map View Rate', target: '> 60%', desc: 'User active mind map viewing usage ratio' },
              { label: 'Idea-to-Action Conversion Rate', target: '> 40%', desc: 'Conversion rate of ideas successfully transformed into action plans' },
              { label: 'Voice Recognition Accuracy', target: '> 85%', desc: 'Speech-to-text accuracy technical indicator' },
              { label: 'AI Response Time', target: '< 5 seconds', desc: 'AI intelligent response average response time' }
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
                        href="https://preview--thought-spark-cards.lovable.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2 inter-font"
                      >
                        <div className="icon-external-link text-lg"></div>
                        <span>{currentTabContent.demoBtn}</span>
                      </a>
                      <a 
                        href="project-thought-cards.html"
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