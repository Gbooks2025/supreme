// "use client";
// import { Heart, Stethoscope, Activity, Users, Pill, Award, Phone, MapPin, Mail, ArrowRight, Check, Zap } from 'lucide-react';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import Layout from '../../components/layout'

// export default function Services() {
//   const [isDark, setIsDark] = useState(true);
//   const [mounted, setMounted] = useState(false);
//   const [activeTab, setActiveTab] = useState('all');

//   useEffect(() => {
//     setMounted(true);
//     const updateTheme = () => {
//       const isDarkMode = document.documentElement.classList.contains('dark');
//       setIsDark(isDarkMode);
//     };

//     updateTheme();
//     window.addEventListener('storage', updateTheme);
    
//     const observer = new MutationObserver(updateTheme);
//     observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

//     return () => {
//       window.removeEventListener('storage', updateTheme);
//       observer.disconnect();
//     };
//   }, []);

//   if (!mounted) return null;

//   const services = [
//     {
//       icon: Heart,
//       title: 'Cardiology',
//       shortDesc: 'Heart & Cardiovascular Care',
//       fullDesc: 'Expert diagnosis and treatment of heart diseases using latest technology',
//       category: 'clinical',
//       features: ['ECG Testing', 'Echocardiography', 'Stress Testing', 'Cardiac Monitoring']
//     },
//     {
//       icon: Stethoscope,
//       title: 'General Medicine',
//       shortDesc: 'Primary Healthcare Services',
//       fullDesc: 'Comprehensive medical consultation and treatment for all ages',
//       category: 'clinical',
//       features: ['General Checkup', 'Chronic Care', 'Health Screening', 'Preventive Care']
//     },
//     {
//       icon: Activity,
//       title: 'Orthopedics',
//       shortDesc: 'Bone & Joint Specialists',
//       fullDesc: 'Treatment of musculoskeletal disorders and sports injuries',
//       category: 'clinical',
//       features: ['Fracture Care', 'Joint Surgery', 'Arthritis Treatment', 'Rehabilitation']
//     },
//     {
//       icon: Users,
//       title: 'Pediatrics',
//       shortDesc: 'Children\'s Health Care',
//       fullDesc: 'Specialized medical care for infants, children and adolescents',
//       category: 'clinical',
//       features: ['Health Checkup', 'Vaccinations', 'Growth Monitoring', 'Newborn Care']
//     },
//     {
//       icon: Pill,
//       title: 'Gynecology',
//       shortDesc: 'Women\'s Health Services',
//       fullDesc: 'Comprehensive reproductive and maternal health services',
//       category: 'clinical',
//       features: ['Antenatal Care', 'Delivery Services', 'Postnatal Care', 'Women\'s Wellness']
//     },
//     {
//       icon: Award,
//       title: 'Pathology',
//       shortDesc: 'Advanced Diagnostic Labs',
//       fullDesc: 'Accurate laboratory testing and analysis services',
//       category: 'diagnostic',
//       features: ['Blood Tests', 'Biochemistry', 'Microbiology', 'Quick Results']
//     },
//     {
//       icon: Zap,
//       title: 'Ultrasound',
//       shortDesc: 'Modern Imaging Services',
//       fullDesc: '2D/3D ultrasound imaging with digital technology',
//       category: 'diagnostic',
//       features: ['Abdominal Scan', '3D Imaging', 'Color Doppler', 'Digital Reports']
//     },
//     {
//       icon: Heart,
//       title: 'Ophthalmology',
//       shortDesc: 'Eye Care Specialist',
//       fullDesc: 'Complete eye examination and vision care services',
//       category: 'clinical',
//       features: ['Eye Exam', 'Vision Testing', 'Cataract Surgery', 'Glaucoma Care']
//     }
//   ];

//   const filteredServices = activeTab === 'all' ? services : services.filter(s => s.category === activeTab);

//   return (
//     <Layout>
//     <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
//       {/* ============ HERO SECTION ============ */}
//       <section className={`relative py-24 px-4 sm:px-6 lg:px-8 pt-32 transition-colors duration-300 ${isDark ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-200/20'}`}></div>
//           <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-200/20'}`}></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto text-center">
//           <h1 className={`text-6xl lg:text-7xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//             Our Services
//           </h1>
//           <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
//             Comprehensive healthcare solutions with expert doctors and modern technology
//           </p>
//         </div>
//       </section>

//       {/* ============ FILTER TABS ============ */}
//       <section className={`relative py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-wrap justify-center gap-3">
//             {[
//               { id: 'all', label: 'All Services' },
//               { id: 'clinical', label: 'Clinical' },
//               { id: 'diagnostic', label: 'Diagnostic' }
//             ].map(tab => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
//                   activeTab === tab.id
//                     ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg'
//                     : isDark
//                       ? 'bg-white/10 text-gray-300 hover:bg-white/20'
//                       : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============ SERVICES SHOWCASE ============ */}
//       <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filteredServices.map((service, idx) => {
//               const Icon = service.icon;
//               return (
//                 <div
//                   key={idx}
//                   className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:scale-105 ${
//                     isDark
//                       ? 'bg-gradient-to-br from-white/8 to-white/3 border-white/10 hover:border-emerald-500/50'
//                       : 'bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-emerald-400'
//                   }`}
//                 >
//                   {/* Hover Gradient Effect */}
//                   <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-gradient-to-br from-emerald-600/20 to-cyan-600/20' : 'bg-gradient-to-br from-emerald-600/10 to-cyan-600/10'}`}></div>

//                   <div className="relative z-10 p-8">
//                     {/* Icon */}
//                     <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-emerald-600 to-cyan-600 group-hover:scale-110 transition-transform duration-300`}>
//                       <Icon className="w-8 h-8 text-white" />
//                     </div>

//                     {/* Content */}
//                     <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//                       {service.title}
//                     </h3>
//                     <p className={`text-sm transition-colors duration-300 mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
//                       {service.shortDesc}
//                     </p>
                    
//                     {/* Features Mini List */}
//                     <div className="space-y-2 mb-6">
//                       {service.features.slice(0, 2).map((feature, i) => (
//                         <div key={i} className="flex items-center gap-2">
//                           <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600"></div>
//                           <span className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
//                             {feature}
//                           </span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Link */}
//                     <a href="#" className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all duration-300">
//                       Learn More
//                       <ArrowRight className="w-4 h-4" />
//                     </a>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ============ FULL SERVICES LIST ============ */}
//       <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
//         <div className="max-w-7xl mx-auto">
//           <h2 className={`text-5xl font-black text-center mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//             Complete Service Overview
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {filteredServices.map((service, idx) => {
//               const Icon = service.icon;
//               return (
//                 <div
//                   key={idx}
//                   className={`group rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
//                     isDark
//                       ? 'bg-white/5 border-white/10 hover:border-emerald-500/50 hover:bg-white/10'
//                       : 'bg-white border-gray-200 hover:border-emerald-400 shadow-sm hover:shadow-md'
//                   }`}
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-emerald-600 to-cyan-600 group-hover:scale-110 transition-transform">
//                       <Icon className="w-7 h-7 text-white" />
//                     </div>

//                     <div className="flex-1">
//                       <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//                         {service.title}
//                       </h3>
//                       <p className={`transition-colors duration-300 mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
//                         {service.fullDesc}
//                       </p>

//                       {/* Features */}
//                       <div className="grid grid-cols-2 gap-3">
//                         {service.features.map((feature, i) => (
//                           <div key={i} className="flex items-center gap-2">
//                             <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
//                             <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
//                               {feature}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ============ QUICK STATS ============ */}
//       <section className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { label: 'Services', value: '8+' },
//               { label: 'Expert Doctors', value: '50+' },
//               { label: 'Happy Patients', value: '15K+' },
//               { label: 'Years Experience', value: '14+' }
//             ].map((stat, idx) => (
//               <div key={idx} className="text-center">
//                 <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">
//                   {stat.value}
//                 </p>
//                 <p className={`font-semibold transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============ CTA SECTION ============ */}
//       <section className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-emerald-600 to-cyan-600' : 'bg-gradient-to-r from-emerald-600 to-cyan-600'}`}>
//         <div className="absolute inset-0">
//           <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-4xl mx-auto text-center">
//           <h2 className="text-5xl font-black text-white mb-8">Ready to Get Quality Healthcare?</h2>
//           <p className="text-xl text-white/90 mb-12">
//             Choose our expert services and experience the difference in your health journey
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/"
//               className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-lg"
//             >
//               <Phone className="w-5 h-5" />
//               Book Now
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <a
//               href="tel:+919876543210"
//               className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
//             >
//               <Phone className="w-5 h-5" />
//               Emergency Call
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//     </Layout>
//   );
// }



// "use client";
// import { Heart, Stethoscope, Activity, Users, Pill, Award, Phone, MapPin, Mail, ArrowRight, Check, Zap } from 'lucide-react';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import Layout from '../../components/layout'

// export default function Services() {
//   const [isDark, setIsDark] = useState(true);
//   const [mounted, setMounted] = useState(false);
//   const [activeTab, setActiveTab] = useState('all');

//   useEffect(() => {
//     setMounted(true);
//     const updateTheme = () => {
//       const isDarkMode = document.documentElement.classList.contains('dark');
//       setIsDark(isDarkMode);
//     };

//     updateTheme();
//     window.addEventListener('storage', updateTheme);
    
//     const observer = new MutationObserver(updateTheme);
//     observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

//     return () => {
//       window.removeEventListener('storage', updateTheme);
//       observer.disconnect();
//     };
//   }, []);

//   if (!mounted) return null;

//   const services = [
//     {
//       icon: Heart,
//       title: 'Cardiology',
//       shortDesc: 'Heart & Cardiovascular Care',
//       fullDesc: 'Expert diagnosis and treatment of heart diseases using latest technology',
//       category: 'clinical',
//       features: ['ECG Testing', 'Echocardiography', 'Stress Testing', 'Cardiac Monitoring'],
//       route: '/services/cardiology'
//     },
//     {
//       icon: Stethoscope,
//       title: 'General Medicine',
//       shortDesc: 'Primary Healthcare Services',
//       fullDesc: 'Comprehensive medical consultation and treatment for all ages',
//       category: 'clinical',
//       features: ['General Checkup', 'Chronic Care', 'Health Screening', 'Preventive Care'],
//       route: '/services/general-medicine'
//     },
//     {
//       icon: Activity,
//       title: 'Orthopedics',
//       shortDesc: 'Bone & Joint Specialists',
//       fullDesc: 'Treatment of musculoskeletal disorders and sports injuries',
//       category: 'clinical',
//       features: ['Fracture Care', 'Joint Surgery', 'Arthritis Treatment', 'Rehabilitation'],
//       route: '/services/orthopedics'
//     },
//     {
//       icon: Users,
//       title: 'Pediatrics',
//       shortDesc: 'Children\'s Health Care',
//       fullDesc: 'Specialized medical care for infants, children and adolescents',
//       category: 'clinical',
//       features: ['Health Checkup', 'Vaccinations', 'Growth Monitoring', 'Newborn Care'],
//       route: '/services/pediatrics'
//     },
//     {
//       icon: Pill,
//       title: 'Gynecology',
//       shortDesc: 'Women\'s Health Services',
//       fullDesc: 'Comprehensive reproductive and maternal health services',
//       category: 'clinical',
//       features: ['Antenatal Care', 'Delivery Services', 'Postnatal Care', 'Women\'s Wellness'],
//       route: '/services/gynecology'
//     },
//     {
//       icon: Award,
//       title: 'Pathology',
//       shortDesc: 'Advanced Diagnostic Labs',
//       fullDesc: 'Accurate laboratory testing and analysis services',
//       category: 'diagnostic',
//       features: ['Blood Tests', 'Biochemistry', 'Microbiology', 'Quick Results'],
//       route: '/services/pathology'
//     },
//     {
//       icon: Zap,
//       title: 'Ultrasound',
//       shortDesc: 'Modern Imaging Services',
//       fullDesc: '2D/3D ultrasound imaging with digital technology',
//       category: 'diagnostic',
//       features: ['Abdominal Scan', '3D Imaging', 'Color Doppler', 'Digital Reports'],
//       route: '/services/ultrasound'
//     },
//     {
//       icon: Heart,
//       title: 'Ophthalmology',
//       shortDesc: 'Eye Care Specialist',
//       fullDesc: 'Complete eye examination and vision care services',
//       category: 'clinical',
//       features: ['Eye Exam', 'Vision Testing', 'Cataract Surgery', 'Glaucoma Care'],
//       route: '/services/ophthalmology'
//     }
//   ];

//   const filteredServices = activeTab === 'all' ? services : services.filter(s => s.category === activeTab);

//   return (
//     <Layout>
//     <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
//       {/* ============ HERO SECTION ============ */}
//       <section className={`relative py-24 px-4 sm:px-6 lg:px-8 pt-32 transition-colors duration-300 ${isDark ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-200/20'}`}></div>
//           <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-200/20'}`}></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto text-center">
//           <h1 className={`text-6xl lg:text-7xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//             Our Services
//           </h1>
//           <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
//             Comprehensive healthcare solutions with expert doctors and modern technology
//           </p>
//         </div>
//       </section>

//       {/* ============ FILTER TABS ============ */}
//       <section className={`relative py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-wrap justify-center gap-3">
//             {[
//               { id: 'all', label: 'All Services' },
//               { id: 'clinical', label: 'Clinical' },
//               { id: 'diagnostic', label: 'Diagnostic' }
//             ].map(tab => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
//                   activeTab === tab.id
//                     ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg'
//                     : isDark
//                       ? 'bg-white/10 text-gray-300 hover:bg-white/20'
//                       : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============ SERVICES SHOWCASE ============ */}
//       <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filteredServices.map((service, idx) => {
//               const Icon = service.icon;
//               return (
//                 <Link
//                   key={idx}
//                   href={service.route}
//                   className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
//                     isDark
//                       ? 'bg-gradient-to-br from-white/8 to-white/3 border-white/10 hover:border-emerald-500/50'
//                       : 'bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-emerald-400'
//                   }`}
//                 >
//                   {/* Hover Gradient Effect */}
//                   <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-gradient-to-br from-emerald-600/20 to-cyan-600/20' : 'bg-gradient-to-br from-emerald-600/10 to-cyan-600/10'}`}></div>

//                   <div className="relative z-10 p-8">
//                     {/* Icon */}
//                     <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-emerald-600 to-cyan-600 group-hover:scale-110 transition-transform duration-300`}>
//                       <Icon className="w-8 h-8 text-white" />
//                     </div>

//                     {/* Content */}
//                     <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//                       {service.title}
//                     </h3>
//                     <p className={`text-sm transition-colors duration-300 mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
//                       {service.shortDesc}
//                     </p>
                    
//                     {/* Features Mini List */}
//                     <div className="space-y-2 mb-6">
//                       {service.features.slice(0, 2).map((feature, i) => (
//                         <div key={i} className="flex items-center gap-2">
//                           <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600"></div>
//                           <span className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
//                             {feature}
//                           </span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Link */}
//                     <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all duration-300">
//                       Learn More
//                       <ArrowRight className="w-4 h-4" />
//                     </div>
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ============ FULL SERVICES LIST ============ */}
//       <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
//         <div className="max-w-7xl mx-auto">
//           <h2 className={`text-5xl font-black text-center mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//             Complete Service Overview
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {filteredServices.map((service, idx) => {
//               const Icon = service.icon;
//               return (
//                 <Link
//                   key={idx}
//                   href={service.route}
//                   className={`group rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
//                     isDark
//                       ? 'bg-white/5 border-white/10 hover:border-emerald-500/50 hover:bg-white/10'
//                       : 'bg-white border-gray-200 hover:border-emerald-400 shadow-sm hover:shadow-md'
//                   }`}
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-emerald-600 to-cyan-600 group-hover:scale-110 transition-transform">
//                       <Icon className="w-7 h-7 text-white" />
//                     </div>

//                     <div className="flex-1">
//                       <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//                         {service.title}
//                       </h3>
//                       <p className={`transition-colors duration-300 mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
//                         {service.fullDesc}
//                       </p>

//                       {/* Features */}
//                       <div className="grid grid-cols-2 gap-3">
//                         {service.features.map((feature, i) => (
//                           <div key={i} className="flex items-center gap-2">
//                             <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
//                             <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
//                               {feature}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ============ QUICK STATS ============ */}
//       <section className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { label: 'Services', value: '8+' },
//               { label: 'Expert Doctors', value: '50+' },
//               { label: 'Happy Patients', value: '15K+' },
//               { label: 'Years Experience', value: '14+' }
//             ].map((stat, idx) => (
//               <div key={idx} className="text-center">
//                 <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">
//                   {stat.value}
//                 </p>
//                 <p className={`font-semibold transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============ CTA SECTION ============ */}
//       <section className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-emerald-600 to-cyan-600' : 'bg-gradient-to-r from-emerald-600 to-cyan-600'}`}>
//         <div className="absolute inset-0">
//           <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-4xl mx-auto text-center">
//           <h2 className="text-5xl font-black text-white mb-8">Ready to Get Quality Healthcare?</h2>
//           <p className="text-xl text-white/90 mb-12">
//             Choose our expert services and experience the difference in your health journey
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/"
//               className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-lg"
//             >
//               <Phone className="w-5 h-5" />
//               Book Now
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <a
//               href="tel:+919876543210"
//               className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
//             >
//               <Phone className="w-5 h-5" />
//               Emergency Call
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//     </Layout>
//   );
// }


"use client";
import { Heart, Stethoscope, Activity, Users, Pill, Award, Phone, MapPin, Mail, ArrowRight, Check, Zap, Droplets, Ear, Sparkles, CircleDot, Brain, Smile, Scissors, HeartHandshake, Dumbbell, Droplet } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../components/layout'

export default function Services() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

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

  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      shortDesc: 'Heart & Cardiovascular Care',
      fullDesc: 'Expert diagnosis and treatment of heart diseases using latest technology',
      category: 'clinical',
      features: ['ECG Testing', 'Echocardiography', 'Stress Testing', 'Cardiac Monitoring'],
      route: '/services/cardiology'
    },
    {
      icon: Activity,
      title: 'Cardiac Diagnostic Clinic',
      shortDesc: 'Advanced Cardiac Testing',
      fullDesc: 'Comprehensive cardiac diagnostic services with state-of-the-art equipment',
      category: 'diagnostic',
      features: ['ECG/EKG', 'Holter Monitoring', '2D Echo', 'Stress Tests'],
      route: '/services/cardiac-diagnostic-clinic'
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      shortDesc: 'Primary Healthcare Services',
      fullDesc: 'Comprehensive medical consultation and treatment for all ages',
      category: 'clinical',
      features: ['General Checkup', 'Chronic Care', 'Health Screening', 'Preventive Care'],
      route: '/services/general-medicine'
    },
    {
      icon: Users,
      title: 'Gynecology',
      shortDesc: 'Women\'s Health Services',
      fullDesc: 'Comprehensive reproductive and maternal health services',
      category: 'clinical',
      features: ['Antenatal Care', 'Delivery Services', 'Postnatal Care', 'Women\'s Wellness'],
      route: '/services/gynecology'
    },
    {
      icon: Activity,
      title: 'Pediatrics',
      shortDesc: 'Children\'s Health Care',
      fullDesc: 'Specialized medical care for infants, children and adolescents',
      category: 'clinical',
      features: ['Health Checkup', 'Vaccinations', 'Growth Monitoring', 'Newborn Care'],
      route: '/services/pediatrics'
    },
    {
      icon: Stethoscope,
      title: 'Orthopedics',
      shortDesc: 'Bone & Joint Specialists',
      fullDesc: 'Treatment of musculoskeletal disorders and sports injuries',
      category: 'clinical',
      features: ['Fracture Care', 'Joint Surgery', 'Arthritis Treatment', 'Rehabilitation'],
      route: '/services/orthopedics'
    },
    {
      icon: Droplet,
      title: 'Nephrology',
      shortDesc: 'Kidney Disease Treatment',
      fullDesc: 'Expert kidney care including dialysis and chronic kidney disease management',
      category: 'clinical',
      features: ['Dialysis Services', 'CKD Management', 'Kidney Biopsy', 'Transplant Care'],
      route: '/services/nephrology'
    },
    {
      icon: Ear,
      title: 'ENT',
      shortDesc: 'Ear, Nose & Throat Care',
      fullDesc: 'Complete ENT services with advanced endoscopic procedures',
      category: 'clinical',
      features: ['Endoscopy', 'Hearing Tests', 'Tonsillectomy', 'Sinus Surgery'],
      route: '/services/ent'
    },
    {
      icon: Droplets,
      title: 'Diabetic Clinic',
      shortDesc: 'Diabetes Management',
      fullDesc: 'Comprehensive diabetes care with HbA1c monitoring and insulin therapy',
      category: 'clinical',
      features: ['HbA1c Testing', 'Insulin Therapy', 'Diet Counseling', 'Complications Care'],
      route: '/services/diabetic-clinic'
    },
    {
      icon: Sparkles,
      title: 'Dermatology',
      shortDesc: 'Skin Care & Treatment',
      fullDesc: 'Medical and cosmetic dermatology with laser therapy',
      category: 'clinical',
      features: ['Skin Treatment', 'Laser Therapy', 'Cosmetic Procedures', 'Acne Care'],
      route: '/services/dermatology'
    },
    {
      icon: Activity,
      title: 'Ophthalmology',
      shortDesc: 'Eye Care Specialist',
      fullDesc: 'Complete eye examination and vision care services',
      category: 'clinical',
      features: ['Eye Exam', 'Vision Testing', 'Cataract Surgery', 'Glaucoma Care'],
      route: '/services/ophthalmology'
    },
    {
      icon: CircleDot,
      title: 'Gastroenterology',
      shortDesc: 'Digestive System Care',
      fullDesc: 'Advanced endoscopy and treatment for digestive disorders',
      category: 'clinical',
      features: ['Endoscopy', 'Colonoscopy', 'Liver Care', 'GERD Treatment'],
      route: '/services/gastroenterology'
    },
    {
      icon: Brain,
      title: 'Neurology',
      shortDesc: 'Brain & Nerve Care',
      fullDesc: 'Expert neurological care for stroke, epilepsy and brain disorders',
      category: 'clinical',
      features: ['Stroke Care', 'Epilepsy Treatment', 'EEG Testing', 'Parkinson\'s Care'],
      route: '/services/neurology'
    },
    {
      icon: Award,
      title: 'Pathology',
      shortDesc: 'Advanced Diagnostic Labs',
      fullDesc: 'Accurate laboratory testing and analysis services',
      category: 'diagnostic',
      features: ['Blood Tests', 'Biochemistry', 'Microbiology', 'Quick Results'],
      route: '/services/pathology'
    },
    {
      icon: Smile,
      title: 'Dental',
      shortDesc: 'Comprehensive Dental Care',
      fullDesc: 'Complete dental services from cleanings to implants',
      category: 'clinical',
      features: ['Dental Checkup', 'Root Canal', 'Dental Implants', 'Orthodontics'],
      route: '/services/dental'
    },
    {
      icon: Scissors,
      title: 'General Surgery',
      shortDesc: 'Surgical Procedures',
      fullDesc: 'Advanced laparoscopic and general surgery services',
      category: 'clinical',
      features: ['Laparoscopy', 'Hernia Repair', 'Appendectomy', 'Gallbladder Surgery'],
      route: '/services/general-surgery'
    },
    {
      icon: HeartHandshake,
      title: 'Psychiatry',
      shortDesc: 'Mental Health Care',
      fullDesc: 'Professional psychiatric treatment and counseling services',
      category: 'clinical',
      features: ['Depression Care', 'Anxiety Treatment', 'Counseling', 'Medication Management'],
      route: '/services/psychiatry'
    },
    {
      icon: Dumbbell,
      title: 'Physiotherapy',
      shortDesc: 'Physical Rehabilitation',
      fullDesc: 'Expert physiotherapy for pain relief and injury recovery',
      category: 'clinical',
      features: ['Exercise Therapy', 'Manual Therapy', 'Sports Injury', 'Pain Management'],
      route: '/services/physiotherapy'
    }
  ];

  const filteredServices = activeTab === 'all' ? services : services.filter(s => s.category === activeTab);

  return (
    <Layout>
    <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      {/* ============ HERO SECTION ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 pt-32 transition-colors duration-300 ${isDark ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
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
            <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-emerald-600'}`}></div>
            <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>ALL DEPARTMENTS</span>
          </div>
          <h1 className={`text-6xl lg:text-7xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Our Services
          </h1>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Comprehensive healthcare solutions with 18+ specialized departments and expert doctors
          </p>
        </div>
      </section>

      {/* ============ FILTER TABS ============ */}
      <section className={`relative py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'clinical', label: 'Clinical' },
              { id: 'diagnostic', label: 'Diagnostic' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg'
                    : isDark
                      ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES SHOWCASE ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link
                  key={idx}
                  href={service.route}
                  className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isDark
                      ? 'bg-gradient-to-br from-white/8 to-white/3 border-white/10 hover:border-emerald-500/50'
                      : 'bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-emerald-400'
                  }`}
                >
                  {/* Hover Gradient Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-gradient-to-br from-emerald-600/20 to-cyan-600/20' : 'bg-gradient-to-br from-emerald-600/10 to-cyan-600/10'}`}></div>

                  <div className="relative z-10 p-6">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br from-emerald-600 to-cyan-600 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {service.shortDesc}
                    </p>
                    
                    {/* Features Mini List */}
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 2).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600"></div>
                          <span className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FULL SERVICES LIST ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black text-center mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Complete Service Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link
                  key={idx}
                  href={service.route}
                  className={`group rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                    isDark
                      ? 'bg-white/5 border-white/10 hover:border-emerald-500/50 hover:bg-white/10'
                      : 'bg-white border-gray-200 hover:border-emerald-400 shadow-sm hover:shadow-md'
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
                      <p className={`transition-colors duration-300 mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {service.fullDesc}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ QUICK STATS ============ */}
      <section className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Departments', value: '18+' },
              { label: 'Expert Doctors', value: '50+' },
              { label: 'Happy Patients', value: '15K+' },
              { label: 'Years Experience', value: '20+' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className={`font-semibold transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-emerald-600 to-cyan-600' : 'bg-gradient-to-r from-emerald-600 to-cyan-600'}`}>
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-8">Ready to Get Quality Healthcare?</h2>
          <p className="text-xl text-white/90 mb-12">
            Choose from our 18+ specialized departments and experience expert medical care
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-lg"
            >
              <Phone className="w-5 h-5" />
              Book Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
            >
              <Phone className="w-5 h-5" />
              Emergency Call
            </a>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
