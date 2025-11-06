// Dark mode theme 

// "use client";
// import { Phone, Mail, MapPin, Send, ArrowRight, Plus, Clock, Ambulance, Heart, Stethoscope } from 'lucide-react';
// import { useState } from 'react';
// import Layout from '../../components/layout'
// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     appointmentType: '',
//     preferredDate: '',
//     message: ''
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setSubmitted(true);
//       setFormData({ name: '', email: '', phone: '', appointmentType: '', preferredDate: '', message: '' });
//       setTimeout(() => setSubmitted(false), 4000);
//     }, 1200);
//   };

//   return (
//     <Layout>
//     <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
//       {/* ============ ANIMATED BACKGROUND ============ */}
//       <div className="fixed inset-0 z-0 overflow-hidden">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/25 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/25 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
//         <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
//       </div>

//       <div className="relative z-10">
//         {/* ============ HERO SECTION ============ */}
//         <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
//           <div className="max-w-7xl mx-auto w-full">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               {/* Left - Content */}
//               <div className="space-y-8">
//                 <div className="space-y-4">
//                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-sm">
//                     <Heart className="w-4 h-4 text-emerald-400" />
//                     <span className="text-sm font-semibold text-emerald-300">We Care About Your Health</span>
//                   </div>

//                   <h1 className="text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight">
//                     Your Health
//                     <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
//                       Matters
//                     </span>
//                   </h1>

//                   <p className="text-xl text-gray-300 leading-relaxed max-w-md">
//                     Supreme Healthcare is here to provide you with expert medical care and compassionate service. Reach out to book your appointment or ask any health-related questions.
//                   </p>
//                 </div>

//                 {/* Quick Contact */}
//                 <div className="space-y-4 pt-4">
//                   {[
//                     { icon: Phone, label: 'Emergency', value: '+91-9876543210', highlight: true },
//                     { icon: Phone, label: 'Appointment', value: '+91-1234567890', highlight: false },
//                     { icon: Mail, label: 'Email', value: 'care@healthplus.com', highlight: false },
//                     { icon: MapPin, label: 'Location', value: '123 Healthcare Street, City', highlight: false }
//                   ].map((item, idx) => {
//                     const Icon = item.icon;
//                     return (
//                       <div 
//                         key={idx} 
//                         className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
//                           item.highlight
//                             ? 'bg-red-500/20 border border-red-500/40 hover:bg-red-500/30 hover:border-red-500/60'
//                             : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50'
//                         }`}
//                       >
//                         <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${
//                           item.highlight
//                             ? 'bg-gradient-to-br from-red-500 to-pink-500'
//                             : 'bg-gradient-to-br from-emerald-500 to-cyan-500'
//                         }`}>
//                           <Icon className="w-5 h-5 text-white" />
//                         </div>
//                         <div>
//                           <p className="text-xs text-gray-400">{item.label}</p>
//                           <p className={`font-semibold ${item.highlight ? 'text-red-400' : 'text-white'}`}>{item.value}</p>
//                         </div>
//                         {item.highlight && <span className="ml-auto text-xs bg-red-500/30 px-3 py-1 rounded-full text-red-300">24/7</span>}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Right - Contact Form */}
//               <div className="relative">
//                 {/* Form Container */}
//                 <div className="relative bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-2xl rounded-3xl border border-white/15 p-8 shadow-2xl hover:border-white/25 transition-all duration-500 group">
//                   {/* Gradient Orbs */}
//                   <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/30 rounded-full blur-3xl group-hover:bg-emerald-500/40 transition-all duration-500"></div>
//                   <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-all duration-500"></div>

//                   {/* Form Content */}
//                   <div className="relative z-10">
//                     {submitted ? (
//                       <div className="flex flex-col items-center justify-center py-16 text-center">
//                         <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center mb-6 animate-bounce">
//                           <Heart className="w-8 h-8 text-white" />
//                         </div>
//                         <h3 className="text-3xl font-black text-white mb-3">Appointment Request Sent!</h3>
//                         <p className="text-gray-300 mb-3">
//                           Thank you for choosing Supreme Healthcare.
//                         </p>
//                         <p className="text-gray-400 text-sm mb-6">
//                           Our team will contact you within 2 hours to confirm your appointment.
//                         </p>
//                         <button
//                           onClick={() => setSubmitted(false)}
//                           className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
//                         >
//                           Send Another Request
//                         </button>
//                       </div>
//                     ) : (
//                       <form onSubmit={handleSubmit} className="space-y-6">
//                         <h2 className="text-2xl font-black text-white mb-8">Book Your Appointment</h2>

//                         <div>
//                           <label className="block text-sm font-semibold text-gray-200 mb-3">
//                             Full Name *
//                           </label>
//                           <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                             className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm"
//                             placeholder="John Doe"
//                           />
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                           <div>
//                             <label className="block text-sm font-semibold text-gray-200 mb-3">
//                               Email *
//                             </label>
//                             <input
//                               type="email"
//                               name="email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               required
//                               className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm"
//                               placeholder="john@example.com"
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-sm font-semibold text-gray-200 mb-3">
//                               Phone *
//                             </label>
//                             <input
//                               type="tel"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleChange}
//                               required
//                               className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm"
//                               placeholder="+91-9876543210"
//                             />
//                           </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                           <div>
//                             <label className="block text-sm font-semibold text-gray-200 mb-3">
//                               Department *
//                             </label>
//                             <select
//                               name="appointmentType"
//                               value={formData.appointmentType}
//                               onChange={handleChange}
//                               required
//                               className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm"
//                             >
//                               <option value="">Select Department</option>
//                               <option value="cardiology">Cardiology</option>
//                               <option value="general">General Medicine</option>
//                               <option value="orthopedics">Orthopedics</option>
//                               <option value="pediatrics">Pediatrics</option>
//                               <option value="gynecology">Gynecology</option>
//                               <option value="pathology">Pathology</option>
//                               <option value="consultation">General Consultation</option>
//                             </select>
//                           </div>
//                           <div>
//                             <label className="block text-sm font-semibold text-gray-200 mb-3">
//                               Preferred Date *
//                             </label>
//                             <input
//                               type="date"
//                               name="preferredDate"
//                               value={formData.preferredDate}
//                               onChange={handleChange}
//                               required
//                               className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm"
//                             />
//                           </div>
//                         </div>

//                         <div>
//                           <label className="block text-sm font-semibold text-gray-200 mb-3">
//                             Additional Notes
//                           </label>
//                           <textarea
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             rows="3"
//                             className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm resize-none"
//                             placeholder="Any specific concerns or medical history we should know?"
//                           ></textarea>
//                         </div>

//                         <button
//                           type="submit"
//                           disabled={loading}
//                           className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-2"
//                         >
//                           {loading ? (
//                             <>
//                               <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
//                               Booking...
//                             </>
//                           ) : (
//                             <>
//                               Book Appointment
//                               <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                             </>
//                           )}
//                         </button>
//                       </form>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============ DEPARTMENTS QUICK ACCESS ============ */}
//         <section className="relative py-24 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-5xl font-black text-white text-center mb-16">Our Departments</h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 { icon: Heart, name: 'Cardiology', desc: 'Heart & Cardiovascular Care' },
//                 { icon: Stethoscope, name: 'General Medicine', desc: 'Primary Health Services' },
//                 { icon: Heart, name: 'Orthopedics', desc: 'Bone & Joint Treatment' },
//                 { icon: Heart, name: 'Pediatrics', desc: 'Childcare Specialist' },
//                 { icon: Heart, name: 'Gynecology', desc: 'Womens Health Services' },
//                 { icon: Heart, name: 'Pathology', desc: 'Advanced Diagnostics' }
//               ].map((dept, idx) => {
//                 const Icon = dept.icon;
//                 return (
//                   <div key={idx} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:bg-white/10 cursor-pointer hover:-translate-y-2">
//                     <Icon className="w-10 h-10 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
//                     <h3 className="text-xl font-bold text-white mb-2">{dept.name}</h3>
//                     <p className="text-gray-300 text-sm">{dept.desc}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* ============ SERVICES GRID ============ */}
//         <section className="relative py-24 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-5xl font-black text-white text-center mb-16">Why Choose HealthPlus?</h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[
//                 { icon: Stethoscope, title: '50+ Specialists', desc: 'Expert Medical Team' },
//                 { icon: Clock, title: '24/7 Services', desc: 'Always Available' },
//                 { icon: Ambulance, title: 'Emergency Care', desc: 'Rapid Response' },
//                 { icon: Heart, title: 'Patient First', desc: 'Compassionate Care' }
//               ].map((service, idx) => {
//                 const Icon = service.icon;
//                 return (
//                   <div key={idx} className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 hover:border-white/30 transition-all duration-300">
//                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                     <div className="relative z-10 text-center">
//                       <Icon className="w-12 h-12 text-emerald-400 mx-auto mb-4 group-hover:scale-125 transition-transform" />
//                       <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
//                       <p className="text-gray-400 text-sm">{service.desc}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* ============ HOURS & INFO ============ */}
//         <section className="relative py-24 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-8">
//               {/* Hours */}
//               <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/15 p-8 hover:border-white/25 transition-all">
//                 <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
//                   <Clock className="w-8 h-8 text-emerald-400" />
//                   Opening Hours
//                 </h3>

//                 <div className="space-y-4">
//                   {[
//                     { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM' },
//                     { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
//                     { day: 'Sunday & Holidays', hours: 'Emergency Only' }
//                   ].map((schedule, idx) => (
//                     <div key={idx} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
//                       <span className="text-gray-300 font-medium">{schedule.day}</span>
//                       <span className="text-emerald-400 font-bold">{schedule.hours}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-8 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
//                   <p className="text-emerald-300 text-sm flex items-center gap-2">
//                     <Ambulance className="w-5 h-5" />
//                     24/7 Emergency Ambulance Service Available
//                   </p>
//                 </div>
//               </div>

//               {/* Location & Contact */}
//               <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/15 p-8 hover:border-white/25 transition-all">
//                 <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
//                   <MapPin className="w-8 h-8 text-emerald-400" />
//                   Contact & Location
//                 </h3>

//                 <div className="space-y-6">
//                   <div className="bg-white/5 rounded-xl p-4">
//                     <p className="text-gray-400 text-sm mb-2">Main Branch</p>
//                     <p className="text-white font-semibold">123 Healthcare Street</p>
//                     <p className="text-gray-400 text-sm">Medical Complex, Your City - 123456</p>
//                   </div>

//                   <div className="bg-white/5 rounded-xl p-4">
//                     <p className="text-gray-400 text-sm mb-2">Contact</p>
//                     <p className="text-emerald-400 font-semibold">+91-1234567890</p>
//                     <p className="text-gray-400 text-sm mt-2">care@healthplus.com</p>
//                   </div>

//                   <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4">
//                     <p className="text-gray-400 text-sm mb-2">Emergency</p>
//                     <p className="text-red-400 font-bold text-lg">+91-9876543210</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============ FINAL CTA ============ */}
//         <section className="relative py-32 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-6xl lg:text-7xl font-black text-white mb-8">Your Health Deserves the Best</h2>
//             <p className="text-xl text-gray-300 mb-12">
//               Book your appointment today and experience healthcare like never before.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="tel:+911234567890"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
//               >
//                 <Phone className="w-5 h-5" />
//                 Call Now
//               </a>
//               <button
//                 onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-emerald-500 text-emerald-400 font-bold text-lg hover:bg-emerald-500/10 transition-all duration-300 group"
//               >
//                 <ArrowRight className="w-5 h-5" />
//                 Book Online
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>

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
//       `}</style>
//     </div>
//     </Layout>
//   );
// }

"use client";
import { Phone, Mail, MapPin, Send, ArrowRight, Plus, Clock, Ambulance, Heart, Stethoscope } from 'lucide-react';
import { useState, useEffect } from 'react';
import Layout from '../../components/layout'
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentType: '',
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', appointmentType: '', preferredDate: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  };

  if (!mounted) return null;

  return (
    <Layout>
    <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-white'}`}>
      {/* ============ ANIMATED BACKGROUND ============ */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-emerald-500/25' : 'bg-emerald-300/15'}`}></div>
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse animation-delay-2000 ${isDark ? 'bg-cyan-500/25' : 'bg-blue-300/15'}`}></div>
        <div className={`absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse animation-delay-4000 ${isDark ? 'bg-emerald-600/15' : 'bg-cyan-300/20'}`}></div>
      </div>

      <div className="relative z-10">
        {/* ============ HERO SECTION ============ */}
        <section className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-white via-emerald-50/40 to-cyan-50/30'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                    isDark 
                      ? 'bg-emerald-500/15 border-emerald-500/30' 
                      : 'bg-emerald-100/70 border-emerald-300/60'
                  }`}>
                    <Heart className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>We Care About Your Health</span>
                  </div>

                  <h1 className={`text-7xl lg:text-8xl font-black leading-tight tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Your Health
                    <span className={`block bg-gradient-to-r ${isDark ? 'from-emerald-400 via-cyan-400 to-emerald-400' : 'from-emerald-600 via-cyan-600 to-blue-600'} bg-clip-text text-transparent`}>
                      Matters
                    </span>
                  </h1>

                  <p className={`text-xl leading-relaxed max-w-md transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Supreme Healthcare is here to provide you with expert medical care and compassionate service. Reach out to book your appointment or ask any health-related questions.
                  </p>
                </div>

                {/* Quick Contact */}
                <div className="space-y-4 pt-4">
                  {[
                    { icon: Phone, label: 'Emergency', value: '+91-9876543210', highlight: true },
                    { icon: Phone, label: 'Appointment', value: '+91-1234567890', highlight: false },
                    { icon: Mail, label: 'Email', value: 'care@healthplus.com', highlight: false },
                    { icon: MapPin, label: 'Location', value: '123 Healthcare Street, City', highlight: false }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                          item.highlight
                            ? isDark 
                              ? 'bg-red-500/20 border border-red-500/40 hover:bg-red-500/30 hover:border-red-500/60' 
                              : 'bg-red-100/70 border border-red-200/80 hover:bg-red-100/90'
                            : isDark 
                              ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50' 
                              : 'bg-white/70 border border-emerald-200/60 shadow-sm hover:shadow-md hover:bg-white/90 hover:border-emerald-300/80'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${
                          item.highlight
                            ? 'bg-gradient-to-br from-red-500 to-pink-500'
                            : 'bg-gradient-to-br from-emerald-500 to-cyan-500'
                        }`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</p>
                          <p className={`font-semibold transition-colors duration-300 ${item.highlight ? (isDark ? 'text-red-400' : 'text-red-700') : (isDark ? 'text-white' : 'text-gray-900')}`}>{item.value}</p>
                        </div>
                        {item.highlight && <span className={`ml-auto text-xs px-3 py-1 rounded-full transition-colors duration-300 ${isDark ? 'bg-red-500/30 text-red-300' : 'bg-red-200/80 text-red-700 font-semibold'}`}>24/7</span>}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="relative">
                <div className={`relative rounded-3xl border backdrop-blur-2xl p-8 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-br from-white/8 to-white/3 border-white/15 hover:border-white/25 shadow-2xl hover:shadow-3xl' 
                    : 'bg-gradient-to-br from-white/90 to-emerald-50/50 border border-emerald-200/60 hover:border-emerald-300/80 shadow-lg hover:shadow-2xl'
                } group`}>
                  {/* Gradient Orbs */}
                  <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-all duration-500 ${isDark ? 'bg-emerald-500/30 group-hover:bg-emerald-500/40' : 'bg-emerald-300/25 group-hover:bg-emerald-300/35'}`}></div>
                  <div className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl transition-all duration-500 ${isDark ? 'bg-cyan-500/20 group-hover:bg-cyan-500/30' : 'bg-cyan-300/20 group-hover:bg-cyan-300/30'}`}></div>

                  {/* Form Content */}
                  <div className="relative z-10">
                    {submitted ? (
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center mb-6 animate-bounce shadow-lg">
                          <Heart className="w-8 h-8 text-white" />
                        </div>
                        <h3 className={`text-3xl font-black mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Appointment Request Sent!</h3>
                        <p className={`mb-3 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Thank you for choosing Supreme Healthcare.
                        </p>
                        <p className={`text-sm mb-6 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Our team will contact you within 2 hours to confirm your appointment.
                        </p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                          Send Another Request
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <h2 className={`text-2xl font-black mb-8 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Book Your Appointment</h2>

                        <div>
                          <label className={`block text-sm font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`w-full px-6 py-4 rounded-xl border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 placeholder-gray-400 ${
                              isDark 
                                ? 'bg-white/10 border-white/20 text-white' 
                                : 'bg-white/80 border-emerald-200/60 text-gray-900 placeholder-gray-500'
                            }`}
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className={`block text-sm font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className={`w-full px-6 py-4 rounded-xl border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 placeholder-gray-400 ${
                                isDark 
                                  ? 'bg-white/10 border-white/20 text-white' 
                                  : 'bg-white/80 border-emerald-200/60 text-gray-900 placeholder-gray-500'
                              }`}
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <label className={`block text-sm font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                              Phone *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className={`w-full px-6 py-4 rounded-xl border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 placeholder-gray-400 ${
                                isDark 
                                  ? 'bg-white/10 border-white/20 text-white' 
                                  : 'bg-white/80 border-emerald-200/60 text-gray-900 placeholder-gray-500'
                              }`}
                              placeholder="+91-9876543210"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className={`block text-sm font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                              Department *
                            </label>
                            <select
                              name="appointmentType"
                              value={formData.appointmentType}
                              onChange={handleChange}
                              required
                              className={`w-full px-6 py-4 rounded-xl border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 ${
                                isDark 
                                  ? 'bg-white/10 border-white/20 text-white' 
                                  : 'bg-white/80 border-emerald-200/60 text-gray-900'
                              }`}
                            >
                              <option value="">Select Department</option>
                              <option value="cardiology">Cardiology</option>
                              <option value="general">General Medicine</option>
                              <option value="orthopedics">Orthopedics</option>
                              <option value="pediatrics">Pediatrics</option>
                              <option value="gynecology">Gynecology</option>
                              <option value="pathology">Pathology</option>
                              <option value="consultation">General Consultation</option>
                            </select>
                          </div>
                          <div>
                            <label className={`block text-sm font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                              Preferred Date *
                            </label>
                            <input
                              type="date"
                              name="preferredDate"
                              value={formData.preferredDate}
                              onChange={handleChange}
                              required
                              className={`w-full px-6 py-4 rounded-xl border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 ${
                                isDark 
                                  ? 'bg-white/10 border-white/20 text-white' 
                                  : 'bg-white/80 border-emerald-200/60 text-gray-900'
                              }`}
                            />
                          </div>
                        </div>

                        <div>
                          <label className={`block text-sm font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                            Additional Notes
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="3"
                            className={`w-full px-6 py-4 rounded-xl border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 placeholder-gray-400 resize-none ${
                              isDark 
                                ? 'bg-white/10 border-white/20 text-white' 
                                : 'bg-white/80 border-emerald-200/60 text-gray-900 placeholder-gray-500'
                            }`}
                            placeholder="Any specific concerns or medical history we should know?"
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-2"
                        >
                          {loading ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                              Booking...
                            </>
                          ) : (
                            <>
                              Book Appointment
                              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ DEPARTMENTS QUICK ACCESS ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-b from-cyan-50/40 to-emerald-50/40'}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-5xl font-black text-center mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Departments</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Heart, name: 'Cardiology', desc: 'Heart & Cardiovascular Care' },
                { icon: Stethoscope, name: 'General Medicine', desc: 'Primary Health Services' },
                { icon: Heart, name: 'Orthopedics', desc: 'Bone & Joint Treatment' },
                { icon: Heart, name: 'Pediatrics', desc: 'Childcare Specialist' },
                { icon: Heart, name: 'Gynecology', desc: 'Womens Health Services' },
                { icon: Heart, name: 'Pathology', desc: 'Advanced Diagnostics' }
              ].map((dept, idx) => {
                const Icon = dept.icon;
                return (
                  <div key={idx} className={`group p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
                    isDark 
                      ? 'bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10' 
                      : 'bg-white/80 border border-emerald-200/60 shadow-sm hover:shadow-lg hover:bg-white/95'
                  }`}>
                    <Icon className={`w-10 h-10 mb-4 group-hover:scale-110 transition-transform ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{dept.name}</h3>
                    <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{dept.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ SERVICES GRID ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950/50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-5xl font-black text-center mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Why Choose HealthPlus?</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Stethoscope, title: '50+ Specialists', desc: 'Expert Medical Team' },
                { icon: Clock, title: '24/7 Services', desc: 'Always Available' },
                { icon: Ambulance, title: 'Emergency Care', desc: 'Rapid Response' },
                { icon: Heart, title: 'Patient First', desc: 'Compassionate Care' }
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className={`group relative p-8 rounded-2xl transition-all duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/15 hover:border-white/30' 
                      : 'bg-gradient-to-br from-emerald-100/40 to-cyan-100/40 border border-emerald-200/60 hover:border-emerald-300/80 shadow-sm hover:shadow-lg'
                  }`}>
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-br from-emerald-500/10 to-transparent' 
                        : 'bg-gradient-to-br from-emerald-600/10 to-cyan-600/10'
                    }`}></div>
                    
                    <div className="relative z-10 text-center">
                      <Icon className={`w-12 h-12 mx-auto mb-4 group-hover:scale-125 transition-transform ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
                      <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{service.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ HOURS & INFO ============ */}
        <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-b from-emerald-50/40 to-cyan-50/40'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Hours */}
              <div className={`rounded-3xl border p-8 transition-all duration-300 ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-xl border-white/15 hover:border-white/25' 
                  : 'bg-white/80 border-emerald-200/60 hover:border-emerald-300/80 shadow-sm hover:shadow-md'
              }`}>
                <h3 className={`text-2xl font-black mb-8 flex items-center gap-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Clock className={`w-8 h-8 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  Opening Hours
                </h3>

                <div className="space-y-4">
                  {[
                    { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM' },
                    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
                    { day: 'Sunday & Holidays', hours: 'Emergency Only' }
                  ].map((schedule, idx) => (
                    <div key={idx} className={`flex justify-between items-center py-3 border-b transition-colors duration-300 last:border-0 ${isDark ? 'border-white/10' : 'border-emerald-200/50'}`}>
                      <span className={`font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{schedule.day}</span>
                      <span className={`font-bold transition-colors duration-300 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className={`mt-8 p-4 rounded-xl flex items-center gap-2 transition-all duration-300 ${isDark ? 'bg-emerald-500/20 border border-emerald-500/30' : 'bg-emerald-100/70 border border-emerald-200/80'}`}>
                  <Ambulance className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`} />
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>
                    24/7 Emergency Ambulance Service Available
                  </p>
                </div>
              </div>

              {/* Location & Contact */}
              <div className={`rounded-3xl border p-8 transition-all duration-300 ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-xl border-white/15 hover:border-white/25' 
                  : 'bg-white/80 border-emerald-200/60 hover:border-emerald-300/80 shadow-sm hover:shadow-md'
              }`}>
                <h3 className={`text-2xl font-black mb-8 flex items-center gap-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <MapPin className={`w-8 h-8 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  Contact & Location
                </h3>

                <div className="space-y-6">
                  <div className={`rounded-xl p-4 transition-all duration-300 ${isDark ? 'bg-white/5' : 'bg-emerald-100/40'}`}>
                    <p className={`text-sm mb-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Main Branch</p>
                    <p className={`font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>123 Healthcare Street</p>
                    <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>Medical Complex, Your City - 123456</p>
                  </div>

                  <div className={`rounded-xl p-4 transition-all duration-300 ${isDark ? 'bg-white/5' : 'bg-cyan-100/40'}`}>
                    <p className={`text-sm mb-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Contact</p>
                    <p className={`font-semibold transition-colors duration-300 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>+91-1234567890</p>
                    <p className={`text-sm mt-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>care@healthplus.com</p>
                  </div>

                  <div className={`rounded-xl p-4 border transition-all duration-300 ${isDark ? 'bg-red-500/20 border-red-500/30' : 'bg-red-100/70 border-red-200/80'}`}>
                    <p className={`text-sm mb-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Emergency</p>
                    <p className={`font-bold text-lg transition-colors duration-300 ${isDark ? 'text-red-400' : 'text-red-700'}`}>+91-9876543210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className={`relative py-32 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 to-slate-900' : 'bg-gradient-to-br from-white via-emerald-50/50 to-cyan-50/40'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-6xl lg:text-7xl font-black mb-8 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Your Health Deserves the Best</h2>
            <p className={`text-xl mb-12 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Book your appointment today and experience healthcare like never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+911234567890"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <button
                onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 font-bold text-lg transition-all duration-300 group ${
                  isDark 
                    ? 'border-emerald-500 text-emerald-400 hover:bg-emerald-500/10' 
                    : 'border-emerald-600 text-emerald-600 bg-white/50 hover:bg-white/80 shadow-sm hover:shadow-md'
                }`}
              >
                <ArrowRight className="w-5 h-5" />
                Book Online
              </button>
            </div>
          </div>
        </section>
      </div>

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
