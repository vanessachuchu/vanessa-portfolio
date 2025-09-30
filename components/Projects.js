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
        featured: '⭐ 特色專案',
        viewDetails: '查看專案詳情',
        moreInfo: '想了解更多專案細節？',
        contactCollaboration: '聯絡討論合作',
        projects: [
          {
            id: 1,
            title: '基金觀測站金融資訊生態系統',
            description: 'B2B 金融科技平台產品架構設計，整合6大子平台，服務全台投信投顧業者',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['產品管理', '系統架構', '金融科技', 'B2B平台'],
            link: 'https://www.fundclear.com.tw/home',
            detailPage: 'project-fundclear.html',
            featured: true
          },
          {
            id: 2,
            title: '脈德小腦瓜 Mind-Brain',
            description: '互動式冥想思考專案，幫助人們練習慢下來、感受當下，將抽象想法具體化',
            image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['JavaScript', '冥想思考', 'GitHub Pages', '開源專案'],
            link: 'https://vanessachuchu.github.io/mind-brain/',
            detailPage: 'project-mind-brain.html',
            featured: true
          },
          {
            id: 3,
            title: 'YesOnline 線上英語學習平台',
            description: '複雜多角色教育科技平台，214個工作項目的企業級專案管理，整合ClassIn API與完整測試策略',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['產品管理', '系統整合', '教育科技', 'API整合', '測試策略'],
            link: '#',
            detailPage: 'project-yesonline.html',
            featured: true
          },
          {
            id: 4,
            title: '東陽實業 EIP 入口網站',
            description: '跨國企業級EIP入口網站系統，214工作天準時交付，整合39個使用者角色權限管理',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['企業系統', 'SSO整合', '專案管理', '國際化'],
            link: '#',
            detailPage: 'project-tongyang-eip.html',
            featured: true
          },
          {
            id: 5,
            title: '電商行銷自動化系統',
            description: '電子報活動規劃與成效分析，提升 10 倍有效名單與 5% 開信率',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['Marketing', 'Analytics', 'Automation', 'CRM'],
            link: '#',
            github: '#'
          }
        ]
      },
      en: {
        title: 'Portfolio',
        subtitle: 'From concept to implementation, showcasing complete product development and project management capabilities',
        featured: '⭐ Featured Project',
        viewDetails: 'View Project Details',
        moreInfo: 'Want to learn more about project details?',
        contactCollaboration: 'Contact for Collaboration',
        projects: [
          {
            id: 1,
            title: 'Fund Observatory Financial Information Ecosystem',
            description: 'B2B fintech platform product architecture design, integrating 6 major sub-platforms, serving investment trust and advisory firms across Taiwan',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['Product Management', 'System Architecture', 'FinTech', 'B2B Platform'],
            link: 'https://www.fundclear.com.tw/home',
            detailPage: 'project-fundclear.html',
            featured: true
          },
          {
            id: 2,
            title: 'Mind-Brain Interactive Meditation',
            description: 'Interactive meditation thinking project, helping people practice slowing down, feeling the present, and materializing abstract ideas',
            image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['JavaScript', 'Meditation Thinking', 'GitHub Pages', 'Open Source'],
            link: 'https://vanessachuchu.github.io/mind-brain/',
            detailPage: 'project-mind-brain.html',
            featured: true
          },
          {
            id: 3,
            title: 'YesOnline English Learning Platform',
            description: 'Complex multi-role educational technology platform with enterprise-level project management of 214 work items, integrating ClassIn API and comprehensive testing strategy',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['Product Management', 'System Integration', 'EdTech', 'API Integration', 'Testing Strategy'],
            link: '#',
            detailPage: 'project-yesonline.html',
            featured: true
          },
          {
            id: 4,
            title: 'Tongyang Industries EIP Portal System',
            description: 'International enterprise-level EIP portal system, delivered on time in 214 working days, integrating 39 user role permission management systems',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['Enterprise System', 'SSO Integration', 'Project Management', 'Internationalization'],
            link: '#',
            detailPage: 'project-tongyang-eip.html',
            featured: true
          },
          {
            id: 5,
            title: 'E-commerce Marketing Automation System',
            description: 'Newsletter campaign planning and performance analysis, achieving 10x improvement in effective leads and 5% open rate increase',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['Marketing', 'Analytics', 'Automation', 'CRM'],
            link: '#',
            github: '#'
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
                    <div key={project.id} className="flex-shrink-0 w-72 sm:w-80 glass-card card-3d overflow-hidden">
                      {project.featured && (
                        <div className="bg-[var(--primary-color)] text-white text-center py-2 text-sm font-medium noto-font">
                          {currentContent.featured}
                        </div>
                      )}
                      
                      <div className="relative h-32 flex items-center justify-center text-white font-bold bg-[var(--primary-color)]">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10 text-center">
                          <div className="text-lg font-semibold">PROJECT</div>
                          <div className="text-xs opacity-80">#{index + 1}</div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2 noto-font line-clamp-2">{project.title}</h3>
                        <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed line-clamp-3 noto-font">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag}
                              className="px-2 py-1 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full text-xs font-medium noto-font"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium noto-font">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          {project.detailPage && (
                            <a 
                              href={project.detailPage}
                              className="flex-1 text-center py-2 px-3 bg-[var(--primary-color)] text-white rounded-lg btn-3d transition-colors text-xs font-medium noto-font"
                            >
                              {currentContent.viewDetails}
                            </a>
                          )}
                          <a 
                            href={project.link} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-2 px-3 border border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg btn-3d hover:bg-[var(--primary-color)] hover:text-white transition-colors text-xs font-medium noto-font"
                          >
                            {currentLang === 'zh' ? '查看專案' : 'View Project'}
                          </a>
                        </div>
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