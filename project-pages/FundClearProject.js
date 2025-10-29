function FundClearProject() {
  try {
    const projectData = {
      title: "基金資訊觀測站 2.0",
      subtitle: "台灣金融業核心基礎設施重構專案",
      client: "台灣集中保管結算所 (TDCC)",
      period: "2023年6月 - 2025年6月 (三階段交付)",
      company: "多奇數位創意有限公司",
      role: "專案經理 PM",
      scale: "90個功能模組，6大平台整合",

      overview: "基金資訊觀測站是台灣金融業的核心基礎設施，由集保結算所委託開發，服務境內、境外、期信基金等超過1,000檔基金的資訊揭露與申報需求。2.0專案目標是將舊有獨立運作的多個子系統整合為統一生態系統，建立標準化的前後台架構，並新增ESG基金、數據統計、投資教育等創新功能模組。本專案採用Angular 14+前端框架與Spring Boot 2.7+後端架構，經過嚴格的資安檢測與測試流程，於三個階段陸續交付上線。",

      challenges: [
        {
          title: "複雜的專案範疇",
          description: "需整合6大平台（主站、境外/境內公告、期信公告/申報）共90個功能模組，涵蓋前台公開資訊與後台管理系統",
          icon: "📊"
        },
        {
          title: "多重利害關係人協調",
          description: "同步協調集保4大部門（金融資訊部、資訊作業部、數位暨資安部、基金暨國際部）及多奇6大技術組別，確保需求對齊",
          icon: "🤝"
        },
        {
          title: "嚴格的交付時程",
          description: "三階段交付模式，每階段需經過功能開發、集保測試、資安檢測，並於固定時間點上線，不容延遲",
          icon: "⏱️"
        }
      ],

      solutions: [
        {
          title: "階段性交付策略",
          features: ["第一階段：首頁+基金搜尋", "第二階段：ESG+數據統計+投資教育", "第三階段：4大公告申報平台"],
          description: "採用Scrum敏捷開發方法，每週更新Azure DevOps進度儀表板，每月召開專案會議向集保報告"
        },
        {
          title: "跨部門溝通機制",
          features: ["每週進度更新", "每月專案會議", "測試計畫確認", "需求變更管理"],
          description: "擔任多奇與集保的溝通橋樑，管理25人開發團隊，確保雙方測試標準與驗收標準一致"
        },
        {
          title: "完整測試與品質控管",
          features: ["測試腳本撰寫", "Bug追蹤管理", "資安檢測協調", "UAT驗收測試"],
          description: "建立完整測試計畫與測試情境，追蹤每個階段的Bug修復進度，確保於下個Sprint前修正完畢"
        }
      ],

      phases: [
        {
          phase: "第一階段：主站開發",
          period: "2023年6月 - 2023年11月",
          duration: "6個月",
          tasks: [
            { name: "前台-首頁", days: "14功能", description: "訊息公告、跑馬燈、快速導航、系統地圖" },
            { name: "前台-基金搜尋", days: "12功能", description: "進階搜尋、基金比較、淨值查詢、績效排名" },
            { name: "後台管理系統", days: "4模組", description: "首頁內容管理、權限管理、投資教育管理、參數管理" }
          ],
          milestones: [
            { date: "8/4", event: "第一批功能交付" },
            { date: "8/18", event: "集保測試完畢提交Bug單" },
            { date: "9/15", event: "第二批功能測試完成" },
            { date: "10/31", event: "資安檢測完成" },
            { date: "11/30", event: "專案驗收，第一階段上線" }
          ],
          stats: { total: 90, toDo: 35, inProgress: 28, qa: 14, inReview: 13 }
        },
        {
          phase: "第二階段：功能擴充",
          period: "2024年5月 - 2024年10月",
          duration: "6個月",
          tasks: [
            { name: "前台-ESG基金", days: "新功能", description: "ESG評級、永續投資篩選、碳排放數據" },
            { name: "前台-數據與統計", days: "新功能", description: "市場趨勢分析、資金流向、產業分布" },
            { name: "前台-投資教育", days: "新功能", description: "基金知識庫、投資指南、風險教育" }
          ],
          milestones: [
            { date: "8/30", event: "功能開發完成" },
            { date: "9/20", event: "集保測試完畢" },
            { date: "10/18", event: "資安檢測通過" },
            { date: "10/31", event: "第二階段功能上線" }
          ]
        },
        {
          phase: "第三階段：平台整合",
          period: "2024年8月 - 2025年6月",
          duration: "11個月",
          tasks: [
            { name: "期信申報平台翻新", days: "測試2/28", description: "申報流程優化、資料驗證、報表產出" },
            { name: "期信公告平台", days: "測試11/29", description: "公告發布、資訊揭露、歷史查詢" },
            { name: "境外公告平台", days: "測試2/28", description: "海外基金公告、多語系支援" },
            { name: "境內公告平台", days: "測試3/28", description: "國內基金公告、法規遵循" }
          ],
          milestones: [
            { date: "2/28", event: "期信申報平台測試完成" },
            { date: "11/29", event: "期信公告平台測試完成" },
            { date: "3/28", event: "境內公告平台測試完成" },
            { date: "5/28", event: "整合測試" },
            { date: "6/30", event: "資安檢測與第三階段上線" }
          ]
        }
      ],

      frontendFeatures: [
        {
          category: "首頁功能",
          features: [
            { name: "訊息公告管理", desc: "跑馬燈、最新消息、重要公告" },
            { name: "快速導航", desc: "熱門基金、常用功能、系統地圖" },
            { name: "基金推薦", desc: "精選基金、主題式推薦、績效排行" },
            { name: "市場概況", desc: "即時行情、市場統計、趨勢分析" }
          ]
        },
        {
          category: "基金搜尋",
          features: [
            { name: "進階搜尋", desc: "多條件篩選、關鍵字查詢、標籤分類" },
            { name: "基金比較", desc: "最多5檔基金並列比較分析" },
            { name: "淨值查詢", desc: "歷史淨值、走勢圖表、績效計算" },
            { name: "績效排名", desc: "依期間、類型、規模排序" }
          ]
        },
        {
          category: "ESG基金",
          features: [
            { name: "ESG評級", desc: "環境、社會、治理三大指標" },
            { name: "永續投資篩選", desc: "綠色基金、社會責任投資" },
            { name: "碳排放數據", desc: "碳足跡追蹤、減碳目標" },
            { name: "影響力報告", desc: "投資影響力評估與揭露" }
          ]
        },
        {
          category: "數據與統計",
          features: [
            { name: "市場趨勢分析", desc: "資金流向、申購贖回趨勢" },
            { name: "產業分布", desc: "產業配置、地區分布圖表" },
            { name: "統計報表", desc: "月報、季報、年度統計" },
            { name: "數據視覺化", desc: "互動式圖表、儀表板" }
          ]
        },
        {
          category: "投資教育",
          features: [
            { name: "基金知識庫", desc: "基金類型、投資概念、專業術語" },
            { name: "投資指南", desc: "投資策略、風險管理、配置建議" },
            { name: "影音教材", desc: "教學影片、線上課程、專家講座" },
            { name: "投資工具", desc: "試算工具、風險評估、目標規劃" }
          ]
        },
        {
          category: "公告與資訊",
          features: [
            { name: "法規公告", desc: "主管機關公告、法規異動" },
            { name: "業者專區", desc: "基金公司專屬功能與資訊" },
            { name: "申報系統", desc: "資料申報、報表上傳、進度查詢" },
            { name: "文件下載", desc: "表單下載、歷史資料、參考文件" }
          ]
        }
      ],

      backendFeatures: [
        {
          category: "首頁內容管理",
          features: [
            { name: "訊息公告編輯", desc: "公告發布、排程設定、權限控制" },
            { name: "跑馬燈管理", desc: "跑馬燈內容、顯示順序、時間設定" },
            { name: "推薦基金設定", desc: "精選基金、推薦理由、顯示邏輯" },
            { name: "版面配置", desc: "區塊設定、樣式調整、響應式控制" }
          ]
        },
        {
          category: "權限管理",
          features: [
            { name: "使用者管理", desc: "帳號建立、角色分配、狀態管理" },
            { name: "角色權限設定", desc: "功能權限、資料權限、操作權限" },
            { name: "登入記錄追蹤", desc: "IP記錄、登入時間、行為分析" },
            { name: "安全稽核日誌", desc: "操作記錄、異常偵測、報表產出" }
          ]
        },
        {
          category: "投資教育管理",
          features: [
            { name: "文章編輯發布", desc: "富文本編輯器、分類標籤、SEO設定" },
            { name: "影音內容管理", desc: "影片上傳、字幕編輯、播放清單" },
            { name: "教材分類維護", desc: "類別設定、標籤管理、關聯設定" },
            { name: "使用數據分析", desc: "瀏覽統計、熱門內容、學習路徑" }
          ]
        },
        {
          category: "參數管理",
          features: [
            { name: "系統參數設定", desc: "全域設定、環境變數、功能開關" },
            { name: "基金類別維護", desc: "類別定義、屬性設定、對應規則" },
            { name: "資料來源管理", desc: "API設定、資料同步、排程設定" },
            { name: "快取管理", desc: "快取策略、清除機制、效能監控" }
          ]
        }
      ],

      deliverables: [
        {
          title: "完整的前台系統",
          items: ["7大功能模組（首頁、基金搜尋、ESG基金、數據統計、投資教育、公告資訊、業者專區）", "響應式設計支援行動裝置", "符合WCAG 2.0無障礙標準"]
        },
        {
          title: "6大平台整合",
          items: ["主站 (www.fundclear.com.tw)", "境外基金公告平台", "境內基金公告平台", "期信公告平台", "報告中心", "資訊申報系統"]
        },
        {
          title: "後台管理系統",
          items: ["首頁內容管理", "權限管理", "投資教育管理", "參數管理", "完整的操作日誌與稽核追蹤"]
        },
        {
          title: "技術文檔與保固",
          items: ["系統架構設計文檔", "API介接文件", "操作手冊與教育訓練（16小時）", "1年保固服務（2小時回應、4小時故障排除、7天錯誤修復）"]
        }
      ],

      businessValue: [
        {
          title: "提升資訊透明度",
          points: ["統一的基金資訊入口，提升投資人查詢便利性", "ESG資訊揭露，符合永續投資趨勢", "完整的數據統計，支援投資決策"]
        },
        {
          title: "強化系統整合性",
          points: ["6大平台整合為統一生態系統", "標準化的前後台架構，降低維運成本", "API介接設計，支援未來擴充"]
        },
        {
          title: "符合法規遵循",
          points: ["通過金融業資安檢測", "完整的操作記錄與稽核追蹤", "符合主管機關對資訊揭露的要求"]
        }
      ],

      personalContributions: [
        {
          category: "專案管理成果",
          achievements: ["三階段共90個功能全數如期交付", "每週更新Azure DevOps進度儀表板，保持專案透明度", "每月召開專案會議，確保利害關係人對齊", "成功協調25人開發團隊與集保4大部門"]
        },
        {
          category: "需求分析與規劃",
          achievements: ["完成7大功能模組的需求盤點與分析", "撰寫測試腳本與測試計畫，定義測試情境", "規劃後台管理系統的4大功能區域", "建立頁面盤點清單，明確UI/UX配色與樣式"]
        },
        {
          category: "測試與品質控管",
          achievements: ["建立完整測試計畫與驗收標準", "追蹤每個階段的Bug修復進度，確保於Sprint前修正完畢", "協調資安檢測時程，完成資安漏洞修補", "提供16小時教育訓練，確保集保團隊順利接手"]
        }
      ],

      techHighlights: [
        "前端框架：Angular 14+，符合UI/UX要求與響應式設計",
        "後端架構：Spring Boot 2.7+ + Java OpenJDK 11+",
        "應用伺服器：JBoss EAP 7.1+ on Linux (Red Hat) 8.2+",
        "資料庫：MyBatis 3+ + Microsoft SQL Server 2019+",
        "資安防護：通過資安檢測，Apache Log4j 2.17.2+安全版本"
      ],

      teamStructure: {
        duotify: {
          leadership: [
            { name: "陳柔尹", role: "專案主持人", experience: "10年經驗" },
            { name: "劉筑 Vanessa", role: "專案經理", experience: "1年經驗" }
          ],
          teams: [
            { name: "資安稽核組", lead: "黃保翁（台科大電子工程技術系，25年經驗）", expertise: "Microsoft Regional Director、Google Developer Expert、LINE API Expert" },
            { name: "程式碼審核組", lead: "徐儀翔（台大資訊管理系，4年經驗）", expertise: "TSMC Supply Online、集保境外基金申報平台2.0、期貨結算系統" },
            { name: "系統工程組", lead: "張志偉、林志隆、林冠慈", expertise: "系統架構規劃、資料庫設計、API開發" },
            { name: "網路工程組", lead: "鍾一宏、陳隆和", expertise: "網路架構、防火牆設定、SSL憑證管理" },
            { name: "數據科技組", lead: "朱靜怡、齊晴、張岳峰", expertise: "數據分析、報表設計、資料視覺化" },
            { name: "基金業務組", lead: "黃俊豪、羅慧英、黃楚淑、陳慶元、林宗逸", expertise: "基金法規、業務流程、需求訪談" }
          ]
        },
        tdcc: {
          departments: [
            { name: "金融資訊部", members: "周彼芬、姚杰宏、梁哲嘉", role: "業務需求確認與驗收測試" },
            { name: "資訊作業部", role: "系統架構與技術支援" },
            { name: "數位暨資安部", role: "資安檢測與安全控管" },
            { name: "基金暨國際部", role: "基金業務與法規遵循" }
          ]
        }
      }
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
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="基金觀測站系統架構"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-6">生態系統架構</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {[
                      { name: "主平台", url: "www.fundclear.com.tw", desc: "統一入口與導航" },
                      { name: "境外基金", url: "announce.fundclear.com.tw/MOPSFundWeb/", desc: "海外基金資訊" },
                      { name: "境內基金", url: "announce.fundclear.com.tw/MOPSonshoreFundWeb/", desc: "國內基金數據" },
                      { name: "期信基金", url: "futures-announce.fundclear.com.tw/FMA/", desc: "期貨信託基金" },
                      { name: "報告中心", url: "report.fundclear.com.tw/", desc: "分析報告平台" },
                      { name: "資訊申報", url: "futures-report.fundclear.com.tw/FMF/", desc: "法規申報系統" }
                    ].map((platform, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-800 mb-2">{platform.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{platform.desc}</p>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded block truncate">{platform.url}</code>
                      </div>
                    ))}
                  </div>
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

                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-6">團隊結構</h3>

                  {/* 多奇團隊 */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-slate-700 mb-4">多奇數位創意團隊（25人）</h4>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {projectData.teamStructure.duotify.leadership.map((leader, index) => (
                        <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                          <div className="flex items-center gap-3">
                            <span data-lucide="user-circle" className="w-6 h-6 text-blue-600"></span>
                            <div>
                              <div className="font-semibold text-gray-800">{leader.name}</div>
                              <div className="text-sm text-gray-600">{leader.role} • {leader.experience}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {projectData.teamStructure.duotify.teams.map((team, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                          <h5 className="font-semibold text-gray-800 mb-2">{team.name}</h5>
                          <p className="text-sm text-gray-600 mb-2">{team.lead}</p>
                          <p className="text-xs text-gray-500">{team.expertise}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 集保團隊 */}
                  <div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-4">集保結算所團隊（4大部門）</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {projectData.teamStructure.tdcc.departments.map((dept, index) => (
                        <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-gray-800 mb-2">{dept.name}</h5>
                          {dept.members && <p className="text-sm text-gray-600 mb-1">{dept.members}</p>}
                          <p className="text-xs text-gray-500">{dept.role}</p>
                        </div>
                      ))}
                    </div>
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
                              <div className="space-y-4 mb-6">
                                {phase.tasks.map((task, idx) => (
                                  <div key={idx} className="bg-white p-4 rounded border border-slate-200">
                                    <div className="flex justify-between items-start mb-2">
                                      <h4 className="font-semibold text-gray-800">{task.name}</h4>
                                      <span className="text-sm font-medium text-slate-600">{task.days}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{task.description}</p>
                                  </div>
                                ))}
                              </div>

                              {/* 里程碑時間軸 */}
                              <div className="border-t border-gray-200 pt-4">
                                <h4 className="font-semibold text-gray-700 mb-3">關鍵里程碑</h4>
                                <div className="space-y-2">
                                  {phase.milestones.map((milestone, mIdx) => (
                                    <div key={mIdx} className="flex items-center gap-3">
                                      <span data-lucide="check-circle" className="w-4 h-4 text-green-600"></span>
                                      <span className="font-medium text-slate-600 min-w-[4rem]">{milestone.date}</span>
                                      <span className="text-gray-600">{milestone.event}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* 第一階段顯示開發進度統計 */}
                              {phase.stats && (
                                <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-200">
                                  <h4 className="font-semibold text-gray-700 mb-3">開發進度統計（8月月會數據）</h4>
                                  <div className="grid grid-cols-5 gap-3 text-center">
                                    <div>
                                      <div className="text-2xl font-bold text-blue-600">{phase.stats.total}</div>
                                      <div className="text-xs text-gray-600">總功能數</div>
                                    </div>
                                    <div>
                                      <div className="text-2xl font-bold text-gray-500">{phase.stats.toDo}</div>
                                      <div className="text-xs text-gray-600">To Do</div>
                                    </div>
                                    <div>
                                      <div className="text-2xl font-bold text-blue-500">{phase.stats.inProgress}</div>
                                      <div className="text-xs text-gray-600">In Progress</div>
                                    </div>
                                    <div>
                                      <div className="text-2xl font-bold text-yellow-500">{phase.stats.qa}</div>
                                      <div className="text-xs text-gray-600">QA</div>
                                    </div>
                                    <div>
                                      <div className="text-2xl font-bold text-purple-500">{phase.stats.inReview}</div>
                                      <div className="text-xs text-gray-600">In Review</div>
                                    </div>
                                  </div>
                                </div>
                              )}
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
                  <div className="grid lg:grid-cols-2 gap-8">
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
    console.error('FundClearProject component error:', error);
    return React.createElement('div', { className: 'error-message' },
      'Component failed to load. Please refresh the page.'
    );
  }
}

// 渲染組件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(FundClearProject));

// 初始化 Lucide icons
setTimeout(() => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}, 100);
