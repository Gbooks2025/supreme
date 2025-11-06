"use client";
import { Activity, Award, Clock, Users, Phone, Mail, MapPin, ArrowRight, Check, Zap, Heart, Calendar, FileText, TrendingUp, Bone } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout'

export default function Orthopedics() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    updateTheme();
    window.addEventListener('storage', updateTheme);
    
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      window.removeEventListener('storage', updateTheme);
      observer.disconnect();
    };
  }, []);

  if (!mounted) return null;

  const surgicalServices = [
    {
      name: 'Arthroscopic Surgery',
      description: 'Minimally invasive visualization and treatment of intra-articular pathology using advanced arthroscopic instrumentation'
    },
    {
      name: 'Anterior Cruciate Ligament (ACL) Reconstruction',
      description: 'Arthroscopic reconstruction with autograft or allograft with emphasis on anatomic positioning and early rehabilitation'
    },
    {
      name: 'Rotator Cuff Repair',
      description: 'Arthroscopic and open repair of rotator cuff tears with modern fixation techniques'
    },
    {
      name: 'Joint Replacement Surgery',
      description: 'Total knee arthroplasty (TKA) and total hip arthroplasty (THA) with modern implant systems'
    },
    {
      name: 'Meniscectomy & Meniscal Repair',
      description: 'Arthroscopic management of meniscal tears with preservation techniques when feasible'
    },
    {
      name: 'Fracture Fixation',
      description: 'Open reduction and internal fixation (ORIF) with contemporary fixation hardware and surgical techniques'
    },
    {
      name: 'Spine Surgery Consultation',
      description: 'Evaluation and referral coordination for complex spinal pathology requiring specialized intervention'
    },
    {
      name: 'Sports Injury Management',
      description: 'Acute management and surgical treatment of athletic injuries with sports-specific rehabilitation'
    }
  ];

  const conservativeServices = [
    {
      name: 'Comprehensive Joint Assessment',
      description: 'Detailed history, physical examination, and imaging interpretation for joint pathology'
    },
    {
      name: 'Intra-Articular Joint Injections',
      description: 'Guided corticosteroid and viscosupplementation injections for osteoarthritis and inflammatory conditions'
    },
    {
      name: 'Physical Medicine & Rehabilitation',
      description: 'Structured exercise programs, manual therapy, and rehabilitation protocols for musculoskeletal injuries'
    },
    {
      name: 'Prosthetic & Orthotic Fitting',
      description: 'Custom fabrication and fitting of assistive devices and orthotic supports'
    },
    {
      name: 'Pain Management',
      description: 'Multimodal pain control including NSAIDs, muscle relaxants, and intervention-based therapies'
    },
    {
      name: 'Occupational Therapy Coordination',
      description: 'Functional assessment and adaptive strategy development for activities of daily living'
    }
  ];

  const treatedConditions = [
    {
      condition: 'Osteoarthritis (OA)',
      details: 'Multi-stage management from conservative therapy with NSAIDs and intra-articular injections to joint replacement when indicated'
    },
    {
      condition: 'Rheumatoid Arthritis (RA)',
      details: 'Surgical management of joint destruction and coordination with rheumatology for disease-modifying therapy'
    },
    {
      condition: 'Rotator Cuff Syndrome',
      details: 'Conservative management with physical therapy and corticosteroid injections; surgical repair for full-thickness tears'
    },
    {
      condition: 'Anterior Cruciate Ligament (ACL) Injury',
      details: 'Acute management with immobilization and rehabilitation; surgical reconstruction in active patients'
    },
    {
      condition: 'Meniscal Tears',
      details: 'Arthroscopic repair or meniscectomy based on tear pattern and chronicity'
    },
    {
      condition: 'Lumbar Disc Herniation',
      details: 'Conservative management with NSAIDs, physical therapy, and epidural injections; surgical decompression when conservative therapy fails'
    },
    {
      condition: 'Cervical Radiculopathy',
      details: 'Management of nerve root compression with anti-inflammatory therapy and imaging-guided interventions'
    },
    {
      condition: 'Tennis Elbow (Lateral Epicondylitis)',
      details: 'Conservative management with bracing, NSAIDs, and physical therapy; platelet-rich plasma (PRP) injections as alternative'
    },
    {
      condition: 'Plantar Fasciitis',
      details: 'Multi-modal conservative treatment including custom orthotics, anti-inflammatory therapy, and targeted physiotherapy'
    },
    {
      condition: 'Fracture Management',
      details: 'Acute fracture reduction, stabilization, and fixation with attention to anatomic reduction and early mobilization'
    },
    {
      condition: 'Knee Ligament Injuries',
      details: 'Assessment and management of MCL, PCL, and posterolateral injuries with functional bracing and rehabilitation'
    },
    {
      condition: 'Sports-Related Injuries',
      details: 'Comprehensive management of acute athletic injuries with sport-specific rehabilitation protocols'
    }
  ];

  const diagnosticModalities = [
    {
      modality: 'X-ray Imaging',
      description: 'Standard radiographs for fracture detection, joint alignment, and degenerative changes'
    },
    {
      modality: 'MRI (Magnetic Resonance Imaging)',
      description: 'Soft tissue imaging for ligament, meniscal, cartilage, and muscle pathology assessment'
    },
    {
      modality: 'CT Scan',
      description: 'High-resolution imaging for complex fractures and surgical planning'
    },
    {
      modality: 'Ultrasound Imaging',
      description: 'Real-time dynamic imaging for tendon, ligament, and joint effusion assessment'
    },
    {
      modality: 'Physical Examination Tests',
      description: 'Specialized orthopedic maneuvers (Lachman, Pivot Shift, McMurray) for clinical diagnosis'
    }
  ];

  const rehabilitationPrograms = [
    {
      category: 'Post-Operative Rehabilitation',
      items: [
        'ACL reconstruction rehabilitation protocol (0-6 weeks, 6-12 weeks, 3-6 months)',
        'Rotator cuff repair protocol with progressive range of motion restoration',
        'Total joint arthroplasty rehabilitation with early mobilization protocols',
        'Fracture rehabilitation with progressive weight-bearing advancement',
        'Sport-specific return-to-play progression'
      ]
    },
    {
      category: 'Conservative Management Programs',
      items: [
        'Osteoarthritis management with home exercise programs',
        'Tendinitis/bursitis treatment with therapeutic modalities',
        'Neck pain (cervicogenic) rehabilitation',
        'Lower back pain management and prevention programs',
        'Functional capacity evaluation and work conditioning'
      ]
    },
    {
      category: 'Sports Performance Enhancement',
      items: [
        'Pre-season conditioning and injury prevention',
        'Sport-specific training protocols',
        'Balance and proprioception training',
        'Return-to-sport clearance and progression',
        'Performance optimization for athletes'
      ]
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Gaurav Agrawal',
      qualification: 'MS (Orthopedic Surgery), Fellowship in Sports Medicine',
      specialization: 'Orthopedic Surgery & Sports Medicine',
      experience: '14+ Years',
      expertise: [
        'Arthroscopic Surgery',
        'Sports Injuries Management',
        'Fracture Fixation',
        'Joint Replacement',
        'Sports Medicine & Rehabilitation'
      ],
      availability: 'Sat 2:00 PM'
    }
  ];

  return (
    <Layout>
    <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      {/* ============ HERO SECTION ============ */}
      <section className={`relative min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-white via-orange-50/40 to-amber-50/30'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-orange-500/20' : 'bg-orange-300/20'}`}></div>
          <div className={`absolute -bottom-40 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-yellow-500/20' : 'bg-yellow-300/20'}`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 transition-all duration-300 ${isDark ? 'bg-emerald-500/15 border-emerald-500/30' : 'bg-emerald-100/70 border-emerald-300/60'}`}>
                <Activity className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>ORTHOPEDICS DEPARTMENT</span>
              </div>

              <h1 className={`text-6xl lg:text-7xl font-black mb-6 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Bone & Joint
                <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              <p className={`text-xl transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Comprehensive orthopedic care combining surgical expertise with evidence-based conservative management for optimal musculoskeletal health and functional restoration.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">14+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Clinical Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">2200+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Procedures Done</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Sports</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Medicine Fellow</p>
                </div>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Calendar className="w-5 h-5" />
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80 rounded-3xl flex items-center justify-center text-9xl bg-gradient-to-br from-emerald-600 to-cyan-600 shadow-2xl shadow-emerald-600/30">
                <Activity className="w-48 h-48 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OVERVIEW SECTION ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-b from-white via-emerald-50/30 to-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Advanced Surgical Techniques',
                desc: 'Minimally invasive arthroscopic procedures and contemporary open surgical approaches'
              },
              {
                icon: TrendingUp,
                title: 'Comprehensive Rehabilitation',
                desc: 'Structured recovery programs for optimal functional restoration and return to activity'
              },
              {
                icon: Users,
                title: 'Sports Medicine Expertise',
                desc: 'Specialized management of athletic injuries with performance enhancement focus'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border p-8 text-center transition-all duration-300 hover:-translate-y-2 ${
                    isDark
                      ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                      : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <Icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SURGICAL SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Surgical Services
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Advanced surgical interventions utilizing arthroscopic and open techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {surgicalServices.map((service, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-600 to-cyan-600 flex-shrink-0 mt-1">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {service.name}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONSERVATIVE SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Conservative Management Services
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Non-surgical treatment approaches for musculoskeletal conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conservativeServices.map((service, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-white border-gray-200 hover:border-emerald-400 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-600 to-cyan-600 flex-shrink-0 mt-1">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {service.name}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONDITIONS TREATED ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Conditions Managed
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive orthopedic management of diverse musculoskeletal pathology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {treatedConditions.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50 hover:bg-white/10'
                    : 'bg-white border-gray-200 hover:border-emerald-400 shadow-sm hover:shadow-md'
                }`}
              >
                <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  {item.condition}
                </h3>
                <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DIAGNOSTIC MODALITIES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Diagnostic Modalities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {diagnosticModalities.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-white border-gray-200 hover:border-emerald-400 shadow-sm hover:shadow-md'
                }`}
              >
                <Zap className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className={`font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.modality}
                </h3>
                <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REHABILITATION PROGRAMS ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Rehabilitation Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {rehabilitationPrograms.map((program, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-8 transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/15'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60'
                }`}
              >
                <h3 className={`text-lg font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {program.category}
                </h3>

                <ul className="space-y-2">
                  {program.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-1.5"></div>
                      <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TEAM SECTION ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Clinical Team
          </h2>

          {teamMembers.map((doctor, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 max-w-5xl mx-auto ${
                isDark
                  ? 'bg-gradient-to-r from-white/8 to-white/3 border-white/10'
                  : 'bg-white border-gray-200 shadow-lg'
              }`}
            >
              <div className="h-2 bg-gradient-to-r from-emerald-600 to-cyan-600"></div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <div className="w-32 h-32 rounded-2xl flex items-center justify-center text-6xl bg-gradient-to-br from-emerald-600 to-cyan-600 mb-6">
                      👨‍⚕️
                    </div>
                    <h3 className={`text-3xl font-black mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {doctor.name}
                    </h3>
                    <p className="text-emerald-600 font-bold text-lg mb-3">{doctor.specialization}</p>
                    <div className={`space-y-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <p><strong>Qualifications:</strong> {doctor.qualification}</p>
                      <p><strong>Experience:</strong> {doctor.experience}</p>
                      <p><strong>Availability:</strong> {doctor.availability}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className={`text-xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Areas of Expertise
                    </h4>
                    <ul className="space-y-2">
                      {doctor.expertise.map((exp, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                          <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {exp}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                      Schedule Consultation
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-emerald-600 to-cyan-600`}>
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-8">
            Restore Your Mobility & Function
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Our orthopedic team combines surgical expertise with comprehensive rehabilitation to help you return to an active lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <Calendar className="w-5 h-5" />
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
