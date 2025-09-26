'use client';

import React, { useState, useEffect } from 'react';

export default function About() {
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStats(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0f0f23] to-[#1a1a2e] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-xl text-purple-400 max-w-2xl mx-auto">
              Transforming ideas into digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Hello, I'm{' '}
                </h3>

                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Aditiya Maulana Sandy
                  </span>
                </h3>
                
                <div className="space-y-4 text-gray-300 leading-relaxed text-justify">
                  <p>As a 5th semester student at Bina Nusantara University majoring in Computer Science - Software Engineering, I have a strong interest in technology and software development.</p>
                  <p>I will continue to hone my technical and soft skills through various seminars, courses, and volunteer activities. I am a fast learner, adaptive, and ready to contribute to innovative solutions.</p>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-lg p-6">
                <blockquote className="text-purple-300 italic text-lg">
                  "Leveraging AI as a professional tool, not a replacement."
                </blockquote>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/CV_Aditiya_Maulana_Sandy.pdf"
                  download
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Download CV
                </a>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300"
                >
                  View Project
                </button>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {visibleStats ? 6 : 0}+
                </div>
                <div className="text-purple-300 font-semibold mb-1">
                  TOTAL PROJECTS
                </div>
                <div className="text-gray-400 text-sm">
                  Innovative web solutions crafted
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {visibleStats ? 13 : 0}+
                </div>
                <div className="text-purple-300 font-semibold mb-1">
                  CERTIFICATES
                </div>
                <div className="text-gray-400 text-sm">
                  Professional skills validated
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {visibleStats ? 2 : 0}+
                </div>
                <div className="text-purple-300 font-semibold mb-1">
                  YEARS OF EXPERIENCE
                </div>
                <div className="text-gray-400 text-sm">
                  Continuous learning journey
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}