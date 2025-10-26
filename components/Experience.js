function Experience() {
  try {
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
        title: '工作經驗',
        subtitle: '跨文化專案管理與產品開發的成長歷程',
        experiences: [
          {
            id: 1,
            company: "澳洲打工度假中",
            position: "Barista",
            location: "澳洲",
            period: "2024.11 - recent",
            type: "current",
            highlights: [
              "🗣️ 語言與跨文化溝通｜選擇澳洲作為打工度假地點，透過全英文環境持續精進溝通與團隊協作能力，提升跨文化的互動技巧",
              "🤖 產品開發及自動化應用｜持續鑽研AI與自動化工具，目標為找到並解決生活或工作中的痛點，規劃並開發一個可從頭設計到落地實施的 No-Code side project，利用無需程式設計的工具打造可行性產品，並驗證市場需求",
              "☕ 咖啡製作與服務｜在高效且多元文化的咖啡廳環境中擔任Barista，精通咖啡製作與客戶服務，確保每杯飲品皆維持高品質標準",
              "🚀 職涯探索與個人成長｜在工作與個人成長之間取得平衡，探索新興產業與遠端工作的可能性，同時持續發展各項興趣，透過體驗不同的生活方式來思考未來的職涯方向"
            ]
          },
          {
            id: 2,
            company: "多奇數位創意",
            position: "專案經理",
            location: "台灣",
            period: "2022.07 - 2024.11",
            type: "featured",
            highlights: [
              "📊 專案時程管理｜運用Trello與Azure DevOps進行專案管理，優化人力規劃與資源配置，確保專案進度與效率最大化",
              "📈 數據量化與決策｜習慣將專案成本與績效數據圖表化與量化，提供清晰的決策依據，提升管理層對專案狀態的即時掌握度",
              "🤝 跨部門合作｜協調跨部門團隊，促進溝通透明化與即時回饋，確保各部門合作的順暢",
              "🎨 使用者體驗設計｜運用Figma優化UI/UX設計，提升數位產品的使用者體驗與市場競爭力",
              "🏗️ 主導多項開發案｜主導基金觀測站及線上英文平台開發案，從雛形到前後台系統完整建置，包含多語系功能設計，積極提供客戶多元且有效的解決方案",
              "🤖 學習並靈活運用多項AI工具｜優化繁雜且耗時的工作流程，有效縮短20%的專案執行時程"
            ]
          },
          {
            id: 3,
            company: "利民生技有限公司",
            position: "董事長秘書",
            location: "台灣",
            period: "2021.07 - 2022.04",
            type: "management",
            highlights: [
              "📋 專案時程推展｜控管及排定公司自有產品研發、廠房設立之專案時程進度，資源整合協助解決問題，減少溝通成本、有效落實階段目標",
              "💰 目標廠商開發｜新廠房設立之相關廠商接洽及議價 (廠房裝潢、產品包裝規格設計...)，節省15%之專案成本",
              "📅 主管日程管理｜安排主管日常行程，在不同的工作需求中排定優先順序，協調各部門工作追蹤及會議排程，及轉達部門相關需求",
              "🔍 確保有效的採購決策｜協助採購部門處理國外廠商進價事宜，搜集及提供產品相關專業知識"
            ]
          },
          {
            id: 4,
            company: "聖耀土地開發",
            position: "總經理特助",
            location: "台灣",
            period: "2020.05 - 2021.05",
            type: "management",
            highlights: [
              "📋 專案規劃｜協助太陽能業務的開發規劃，包含市場調研及策略規劃，支援業務拓展",
              "📊 標準化工作流程｜協助公司內部整合規劃，推動各項管理規章及制度",
              "🤝 跨部門溝通｜跨部門的溝通協調與會議召集，制定會議流程與紀錄"
            ]
          },
          {
            id: 5,
            company: "詩肯柚木",
            position: "行銷企劃助理",
            location: "台灣",
            period: "2018.11 - 2020.02",
            type: "marketing",
            highlights: [
              "📊 市場定位與採購分析｜進行商品市場定位與採購分析，提升談判策略，成功控制成本並提高營運效率",
              "📧 電子報活動規劃與成效數據分析｜設定每月主題及內容文案撰寫，善用線下資源，增加10倍有效名單/月，有效更新主旨及內容，提高開信率5%",
              "🎯 品牌檔期活動規劃｜依據每檔期的行銷主軸，以商品特性及預測銷量規劃活動內容",
              "🤝 異業合作規劃｜與異業品牌合作策劃聯名活動，提升品牌市場滲透率與競爭力",
              "📱 Facebook小編｜設定發文主題及撰寫文章內容，了解品牌客群年齡，並設計與粉絲互動抽獎等活動，觸及率達原先1倍以上",
              "✍️ 文案撰寫｜雜誌、廣編及電子報等文案，平均產出3篇/月"
            ]
          },
          {
            id: 6,
            company: "Starbucks",
            position: "值班經理",
            location: "台灣",
            period: "2015.06 - 2018.08",
            type: "retail",
            highlights: [
              "🏪 門市營運管理｜負責門市運營與團隊管理，確保每日營運效率與員工績效優化",
              "👥 員工培訓與績效提升｜訓練與指導新進員工，提升整體團隊的專業能力與服務標準",
              "📈 行銷推廣與業績成長｜規劃並執行行銷與促銷活動，成功提高10%營收與顧客回購率",
              "📦 庫存管理與品質控管｜監控庫存管理與品質控管，降低損耗成本並維持產品品質標準"
            ]
          }
        ]
      },
      en: {
        title: 'Work Experience',
        subtitle: 'Cross-cultural project management and product development journey',
        experiences: [
          {
            id: 1,
            company: "Australia Working Holiday",
            position: "Barista",
            location: "Australia",
            period: "2024.11 - recent",
            type: "current",
            highlights: [
              "🗣️ Language & Cross-Cultural Communication | Chose Australia as working holiday destination to continuously improve communication and teamwork skills through full English environment, enhancing cross-cultural interaction capabilities",
              "🤖 Product Development & Automation Application | Continuously researching AI and automation tools, aiming to identify and solve pain points in life or work, planning and developing a No-Code side project from design to implementation, using no-code tools to create viable products and validate market needs",
              "☕ Coffee Making & Service | Working as Barista in efficient and multicultural café environment, proficient in coffee making and customer service, ensuring high quality standards for every beverage",
              "🚀 Career Exploration & Personal Growth | Balancing work and personal growth, exploring emerging industries and remote work possibilities, continuing to develop various interests, thinking about future career direction through experiencing different lifestyles"
            ]
          },
          {
            id: 2,
            company: "Duotify Digital Creative",
            position: "Project Manager",
            location: "Taiwan",
            period: "2022.07 - 2024.11",
            type: "featured",
            highlights: [
              "📊 Project Timeline Management | Utilized Trello and Azure DevOps for project management, optimizing manpower planning and resource allocation to ensure maximum project progress and efficiency",
              "📈 Data Quantification & Decision-Making | Accustomed to visualizing and quantifying project costs and performance data into charts, providing clear decision-making basis and improving management's real-time grasp of project status",
              "🤝 Cross-Department Collaboration | Coordinated cross-departmental teams, promoting communication transparency and instant feedback to ensure smooth collaboration between departments",
              "🎨 User Experience Design | Utilized Figma to optimize UI/UX design, enhancing user experience and market competitiveness of digital products",
              "🏗️ Leading Multiple Development Projects | Led Fund Observatory and online English platform development from prototype to complete front-end and back-end system construction, including multilingual function design, actively providing clients with diverse and effective solutions",
              "🤖 Learning and Flexibly Using Multiple AI Tools | Optimizing complex and time-consuming workflows, effectively shortening project execution timeline by 20%"
            ]
          },
          {
            id: 3,
            company: "Limin Biotechnology Co., Ltd.",
            position: "Secretary to Chairman",
            location: "Taiwan",
            period: "2021.07 - 2022.04",
            type: "management",
            highlights: [
              "📋 Project Timeline Advancement | Controlled and scheduled company's proprietary product R&D and factory establishment project timeline progress, integrated resources to assist problem-solving, reduced communication costs, effectively implemented milestone goals",
              "💰 Target Vendor Development | Contacted and negotiated with vendors for new factory establishment (factory decoration, product packaging specification design...), saving 15% of project costs",
              "📅 Executive Schedule Management | Arranged executive's daily schedule, prioritized different work requirements, coordinated departmental work tracking and meeting scheduling, and relayed departmental needs",
              "🔍 Ensuring Effective Procurement Decisions | Assisted procurement department with foreign vendor pricing matters, collected and provided product-related professional knowledge"
            ]
          },
          {
            id: 4,
            company: "Saintyao Land Development",
            position: "Executive Assistant to General Manager",
            location: "Taiwan",
            period: "2020.05 - 2021.05",
            type: "management",
            highlights: [
              "📋 Project Planning | Assisted with solar energy business development planning, including market research and strategic planning, supporting business expansion",
              "📊 Standardizing Work Processes | Assisted company's internal integration planning, promoting various management regulations and systems",
              "🤝 Cross-Department Communication | Cross-departmental communication coordination and meeting convening, establishing meeting procedures and records"
            ]
          },
          {
            id: 5,
            company: "SCAN-D (Shih Kien Teak)",
            position: "Marketing Planning Assistant",
            location: "Taiwan",
            period: "2018.11 - 2020.02",
            type: "marketing",
            highlights: [
              "📊 Market Positioning & Procurement Analysis | Conducted product market positioning and procurement analysis, improved negotiation strategies, successfully controlled costs and improved operational efficiency",
              "📧 Newsletter Activity Planning & Performance Analysis | Set monthly themes and content copywriting, leveraged offline resources, increased 10x effective subscribers/month, effectively updated subject lines and content, improved open rate by 5%",
              "🎯 Brand Campaign Planning | Planned activity content based on each campaign's marketing theme, product characteristics and predicted sales volume",
              "🤝 Cross-Industry Collaboration Planning | Collaborated with cross-industry brands to plan co-branded activities, improving brand market penetration and competitiveness",
              "📱 Facebook Editor | Set post themes and wrote article content, understood brand customer demographics, designed fan interaction and lottery activities, reaching over 1x original reach",
              "✍️ Copywriting | Magazine, advertorial and newsletter copywriting, averaging 3 articles/month"
            ]
          },
          {
            id: 6,
            company: "Starbucks",
            position: "Shift Supervisor",
            location: "Taiwan",
            period: "2015.06 - 2018.08",
            type: "retail",
            highlights: [
              "🏪 Store Operations Management | Responsible for store operations and team management, ensuring daily operational efficiency and employee performance optimization",
              "👥 Employee Training & Performance Enhancement | Trained and guided new employees, improving overall team professional capabilities and service standards",
              "📈 Marketing Promotion & Sales Growth | Planned and executed marketing and promotional activities, successfully increasing revenue by 10% and customer repurchase rate",
              "📦 Inventory Management & Quality Control | Monitored inventory management and quality control, reducing wastage costs while maintaining product quality standards"
            ]
          }
        ]
      }
    };

    const currentContent = content[currentLang] || content.zh;
    const experiences = currentContent.experiences;

    return (
      <section 
        id="experience" 
        className="section-padding bg-[var(--bg-secondary)]"
        data-name="experience-section" 
        data-file="components/Experience.js"
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

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)]"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                const typeColors = {
                  current: 'linear-gradient(135deg, var(--accent-color), var(--primary-color))',
                  featured: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                  previous: 'linear-gradient(135deg, var(--accent-warm), var(--primary-color))',
                  management: 'linear-gradient(135deg, var(--secondary-color), var(--accent-color))',
                  marketing: 'linear-gradient(135deg, var(--accent-color), var(--accent-warm))',
                  retail: 'linear-gradient(135deg, var(--primary-color), var(--accent-warm))'
                };
                
                return (
                  <div key={exp.id} className={`relative flex items-center ${!isEven && 'lg:flex-row-reverse'}`}>
                    {/* Timeline node */}
                    <div className="absolute left-4 sm:left-6 lg:left-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 sm:border-4 border-white shadow-lg flex items-center justify-center z-10 transform -translate-x-1/2" 
                         style={{background: typeColors[exp.type] || typeColors.management}}>
                      <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Content card */}
                    <div className={`ml-12 sm:ml-16 lg:ml-0 ${isEven ? 'lg:mr-8 lg:pr-8' : 'lg:ml-8 lg:pl-8'} lg:w-1/2`}>
                      <div className="glass-card p-6 hover-lift relative">
                        {/* Arrow pointing to timeline */}
                        <div className={`hidden lg:block absolute top-6 w-0 h-0 border-t-8 border-b-8 border-transparent ${
                          isEven 
                            ? 'right-0 border-r-8 border-r-white/80 transform translate-x-full' 
                            : 'left-0 border-l-8 border-l-white/80 transform -translate-x-full'
                        }`}></div>
                        
                        {/* Period badge */}
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3"
                             style={{background: typeColors[exp.type] || typeColors.management}}>
                          {exp.period}
                        </div>
                        
                        <h3 className="text-lg font-bold mb-2 noto-font">{exp.position}</h3>
                        <p className="text-[var(--primary-color)] font-semibold mb-1 noto-font">{exp.company}</p>
                        <p className="text-sm text-[var(--text-secondary)] mb-4 noto-font">{exp.location}</p>
                        
                        <div className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <p key={idx} className="text-sm text-[var(--text-secondary)] noto-font leading-relaxed">
                              {highlight}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience component error:', error);
    return null;
  }
}