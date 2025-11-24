"use client";
import { Heart, Award, Clock, Users, Phone, Mail, MapPin, ArrowRight, Check, Activity, Stethoscope, Calendar, FileText, TrendingUp, Zap, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout'

export default function Dermatology() {
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
      name: 'Comprehensive Skin Examination',
      description: 'Complete dermatological assessment including full-body skin check, mole mapping, and skin cancer screening for early detection of malignancies'
    },
    {
      name: 'Dermatoscopy',
      description: 'Non-invasive examination using dermoscope for detailed visualization of skin lesions, pigmented nevi, and suspicious growths'
    },
    {
      name: 'Skin Biopsy',
      description: 'Diagnostic procedure for histopathological examination of suspicious lesions, rashes, and chronic skin conditions requiring tissue analysis'
    },
    {
      name: 'Patch Testing',
      description: 'Allergen identification testing for contact dermatitis diagnosis, identifying specific substances causing allergic skin reactions'
    },
    {
      name: 'Laser Therapy',
      description: 'Advanced laser treatments including carbon laser peel, Q-switched laser for pigmentation, and fractional laser for acne scars and skin rejuvenation'
    },
    {
      name: 'Chemical Peels',
      description: 'Medical-grade chemical exfoliation for acne treatment, pigmentation correction, anti-aging, and skin texture improvement with controlled depth peels'
    },
    {
      name: 'Phototherapy',
      description: 'Controlled UV light therapy for psoriasis, vitiligo, eczema, and other inflammatory skin conditions requiring immunomodulation'
    },
    {
      name: 'Cryotherapy',
      description: 'Liquid nitrogen treatment for warts, skin tags, seborrheic keratosis, and benign lesions with precise freezing technique'
    }
  ];

  const clinicalConditions = [
    {
      condition: 'Acne Vulgaris and Acne Scars',
      details: 'Comprehensive acne management with topical retinoids, benzoyl peroxide, oral antibiotics, and isotretinoin for severe cases. Acne scar treatment with chemical peels and laser resurfacing'
    },
    {
      condition: 'Psoriasis',
      details: 'Management of autoimmune skin condition with topical corticosteroids, vitamin D analogs, phototherapy, and systemic biologics for moderate to severe plaque psoriasis'
    },
    {
      condition: 'Eczema (Atopic Dermatitis)',
      details: 'Treatment of chronic inflammatory skin condition with emollients, topical corticosteroids, antihistamines, and trigger identification for effective long-term management'
    },
    {
      condition: 'Pigmentation Disorders',
      details: 'Management of melasma, hyperpigmentation, and dark spots with skin whitening treatments, chemical peels, Q-switched laser therapy, and sun protection protocols'
    },
    {
      condition: 'Skin Infections',
      details: 'Diagnosis and treatment of bacterial, fungal, and viral infections including ringworm, impetigo, folliculitis, and herpes with appropriate antimicrobial therapy'
    },
    {
      condition: 'Hair Loss (Alopecia)',
      details: 'Comprehensive evaluation and treatment with minoxidil, finasteride, PRP therapy, and hair transplantation for androgenetic alopecia and other hair loss conditions'
    },
    {
      condition: 'Vitiligo',
      details: 'Management of depigmentation disorder with topical corticosteroids, phototherapy, tacrolimus, and surgical grafting for stable vitiligo patches'
    },
    {
      condition: 'Skin Cancer Screening',
      details: 'Early detection and management of basal cell carcinoma, squamous cell carcinoma, and melanoma with dermoscopy, biopsy, and appropriate surgical intervention'
    },
    {
      condition: 'Anti-Aging and Wrinkles',
      details: 'Cosmetic dermatology treatments including Botox, dermal fillers, chemical peels, and laser therapy for fine lines, wrinkles, and facial volume restoration'
    },
    {
      condition: 'Rosacea',
      details: 'Management of chronic facial redness and flushing with topical metronidazole, azelaic acid, oral antibiotics, and trigger avoidance strategies'
    }
  ];

  const treatmentPrograms = [
    {
      category: 'Medical Dermatology',
      items: [
        'Topical and systemic treatments for acne, psoriasis, and eczema',
        'Antifungal and antibacterial therapy for skin infections',
        'Immunosuppressive therapy for autoimmune skin conditions',
        'Chronic skin disease management and maintenance therapy'
      ]
    },
    {
      category: 'Cosmetic Dermatology',
      items: [
        'Chemical peels for skin rejuvenation and pigmentation correction',
        'Laser treatments: Carbon peel, Q-switched laser, fractional laser',
        'Botox and dermal fillers for anti-aging and facial contouring',
        'Microneedling and PRP therapy for skin texture improvement'
      ]
    },
    {
      category: 'Procedural Dermatology',
      items: [
        'Cryotherapy for warts, skin tags, and benign lesions',
        'Skin biopsy and excision of suspicious lesions',
        'Phototherapy (UV-B, PUVA) for psoriasis and vitiligo',
        'Laser hair reduction and permanent hair removal'
      ]
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Dermatology Specialist',
      qualification: 'MBBS, MD (Dermatology)',
      specialization: 'Dermatology & Cosmetology',
      experience: '16+ Years',
      expertise: [
        'Medical & Cosmetic Dermatology',
        'Laser Therapy & Chemical Peels',
        'Acne & Pigmentation Treatment',
        'Anti-Aging Procedures'
      ],
      availability: 'Mon-Sat: 2:00 PM - 6:00 PM'
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
                <Sparkles className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>DERMATOLOGY DEPARTMENT</span>
              </div>

              <h1 className={`text-6xl lg:text-7xl font-black mb-6 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Advanced
                <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Skin Care
                </span>
              </h1>

              <p className={`text-xl transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Comprehensive dermatology services providing medical, cosmetic, and surgical treatments for all skin, hair, and nail conditions with advanced laser therapy and aesthetic procedures.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">16+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">6000+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Patients Treated</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Laser</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Advanced Technology</p>
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
                <Sparkles className="w-48 h-48 text-white animate-pulse" />
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
                title: 'Advanced Treatments',
                desc: 'Cutting-edge laser therapy, chemical peels, and aesthetic procedures for optimal results'
              },
              {
                icon: TrendingUp,
                title: 'Medical & Cosmetic',
                desc: 'Complete spectrum of dermatological services from disease treatment to aesthetic enhancement'
              },
              {
                icon: Users,
                title: 'Expert Dermatologists',
                desc: 'Board-certified specialists with extensive training in medical and cosmetic dermatology'
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
              Dermatology Services
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive diagnostic and treatment services for all skin, hair, and nail conditions
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
              Expert management of all dermatological conditions and aesthetic concerns
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
            Our Dermatology Team
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
            Transform Your Skin with Expert Care
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Our dermatology specialists provide comprehensive medical and cosmetic treatments with advanced laser therapy and personalized care for radiant, healthy skin.
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
