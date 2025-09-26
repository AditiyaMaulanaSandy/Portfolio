'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('projects');
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const filters = [
    { id: 'projects', label: 'Proyek', icon: 'fas fa-code' },
    { id: 'certificates', label: 'Sertifikat', icon: 'fas fa-certificate' },
    { id: 'tech-stack', label: 'Tech Stack', icon: 'fas fa-tools' },
    { id: 'community', label: 'Komunitas', icon: 'fas fa-users' }
  ];

  // Effect to control body scroll when modal is open
  useEffect(() => {
    if (showModal || showCertificateModal) {
      // Disable scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scroll
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure scroll is restored
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal, showCertificateModal]);

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setShowModal(true);
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  const changeActiveImage = (index: number) => {
    setActiveImageIndex(index);
  };

  const openCertificateModal = (certificate: any) => {
    setSelectedCertificate(certificate);
    setShowCertificateModal(true);
  };

  const closeCertificateModal = () => {
    setShowCertificateModal(false);
    setSelectedCertificate(null);
  };

  const projects = [
    {
      id: 1,
      title: 'VSTravel',
      category: 'projects',
      image: '/images/Preview VSTravel 1.png',
      description: 'VSTravel is an advanced ticket booking platform designed to make it easier for users to plan and book their trips.',
      liveUrl: 'https://vs-travel.vercel.app/',
      detailsUrl: 'https://github.com/AditiyaMaulanaSandy/VSTravel',
      detailDescription: 'VSTravel is an online travel ticket booking platform designed to make it easier for users to plan and book their trips. This website offers a fast, easy, and secure booking experience with various flexible travel package options.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Fast and Easy Booking System',
        'Diverse Travel Packages with Transparent Pricing',
        'Flexible Scheduling'
      ],
      gallery: [
        '/images/Preview VSTravel 2.png', 
        '/images/Preview VSTravel 3.png', 
        '/images/Preview VSTravel 4.png', 
        '/images/Preview VSTravel 5.png', 
        '/images/Preview VSTravel 6.png'
      ]
    },
    {
      id: 2,
      title: 'Prediksi Nilai Ujian',
      category: 'projects',
      image: '/images/Preview Prediksi 1.png',
      description: 'GradePredictor is an innovative platform that uses machine learning models to help students estimate academic results.',
      liveUrl: 'https://gradepredictorgroup3.pythonanywhere.com/',
      detailsUrl: 'https://github.com/AditiyaMaulanaSandy/GradePredictor',
      detailDescription: 'GradePredictor is an AI-powered educational tool that leverages machine learning algorithms to predict student exam scores based on various academic and behavioral factors. This innovative platform helps students understand their academic standing and provides insights for improvement.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Personalized Grade Prediction',
        'Dynamic Study Suggestions',
        'Supporting Information'
      ],
      gallery: ['/images/Preview Prediksi 2.png']
    },
    {
      id: 3,
      title: 'StuBuddies',
      category: 'projects',
      image: '/images/Preview Stu 1.png',
      description: 'STUBUDDIES supports SDG 4 goal of quality education, as it helps people from various backgrounds to learn together.',
      liveUrl: 'https://stubuddies.vercel.app/',
      detailsUrl: 'https://github.com/AditiyaMaulanaSandy/StuBuddies',
      detailDescription: 'StuBuddies is a collaborative learning platform that connects students from diverse backgrounds to achieve quality education for all. Supporting SDG 4, this platform facilitates peer-to-peer learning, study group formation, and knowledge sharing among students globally.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Profile and Matching System',
        'Buddy/Friendship System',
        'Messaging/Communication System'
      ],
      gallery: ['/images/Preview Stu 2.png']
    },
    {
      id: 4,
      title: 'Sweeney Barbers',
      category: 'projects',
      image: '/images/Preview Sweeny 1.png',
      description: 'Sweeney Barbers is a digital platform for premium barbershop services that combines classic tradition with modern technology.',
      liveUrl: 'https://sweeny-barbers.vercel.app/',
      detailsUrl: 'https://github.com/AditiyaMaulanaSandy/SweenyBarbers',
      detailDescription: 'Sweeney Barbers is a digital platform for premium barbershop services that combines classic tradition with modern technology. This website provides an exclusive membership system and showcases various professional haircut services with high quality standards.',
      technologies: ['TypeScript', 'CSS3', 'JavaScript'],
      features: [
        'Premium Membership System with Point Rewards',
        'Comprehensive Service Gallery ("The Best Of The Best")',
        'Integrated Contact & Location System'
      ],
      gallery: [
        '/images/Preview Sweeny 2.png', 
        '/images/Preview Sweeny 3.png', 
        '/images/Preview Sweeny 4.png', 
        '/images/Preview Sweeny 5.png', 
        '/images/Preview Sweeny 6.png', 
        '/images/Preview Sweeny 7.png'
      ]
    },
    {
      id: 5,
      title: 'ExamGuard Application',
      category: 'projects',
      image: '/images/Preview Exam 1.png',
      description: 'ExamGuard is an AI-based exam monitoring system to ensure academic integrity during exams. The system uses technology.',
      liveUrl: '#',
      detailsUrl: 'https://github.com/AditiyaMaulanaSandy/ExamGuard',
      detailDescription: 'ExamGuard is an advanced AI-powered proctoring system designed to maintain academic integrity during online examinations. Using computer vision and machine learning, it monitors student behavior in real-time and detects potential cheating attempts.',
      technologies: ['Python', 'CSS3'],
      features: [
        'Automatic Identity Verification',
        'Facial Movement Monitoring',
        'AI-Based Suspicious Behavior Detection'
      ],
      gallery: ['/images/Preview Exam 2.png']
    },
    {
      id: 6,
      title: 'Figma Sistem Cek Plagiarisme',
      category: 'projects',
      image: '/images/Preview Cek 1.png',
      description: 'Plagiarism Checker application is a mobile-based platform to detect the level of similarity or plagiarism in documents.',
      liveUrl: 'https://www.figma.com/proto/uvknfWLAiSJ8ZBVV0TKhCJ/UI-SISTEM-CEK-PLAGIARISME?page-id=0%3A1&node-id=11-2&viewport=796%2C761%2C0.54&t=jMkTrukoYN3lprbn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11%3A2',
      detailsUrl: 'https://www.figma.com/design/uvknfWLAiSJ8ZBVV0TKhCJ/UI-SISTEM-CEK-PLAGIARISME?node-id=11-2&t=01Jq4Fh3I7dGLYoU-0',
      detailDescription: 'Plagiarism Checker application is a mobile-based platform to detect similarity levels or plagiarism in documents. Users can upload files, check plagiarism percentages, view analysis results, and download reports.',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
      features: [
        'Automatic Plagiarism Detection',
        'File Management & Download',
        'Integrated Customer Support'
      ],
      gallery: [
        '/images/Preview Cek 2.png', 
        '/images/Preview Cek 3.png', 
        '/images/Preview Cek 4.png', 
        '/images/Preview Cek 5.png', 
        '/images/Preview Cek 6.png', 
        '/images/Preview Cek 7.png', 
        '/images/Preview Cek 8.png'
      ]
    },
    {
      id: 7,
      title: 'Rooter Menggunakan Cisco',
      category: 'projects',
      image: '/images/Preview Rooter 1.png',
      description: 'Compile the design of the company that will be created based on the BINUS Bekasi building plan. We design networks for each company.',
      liveUrl: '#',
      detailsUrl: '#',
      detailDescription: 'A comprehensive network infrastructure design project using Cisco technologies for the BINUS Bekasi campus. This project involves creating detailed network topologies, configuring routers and switches, and ensuring optimal connectivity for different company units within the building.',
      technologies: ['Cisco Packet Tracer', 'Network Design', 'Routing Protocols'],
      features: [
        'Company Network Design Based on BINUS Bekasi Layout',
        'Network Cost and Media Calculation',
        'Subnet and Routing Table Configuration'
      ],
      gallery: [
        '/images/Preview Rooter 2.png', 
        '/images/Preview Rooter 3.png', 
        '/images/Preview Rooter 4.png'
      ]
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'Digital Transformation and Entrepreneurship: The Key to Success in the Digital Age',
      category: 'certificates',
      image: '/images/Certi 1.png',
      description: 'Certificate in digital transformation and entrepreneurship fundamentals',
      issuer: 'BINUS University',
      date: '2024'
    },
    {
      id: 2,
      title: 'Creating the Game User Interface Developer Research in Gaming for Workflow of Indonesia',
      category: 'certificates',
      image: '/images/Certi 2.png',
      description: 'Certificate in game user interface development and research',
      issuer: 'BINUS University',
      date: '2024'
    },
    {
      id: 3,
      title: 'A Leading Beginner for Accessibility Evaluation and Design for All',
      category: 'certificates',
      image: '/images/Certi 3.png',
      description: 'Certificate in accessibility evaluation and inclusive design',
      issuer: 'BINUS University',
      date: '2024'
    },
    {
      id: 4,
      title: 'Digital Transformation and Entrepreneurship: The Key to Success in the Digital Age',
      category: 'certificates',
      image: '/images/Certi 4.png',
      description: 'Advanced certificate in digital transformation strategies',
      issuer: 'BINUS University',
      date: '2024'
    },
    {
      id: 5,
      title: 'Oracle Certified Associate',
      category: 'certificates',
      image: '/images/Certi 5.png',
      description: 'Oracle database administration and development certification',
      issuer: 'Oracle',
      date: '2023'
    },
    {
      id: 6,
      title: 'Verified Certificate - Security for Cyber Physical Systems',
      category: 'certificates',
      image: '/images/Certi 6.png',
      description: 'Certificate in cyber physical systems security',
      issuer: 'Belajar.id',
      date: '2023'
    },
    {
      id: 7,
      title: 'Verified Certificate - Security for Embedded Systems',
      category: 'certificates',
      image: '/images/Certi 7.png',
      description: 'Certificate in embedded systems security',
      issuer: 'Belajar.id',
      date: '2023'
    },
    {
      id: 8,
      title: 'Verified Certificate - Network Security Fundamentals',
      category: 'certificates',
      image: '/images/Certi 8.png',
      description: 'Certificate in network security fundamentals',
      issuer: 'Belajar.id',
      date: '2023'
    },
    {
      id: 9,
      title: 'Advanced Web Development',
      category: 'certificates',
      image: '/images/Certi 9.png',
      description: 'Advanced web development techniques and frameworks',
      issuer: 'Tech Academy',
      date: '2023'
    },
    {
      id: 10,
      title: 'Data Science Fundamentals',
      category: 'certificates',
      image: '/images/Certi 10.png',
      description: 'Data science and analytics fundamentals',
      issuer: 'DataCamp',
      date: '2023'
    },
    {
      id: 11,
      title: 'Cloud Computing Essentials',
      category: 'certificates',
      image: '/images/Certi 11.png',
      description: 'Cloud computing platforms and services',
      issuer: 'AWS',
      date: '2023'
    },
    {
      id: 12,
      title: 'Mobile App Development',
      category: 'certificates',
      image: '/images/Certi 12.png',
      description: 'Mobile application development for iOS and Android',
      issuer: 'Google Developers',
      date: '2023'
    },
    {
      id: 13,
      title: 'Artificial Intelligence Basics',
      category: 'certificates',
      image: '/images/Certi 13.png',
      description: 'Introduction to artificial intelligence and machine learning',
      issuer: 'MIT Online',
      date: '2023'
    }
  ];

  const techStack = {
    'Front-End Development': [
      {
        id: 1,
        name: 'HTML',
        category: 'tech-stack',
        icon: '/images/html_icon.png',
        level: 'Advanced',
        description: 'Markup language for web development'
      },
      {
        id: 2,
        name: 'CSS',
        category: 'tech-stack', 
        icon: '/images/css_icon.png',
        level: 'Advanced',
        description: 'Styling and layout for web applications'
      },
      {
        id: 3,
        name: 'JavaScript',
        category: 'tech-stack',
        icon: '/images/javascript_icon.png', 
        level: 'Intermediate',
        description: 'Programming language for web interactivity'
      }
    ],
    'Back-End Development': [
      {
        id: 4,
        name: 'C',
        category: 'tech-stack',
        icon: '/images/c_icon.png',
        level: 'Intermediate', 
        description: 'System programming language'
      },
      {
        id: 5,
        name: 'Python',
        category: 'tech-stack',
        icon: '/images/python_icon.png',
        level: 'Advanced', 
        description: 'General-purpose programming language'
      },
      {
        id: 6,
        name: 'Java',
        category: 'tech-stack',
        icon: '/images/java_icon.png',
        level: 'Intermediate', 
        description: 'Object-oriented programming language'
      },
      {
        id: 7,
        name: 'MySQL',
        category: 'tech-stack',
        icon: '/images/sql_icon.png',
        level: 'Intermediate', 
        description: 'Relational database management system'
      }
    ],
    'Tools & Platforms': [
      {
        id: 8,
        name: 'Figma',
        category: 'tech-stack',
        icon: '/images/figma_icon.png',
        level: 'Advanced', 
        description: 'UI/UX design tool'
      },
      {
        id: 9,
        name: 'GitHub',
        category: 'tech-stack',
        icon: '/images/GitHub_icon.png',
        level: 'Advanced', 
        description: 'Version control and collaboration platform'
      },
      {
        id: 10,
        name: 'Vercel',
        category: 'tech-stack',
        icon: '/images/Vercel_icon.png',
        level: 'Intermediate', 
        description: 'Cloud platform for deployment'
      },
      {
        id: 11,
        name: 'Visual Studio Code',
        category: 'tech-stack',
        icon: '/images/VSCode_icon.png',
        level: 'Advanced', 
        description: 'Code editor and development environment'
      },
      {
        id: 12,
        name: 'Microsoft Office',
        category: 'tech-stack',
        icon: '/images/Office_icon.png',
        level: 'Advanced', 
        description: 'Office productivity suite'
      }
    ]
  };

  const community = [
    {
      id: 1,
      title: 'Jakarta Recycle Center (JRC) Volunteer 2025',
      category: 'community',
      image: '/images/Comunity 5.jpg',
      description: 'I participated as a volunteer in activities focused on sustainable waste management.',
      date: '2025',
      role: 'Volunteer'
    },
    {
      id: 2,
      title: 'Jakarta Recycle Center (JRC) Volunteer 2024',
      category: 'community',
      image: '/images/Comunity 4.jpg',
      description: 'I participated as a volunteer in activities focused on sustainable waste management.',
      date: '2024',
      role: 'Volunteer'
    },
    {
      id: 3,
      title: 'Character Building: Religion - Binus University',
      category: 'community',
      image: '/images/Comunity 3.png',
      description: 'Became an event organizer and delivered material (The Role of Religion in Resolving Social Conflicts with SARA Nuances in Various Communities).',
      date: '2024',
      role: 'Event Organizer'
    },
    {
      id: 4,
      title: 'Character Building: Citizenship - Binus University',
      category: 'community',
      image: '/images/Comunity 2.png',
      description: 'Became an event organizer and became a moderator on the material (High unemployment rates among youth and lack of decent job opportunities).',
      date: '2024',
      role: 'Event Organizer & Moderator'
    },
    {
      id: 5,
      title: 'Character Building: Pancasila - Binus University',
      category: 'community',
      image: '/images/Comunity 1.jpg',
      description: 'Became an event organizer and delivered material (Explanation of Corruption & Cases and Criminal Law of Corruption in Indonesia).',
      date: '2023',
      role: 'Event Organizer'
    }
  ];

  const getActiveContent = () => {
    switch(activeFilter) {
      case 'projects':
        return projects;
      case 'certificates':
        return certificates;
      case 'tech-stack':
        return [];
      case 'community':
        return community;
      default:
        return projects;
    }
  };

  const renderContent = () => {
    const content = getActiveContent();
    
    if (activeFilter === 'projects') {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {content.map((item: any, index: number) => (
            <div 
              key={item.id} 
              className="group relative transform hover:-translate-y-2 sm:hover:-translate-y-4 transition-all duration-700 ease-out"
              style={{
                animation: `float ${3.5 + index * 0.3}s ease-in-out infinite`,
                animationDelay: `${index * 0.15}s`
              }}
            >
              {/* Floating shadow */}
              <div className="absolute inset-0 bg-purple-500/20 rounded-2xl sm:rounded-3xl blur-xl translate-y-6 sm:translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-8 sm:group-hover:translate-y-12 transition-all duration-700"></div>
              
              {/* Main card */}
              <div className="relative bg-[rgba(26,26,46,0.7)] backdrop-blur-md border border-gray-700/40 rounded-2xl sm:rounded-3xl overflow-hidden hover:bg-[rgba(26,26,46,0.9)] hover:border-purple-500/60 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/30">
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/15 group-hover:via-pink-500/10 group-hover:to-purple-500/15 transition-all duration-700"></div>
                
                <div className="relative z-10">
                  <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,46,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                  <div className="p-4 sm:p-6 lg:p-8">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-purple-200 transition-colors duration-500 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 lg:mb-8 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-500">{item.description}</p>
                    <div className="flex justify-center">
                      <button 
                        onClick={() => openProjectModal(item)}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-500 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeFilter === 'certificates') {
      const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, 8);
      
      return (
        <div className="space-y-8 sm:space-y-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {displayedCertificates.map((item: any, index: number) => (
              <div 
                key={item.id} 
                onClick={() => openCertificateModal(item)}
                className="group relative cursor-pointer transform hover:-translate-y-2 sm:hover:-translate-y-4 transition-all duration-700 ease-out"
                style={{
                  animation: `float ${2.5 + index * 0.2}s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Floating shadow */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl sm:rounded-3xl blur-xl translate-y-4 sm:translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-6 sm:group-hover:translate-y-10 transition-all duration-700"></div>
                
                {/* Main card */}
                <div className="relative bg-[rgba(26,26,46,0.7)] backdrop-blur-md border border-gray-700/40 rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 hover:bg-[rgba(26,26,46,0.9)] hover:border-blue-500/60 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/30">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/15 group-hover:via-cyan-500/10 group-hover:to-blue-500/15 transition-all duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl mb-2 sm:mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <h3 className="text-xs sm:text-sm lg:text-lg font-bold text-white mb-1 sm:mb-2 line-clamp-2 group-hover:text-blue-200 transition-colors duration-500">{item.title}</h3>
                    <p className="text-blue-400 font-medium text-xs sm:text-sm line-clamp-1">{item.issuer} • {item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {!showAllCertificates && certificates.length > 8 && (
            <div className="text-center">
              <button
                onClick={() => setShowAllCertificates(true)}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-500 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:scale-105"
              >
                <span className="text-lg sm:text-xl">➕</span>
                <span className="hidden sm:inline">Show More Certificates</span>
                <span className="sm:hidden">More Certificates</span>
              </button>
            </div>
          )}

          {showAllCertificates && certificates.length > 8 && (
            <div className="text-center">
              <button
                onClick={() => setShowAllCertificates(false)}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-500 shadow-lg shadow-gray-500/30 hover:shadow-gray-500/50 transform hover:scale-105"
              >
                <span className="text-lg sm:text-xl">➖</span>
                Show Less
              </button>
            </div>
          )}
        </div>
      );
    }

    if (activeFilter === 'tech-stack') {
      return (
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="text-center">
              <div className="mb-6 sm:mb-8 lg:mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2 sm:mb-4">{category}</h3>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent"></div>
              </div>
              
              <div className="flex justify-center">
                <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${
                  category === 'Front-End Development' ? 'grid-cols-2 sm:grid-cols-3 max-w-sm sm:max-w-2xl lg:max-w-3xl' :
                  category === 'Back-End Development' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-md sm:max-w-3xl lg:max-w-4xl' :
                  'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-lg sm:max-w-4xl lg:max-w-5xl'
                }`}>
                  {items.map((item: any) => (
                    <div key={item.id} className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-gray-800/60 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 lg:mb-4 relative">
                        <Image
                          src={item.icon}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">{item.name}</h4>
                      <div className="text-purple-400 text-xs sm:text-sm font-medium">{item.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeFilter === 'community') {
      return (
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {community.map((item: any) => (
            <div key={item.id} className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl overflow-hidden hover:bg-gray-800/60 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Image Section */}
                <div className="md:col-span-1">
                  <div className="relative h-48 sm:h-56 md:h-full min-h-[200px] sm:min-h-[250px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="md:col-span-2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-purple-600/20 text-purple-300 text-xs font-medium rounded-full mb-3 sm:mb-4 w-fit">
                    {item.role}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-400 font-semibold text-sm sm:text-base">{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#16213e] to-[#1a1a2e] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 sm:top-32 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Portfolio Showcase
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
              Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12 px-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800/40 text-gray-400 border border-gray-700/50 hover:bg-gray-800/60 hover:text-white hover:border-purple-500/30'
                }`}
              >
                <i className={`${filter.icon} text-xs sm:text-sm`}></i>
                <span className="hidden xs:inline sm:inline">{filter.label}</span>
                <span className="xs:hidden sm:hidden text-xs">
                  {filter.id === 'projects' ? 'Projects' : 
                   filter.id === 'certificates' ? 'Certs' :
                   filter.id === 'tech-stack' ? 'Tech' : 'Community'}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          {renderContent()}
        </div>
      </div>

      {/* Project Detail Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
            {/* Modal Header with Breadcrumb */}
            <div className="border-b border-gray-700/30 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <button
                      onClick={closeModal}
                      className="flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 text-purple-300 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-purple-600/30 transition-all duration-300"
                    >
                      <i className="fas fa-arrow-left"></i>
                      <span className="hidden sm:inline">Kembali</span>
                    </button>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      <span className="hidden sm:inline">Projects &gt;</span>
                      <span className="text-purple-400 ml-1">{selectedProject.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content - Responsive Layout */}
            <div className="max-w-7xl mx-auto p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                {/* Left Column - Project Info */}
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                      {selectedProject.title}
                    </h1>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 sm:mb-6"></div>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {selectedProject.detailDescription}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gray-800/50 border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <i className="fas fa-code text-purple-400 mr-2"></i>
                        <span className="text-xl sm:text-2xl font-bold text-white">{selectedProject.technologies.length}</span>
                      </div>
                      <div className="text-purple-300 font-medium text-xs sm:text-sm">Total technology</div>
                    </div>
                    <div className="bg-gray-800/50 border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <i className="fas fa-star text-purple-400 mr-2"></i>
                        <span className="text-xl sm:text-2xl font-bold text-white">{selectedProject.features.length}</span>
                      </div>
                      <div className="text-purple-300 font-medium text-xs sm:text-sm">Key Features</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {/* Hide Demo Langsung button for ExamGuard (id: 5) and Rooter Cisco (id: 7) */}
                    {selectedProject.id !== 5 && selectedProject.id !== 7 && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                    )}
                    {/* Hide GitHub button for Rooter Cisco (id: 7) */}
                    {selectedProject.id !== 7 && (
                      <a 
                        href={selectedProject.detailsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-800 text-gray-300 px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-700 transition-all duration-300"
                      >
                        {/* Change GitHub to Figma Prototype for Figma Sistem Cek Plagiarisme (id: 6) */}
                        {selectedProject.id === 6 ? (
                          <>
                            <i className="fab fa-figma"></i>
                            <span className="hidden sm:inline">Figma Prototype</span>
                            <span className="sm:hidden">Figma</span>
                          </>
                        ) : (
                          <>
                            <i className="fab fa-github"></i>
                            GitHub
                          </>
                        )}
                      </a>
                    )}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-3 sm:mb-4 flex items-center gap-2">
                      <i className="fas fa-code"></i>
                      Technology Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="bg-gray-800/60 text-gray-300 px-3 py-2 rounded-lg text-xs sm:text-sm border border-gray-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Visual Content */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Main Preview */}
                  <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <div className="relative h-48 sm:h-64 lg:h-80 w-full rounded-lg overflow-hidden bg-gray-700/50">
                      <Image
                        src={selectedProject.gallery && selectedProject.gallery.length > 0 ? selectedProject.gallery[activeImageIndex] : selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-contain transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Gallery */}
                  {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-3 sm:mb-4 flex items-center gap-2">
                        <i className="fas fa-images"></i>
                        Galery
                      </h3>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
                        {selectedProject.gallery.map((image: string, index: number) => (
                          <button
                            key={index}
                            onClick={() => changeActiveImage(index)}
                            className={`relative h-16 sm:h-20 lg:h-24 rounded-lg overflow-hidden bg-gray-700/50 border-2 transition-all duration-300 ${
                              activeImageIndex === index 
                                ? 'border-purple-500 ring-2 ring-purple-500/50' 
                                : 'border-gray-600/30 hover:border-purple-400/50'
                            }`}
                          >
                            <Image
                              src={image}
                              alt={`${selectedProject.title} ${index + 1}`}
                              fill
                              className="object-contain transition-all duration-300"
                            />
                            {activeImageIndex === index && (
                              <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center">
                                <i className="fas fa-eye text-white text-sm sm:text-lg"></i>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-3 sm:mb-4 flex items-center gap-2">
                      <i className="fas fa-star"></i>
                      Key Features
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start gap-3 bg-gray-800/30 border border-gray-700/30 rounded-lg p-3 sm:p-4">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {showCertificateModal && selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeCertificateModal}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeCertificateModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-gray-200/80 hover:bg-gray-300/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 transition-all duration-300"
            >
              <i className="fas fa-times text-sm sm:text-lg"></i>
            </button>
            
            {/* Certificate Image */}
            <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] max-h-[85vh] sm:max-h-[80vh]">
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}