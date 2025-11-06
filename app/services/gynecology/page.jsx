"use client";
import { Heart, Award, Clock, Users, Phone, Mail, MapPin, ArrowRight, Check, Zap, Activity, Calendar, FileText, TrendingUp, Smile } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout'
export default function Gynecology() {
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

  const obstetricServices = [
    {
      name: 'Antenatal Care & Counseling',
      description: 'Comprehensive prenatal assessment including risk stratification, maternal health screening, and fetal monitoring'
    },
    {
      name: 'High-Risk Pregnancy Management',
      description: 'Specialized care for gestational diabetes, preeclampsia, IUGR, and other obstetric complications'
    },
    {
      name: 'Labor & Delivery Services',
      description: 'Intrapartum monitoring with cardiotocography, assisted delivery, and emergency obstetric care'
    },
    {
      name: 'Cesarean Section (C-Section)',
      description: 'Primary and repeat cesarean delivery with modern surgical techniques and perioperative care'
    },
    {
      name: 'Postnatal Care & Recovery',
      description: 'Immediate postpartum assessment, lactation support, and maternal health monitoring'
    },
    {
      name: 'Fetal Monitoring & Ultrasound',
      description: 'Obstetric ultrasound including 2D, 3D, and Doppler imaging for fetal assessment'
    }
  ];

  const gynecologicServices = [
    {
      name: 'Routine Gynecological Examination',
      description: 'Annual checkups with pap smear screening and cervical cancer detection'
    },
    {
      name: 'Menstrual Disorder Management',
      description: 'Evaluation and treatment of dysmenorrhea, menorrhagia, and oligomenorrhea'
    },
    {
      name: 'Contraceptive Counseling & Services',
      description: 'Family planning services including oral contraceptives, IUD, and barrier methods'
    },
    {
      name: 'Infertility Evaluation',
      description: 'Diagnostic workup including ovulation assessment and HSG for infertility evaluation'
    },
    {
      name: 'Menopausal Symptom Management',
      description: 'Hormone replacement therapy and non-hormonal management of vasomotor symptoms'
    },
    {
      name: 'Gynecological Ultrasound',
      description: 'Transvaginal ultrasound for diagnosis of fibroids, cysts, and pelvic pathology'
    }
  ];

  const surgicalServices = [
    {
      name: 'Dilation & Curettage (D&C)',
      description: 'Diagnostic and therapeutic curettage for dysfunctional uterine bleeding and miscarriage management'
    },
    {
      name: 'Hysteroscopy',
      description: 'Minimally invasive visualization and management of intrauterine pathology'
    },
    {
      name: 'Dilatation & Evacuation (D&E)',
      description: 'Second-trimester pregnancy termination with appropriate counseling and support'
    },
    {
      name: 'Laparoscopy',
      description: 'Minimally invasive surgery for endometriosis, ovarian cysts, and ectopic pregnancy'
    },
    {
      name: 'Myomectomy',
      description: 'Surgical removal of uterine fibroids while preserving uterine function'
    }
  ];

  const managedConditions = [
    {
      condition: 'Gestational Diabetes Mellitus (GDM)',
      details: 'Glucose tolerance testing, dietary management, and insulin therapy when indicated during pregnancy'
    },
    {
      condition: 'Preeclampsia/Eclampsia',
      details: 'Maternal and fetal assessment, antihypertensive therapy, and timely delivery planning'
    },
    {
      condition: 'Intrauterine Growth Restriction (IUGR)',
      details: 'Fetal monitoring with Doppler studies and delivery timing optimization'
    },
    {
      condition: 'Recurrent Pregnancy Loss',
      details: 'Evaluation for chromosomal, anatomic, and thrombophilic causes with appropriate intervention'
    },
    {
      condition: 'Polycystic Ovary Syndrome (PCOS)',
      details: 'Metabolic assessment and management with lifestyle modification and pharmacotherapy'
    },
    {
      condition: 'Endometriosis',
      details: 'Medical management with NSAIDs, GnRH agonists, and surgical intervention when necessary'
    },
    {
      condition: 'Uterine Fibroids (Leiomyoma)',
      details: 'Conservative management with symptom relief or surgical myomectomy/hysterectomy'
    },
    {
      condition: 'Abnormal Uterine Bleeding (AUB)',
      details: 'Diagnostic evaluation and management with medical therapy or hysteroscopic procedures'
    },
    {
      condition: 'Infertility',
      details: 'Comprehensive diagnostic evaluation and referral for assisted reproductive technology (ART)'
    },
    {
      condition: 'Cervical Intraepithelial Neoplasia (CIN)',
      details: 'Colposcopy, biopsy, and management based on histologic findings'
    },
    {
      condition: 'Vaginal Infections',
      details: 'Diagnosis and treatment of bacterial vaginosis, candidiasis, and trichomoniasis'
    },
    {
      condition: 'Ovarian Cysts',
      details: 'Imaging follow-up and surgical management of complex cysts'
    }
  ];

  const preventivePrograms = [
    {
      category: 'Cervical Cancer Screening',
      items: [
        'Pap smear/liquid-based cytology per guidelines',
        'HPV testing for cervical cancer risk assessment',
        'Colposcopy for abnormal cytology',
        'Management of precancerous lesions',
        'HPV vaccination counseling'
      ]
    },
    {
      category: 'Reproductive Health Education',
      items: [
        'Menstrual cycle education and tracking',
        'Contraceptive options counseling',
        'Sexual health and STI prevention',
        'Fertility awareness methods',
        'Breast health awareness'
      ]
    },
    {
      category: 'Maternal Health Programs',
      items: [
        'Preconception counseling and optimization',
        'Nutritional assessment and supplementation',
        'Prenatal education and birth preparation',
        'Risk factor assessment and intervention',
        'Postpartum depression screening'
      ]
    },
    {
      category: 'Wellness & Preventive Care',
      items: [
        'Annual gynecological examination',
        'Bone density assessment in menopausal women',
        'Cardiovascular risk screening',
        'Mental health assessment',
        'Age-appropriate cancer screening'
      ]
    }
  ];

  const diagnosticCapabilities = [
    {
      modality: 'Transvaginal Ultrasound',
      description: 'High-resolution imaging of uterus, ovaries, and pelvic structures'
    },
    {
      modality: 'Obstetric Ultrasound',
      description: 'First, second, and third-trimester imaging with fetal biometry and anatomy screening'
    },
    {
      modality: 'Doppler Imaging',
      description: 'Assessment of placental circulation and fetal hemodynamics'
    },
    {
      modality: 'Pap Smear/Liquid Cytology',
      description: 'Cervical cancer screening with reflex HPV testing'
    },
    {
      modality: 'Colposcopy',
      description: 'Magnified visualization of cervix with tissue sampling capability'
    }
  ];

  const maternalHealthPlan = [
    {
      trimester: 'First Trimester',
      keyPoints: 'Dating ultrasound, booking visit, screening for complications, down syndrome screening (11-14 weeks)'
    },
    {
      trimester: 'Second Trimester',
      keyPoints: 'Anatomy scan, glucose tolerance test (24-28 weeks), anemia screening, management of complications'
    },
    {
      trimester: 'Third Trimester',
      keyPoints: 'Fetal growth assessment, position monitoring, readiness for delivery, group B streptococcus screening'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Ashik Rekha Choudhury',
      qualification: 'DGO (Diploma in Obstetrics & Gynecology), MBBS',
      specialization: 'Obstetrics & Gynecology',
      experience: '13+ Years',
      expertise: [
        'Antenatal Care & High-Risk Pregnancy',
        'Labor & Delivery Management',
        'Cesarean Section Surgery',
        'Gynecological Ultrasound',
        'Family Planning Services'
      ],
      availability: 'Sun 12:00 PM'
    }
  ];

  return (
    <Layout>
    <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      {/* ============ HERO SECTION ============ */}
      <section className={`relative min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-white via-purple-50/40 to-pink-50/30'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-purple-500/20' : 'bg-purple-300/20'}`}></div>
          <div className={`absolute -bottom-40 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-pink-500/20' : 'bg-pink-300/20'}`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 transition-all duration-300 ${isDark ? 'bg-emerald-500/15 border-emerald-500/30' : 'bg-emerald-100/70 border-emerald-300/60'}`}>
                <Heart className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>GYNECOLOGY DEPARTMENT</span>
              </div>

              <h1 className={`text-6xl lg:text-7xl font-black mb-6 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Women's Health &
                <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Maternal Care
                </span>
              </h1>

              <p className={`text-xl transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Comprehensive obstetric and gynecologic care with emphasis on maternal and fetal health, preventive medicine, and family planning services.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">13+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Clinical Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">1800+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Deliveries Managed</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">DGO</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Certified</p>
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
                <Heart className="w-48 h-48 text-white animate-pulse" />
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
                title: 'Maternal Care Focus',
                desc: 'Evidence-based prenatal, intrapartum, and postpartum management for optimal maternal and fetal outcomes'
              },
              {
                icon: TrendingUp,
                title: 'Preventive Gynecology',
                desc: 'Screening programs for cervical cancer, family planning, and reproductive health advocacy'
              },
              {
                icon: Users,
                title: 'Patient-Centered Approach',
                desc: 'Individualized care plans with emphasis on informed choice and shared decision-making'
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

      {/* ============ OBSTETRIC SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Obstetric Services
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive prenatal, intrapartum, and postpartum care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {obstetricServices.map((service, idx) => (
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

      {/* ============ GYNECOLOGIC SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Gynecologic Services
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Routine and specialized gynecological care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gynecologicServices.map((service, idx) => (
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

      {/* ============ SURGICAL SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Surgical Services
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Minimally invasive and open surgical procedures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {surgicalServices.map((service, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 transition-all duration-300 text-center ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60 shadow-sm'
                }`}
              >
                <Zap className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
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

      {/* ============ CONDITIONS MANAGED ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Conditions Managed
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive management of obstetric and gynecologic conditions
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

      {/* ============ MATERNAL HEALTH PLAN ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Pregnancy Care Timeline
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {maternalHealthPlan.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-8 transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/15'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {plan.trimester}
                </h3>
                <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  {plan.keyPoints}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PREVENTIVE PROGRAMS ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Preventive Health Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {preventivePrograms.map((program, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-8 transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/15'
                    : 'bg-white border-gray-200 shadow-sm'
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
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Diagnostic Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {diagnosticCapabilities.map((capability, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 transition-all duration-300 text-center ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60 shadow-sm'
                }`}
              >
                <Activity className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <h3 className={`font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {capability.modality}
                </h3>
                <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  {capability.description}
                </p>
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
                      👩‍⚕️
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
            Your Women's Health Partner
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Dedicated to providing comprehensive obstetric and gynecologic care with compassion, expertise, and a focus on your well-being at every stage of life.
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
