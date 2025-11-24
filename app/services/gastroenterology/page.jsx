"use client";
import { Heart, Award, Clock, Users, Phone, Mail, MapPin, ArrowRight, Check, Activity, Stethoscope, Calendar, FileText, TrendingUp, Zap, CircleDot } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout'

export default function Gastroenterology() {
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
      name: 'Upper GI Endoscopy (Esophagogastroduodenoscopy)',
      description: 'Flexible endoscopic examination of esophagus, stomach, and duodenum for diagnosis of GERD, ulcers, gastritis, and upper GI bleeding with biopsy capability'
    },
    {
      name: 'Colonoscopy',
      description: 'Complete colon examination for colorectal cancer screening, polyp detection and removal, inflammatory bowel disease diagnosis, and lower GI bleeding evaluation'
    },
    {
      name: 'Endoscopic Ultrasound (EUS)',
      description: 'Advanced imaging combining endoscopy with ultrasound for detailed visualization of pancreatic masses, bile duct stones, and submucosal lesions'
    },
    {
      name: 'Endoscopic Retrograde Cholangiopancreatography (ERCP)',
      description: 'Specialized procedure for diagnosis and treatment of bile duct stones, biliary strictures, and pancreatic duct disorders with stent placement'
    },
    {
      name: '24-Hour pH Monitoring',
      description: 'Ambulatory acid reflux testing for quantification of esophageal acid exposure and correlation of symptoms with reflux episodes in GERD evaluation'
    },
    {
      name: 'Esophageal Manometry',
      description: 'Motility testing for diagnosis of achalasia, esophageal spasm, and swallowing disorders with high-resolution pressure measurements'
    },
    {
      name: 'Liver Biopsy and Fibroscan',
      description: 'Percutaneous or transjugular liver tissue sampling for diagnosis of cirrhosis, hepatitis, and fatty liver disease with non-invasive elastography assessment'
    },
    {
      name: 'Therapeutic Endoscopy',
      description: 'Advanced interventional procedures including polypectomy, variceal banding, hemostasis, stricture dilation, and endoscopic mucosal resection'
    }
  ];

  const clinicalConditions = [
    {
      condition: 'Gastroesophageal Reflux Disease (GERD)',
      details: 'Comprehensive management of chronic acid reflux with proton pump inhibitors, lifestyle modifications, pH monitoring, and anti-reflux surgery when indicated'
    },
    {
      condition: 'Peptic Ulcer Disease',
      details: 'Treatment of gastric and duodenal ulcers with acid suppression therapy, H. pylori eradication, and endoscopic management of complications including bleeding'
    },
    {
      condition: 'Inflammatory Bowel Disease (IBD)',
      details: 'Specialized care for Crohn\'s disease and ulcerative colitis with immunosuppressive therapy, biologics, endoscopic surveillance, and surgical consultation'
    },
    {
      condition: 'Irritable Bowel Syndrome (IBS)',
      details: 'Symptom-based management of abdominal pain, bloating, and altered bowel habits with dietary modification, medications, and psychological support'
    },
    {
      condition: 'Chronic Liver Disease and Cirrhosis',
      details: 'Management of hepatitis, fatty liver disease, alcoholic liver disease, and cirrhosis complications including ascites, varices, and hepatic encephalopathy'
    },
    {
      condition: 'Pancreatitis',
      details: 'Acute and chronic pancreatitis management with supportive care, pain control, nutritional support, and ERCP for bile duct stone removal'
    },
    {
      condition: 'Colorectal Cancer Screening',
      details: 'Evidence-based screening colonoscopy starting at age 45 with polyp removal, risk assessment, and surveillance protocols for cancer prevention'
    },
    {
      condition: 'Celiac Disease',
      details: 'Diagnosis through serology and duodenal biopsy with gluten-free diet implementation, nutritional counseling, and monitoring for complications'
    },
    {
      condition: 'Gastrointestinal Bleeding',
      details: 'Emergency and elective endoscopic evaluation and treatment of upper and lower GI bleeding with hemoclips, injection therapy, and cauterization'
    },
    {
      condition: 'Gallstones and Biliary Disorders',
      details: 'Evaluation and management of cholelithiasis, cholecystitis, and bile duct stones with ERCP, sphincterotomy, and surgical consultation'
    }
  ];

  const treatmentPrograms = [
    {
      category: 'Diagnostic Endoscopy',
      items: [
        'Upper GI endoscopy with biopsy for esophageal, gastric, and duodenal pathology',
        'Screening and surveillance colonoscopy with polypectomy',
        'Endoscopic ultrasound for pancreaticobiliary evaluation',
        'Small bowel enteroscopy for obscure GI bleeding'
      ]
    },
    {
      category: 'Therapeutic Procedures',
      items: [
        'ERCP with stone extraction and biliary stent placement',
        'Endoscopic variceal band ligation for bleeding prevention',
        'Stricture dilation and stenting for obstructive lesions',
        'Hemostasis techniques: clips, injection, cautery'
      ]
    },
    {
      category: 'Medical Management',
      items: [
        'Acid suppression therapy with PPIs and H2 blockers for GERD and ulcers',
        'Immunosuppressive and biologic therapy for inflammatory bowel disease',
        'Antiviral therapy for chronic hepatitis B and C',
        'Motility disorder management and dietary interventions'
      ]
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Gastroenterology Specialist',
      qualification: 'MBBS, MD (Medicine), DM (Gastroenterology)',
      specialization: 'Gastroenterology & Hepatology',
      experience: '17+ Years',
      expertise: [
        'Advanced Endoscopy & ERCP',
        'Inflammatory Bowel Disease',
        'Liver Disease Management',
        'GI Cancer Screening'
      ],
      availability: 'Mon-Fri: 10:00 AM - 2:00 PM'
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
                <CircleDot className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>GASTROENTEROLOGY DEPARTMENT</span>
              </div>

              <h1 className={`text-6xl lg:text-7xl font-black mb-6 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Advanced
                <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Digestive Care
                </span>
              </h1>

              <p className={`text-xl transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Comprehensive gastroenterology and hepatology services providing advanced endoscopic procedures, liver disease management, and expert care for all digestive system disorders.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">17+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">7000+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Procedures Done</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">ERCP</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Advanced Endoscopy</p>
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
                <CircleDot className="w-48 h-48 text-white animate-pulse" />
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
                title: 'Advanced Endoscopy',
                desc: 'State-of-the-art endoscopic equipment for diagnostic and therapeutic GI procedures'
              },
              {
                icon: TrendingUp,
                title: 'Comprehensive Care',
                desc: 'Complete spectrum of gastroenterology services from diagnosis to advanced interventions'
              },
              {
                icon: Users,
                title: 'Expert Specialists',
                desc: 'Board-certified gastroenterologists with advanced training in hepatology and endoscopy'
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
              Gastroenterology Services
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Advanced diagnostic and therapeutic endoscopic procedures for comprehensive digestive care
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
              Conditions We Treat
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Expert management of all gastrointestinal and liver disorders
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
            Treatment Specialties
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
            Our Gastroenterology Team
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
            Expert Digestive Care When You Need It
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Our gastroenterology specialists provide comprehensive diagnosis and treatment with advanced endoscopy, liver disease management, and expert care for all digestive disorders.
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
              Emergency Care
            </a>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
