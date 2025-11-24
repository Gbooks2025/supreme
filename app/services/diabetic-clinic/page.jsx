"use client";
import { Heart, Award, Clock, Users, Phone, Mail, MapPin, ArrowRight, Check, Activity, Stethoscope, Calendar, FileText, TrendingUp, Zap, Droplets } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout'

export default function DiabeticClinic() {
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
      name: 'HbA1c Testing (Glycated Hemoglobin)',
      description: 'Gold standard test measuring average blood glucose over 3 months for diabetes diagnosis and monitoring treatment effectiveness with target ≤7%'
    },
    {
      name: 'Fasting and Postprandial Blood Glucose',
      description: 'Comprehensive glucose monitoring including fasting (target <7 mmol/L) and 2-hour postprandial (target <10 mmol/L) measurements for tight glycemic control'
    },
    {
      name: 'Continuous Glucose Monitoring (CGM)',
      description: 'Real-time glucose tracking with sensor technology providing 24-hour glucose patterns and hypoglycemia alerts for optimal insulin adjustment'
    },
    {
      name: 'Diabetic Retinopathy Screening',
      description: 'Comprehensive fundoscopic examination and retinal photography for early detection of microvascular damage and vision-threatening retinopathy'
    },
    {
      name: 'Diabetic Nephropathy Assessment',
      description: 'Urine albumin-to-creatinine ratio, serum creatinine, and eGFR testing for early detection and monitoring of diabetes-related kidney disease'
    },
    {
      name: 'Diabetic Neuropathy Evaluation',
      description: 'Monofilament testing, vibration perception, and nerve conduction studies for peripheral neuropathy detection and foot ulcer risk assessment'
    },
    {
      name: 'Lipid Profile and Cardiovascular Risk',
      description: 'Complete cholesterol panel with LDL, HDL, triglycerides, and cardiovascular risk stratification for comprehensive diabetes management'
    },
    {
      name: 'Insulin Therapy Management',
      description: 'Personalized insulin regimen including basal-bolus therapy, insulin pump therapy, and dose titration based on blood glucose monitoring patterns'
    }
  ];

  const clinicalConditions = [
    {
      condition: 'Type 1 Diabetes Mellitus',
      details: 'Comprehensive insulin therapy management with multiple daily injections or insulin pump, carbohydrate counting education, and hypoglycemia prevention strategies'
    },
    {
      condition: 'Type 2 Diabetes Mellitus',
      details: 'Stepwise management from lifestyle modification to oral hypoglycemic agents (metformin, sulfonylureas, DPP-4 inhibitors, SGLT-2 inhibitors) and insulin therapy'
    },
    {
      condition: 'Gestational Diabetes',
      details: 'Specialized care for pregnancy-related glucose intolerance with dietary modification, blood glucose monitoring, and insulin therapy when required'
    },
    {
      condition: 'Prediabetes and Metabolic Syndrome',
      details: 'Early intervention with lifestyle modification, weight loss programs, and metformin therapy to prevent progression to diabetes mellitus'
    },
    {
      condition: 'Diabetic Retinopathy',
      details: 'Management of vision-threatening microvascular complications with tight glycemic control, laser photocoagulation, and anti-VEGF therapy coordination'
    },
    {
      condition: 'Diabetic Nephropathy',
      details: 'Kidney protective therapy with ACE inhibitors/ARBs, blood pressure control (<140/90 mmHg), and protein restriction to slow CKD progression'
    },
    {
      condition: 'Diabetic Neuropathy',
      details: 'Pain management with gabapentin/pregabalin, comprehensive foot care education, and prevention of diabetic foot ulcers and amputations'
    },
    {
      condition: 'Hypoglycemia Management',
      details: 'Prevention and treatment of low blood glucose episodes with glucose monitoring optimization, insulin dose adjustment, and patient education'
    },
    {
      condition: 'Diabetic Ketoacidosis (DKA)',
      details: 'Emergency management of severe hyperglycemia with fluid resuscitation, insulin infusion, and electrolyte correction in acute metabolic decompensation'
    },
    {
      condition: 'Cardiovascular Disease in Diabetes',
      details: 'Comprehensive cardiovascular risk reduction with antiplatelet therapy, statin therapy, blood pressure control, and lifestyle modification'
    }
  ];

  const treatmentPrograms = [
    {
      category: 'Medical Management',
      items: [
        'Oral hypoglycemic agents: Metformin, Sulfonylureas, DPP-4 inhibitors, SGLT-2 inhibitors',
        'Insulin therapy: Basal-bolus regimen, premixed insulin, insulin pump therapy',
        'GLP-1 receptor agonists for weight loss and cardiovascular protection',
        'HbA1c target individualization based on age, comorbidities, and hypoglycemia risk'
      ]
    },
    {
      category: 'Lifestyle Modification',
      items: [
        'Medical nutrition therapy with personalized diabetic diet plans and carbohydrate counting',
        'Structured exercise programs: 150 minutes moderate-intensity aerobic activity weekly',
        'Weight management and obesity treatment for improved insulin sensitivity',
        'Diabetes self-management education and behavioral counseling'
      ]
    },
    {
      category: 'Complications Prevention',
      items: [
        'Annual diabetic retinopathy screening and ophthalmology referral',
        'Regular kidney function monitoring and nephropathy prevention',
        'Comprehensive foot examination and diabetic foot care education',
        'Cardiovascular risk assessment and preventive cardiology interventions'
      ]
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Diabetology Specialist',
      qualification: 'MD (Medicine), DM (Endocrinology)',
      specialization: 'Diabetology & Endocrinology',
      experience: '20+ Years',
      expertise: [
        'Advanced Diabetes Management',
        'Insulin Therapy Optimization',
        'Diabetic Complications Management',
        'Metabolic Syndrome Treatment'
      ],
      availability: 'Mon-Sat: 9:00 AM - 1:00 PM'
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
                <Droplets className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>DIABETIC CLINIC</span>
              </div>

              <h1 className={`text-6xl lg:text-7xl font-black mb-6 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Comprehensive
                <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Diabetes Care
                </span>
              </h1>

              <p className={`text-xl transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Specialized diabetes management center providing evidence-based care for Type 1 and Type 2 diabetes with advanced HbA1c monitoring, insulin therapy optimization, and comprehensive complication prevention programs.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">20+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">5000+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Patients Managed</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">≤7%</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>HbA1c Target</p>
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
                <Droplets className="w-48 h-48 text-white animate-pulse" />
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
                title: 'Advanced Monitoring',
                desc: 'HbA1c testing and continuous glucose monitoring for optimal glycemic control'
              },
              {
                icon: TrendingUp,
                title: 'Personalized Treatment',
                desc: 'Individualized insulin therapy and medication management based on patient needs'
              },
              {
                icon: Users,
                title: 'Multidisciplinary Team',
                desc: 'Collaborative care with diabetologists, dietitians, and diabetes educators'
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
              Diabetes Services & Testing
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive diagnostic services for diabetes management and complication screening
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

      {/* ============ CLINICAL CONDITIONS ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Conditions We Manage
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Expert management of all types of diabetes and related complications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {clinicalConditions.map((item, idx) => (
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

      {/* ============ TREATMENT PROGRAMS ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Treatment Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {treatmentPrograms.map((program, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-8 transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/15'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {program.category}
                </h3>

                <ul className="space-y-3">
                  {program.items.map((item, i) => (
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
            Our Diabetes Specialists
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
            Take Control of Your Diabetes Today
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Our specialized diabetes clinic provides comprehensive care with advanced HbA1c monitoring, personalized insulin therapy, and expert complication management for optimal health outcomes.
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
              Call for Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
