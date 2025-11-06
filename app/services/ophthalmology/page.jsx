"use client";
import { Eye, Award, Clock, Users, Phone, Mail, MapPin, ArrowRight, Check, Zap, Activity, Calendar, FileText, TrendingUp, Focus } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout'
export default function Ophthalmology() {
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
      name: 'Comprehensive Eye Examination',
      description: 'Complete ocular assessment including visual acuity, refraction, anterior and posterior segment evaluation'
    },
    {
      name: 'Automated Refraction',
      description: 'Precise measurement of refractive error using modern autorefractors for accurate spectacle prescription'
    },
    {
      name: 'Tonometry',
      description: 'Intraocular pressure measurement using applanation tonometry for glaucoma screening'
    },
    {
      name: 'Optical Coherence Tomography (OCT)',
      description: 'Cross-sectional imaging of retina and optic nerve head for detailed structural analysis'
    },
    {
      name: 'Fundus Photography',
      description: 'High-resolution retinal imaging for documentation and monitoring of retinal pathology'
    },
    {
      name: 'Visual Field Testing',
      description: 'Perimetry assessment for detection of glaucomatous and neurologic field defects'
    },
    {
      name: 'Corneal Topography',
      description: 'Detailed mapping of corneal curvature for keratoconus detection and surgical planning'
    },
    {
      name: 'Ultrasound B-Scan',
      description: 'Posterior segment imaging when media opacity precludes direct visualization'
    }
  ];

  const surgicalServices = [
    {
      name: 'Phacoemulsification & Intraocular Lens Implantation',
      description: 'Modern cataract surgery with premium IOL options for optimal visual rehabilitation'
    },
    {
      name: 'Laser Vision Correction (LASIK/PRK)',
      description: 'Refractive surgery for myopia, hyperopia, and astigmatism with custom wavefront technology'
    },
    {
      name: 'Glaucoma Filtration Surgery (Trabeculectomy)',
      description: 'Surgical creation of drainage pathway for intraocular pressure reduction'
    },
    {
      name: 'Vitreo-Retinal Surgery',
      description: 'Vitrectomy for retinal detachment, diabetic complications, and vitreous hemorrhage'
    },
    {
      name: 'Corneal Transplantation',
      description: 'Penetrating and lamellar keratoplasty for corneal scarring and dystrophies'
    },
    {
      name: 'Pterygium Excision',
      description: 'Surgical removal with conjunctival autograft to minimize recurrence'
    },
    {
      name: 'Strabismus Surgery',
      description: 'Extraocular muscle surgery for correction of eye misalignment'
    }
  ];

  const treatedConditions = [
    {
      condition: 'Refractive Errors (Myopia, Hyperopia, Astigmatism)',
      details: 'Comprehensive refraction and spectacle prescription or contact lens fitting'
    },
    {
      condition: 'Cataracts',
      details: 'Age-related, traumatic, and congenital cataracts with phacoemulsification and IOL implantation'
    },
    {
      condition: 'Glaucoma',
      details: 'Open-angle and angle-closure glaucoma with medical and surgical management options'
    },
    {
      condition: 'Diabetic Retinopathy',
      details: 'Screening and management from nonproliferative to proliferative stages with laser and anti-VEGF therapy'
    },
    {
      condition: 'Age-Related Macular Degeneration (AMD)',
      details: 'Dry and wet AMD management with anti-angiogenic therapy and supportive care'
    },
    {
      condition: 'Retinal Vein Occlusion (RVO)',
      details: 'Central and branch RVO with macular edema management'
    },
    {
      condition: 'Corneal Dystrophies & Scarring',
      details: 'Management of keratoconus, corneal scarring, and dystrophies'
    },
    {
      condition: 'Dry Eye Syndrome',
      details: 'Comprehensive management with artificial tears, punctal occlusion, and meibomian gland therapy'
    },
    {
      condition: 'Presbyopia',
      details: 'Age-related loss of accommodation with multifocal lens options'
    },
    {
      condition: 'Retinal Detachment',
      details: 'Pneumatic retinopexy, scleral buckling, and vitrectomy for retinal detachment'
    },
    {
      condition: 'Strabismus & Amblyopia',
      details: 'Eye misalignment management and lazy eye treatment in children'
    },
    {
      condition: 'Ocular Allergies',
      details: 'Seasonal and perennial allergic conjunctivitis management'
    }
  ];

  const preventivePrograms = [
    {
      category: 'Pediatric Eye Care',
      items: [
        'Newborn screening and detection of congenital anomalies',
        'Amblyopia detection and early intervention',
        'Vision screening for school-age children',
        'Strabismus and refractive error management',
        'Developmental vision assessment'
      ]
    },
    {
      category: 'Diabetic Eye Screening',
      items: [
        'Annual diabetic retinopathy screening',
        'Diabetic macular edema assessment',
        'Laser photocoagulation when indicated',
        'Anti-VEGF injection therapy',
        'Long-term monitoring and follow-up'
      ]
    },
    {
      category: 'Glaucoma Prevention',
      items: [
        'Comprehensive glaucoma risk assessment',
        'Family history evaluation in high-risk patients',
        'Early detection through regular screening',
        'Intraocular pressure monitoring',
        'Medication compliance counseling'
      ]
    },
    {
      category: 'General Eye Health',
      items: [
        'Annual comprehensive eye examinations',
        'UV protection counseling and recommendations',
        'Nutritional support for macular health',
        'Computer vision syndrome management',
        'Occupational hazard eye protection'
      ]
    }
  ];

  const diagnosticCapabilities = [
    {
      equipment: 'Auto-refractometer',
      capability: 'Objective refractive error measurement'
    },
    {
      equipment: 'Slit Lamp Biomicroscope',
      capability: 'Detailed anterior segment examination'
    },
    {
      equipment: 'Indirect Ophthalmoscope',
      capability: 'Wide-field retinal examination'
    },
    {
      equipment: 'OCT Machine',
      capability: 'High-resolution retinal cross-sectional imaging'
    },
    {
      equipment: 'Visual Field Analyzer',
      capability: 'Automated perimetry for glaucoma detection'
    },
    {
      equipment: 'Tonometer (Applanation)',
      capability: 'Accurate intraocular pressure measurement'
    },
    {
      equipment: 'Fundus Camera',
      capability: 'High-resolution retinal photography'
    },
    {
      equipment: 'A-Scan Biometry',
      capability: 'IOL power calculation for cataract surgery'
    },
    {
      equipment: 'Corneal Topographer',
      capability: 'Corneal curvature mapping for LASIK planning'
    },
    {
      equipment: 'B-Scan Ultrasound',
      capability: 'Posterior segment imaging through opaque media'
    }
  ];

  const conditionsManagement = [
    {
      category: 'Anterior Segment',
      conditions: 'Cataract, corneal scars, pterygium, dry eye, refractive errors'
    },
    {
      category: 'Posterior Segment',
      conditions: 'Diabetic retinopathy, retinal detachment, macular degeneration, vein occlusion'
    },
    {
      category: 'Glaucoma',
      conditions: 'Open-angle glaucoma, angle-closure glaucoma, secondary glaucoma'
    },
    {
      category: 'Neuro-Ophthalmology',
      conditions: 'Optic neuritis, papilledema, diplopia, visual field defects'
    },
    {
      category: 'Pediatric Eye Diseases',
      conditions: 'Amblyopia, strabismus, congenital cataracts, retinopathy of prematurity'
    },
    {
      category: 'Ocular Surface',
      conditions: 'Dry eye, conjunctivitis, corneal ulcers, Stevens-Johnson syndrome'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Arinjez Ray',
      qualification: 'MS (Ophthalmology), FNAMS',
      specialization: 'Comprehensive Ophthalmology & Cataract Surgery',
      experience: '16+ Years',
      expertise: [
        'Cataract & Refractive Surgery',
        'Glaucoma Management',
        'Diabetic Retinopathy',
        'Corneal Disorders',
        'Pediatric Ophthalmology'
      ],
      availability: 'Sat 12:30 PM'
    }
  ];

  return (
    <Layout>
    <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      {/* ============ HERO SECTION ============ */}
      <section className={`relative min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-white via-teal-50/40 to-cyan-50/30'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-teal-500/20' : 'bg-teal-300/20'}`}></div>
          <div className={`absolute -bottom-40 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-300/20'}`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 transition-all duration-300 ${isDark ? 'bg-emerald-500/15 border-emerald-500/30' : 'bg-emerald-100/70 border-emerald-300/60'}`}>
                <Eye className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>OPHTHALMOLOGY DEPARTMENT</span>
              </div>

              <h1 className={`text-6xl lg:text-7xl font-black mb-6 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Vision Care
                <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              <p className={`text-xl transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Comprehensive eye care services combining diagnostic expertise, surgical excellence, and preventive ophthalmology for optimal vision health.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">16+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Clinical Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">5K+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Surgeries Performed</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">MS</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Fellowship</p>
                </div>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Calendar className="w-5 h-5" />
                Book Eye Checkup
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80 rounded-3xl flex items-center justify-center text-9xl bg-gradient-to-br from-emerald-600 to-cyan-600 shadow-2xl shadow-emerald-600/30">
                <Eye className="w-48 h-48 text-white" />
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
                icon: Focus,
                title: 'Advanced Diagnostics',
                desc: 'State-of-the-art equipment for comprehensive eye examination and disease detection'
              },
              {
                icon: TrendingUp,
                title: 'Surgical Excellence',
                desc: 'Modern surgical techniques with favorable outcomes and patient safety'
              },
              {
                icon: Users,
                title: 'Preventive Focus',
                desc: 'Comprehensive screening and early intervention for vision preservation'
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
              Diagnostic Services
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive eye examination with advanced diagnostic techniques
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

      {/* ============ SURGICAL SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Surgical Services
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Advanced surgical procedures with modern techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {surgicalServices.map((service, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 transition-all duration-300 text-center ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-white border-gray-200 hover:border-emerald-400 shadow-sm'
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

      {/* ============ CONDITIONS TREATED ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Conditions Managed
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive management of eye diseases and visual disorders
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

      {/* ============ DIAGNOSTIC EQUIPMENT ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Diagnostic Equipment
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {diagnosticCapabilities.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-4 transition-all duration-300 text-center ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-white border-gray-200 hover:border-emerald-400 shadow-sm'
                }`}
              >
                <Activity className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <h3 className={`font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.equipment}
                </h3>
                <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  {item.capability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLINICAL APPLICATIONS ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Conditions by Category
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditionsManagement.map((cat, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-8 transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/15'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60'
                }`}
              >
                <h3 className={`text-lg font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {cat.category}
                </h3>
                <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  {cat.conditions}
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
            Preventive Vision Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {preventivePrograms.map((program, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-8 transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
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
                      Schedule Eye Checkup
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
            Clear Vision for a Better Life
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Our ophthalmology team is committed to preserving and enhancing your vision through expert care and advanced treatment options.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <Calendar className="w-5 h-5" />
              Book Eye Checkup
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
