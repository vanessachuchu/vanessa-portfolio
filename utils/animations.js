// Animation utilities for interactive elements
const AnimationUtils = {
  // Intersection Observer for scroll animations
  createScrollObserver: (callback, options = {}) => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };

    return new IntersectionObserver(callback, defaultOptions);
  },

  // Smooth scroll to element
  scrollToElement: (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  },

  // Add entrance animations to elements
  addEntranceAnimation: (element, animationType = 'fadeInUp') => {
    if (element) {
      element.classList.add(animationType);
    }
  },

  // Remove animations from element
  removeAnimation: (element, animationType) => {
    if (element) {
      element.classList.remove(animationType);
    }
  },

  // Create staggered animations for multiple elements
  staggerAnimation: (elements, delay = 100) => {
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('fade-in-up');
      }, index * delay);
    });
  },

  // Parallax scroll effect
  parallaxScroll: (element, speed = 0.5) => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -speed;
    element.style.transform = `translateY(${rate}px)`;
  }
};

// Export for global use
window.AnimationUtils = AnimationUtils;
