// Simple global language state without any packages
const SimpleLanguage = {
    currentLanguage: 'zh',
    listeners: [],
    
    init() {
        // Load language from localStorage or default to Chinese
        const savedLang = localStorage.getItem('portfolio-language') || 'zh';
        this.currentLanguage = savedLang;
        this.updateDocument();
    },
    
    setLanguage(lang) {
        if (lang === this.currentLanguage) return;
        
        this.currentLanguage = lang;
        localStorage.setItem('portfolio-language', lang);
        this.updateDocument();
        this.notifyListeners();
    },
    
    getCurrentLanguage() {
        return this.currentLanguage;
    },
    
    updateDocument() {
        document.documentElement.lang = this.currentLanguage === 'zh' ? 'zh-TW' : 'en';
    },
    
    addListener(callback) {
        this.listeners.push(callback);
    },
    
    removeListener(callback) {
        this.listeners = this.listeners.filter(listener => listener !== callback);
    },
    
    notifyListeners() {
        this.listeners.forEach(callback => callback(this.currentLanguage));
    }
};

// Make available globally
window.SimpleLanguage = SimpleLanguage;

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        SimpleLanguage.init();
    });
} else {
    SimpleLanguage.init();
}