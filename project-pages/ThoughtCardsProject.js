function ThoughtCardsProject() {
  try {
    const projectData = {
      title: "靈感管理與深度思考助手",
      subtitle: "AI 驅動的完整想法生命週期管理系統",
      period: "2024.11 - Present",
      status: "開發中",
      role: "產品經理 / 全棧開發者",
      platform: "Lovable (No-code) + GitHub",
      
      overview: "專為創意工作者與專業人士設計的靈感管理系統。提供日曆整合記錄、AI 智能對話引導、心智圖視覺化，以及自動行動計劃生成，打造從靈感捕捉到實際執行的完整閉環。解決靈感易逝、思路中斷、缺乏引導、行動落差四大核心問題。",
      
      problemDefinition: [
        {
          problem: "靈感易逝",
          detail: "突如其來的想法和靈感稍縱即逝，難以及時捕捉",
          solution: "語音快捕 + 日曆整合",
          icon: "⚡"
        },
        {
          problem: "思路中斷", 
          detail: "思考過程容易被打斷，忘記上次想到哪裡",
          solution: "AI 續接 + 對話保存",
          icon: "🔄"
        },
        {
          problem: "缺乏引導",
          detail: "獨自思考容易卡住，需要外部引導來深化思路", 
          solution: "智能對話 + 深度提問",
          icon: "🧠"
        },
        {
          problem: "行動落差",
          detail: "好想法難以轉化成具體的行動計畫",
          solution: "自動轉換 + Notion 同步",
          icon: "🎯"
        }
      ],

      targetUsers: [
        "創意工作者、企劃人員",
        "需要大量思考和創新的專業人士", 
        "有想法但缺乏系統化整理習慣的人"
      ],

      valueProposition: "提供一個完整的想法生命週期管理系統，從靈感捕捉到深度思考，再到行動規劃的無縫銜接。",

      coreFeatures: [
        {
          title: "首頁日曆整合",
          description: "月曆首頁顯示，點擊日期查看思緒，視覺化標示記錄日期",
          icon: "📅",
          details: [
            "首頁直接顯示月曆視圖",
            "點擊日期進入該天的思緒記錄詳情",
            "日期上有小圓點標示該天有記錄",
            "清晰的月曆界面，易於導航"
          ]
        },
        {
          title: "思緒探索編輯整合", 
          description: "合併編輯與探索，點擊思緒直接進入 AI 對話，自動更新記錄",
          icon: "✏️",
          details: [
            "合併「編輯」和「繼續探索」功能",
            "點擊思緒記錄直接進入 AI 對話模式",
            "對話結果自動更新原始記錄",
            "載入現有想法內容，繼續上次對話"
          ]
        },
        {
          title: "一目瞭然心智圖",
          description: "樹狀結構展現思考脈絡，不同顏色區分內容類型與進度狀態",
          icon: "🧠",
          details: [
            "樹狀結構清晰呈現思考脈絡",
            "不同顏色區分不同類型內容",
            "可展開/收合的分支結構",
            "顯示完成狀態和進度"
          ]
        },
        {
          title: "語音輸入體驗",
          description: "即時語音識別，麥克風狀態視覺回饋，與文字輸入無縫切換",
          icon: "🎤",
          details: [
            "麥克風按鈕有清楚的狀態指示",
            "語音識別文字即時顯示",
            "識別錯誤可以手動修正",
            "語音和文字輸入可以混合使用"
          ]
        },
        {
          title: "AI 對話引導",
          description: "智能提問深化思考，自動滾動與清空，Enter 快速發送",
          icon: "💬",
          details: [
            "AI 會問開放性問題引導思考",
            "對話能夠自然流暢地進行",
            "每次對話都會有新的洞察",
            "自動滾動到最新訊息"
          ]
        },
        {
          title: "Notion API 整合",
          description: "行動計劃自動同步至 Notion，支援雙向數據流動",
          icon: "🔗",
          details: [
            "思緒記錄自動同步到 Notion",
            "行動計劃智能轉換",
            "支援雙向數據流動",
            "備用本地儲存機制"
          ]
        }
      ],

      techStack: [
        { category: "開發平台", tech: "Lovable (No-code) + GitHub", color: "bg-slate-100 text-slate-700" },
        { category: "前端框架", tech: "React 18 + TypeScript + Vite", color: "bg-emerald-100 text-emerald-700" },
        { category: "UI 元件庫", tech: "shadcn/ui + Radix UI + Tailwind CSS", color: "bg-violet-100 text-violet-700" },
        { category: "後端服務", tech: "Supabase (PostgreSQL + Auth + Functions)", color: "bg-amber-100 text-amber-700" },
        { category: "AI 整合", tech: "OpenAI API + Custom AI Hooks", color: "bg-rose-100 text-rose-700" },
        { category: "語音處理", tech: "Web Speech API + 即時識別", color: "bg-yellow-100 text-yellow-700" },
        { category: "狀態管理", tech: "React Query + Context API", color: "bg-blue-100 text-blue-700" },
        { category: "視覺化引擎", tech: "Tree Layout + 自定義圖表", color: "bg-pink-100 text-pink-700" },
        { category: "外部整合", tech: "Notion API + .ics 日曆生成", color: "bg-teal-100 text-teal-700" }
      ],

      kpis: [
        { metric: "思緒記錄完成率", target: "> 90%", description: "用戶成功記錄並保存思緒的比例" },
        { metric: "AI 對話平均輪數", target: "> 3 輪", description: "用戶與 AI 深度互動的程度指標" },
        { metric: "心智圖查看率", target: "> 60%", description: "用戶主動查看心智圖的使用比例" },
        { metric: "想法轉行動比率", target: "> 40%", description: "想法成功轉化為行動計劃的轉換率" },
        { metric: "語音識別準確率", target: "> 85%", description: "語音轉文字的準確性技術指標" },
        { metric: "AI 回應時間", target: "< 5 秒", description: "AI 智能回應的平均響應時間" }
      ],

      userJourney: [
        {
          phase: "靈感捕捉",
          description: "用戶有新想法時快速記錄",
          steps: ["點擊新靈感按鈕", "語音或文字輸入", "AI 初步對話", "保存為思緒記錄"]
        },
        {
          phase: "深度思考", 
          description: "與 AI 對話深化想法",
          steps: ["選擇思緒記錄", "進入 AI 對話", "多輪深度探索", "自動更新記錄"]
        },
        {
          phase: "視覺化整理",
          description: "查看思考脈絡和關聯",
          steps: ["生成心智圖", "查看思考結構", "發現新關聯", "標記重點"]
        },
        {
          phase: "行動規劃",
          description: "將想法轉化為具體行動",
          steps: ["分析可執行性", "制定行動計劃", "同步到 Notion", "設定提醒"]
        }
      ],

      developmentPhases: [
        {
          phase: "Phase 1 - 核心功能 (MVP)",
          duration: "4 週",
          features: ["首頁日曆整合顯示", "基本思緒記錄和 AI 對話", "簡化的心智圖生成", "基礎行動項目轉換"],
          status: "已完成"
        },
        {
          phase: "Phase 2 - 增強體驗", 
          duration: "3 週",
          features: ["進階心智圖視覺化", "語音輸入功能", "Notion API 整合", "對話歷史保存和繼續"],
          status: "開發中"
        },
        {
          phase: "Phase 3 - 完善功能",
          duration: "2 週", 
          features: ["高級心智圖互動", "批量操作和搜尋", "資料匯出功能", "效能優化"],
          status: "規劃中"
        }
      ],

      challenges: [
        {
          challenge: "AI 對話體驗優化",
          solution: "實現自動滾動、即時清空、流暢互動",
          impact: "提升用戶專注度，減少操作干擾"
        },
        {
          challenge: "語音識別準確性",
          solution: "整合 Web Speech API，提供手動修正機制",
          impact: "支援多種輸入方式，提高易用性"
        },
        {
          challenge: "心智圖複雜度控制",
          solution: "採用簡潔樹狀結構，限制層級深度",
          impact: "平衡功能豐富性與易理解性"
        }
      ],

      results: [
        "成功建立完整的想法管理閉環",
        "實現語音識別準確率 85% 以上",
        "AI 對話平均輪數達到 3+ 輪",
        "用戶思緒記錄完成率超過 90%"
      ],

      lessons: [
        "No-code 平台大幅提升開發效率",
        "AI 對話設計需要深度用戶研究",
        "語音交互體驗是差異化關鍵",
        "數據同步是產品生態重要一環"
      ],

      demoUrl: "https://preview--thought-spark-cards.lovable.app/",
      githubUrl: "#"
    };

    const [activeTab, setActiveTab] = React.useState('overview');

    React.useEffect(() => {
      // 初始化或重新初始化 Lucide icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, [activeTab]);

    const tabs = [
      { id: 'overview', label: '專案概述', icon: 'lightbulb' },
      { id: 'problem', label: '問題定義', icon: 'alert-circle' },
      { id: 'features', label: '核心功能', icon: 'zap' },
      { id: 'tech', label: '技術架構', icon: 'code' },
      { id: 'journey', label: '用戶旅程', icon: 'map' },
      { id: 'results', label: '成果指標', icon: 'trending-up' }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="section-padding text-center">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {projectData.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-4xl mx-auto">
                {projectData.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {projectData.period}
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {projectData.status}
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  {projectData.role}
                </span>
              </div>
              <div className="flex justify-center gap-4">
                <a 
                  href={projectData.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <span data-lucide="external-link" className="w-5 h-5"></span>
                  體驗 Live Demo
                </a>
                <button 
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span data-lucide="arrow-left" className="w-5 h-5"></span>
                  返回作品集
                </button>
              </div>
            </div>
          </section>

          {/* Navigation Tabs */}
          <section className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-wrap justify-center gap-2 py-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-slate-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span data-lucide={tab.icon} className="w-4 h-4"></span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <main className="section-padding">
            {/* Overview Section */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold mb-6">專案概述</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {projectData.overview}
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Thought Spark Cards 介面"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-6">目標用戶</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {projectData.targetUsers.map((user, index) => (
                      <div key={index} className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg">
                        <div className="text-3xl mb-4">👥</div>
                        <p className="font-medium text-gray-800">{user}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-6">價值主張</h3>
                  <p className="text-lg text-gray-700 leading-relaxed text-center bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-lg">
                    {projectData.valueProposition}
                  </p>
                </div>
              </div>
            )}

            {/* Problem Definition Section */}
            {activeTab === 'problem' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold mb-8 text-center">問題定義與解決方案</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {projectData.problemDefinition.map((item, index) => (
                      <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border border-red-100">
                        <div className="flex items-start gap-4 mb-4">
                          <span className="text-3xl">{item.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-red-800 mb-2">{item.problem}</h3>
                            <p className="text-gray-700 mb-4">{item.detail}</p>
                          </div>
                        </div>
                        <div className="border-t border-red-200 pt-4">
                          <h4 className="font-semibold text-green-800 mb-2">解決方案</h4>
                          <p className="text-green-700 font-medium">{item.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Core Features Section */}
            {activeTab === 'features' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold mb-8 text-center">核心功能模組</h2>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {projectData.coreFeatures.map((feature, index) => (
                      <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg border border-slate-200">
                        <div className="flex items-start gap-4 mb-4">
                          <span className="text-3xl">{feature.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-slate-700 mb-2">{feature.title}</h3>
                            <p className="text-gray-700 mb-4">{feature.description}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span data-lucide="check" className="w-4 h-4 text-green-600"></span>
                              <span className="text-sm text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tech Stack Section */}
            {activeTab === 'tech' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold mb-8 text-center">技術架構</h2>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {projectData.techStack.map((tech, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h3 className="font-semibold text-gray-800 mb-2">{tech.category}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${tech.color}`}>
                          {tech.tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-6">開發階段規劃</h3>
                  <div className="space-y-6">
                    {projectData.developmentPhases.map((phase, index) => (
                      <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-bold text-gray-800">{phase.phase}</h4>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600">{phase.duration}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              phase.status === '已完成' ? 'bg-green-100 text-green-800' :
                              phase.status === '開發中' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {phase.status}
                            </span>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {phase.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span data-lucide="circle-check" className="w-4 h-4 text-slate-600"></span>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* User Journey Section */}
            {activeTab === 'journey' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold mb-8 text-center">用戶旅程設計</h2>
                  <div className="space-y-8">
                    {projectData.userJourney.map((phase, index) => (
                      <div key={index} className="relative">
                        {index < projectData.userJourney.length - 1 && (
                          <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-slate-400 to-gray-400"></div>
                        )}
                        <div className="flex items-start gap-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1 bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-slate-700 mb-2">{phase.phase}</h3>
                            <p className="text-gray-700 mb-4">{phase.description}</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                              {phase.steps.map((step, idx) => (
                                <div key={idx} className="bg-white p-3 rounded border border-slate-200">
                                  <span className="text-sm text-gray-700">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-6">挑戰與解決方案</h3>
                  <div className="space-y-6">
                    {projectData.challenges.map((item, index) => (
                      <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
                        <h4 className="font-bold text-orange-800 mb-2">挑戰：{item.challenge}</h4>
                        <p className="text-gray-700 mb-2">解決方案：{item.solution}</p>
                        <p className="text-green-700 font-medium">影響：{item.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Results Section */}
            {activeTab === 'results' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold mb-8 text-center">成功指標與產品 KPI</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {projectData.kpis.map((kpi, index) => (
                      <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-green-800 text-sm">{kpi.metric}</h3>
                          <span className="text-2xl font-bold text-green-600">{kpi.target}</span>
                        </div>
                        <p className="text-xs text-gray-600">{kpi.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-6">專案成果</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {projectData.results.map((result, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                        <span data-lucide="check-circle" className="w-5 h-5 text-green-600"></span>
                        <span className="text-gray-800">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-6">經驗學習</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {projectData.lessons.map((lesson, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                        <span data-lucide="lightbulb" className="w-5 h-5 text-amber-600"></span>
                        <span className="text-gray-800">{lesson}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </main>

          {/* Footer */}
          <footer className="text-center py-8 border-t border-gray-200">
            <p className="text-gray-600">
              © 2024 Vanessa Liu. 專注於產品創新與用戶體驗設計。
            </p>
          </footer>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ThoughtCardsProject component error:', error);
    return React.createElement('div', { className: 'error-message' }, 
      'Component failed to load. Please refresh the page.'
    );
  }
}

// 渲染組件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(ThoughtCardsProject));

// 初始化 Lucide icons
setTimeout(() => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}, 100);