// "use client";
// import { 
//   ArrowRight, Check, Heart, Stethoscope, Users, Clock, MapPin, Phone, 
//   Pill, Activity, Zap, Award, Calendar, MessageCircle, Star
// } from 'lucide-react';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import Layout from '../components/layout'

// export default function Home() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <Layout>
//     <div className="bg-white overflow-hidden">
//       {/* ============ HERO SECTION ============ */}
//       <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
//         {/* Animated Background */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
//           <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-200/50 mb-6">
//               <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></div>
//               <span className="text-sm font-semibold text-emerald-700">
//                 Comprehensive Healthcare Solutions
//               </span>
//             </div>

//             {/* Headline */}
//             <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//               Your Health,
//               <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
//                 Our Priority
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-md">
//               Providing world-class healthcare services with experienced doctors, modern facilities, and compassionate care for you and your family.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-12">
//               <Link
//                 href="/"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
//               >
//                 <Calendar className="w-5 h-5" />
//                 Book Appointment
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </Link>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300 group"
//               >
//                 Contact Us
//                 <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-6">
//               <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
//                 <p className="text-3xl font-bold text-emerald-600">15K+</p>
//                 <p className="text-sm text-gray-600 mt-1">Patients Served</p>
//               </div>
//               <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
//                 <p className="text-3xl font-bold text-emerald-600">50+</p>
//                 <p className="text-sm text-gray-600 mt-1">Expert Doctors</p>
//               </div>
//               <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
//                 <p className="text-3xl font-bold text-emerald-600">25+</p>
//                 <p className="text-sm text-gray-600 mt-1">Specialties</p>
//               </div>
//             </div>
//           </div>

//           {/* Right - Feature Cards */}
//           <div className={`relative h-full hidden lg:flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
//             {/* Card 1 */}
//             <div className="absolute top-0 left-0 w-72 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100/50 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
//               <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
//                 <Stethoscope className="w-7 h-7 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Doctors</h3>
//               <p className="text-gray-600 text-sm">Highly qualified specialists with years of experience</p>
//             </div>

//             {/* Card 2 */}
//             <div className="absolute top-32 right-0 w-72 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100/50 hover:shadow-3xl transition-all duration-300 hover:translate-y-2 delay-75">
//               <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
//                 <Activity className="w-7 h-7 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Equipment</h3>
//               <p className="text-gray-600 text-sm">State-of-the-art medical facilities and technology</p>
//             </div>

//             {/* Card 3 */}
//             <div className="absolute -bottom-20 left-12 w-72 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100/50 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 delay-150">
//               <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
//                 <Clock className="w-7 h-7 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Emergency</h3>
//               <p className="text-gray-600 text-sm">Round-the-clock emergency care services</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============ SERVICES SECTION ============ */}
//       <section className="relative py-24 bg-gradient-to-b from-white via-emerald-50/20 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-200/50 mb-4">
//               <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
//               <span className="text-sm font-semibold text-emerald-700">OUR SERVICES</span>
//             </div>
//             <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//               Comprehensive Healthcare Services
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               From general consultation to specialized treatments, we offer a wide range of medical services
//             </p>
//           </div>

//           {/* Services Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Heart,
//                 title: 'Cardiology',
//                 description: 'Advanced heart and cardiovascular care with latest technology'
//               },
//               {
//                 icon: Pill,
//                 title: 'General Medicine',
//                 description: 'Comprehensive primary healthcare and treatment'
//               },
//               {
//                 icon: Stethoscope,
//                 title: 'Orthopedics',
//                 description: 'Bone, joint and muscle disorder treatment'
//               },
//               {
//                 icon: Activity,
//                 title: 'Pediatrics',
//                 description: 'Specialized care for children and infants'
//               },
//               {
//                 icon: Users,
//                 title: 'Gynecology',
//                 description: 'Womens health and maternal care services'
//               },
//               {
//                 icon: Award,
//                 title: 'Pathology',
//                 description: 'Complete diagnostic and lab testing facilities'
//               }
//             ].map((service, index) => {
//               const Icon = service.icon;
//               return (
//                 <div
//                   key={index}
//                   className="group relative bg-white rounded-2xl p-8 border border-gray-200/50 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
//                 >
//                   {/* Background Glow */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                   {/* Content */}
//                   <div className="relative z-10">
//                     <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                       <Icon className="w-7 h-7 text-white" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">
//                       {service.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed mb-4">
//                       {service.description}
//                     </p>
//                     <Link
//                       href={`/services/${service.title.toLowerCase()}`}
//                       className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all duration-300"
//                     >
//                       Learn More
//                       <ArrowRight className="w-4 h-4" />
//                     </Link>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ============ WHY CHOOSE US SECTION ============ */}
//       <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
//         {/* Background */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-200/50 mb-4">
//               <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
//               <span className="text-sm font-semibold text-emerald-700">WHY CHOOSE US</span>
//             </div>
//             <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//               What Makes Us Different
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               We combine medical excellence with compassionate care to provide the best healthcare experience
//             </p>
//           </div>

//           {/* Features Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: Award,
//                 title: 'Certified Specialists',
//                 description: 'All doctors are board-certified with international qualifications'
//               },
//               {
//                 icon: Zap,
//                 title: 'Quick Diagnosis',
//                 description: 'Advanced diagnostic tools for fast and accurate results'
//               },
//               {
//                 icon: Clock,
//                 title: '24/7 Availability',
//                 description: 'Always open for emergency and urgent medical needs'
//               },
//               {
//                 icon: Heart,
//                 title: 'Patient Care',
//                 description: 'Personalized treatment plans tailored to your needs'
//               },
//               {
//                 icon: MapPin,
//                 title: 'Multiple Locations',
//                 description: 'Conveniently located clinics across the city'
//               },
//               {
//                 icon: MessageCircle,
//                 title: 'Telehealth',
//                 description: 'Online consultation available for your convenience'
//               },
//               {
//                 icon: Activity,
//                 title: 'Follow-up Care',
//                 description: 'Comprehensive post-treatment monitoring and support'
//               },
//               {
//                 icon: Users,
//                 title: 'Experienced Team',
//                 description: '20+ years of collective healthcare excellence'
//               }
//             ].map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <div
//                   key={index}
//                   className="group relative bg-white rounded-2xl p-8 border border-gray-200/50 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
//                 >
//                   {/* Background Glow */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                   {/* Content */}
//                   <div className="relative z-10">
//                     <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                       <Icon className="w-7 h-7 text-white" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Bottom CTA */}
//           <div className="mt-16 text-center">
//             <p className="text-lg text-gray-600 mb-6">
//               Ready to book your appointment with our experts?
//             </p>
//             <Link
//               href="/"
//               className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
//             >
//               <Calendar className="w-5 h-5" />
//               Schedule Appointment
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Custom CSS */}
//       <style jsx>{`
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

//         .delay-75 {
//           animation-delay: 75ms;
//         }

//         .delay-150 {
//           animation-delay: 150ms;
//         }
//       `}</style>
//     </div>
//     </Layout>
//   );
// }


// "use client";
// import HeroCarousel from '../components/herocarousel';
// import { ArrowRight, Heart, Stethoscope, Users, Clock, Pill, Activity, Zap, Award, Calendar, MessageCircle } from 'lucide-react';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import Layout from '../components/layout'

// export default function Home() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <Layout>
//     <div className="bg-white overflow-hidden">
//       {/* Hero Carousel */}
//       <HeroCarousel />

//       {/* ============ SERVICES SECTION ============ */}
//       <section className="relative py-24 bg-gradient-to-b from-white via-emerald-50/20 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-200/50 mb-4">
//               <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
//               <span className="text-sm font-semibold text-emerald-700">OUR SERVICES</span>
//             </div>
//             <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//               Comprehensive Healthcare Services
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               From general consultation to specialized treatments, we offer a wide range of medical services
//             </p>
//           </div>

//           {/* Services Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Heart,
//                 title: 'Cardiology',
//                 description: 'Advanced heart and cardiovascular care with latest technology'
//               },
//               {
//                 icon: Pill,
//                 title: 'General Medicine',
//                 description: 'Comprehensive primary healthcare and treatment'
//               },
//               {
//                 icon: Stethoscope,
//                 title: 'Orthopedics',
//                 description: 'Bone, joint and muscle disorder treatment'
//               },
//               {
//                 icon: Activity,
//                 title: 'Pediatrics',
//                 description: 'Specialized care for children and infants'
//               },
//               {
//                 icon: Users,
//                 title: 'Gynecology',
//                 description: 'Womens health and maternal care services'
//               },
//               {
//                 icon: Award,
//                 title: 'Pathology',
//                 description: 'Complete diagnostic and lab testing facilities'
//               }
//             ].map((service, index) => {
//               const Icon = service.icon;
//               return (
//                 <div
//                   key={index}
//                   className="group relative bg-white rounded-2xl p-8 border border-gray-200/50 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                   <div className="relative z-10">
//                     <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                       <Icon className="w-7 h-7 text-white" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">
//                       {service.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed mb-4">
//                       {service.description}
//                     </p>
//                     <Link
//                       href={`/services/${service.title.toLowerCase()}`}
//                       className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all duration-300"
//                     >
//                       Learn More
//                       <ArrowRight className="w-4 h-4" />
//                     </Link>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ============ WHY CHOOSE US SECTION ============ */}
//       <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-200/50 mb-4">
//               <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
//               <span className="text-sm font-semibold text-emerald-700">WHY CHOOSE US</span>
//             </div>
//             <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//               What Makes Us Different
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               We combine medical excellence with compassionate care to provide the best healthcare experience
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { icon: Award, title: 'Certified Specialists', description: 'All doctors are board-certified with international qualifications' },
//               { icon: Zap, title: 'Quick Diagnosis', description: 'Advanced diagnostic tools for fast and accurate results' },
//               { icon: Clock, title: '24/7 Availability', description: 'Always open for emergency and urgent medical needs' },
//               { icon: Heart, title: 'Patient Care', description: 'Personalized treatment plans tailored to your needs' },
//             ].map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <div
//                   key={index}
//                   className="group relative bg-white rounded-2xl p-8 border border-gray-200/50 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                   <div className="relative z-10">
//                     <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                       <Icon className="w-7 h-7 text-white" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="mt-16 text-center">
//             <p className="text-lg text-gray-600 mb-6">
//               Ready to book your appointment with our experts?
//             </p>
//             <Link
//               href="/"
//               className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
//             >
//               <Calendar className="w-5 h-5" />
//               Schedule Appointment
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   </Layout>
//   );
// }


// "use client";
// import HeroCarousel from '../components/herocarousel';
// import { ArrowRight, Heart, Stethoscope, Users, Clock, Pill, Activity, Zap, Award, Calendar } from 'lucide-react';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import Layout from '../components/layout'
// export default function Home() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isDark, setIsDark] = useState(true);
//   const [mounted, setMounted] = useState(false);

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

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <Layout>
//       <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-white'}`}>
//         {/* Hero Carousel */}
//         <HeroCarousel />

//         {/* ============ SERVICES SECTION ============ */}
//         <section className={`relative py-24 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-b from-white via-emerald-50/40 to-white'}`}>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             {/* Section Header */}
//             <div className="text-center mb-16">
//               <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-4 transition-all duration-300 ${isDark
//                   ? 'bg-emerald-500/15 border-emerald-500/30'
//                   : 'bg-emerald-100/70 border-emerald-300/60'
//                 }`}>
//                 <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-emerald-600'}`}></div>
//                 <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>OUR SERVICES</span>
//               </div>
//               <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//                 Comprehensive Healthcare Services
//               </h2>
//               <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
//                 From general consultation to specialized treatments, we offer a wide range of medical services
//               </p>
//             </div>

//             {/* Services Grid */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: Heart,
//                   title: 'Cardiology',
//                   description: 'Advanced heart and cardiovascular care with latest technology'
//                 },
//                 {
//                   icon: Activity,
//                   title: 'Cardiac Diagnostic Clinic',
//                   description: 'Comprehensive cardiac testing including ECG, Echo, and stress tests'
//                 },
//                 {
//                   icon: Stethoscope,
//                   title: 'General Medicine',
//                   description: 'Comprehensive primary healthcare and treatment'
//                 },
//                 {
//                   icon: Users,
//                   title: 'Gynecology',
//                   description: 'Womens health and maternal care services'
//                 },
//                 {
//                   icon: Activity,
//                   title: 'Pediatrics',
//                   description: 'Specialized care for children and infants'
//                 },
//                 {
//                   icon: Stethoscope,
//                   title: 'Orthopedics',
//                   description: 'Bone, joint and muscle disorder treatment'
//                 },
//                 {
//                   icon: Heart,
//                   title: 'Nephrology',
//                   description: 'Kidney disease treatment and dialysis services'
//                 },
//                 {
//                   icon: Activity,
//                   title: 'ENT',
//                   description: 'Ear, nose, and throat specialist care'
//                 },
//                 {
//                   icon: Pill,
//                   title: 'Diabetic Clinic',
//                   description: 'Diabetes management and endocrinology services'
//                 },
//                 {
//                   icon: Stethoscope,
//                   title: 'Dermatology',
//                   description: 'Skin care and treatment for dermatological conditions'
//                 },
//                 {
//                   icon: Activity,
//                   title: 'Ophthalmology',
//                   description: 'Eye care and vision correction services'
//                 },
//                 {
//                   icon: Heart,
//                   title: 'Gastroenterology',
//                   description: 'Digestive system and liver disorder treatment'
//                 },
//                 {
//                   icon: Stethoscope,
//                   title: 'Neurology',
//                   description: 'Brain and nervous system disorder care'
//                 },
//                 {
//                   icon: Award,
//                   title: 'Pathology',
//                   description: 'Complete diagnostic and lab testing facilities'
//                 },
//                 {
//                   icon: Activity,
//                   title: 'Dental',
//                   description: 'Comprehensive dental care and oral health services'
//                 },
//                 {
//                   icon: Pill,
//                   title: 'General Surgery',
//                   description: 'Surgical procedures and post-operative care'
//                 },
//                 {
//                   icon: Heart,
//                   title: 'Psychiatry',
//                   description: 'Mental health counseling and psychiatric treatment'
//                 },
//                 {
//                   icon: Stethoscope,
//                   title: 'Physiotherapy',
//                   description: 'Physical rehabilitation and pain management therapy'
//                 }
//               ].map((service, index) => {
//                 const Icon = service.icon;
//                 return (
//                   <div
//                     key={index}
//                     className={`group relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${isDark
//                         ? 'bg-white/5 border-white/10 hover:border-emerald-500/50 hover:bg-white/10 shadow-sm'
//                         : 'bg-white border-gray-200/50 hover:border-emerald-200 shadow-sm hover:shadow-xl'
//                       }`}
//                   >
//                     <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark
//                         ? 'bg-gradient-to-br from-emerald-500/10 to-cyan-500/10'
//                         : 'bg-gradient-to-br from-emerald-500/5 to-cyan-500/5'
//                       }`}></div>

//                     <div className="relative z-10">
//                       <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                         <Icon className="w-7 h-7 text-white" />
//                       </div>
//                       <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//                         {service.title}
//                       </h3>
//                       <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
//                         {service.description}
//                       </p>
//                       <Link
//                         href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
//                         className={`inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300 ${isDark
//                             ? 'text-emerald-400 hover:text-emerald-300'
//                             : 'text-emerald-600 hover:text-emerald-700'
//                           }`}
//                       >
//                         Learn More
//                         <ArrowRight className="w-4 h-4" />
//                       </Link>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//           </div>
//         </section>

//         {/* ============ WHY CHOOSE US SECTION ============ */}
//         <section className={`relative py-24 transition-colors duration-300 ${isDark ? 'bg-slate-950/50' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
//           <div className="absolute inset-0 overflow-hidden">
//             <div className={`absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-emerald-500/5' : 'bg-emerald-200/20'}`}></div>
//           </div>

//           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-4 transition-all duration-300 ${isDark
//                   ? 'bg-emerald-500/15 border-emerald-500/30'
//                   : 'bg-emerald-100/70 border-emerald-300/60'
//                 }`}>
//                 <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-emerald-600'}`}></div>
//                 <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>WHY CHOOSE US</span>
//               </div>
//               <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//                 What Makes Us Different
//               </h2>
//               <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
//                 We combine medical excellence with compassionate care to provide the best healthcare experience
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[
//                 { icon: Award, title: 'Certified Specialists', description: 'All doctors are board-certified with international qualifications' },
//                 { icon: Zap, title: 'Quick Diagnosis', description: 'Advanced diagnostic tools for fast and accurate results' },
//                 { icon: Clock, title: '24/7 Availability', description: 'Always open for emergency and urgent medical needs' },
//                 { icon: Heart, title: 'Patient Care', description: 'Personalized treatment plans tailored to your needs' },
//               ].map((feature, index) => {
//                 const Icon = feature.icon;
//                 return (
//                   <div
//                     key={index}
//                     className={`group relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${isDark
//                         ? 'bg-white/5 border-white/10 hover:border-emerald-500/50 hover:bg-white/10 shadow-sm'
//                         : 'bg-white border-gray-200/50 hover:border-emerald-200 shadow-sm hover:shadow-xl'
//                       }`}
//                   >
//                     <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark
//                         ? 'bg-gradient-to-br from-emerald-500/10 to-cyan-500/10'
//                         : 'bg-gradient-to-br from-emerald-500/5 to-cyan-500/5'
//                       }`}></div>

//                     <div className="relative z-10">
//                       <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                         <Icon className="w-7 h-7 text-white" />
//                       </div>
//                       <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
//                         {feature.title}
//                       </h3>
//                       <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="mt-16 text-center">
//               <p className={`text-lg mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
//                 Ready to book your appointment with our experts?
//               </p>
//               <Link
//                 href="/"
//                 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
//               >
//                 <Calendar className="w-5 h-5" />
//                 Schedule Appointment
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </Layout>
//   );
// }


"use client";
import HeroCarousel from '../components/herocarousel';
import { ArrowRight, Heart, Stethoscope, Users, Clock, Pill, Activity, Zap, Award, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/layout'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!mounted) return null;

  // All services array
  const allServices = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced heart and cardiovascular care with latest technology'
    },
    {
      icon: Activity,
      title: 'Cardiac Diagnostic Clinic',
      description: 'Comprehensive cardiac testing including ECG, Echo, and stress tests'
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Comprehensive primary healthcare and treatment'
    },
    {
      icon: Users,
      title: 'Gynecology',
      description: 'Womens health and maternal care services'
    },
    {
      icon: Activity,
      title: 'Pediatrics',
      description: 'Specialized care for children and infants'
    },
    {
      icon: Stethoscope,
      title: 'Orthopedics',
      description: 'Bone, joint and muscle disorder treatment'
    },
    {
      icon: Heart,
      title: 'Nephrology',
      description: 'Kidney disease treatment and dialysis services'
    },
    {
      icon: Activity,
      title: 'ENT',
      description: 'Ear, nose, and throat specialist care'
    },
    {
      icon: Pill,
      title: 'Diabetic Clinic',
      description: 'Diabetes management and endocrinology services'
    },
    {
      icon: Stethoscope,
      title: 'Dermatology',
      description: 'Skin care and treatment for dermatological conditions'
    },
    {
      icon: Activity,
      title: 'Ophthalmology',
      description: 'Eye care and vision correction services'
    },
    {
      icon: Heart,
      title: 'Gastroenterology',
      description: 'Digestive system and liver disorder treatment'
    },
    {
      icon: Stethoscope,
      title: 'Neurology',
      description: 'Brain and nervous system disorder care'
    },
    {
      icon: Award,
      title: 'Pathology',
      description: 'Complete diagnostic and lab testing facilities'
    },
    {
      icon: Activity,
      title: 'Dental',
      description: 'Comprehensive dental care and oral health services'
    },
    {
      icon: Pill,
      title: 'General Surgery',
      description: 'Surgical procedures and post-operative care'
    },
    {
      icon: Heart,
      title: 'Psychiatry',
      description: 'Mental health counseling and psychiatric treatment'
    },
    {
      icon: Stethoscope,
      title: 'Physiotherapy',
      description: 'Physical rehabilitation and pain management therapy'
    }
  ];

  // Show only 6 services initially
  const displayedServices = showAllServices ? allServices : allServices.slice(0, 6);

  return (
    <Layout>
    <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-white'}`}>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* ============ SERVICES SECTION ============ */}
      <section className={`relative py-24 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-b from-white via-emerald-50/40 to-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-4 transition-all duration-300 ${
              isDark 
                ? 'bg-emerald-500/15 border-emerald-500/30' 
                : 'bg-emerald-100/70 border-emerald-300/60'
            }`}>
              <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-emerald-600'}`}></div>
              <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>OUR SERVICES</span>
            </div>
            <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Comprehensive Healthcare Services
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              From general consultation to specialized treatments, we offer a wide range of medical services
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                    isDark 
                      ? 'bg-white/5 border-white/10 hover:border-emerald-500/50 hover:bg-white/10 shadow-sm' 
                      : 'bg-white border-gray-200/50 hover:border-emerald-200 shadow-sm hover:shadow-xl'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-br from-emerald-500/10 to-cyan-500/10' 
                      : 'bg-gradient-to-br from-emerald-500/5 to-cyan-500/5'
                  }`}></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                    <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300 ${
                        isDark 
                          ? 'text-emerald-400 hover:text-emerald-300' 
                          : 'text-emerald-600 hover:text-emerald-700'
                      }`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show All / Show Less Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 group ${
                isDark
                  ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                  : 'bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              {showAllServices ? 'Show Less' : `View All Departments (${allServices.length})`}
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${showAllServices ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </button>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US SECTION ============ */}
      <section className={`relative py-24 transition-colors duration-300 ${isDark ? 'bg-slate-950/50' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-emerald-500/5' : 'bg-emerald-200/20'}`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-4 transition-all duration-300 ${
              isDark 
                ? 'bg-emerald-500/15 border-emerald-500/30' 
                : 'bg-emerald-100/70 border-emerald-300/60'
            }`}>
              <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-emerald-600'}`}></div>
              <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>WHY CHOOSE US</span>
            </div>
            <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              What Makes Us Different
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              We combine medical excellence with compassionate care to provide the best healthcare experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Certified Specialists', description: 'All doctors are board-certified with international qualifications' },
              { icon: Zap, title: 'Quick Diagnosis', description: 'Advanced diagnostic tools for fast and accurate results' },
              { icon: Clock, title: '24/7 Availability', description: 'Always open for emergency and urgent medical needs' },
              { icon: Heart, title: 'Patient Care', description: 'Personalized treatment plans tailored to your needs' },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                    isDark 
                      ? 'bg-white/5 border-white/10 hover:border-emerald-500/50 hover:bg-white/10 shadow-sm' 
                      : 'bg-white border-gray-200/50 hover:border-emerald-200 shadow-sm hover:shadow-xl'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-br from-emerald-500/10 to-cyan-500/10' 
                      : 'bg-gradient-to-br from-emerald-500/5 to-cyan-500/5'
                  }`}></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className={`text-lg mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Ready to book your appointment with our experts?
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <Calendar className="w-5 h-5" />
              Schedule Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
