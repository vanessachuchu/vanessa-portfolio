// Theme Manager for Portfolio
const ThemeManager = {
    themes: {
        light: {
            name: 'light',
            colors: {
                bgPrimary: 'rgb(248, 250, 252)',
                bgSecondary: 'rgb(241, 245, 249)',
                bgTertiary: 'rgb(226, 232, 240)',
                cardBg: 'rgb(255, 255, 255)',
                textPrimary: 'rgb(30, 41, 59)',
                textSecondary: 'rgb(100, 116, 139)',
                textLight: 'rgb(148, 163, 184)',
                primaryColor: 'rgb(71, 85, 105)',
                primaryDark: 'rgb(30, 41, 59)',
                secondaryColor: 'rgb(241, 245, 249)',
                accentColor: 'rgb(226, 232, 240)',
                accentWarm: 'rgb(241, 245, 249)',
                border: 'rgb(226, 232, 240)',
                ring: 'rgb(71, 85, 105)'
            }
        },
        dark: {
            name: 'dark',
            colors: {
                bgPrimary: 'rgb(2, 6, 23)',
                bgSecondary: 'rgb(15, 23, 42)',
                bgTertiary: 'rgb(30, 41, 59)',
                cardBg: 'rgb(15, 23, 42)',
                textPrimary: 'rgb(248, 250, 252)',
                textSecondary: 'rgb(148, 163, 184)',
                textLight: 'rgb(100, 116, 139)',
                primaryColor: 'rgb(148, 163, 184)',
                primaryDark: 'rgb(100, 116, 139)',
                secondaryColor: 'rgb(30, 41, 59)',
                accentColor: 'rgb(51, 65, 85)',
                accentWarm: 'rgb(64, 75, 96)',
                border: 'rgb(51, 65, 85)',
                ring: 'rgb(148, 163, 184)'
            }
        }
    },

    currentTheme: 'light',

    init() {
        // Load theme from localStorage or default to light
        const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
        this.setTheme(savedTheme);
        
        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem('portfolio-theme')) {
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    },

    setTheme(themeName) {
        if (!this.themes[themeName]) return;
        
        this.currentTheme = themeName;
        const theme = this.themes[themeName];
        
        // Apply CSS custom properties
        const root = document.documentElement;
        Object.entries(theme.colors).forEach(([key, value]) => {
            root.style.setProperty(`--${this.camelToKebab(key)}`, value);
        });
        
        // Update body class
        document.body.className = document.body.className.replace(/theme-\w+/g, '');
        document.body.classList.add(`theme-${themeName}`);
        
        // Save preference
        localStorage.setItem('portfolio-theme', themeName);
        
        // Dispatch theme change event
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: themeName } }));
    },

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        return newTheme;
    },

    getTheme() {
        return this.currentTheme;
    },

    camelToKebab(str) {
        return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
} else {
    ThemeManager.init();
}

window.ThemeManager = ThemeManager;