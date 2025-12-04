"use client";
import { Droplet, Heart, Clock, Shield, Users, Activity, CheckCircle, Phone, MapPin, ArrowRight, Home, Zap, Award, FileText, Stethoscope, Calendar, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout';

export default function PeritonealDialysis() {
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

  return (
    <Layout>
      <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        {/* ============ HERO SECTION ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 pt-32 transition-colors duration-300 ${isDark ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-white to-emerald-50/40'}`}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-200/20'}`}></div>
            <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-200/20'}`}></div>
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 transition-all duration-300 ${
              isDark 
                ? 'bg-emerald-500/15 border-emerald-500/30' 
                : 'bg-emerald-100/70 border-emerald-300/60'
            }`}>
              <Home className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>HOME-BASED DIALYSIS</span>
            </div>

            <h1 className={`text-6xl lg:text-7xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Peritoneal Dialysis
            </h1>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Home-based kidney dialysis treatment that offers flexibility and independence. Perform dialysis at home with comprehensive training and continuous support from our medical team.
            </p>
          </div>
        </section>

        {/* ============ WHAT IS PERITONEAL DIALYSIS ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
          <div className="max-w-5xl mx-auto">
            <div className={`rounded-3xl border p-12 transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border-emerald-500/20'
                : 'bg-gradient-to-br from-emerald-50/50 to-cyan-50/50 border-emerald-200'
            }`}>
              <div className="text-center mb-8">
                <Droplet className={`w-16 h-16 mx-auto mb-6 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  What is Peritoneal Dialysis?
                </h2>
              </div>
              
              <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Peritoneal dialysis (PD) is a home-based kidney dialysis treatment that uses the lining of your abdomen (peritoneum) as a natural filter to remove waste products, excess fluids, and toxins from your blood. A cleansing fluid (dialysate) is placed into your abdomen through a catheter, where it absorbs waste products before being drained out.
              </p>
              
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                This treatment offers greater flexibility and independence compared to in-center hemodialysis, as it can be performed at home, at work, or while traveling. It provides continuous dialysis, which closely mimics natural kidney function.
              </p>
            </div>
          </div>
        </section>

        {/* ============ KEY FEATURES ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Why Choose Peritoneal Dialysis
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Home, title: 'Home-Based Treatment', description: 'Perform dialysis in the comfort of your own home' },
                { icon: Clock, title: 'Flexible Schedule', description: 'Treatment fits around your daily activities and lifestyle' },
                { icon: Heart, title: 'Gentler on Heart', description: 'Continuous treatment is easier on cardiovascular system' },
                { icon: Shield, title: 'Needle-Free', description: 'No needles required for treatment sessions' }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 ${
                      isDark
                        ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                        : 'bg-white border-emerald-200 shadow-sm hover:shadow-lg'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br from-emerald-600 to-cyan-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ TYPES OF PERITONEAL DIALYSIS ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Types of Peritoneal Dialysis
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Activity,
                  title: 'CAPD (Continuous Ambulatory Peritoneal Dialysis)',
                  description: 'Manual exchanges performed throughout the day',
                  features: [
                    '4-5 exchanges daily (every 4-6 hours)',
                    'Each exchange takes 20-30 minutes',
                    'Performed manually without machine',
                    'Dialysate stays in abdomen between exchanges',
                    'No machine required - portable and flexible',
                    'Can be done anywhere clean and private'
                  ]
                },
                {
                  icon: Zap,
                  title: 'APD (Automated Peritoneal Dialysis)',
                  description: 'Machine-assisted dialysis performed while sleeping',
                  features: [
                    'Treatment done overnight (8-10 hours)',
                    'Uses cycler machine to automate exchanges',
                    '3-10 exchanges per night automatically',
                    'Free during daytime for normal activities',
                    'Ideal for working individuals',
                    'More convenient for children and caregivers'
                  ]
                }
              ].map((type, idx) => {
                const Icon = type.icon;
                return (
                  <div
                    key={idx}
                    className={`group relative rounded-3xl border p-10 transition-all duration-300 hover:-translate-y-2 ${
                      isDark
                        ? 'bg-white/5 border-white/10 hover:border-emerald-500/50 hover:bg-white/10'
                        : 'bg-white border-gray-200 hover:border-emerald-400 shadow-sm hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-emerald-600 to-cyan-600 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div>
                        <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {type.title}
                        </h3>
                        <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {type.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {type.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ BENEFITS OF PERITONEAL DIALYSIS ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Benefits of Peritoneal Dialysis
              </h2>
              <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Advantages that make PD an excellent choice for many kidney failure patients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Home,
                  title: 'Greater Independence',
                  description: 'Control your own treatment schedule and maintain normal daily routines'
                },
                {
                  icon: Clock,
                  title: 'Flexible Lifestyle',
                  description: 'Treatment fits around work, travel, and social activities'
                },
                {
                  icon: Heart,
                  title: 'Gentler Treatment',
                  description: 'Continuous dialysis is easier on heart and blood pressure'
                },
                {
                  icon: Shield,
                  title: 'No Needles Required',
                  description: 'Pain-free treatment without needle insertions'
                },
                {
                  icon: Activity,
                  title: 'Better Kidney Function',
                  description: 'Preserves remaining kidney function longer than hemodialysis'
                },
                {
                  icon: Users,
                  title: 'Fewer Dietary Restrictions',
                  description: 'More flexible diet compared to hemodialysis patients'
                }
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className={`text-center p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                      isDark
                        ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                        : 'bg-white border-gray-200 shadow-sm hover:shadow-lg'
                    }`}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br from-emerald-600 to-cyan-600">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {benefit.title}
                    </h3>
                    <p className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ TRAINING & SUPPORT ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Comprehensive Training & Support
              </h2>
              <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                We provide complete training and ongoing support for successful home dialysis
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: 'Initial Training Program',
                  description: 'Comprehensive training at hospital and home',
                  features: [
                    'Step-by-step procedure training',
                    'Catheter care and maintenance',
                    'Equipment setup and operation',
                    'Sterile technique and infection prevention',
                    'Hands-on practice sessions',
                    'Training for family caregivers'
                  ]
                },
                {
                  icon: Users,
                  title: 'Ongoing Support Services',
                  description: '24/7 medical support and monitoring',
                  features: [
                    'Regular follow-up consultations',
                    '24/7 helpline for emergencies',
                    'Home visits when needed',
                    'Supply delivery and management',
                    'Treatment effectiveness monitoring',
                    'Nutritional counseling support'
                  ]
                },
                {
                  icon: FileText,
                  title: 'Home Assessment',
                  description: 'We evaluate your home for suitability',
                  features: [
                    'Clean space identification',
                    'Storage area for supplies',
                    'Hand washing facilities check',
                    'Electrical outlet verification',
                    'Family support assessment',
                    'Environmental safety evaluation'
                  ]
                },
                {
                  icon: Calendar,
                  title: 'Regular Monitoring',
                  description: 'Continuous tracking of treatment progress',
                  features: [
                    'Monthly clinic visits',
                    'Blood test monitoring',
                    'Dialysis adequacy assessment',
                    'Nutritional status evaluation',
                    'Catheter function checks',
                    'Treatment plan adjustments'
                  ]
                }
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className={`group relative rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                      isDark
                        ? 'bg-white/5 border-white/10 hover:border-emerald-500/50 hover:bg-white/10'
                        : 'bg-white border-gray-200 hover:border-emerald-400 shadow-sm hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-emerald-600 to-cyan-600 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <div>
                        <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {service.title}
                        </h3>
                        <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ CONTACT DIALYSIS CENTER ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
          <div className="max-w-4xl mx-auto">
            <div className={`rounded-3xl border p-12 text-center transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border-emerald-500/30'
                : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200'
            }`}>
              <Home className={`w-16 h-16 mx-auto mb-6 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              
              <h2 className={`text-4xl font-black mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Interested in Home Dialysis?
              </h2>
              
              <p className={`text-lg mb-8 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Contact us to learn more about peritoneal dialysis and schedule a consultation
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-white/80'}`}>
                  <Phone className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <p className={`text-sm font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Dialysis Center
                  </p>
                  <a href="tel:+919434316317" className={`text-xl font-bold transition-colors duration-300 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    +91-9434316317
                  </a>
                </div>

                <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-white/80'}`}>
                  <Clock className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <p className={`text-sm font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    24/7 Support
                  </p>
                  <p className={`text-xl font-bold transition-colors duration-300 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    Always Available
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Stethoscope className="w-5 h-5" />
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============ CTA SECTION ============ */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-emerald-600 to-cyan-600">
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black text-white mb-8">Start Your Home Dialysis Journey</h2>
            <p className="text-xl text-white/90 mb-12">
              Gain independence with peritoneal dialysis - flexible, convenient home-based treatment with complete training and support
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919434316317"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Dialysis Center
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
