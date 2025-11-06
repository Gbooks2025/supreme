"use client";
import { Radio, Award, Clock, Users, Phone, Mail, MapPin, ArrowRight, Check, Zap, Activity, Calendar, FileText, TrendingUp, Waves } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout'
export default function Ultrasound() {
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

  const abdominalServices = [
    {
      name: 'Abdominal Ultrasound',
      description: 'Comprehensive evaluation of liver, pancreas, spleen, and kidneys for fatty infiltration, cirrhosis, and mass lesions'
    },
    {
      name: 'Hepatic Assessment',
      description: 'Hepatic echotexture evaluation, assessment of portal hypertension, and hepatic vein doppler study'
    },
    {
      name: 'Biliary System',
      description: 'Gallbladder and bile duct imaging for cholelithiasis, cholecystitis, and biliary obstruction'
    },
    {
      name: 'Pancreatic Imaging',
      description: 'Pancreatic assessment for chronic pancreatitis, pseudocysts, and malignancy screening'
    },
    {
      name: 'Renal Assessment',
      description: 'Bilateral renal imaging for calculi, hydronephrosis, and parenchymal disease'
    },
    {
      name: 'Splenic Imaging',
      description: 'Splenic size and echotexture evaluation with assessment for infarction and trauma'
    }
  ];

  const obstetricalServices = [
    {
      name: 'First Trimester Ultrasound',
      description: 'Dating ultrasound (8-14 weeks) with nuchal translucency measurement and genetic risk stratification'
    },
    {
      name: 'Anatomy Scan (2nd Trimester)',
      description: '18-24 weeks comprehensive fetal anatomy assessment for congenital anomalies'
    },
    {
      name: 'Third Trimester Imaging',
      description: 'Fetal growth assessment, biophysical profile, amniotic fluid volume, and placental localization'
    },
    {
      name: 'Doppler Studies',
      description: 'Umbilical artery, middle cerebral artery, and ductus venosus doppler for fetal well-being assessment'
    },
    {
      name: 'Fetal Biometry',
      description: 'Precise measurement of biparietal diameter, femur length, abdominal circumference for gestational age'
    },
    {
      name: '3D/4D Ultrasound',
      description: 'Three-dimensional fetal imaging with volumetric reconstruction for detailed anatomic visualization'
    }
  ];

  const gynecologicalServices = [
    {
      name: 'Transvaginal Ultrasound',
      description: 'High-resolution endovaginal imaging for detailed assessment of uterus, ovaries, and adnexa'
    },
    {
      name: 'Uterine Assessment',
      description: 'Evaluation of myometrial fibroids, adenomyosis, endometrial polyps, and hyperplasia'
    },
    {
      name: 'Ovarian Imaging',
      description: 'Ovarian volume measurement, follicular assessment, and characterization of cystic lesions'
    },
    {
      name: 'Pelvic Mass Evaluation',
      description: 'Characterization and risk stratification of adnexal masses using IOTA criteria'
    },
    {
      name: 'Infertility Assessment',
      description: 'Evaluation of ovulation, endometrial thickness, and assessment of tubal patency'
    },
    {
      name: 'First Trimester Bleeding',
      description: 'Evaluation of threatened or completed miscarriage with fetal cardiac assessment'
    }
  ];

  const cardiovascularServices = [
    {
      name: 'Echocardiography (2D Echo)',
      description: 'Real-time visualization of cardiac structures including chamber dimensions and wall thickness'
    },
    {
      name: 'Doppler Echocardiography',
      description: 'Color flow and spectral doppler assessment of valvular function and regurgitation'
    },
    {
      name: 'Tissue Doppler Imaging',
      description: 'Assessment of myocardial function and diastolic dysfunction'
    },
    {
      name: 'Ejection Fraction Assessment',
      description: 'Quantitative measurement of left ventricular systolic function'
    },
    {
      name: 'Stress Echo',
      description: 'Functional cardiac assessment during dobutamine stress for ischemia detection'
    },
    {
      name: 'Carotid Doppler',
      description: 'Assessment of carotid artery stenosis and plaque characterization'
    }
  ];

  const musculoskeletalServices = [
    {
      name: 'Shoulder Assessment',
      description: 'Rotator cuff imaging for tears, tendinopathy, and subacromial pathology'
    },
    {
      name: 'Elbow & Wrist Imaging',
      description: 'Assessment of tendinitis, tenosynovitis, and ligamentous injuries'
    },
    {
      name: 'Hip & Knee Joints',
      description: 'Evaluation of meniscal tears, ligamentous injuries, and effusion'
    },
    {
      name: 'Ankle Assessment',
      description: 'Assessment of anterior talofibular ligament injuries and ankle instability'
    },
    {
      name: 'Nerve Compression',
      description: 'Visualization of nerves and assessment of compression neuropathies'
    },
    {
      name: 'Guided Injections',
      description: 'Ultrasound-guided therapeutic injections with real-time needle visualization'
    }
  ];

  const thyroidServices = [
    {
      name: 'Thyroid B-Mode Imaging',
      description: 'High-resolution assessment of thyroid gland size, echotexture, and nodule characterization'
    },
    {
      name: 'Nodule Classification',
      description: 'TI-RADS classification for risk stratification of thyroid nodules'
    },
    {
      name: 'Thyroid Doppler',
      description: 'Vascular assessment of thyroid vascularity in Graves disease and thyroiditis'
    },
    {
      name: 'Parathyroid Imaging',
      description: 'Localization of parathyroid adenomas and assessment of parathyroid hyperplasia'
    },
    {
      name: 'FNA Guidance',
      description: 'Ultrasound-guided fine needle aspiration biopsy of thyroid lesions'
    }
  ];

  const techologicalCapabilities = [
    {
      technology: 'Advanced 2D Imaging',
      description: 'High-frequency transducers with harmonic imaging for superior resolution'
    },
    {
      technology: '3D/4D Volumetric Imaging',
      description: 'Three-dimensional reconstruction with real-time volume rendering'
    },
    {
      technology: 'Color & Power Doppler',
      description: 'Advanced flow visualization for vascular assessment'
    },
    {
      technology: 'Tissue Harmonic Imaging',
      description: 'Enhanced signal-to-noise ratio for improved image quality'
    },
    {
      technology: 'Elastography',
      description: 'Tissue stiffness assessment for fibrosis evaluation'
    },
    {
      technology: 'Image Fusion & Navigation',
      description: 'Real-time guidance with anatomic overlay for interventional procedures'
    }
  ];

  const clinicalApplications = [
    {
      category: 'Diagnostic Accuracy',
      points: [
        'Real-time dynamic imaging without ionizing radiation',
        'Non-invasive assessment of internal organs',
        'Excellent soft tissue resolution and characterization',
        'Cost-effective imaging modality'
      ]
    },
    {
      category: 'Interventional Guidance',
      points: [
        'Real-time needle visualization for biopsies',
        'Accurate guidance for therapeutic injections',
        'Assessment of treatment response',
        'Reduced procedural complications'
      ]
    },
    {
      category: 'Follow-up Monitoring',
      points: [
        'Serial imaging without radiation exposure',
        'Long-term disease monitoring capability',
        'Assessment of treatment efficacy',
        'Patient-friendly imaging experience'
      ]
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Gaurav Agrawal',
      qualification: 'MD (Radiology), DNB',
      specialization: 'Ultrasound & Diagnostic Imaging',
      experience: '12+ Years',
      expertise: [
        'Obstetric & Gynecological Ultrasound',
        'Abdominal & Pelvic Imaging',
        'Cardiovascular Echocardiography',
        'Musculoskeletal Ultrasound',
        'Ultrasound-Guided Procedures'
      ],
      availability: 'Sat 2:00 PM'
    }
  ];

  return (
    <Layout>
    <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      {/* ============ HERO SECTION ============ */}
      <section className={`relative min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-white via-indigo-50/40 to-blue-50/30'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-indigo-500/20' : 'bg-indigo-300/20'}`}></div>
          <div className={`absolute -bottom-40 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-blue-500/20' : 'bg-blue-300/20'}`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 transition-all duration-300 ${isDark ? 'bg-emerald-500/15 border-emerald-500/30' : 'bg-emerald-100/70 border-emerald-300/60'}`}>
                <Waves className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>ULTRASOUND DEPARTMENT</span>
              </div>

              <h1 className={`text-6xl lg:text-7xl font-black mb-6 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Modern Imaging
                <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>

              <p className={`text-xl transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Advanced ultrasound imaging services utilizing state-of-the-art technology for comprehensive diagnostic assessment without radiation exposure.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">12+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">50K+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Studies Performed</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">DNB</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Certified</p>
                </div>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Calendar className="w-5 h-5" />
                Book Scan
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80 rounded-3xl flex items-center justify-center text-9xl bg-gradient-to-br from-emerald-600 to-cyan-600 shadow-2xl shadow-emerald-600/30">
                <Radio className="w-48 h-48 text-white" />
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
                title: 'No Radiation Exposure',
                desc: 'Safe, non-invasive imaging using sound waves for repeated examinations'
              },
              {
                icon: TrendingUp,
                title: 'Real-Time Imaging',
                desc: 'Dynamic visualization of organ movement and blood flow in real-time'
              },
              {
                icon: Users,
                title: 'Expert Radiologists',
                desc: 'Experienced sonographers and radiologists for accurate diagnosis'
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

      {/* ============ ABDOMINAL SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Abdominal Imaging
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive assessment of abdominal organs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {abdominalServices.map((service, idx) => (
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

      {/* ============ OBSTETRICAL SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Obstetrical Ultrasound
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Complete pregnancy monitoring and fetal assessment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {obstetricalServices.map((service, idx) => (
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
                    <Activity className="w-6 h-6 text-white" />
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

      {/* ============ GYNECOLOGICAL SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Gynecological Imaging
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Detailed assessment of female reproductive organs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gynecologicalServices.map((service, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60 shadow-sm'
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-600 to-cyan-600 flex-shrink-0 mt-1">
                    <Radio className="w-6 h-6 text-white" />
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

      {/* ============ CARDIOVASCULAR SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Cardiovascular Imaging
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Complete echocardiographic and vascular assessment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardiovascularServices.map((service, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-white border-gray-200 hover:border-emerald-400 shadow-sm'
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-600 to-cyan-600 flex-shrink-0 mt-1">
                    <Waves className="w-6 h-6 text-white" />
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

      {/* ============ MUSCULOSKELETAL SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Musculoskeletal Imaging
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Joint and soft tissue assessment with interventional capability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {musculoskeletalServices.map((service, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60 shadow-sm'
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-600 to-cyan-600 flex-shrink-0 mt-1">
                    <Award className="w-6 h-6 text-white" />
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

      {/* ============ THYROID SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Thyroid & Head/Neck Imaging
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Detailed endocrine gland assessment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {thyroidServices.map((service, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-4 transition-all duration-300 text-center ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-white border-gray-200 hover:border-emerald-400 shadow-sm'
                }`}
              >
                <Activity className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h3 className={`font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {service.name}
                </h3>
                <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TECHNOLOGY ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Advanced Technology
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techologicalCapabilities.map((tech, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-8 transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/15'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60'
                }`}
              >
                <h3 className={`text-lg font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {tech.technology}
                </h3>
                <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLINICAL APPLICATIONS ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Why Choose Ultrasound Imaging
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {clinicalApplications.map((app, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-8 transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                }`}
              >
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {app.category}
                </h3>

                <ul className="space-y-2">
                  {app.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-1.5"></div>
                      <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                        {point}
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
                      Schedule Scan
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
            Advanced Imaging Without Radiation
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Our state-of-the-art ultrasound services provide accurate, safe, and patient-friendly diagnostic imaging for comprehensive health assessment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <Calendar className="w-5 h-5" />
              Book Scan
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
