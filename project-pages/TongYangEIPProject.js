function TongYangEIPProject() {
  try {
    const projectData = {
      title: "東陽實業 EIP 入口網站開發案",
      subtitle: "跨國企業級EIP入口網站系統",
      client: "東陽實業 (TONG YANG GROUP)",
      period: "2023年3月1日 - 2023年12月29日 (9個月)",
      company: "多奇數位創意有限公司",
      role: "專案經理兼文件撰寫負責人",
      scale: "214個工作天，47個具體工作項目",
      
      overview: "東陽實業作為跨國企業集團，業務遍布北美、南美、歐洲多國，面臨系統分散化、國際化營運需求、複雜權限管理等挑戰。本專案開發統一EIP入口網站，整合多個獨立系統，建立企業級單一登入機制，支援39個使用者角色的精細權限管理，並提供多語系國際化支援。",
      
      challenges: [
        {
          title: "系統分散化問題",
          description: "多個獨立系統缺乏統一入口，員工需要記憶多組帳號密碼，系統間資訊無法有效整合",
          icon: "⚠️"
        },
        {
          title: "國際化營運需求", 
          description: "業務遍布北美、南美、歐洲多國，需要支援多語系操作環境，不同地區有不同的系統需求",
          icon: "🌍"
        },
        {
          title: "複雜權限管理",
          description: "39個不同使用者角色，各角色需要精細化權限控制，安全性與便利性需要平衡",
          icon: "🔐"
        }
      ],

      solutions: [
        {
          title: "統一身份認證",
          features: ["AD域整合", "企業級單一登入 (SSO)", "多重認證機制", "密碼管理"],
          description: "TYGOTP、WebTicket、首頁代登入，集中式密碼修改與安全控制"
        },
        {
          title: "國際化支援",
          features: ["全球區域管理", "多語系介面", "地區化配置", "獨立系統控制"],
          description: "North America、South America、Europe，繁體中文、英文、印尼文、越南文"
        },
        {
          title: "精細權限管理",
          features: ["39個使用者角色", "角色權限對應", "動態權限控制", "即時追蹤"],
          description: "涵蓋所有部門與職級，每個角色的詳細權限配置，即時的權限變更與追蹤"
        }
      ],

      phases: [
        {
          phase: "第一階段：需求分析",
          period: "3-4月",
          duration: "73天",
          tasks: [
            { name: "需求盤點", days: 15, description: "企業內部系統調研，使用者訪談與需求收集" },
            { name: "系統分析與需求設計", days: 21, description: "系統整合需求分析，使用者角色權限盤點" },
            { name: "既有系統整合盤點", days: 37, description: "AD域認證需求確認，Notes、智庫等系統整合評估" }
          ]
        },
        {
          phase: "第二階段：系統開發",
          period: "4-8月", 
          duration: "243天",
          tasks: [
            { name: "基礎建置作業", days: 148, description: "系統架構建置，資料庫設計與建立" },
            { name: "前台功能開發", days: 66, description: "15個功能模組開發，使用者介面設計" },
            { name: "系統整合開發", days: 29, description: "多系統API整合，認證機制整合" }
          ]
        },
        {
          phase: "第三階段：整合測試",
          period: "8-11月",
          duration: "83天", 
          tasks: [
            { name: "整合功能測試", days: 63, description: "系統功能完整性測試，跨系統整合測試" },
            { name: "UAT使用者驗收測試", days: 20, description: "使用者接受度測試，問題修正與優化" }
          ]
        },
        {
          phase: "第四階段：交付文檔",
          period: "11-12月",
          duration: "31天",
          tasks: [
            { name: "操作手冊撰寫", days: 20, description: "32頁完整操作指南，用戶培訓資料製作" },
            { name: "文件資料庫整理", days: 11, description: "技術文檔整理，專案交付準備" }
          ]
        }
      ],

      frontendFeatures: [
        {
          category: "個人工作區",
          features: [
            { name: "郵件整合", desc: "Notes AP 系統整合" },
            { name: "行事曆功能", desc: "個人與團隊行程管理" },
            { name: "待辦事項", desc: "任務管理與提醒" },
            { name: "簽核箱", desc: "電子簽核流程" }
          ]
        },
        {
          category: "資訊管理",
          features: [
            { name: "訊息公告", desc: "跑馬燈與公告管理" },
            { name: "訊息平台", desc: "iframe 整合外部系統" },
            { name: "智庫搜尋", desc: "企業知識庫查詢" },
            { name: "產業新聞", desc: "即時產業資訊" }
          ]
        },
        {
          category: "業務功能",
          features: [
            { name: "AM業績展示", desc: "當月達成率與年度比較" },
            { name: "員工查詢", desc: "卡號、姓名快速搜尋" },
            { name: "意見反映", desc: "企業內部意見收集平台" }
          ]
        },
        {
          category: "系統工具",
          features: [
            { name: "我的最愛", desc: "個人化書籤管理" },
            { name: "系統地圖", desc: "完整系統導航" },
            { name: "語系切換", desc: "多語系無縫切換" }
          ]
        }
      ],

      backendFeatures: [
        {
          category: "內容管理",
          features: [
            { name: "EIP訊息公告管理", desc: "公告發布與排程" },
            { name: "多語系內容編輯", desc: "各語系獨立管理" },
            { name: "首頁區塊維護", desc: "動態版面配置" }
          ]
        },
        {
          category: "安全監控",
          features: [
            { name: "登入資訊記錄", desc: "IP、瀏覽器、時間追蹤" },
            { name: "使用者行為分析", desc: "系統使用模式監控" },
            { name: "安全日誌管理", desc: "完整的操作記錄" }
          ]
        },
        {
          category: "權限管理",
          features: [
            { name: "角色設定管理", desc: "39個角色的權限配置" },
            { name: "權限變更追蹤", desc: "所有權限變更的完整記錄" },
            { name: "批量權限操作", desc: "高效的權限管理工具" }
          ]
        }
      ],

      deliverables: [
        {
          title: "完整EIP入口網站系統",
          items: ["15個功能模組", "四層導航架構", "跨國部署能力"]
        },
        {
          title: "32頁前台操作手冊",
          items: ["完整功能操作說明", "詳細截圖指引", "用戶培訓資料"]
        },
        {
          title: "完整技術文檔體系",
          items: ["使用者角色權限對應表 (39個角色)", "多語系功能設定文檔", "系統架構設計圖", "專案時程甘特圖"]
        },
        {
          title: "後台管理系統",
          items: ["內容管理工具", "安全監控機制", "權限管理平台", "國際化配置系統"]
        }
      ],

      businessValue: [
        {
          title: "提升工作效率",
          points: ["統一入口減少系統切換時間", "單一登入提升使用便利性", "個人化工作區提高生產力"]
        },
        {
          title: "強化安全管控", 
          points: ["集中式權限管理", "完整的登入行為追蹤", "企業級安全認證機制"]
        },
        {
          title: "支援國際化營運",
          points: ["多語系支援提升使用體驗", "地區化配置滿足各國需求", "統一管理降低維運成本"]
        }
      ],

      personalContributions: [
        {
          category: "專案管理成果",
          achievements: ["9個月214工作天準時交付", "跨部門多團隊協作管理", "63天整合測試期確保品質", "提前識別並解決關鍵問題"]
        },
        {
          category: "技術領導能力",
          achievements: ["深度理解企業複雜需求", "設計可擴展的系統架構", "統籌多系統技術整合", "建立開發與文檔標準"]
        },
        {
          category: "文檔與培訓",
          achievements: ["完整的系統設計文檔", "32頁詳細使用指南", "用戶培訓與系統導入", "建立完整的專案知識庫"]
        }
      ],

      techHighlights: [
        "企業級SSO整合：AD域單一登入",
        "國際化架構：支援全球多地區部署", 
        "精細權限控制：39個角色的RBAC系統",
        "多系統整合：統一入口的系統整合",
        "安全監控體系：完整的操作追蹤與分析"
      ]
    };

    const [activeTab, setActiveTab] = React.useState('overview');

    React.useEffect(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, [activeTab]);

    const tabs = [
      { id: 'overview', label: '專案概述', icon: 'briefcase' },
      { id: 'challenges', label: '挑戰與解決', icon: 'zap' },
      { id: 'timeline', label: '執行時程', icon: 'clock' },
      { id: 'features', label: '功能模組', icon: 'layers' },
      { id: 'results', label: '成果價值', icon: 'trophy' }
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-1">客戶</h3>
                  <p className="text-sm text-gray-600">{projectData.client}</p>
                </div>
                <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-1">執行時間</h3>
                  <p className="text-sm text-gray-600">{projectData.period}</p>
                </div>
                <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-1">我的角色</h3>
                  <p className="text-sm text-gray-600">{projectData.role}</p>
                </div>
                <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-1">專案規模</h3>
                  <p className="text-sm text-gray-600">{projectData.scale}</p>
                </div>
              </div>
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span data-lucide="arrow-left" className="w-5 h-5"></span>
                返回作品集
              </button>
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="東陽實業 EIP 系統架構"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-6">技術亮點</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {projectData.techHighlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg">
                        <span data-lucide="check-circle" className="w-5 h-5 text-emerald-600"></span>
                        <span className="text-gray-800">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Challenges & Solutions Section */}
            {activeTab === 'challenges' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold mb-8 text-center">專案挑戰</h2>
                  <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {projectData.challenges.map((challenge, index) => (
                      <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border border-red-100">
                        <div className="flex items-start gap-4 mb-4">
                          <span className="text-3xl">{challenge.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-red-800 mb-2">{challenge.title}</h3>
                            <p className="text-gray-700">{challenge.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold mb-8 text-center">解決方案</h2>
                  <div className="space-y-8">
                    {projectData.solutions.map((solution, index) => (
                      <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                        <h3 className="text-xl font-bold text-green-800 mb-4">{solution.title}</h3>
                        <p className="text-gray-700 mb-4">{solution.description}</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                          {solution.features.map((feature, idx) => (
                            <div key={idx} className="bg-white p-3 rounded border border-green-100">
                              <span className="text-sm text-gray-700 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Timeline Section */}
            {activeTab === 'timeline' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold mb-8 text-center">專案執行時程</h2>
                  <div className="space-y-12">
                    {projectData.phases.map((phase, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start gap-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg">
                              <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-slate-700">{phase.phase}</h3>
                                <div className="text-right">
                                  <div className="text-sm text-gray-600">{phase.period}</div>
                                  <div className="text-lg font-bold text-slate-600">{phase.duration}</div>
                                </div>
                              </div>
                              <div className="space-y-4">
                                {phase.tasks.map((task, idx) => (
                                  <div key={idx} className="bg-white p-4 rounded border border-slate-200">
                                    <div className="flex justify-between items-start mb-2">
                                      <h4 className="font-semibold text-gray-800">{task.name}</h4>
                                      <span className="text-sm font-medium text-slate-600">{task.days}天</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{task.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        {index < projectData.phases.length - 1 && (
                          <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-slate-400 to-gray-400"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Features Section */}
            {activeTab === 'features' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold mb-8 text-center">前台使用者功能</h2>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {projectData.frontendFeatures.map((category, index) => (
                      <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                        <h3 className="text-xl font-bold text-blue-800 mb-4">{category.category}</h3>
                        <div className="space-y-3">
                          {category.features.map((feature, idx) => (
                            <div key={idx} className="bg-white p-3 rounded border border-blue-100">
                              <h4 className="font-semibold text-gray-800 mb-1">{feature.name}</h4>
                              <p className="text-sm text-gray-600">{feature.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold mb-8 text-center">後台管理功能</h2>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {projectData.backendFeatures.map((category, index) => (
                      <div key={index} className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
                        <h3 className="text-xl font-bold text-purple-800 mb-4">{category.category}</h3>
                        <div className="space-y-3">
                          {category.features.map((feature, idx) => (
                            <div key={idx} className="bg-white p-3 rounded border border-purple-100">
                              <h4 className="font-semibold text-gray-800 mb-1">{feature.name}</h4>
                              <p className="text-sm text-gray-600">{feature.desc}</p>
                            </div>
                          ))}
                        </div>
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
                  <h2 className="text-3xl font-bold mb-8 text-center">交付成果</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {projectData.deliverables.map((deliverable, index) => (
                      <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                        <h3 className="text-xl font-bold text-green-800 mb-4">{deliverable.title}</h3>
                        <div className="space-y-2">
                          {deliverable.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span data-lucide="check" className="w-4 h-4 text-green-600"></span>
                              <span className="text-sm text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-6">業務價值</h3>
                  <div className="grid lg:grid-cols-3 gap-8 mb-8">
                    {projectData.businessValue.map((value, index) => (
                      <div key={index} className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-lg border border-yellow-200">
                        <h4 className="text-lg font-bold text-amber-800 mb-4">{value.title}</h4>
                        <div className="space-y-2">
                          {value.points.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span data-lucide="star" className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-6">我的專業貢獻</h3>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {projectData.personalContributions.map((contribution, index) => (
                      <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg border border-slate-200">
                        <h4 className="text-lg font-bold text-slate-700 mb-4">{contribution.category}</h4>
                        <div className="space-y-2">
                          {contribution.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span data-lucide="award" className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700">{achievement}</span>
                            </div>
                          ))}
                        </div>
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
              © 2024 Vanessa Liu. 專注於企業級系統開發與專案管理。
            </p>
          </footer>
        </div>
      </div>
    );
  } catch (error) {
    console.error('TongYangEIPProject component error:', error);
    return React.createElement('div', { className: 'error-message' }, 
      'Component failed to load. Please refresh the page.'
    );
  }
}

// 渲染組件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(TongYangEIPProject));

// 初始化 Lucide icons
setTimeout(() => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}, 100);