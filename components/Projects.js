function Projects() {
  try {
    const [currentLang, setCurrentLang] = React.useState('zh');
    const carouselRef = React.useRef(null);
    const [startX, setStartX] = React.useState(null);

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

    // Carousel navigation functions
    const scrollToNext = () => {
      if (carouselRef.current) {
        const cardWidth = window.innerWidth < 640 ? 288 : 320; // 卡片宽度 + gap
        carouselRef.current.scrollBy({
          left: cardWidth + 24, // 加上gap
          behavior: 'smooth'
        });
      }
    };

    const scrollToPrev = () => {
      if (carouselRef.current) {
        const cardWidth = window.innerWidth < 640 ? 288 : 320;
        carouselRef.current.scrollBy({
          left: -(cardWidth + 24), // 加上gap
          behavior: 'smooth'
        });
      }
    };

    // Enhanced touch handlers for better mobile experience
    const handleTouchStart = (e) => {
      setStartX(e.touches[0].clientX);
      if (carouselRef.current) {
        carouselRef.current.style.scrollBehavior = 'auto';
      }
    };

    const handleTouchMove = (e) => {
      if (!startX || !carouselRef.current) return;
      
      e.preventDefault(); // 防止页面滚动
      const currentX = e.touches[0].clientX;
      const diffX = startX - currentX;
      carouselRef.current.scrollLeft += diffX * 0.8; // 减少滑动敏感度
      setStartX(currentX);
    };

    const handleTouchEnd = () => {
      setStartX(null);
      if (carouselRef.current) {
        carouselRef.current.style.scrollBehavior = 'smooth';
      }
    };

    // Hardcoded content for both languages
    const content = {
      zh: {
        title: '作品集',
        subtitle: '從概念到實現，展示完整的產品開發與專案管理能力',
        sideProject: '💡 個人 Side Project',
        checkItOut: 'Check it out',
        moreInfo: '想了解更多專案細節？',
        contactCollaboration: '聯絡討論合作',
        projects: [
          {
            id: 1,
            title: '脈德小腦瓜 Mind-Brain',
            description: '互動式冥想思考專案，幫助人們練習慢下來、感受當下，將抽象想法具體化',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['JavaScript', '冥想思考', 'GitHub Pages', '開源專案'],
            link: 'https://vanessachuchu.github.io/mind-brain/',
            detailPage: 'project-mind-brain.html',
            sideProject: true
          },
          {
            id: 2,
            title: '基金觀測站金融資訊生態系統',
            description: 'B2B 金融科技平台產品架構設計，整合6大子平台，服務全台投信投顧業者',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['產品管理', '系統架構', '金融科技', 'B2B平台'],
            link: 'https://www.fundclear.com.tw/home',
            detailPage: 'project-fundclear.html'
          },
          {
            id: 3,
            title: 'YesOnline 線上英語學習平台',
            description: '複雜多角色教育科技平台，214個工作項目的企業級專案管理，整合ClassIn API與完整測試策略',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['產品管理', '系統整合', '教育科技', 'API整合', '測試策略'],
            link: '#',
            detailPage: 'project-yesonline.html'
          },
          {
            id: 4,
            title: '東陽實業 EIP 入口網站',
            description: '跨國企業級EIP入口網站系統，214工作天準時交付，整合39個使用者角色權限管理',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['企業系統', 'SSO整合', '專案管理', '國際化'],
            link: '#',
            detailPage: 'project-tongyang-eip.html'
          }
        ]
      },
      en: {
        title: 'Portfolio',
        subtitle: 'From concept to implementation, showcasing complete product development and project management capabilities',
        sideProject: '💡 Personal Side Project',
        checkItOut: 'Check it out',
        moreInfo: 'Want to learn more about project details?',
        contactCollaboration: 'Contact for Collaboration',
        projects: [
          {
            id: 1,
            title: 'Mind-Brain Interactive Meditation',
            description: 'Interactive meditation thinking project, helping people practice slowing down, feeling the present, and materializing abstract ideas',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['JavaScript', 'Meditation Thinking', 'GitHub Pages', 'Open Source'],
            link: 'https://vanessachuchu.github.io/mind-brain/',
            detailPage: 'project-mind-brain.html',
            sideProject: true
          },
          {
            id: 2,
            title: 'Fund Observatory Financial Information Ecosystem',
            description: 'B2B fintech platform product architecture design, integrating 6 major sub-platforms, serving investment trust and advisory firms across Taiwan',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['Product Management', 'System Architecture', 'FinTech', 'B2B Platform'],
            link: 'https://www.fundclear.com.tw/home',
            detailPage: 'project-fundclear.html'
          },
          {
            id: 3,
            title: 'YesOnline English Learning Platform',
            description: 'Complex multi-role educational technology platform with enterprise-level project management of 214 work items, integrating ClassIn API and comprehensive testing strategy',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['Product Management', 'System Integration', 'EdTech', 'API Integration', 'Testing Strategy'],
            link: '#',
            detailPage: 'project-yesonline.html'
          },
          {
            id: 4,
            title: 'Tongyang Industries EIP Portal System',
            description: 'International enterprise-level EIP portal system, delivered on time in 214 working days, integrating 39 user role permission management systems',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['Enterprise System', 'SSO Integration', 'Project Management', 'Internationalization'],
            link: '#',
            detailPage: 'project-tongyang-eip.html'
          }
        ]
      }
    };

    const currentContent = content[currentLang] || content.zh;

    return (
      <section 
        id="projects" 
        className="section-padding bg-[var(--bg-secondary)]"
        data-name="projects-section" 
        data-file="components/Projects.js"
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
            {/* Carousel container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {currentContent.projects.map((project, index) => {
                  const gradients = [
                    'linear-gradient(135deg, #FDB44B 0%, #FFAA00 100%)',
                    'linear-gradient(135deg, #2F5D50 0%, #1a3a31 100%)',
                    'linear-gradient(135deg, #89CFF0 0%, #5FA8D3 100%)',
                    'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)',
                    'linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%)'
                  ];
                  
                  return (
                    <div key={project.id} className="flex-shrink-0 w-72 sm:w-80 glass-card card-3d overflow-hidden project-card-hover group">
                      {project.sideProject && (
                        <div className="bg-[var(--primary-color)] text-white text-center py-2 text-sm font-medium noto-font">
                          {currentContent.sideProject}
                        </div>
                      )}

                      <div className="relative h-48 overflow-hidden" style={{ background: gradients[index % gradients.length] }}>
                        {/* 幾何圖形 SVG */}
                        <svg className="w-full h-full transition-transform duration-700 group-hover:scale-105" viewBox="0 0 320 192" preserveAspectRatio="xMidYMid meet">
                          {/* Mind-Brain - 圓形與星形組合 */}
                          {index === 0 && (
                            <>
                              <circle cx="100" cy="96" r="40" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.6)" strokeWidth="2" className="transition-all duration-700 group-hover:r-45"/>
                              <circle cx="220" cy="70" r="25" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
                              <polygon points="160,40 165,55 180,55 168,65 172,80 160,70 148,80 152,65 140,55 155,55" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
                              <circle cx="180" cy="140" r="18" fill="rgba(255,255,255,0.1)"/>
                              <path d="M 60 140 L 80 160 L 100 140 L 120 160" stroke="rgba(255,255,255,0.4)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                              <rect x="240" y="120" width="30" height="30" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" transform="rotate(45 255 135)"/>
                            </>
                          )}

                          {/* FundClear - 矩形與三角形組合 */}
                          {index === 1 && (
                            <>
                              <rect x="40" y="40" width="80" height="80" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
                              <rect x="140" y="80" width="60" height="60" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" transform="rotate(45 170 110)"/>
                              <polygon points="240,60 280,120 200,120" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
                              <circle cx="80" cy="150" r="15" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                              <line x1="150" y1="30" x2="150" y2="70" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                              <line x1="270" y1="140" x2="300" y2="140" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
                            </>
                          )}

                          {/* YesOnline - 波浪與圓形組合 */}
                          {index === 2 && (
                            <>
                              <path d="M 20 96 Q 70 60 120 96 T 220 96 T 320 96" stroke="rgba(255,255,255,0.6)" strokeWidth="3" fill="none"/>
                              <circle cx="80" cy="50" r="30" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                              <circle cx="240" cy="140" r="35" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
                              <rect x="140" y="120" width="40" height="50" rx="20" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
                              <polygon points="180,40 190,50 180,60 170,50" fill="rgba(255,255,255,0.2)"/>
                              <path d="M 30 140 Q 50 120 70 140" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" fill="none"/>
                            </>
                          )}

                          {/* TongYang EIP - Bauhaus 風格 */}
                          {index === 3 && (
                            <>
                              <circle cx="100" cy="70" r="45" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
                              <rect x="160" y="90" width="70" height="70" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                              <polygon points="60,120 100,180 20,180" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
                              <circle cx="250" cy="50" r="20" fill="rgba(255,255,255,0.1)"/>
                              <rect x="240" y="120" width="25" height="25" fill="rgba(255,255,255,0.2)" transform="rotate(45 252.5 132.5)"/>
                              <line x1="20" y1="40" x2="140" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                            </>
                          )}

                          {/* E-commerce - 錯綜複雜的幾何 */}
                          {index === 4 && (
                            <>
                              <rect x="50" y="50" width="60" height="90" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
                              <circle cx="180" cy="80" r="35" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                              <path d="M 140 120 L 180 160 L 220 120 L 260 160" stroke="rgba(255,255,255,0.5)" strokeWidth="3" fill="none"/>
                              <polygon points="240,40 260,30 280,40 280,60 260,70 240,60" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
                              <circle cx="90" cy="150" r="12" fill="rgba(255,255,255,0.3)"/>
                              <rect x="20" y="100" width="20" height="20" fill="rgba(255,255,255,0.2)" transform="rotate(45 30 110)"/>
                            </>
                          )}
                        </svg>

                        {/* 網格背景 */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0" style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                          }}></div>
                        </div>

                        {/* Hover 漸層遮罩 */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 transition-opacity duration-500 group-hover:opacity-70"></div>

                        {/* 專案資訊 */}
                        <div className="absolute bottom-4 left-4 text-[var(--primary-color)] z-20">
                          <div className="text-sm font-semibold opacity-70">PROJECT</div>
                          <div className="text-xs opacity-50">#{String(index + 1).padStart(2, '0')}</div>
                        </div>

                        {/* Hover 邊框 */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--primary-color)]/30 transition-all duration-500"></div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2 noto-font line-clamp-2">{project.title}</h3>
                        <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed line-clamp-3 noto-font">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full text-xs font-medium noto-font tag-animate"
                              style={{
                                animationDelay: `${tagIndex * 100}ms`,
                                opacity: 0,
                                animation: 'tagFadeIn 0.5s ease-out forwards'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span
                              className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium noto-font tag-animate"
                              style={{
                                animationDelay: '300ms',
                                opacity: 0,
                                animation: 'tagFadeIn 0.5s ease-out forwards'
                              }}
                            >
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>

                        {project.detailPage && (
                          <a
                            href={project.detailPage}
                            className="block w-full text-center py-2 px-3 bg-[var(--primary-color)] text-white rounded-lg btn-3d transition-colors text-xs font-medium noto-font"
                          >
                            {currentContent.checkItOut}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={scrollToPrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-[var(--primary-color)] hover:bg-white hover:scale-110 transition-all duration-200 z-10"
            >
              <span className="text-lg sm:text-xl font-bold">‹</span>
            </button>
            
            <button 
              onClick={scrollToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-[var(--primary-color)] hover:bg-white hover:scale-110 transition-all duration-200 z-10"
            >
              <span className="text-lg sm:text-xl font-bold">›</span>
            </button>
            
            {/* Scroll indicator */}
            <div className="text-center mt-6">
              <p className="text-sm text-[var(--text-secondary)] noto-font">
                ← {currentLang === 'zh' ? '左右滑動查看更多作品' : 'Swipe left or right to view more projects'} →
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-[var(--text-secondary)] mb-6">{currentContent.moreInfo}</p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              {currentContent.contactCollaboration}
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}