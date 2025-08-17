function Education() {
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
        title: '教育背景',
        subtitle: '紮實的學術基礎與專業知識培養',
        education: {
          university: '銘傳大學',
          department: '餐旅管理學系',
          degree: '學士學位',
          period: '2014 - 2018',
          location: '台北, 台灣',
          highlights: [
            '🎓 餐旅管理專業知識：學習飯店管理、餐飲服務、觀光旅遊等相關領域',
            '🌐 國際視野培養：接觸多元文化背景，建立跨文化溝通能力',
            '📊 管理技能基礎：培養組織協調、團隊合作與問題解決能力',
            '🤝 服務導向思維：深度理解顧客需求與服務品質管理理念'
          ]
        }
      },
      en: {
        title: 'Education',
        subtitle: 'Strong academic foundation and professional knowledge development',
        education: {
          university: 'Ming Chuan University',
          department: 'Department of Hospitality Management',
          degree: 'Bachelor\'s Degree',
          period: '2014 - 2018',
          location: 'Taipei, Taiwan',
          highlights: [
            '🎓 Hospitality Management Expertise: Comprehensive learning in hotel management, food service, and tourism industries',
            '🌐 International Perspective: Exposure to diverse cultural backgrounds, building cross-cultural communication skills',
            '📊 Management Foundation: Developed organizational coordination, teamwork, and problem-solving capabilities',
            '🤝 Service-Oriented Mindset: Deep understanding of customer needs and service quality management principles'
          ]
        }
      }
    };

    const currentContent = content[currentLang] || content.zh;
    const education = currentContent.education;

    return (
      <section 
        id="education" 
        className="section-padding"
        data-name="education-section" 
        data-file="components/Education.js"
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

          <div className="max-w-4xl mx-auto">
            <div className="minimal-card p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3 text-center lg:text-left">
                  <div className="w-24 h-24 mx-auto lg:mx-0 mb-6 rounded-full flex items-center justify-center" 
                       style={{background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'}}>
                    <div className="icon-book-open text-3xl text-white"></div>
                  </div>
                  <div className="bg-blue-100 text-blue-700 inline-block px-4 py-2 rounded-full text-sm font-medium mb-4">
                    {education.period}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                  <p className="text-lg text-[var(--primary-color)] font-semibold mb-2">{education.university}</p>
                  <p className="text-[var(--text-secondary)] mb-2">{education.department}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{education.location}</p>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="space-y-4">
                    {education.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[var(--primary-color)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-[var(--text-secondary)]">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Education component error:', error);
    return null;
  }
}