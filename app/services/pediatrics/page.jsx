"use client";
import { Users, Award, Clock, Heart, Phone, Mail, MapPin, ArrowRight, Check, Zap, Activity, Calendar, FileText, TrendingUp, Smile } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout'

export default function Pediatrics() {
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
      name: 'Newborn Screening & Assessment',
      description: 'Comprehensive newborn physical examination, Apgar scoring, and metabolic screening for congenital disorders'
    },
    {
      name: 'Well-Child Checkups',
      description: 'Age-appropriate developmental surveillance, physical examination, and growth monitoring at key milestones'
    },
    {
      name: 'Immunization Programs',
      description: 'Complete vaccination schedules per WHO/IAP guidelines with vaccine counseling and adverse event monitoring'
    },
    {
      name: 'Acute Illness Management',
      description: 'Evaluation and treatment of common pediatric conditions including infections, respiratory illnesses, and gastroenteritis'
    },
    {
      name: 'Chronic Disease Management',
      description: 'Long-term optimization of chronic conditions including asthma, diabetes, and recurrent infections'
    },
    {
      name: 'Nutritional Assessment',
      description: 'Feeding counseling, micronutrient supplementation, and management of failure to thrive'
    },
    {
      name: 'Developmental Screening',
      description: 'Standardized assessment tools for cognitive, motor, and behavioral development'
    },
    {
      name: 'Allergy & Immunology',
      description: 'Evaluation and management of allergic conditions, food allergies, and asthma'
    }
  ];

  const preventiveServices = [
    {
      name: 'Breastfeeding Support & Counseling',
      description: 'Lactation support, feeding difficulties management, and weaning guidance'
    },
    {
      name: 'Parental Education Programs',
      description: 'Guidance on child development, behavior, safety, and age-appropriate activities'
    },
    {
      name: 'Growth & Development Monitoring',
      description: 'Serial height, weight, head circumference measurements with WHO growth chart interpretation'
    },
    {
      name: 'Behavioral & Developmental Counseling',
      description: 'Management of sleep disorders, behavioral issues, and developmental delays'
    },
    {
      name: 'School Health Services',
      description: 'Pre-school examinations, learning disability assessment, and health screening'
    },
    {
      name: 'Adolescent Health Services',
      description: 'Reproductive health counseling, mental health screening, and lifestyle guidance'
    }
  ];

  const treatedConditions = [
    {
      condition: 'Acute Respiratory Infections',
      details: 'Management of upper respiratory tract infections, bronchitis, and pneumonia with appropriate antibiotic stewardship'
    },
    {
      condition: 'Gastroenteritis & Diarrhea',
      details: 'Fluid and electrolyte management, nutritional rehabilitation, and evaluation of chronic diarrhea'
    },
    {
      condition: 'Fever of Unknown Origin',
      details: 'Systematic evaluation and management of prolonged fever with appropriate investigations'
    },
    {
      condition: 'Asthma & Reactive Airway Disease',
      details: 'Classification, pharmacotherapy, and asthma action plan development'
    },
    {
      condition: 'Type 1 Diabetes Mellitus',
      details: 'Initial management, insulin therapy optimization, and metabolic control with HbA1c monitoring'
    },
    {
      condition: 'Obesity & Weight Management',
      details: 'Dietary counseling, activity promotion, and metabolic comorbidity screening'
    },
    {
      condition: 'Recurrent Infections',
      details: 'Evaluation for immunodeficiency and optimization of infection prevention strategies'
    },
    {
      condition: 'Congenital Heart Disease',
      details: 'Cardiac evaluation with coordination with cardiology for management and surgical planning'
    },
    {
      condition: 'Developmental Delay',
      details: 'Early identification and referral for developmental intervention services'
    },
    {
      condition: 'Food Allergies & Atopic Diseases',
      details: 'Allergy testing, elimination diets, and emergency epinephrine prescription management'
    },
    {
      condition: 'Seizure Disorders',
      details: 'Seizure classification, antiepileptic drug selection, and coordination with neurology'
    },
    {
      condition: 'Hematologic Disorders',
      details: 'Management of anemia, thrombocytopenia, and hemolytic diseases'
    }
  ];

  const immunizationSchedule = [
    {
      category: 'Birth Vaccines',
      vaccines: 'Hepatitis B (HBV), Bacille Calmette-Guérin (BCG)'
    },
    {
      category: '6 Weeks - 5 Months',
      vaccines: 'Rotavirus (RV), Pentavalent, PCV, Inactivated Polio (IPV)'
    },
    {
      category: '9-12 Months',
      vaccines: 'Japanese Encephalitis (JE), Hepatitis A'
    },
    {
      category: '12-18 Months',
      vaccines: 'MMR, Varicella, Typhoid, DPT Booster'
    },
    {
      category: '2-5 Years',
      vaccines: 'Booster doses per schedule, JE booster'
    },
    {
      category: 'Adolescents',
      vaccines: 'Td, HPV (for eligible girls), Meningococcal'
    }
  ];

  const diagnosticCapabilities = [
    'Complete Blood Count (CBC) interpretation',
    'Thyroid Function Tests (TSH, Free T4)',
    'Blood glucose & HbA1c monitoring',
    'Comprehensive Metabolic Panel (CMP)',
    'Allergy testing & skin prick tests',
    'Chest X-ray interpretation',
    'Growth chart analysis & percentile calculation',
    'Developmental screening tools (Denver II, ASQ)',
    'Stool examination for parasites',
    'Urinalysis & urine culture'
  ];

  const developmentalMilestones = [
    {
      age: '0-3 Months',
      milestones: 'Fixes gaze, follows objects, social smile, lifts head'
    },
    {
      age: '3-6 Months',
      milestones: 'Rolls over, grasps objects, babbling, recognizes faces'
    },
    {
      age: '6-9 Months',
      milestones: 'Sits without support, transfers objects, says "mama/dada"'
    },
    {
      age: '9-12 Months',
      milestones: 'Crawls, stands with support, waves bye-bye, understands commands'
    },
    {
      age: '12-18 Months',
      milestones: 'Walks independently, speaks 10+ words, points to objects'
    },
    {
      age: '2-3 Years',
      milestones: 'Runs, climbs, speaks in sentences, shows independence'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Ramiz Hasnain',
      qualification: 'DCH (Diploma in Child Health), MBBS',
      specialization: 'Pediatrics & Child Health',
      experience: '10+ Years',
      expertise: [
        'Newborn Care & Management',
        'Vaccination Programs',
        'Acute Illness Management',
        'Growth & Development',
        'Chronic Disease Management'
      ],
      availability: 'Sat 1:00 PM'
    }
  ];

  return (
    <Layout>
    <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      {/* ============ HERO SECTION ============ */}
      <section className={`relative min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-white via-green-50/40 to-emerald-50/30'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-green-500/20' : 'bg-green-300/20'}`}></div>
          <div className={`absolute -bottom-40 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-300/20'}`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 transition-all duration-300 ${isDark ? 'bg-emerald-500/15 border-emerald-500/30' : 'bg-emerald-100/70 border-emerald-300/60'}`}>
                <Smile className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>PEDIATRICS DEPARTMENT</span>
              </div>

              <h1 className={`text-6xl lg:text-7xl font-black mb-6 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Child Health &
                <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Wellness
                </span>
              </h1>

              <p className={`text-xl transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Comprehensive pediatric care from newborn period through adolescence with emphasis on preventive medicine, developmental surveillance, and family-centered approach.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">10+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Clinical Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">2800+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Children Cared</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">DCH</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Certified</p>
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
                <Smile className="w-48 h-48 text-white" />
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
                title: 'Preventive Focus',
                desc: 'Emphasis on immunization, growth monitoring, and early disease detection'
              },
              {
                icon: TrendingUp,
                title: 'Developmental Surveillance',
                desc: 'Comprehensive assessment of physical, cognitive, and behavioral milestones'
              },
              {
                icon: Users,
                title: 'Family-Centered Care',
                desc: 'Holistic approach addressing family needs and psychosocial aspects'
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
              Comprehensive pediatric care from newborn through adolescence
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

      {/* ============ PREVENTIVE SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Preventive & Health Promotion Services
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Focus on wellness, development, and anticipatory guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preventiveServices.map((service, idx) => (
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
                    <Smile className="w-6 h-6 text-white" />
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
              Comprehensive management of common and complex pediatric conditions
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

      {/* ============ IMMUNIZATION SCHEDULE ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            WHO/IAP Immunization Schedule
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {immunizationSchedule.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/15'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60'
                }`}
              >
                <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.category}
                </h3>
                <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  {item.vaccines}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DEVELOPMENTAL MILESTONES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Developmental Milestones Tracking
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentalMilestones.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60 shadow-sm'
                }`}
              >
                <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.age}
                </h3>
                <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  {item.milestones}
                </p>
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
            Your Child's Health is Our Priority
          </h2>
          <p className="text-xl text-white/90 mb-12">
            We provide compassionate, comprehensive pediatric care from birth through adolescence with a focus on healthy development and wellness.
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
