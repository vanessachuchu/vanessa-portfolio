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
            company: "THL (Tourism Holdings Limited)",
            position: "前台接待專員",
            location: "THL Australia, Queensland, Australia",
            period: "2025.01 - Present",
            type: "current",
            highlights: [
              "🌍 國際企業前台服務：在全球最大房車租賃公司擔任前台接待，使用流利英文服務來自各國的客戶",
              "🚐 專業車輛租賃流程：熟練處理motorhome租賃的check-in/check-out流程，清楚說明車輛功能與租賃條款",
              "🤝 跨部門協作溝通：與清潔、技術、維修等多個部門密切配合，確保車輛準時交付並符合品質標準",
              "⚡ 即時問題解決：面對客戶突發狀況能當場快速找出解決方案，展現優秀的應變能力與客戶服務技巧",
              "📈 提升客戶滿意度：透過親切專業的服務態度，增強THL品牌形象並獲得客戶正面回饋"
            ]
          },
          {
            id: 2,
            company: "澳洲打工度假",
            position: "咖啡師",
            location: "Chalet & Co., Noosa, Australia",
            period: "2024.11 - 2024.12",
            type: "previous",
            highlights: [
              "🗣️ 跨文化溝通卓越表現：策略性選擇澳洲作為打工度假目的地，深度融入英語環境，提升溝通能力與跨文化協作技能",
              "🤖 產品創新與自動化策略：積極研究 AI 和自動化技術，識別並解決營運痛點，從概念化到市場驗證開發全面的 No-Code 解決方案",
              "☕ 服務卓越與營運管理：在快節奏多元文化環境中擔任咖啡師，提供優質客戶服務，維持高品質標準與營運效率",
              "🚀 策略性職涯發展：追求平衡的專業成長，同時探索新興產業和遠端工作機會，發展多元技能組合以影響未來職涯軌跡"
            ]
          },
          {
            id: 2,
            company: "多奇數位創意",
            position: "專案經理",
            location: "多奇數位創意, 台灣",
            period: "2022.07 - 2024.11",
            type: "featured",
            highlights: [
              "📊 策略專案管理：運用 Trello 和 Azure DevOps 編排複雜專案工作流程，優化資源配置和人員部署，達到最大營運效率",
              "📈 數據驅動決策制定：系統性地將專案成本和績效指標轉化為可執行的洞察，通過全面的數據視覺化，使高層主管能夠維持即時專案監督",
              "🤝 跨部門團隊領導：協調多個部門間的無縫協作，建立透明的溝通管道和回饋機制，確保組織一致性",
              "🎨 用戶體驗策略：運用 Figma 設計和優化 UI/UX 框架，顯著提升數位產品可用性和市場定位",
              "🏗️ 企業解決方案架構：領導基金觀測站和 YesOnline 平台的端到端開發，涵蓋多語言實施和複雜業務流程自動化，提供全面客戶解決方案",
              "🤖 AI 整合與流程優化：策略性實施多種 AI 工具以簡化複雜工作流程，實現專案執行時程縮短 20%"
            ]
          },
          {
            id: 3,
            company: "立民生技股份有限公司",
            position: "執行秘書",
            location: "立民生技股份有限公司, 台灣",
            period: "2021.07 - 2022.04",
            type: "management",
            highlights: [
              "📋 策略專案協調：協調自有產品研發和設施建立時程，實施整合資源管理解決方案，最小化溝通負擔並達成里程碑交付",
              "💰 供應商關係與成本優化：管理設施開發的全面供應商採購，包括室內設計和包裝規格，協商合約實現 15% 成本節省",
              "📅 高層營運管理：策略性管理 C 級主管排程和優先事項，協調跨部門工作流程，促進業務單位間的無縫資訊流動",
              "🔍 策略採購監督：為國際供應商談判提供分析支援，進行市場研究和技術規格分析以支持採購決策"
            ]
          },
          {
            id: 4,
            company: "聖瑤開發股份有限公司",
            position: "總經理執行助理",
            location: "聖瑤開發股份有限公司, 台北, 台灣",
            period: "2020.05 - 2021.07",
            type: "management",
            highlights: [
              "📋 高階主管支援：執行總經理交辦任務，協助重要決策流程與策略規劃",
              "📅 行程管理優化：規劃並管理總經理行程安排，提高時間運用效率",
              "🤝 跨部門協調：促進各部門間的溝通協調，確保資訊流通順暢",
              "📊 流程標準化：建立並標準化工作流程，提升整體營運效率"
            ]
          },
          {
            id: 5,
            company: "SCAN-D Corporation",
            position: "行銷助理",
            location: "SCAN-D Corporation, 台灣",
            period: "2018.11 - 2020.02",
            type: "marketing",
            highlights: [
              "📈 客戶名單成長：每月有效客戶名單增長10倍，大幅提升潛在客群規模",
              "📱 社群媒體優化：Facebook觸及率提升100%以上，顯著增加品牌曝光度",
              "✍️ 內容創作產出：每月創作3篇行銷文案，建立品牌溝通語調與形象",
              "🎯 活動參與提升：透過策略行銷活動，使活動參與率提升40%"
            ]
          },
          {
            id: 6,
            company: "星巴克咖啡股份有限公司",
            position: "值班經理",
            location: "星巴克咖啡, 台灣",
            period: "2015.06 - 2018.08",
            type: "retail",
            highlights: [
              "📦 庫存成本管理：負責產品庫存管理與成本控制，確保營運效率",
              "👥 員工培訓發展：執行員工教育訓練，提升服務品質與團隊能力",
              "🎪 活動企劃執行：改善門市活動規劃與執行，增強顧客體驗",
              "💰 業績成長達成：透過有效管理策略，實現門市業績成長10%"
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
            company: "THL (Tourism Holdings Limited)",
            position: "Front of House Specialist",
            location: "THL Australia, Queensland, Australia",
            period: "2025.01 - Present",
            type: "current",
            highlights: [
              "🌍 International Enterprise Front Desk Service: Working as front desk specialist at world's largest motorhome rental company, using fluent English to serve customers from around the globe",
              "🚐 Professional Vehicle Rental Process: Expertly handle motorhome rental check-in/check-out procedures, clearly explain vehicle features and rental terms to ensure customer confidence",
              "🤝 Cross-Departmental Collaboration: Coordinate closely with cleaning, technical, and maintenance teams to ensure timely vehicle delivery meeting quality standards",
              "⚡ Real-Time Problem Solving: Quickly identify solutions for customer issues on-the-spot, demonstrating excellent adaptability and customer service skills under pressure",
              "📈 Enhanced Customer Satisfaction: Through professional and friendly service attitude, strengthen THL brand image and receive positive customer feedback"
            ]
          },
          {
            id: 2,
            company: "Australia Working Holiday",
            position: "Barista",
            location: "Chalet & Co., Noosa, Australia",
            period: "2024.11 - 2024.12",
            type: "previous",
            highlights: [
              "🗣️ Cross-Cultural Communication Excellence: Strategically chose Australia as a working holiday destination to immerse in an English-speaking environment, enhancing communication proficiency and cross-cultural collaboration capabilities",
              "🤖 Product Innovation & Automation Strategy: Actively researching AI and automation technologies to identify and address operational pain points, developing comprehensive No-Code solutions from conceptualization through market validation",
              "☕ Service Excellence & Operations Management: Delivering exceptional customer service as a Barista in a fast-paced multicultural environment, maintaining premium quality standards and operational efficiency",
              "🚀 Strategic Career Development: Pursuing balanced professional growth while exploring emerging industries and remote work opportunities, developing diverse skill sets to inform future career trajectory"
            ]
          },
          {
            id: 2,
            company: "Duotify Digital Creative",
            position: "Project Manager",
            location: "Duotify Digital Creative, Taiwan",
            period: "2022.07 - 2024.11",
            type: "featured",
            highlights: [
              "📊 Strategic Project Management: Leveraged Trello and Azure DevOps to orchestrate complex project workflows, optimizing resource allocation and personnel deployment to achieve maximum operational efficiency",
              "📈 Data-Driven Decision Making: Systematically transformed project costs and performance metrics into actionable insights through comprehensive data visualization, enabling executive leadership to maintain real-time project oversight",
              "🤝 Cross-Functional Team Leadership: Orchestrated seamless collaboration across multiple departments, establishing transparent communication channels and feedback mechanisms to ensure organizational alignment",
              "🎨 User Experience Strategy: Utilized Figma to design and optimize UI/UX frameworks, significantly enhancing digital product usability and market positioning",
              "🏗️ Enterprise Solution Architecture: Led end-to-end development of Fund Observatory and YesOnline platforms, encompassing multilingual implementation and complex business process automation, delivering comprehensive client solutions",
              "🤖 AI Integration & Process Optimization: Strategically implemented multiple AI tools to streamline complex workflows, achieving a 20% reduction in project execution timelines"
            ]
          },
          {
            id: 3,
            company: "Limin Biotechnology Co., Ltd.",
            position: "Executive Secretary",
            location: "Limin Biotechnology Co., Ltd., Taiwan",
            period: "2021.07 - 2022.04",
            type: "management",
            highlights: [
              "📋 Strategic Project Coordination: Orchestrated proprietary product R&D and facility establishment timelines, implementing integrated resource management solutions to minimize communication overhead and achieve milestone deliverables",
              "💰 Vendor Relations & Cost Optimization: Managed comprehensive vendor procurement for facility development including interior design and packaging specifications, negotiating contracts that delivered 15% cost savings",
              "📅 Executive Operations Management: Strategically managed C-level executive scheduling and priorities, coordinating cross-departmental workflows and facilitating seamless information flow between business units",
              "🔍 Strategic Procurement Oversight: Provided analytical support for international vendor negotiations, conducting market research and technical specifications analysis to inform procurement decisions"
            ]
          },
          {
            id: 4,
            company: "Saintyao Land Development Corporation",
            position: "Executive Assistant to General Manager",
            location: "Saintyao Land Development Corporation, Taipei, Taiwan",
            period: "2020.05 - 2021.07",
            type: "management",
            highlights: [
              "📋 Executive Support: Executed tasks assigned by General Manager, assisting with critical decision-making processes and strategic planning",
              "📅 Schedule Optimization: Planned and managed General Manager's schedule and itinerary, improving time utilization efficiency",
              "🤝 Interdepartmental Coordination: Facilitated communication and coordination across departments, ensuring smooth information flow",
              "📊 Process Standardization: Established and standardized work processes, enhancing overall operational efficiency"
            ]
          },
          {
            id: 5,
            company: "SCAN-D Corporation",
            position: "Marketing Assistant",
            location: "SCAN-D Corporation, Taiwan",
            period: "2018.11 - 2020.02",
            type: "marketing",
            highlights: [
              "📈 Customer List Growth: Achieved 10x monthly growth in effective customer lists, significantly expanding potential customer base",
              "📱 Social Media Optimization: Increased Facebook reach by over 100%, significantly enhancing brand exposure",
              "✍️ Content Creation Output: Produced 3 marketing copywriting pieces monthly, establishing brand communication tone and image",
              "🎯 Event Participation Enhancement: Achieved 40% increase in event participation through strategic marketing activities"
            ]
          },
          {
            id: 6,
            company: "Starbucks Corporation",
            position: "Duty Manager",
            location: "Starbucks Corporation, Taiwan",
            period: "2015.06 - 2018.08",
            type: "retail",
            highlights: [
              "📦 Inventory & Cost Management: Responsible for product inventory management and cost control, ensuring operational efficiency",
              "👥 Employee Training & Development: Conducted employee education and training, improving service quality and team capabilities",
              "🎪 Activity Planning & Execution: Improved store activity planning and execution, enhancing customer experience",
              "💰 Sales Growth Achievement: Achieved 10% store sales growth through effective management strategies"
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
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              {currentContent.title}
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
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
                          {exp.highlights.slice(0, 2).map((highlight, idx) => (
                            <p key={idx} className="text-sm text-[var(--text-secondary)] noto-font leading-relaxed">
                              {highlight}
                            </p>
                          ))}
                          {exp.highlights.length > 2 && (
                            <p className="text-xs text-[var(--primary-color)] font-medium noto-font mt-2">
                              +{exp.highlights.length - 2} {currentLang === 'zh' ? '項成就' : 'more achievements'}
                            </p>
                          )}
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