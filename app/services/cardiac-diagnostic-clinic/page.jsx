"use client";
import { Heart, Award, Clock, Users, Phone, Mail, MapPin, ArrowRight, Check, Activity, Stethoscope, Calendar, FileText, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout'

export default function CardiacDiagnosticClinic() {
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

  const diagnosticServices = [
    {
      name: 'Electrocardiography (ECG/EKG)',
      description: 'Standard 12-lead ECG recording for detection of arrhythmias, conduction abnormalities, ischemic changes, and chamber enlargement patterns'
    },
    {
      name: 'Resting ECG',
      description: 'Quick non-invasive test to evaluate heart rhythm, identify arrhythmias, and detect signs of previous heart attacks or heart disease'
    },
    {
      name: 'Exercise Stress Test (Treadmill Test)',
      description: 'Dynamic assessment of cardiac function during graded exercise to detect exercise-induced ischemia and evaluate functional capacity'
    },
    {
      name: 'Electroencephalography (EEG)',
      description: 'Non-invasive recording of brain electrical activity for evaluation of seizure disorders and neurological conditions'
    },
    {
      name: '24-Hour Holter Monitoring',
      description: 'Continuous ambulatory ECG recording over 24-48 hours to detect intermittent arrhythmias and correlate symptoms with cardiac rhythm'
    },
    {
      name: 'Ambulatory Blood Pressure Monitoring (ABPM)',
      description: 'Automated 24-hour blood pressure recording for accurate hypertension diagnosis and assessment of treatment efficacy'
    },
    {
      name: 'Ultrasonography (USG)',
      description: 'High-resolution ultrasound imaging for evaluation of abdominal organs, thyroid, soft tissues, and vascular structures'
    },
    {
      name: '2D Echocardiography with Color Doppler',
      description: 'Real-time cardiac imaging with hemodynamic assessment for evaluation of chamber size, wall motion, valvular function, and blood flow'
    },
    {
      name: 'Carotid Doppler Ultrasound',
      description: 'Non-invasive assessment of carotid artery stenosis and blood flow velocity for stroke risk stratification'
    },
    {
      name: 'Peripheral Vascular Doppler',
      description: 'Evaluation of arterial and venous blood flow in extremities for diagnosis of peripheral arterial disease and venous insufficiency'
    },
    {
      name: 'X-Ray Imaging',
      description: 'Digital radiography for evaluation of chest, skeletal, and soft tissue abnormalities with minimal radiation exposure'
    },
    {
      name: 'Spirometry (Pulmonary Function Test)',
      description: 'Objective assessment of lung volumes and airflow for diagnosis and monitoring of obstructive and restrictive lung diseases'
    }
  ];

  const clinicalApplications = [
    {
      condition: 'Arrhythmia Detection',
      details: 'Comprehensive rhythm monitoring using ECG and Holter monitoring for diagnosis of atrial fibrillation, ventricular arrhythmias, and conduction disorders'
    },
    {
      condition: 'Coronary Artery Disease Screening',
      details: 'Exercise stress testing and cardiac imaging for early detection of ischemic heart disease and risk stratification'
    },
    {
      condition: 'Hypertension Evaluation',
      details: 'Ambulatory blood pressure monitoring for accurate diagnosis of white-coat hypertension, masked hypertension, and treatment optimization'
    },
    {
      condition: 'Heart Failure Assessment',
      details: 'Echocardiographic evaluation of systolic and diastolic function, chamber dimensions, and valvular abnormalities'
    },
    {
      condition: 'Valvular Heart Disease',
      details: 'Detailed Doppler assessment of stenosis and regurgitation severity with hemodynamic calculations'
    },
    {
      condition: 'Peripheral Vascular Disease',
      details: 'Doppler ultrasound evaluation of arterial stenosis, aneurysms, and venous insufficiency'
    },
    {
      condition: 'Stroke Risk Assessment',
      details: 'Carotid duplex scanning for detection of atherosclerotic plaques and estimation of stenosis severity'
    },
    {
      condition: 'Pulmonary Disease Evaluation',
      details: 'Spirometry testing for diagnosis and monitoring of COPD, asthma, and restrictive lung diseases'
    },
    {
      condition: 'Palpitations and Syncope',
      details: 'Extended cardiac monitoring to correlate symptoms with rhythm disturbances and identify underlying causes'
    },
    {
      condition: 'Pre-operative Cardiac Assessment',
      details: 'Comprehensive cardiac evaluation including ECG and echocardiography for surgical risk stratification'
    }
  ];

  const testingProtocols = [
    {
      category: 'Non-Invasive Cardiac Tests',
      items: [
        'Resting 12-lead ECG with standardized electrode placement',
        'Exercise stress testing with Bruce or modified Bruce protocol',
        '24-48 hour Holter monitoring with full disclosure analysis',
        'Transthoracic echocardiography with comprehensive Doppler assessment'
      ]
    },
    {
      category: 'Vascular Diagnostics',
      items: [
        'Carotid duplex ultrasound with velocity measurements and plaque characterization',
        'Lower extremity arterial Doppler with ankle-brachial index (ABI)',
        'Venous Doppler for deep vein thrombosis evaluation',
        'Abdominal aorta ultrasound for aneurysm screening'
      ]
    },
    {
      category: 'Additional Diagnostic Services',
      items: [
        'Digital chest X-ray with immediate reporting',
        'Electroencephalography (EEG) for neurological assessment',
        'Spirometry with bronchodilator response testing',
        'Ambulatory blood pressure monitoring with circadian analysis'
      ]
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Cardiac Diagnostic Specialist',
      qualification: 'MD (Cardiology), FESC',
      specialization: 'Cardiac Diagnostics & Imaging',
      experience: '12+ Years',
      expertise: [
        'Advanced Echocardiography',
        'Stress Testing Interpretation',
        'Holter Monitor Analysis',
        'Vascular Ultrasound'
      ],
      availability: 'Daily 9:00 AM - 5:00 PM'
    }
  ];

  return (
    <Layout>
    <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      {/* ============ HERO SECTION ============ */}
      <section className={`relative min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-white via-emerald-50/40 to-cyan-50/30'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-300/20'}`}></div>
          <div className={`absolute -bottom-40 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-300/20'}`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 transition-all duration-300 ${isDark ? 'bg-emerald-500/15 border-emerald-500/30' : 'bg-emerald-100/70 border-emerald-300/60'}`}>
                <Activity className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>CARDIAC DIAGNOSTIC CLINIC</span>
              </div>

              <h1 className={`text-6xl lg:text-7xl font-black mb-6 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Precision
                <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Cardiac Diagnostics
                </span>
              </h1>

              <p className={`text-xl transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                State-of-the-art non-invasive cardiac diagnostic facility equipped with advanced technology for comprehensive cardiovascular assessment and accurate disease detection.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">12+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Diagnostic Tests</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">5000+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Tests Performed</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">24hr</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Holter Monitoring</p>
                </div>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Calendar className="w-5 h-5" />
                Book Diagnostic Test
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80 rounded-3xl flex items-center justify-center text-9xl bg-gradient-to-br from-emerald-600 to-cyan-600 shadow-2xl shadow-emerald-600/30">
                <Activity className="w-48 h-48 text-white animate-pulse" />
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
                title: 'Quick & Accurate',
                desc: 'Fast turnaround times with immediate reporting for urgent cardiac evaluations'
              },
              {
                icon: TrendingUp,
                title: 'Advanced Technology',
                desc: 'Latest diagnostic equipment ensuring precise measurements and reliable results'
              },
              {
                icon: Award,
                title: 'Expert Interpretation',
                desc: 'Board-certified specialists providing detailed analysis and clinical recommendations'
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

      {/* ============ DIAGNOSTIC SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Comprehensive Diagnostic Services
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Complete range of non-invasive cardiac and vascular diagnostic tests with same-day reporting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {diagnosticServices.map((service, idx) => (
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

      {/* ============ CLINICAL APPLICATIONS ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Clinical Applications
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Diagnostic testing for comprehensive cardiovascular and related conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {clinicalApplications.map((item, idx) => (
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

      {/* ============ TESTING PROTOCOLS ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Testing Protocols & Procedures
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testingProtocols.map((protocol, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-8 transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/15'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {protocol.category}
                </h3>

                <ul className="space-y-3">
                  {protocol.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-2"></div>
                      <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
            Diagnostic Team
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
                      Book Diagnostic Test
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
            Advanced Cardiac Diagnostics Available Today
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Schedule your cardiac diagnostic test with our expert team for accurate assessment and timely results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <Calendar className="w-5 h-5" />
              Book Test Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call for Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
