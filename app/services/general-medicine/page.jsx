"use client";
import { Stethoscope, Award, Clock, Users, Phone, Mail, MapPin, ArrowRight, Check, Activity, Heart, Calendar, FileText, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout'

export default function GeneralMedicine() {
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

  const clinicalServices = [
    {
      name: 'Comprehensive Medical Consultation',
      description: 'Detailed history and physical examination with differential diagnosis formulation and evidence-based management'
    },
    {
      name: 'Acute Illness Management',
      description: 'Evaluation and treatment of acute conditions including infections, respiratory illnesses, and gastrointestinal disorders'
    },
    {
      name: 'Chronic Disease Management',
      description: 'Long-term optimization of chronic conditions with regular monitoring and medication adjustments'
    },
    {
      name: 'Health Risk Assessment',
      description: 'Comprehensive cardiovascular and metabolic risk stratification using validated clinical tools'
    },
    {
      name: 'Preventive Health Screening',
      description: 'Age-appropriate cancer, cardiovascular, and infectious disease screening protocols'
    },
    {
      name: 'Laboratory & Imaging Coordination',
      description: 'Appropriate ordering and interpretation of diagnostic tests with clinical correlation'
    },
    {
      name: 'Medication Management',
      description: 'Polypharmacy review, drug interaction assessment, and optimization of therapeutic regimens'
    },
    {
      name: 'Pre-operative Clearance',
      description: 'Comprehensive surgical risk assessment and perioperative optimization strategies'
    }
  ];

  const managedConditions = [
    {
      condition: 'Type 2 Diabetes Mellitus',
      details: 'HbA1c optimization, intensive lifestyle modification, oral hypoglycemic agents and insulin therapy'
    },
    {
      condition: 'Essential Hypertension',
      details: 'Blood pressure control with ACE-I/ARB, calcium channel blockers, thiazide diuretics, and lifestyle intervention'
    },
    {
      condition: 'Dyslipidemia',
      details: 'Lipid management with statins and other agents targeting LDL-C, HDL-C, and triglycerides'
    },
    {
      condition: 'Obesity',
      details: 'Weight management with dietary counseling, exercise prescription, and pharmacotherapy when indicated'
    },
    {
      condition: 'Thyroid Disorders',
      details: 'Management of hypothyroidism and hyperthyroidism with hormone replacement and antithyroid therapy'
    },
    {
      condition: 'Chronic Respiratory Diseases',
      details: 'COPD and asthma management with bronchodilators, corticosteroids, and pulmonary rehabilitation'
    },
    {
      condition: 'Gastroesophageal Reflux Disease (GERD)',
      details: 'Acid suppression therapy with PPI/H2RA and lifestyle modifications'
    },
    {
      condition: 'Osteoarthritis & Musculoskeletal Pain',
      details: 'NSAIDs, acetaminophen, and physical therapy with consideration of injective treatments'
    },
    {
      condition: 'Anemia',
      details: 'Evaluation of etiology and management with iron supplementation or specific therapies'
    },
    {
      condition: 'Urinary Tract Infections & UTI Prophylaxis',
      details: 'Acute infection treatment and recurrent UTI management strategies'
    },
    {
      condition: 'Upper & Lower Respiratory Tract Infections',
      details: 'Appropriate antibiotic stewardship with viral vs bacterial differentiation'
    },
    {
      condition: 'Hypertensive Urgency/Emergency',
      details: 'Acute blood pressure reduction with appropriate agent selection and monitoring'
    }
  ];

  const preventivePrograms = [
    {
      category: 'Screening & Early Detection',
      items: [
        'Cardiovascular risk assessment using Framingham and ASCVD calculators',
        'Diabetes screening with fasting glucose and HbA1c',
        'Cancer screening (breast, colorectal, cervical, prostate per age-appropriate guidelines)',
        'Lipid panel and metabolic syndrome evaluation',
        'Thyroid function screening in high-risk populations'
      ]
    },
    {
      category: 'Vaccinations & Immunization',
      items: [
        'Influenza vaccine (annual)',
        'Pneumococcal vaccination (PPSV23 and PCV13)',
        'Tetanus/Diphtheria/Pertussis boosters',
        'Shingles vaccine (Zoster)',
        'Hepatitis B vaccination for high-risk groups'
      ]
    },
    {
      category: 'Lifestyle Modification',
      items: [
        'Dietary counseling (Mediterranean, DASH, and low-sodium diets)',
        'Exercise prescription with intensity and frequency recommendations',
        'Smoking cessation programs and pharmacotherapy',
        'Alcohol use disorder screening and intervention',
        'Mental health assessment and stress management'
      ]
    },
    {
      category: 'Geriatric Care',
      items: [
        'Fall risk assessment and prevention strategies',
        'Medication appropriateness review (Beers Criteria)',
        'Cognitive and functional status evaluation',
        'Polypharmacy optimization',
        'Advanced directive and care planning discussion'
      ]
    }
  ];

  const diagnosticCapabilities = [
    'Complete Blood Count (CBC) interpretation',
    'Comprehensive Metabolic Panel (CMP) analysis',
    'Lipid Profile assessment',
    'Thyroid Function Tests (TSH, Free T4)',
    'Urinalysis and urine culture',
    'Chest X-ray interpretation',
    'ECG analysis and interpretation',
    'Blood glucose and HbA1c monitoring',
    'Liver and renal function assessment',
    'Coagulation studies'
  ];

  const teamMembers = [
    {
      name: 'Dr. Sukhransh Mazumdar',
      qualification: 'MD (Internal Medicine), MRCP',
      specialization: 'General Medicine & Internal Medicine',
      experience: '12+ Years',
      expertise: [
        'Chronic Disease Management',
        'Acute Illness Management',
        'Preventive Medicine',
        'Polypharmacy Optimization',
        'Geriatric Medicine'
      ],
      availability: 'Mon & Sat 5:00 PM'
    }
  ];

  return (
    <Layout>
    <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      {/* ============ HERO SECTION ============ */}
      <section className={`relative min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/30'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-blue-500/20' : 'bg-blue-300/20'}`}></div>
          <div className={`absolute -bottom-40 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-300/20'}`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 transition-all duration-300 ${isDark ? 'bg-emerald-500/15 border-emerald-500/30' : 'bg-emerald-100/70 border-emerald-300/60'}`}>
                <Stethoscope className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>GENERAL MEDICINE DEPARTMENT</span>
              </div>

              <h1 className={`text-6xl lg:text-7xl font-black mb-6 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Comprehensive
                <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Primary Care
                </span>
              </h1>

              <p className={`text-xl transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Evidence-based comprehensive medical care emphasizing preventive medicine, chronic disease management, and continuity of care for patients across all age groups.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">12+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Clinical Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">3000+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Patients Managed</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">MRCP</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Board Certified</p>
                </div>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80 rounded-3xl flex items-center justify-center text-9xl bg-gradient-to-br from-emerald-600 to-cyan-600 shadow-2xl shadow-emerald-600/30">
                <Stethoscope className="w-48 h-48 text-white" />
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
                icon: Heart,
                title: 'Holistic Care Approach',
                desc: 'Integrated management addressing physical, mental, and social aspects of patient health'
              },
              {
                icon: TrendingUp,
                title: 'Evidence-Based Practice',
                desc: 'Current clinical guidelines and best practices in internal medicine and preventive care'
              },
              {
                icon: Users,
                title: 'Continuity of Care',
                desc: 'Long-term patient relationships with coordinated interdisciplinary team management'
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

      {/* ============ CLINICAL SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Clinical Services
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive range of services addressing acute and chronic medical conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {clinicalServices.map((service, idx) => (
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

      {/* ============ CONDITIONS MANAGED ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Chronic Conditions Management
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Expert management of common chronic diseases with disease-modifying therapies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {managedConditions.map((item, idx) => (
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

      {/* ============ PREVENTIVE PROGRAMS ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Preventive Medicine Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {preventivePrograms.map((program, idx) => (
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
                      <span className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
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

      {/* ============ DIAGNOSTIC CAPABILITIES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Diagnostic Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {diagnosticCapabilities.map((capability, idx) => (
              <div
                key={idx}
                className={`rounded-xl border p-4 text-center transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-white border-gray-200 hover:border-emerald-400 shadow-sm'
                }`}
              >
                <Activity className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {capability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TEAM SECTION ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
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
            Your Trusted Primary Healthcare Partner
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Our internal medicine team provides comprehensive, continuous, and compassionate primary care for your entire family across all life stages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
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
