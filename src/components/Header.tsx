'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Manual section detection sebagai fallback
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset untuk header
      
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(element.id);
        }
      });
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          console.log('Active section:', entry.target.id); // Debug log
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Kurangi threshold
      rootMargin: '-10% 0px -10% 0px' // Kurangi margin
    });

    // Debug: cek apakah semua section ada
    const sections = document.querySelectorAll('section[id]');
    console.log('Found sections:', Array.from(sections).map(s => s.id));
    
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);

    // Close mobile menu on scroll
    const closeMobileMenuOnScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', closeMobileMenuOnScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', closeMobileMenuOnScroll);
      observer.disconnect();
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to:', sectionId); // Debug log
    const element = document.getElementById(sectionId);
    
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
      // Force set active section
      setActiveSection(sectionId);
    } else {
      console.error(`Element with id "${sectionId}" not found`);
    }
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[rgba(15,15,35,0.95)] backdrop-blur-md shadow-lg shadow-purple-500/20' 
        : 'bg-[rgba(26,26,46,0.9)] backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer hover:from-purple-300 hover:to-pink-300 transition-all duration-300"
            onClick={() => scrollToSection('home')}
          >
            Aditiya
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 px-4 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item.id 
                    ? 'text-purple-400 bg-purple-500/10' 
                    : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/5'
                } after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:h-0.5 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 after:transition-all after:duration-300 ${
                  activeSection === item.id ? 'after:w-6' : 'after:w-0'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 bg-purple-400 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-purple-400 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-purple-400 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute left-0 right-0 top-full bg-[rgba(15,15,35,0.98)] backdrop-blur-md border-b border-purple-500/20 transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible transform translate-y-0' 
            : 'opacity-0 invisible transform -translate-y-4'
        }`}>
          <div className="px-6 py-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-purple-400 bg-purple-500/10 border-l-2 border-purple-400' 
                    : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/5 hover:border-l-2 hover:border-purple-400/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}