"use client";
import React from 'react';
import Image from 'next/image';

export default function Skills() {
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
    <section className="min-h-screen py-20 bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(147, 51, 234, 0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6 backdrop-blur-sm">
              ✨ Skills & Expertise
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-tight">
              What I Bring to the Table
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A comprehensive skill set spanning design, development, and strategic thinking
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 mx-auto rounded-full mt-8"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-[rgba(26,26,46,0.6)] backdrop-blur-md border border-gray-700/30 rounded-3xl p-8 text-center hover:bg-[rgba(26,26,46,0.8)] hover:border-purple-500/40 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg"></div>
                      <div className="relative bg-gray-800/50 p-4 rounded-2xl border border-gray-600/30 group-hover:border-purple-500/50 transition-all duration-500">
                        <Image
                          src={skill.icon}
                          alt={skill.title}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
              🎓 Academic Journey
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6 leading-tight">
              Education & Learning
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Building a strong foundation through academic excellence and continuous learning
            </p>
          </div>

          {/* Education Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Computer Science Card */}
            <div className="group relative bg-[rgba(26,26,46,0.6)] backdrop-blur-md border border-gray-700/30 rounded-3xl p-10 hover:bg-[rgba(26,26,46,0.8)] hover:border-blue-500/40 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mr-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-500">
                      <span className="text-3xl">🎓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                      Bachelor of Computer Science
                    </h3>
                    <p className="text-blue-400 font-semibold text-lg mb-1">
                      Software Engineering
                    </p>
                    <p className="text-cyan-400 font-medium">
                      Universitas Bina Nusantara
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl px-6 py-4 mb-8 backdrop-blur-sm">
                  <div className="flex items-center text-blue-300 font-medium text-lg">
                    <span className="mr-3">📅</span>
                    2023 - Present
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                  Focused on software engineering principles, algorithms, and modern web development technologies with hands-on project experience.
                </p>
              </div>
            </div>

            {/* Relevant Courses Card */}
            <div className="group relative bg-[rgba(26,26,46,0.6)] backdrop-blur-md border border-gray-700/30 rounded-3xl p-10 hover:bg-[rgba(26,26,46,0.8)] hover:border-purple-500/40 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mr-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-500">
                    <span className="text-3xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                      Core Curriculum
                    </h3>
                    <p className="text-purple-400 font-medium text-lg">
                      Academic Excellence
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    'Algorithms & Data Structures',
                    'Software Engineering',
                    'Machine Learning',
                    'Database Systems',
                    'Human-Computer Interaction',
                    'Web Development'
                  ].map((course, index) => (
                    <div key={index} className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <span className="text-lg">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}