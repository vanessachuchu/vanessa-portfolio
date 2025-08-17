function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: ''
    });
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

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      const content = {
        zh: '感謝您的訊息！我會盡快回覆您。',
        en: 'Thank you for your message! I will get back to you as soon as possible.'
      };
      alert(content[currentLang] || content.zh);
      setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
      {
        icon: 'mail',
        title: 'Email',
        value: 'vanessachuliu@gmail.com',
        link: 'mailto:vanessachuliu@gmail.com'
      },
      {
        icon: 'phone',
        title: currentLang === 'zh' ? '澳洲電話' : 'Australia Phone',
        value: '(+61) 402 138 996',
        link: 'tel:+61402138996'
      },
      {
        icon: 'smartphone',
        title: currentLang === 'zh' ? '台灣電話' : 'Taiwan Phone',
        value: '(+886) 977-304-022',
        link: 'tel:+886977304022'
      },
      {
        icon: 'map-pin',
        title: currentLang === 'zh' ? '目前位置' : 'Current Location',
        value: currentLang === 'zh' ? 'Noosa, 昆士蘭, 澳洲' : 'Noosa, Queensland, Australia',
        link: '#'
      },
      {
        icon: 'globe',
        title: 'Portfolio',
        value: 'Lovable Project',
        link: 'https://lovable.dev/projects/e8ac6ef0-dbe6-4c69-9c74-f110a616d3ec'
      }
    ];

    // Hardcoded text content for both languages
    const content = {
      zh: {
        title: '準備好開始下一個專案了嗎？',
        subtitle: '讓我們一起打造改變世界的數位產品',
        start: '讓我們開始',
        description: '我對新的專案機會和挑戰充滿興趣。無論您是想要討論產品開發、專案管理，或是 AI 工具整合的可能性，我都很樂意與您交流。',
        form: {
          name: '姓名',
          namePlaceholder: '您的姓名',
          email: 'Email',
          message: '訊息內容',
          messagePlaceholder: '告訴我您的專案想法或合作提案...',
          submit: '發送訊息'
        }
      },
      en: {
        title: 'Ready to Start the Next Project?',
        subtitle: 'Let\'s build digital products that change the world together',
        start: 'Let\'s Get Started',
        description: 'I\'m excited about new project opportunities and challenges. Whether you want to discuss product development, project management, or AI tool integration possibilities, I\'d be happy to connect with you.',
        form: {
          name: 'Name',
          namePlaceholder: 'Your Name',
          email: 'Email',
          message: 'Message',
          messagePlaceholder: 'Tell me about your project ideas or collaboration proposals...',
          submit: 'Send Message'
        }
      }
    };

    const currentContent = content[currentLang] || content.zh;

    return (
      <section 
        id="contact" 
        className="section-padding"
        data-name="contact-section" 
        data-file="components/Contact.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              {currentContent.title}
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">{currentContent.start}</h3>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                {currentContent.description}
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                      <div className={`icon-${item.icon} text-lg text-white`}></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <a 
                        href={item.link} 
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="minimal-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">{currentContent.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all duration-200"
                    placeholder={currentContent.form.namePlaceholder}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">{currentContent.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">{currentContent.form.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-all duration-200 resize-none"
                    placeholder={currentContent.form.messagePlaceholder}
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full btn-primary">
                  {currentContent.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}