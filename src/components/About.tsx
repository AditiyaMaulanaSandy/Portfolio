'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function About() {
  const [visibleStats, setVisibleStats] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, certificates: 0, years: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStats(true);
          }
        });
      },
      { threshold: 0.1 } // Reduced threshold from 0.5 to 0.1 for better triggering
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    // Fallback: Set stats visible after a delay if intersection observer doesn't work
    const fallbackTimer = setTimeout(() => {
      setVisibleStats(true);
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Animate counters when visibleStats becomes true
  useEffect(() => {
    if (visibleStats) {
      const animateCounter = (target: number, key: 'projects' | 'certificates' | 'years') => {
        let current = 0;
        const increment = target / 30; // 30 steps for smooth animation
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedStats(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, 50); // Update every 50ms
      };

      // Start animations with slight delays
      setTimeout(() => animateCounter(6, 'projects'), 300);
      setTimeout(() => animateCounter(13, 'certificates'), 500);
      setTimeout(() => animateCounter(2, 'years'), 700);
    }
  }, [visibleStats]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skillsData = [
    {
      icon: '/images/Icon Design.png',
      title: 'Design',
      description: 'UI/UX Design'
    },
    {
      icon: '/images/Icon Development.png', 
      title: 'Development',
      description: 'Frontend Development, Responsive Design, Performance'
    },
    {
      icon: '/images/Icon Mobile.png',
      title: 'Mobile',
      description: 'Mobile-First Design, Progressive Web Apps'
    },
    {
      icon: '/images/Icon Strategy.png',
      title: 'Time Management',
      description: 'Task Prioritization, Deadline Management, Productivity'
    },
    {
      icon: '/images/Icon Marketing.png',
      title: 'Teamwork',
      description: 'Team Collaboration, Communication, Leadership'
    },
    {
      icon: '/images/Icon Optimization.png',
      title: 'Optimization', 
      description: 'Performance Optimization'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#0f0f23] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 sm:top-32 left-5 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 sm:bottom-32 right-5 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 bg-pink-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(147, 51, 234, 0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-purple-400 max-w-2xl mx-auto">
              Transforming ideas into digital experiences
            </p>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-24">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Hello, I&apos;m{' '}
                </h3>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Aditiya Maulana Sandy
                  </span>
                </h3>
                
                <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base text-justify">
                  <p>As a 5th semester student at Bina Nusantara University majoring in Computer Science - Software Engineering, I have a strong interest in technology and software development.</p>
                  <p>I will continue to hone my technical and soft skills through various seminars, courses, and volunteer activities. I am a fast learner, adaptive, and ready to contribute to innovative solutions.</p>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-lg p-4 sm:p-6">
                <blockquote className="text-purple-300 italic text-base sm:text-lg">
                  &ldquo;Leveraging AI as a professional tool, not a replacement.&rdquo;
                </blockquote>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="/CV_Aditiya_Maulana_Sandy.pdf"
                  download
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg text-sm sm:text-base hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Download CV
                </a>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg text-sm sm:text-base hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300"
                >
                  View Project
                </button>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {visibleStats ? animatedStats.projects : 0}+
                </div>
                <div className="text-purple-300 font-semibold mb-1 text-sm sm:text-base">
                  TOTAL PROJECTS
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  Innovative web solutions crafted
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {visibleStats ? animatedStats.certificates : 0}+
                </div>
                <div className="text-purple-300 font-semibold mb-1 text-sm sm:text-base">
                  CERTIFICATES
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  Professional skills validated
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {visibleStats ? animatedStats.years : 0}+
                </div>
                <div className="text-purple-300 font-semibold mb-1 text-sm sm:text-base">
                  YEARS OF EXPERIENCE
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  Continuous learning journey
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm">
                ✨ Skills & Expertise
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
                What I Bring to the Table
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                A comprehensive skill set spanning design, development, and strategic thinking
              </p>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 mx-auto rounded-full mt-6 sm:mt-8"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-[rgba(26,26,46,0.6)] backdrop-blur-md border border-gray-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center hover:bg-[rgba(26,26,46,0.8)] hover:border-purple-500/40 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-500">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg"></div>
                        <div className="relative bg-gray-800/50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-600/30 group-hover:border-purple-500/50 transition-all duration-500">
                          <Image
                            src={skill.icon}
                            alt={skill.title}
                            width={40}
                            height={40}
                            className="object-contain sm:w-12 sm:h-12"
                          />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 group-hover:text-purple-200 transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm">
                🎓 Academic Journey
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
                Education & Learning
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Building a strong foundation through academic excellence and continuous learning
              </p>
            </div>

            {/* Education Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {/* Computer Science Card */}
              <div className="group relative bg-[rgba(26,26,46,0.6)] backdrop-blur-md border border-gray-700/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:bg-[rgba(26,26,46,0.8)] hover:border-blue-500/40 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-500/10 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 sm:mb-8">
                    <div className="relative mb-4 sm:mb-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl flex items-center justify-center sm:mr-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-500">
                        <span className="text-2xl sm:text-3xl">🎓</span>
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                        Bachelor of Computer Science
                      </h3>
                      <p className="text-blue-400 font-semibold text-base sm:text-lg mb-1">
                        Software Engineering
                      </p>
                      <p className="text-cyan-400 font-medium text-sm sm:text-base">
                        Universitas Bina Nusantara
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 mb-6 sm:mb-8 backdrop-blur-sm">
                    <div className="flex items-center justify-center sm:justify-start text-blue-300 font-medium text-base sm:text-lg">
                      <span className="mr-3">📅</span>
                      2023 - Present
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg group-hover:text-gray-200 transition-colors duration-300 text-center sm:text-left">
                    Focused on software engineering principles, algorithms, and modern web development technologies with hands-on project experience.
                  </p>
                </div>
              </div>

              {/* Relevant Courses Card */}
              <div className="group relative bg-[rgba(26,26,46,0.6)] backdrop-blur-md border border-gray-700/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:bg-[rgba(26,26,46,0.8)] hover:border-purple-500/40 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl flex items-center justify-center sm:mr-6 mb-4 sm:mb-0 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-500">
                      <span className="text-2xl sm:text-3xl">📚</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                        Core Curriculum
                      </h3>
                      <p className="text-purple-400 font-medium text-base sm:text-lg">
                        Academic Excellence
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {[
                      'Algorithms & Data Structures',
                      'Software Engineering',
                      'Machine Learning',
                      'Database Systems',
                      'Human-Computer Interaction',
                      'Web Development'
                    ].map((course, index) => (
                      <div key={index} className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 sm:mr-4 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base lg:text-lg">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}