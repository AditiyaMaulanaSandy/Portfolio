'use client';

import React from 'react';

export default function Hero() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
              Ready to Innovate
            </div>

            {/* Main Title */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              Aditiya Maulana Sandy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Portofolio
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl lg:text-2xl text-purple-400 font-medium mb-4 animate-fade-in-up animation-delay-500">
              Computer Science - Software Engineering
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl animate-fade-in-up animation-delay-1000">
              Developing Scalable, Maintainable, and Robust Applications for Modern Digital Transformation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-1500 mb-8">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
              >
                <i className="fas fa-briefcase"></i>
                Project
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i className="fas fa-envelope"></i>
                Contact
              </button>
            </div>

            {/* Social Links */}
            <div className="social-links flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/AditiyaMaulanaSandy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link w-12 h-12 bg-gray-800/50 border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/aditiya-maulana-sandy-24bb07328" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link w-12 h-12 bg-gray-800/50 border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://www.instagram.com/aditiya_maulana_?igsh=bms4aWowdGNpaWtq" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link w-12 h-12 bg-gray-800/50 border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Right Content - Code Editor Visual */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in animation-delay-700">
            <div className="code-editor bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 max-w-md w-full">
              {/* Code Header */}
              <div className="code-header bg-gray-900/90 px-4 py-3 flex items-center justify-between">
                <div className="window-controls flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="window-title">
                  <i className="fas fa-mountain text-gray-400"></i>
                </div>
                <div className="window-actions">
                  <i className="fas fa-cog text-gray-400 animate-spin-slow"></i>
                </div>
              </div>
              
              {/* Code Body */}
              <div className="code-body flex">
                {/* Sidebar */}
                <div className="code-sidebar bg-gray-900/60 px-3 py-4 flex flex-col items-center space-y-4">
                  <i className="fas fa-code text-purple-400 animate-pulse"></i>
                  <div className="line-numbers text-gray-500 text-xs space-y-1 text-center">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                  </div>
                </div>
                
                {/* Code Content */}
                <div className="code-content p-4 flex-1 font-mono text-sm">
                  <div className="code-line mb-1">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">developer</span>{' '}
                    <span className="text-gray-300">=</span>{' '}
                    <span className="text-yellow-400">{'{'}</span>
                  </div>
                  <div className="code-line mb-1 pl-4">
                    <span className="text-green-400">name</span>
                    <span className="text-gray-300">:</span>{' '}
                    <span className="text-orange-400">&apos;Aditiya&apos;</span>
                    <span className="text-gray-300">,</span>
                  </div>
                  <div className="code-line mb-1 pl-4">
                    <span className="text-green-400">skills</span>
                    <span className="text-gray-300">:</span>{' '}
                    <span className="text-yellow-400">[</span>{' '}
                    <span className="text-orange-400">&apos;HTML&apos;</span>
                    <span className="text-gray-300">,</span>{' '}
                    <span className="text-orange-400">&apos;C&apos;</span>{' '}
                    <span className="text-yellow-400">]</span>
                  </div>
                  <div className="code-line">
                    <span className="text-yellow-400">{'}'}</span>
                    <span className="text-gray-300">;</span>
                    <span className="animate-blink text-white">|</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center items-start p-2 hover:border-purple-300 transition-colors"
        >
          <div className="w-1 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        </button>
      </div>
    </section>
  );
}