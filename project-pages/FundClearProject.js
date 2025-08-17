function FundClearProject() {
  try {
    const projectData = {
      title: "基金觀測站生態系統重構",
      subtitle: "打造台灣金融業 B2B 資訊平台的統一架構與體驗",
      period: "2022.07 - 2024.11 (2年4個月)",
      role: "產品架構設計 / 系統分析與規劃",
      company: "多奇數位創意",
      
      overview: "基金觀測站是台灣重要的金融資訊基礎設施，服務全台投信投顧業者的日常營運需求。隨著業務擴展，系統逐漸演化為包含多個子平台的複雜生態系統。我負責重新設計整個生態系統的產品架構，建立統一的用戶體驗和開發規範。",
      
      challenges: [
        "6個獨立子平台缺乏統一的設計語言和用戶體驗",
        "境內外基金、期信基金有不同的監管要求和業務邏輯",
        "跨平台資料流動和整合困難",
        "缺乏標準化的開發規範，維護成本高",
        "用戶需要在多個系統間切換，體驗破碎"
      ],
      
      solutions: [
        "全面盤點與分析：深入分析6大平台的100+功能模組",
        "資訊架構重構：設計統一的導航邏輯和資訊分類體系",
        "設計系統建立：創建標準化的UI組件庫和設計規範",
        "跨平台資料整合：規劃統一的資料模型和API介面",
        "分階段實施與優化：採用敏捷開發方法，持續迭代"
      ],
      
      results: [
        "成功整合6大子平台生態系統",
        "建立100+標準化功能模組",
        "提升30%的開發效率",
        "服務1000+活躍金融業用戶"
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

            <section className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-red-600">挑戰</h3>
                <ul className="space-y-3">
                  {projectData.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="icon-x text-red-500 text-sm mt-1"></div>
                      <span className="text-sm text-[var(--text-secondary)]">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">解決方案</h3>
                <ul className="space-y-3">
                  {projectData.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="icon-arrow-right text-blue-500 text-sm mt-1"></div>
                      <span className="text-sm text-[var(--text-secondary)]">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-green-600">成果</h3>
                <ul className="space-y-3">
                  {projectData.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="icon-check text-green-500 text-sm mt-1"></div>
                      <span className="text-sm text-[var(--text-secondary)]">{result}</span>
                    </li>
                  ))}
                </ul>
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