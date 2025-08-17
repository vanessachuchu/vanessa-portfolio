function Projects() {
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
            title: 'Thought Spark Cards',
            description: 'AI靈感管理與深度思考助手，完整的想法生命週期管理系統',
            image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['React', 'AI整合', 'No-Code', 'Lovable'],
            link: 'https://preview--thought-spark-cards.lovable.app/',
            detailPage: 'project-thought-cards.html',
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
            title: 'Thought Spark Cards',
            description: 'AI inspiration management and deep thinking assistant, complete ideation lifecycle management system',
            image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['React', 'AI Integration', 'No-Code', 'Lovable'],
            link: 'https://preview--thought-spark-cards.lovable.app/',
            detailPage: 'project-thought-cards.html',
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
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              {currentContent.title}
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {currentContent.projects.map((project) => (
              <div key={project.id} className={`minimal-card overflow-hidden ${project.featured ? 'ring-2 ring-[var(--primary-color)]' : ''}`}>
                {project.featured && (
                  <div className="bg-[var(--primary-color)] text-white text-center py-2 text-sm font-medium">
                    {currentContent.featured}
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex space-x-3">
                        {project.detailPage && (
                          <a 
                            href={project.detailPage}
                            className="p-2 bg-white rounded-full text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-200"
                          >
                            <div className="icon-info text-sm"></div>
                          </a>
                        )}
                        <a 
                          href={project.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-200"
                        >
                          <div className="icon-external-link text-sm"></div>
                        </a>
                        {project.github && project.github !== '#' && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-200"
                          >
                            <div className="icon-github text-sm"></div>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.detailPage && (
                    <a 
                      href={project.detailPage}
                      className="inline-flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--primary-dark)] font-medium text-sm"
                    >
                      <span>{currentContent.viewDetails}</span>
                      <div className="icon-arrow-right text-xs"></div>
                    </a>
                  )}
                </div>
              </div>
            ))}
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