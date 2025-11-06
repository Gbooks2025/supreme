// "use client";
// import { Award, Users, Heart, Zap, Target, TrendingUp, CheckCircle, ArrowRight, PhoneCall, MapPin, Mail } from 'lucide-react';
// import Link from 'next/link';
// import { useState } from 'react';
// import Layout from '../../components/layout'

// export default function About() {
//     const [hoveredCard, setHoveredCard] = useState(null);

//     return (
//         <Layout>
//             <div className="bg-white overflow-hidden">
//                 {/* ============ HERO SECTION ============ */}
//                 <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
//                     {/* Animated Background Gradients */}
//                     <div className="absolute inset-0 overflow-hidden">
//                         <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
//                         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
//                         <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
//                     </div>

//                     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
//                         <div className="grid lg:grid-cols-2 gap-12 items-center">
//                             {/* Left Content */}
//                             <div className="space-y-8">
//                                 {/* Badge */}
//                                 <div className="inline-flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-100/50 backdrop-blur-sm border border-emerald-200/50">
//                                     <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></div>
//                                     <span className="text-sm font-semibold text-emerald-700">Welcome to Our Story</span>
//                                 </div>

//                                 {/* Main Title */}
//                                 <div>
//                                     <h1 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
//                                         Transforming
//                                         <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
//                                             Healthcare
//                                         </span>
//                                         One Patient at a Time
//                                     </h1>
//                                 </div>

//                                 {/* Description */}
//                                 <p className="text-xl text-gray-600 leading-relaxed max-w-md">
//                                     With over a decade of excellence, Supreme Healthcare has been pioneering compassionate, comprehensive healthcare solutions for our community.
//                                 </p>

//                                 {/* Stats */}
//                                 <div className="grid grid-cols-3 gap-6 pt-4">
//                                     <div className="group">
//                                         <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">15K+</p>
//                                         <p className="text-sm text-gray-600 mt-2 group-hover:text-emerald-600 transition-colors">Patients Healed</p>
//                                     </div>
//                                     <div className="group">
//                                         <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">50+</p>
//                                         <p className="text-sm text-gray-600 mt-2 group-hover:text-emerald-600 transition-colors">Expert Doctors</p>
//                                     </div>
//                                     <div className="group">
//                                         <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">14 Yrs</p>
//                                         <p className="text-sm text-gray-600 mt-2 group-hover:text-emerald-600 transition-colors">Of Excellence</p>
//                                     </div>
//                                 </div>

//                                 {/* CTA */}
//                                 <Link
//                                     href="/"
//                                     className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
//                                 >
//                                     <PhoneCall className="w-5 h-5" />
//                                     Get Started Today
//                                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                                 </Link>
//                             </div>

//                             {/* Right - Image Placeholder with Glassmorphism */}
//                             <div className="hidden lg:block relative">
//                                 <div className="relative h-96 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden group">
//                                     <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10"></div>
//                                     <div className="flex items-center justify-center h-full relative z-10">
//                                         <div className="text-center">
//                                             <Heart className="w-24 h-24 text-emerald-600 mx-auto mb-4 animate-pulse" />
//                                             <p className="text-gray-700 font-semibold">Your Health Matters</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Floating Cards */}
//                                 <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-300 hover:scale-105">
//                                     <Award className="w-8 h-8 text-emerald-600 mb-2" />
//                                     <p className="font-semibold text-gray-900 text-sm">NABH Certified</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ OUR STORY ============ */}
//                 <section className="relative py-32 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="grid lg:grid-cols-2 gap-16 items-center">
//                             {/* Left - Glassmorphism Card */}
//                             <div className="space-y-6">
//                                 <div className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//                                     <div className="flex items-start gap-4">
//                                         <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
//                                             <Target className="w-7 h-7 text-white" />
//                                         </div>
//                                         <div>
//                                             <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
//                                             <p className="text-gray-600 leading-relaxed">
//                                                 To provide world-class, accessible healthcare with compassion and integrity. We believe every person deserves quality medical care regardless of their background.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//                                     <div className="flex items-start gap-4">
//                                         <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
//                                             <Zap className="w-7 h-7 text-white" />
//                                         </div>
//                                         <div>
//                                             <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
//                                             <p className="text-gray-600 leading-relaxed">
//                                                 To be the leading healthcare destination recognized for clinical excellence, innovation, and patient satisfaction in our region.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Right - Content */}
//                             <div className="space-y-6">
//                                 <div>
//                                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/50 border border-emerald-200/50 mb-6">
//                                         <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
//                                         <span className="text-sm font-semibold text-emerald-700">OUR JOURNEY</span>
//                                     </div>
//                                     <h2 className="text-5xl font-bold text-gray-900 mb-6">Built on Trust & Excellence</h2>
//                                 </div>

//                                 <p className="text-lg text-gray-600 leading-relaxed">
//                                     Since 2010, Supreme Healthcare has grown from a single clinic to a multi-specialty healthcare center serving over 15,000 patients annually. Our journey is marked by continuous innovation, unwavering commitment to patient care, and the trust placed in us by our community.
//                                 </p>

//                                 <ul className="space-y-4">
//                                     {[
//                                         'Multi-specialty departments with 25+ medical specialties',
//                                         'Cutting-edge diagnostic and treatment facilities',
//                                         'Team of 50+ highly qualified medical professionals',
//                                         '24/7 emergency services with rapid response team'
//                                     ].map((item, idx) => (
//                                         <li key={idx} className="flex items-start gap-3 group">
//                                             <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-600 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
//                                                 <CheckCircle className="w-4 h-4 text-white" />
//                                             </div>
//                                             <span className="text-gray-700 font-medium">{item}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ CORE VALUES ============ */}
//                 <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
//                     <div className="absolute inset-0 overflow-hidden">
//                         <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
//                     </div>

//                     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="text-center mb-16">
//                             <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Our Core Values</h2>
//                             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                                 Principles that guide every decision and every interaction
//                             </p>
//                         </div>

//                         {/* Values Grid - Bento Style */}
//                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                             {[
//                                 { icon: Heart, title: 'Compassion', desc: 'Empathy at the heart of everything we do', size: 'lg:col-span-1' },
//                                 { icon: Award, title: 'Excellence', desc: 'Highest standards in care and service', size: 'lg:col-span-1' },
//                                 { icon: Users, title: 'Integrity', desc: 'Honest and transparent in all dealings', size: 'lg:col-span-1' },
//                                 { icon: TrendingUp, title: 'Innovation', desc: 'Embracing modern healthcare solutions', size: 'lg:col-span-1' }
//                             ].map((value, idx) => {
//                                 const Icon = value.icon;
//                                 return (
//                                     <div
//                                         key={idx}
//                                         className={`group relative bg-white/50 backdrop-blur-xl rounded-2xl border border-white/30 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer ${value.size}`}
//                                         onMouseEnter={() => setHoveredCard(idx)}
//                                         onMouseLeave={() => setHoveredCard(null)}
//                                     >
//                                         <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                                         <div className="relative z-10">
//                                             <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                                                 <Icon className="w-7 h-7 text-white" />
//                                             </div>
//                                             <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
//                                             <p className="text-gray-600 leading-relaxed">{value.desc}</p>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ ACHIEVEMENTS ============ */}
//                 <section className="relative py-32 bg-gradient-to-r from-emerald-600/5 to-cyan-600/5">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                             {[
//                                 { number: '14+', label: 'Years of Service', icon: Award },
//                                 { number: '50+', label: 'Medical Experts', icon: Users },
//                                 { number: '15K+', label: 'Happy Patients', icon: Heart },
//                                 { number: '25+', label: 'Specialities', icon: TrendingUp }
//                             ].map((achievement, idx) => {
//                                 const Icon = achievement.icon;
//                                 return (
//                                     <div
//                                         key={idx}
//                                         className="group bg-white/50 backdrop-blur-xl rounded-2xl border border-white/30 p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
//                                     >
//                                         <Icon className="w-12 h-12 text-emerald-600 mx-auto mb-4 group-hover:scale-125 transition-transform" />
//                                         <p className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">
//                                             {achievement.number}
//                                         </p>
//                                         <p className="text-gray-600 font-semibold">{achievement.label}</p>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ TEAM HIGHLIGHTS ============ */}
//                 <section className="relative py-32 bg-white">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="text-center mb-16">
//                             <h2 className="text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
//                             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                                 Dedicated healthcare professionals committed to your wellness
//                             </p>
//                         </div>

//                         <div className="grid md:grid-cols-3 gap-8">
//                             {[
//                                 { role: 'Chief Medical Officer', specialty: 'Cardiology', name: 'Dr. Rajesh Kumar', exp: '20+ Years' },
//                                 { role: 'Director of Operations', specialty: 'General Surgery', name: 'Dr. Priya Singh', exp: '18+ Years' },
//                                 { role: 'Lead Pathologist', specialty: 'Diagnostic Medicine', name: 'Dr. Amit Patel', exp: '15+ Years' }
//                             ].map((member, idx) => (
//                                 <div key={idx} className="group">
//                                     <div className="bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 backdrop-blur-xl rounded-3xl border border-white/20 p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-4">
//                                         <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
//                                             <Users className="w-12 h-12 text-white" />
//                                         </div>
//                                         <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
//                                         <p className="text-emerald-600 font-semibold mb-2">{member.role}</p>
//                                         <p className="text-gray-600 text-sm mb-3">{member.specialty}</p>
//                                         <p className="text-gray-500 text-xs">{member.exp}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* ============ CTA SECTION ============ */}
//                 <section className="relative py-24 bg-gradient-to-r from-emerald-600 to-cyan-600 overflow-hidden">
//                     <div className="absolute inset-0">
//                         <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
//                     </div>

//                     <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                         <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Experience Excellence?</h2>
//                         <p className="text-xl text-white/90 mb-12">
//                             Join thousands of satisfied patients who have trusted us with their healthcare
//                         </p>

//                         <div className="grid md:grid-cols-3 gap-6 mb-12">
//                             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all">
//                                 <PhoneCall className="w-8 h-8 text-white mx-auto mb-4" />
//                                 <p className="text-white font-semibold">+91-1234567890</p>
//                             </div>
//                             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all">
//                                 <Mail className="w-8 h-8 text-white mx-auto mb-4" />
//                                 <p className="text-white font-semibold">info@healthplus.com</p>
//                             </div>
//                             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all">
//                                 <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
//                                 <p className="text-white font-semibold">123 Healthcare Street</p>
//                             </div>
//                         </div>

//                         <Link
//                             href="/"
//                             className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
//                         >
//                             <PhoneCall className="w-5 h-5" />
//                             Book Your Appointment
//                             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                         </Link>
//                     </div>
//                 </section>

//                 {/* Custom CSS for animations */}
//                 <style jsx>{`
//         @keyframes delay-animation {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }
        
//         .animation-delay-2000 {
//           animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 2s infinite;
//         }
        
//         .animation-delay-4000 {
//           animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 4s infinite;
//         }
//       `}</style>
//             </div>
//         </Layout>

//     );
// }


"use client";
import { Award, Users, Heart, Zap, Target, TrendingUp, CheckCircle, ArrowRight, PhoneCall, MapPin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../components/layout'
export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);
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
    <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-white'}`}>
      {/* ============ HERO SECTION ============ */}
      <section className={`relative min-h-screen flex items-center overflow-hidden pt-20 transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-white via-emerald-50/40 to-cyan-50/30'}`}>
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-emerald-500/25' : 'bg-emerald-300/15'}`}></div>
          <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl animate-pulse animation-delay-2000 ${isDark ? 'bg-cyan-500/25' : 'bg-cyan-300/15'}`}></div>
          <div className={`absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse animation-delay-4000 ${isDark ? 'bg-blue-500/10' : 'bg-blue-300/20'}`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className={`inline-flex items-center gap-3 px-4 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                isDark 
                  ? 'bg-emerald-500/15 border-emerald-500/30' 
                  : 'bg-emerald-100/70 border-emerald-300/60'
              }`}>
                <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-emerald-400' : 'bg-emerald-600'}`}></div>
                <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>Welcome to Our Story</span>
              </div>

              {/* Main Title */}
              <div>
                <h1 className={`text-6xl lg:text-7xl font-black mb-6 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Transforming
                  <span className={`block bg-gradient-to-r ${isDark ? 'from-emerald-400 via-cyan-400 to-blue-400' : 'from-emerald-600 via-cyan-600 to-blue-600'} bg-clip-text text-transparent`}>
                    Healthcare
                  </span>
                  One Patient at a Time
                </h1>
              </div>

              {/* Description */}
              <p className={`text-xl leading-relaxed max-w-md transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                With over a decade of excellence, Supreme Healthcare has been pioneering compassionate, comprehensive healthcare solutions for our community.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="group">
                  <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">15K+</p>
                  <p className={`text-sm mt-2 transition-colors duration-300 group-hover:text-emerald-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Patients Healed</p>
                </div>
                <div className="group">
                  <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">50+</p>
                  <p className={`text-sm mt-2 transition-colors duration-300 group-hover:text-emerald-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Expert Doctors</p>
                </div>
                <div className="group">
                  <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">14 Yrs</p>
                  <p className={`text-sm mt-2 transition-colors duration-300 group-hover:text-emerald-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Of Excellence</p>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <PhoneCall className="w-5 h-5" />
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right - Image Placeholder with Glassmorphism */}
            <div className="hidden lg:block relative">
              <div className={`relative h-96 rounded-3xl backdrop-blur-xl border shadow-2xl overflow-hidden group transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 border-white/20' 
                  : 'bg-gradient-to-br from-emerald-200/40 to-cyan-200/40 border-emerald-200/60'
              }`}>
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-emerald-500/10 to-cyan-500/10' : 'bg-gradient-to-br from-emerald-600/10 to-cyan-600/10'}`}></div>
                <div className="flex items-center justify-center h-full relative z-10">
                  <div className="text-center">
                    <Heart className={`w-24 h-24 mx-auto mb-4 animate-pulse ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <p className={`font-semibold transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Your Health Matters</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className={`absolute -bottom-6 -left-6 backdrop-blur-xl rounded-2xl p-6 border shadow-xl transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-white/10 border-white/30 group-hover:shadow-2xl' 
                  : 'bg-white/80 border-white/80'
              }`}>
                <Award className={`w-8 h-8 mb-2 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <p className={`font-semibold text-sm transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>NABH Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUR STORY ============ */}
      <section className={`relative py-32 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-b from-white via-emerald-50/30 to-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Glassmorphism Card */}
            <div className="space-y-6">
              <div className={`rounded-3xl border p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-xl border-white/15' 
                  : 'bg-white/70 border-emerald-200/60'
              }`}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Mission</h3>
                    <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      To provide world-class, accessible healthcare with compassion and integrity. We believe every person deserves quality medical care regardless of their background.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`rounded-3xl border p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-xl border-white/15' 
                  : 'bg-white/70 border-emerald-200/60'
              }`}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Vision</h3>
                    <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      To be the leading healthcare destination recognized for clinical excellence, innovation, and patient satisfaction in our region.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 transition-all duration-300 ${
                  isDark 
                    ? 'bg-emerald-500/15 border-emerald-500/30' 
                    : 'bg-emerald-100/70 border-emerald-300/60'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-emerald-600'}`}></div>
                  <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>OUR JOURNEY</span>
                </div>
                <h2 className={`text-5xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Built on Trust & Excellence</h2>
              </div>

              <p className={`text-lg leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Since 2010, Supreme Healthcare has grown from a single clinic to a multi-specialty healthcare center serving over 15,000 patients annually. Our journey is marked by continuous innovation, unwavering commitment to patient care, and the trust placed in us by our community.
              </p>

              <ul className="space-y-4">
                {[
                  'Multi-specialty departments with 25+ medical specialties',
                  'Cutting-edge diagnostic and treatment facilities',
                  'Team of 50+ highly qualified medical professionals',
                  '24/7 emergency services with rapid response team'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-600 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className={`font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CORE VALUES ============ */}
      <section className={`relative py-32 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950/50' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-emerald-500/5' : 'bg-emerald-200/20'}`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Core Values</h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Principles that guide every decision and every interaction
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Compassion', desc: 'Empathy at the heart of everything we do' },
              { icon: Award, title: 'Excellence', desc: 'Highest standards in care and service' },
              { icon: Users, title: 'Integrity', desc: 'Honest and transparent in all dealings' },
              { icon: TrendingUp, title: 'Innovation', desc: 'Embracing modern healthcare solutions' }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className={`group relative rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                    isDark 
                      ? 'bg-white/5 backdrop-blur-xl border-white/15' 
                      : 'bg-white/70 border-emerald-200/60'
                  }`}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-br from-emerald-500/10 to-cyan-500/10' 
                      : 'bg-gradient-to-br from-emerald-600/10 to-cyan-600/10'
                  }`}></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{value.title}</h3>
                    <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ ACHIEVEMENTS ============ */}
      <section className={`relative py-32 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-r from-emerald-100/30 to-cyan-100/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '14+', label: 'Years of Service', icon: Award },
              { number: '50+', label: 'Medical Experts', icon: Users },
              { number: '15K+', label: 'Happy Patients', icon: Heart },
              { number: '25+', label: 'Specialities', icon: TrendingUp }
            ].map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={idx}
                  className={`group rounded-2xl border p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    isDark 
                      ? 'bg-white/5 backdrop-blur-xl border-white/15' 
                      : 'bg-white/70 border-emerald-200/60'
                  }`}
                >
                  <Icon className={`w-12 h-12 mx-auto mb-4 group-hover:scale-125 transition-transform ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <p className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </p>
                  <p className={`font-semibold transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{achievement.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ TEAM HIGHLIGHTS ============ */}
      <section className={`relative py-32 transition-colors duration-300 ${isDark ? 'bg-slate-950/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Meet Our Team</h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Dedicated healthcare professionals committed to your wellness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: 'Chief Medical Officer', specialty: 'Cardiology', name: 'Dr. Rajesh Kumar', exp: '20+ Years' },
              { role: 'Director of Operations', specialty: 'General Surgery', name: 'Dr. Priya Singh', exp: '18+ Years' },
              { role: 'Lead Pathologist', specialty: 'Diagnostic Medicine', name: 'Dr. Amit Patel', exp: '15+ Years' }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className={`rounded-3xl border p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-4 ${
                  isDark 
                    ? 'bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 backdrop-blur-xl border-white/20' 
                    : 'bg-gradient-to-br from-emerald-100/60 to-cyan-100/60 border-emerald-200/60'
                }`}>
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{member.name}</h3>
                  <p className={`font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>{member.role}</p>
                  <p className={`text-sm mb-3 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{member.specialty}</p>
                  <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{member.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className={`relative py-24 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-emerald-600 to-cyan-600' : 'bg-gradient-to-r from-emerald-600 to-cyan-600'}`}>
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Experience Excellence?</h2>
          <p className="text-xl text-white/90 mb-12">
            Join thousands of satisfied patients who have trusted us with their healthcare
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all">
              <PhoneCall className="w-8 h-8 text-white mx-auto mb-4" />
              <p className="text-white font-semibold">+91-1234567890</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all">
              <Mail className="w-8 h-8 text-white mx-auto mb-4" />
              <p className="text-white font-semibold">info@healthplus.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all">
              <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
              <p className="text-white font-semibold">123 Healthcare Street</p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <PhoneCall className="w-5 h-5" />
            Book Your Appointment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes delay-animation {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animation-delay-2000 {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 2s infinite;
        }
        
        .animation-delay-4000 {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 4s infinite;
        }
      `}</style>
    </div>
    </Layout>
  );
}
