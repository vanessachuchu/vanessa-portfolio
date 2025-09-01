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
        title: currentLang === 'zh' ? '聯絡電話' : 'Phone',
        value: '0909-327-022',
        link: 'tel:+886909327022'
      }
    ];

    // Hardcoded text content for both languages
    const content = {
      zh: {
        title: '想一起創造有溫度的產品嗎？',
        subtitle: '讓我們聊聊如何用心打造真正貼近人心的數位體驗',
        start: '開始我們的對話',
        description: '我相信最好的合作從一段真誠的對話開始。無論您是想討論產品設計理念、探索 AI 工具的溫暖應用，還是分享想讓世界更美好的想法，我都很期待與您交流。每個訊息我都會用心回覆。',
        form: {
          name: '您的稱呼',
          namePlaceholder: '您希望我怎麼稱呼您？',
          email: 'Email',
          message: '想和我分享什麼？',
          messagePlaceholder: '告訴我您的想法、專案構想，或任何想聊的話題...',
          submit: '發送訊息'
        }
      },
      en: {
        title: 'Want to Create Products with Heart Together?',
        subtitle: 'Let\'s talk about crafting digital experiences that truly touch people\'s hearts',
        start: 'Begin Our Conversation',
        description: 'I believe the best collaborations start with genuine conversations. Whether you want to discuss product design philosophy, explore warm applications of AI tools, or share ideas to make the world better, I look forward to connecting with you. I reply to every message with care.',
        form: {
          name: 'Your Name',
          namePlaceholder: 'What would you like me to call you?',
          email: 'Email',
          message: 'What would you like to share?',
          messagePlaceholder: 'Tell me your thoughts, project ideas, or anything you\'d like to chat about...',
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