const ChartJS = window.Chart;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [activeSection, setActiveSection] = React.useState('home');
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
      setIsLoaded(true);

      const handleScroll = () => {
        const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
           data-name="portfolio-app" data-file="app.js">
        <Header activeSection={activeSection} />
        <main>
          <Hero />
          <Featured />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);