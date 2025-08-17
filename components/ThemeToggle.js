// Theme Toggle Component
const ThemeToggle = () => {
    const [theme, setTheme] = React.useState('light');

    React.useEffect(() => {
        // Initialize theme
        if (window.ThemeManager) {
            setTheme(window.ThemeManager.getTheme());
        }

        // Listen for theme changes
        const handleThemeChange = (event) => {
            setTheme(event.detail.theme);
        };

        window.addEventListener('themeChanged', handleThemeChange);
        return () => window.removeEventListener('themeChanged', handleThemeChange);
    }, []);

    const toggleTheme = () => {
        if (window.ThemeManager) {
            const newTheme = window.ThemeManager.toggleTheme();
            setTheme(newTheme);
        }
    };

    return React.createElement('button', {
        onClick: toggleTheme,
        className: `
            relative p-3 rounded-full transition-all duration-300 hover:scale-110
            ${theme === 'dark' 
                ? 'bg-slate-300/20 text-slate-300 hover:bg-slate-300/30' 
                : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
            }
        `,
        'aria-label': `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`,
        title: `切換到${theme === 'light' ? '深色' : '淺色'}主題`
    }, [
        // Sun/Moon Icon
        React.createElement('div', {
            key: 'icon',
            className: `transition-all duration-500 ${theme === 'dark' ? 'rotate-180' : 'rotate-0'}`
        }, [
            // Sun Icon (Light Mode)
            theme === 'light' && React.createElement('svg', {
                key: 'sun',
                className: 'w-5 h-5',
                fill: 'currentColor',
                viewBox: '0 0 20 20'
            }, [
                React.createElement('path', {
                    key: 'sun-path',
                    fillRule: 'evenodd',
                    d: 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z',
                    clipRule: 'evenodd'
                })
            ]),
            
            // Moon Icon (Dark Mode)
            theme === 'dark' && React.createElement('svg', {
                key: 'moon',
                className: 'w-5 h-5',
                fill: 'currentColor',
                viewBox: '0 0 20 20'
            }, [
                React.createElement('path', {
                    key: 'moon-path',
                    d: 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'
                })
            ])
        ]),
        
        // Ripple Effect
        React.createElement('div', {
            key: 'ripple',
            className: `
                absolute inset-0 rounded-full opacity-0 pointer-events-none
                ${theme === 'dark' ? 'bg-slate-400' : 'bg-slate-400'}
                transition-opacity duration-300
            `
        })
    ]);
};

window.ThemeToggle = ThemeToggle;