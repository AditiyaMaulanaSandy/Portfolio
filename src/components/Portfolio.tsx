'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useBackHandler } from '../hooks/useBackHandler';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('projects');
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const filters = [
    { id: 'projects', label: 'Project', icon: '💻' },
    { id: 'certificates', label: 'Certificate', icon: '🏅' },
    { id: 'tech-stack', label: 'Tech Stack', icon: '🛠️' },
    { id: 'community', label: 'Community', icon: '👥' }
  ];

  // Effect to control body scroll when modal is open
  useEffect(() => {
    if (showModal || showCertificateModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal, showCertificateModal]);

  // Handle back button for project modal
  const { handleClose: handleProjectModalClose } = useBackHandler({
    isModalOpen: showModal,
    onBackAction: () => {
      setShowModal(false);
      setSelectedProject(null);
      setActiveImageIndex(0);
    }
  });

  // Handle back button for certificate modal
  const { handleClose: handleCertificateModalClose } = useBackHandler({
    isModalOpen: showCertificateModal,
    onBackAction: () => {
      setShowCertificateModal(false);
      setSelectedCertificate(null);
    }
  });

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setShowModal(true);
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    handleProjectModalClose();
  };

  const changeActiveImage = (index: number) => {
    setActiveImageIndex(index);
  };

  const openCertificateModal = (certificate: any) => {
    setSelectedCertificate(certificate);
    setShowCertificateModal(true);
  };

  const closeCertificateModal = () => {
    handleCertificateModalClose();
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
      image: '/images/Comunity 1.JPG',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item: any, index: number) => (
            <div 
              key={item.id} 
              className="group relative transform hover:-translate-y-4 transition-all duration-700 ease-out"
              style={{
                animation: `float ${3.5 + index * 0.3}s ease-in-out infinite`,
                animationDelay: `${index * 0.15}s`
              }}
            >
              <div className="absolute inset-0 bg-purple-500/20 rounded-3xl blur-xl translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-12 transition-all duration-700"></div>
              
              <div className="relative bg-[rgba(26,26,46,0.7)] backdrop-blur-md border border-gray-700/40 rounded-3xl overflow-hidden hover:bg-[rgba(26,26,46,0.9)] hover:border-purple-500/60 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/30">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/15 group-hover:via-pink-500/10 group-hover:to-purple-500/15 transition-all duration-700"></div>
                
                <div className="relative z-10">
                  <div className="relative h-56 overflow-hidden rounded-t-3xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,46,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-500">{item.title}</h3>
                    <p className="text-gray-400 text-base mb-8 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-500 text-justify">{item.description}</p>
                    <div className="flex justify-center">
                      <button 
                        onClick={() => openProjectModal(item)}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-500 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
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
        <div className="space-y-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayedCertificates.map((item: any, index: number) => (
              <div 
                key={item.id} 
                onClick={() => openCertificateModal(item)}
                className="group relative cursor-pointer transform hover:-translate-y-4 transition-all duration-700 ease-out"
                style={{
                  animation: `float ${2.5 + index * 0.2}s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-10 transition-all duration-700"></div>
                
                <div className="relative bg-[rgba(26,26,46,0.7)] backdrop-blur-md border border-gray-700/40 rounded-3xl p-4 hover:bg-[rgba(26,26,46,0.9)] hover:border-blue-500/60 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/30">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/15 group-hover:via-cyan-500/10 group-hover:to-blue-500/15 transition-all duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {!showAllCertificates && certificates.length > 8 && (
            <div className="text-center">
              <button
                onClick={() => setShowAllCertificates(true)}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-500 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:scale-105"
              >
                <span className="text-xl">➕</span>
                Show More
              </button>
            </div>
          )}

          {showAllCertificates && certificates.length > 8 && (
            <div className="text-center">
              <button
                onClick={() => setShowAllCertificates(false)}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-500 shadow-lg shadow-gray-500/30 hover:shadow-gray-500/50 transform hover:scale-105"
              >
                <span className="text-xl">➖</span>
                Show Less
              </button>
            </div>
          )}
        </div>
      );
    }

    if (activeFilter === 'tech-stack') {
      return (
        <div className="space-y-16">
          {Object.entries(techStack).map(([category, items], categoryIndex) => (
            <div key={category} className="text-center">
              {/* Category Header */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-purple-400 mb-8">
                  {category === 'Front-End Development' ? 'Back-End Development' :
                   category === 'Back-End Development' ? 'Front-End Development' :
                   'Tools & Platforms'}
                </h3>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              </div>

              {/* Tech Grid */}
              <div className="flex justify-center">
                <div className={`grid gap-6 ${
                  category === 'Front-End Development' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl' :
                  category === 'Back-End Development' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-5xl' :
                  'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-6xl'
                }`}>
                  {items.map((item: any, index: number) => (
                    <div 
                      key={item.id}
                      className="group relative transform hover:-translate-y-2 transition-all duration-500 ease-out"
                      style={{
                        animation: `float ${3.5 + index * 0.2}s ease-in-out infinite`,
                        animationDelay: `${(categoryIndex * items.length + index) * 0.1}s`
                      }}
                    >
                      {/* Floating shadow */}
                      <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all duration-500"></div>
                      
                      {/* Main card */}
                      <div className="relative bg-[rgba(26,26,46,0.7)] backdrop-blur-md border border-gray-700/40 rounded-2xl aspect-square flex flex-col items-center justify-center text-center hover:bg-[rgba(26,26,46,0.9)] hover:border-purple-500/60 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/25">
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>
                        
                        <div className="relative z-10 p-6">
                          {/* Tech Icon */}
                          <div className="w-16 h-16 mx-auto mb-4 relative">
                            <Image
                              src={item.icon}
                              alt={item.name}
                              fill
                              className="object-contain filter group-hover:brightness-110 transition-all duration-500"
                            />
                          </div>
                          
                          {/* Tech Name */}
                          <h4 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                            {item.name}
                          </h4>
                        </div>
                      </div>
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
        <div className="max-w-4xl mx-auto space-y-6">
          {community.map((item: any, index: number) => (
            <div 
              key={item.id} 
              className="group relative transform hover:-translate-y-4 transition-all duration-700 ease-out"
              style={{
                animation: `float ${4 + index * 0.5}s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`
              }}
            >
              <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-10 transition-all duration-700"></div>
              
              <div className="relative bg-[rgba(26,26,46,0.7)] backdrop-blur-md border border-gray-700/40 rounded-2xl overflow-hidden hover:bg-[rgba(26,26,46,0.9)] hover:border-cyan-500/60 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/30">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-cyan-500/15 group-hover:via-blue-500/10 group-hover:to-cyan-500/15 transition-all duration-700"></div>
                
                <div className="relative z-10">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-1">
                      <div className="relative h-48 md:h-full min-h-[200px] overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(26,26,46,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                      <div className="inline-block px-3 py-1 bg-cyan-600/20 text-cyan-300 text-xs font-semibold rounded-full mb-4 w-fit group-hover:bg-cyan-600/30 group-hover:text-cyan-200 transition-all duration-500">
                        {item.role}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-200 transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-500 text-justify">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-cyan-400 font-bold text-base group-hover:text-cyan-300 transition-colors duration-500">{item.date}</span>
                      </div>
                    </div>
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
    <section id="portfolio" className="min-h-screen py-20 bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(147, 51, 234, 0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6 backdrop-blur-sm">
              🚀 Portfolio Journey
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-[1.1] px-4">
              Portfolio Showcase
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 mx-auto rounded-full mt-8"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                    : 'bg-[rgba(26,26,46,0.6)] text-gray-300 border border-gray-700/40 hover:bg-[rgba(26,26,46,0.8)] hover:text-white hover:border-purple-500/40 backdrop-blur-md'
                }`}
              >
                <span className="text-xl">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>

          {renderContent()}
        </div>
      </div>

      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
            <div className="border-b border-gray-700/30 bg-[rgba(26,26,46,0.8)] backdrop-blur-md">
              <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={closeModal}
                      className="flex items-center gap-3 bg-purple-600/20 border border-purple-500/30 text-purple-300 px-6 py-3 rounded-2xl hover:bg-purple-600/30 transition-all duration-300 font-medium"
                    >
                      ← Back
                    </button>
                    <div className="text-gray-400">
                      Projects / <span className="text-purple-400">{selectedProject.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto p-8">
              <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-10">
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
                      {selectedProject.title}
                    </h1>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>

                  <p className="text-gray-300 text-xl leading-relaxed text-justify">
                    {selectedProject.detailDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-[rgba(26,26,46,0.8)] border border-purple-500/20 rounded-3xl p-8 text-center backdrop-blur-md">
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-purple-400 mr-3 text-2xl">💻</span>
                        <span className="text-3xl font-bold text-white">{selectedProject.technologies.length}</span>
                      </div>
                      <div className="text-purple-300 font-semibold">Technologies</div>
                    </div>
                    <div className="bg-[rgba(26,26,46,0.8)] border border-purple-500/20 rounded-3xl p-8 text-center backdrop-blur-md">
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-purple-400 mr-3 text-2xl">⭐</span>
                        <span className="text-3xl font-bold text-white">{selectedProject.features.length}</span>
                      </div>
                      <div className="text-purple-300 font-semibold">Features</div>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    {selectedProject.id !== 5 && selectedProject.id !== 7 && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:scale-105"
                      >
                        <span className="text-xl">🚀</span>
                        Live Demo
                      </a>
                    )}
                    {selectedProject.id !== 7 && (
                      <a 
                        href={selectedProject.detailsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-gray-800/80 text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-700/80 transition-all duration-300 backdrop-blur-md hover:scale-105"
                      >
                        {selectedProject.id === 6 ? (
                          <>
                            <span className="text-xl">🎨</span>
                            Figma Design
                          </>
                        ) : (
                          <>
                            <span className="text-xl">📂</span>
                            GitHub
                          </>
                        )}
                      </a>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                      <span className="text-2xl">🔧</span>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="bg-[rgba(26,26,46,0.8)] text-gray-300 px-4 py-2 rounded-xl border border-gray-600/30 backdrop-blur-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="bg-[rgba(26,26,46,0.6)] border border-gray-700/30 rounded-3xl p-8 backdrop-blur-md">
                    <div className="relative h-80 w-full rounded-2xl overflow-hidden bg-gray-700/50">
                      <Image
                        src={selectedProject.gallery && selectedProject.gallery.length > 0 ? selectedProject.gallery[activeImageIndex] : selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-contain transition-all duration-300"
                      />
                    </div>
                  </div>

                  {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                    <div>
                      <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                        <span className="text-2xl">🖼️</span>
                        Gallery
                      </h3>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                        {selectedProject.gallery.map((image: string, index: number) => (
                          <button
                            key={index}
                            onClick={() => changeActiveImage(index)}
                            className={`relative h-24 rounded-2xl overflow-hidden bg-gray-700/50 border-2 transition-all duration-300 ${
                              activeImageIndex === index 
                                ? 'border-purple-500 ring-2 ring-purple-500/50 scale-105' 
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
                                <span className="text-white text-2xl">👁️</span>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                      <span className="text-2xl">✨</span>
                      Key Features
                    </h3>
                    <div className="space-y-4">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start gap-4 bg-[rgba(26,26,46,0.6)] border border-gray-700/30 rounded-2xl p-6 backdrop-blur-md">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-lg text-justify">{feature}</span>
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

      {showCertificateModal && selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeCertificateModal}
        >
          <div 
            className="relative max-w-[95vw] max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeCertificateModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <span className="text-xl">✕</span>
            </button>
            
            <div className="flex items-center justify-center">
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                width={0}
                height={0}
                sizes="95vw"
                className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-12px) rotate(1deg);
          }
          66% {
            transform: translateY(-6px) rotate(-1deg);
          }
        }

        @keyframes fillBar {
          0% {
            width: 0%;
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes drawCircle {
          0% {
            stroke-dasharray: 0 97.4;
          }
          100% {
            stroke-dasharray: var(--dash-array, 0) 97.4;
          }
        }
      `}</style>
    </section>
  );
}