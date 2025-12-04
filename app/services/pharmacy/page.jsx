"use client";
import { Pill, Clock, ShoppingCart, Heart, Phone, MapPin, CheckCircle, Shield, Truck, Package, FileText, ArrowRight, Zap, Award, Users } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout';

export default function Pharmacy() {
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
              <Pill className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>IN-HOUSE PHARMACY</span>
            </div>

            <h1 className={`text-6xl lg:text-7xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Pharmacy Services
            </h1>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Your trusted source for quality medicines and healthcare products. Available 24/7 with genuine medications and expert pharmaceutical care.
            </p>
          </div>
        </section>

        {/* ============ KEY FEATURES ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Clock, title: '24/7 Available', description: 'Open round-the-clock for your convenience' },
                { icon: Shield, title: 'Genuine Medicines', description: 'Only authentic and quality medications' },
                { icon: Truck, title: 'Home Delivery', description: 'Convenient doorstep delivery service' },
                { icon: Award, title: 'Expert Pharmacists', description: 'Qualified professionals to assist you' }
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

        {/* ============ SERVICES OFFERED ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Our Pharmacy Services
              </h2>
              <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Complete pharmaceutical solutions for all your healthcare needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Pill,
                  title: 'Prescription Medicines',
                  description: 'Wide range of prescription medications from leading pharmaceutical brands',
                  features: ['Doctor prescribed medicines', 'Chronic disease management', 'Specialty medications', 'Generic alternatives available']
                },
                {
                  icon: ShoppingCart,
                  title: 'Over-The-Counter Products',
                  description: 'Quality OTC medications and health supplements without prescription',
                  features: ['Pain relievers', 'Cold & flu medicines', 'Vitamins & supplements', 'First aid supplies']
                },
                {
                  icon: Truck,
                  title: 'Medicine Home Delivery',
                  description: 'Convenient doorstep delivery service for your medications',
                  features: ['Same-day delivery', 'Prescription tracking', 'Online ordering', 'Secure packaging']
                },
                {
                  icon: FileText,
                  title: 'Prescription Management',
                  description: 'Digital prescription storage and refill reminder services',
                  features: ['Digital records', 'Refill reminders', 'Prescription history', 'Easy reordering']
                },
                {
                  icon: Heart,
                  title: 'Health & Wellness Products',
                  description: 'Complete range of health and wellness products',
                  features: ['Personal care items', 'Medical devices', 'Health monitoring tools', 'Wellness supplements']
                },
                {
                  icon: Users,
                  title: 'Pharmaceutical Counseling',
                  description: 'Expert guidance from qualified pharmacists',
                  features: ['Medication guidance', 'Drug interaction checks', 'Dosage instructions', 'Side effect management']
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
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-emerald-600 to-cyan-600 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {service.title}
                        </h3>
                        <p className={`mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {service.description}
                        </p>

                        <div className="space-y-2">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                              <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ WHY CHOOSE OUR PHARMACY ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Why Choose Our Pharmacy
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Quality Assurance',
                  description: 'All medications sourced from licensed distributors with proper storage conditions'
                },
                {
                  icon: Zap,
                  title: 'Quick Service',
                  description: 'Fast prescription processing and minimal wait times for your convenience'
                },
                {
                  icon: Package,
                  title: 'Wide Selection',
                  description: 'Extensive inventory of medicines and healthcare products always in stock'
                },
                {
                  icon: Award,
                  title: 'Licensed Pharmacists',
                  description: 'Experienced and qualified pharmacists available for consultation'
                },
                {
                  icon: Heart,
                  title: 'Patient Care',
                  description: 'Personalized service with focus on patient safety and wellbeing'
                },
                {
                  icon: CheckCircle,
                  title: 'Affordable Pricing',
                  description: 'Competitive prices with generic alternatives to save your costs'
                }
              ].map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={idx}
                    className={`text-center p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                      isDark
                        ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                        : 'bg-white border-gray-200 shadow-sm hover:shadow-lg'
                    }`}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br from-emerald-600 to-cyan-600">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {reason.title}
                    </h3>
                    <p className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ CONTACT PHARMACY ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
          <div className="max-w-4xl mx-auto">
            <div className={`rounded-3xl border p-12 text-center transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border-emerald-500/30'
                : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200'
            }`}>
              <Pill className={`w-16 h-16 mx-auto mb-6 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              
              <h2 className={`text-4xl font-black mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Need Medicines?
              </h2>
              
              <p className={`text-lg mb-8 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Contact our pharmacy for prescriptions, orders, or any medication queries
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-white/80'}`}>
                  <Phone className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <p className={`text-sm font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Pharmacy Helpline
                  </p>
                  <a href="tel:+918373091374" className={`text-xl font-bold transition-colors duration-300 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    +91-8373091374
                  </a>
                </div>

                <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-white/80'}`}>
                  <Clock className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <p className={`text-sm font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Available
                  </p>
                  <p className={`text-xl font-bold transition-colors duration-300 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    24/7/365 Days
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <MapPin className="w-5 h-5" />
                Visit Pharmacy
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
            <h2 className="text-5xl font-black text-white mb-8">Order Your Medicines Today</h2>
            <p className="text-xl text-white/90 mb-12">
              Get genuine medications delivered to your doorstep with our convenient pharmacy services
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918373091374"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Pharmacy
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
