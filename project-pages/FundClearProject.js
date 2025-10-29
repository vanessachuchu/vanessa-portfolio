function FundClearProject() {
  try {
    const projectData = {
      title: "基金資訊觀測站 2.0",
      subtitle: "重構台灣金融基礎設施｜打造完整的基金資訊生態系統",
      period: "2023.06 - 2025.06 (三階段交付)",
      role: "專案經理 PM",
      company: "多奇數位創意 × 集保結算所",
      client: "台灣集中保管結算所 (TDCC)",

      overview: "基金資訊觀測站是台灣金融業的核心基礎設施，由集保結算所委託開發，服務境內、境外、期信基金等超過1,000檔基金的資訊揭露與申報需求。2.0 專案目標是將舊有獨立運作的多個子系統整合為統一生態系統，建立標準化的前後台架構，並新增 ESG 基金、數據統計、投資教育等創新功能模組。",

      challenges: [
        {
          title: "複雜的專案範疇",
          desc: "需整合6大平台（主站、境外/境內公告、期信公告/申報）共100+功能模組，涵蓋前台公開資訊與後台管理系統"
        },
        {
          title: "多重利害關係人協調",
          desc: "需同步協調集保（金融資訊部、資訊作業部、數位暨資安部、基金暨國際部）、多奇內部跨部門團隊，以及外部資安檢測單位"
        },
        {
          title: "嚴格的交付時程",
          desc: "三階段交付模式，每階段需經過功能開發、集保測試、資安檢測，並於固定時間點上線，不容延遲"
        },
        {
          title: "高度技術複雜度",
          desc: "採用 Angular 14+ 與 Spring Boot 2.7+ 架構，需確保資訊安全、系統穩定性與效能最佳化"
        }
      ],

      myRole: {
        title: "我的角色與職責",
        responsibilities: [
          {
            icon: "📋",
            title: "專案時程掌控",
            tasks: [
              "規劃三階段交付時程，協調功能開發、測試、資安檢測的關鍵里程碑",
              "每週更新 Azure DevOps Dashboard 進度報告，追蹤 90 個功能的開發狀態（To Do / In Progress / In Review / QA / Done）",
              "每月召開專案會議，向集保報告專案進度與風險管理"
            ]
          },
          {
            icon: "🤝",
            title: "跨部門溝通協調",
            tasks: [
              "擔任多奇與集保的溝通橋樑，協調金融資訊部、IT 部門、設計部門等多方需求",
              "管理 25 人開發團隊（含資安、程式核心、系統工程、網路工程、數據科技、基金業務等 6 大組別）",
              "與集保進行功能驗證與測試計畫確認，確保雙方測試標準一致"
            ]
          },
          {
            icon: "📊",
            title: "需求分析與功能規劃",
            tasks: [
              "盤點並分析 6 大模組（首頁、基金搜尋、ESG 基金、數據與統計、投資教育、公告與資訊）的功能需求",
              "完成頁面盤點清單，明確定義前台 UI/UX 配色調整與頁面樣式",
              "規劃後台管理系統的 4 大功能（首頁內容管理、權限管理、投資教育管理、參數管理）"
            ]
          },
          {
            icon: "🐛",
            title: "測試與品質控管",
            tasks: [
              "撰寫測試腳本與測試計畫，定義測試情境與驗收標準",
              "追蹤每個階段的 Bug 修復進度，管理 Bug 清單並確保於下個 Sprint 前修正完畢",
              "協調集保測試環境建置，確保測試與業演環境於交付前完成"
            ]
          },
          {
            icon: "🔐",
            title: "資安與保固協調",
            tasks: [
              "安排資安檢測時程，協調資安漏洞修補與報告產出",
              "規劃保固期服務內容：2 小時回應、4 小時故障排除、7 天錯誤修復、系統調校與問題諮詢",
              "提供 16 小時教育訓練，並協助專案成員駐點協助上線"
            ]
          }
        ]
      },

      phases: [
        {
          phase: "第一階段",
          period: "2023.06 - 2023.11",
          deliverables: ["前台-首頁（14 功能）", "前台-基金搜尋（12 功能）"],
          milestones: [
            { date: "8/4", event: "第一批功能交付" },
            { date: "8/18", event: "集保測試完畢提交 Bug 單" },
            { date: "8/31", event: "第二批功能交付" },
            { date: "9/15", event: "集保測試完畢" },
            { date: "10/6", event: "第三批功能交付（包含後台系統）" },
            { date: "10/31", event: "資安檢測完成" },
            { date: "11/30", event: "專案驗收，第一階段功能上線" }
          ],
          stats: {
            total: 90,
            toDo: 35,
            inProgress: 28,
            qa: 14,
            inReview: 13
          }
        },
        {
          phase: "第二階段",
          period: "2024.05 - 2024.10",
          deliverables: ["前台-ESG 基金", "前台-數據與統計", "前台-投資教育", "後台管理系統擴充"],
          milestones: [
            { date: "8/30", event: "功能開發完成" },
            { date: "9/20", event: "集保測試完畢" },
            { date: "10/18", event: "資安檢測通過" },
            { date: "10/31", event: "第二階段功能上線" }
          ]
        },
        {
          phase: "第三階段",
          period: "2024.08 - 2025.06",
          deliverables: [
            "期信申報平台翻新",
            "期信公告平台",
            "境外公告平台",
            "境內公告平台",
            "整合測試與資安檢測"
          ],
          milestones: [
            { date: "2/28", event: "期信申報平台測試完成" },
            { date: "11/29", event: "期信公告平台測試完成" },
            { date: "2/28", event: "境外公告平台測試完成" },
            { date: "3/28", event: "境內公告平台測試完成" },
            { date: "5/28", event: "整合測試" },
            { date: "6/30", event: "資安檢測與第三階段上線" }
          ]
        }
      ],

      teamStructure: {
        duotify: {
          pm: { name: "陳柔尹", role: "專案主持人", experience: "10年" },
          manager: { name: "劉筑 Vanessa", role: "專案經理", experience: "1年" },
          teams: [
            {
              name: "資安稽核人員",
              lead: "黃保翁（台科大電子工程技術系）",
              members: [],
              experience: "25年",
              expertise: ["Microsoft Regional Director", "Google Developer Expert", "LINE API Expert"]
            },
            {
              name: "程式碼審核人員",
              lead: "徐儀翔（台大資訊管理系）",
              members: [],
              experience: "4年",
              expertise: ["TSMC Supply Online", "集保 境外基金申報平台 2.0", "集保 期貨結算系統轉換建置案"]
            },
            {
              name: "系統工程組",
              lead: "張志偉、林志隆、林冠慈",
              expertise: ["系統架構規劃", "資料庫設計", "API 開發"]
            },
            {
              name: "網路工程組",
              lead: "鍾一宏、陳隆和",
              expertise: ["網路架構", "防火牆設定", "SSL 憑證管理"]
            },
            {
              name: "數據科技組",
              lead: "朱靜怡、齊晴、張岳峰",
              expertise: ["數據分析", "報表設計", "資料視覺化"]
            },
            {
              name: "基金業務組",
              lead: "黃俊豪、羅慧英、黃楚淑、陳慶元、林宗逸",
              expertise: ["基金法規", "業務流程", "需求訪談"]
            }
          ]
        },
        tdcc: {
          teams: [
            { name: "金融資訊部", members: ["周彼芬、姚杰宏、梁哲嘉"] },
            { name: "資訊作業部", members: [] },
            { name: "數位暨資安部", members: [] },
            { name: "基金暨國際部", members: [] }
          ]
        }
      },

      technicalStack: {
        frontend: {
          framework: "Angular 14+",
          ui: "符合貴公司 UI/UX 要求",
          responsive: true
        },
        backend: {
          framework: "Spring Boot Framework 2.7+",
          language: "Java OpenJDK 11+",
          appServer: "JBoss EAP (Enterprise Application Server) 7.1+",
          os: "Linux (Red Hat) 8.2+"
        },
        database: {
          framework: "MyBatis 3+",
          integration: "需與 Spring Boot Framework 整合"
        },
        infrastructure: {
          appServer: "Vmware x86 主機 (貴公司提供)",
          dbServer: "Windows Server 2019+, Microsoft SQL Server 2019+ (貴公司提供)"
        },
        logging: "Apache Log4j 2.17.2+",
        security: "資安漏洞修補、資安檢測通過"
      },

      keyAchievements: [
        {
          title: "成功的專案時程管理",
          metrics: [
            "三階段共 90 個功能全數如期交付",
            "每週五更新一次進度儀表板，保持專案透明度",
            "每月召開進度會議（7/4、8/4、9/4、10/4、11/4），確保利害關係人對齊"
          ]
        },
        {
          title: "高品質的測試與交付",
          metrics: [
            "建立完整測試計畫與測試腳本，定義測試情境",
            "集保測試階段發現 Bug 並於下個 Sprint 前修正完畢",
            "通過資安檢測，符合金融業資安規範"
          ]
        },
        {
          title: "有效的團隊協作",
          metrics: [
            "管理 25 人跨領域開發團隊，協調 6 大技術組別",
            "與集保 4 大部門保持良好溝通，快速回應需求變更",
            "建立標準化的開發與測試流程，提升團隊效率"
          ]
        },
        {
          title: "完善的保固與維護規劃",
          metrics: [
            "提供 1 年保固服務（2 小時回應、4 小時故障排除、7 天錯誤修復）",
            "提供 16 小時教育訓練，確保集保團隊能順利接手",
            "定期產出季度保養維護服務報告"
          ]
        }
      ],

      lessonsLearned: [
        {
          lesson: "階段性交付的重要性",
          detail: "透過三階段交付，能讓利害關係人提早看到成果，及時調整需求，降低專案風險"
        },
        {
          lesson: "溝通透明化是關鍵",
          detail: "每週更新 Dashboard 與每月進度會議，讓所有人掌握專案狀態，減少誤解與重工"
        },
        {
          lesson: "測試腳本的價值",
          detail: "事先定義測試腳本與驗收標準，能大幅縮短測試時間，確保雙方對交付品質的共識"
        },
        {
          lesson: "跨部門協作的挑戰",
          detail: "金融業專案涉及多個部門（業務、IT、資安、法規），PM 需具備高度的溝通與協調能力"
        }
      ]
    };

    return (
      <div className="min-h-screen bg-[var(--bg-secondary)]">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="index.html" className="flex items-center gap-3 text-[var(--primary-color)] hover:text-[var(--primary-dark)]">
                <div className="icon-arrow-left text-lg"></div>
                <span className="font-medium">返回作品集</span>
              </a>
              <span className="text-[var(--text-secondary)]">專案詳情</span>
            </div>
          </div>
        </header>

        <main className="section-padding">
          <div className="max-w-5xl mx-auto space-y-16">
            <section className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{projectData.title}</h1>
              <p className="text-xl text-[var(--secondary-color)] mb-6">{projectData.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-6 text-[var(--text-secondary)]">
                <span className="flex items-center gap-2">
                  <div className="icon-calendar text-lg"></div>
                  {projectData.period}
                </span>
                <span className="flex items-center gap-2">
                  <div className="icon-user text-lg"></div>
                  {projectData.role}
                </span>
                <span className="flex items-center gap-2">
                  <div className="icon-building text-lg"></div>
                  {projectData.company}
                </span>
              </div>
            </section>

            <section className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">專案概述</h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                {projectData.overview}
              </p>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="基金觀測站主平台"
                className="w-full rounded-lg shadow-lg"
              />
            </section>

            <section className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">生態系統架構</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  { name: "主平台", url: "www.fundclear.com.tw", desc: "統一入口與導航" },
                  { name: "境外基金", url: "announce.fundclear.com.tw/MOPSFundWeb/", desc: "海外基金資訊" },
                  { name: "境內基金", url: "announce.fundclear.com.tw/MOPSonshoreFundWeb/", desc: "國內基金數據" },
                  { name: "期信基金", url: "futures-announce.fundclear.com.tw/FMA/", desc: "期貨信託基金" },
                  { name: "報告中心", url: "report.fundclear.com.tw/", desc: "分析報告平台" },
                  { name: "資訊申報", url: "futures-report.fundclear.com.tw/FMF/", desc: "法規申報系統" }
                ].map((platform, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-[var(--primary-color)]">{platform.name}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">{platform.desc}</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">{platform.url}</code>
                  </div>
                ))}
              </div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="系統架構圖"
                className="w-full rounded-lg shadow-lg"
              />
            </section>

            {/* 專案挑戰 */}
            <section className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">專案挑戰</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projectData.challenges.map((challenge, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">{challenge.title}</h3>
                    <p className="text-[var(--text-secondary)]">{challenge.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 我的角色與職責 */}
            <section className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">{projectData.myRole.title}</h2>
              <div className="space-y-8">
                {projectData.myRole.responsibilities.map((resp, index) => (
                  <div key={index} className="border-l-4 border-[var(--primary-color)] pl-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{resp.icon}</span>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">{resp.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {resp.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-3">
                          <div className="icon-check text-[var(--primary-color)] text-sm mt-1"></div>
                          <span className="text-[var(--text-secondary)]">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 專案階段與時程 */}
            <section className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">專案階段與時程</h2>
              <div className="space-y-10">
                {projectData.phases.map((phase, index) => (
                  <div key={index} className="relative">
                    {/* 階段標題 */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg font-bold">
                        {phase.phase}
                      </div>
                      <span className="text-[var(--text-secondary)]">{phase.period}</span>
                    </div>

                    {/* 交付成果 */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-3">交付成果：</h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((deliverable, dIndex) => (
                          <span key={dIndex} className="px-3 py-1 bg-[var(--muted)] text-[var(--text-secondary)] rounded-full text-sm">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 里程碑時間軸 */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-4">關鍵里程碑：</h4>
                      <div className="relative pl-8 border-l-2 border-[var(--border)]">
                        {phase.milestones.map((milestone, mIndex) => (
                          <div key={mIndex} className="relative mb-6 last:mb-0">
                            <div className="absolute -left-[2.1rem] w-4 h-4 rounded-full bg-[var(--primary-color)] border-4 border-white"></div>
                            <div className="flex items-baseline gap-4">
                              <span className="font-semibold text-[var(--primary-color)] min-w-[4rem]">{milestone.date}</span>
                              <span className="text-[var(--text-secondary)]">{milestone.event}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 第一階段顯示開發進度統計 */}
                    {phase.stats && (
                      <div className="bg-[var(--muted)] p-6 rounded-lg">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-4">開發進度統計（8月月會數據）：</h4>
                        <div className="grid grid-cols-5 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-[var(--primary-color)]">{phase.stats.total}</div>
                            <div className="text-sm text-[var(--text-secondary)]">總功能數</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-500">{phase.stats.toDo}</div>
                            <div className="text-sm text-[var(--text-secondary)]">To Do</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-500">{phase.stats.inProgress}</div>
                            <div className="text-sm text-[var(--text-secondary)]">In Progress</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-yellow-500">{phase.stats.qa}</div>
                            <div className="text-sm text-[var(--text-secondary)]">QA</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-purple-500">{phase.stats.inReview}</div>
                            <div className="text-sm text-[var(--text-secondary)]">In Review</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 分隔線 */}
                    {index < projectData.phases.length - 1 && (
                      <div className="mt-10 border-t border-[var(--border)]"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 團隊結構 */}
            <section className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">團隊結構</h2>

              {/* Duotify 團隊 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[var(--primary-color)]">多奇數位創意團隊</h3>

                {/* 專案領導 */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="glass-card p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="icon-user text-xl text-[var(--primary-color)]"></div>
                      <div>
                        <div className="font-semibold text-[var(--text-primary)]">{projectData.teamStructure.duotify.pm.name}</div>
                        <div className="text-sm text-[var(--text-secondary)]">{projectData.teamStructure.duotify.pm.role} • {projectData.teamStructure.duotify.pm.experience}經驗</div>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="icon-user text-xl text-[var(--primary-color)]"></div>
                      <div>
                        <div className="font-semibold text-[var(--text-primary)]">{projectData.teamStructure.duotify.manager.name}</div>
                        <div className="text-sm text-[var(--text-secondary)]">{projectData.teamStructure.duotify.manager.role} • {projectData.teamStructure.duotify.manager.experience}經驗</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6 大技術組別 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projectData.teamStructure.duotify.teams.map((team, index) => (
                    <div key={index} className="border border-[var(--border)] rounded-lg p-4">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-2">{team.name}</h4>
                      <div className="text-sm text-[var(--text-secondary)] mb-2">負責人：{team.lead}</div>
                      {team.experience && (
                        <div className="text-xs text-[var(--text-light)] mb-2">{team.experience}經驗</div>
                      )}
                      {team.expertise && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {team.expertise.map((skill, sIndex) => (
                            <span key={sIndex} className="text-xs bg-[var(--muted)] px-2 py-1 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* TDCC 團隊 */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--primary-color)]">集保結算所團隊</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {projectData.teamStructure.tdcc.teams.map((team, index) => (
                    <div key={index} className="border border-[var(--border)] rounded-lg p-4">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-2">{team.name}</h4>
                      {team.members.length > 0 && (
                        <div className="text-sm text-[var(--text-secondary)]">{team.members.join('、')}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 技術架構 */}
            <section className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">技術架構</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* 前端技術 */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg mb-3 text-[var(--text-primary)]">前端技術</h3>
                  <ul className="space-y-2 text-[var(--text-secondary)]">
                    <li>• 框架：{projectData.technicalStack.frontend.framework}</li>
                    <li>• UI/UX：{projectData.technicalStack.frontend.ui}</li>
                    <li>• 響應式設計：{projectData.technicalStack.frontend.responsive ? '是' : '否'}</li>
                  </ul>
                </div>

                {/* 後端技術 */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg mb-3 text-[var(--text-primary)]">後端技術</h3>
                  <ul className="space-y-2 text-[var(--text-secondary)]">
                    <li>• 框架：{projectData.technicalStack.backend.framework}</li>
                    <li>• 語言：{projectData.technicalStack.backend.language}</li>
                    <li>• 應用伺服器：{projectData.technicalStack.backend.appServer}</li>
                    <li>• 作業系統：{projectData.technicalStack.backend.os}</li>
                  </ul>
                </div>

                {/* 資料庫 */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg mb-3 text-[var(--text-primary)]">資料庫</h3>
                  <ul className="space-y-2 text-[var(--text-secondary)]">
                    <li>• 框架：{projectData.technicalStack.database.framework}</li>
                    <li>• 整合：{projectData.technicalStack.database.integration}</li>
                  </ul>
                </div>

                {/* 基礎設施 */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-lg mb-3 text-[var(--text-primary)]">基礎設施</h3>
                  <ul className="space-y-2 text-[var(--text-secondary)]">
                    <li>• 應用伺服器：{projectData.technicalStack.infrastructure.appServer}</li>
                    <li>• 資料庫伺服器：{projectData.technicalStack.infrastructure.dbServer}</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="bg-[var(--muted)] p-4 rounded-lg">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-2">日誌系統</h4>
                  <p className="text-[var(--text-secondary)]">{projectData.technicalStack.logging}</p>
                </div>
                <div className="bg-[var(--muted)] p-4 rounded-lg">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-2">資安要求</h4>
                  <p className="text-[var(--text-secondary)]">{projectData.technicalStack.security}</p>
                </div>
              </div>
            </section>

            {/* 關鍵成就 */}
            <section className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">關鍵成就</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projectData.keyAchievements.map((achievement, index) => (
                  <div key={index} className="border border-[var(--border)] rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-4 text-[var(--primary-color)]">{achievement.title}</h3>
                    <ul className="space-y-2">
                      {achievement.metrics.map((metric, mIndex) => (
                        <li key={mIndex} className="flex items-start gap-3">
                          <div className="icon-check text-green-500 text-sm mt-1"></div>
                          <span className="text-[var(--text-secondary)]">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 專案反思與學習 */}
            <section className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">專案反思與學習</h2>
              <div className="space-y-6">
                {projectData.lessonsLearned.map((item, index) => (
                  <div key={index} className="border-l-4 border-[var(--accent-color)] pl-6">
                    <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">{item.lesson}</h3>
                    <p className="text-[var(--text-secondary)]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center">
              <a 
                href="https://www.fundclear.com.tw/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--primary-color)] text-white rounded-xl font-semibold hover:bg-[var(--primary-dark)] transition-all duration-300"
              >
                <div className="icon-external-link text-lg"></div>
                查看線上專案
              </a>
            </section>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('FundClearProject error:', error);
    return <div>專案頁面載入錯誤</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FundClearProject />);