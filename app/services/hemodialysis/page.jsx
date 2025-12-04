"use client";
import { Droplet, Heart, Clock, Shield, Users, Activity, CheckCircle, Phone, MapPin, ArrowRight, Zap, Award, FileText, Stethoscope, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout';

export default function Hemodialysis() {
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
              <Droplet className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>DIALYSIS SERVICES</span>
            </div>

            <h1 className={`text-6xl lg:text-7xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Hemodialysis Services
            </h1>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Advanced hemodialysis treatment for acute and chronic kidney failure with state-of-the-art equipment and experienced medical professionals.
            </p>
          </div>
        </section>

        {/* ============ WHAT IS HEMODIALYSIS ============ */}
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
                  What is Hemodialysis?
                </h2>
              </div>
              
              <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Hemodialysis is a life-saving medical treatment that filters waste products, excess fluids, and toxins from the blood when the kidneys are no longer able to perform these vital functions adequately. This process uses an artificial kidney machine (hemodialyzer) to clean the blood and maintain proper fluid and electrolyte balance in the body.
              </p>
              
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                It is essential for patients with acute kidney failure or end-stage renal disease (chronic kidney failure) who require regular dialysis sessions to sustain life and maintain quality of health.
              </p>
            </div>
          </div>
        </section>

        {/* ============ KEY FEATURES ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Our Dialysis Center Features
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: 'Modern Equipment', description: 'State-of-the-art hemodialysis machines with advanced safety features' },
                { icon: Users, title: 'Expert Team', description: 'Experienced nephrologists and trained dialysis technicians' },
                { icon: Activity, title: 'Real-time Monitoring', description: 'Continuous patient monitoring throughout treatment' },
                { icon: Clock, title: 'Flexible Scheduling', description: 'Regular sessions with convenient time slots' }
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

        {/* ============ TYPES OF DIALYSIS ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Types of Hemodialysis We Offer
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Acute Hemodialysis',
                  description: 'Emergency dialysis treatment for patients with sudden kidney failure',
                  features: [
                    'Immediate intervention for acute renal failure',
                    'ICU and critically-ill patient support',
                    'Temporary vascular access placement',
                    'Continuous monitoring by medical team'
                  ]
                },
                {
                  icon: Heart,
                  title: 'Chronic Hemodialysis',
                  description: 'Regular maintenance dialysis for end-stage renal disease patients',
                  features: [
                    'Scheduled sessions (typically 3 times per week)',
                    'Permanent vascular access (AV fistula)',
                    'Long-term kidney function replacement',
                    'Comprehensive patient care and monitoring'
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

        {/* ============ BENEFITS OF HEMODIALYSIS ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Benefits of Hemodialysis
              </h2>
              <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                How hemodialysis improves quality of life for kidney failure patients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Droplet,
                  title: 'Removes Waste & Toxins',
                  description: 'Effectively eliminates harmful waste products and toxins from the bloodstream'
                },
                {
                  icon: Activity,
                  title: 'Balances Electrolytes',
                  description: 'Maintains proper levels of potassium, sodium, and other essential minerals'
                },
                {
                  icon: Heart,
                  title: 'Controls Fluid Retention',
                  description: 'Removes excess fluids to reduce swelling and manage blood pressure'
                },
                {
                  icon: Shield,
                  title: 'Extends Life Expectancy',
                  description: 'Provides life-sustaining kidney function replacement therapy'
                },
                {
                  icon: Zap,
                  title: 'Improves Energy Levels',
                  description: 'Reduces fatigue, nausea and other symptoms of kidney failure'
                },
                {
                  icon: Users,
                  title: 'Better Quality of Life',
                  description: 'Enables patients to maintain daily activities and overall wellbeing'
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

        {/* ============ OUR SERVICES ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Comprehensive Dialysis Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Stethoscope, title: 'Pre-Dialysis Consultation', description: 'Comprehensive assessment and treatment planning by nephrologists' },
                { icon: Activity, title: 'Vascular Access Surgery', description: 'AV fistula creation and maintenance for dialysis access' },
                { icon: FileText, title: 'Dietary Counseling', description: 'Personalized nutrition guidance for kidney disease patients' },
                { icon: Calendar, title: 'Regular Monitoring', description: 'Continuous tracking of kidney function and treatment effectiveness' },
                { icon: Shield, title: 'Infection Control', description: 'Strict sterilization protocols for patient safety' },
                { icon: Users, title: 'Patient Education', description: 'Self-care training and information for dialysis patients' }
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                      isDark
                        ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                        : 'bg-white border-gray-200 shadow-sm hover:shadow-lg'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-emerald-600 to-cyan-600">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {service.description}
                      </p>
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
              <Droplet className={`w-16 h-16 mx-auto mb-6 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              
              <h2 className={`text-4xl font-black mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Need Dialysis Treatment?
              </h2>
              
              <p className={`text-lg mb-8 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Contact our dialysis center for consultation and treatment scheduling
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
                  <Stethoscope className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <p className={`text-sm font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Nephrologist Consultation
                  </p>
                  <p className={`text-xl font-bold transition-colors duration-300 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    Available Daily
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <MapPin className="w-5 h-5" />
                Visit Dialysis Center
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
            <h2 className="text-5xl font-black text-white mb-8">Expert Hemodialysis Care</h2>
            <p className="text-xl text-white/90 mb-12">
              Advanced kidney dialysis treatment with experienced medical professionals and modern equipment
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
