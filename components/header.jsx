// "use client";
// import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       {/* Top Bar - Logo and Contact Info */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex justify-between items-center">
//             {/* Logo Section */}
//             <Link href="/" className="flex items-center space-x-3">
//               <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-2xl">YB</span>
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   YourBrand
//                 </span>
//                 <span className="text-xs text-gray-500 hidden md:block">
//                   Your Trusted Partner
//                 </span>
//               </div>
//             </Link>

//             {/* Contact Info - Desktop Only */}
//             <div className="hidden lg:flex items-center gap-6">
//               <div className="flex items-center gap-2 text-sm">
//                 <div className="bg-blue-100 p-2 rounded-full">
//                   <Phone className="w-4 h-4 text-blue-600" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500">Call us now</p>
//                   <p className="font-semibold text-gray-800">+91-1234567890</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2 text-sm">
//                 <div className="bg-blue-100 p-2 rounded-full">
//                   <Mail className="w-4 h-4 text-blue-600" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500">Email us</p>
//                   <p className="font-semibold text-gray-800">info@yourbrand.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2 text-sm">
//                 <div className="bg-blue-100 p-2 rounded-full">
//                   <MapPin className="w-4 h-4 text-blue-600" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500">Visit us</p>
//                   <p className="font-semibold text-gray-800">Your City, India</p>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden text-gray-700 p-2"
//             >
//               {isMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Bar - Desktop */}
//       <nav className="bg-gradient-to-r from-blue-600 to-purple-600 hidden lg:block">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-1">
//               <Link 
//                 href="/" 
//                 className="text-white hover:bg-white/20 px-4 py-3 transition-colors font-medium text-sm"
//               >
//                 HOME
//               </Link>
//               <Link 
//                 href="/about" 
//                 className="text-white hover:bg-white/20 px-4 py-3 transition-colors font-medium text-sm"
//               >
//                 ABOUT US
//               </Link>
//               <Link 
//                 href="/services" 
//                 className="text-white hover:bg-white/20 px-4 py-3 transition-colors font-medium text-sm"
//               >
//                 SERVICES
//               </Link>
//               <Link 
//                 href="/portfolio" 
//                 className="text-white hover:bg-white/20 px-4 py-3 transition-colors font-medium text-sm"
//               >
//                 PORTFOLIO
//               </Link>
//               <Link 
//                 href="/contact" 
//                 className="text-white hover:bg-white/20 px-4 py-3 transition-colors font-medium text-sm"
//               >
//                 CONTACT US
//               </Link>
//             </div>

//             <Link
//               href="/get-started"
//               className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-white/90 transition-all font-medium shadow-md hover:shadow-lg"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Navigation Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-gradient-to-r from-blue-600 to-purple-600">
//           <div className="container mx-auto px-4 py-4">
//             {/* Mobile Contact Info */}
//             <div className="bg-white/10 rounded-lg p-4 mb-4 space-y-2">
//               <div className="flex items-center gap-2 text-white text-sm">
//                 <Phone className="w-4 h-4" />
//                 <span>+91-1234567890</span>
//               </div>
//               <div className="flex items-center gap-2 text-white text-sm">
//                 <Mail className="w-4 h-4" />
//                 <span>info@yourbrand.com</span>
//               </div>
//             </div>

//             {/* Mobile Menu Links */}
//             <div className="flex flex-col space-y-1">
//               <Link
//                 href="/"
//                 className="text-white hover:bg-white/20 px-4 py-3 rounded transition-colors font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 HOME
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-white hover:bg-white/20 px-4 py-3 rounded transition-colors font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 ABOUT US
//               </Link>
//               <Link
//                 href="/services"
//                 className="text-white hover:bg-white/20 px-4 py-3 rounded transition-colors font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 SERVICES
//               </Link>
//               <Link
//                 href="/portfolio"
//                 className="text-white hover:bg-white/20 px-4 py-3 rounded transition-colors font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 PORTFOLIO
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-white hover:bg-white/20 px-4 py-3 rounded transition-colors font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 CONTACT US
//               </Link>
//             </div>

//             {/* Get Started Button - Mobile */}
//             <div className="mt-4 pt-4 border-t border-white/20">
//               <Link
//                 href="/get-started"
//                 className="block bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-white/90 transition-all font-medium text-center shadow-md"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


// "use client";
// import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDark, setIsDark] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     // Check localStorage for theme preference
//     const savedTheme = localStorage.getItem('theme');
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//     if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//     } else {
//       setIsDark(false);
//       document.documentElement.classList.remove('dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = !isDark;
//     setIsDark(newTheme);

//     if (newTheme) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   };

//   if (!mounted) return null;

//   return (
//     <header className={`${isDark ? 'bg-gray-950 border-gray-800 shadow-lg shadow-black/20' : 'bg-white border-gray-200 shadow-md'} sticky top-0 z-50 transition-all duration-300`}>
//       {/* Top Bar - Logo and Contact Info */}
//       <div className={`${isDark ? 'bg-gray-950 border-gray-800' : 'bg-white border-b border-gray-200'} transition-colors duration-300`}>
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex justify-between items-center">
//             {/* Logo Section */}
//             <Link href="/" className="flex items-center space-x-3 group">
//               <div className={`w-14 h-14 bg-gradient-to-br ${isDark ? 'from-emerald-600 to-cyan-600' : 'from-blue-600 to-purple-600'} rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all`}>
//                 <span className="text-white font-bold text-2xl">YB</span>
//               </div>
//               <div className="flex flex-col">
//                 <span className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${isDark ? 'from-emerald-400 to-cyan-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
//                   YourBrand
//                 </span>
//                 <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} hidden md:block`}>
//                   Your Trusted Partner
//                 </span>
//               </div>
//             </Link>

//             {/* Contact Info - Desktop Only */}
//             <div className="hidden lg:flex items-center gap-6">
//               <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
//                 <div className={`${isDark ? 'bg-emerald-900/40' : 'bg-blue-100'} p-2 rounded-full transition-colors`}>
//                   <Phone className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-blue-600'}`} />
//                 </div>
//                 <div>
//                   <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Call us now</p>
//                   <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>+91-1234567890</p>
//                 </div>
//               </div>

//               <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
//                 <div className={`${isDark ? 'bg-emerald-900/40' : 'bg-blue-100'} p-2 rounded-full transition-colors`}>
//                   <Mail className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-blue-600'}`} />
//                 </div>
//                 <div>
//                   <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email us</p>
//                   <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>info@yourbrand.com</p>
//                 </div>
//               </div>

//               <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
//                 <div className={`${isDark ? 'bg-emerald-900/40' : 'bg-blue-100'} p-2 rounded-full transition-colors`}>
//                   <MapPin className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-blue-600'}`} />
//                 </div>
//                 <div>
//                   <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Visit us</p>
//                   <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Your City, India</p>
//                 </div>
//               </div>
//             </div>

//             {/* Theme Toggle & Mobile Menu Button */}
//             <div className="flex items-center gap-3 lg:gap-4">
//               {/* Modern Theme Toggle Switch */}
//               <button
//                 onClick={toggleTheme}
//                 className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 ${
//                   isDark ? 'bg-emerald-600' : 'bg-gray-300'
//                 } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
//                   isDark ? 'focus:ring-emerald-500 focus:ring-offset-gray-950' : 'focus:ring-blue-500 focus:ring-offset-white'
//                 }`}
//                 title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//               >
//                 {/* Toggle Circle */}
//                 <span
//                   className={`inline-block h-7 w-7 transform rounded-full bg-white transition-all duration-300 shadow-md ${
//                     isDark ? 'translate-x-6' : 'translate-x-0.5'
//                   }`}
//                 >
//                   {/* Icon inside circle */}
//                   <svg
//                     className={`h-full w-full p-1.5 transition-all duration-300 ${
//                       isDark ? 'text-emerald-600' : 'text-gray-400'
//                     }`}
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     {isDark ? (
//                       // Moon icon
//                       <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//                     ) : (
//                       // Sun icon
//                       <path
//                         fillRule="evenodd"
//                         d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4.293 1.707a1 1 0 011.414 0l1.414 1.414a1 1 0 11-1.414 1.414L14.586 5.12a1 1 0 010-1.414zm2 4.586a1 1 0 111.414-1.414l1.414 1.414a1 1 0 11-1.414 1.414l-1.414-1.414zm0 5.656a1 1 0 111.414 1.414l-1.414 1.414a1 1 0 11-1.414-1.414l1.414-1.414zM5.12 14.586a1 1 0 01-1.414 1.414L2.293 14.586a1 1 0 011.414-1.414l1.413 1.414zm0-5.656a1 1 0 01-1.414-1.414L2.293 5.414a1 1 0 011.414 1.414l1.413 1.414zM10 18a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-4-3a1 1 0 110 2H4a1 1 0 110-2h2zm11 0a1 1 0 110 2h-2a1 1 0 110-2h2z"
//                         clipRule="evenodd"
//                       />
//                     )}
//                   </svg>
//                 </span>

//                 {/* Background gradient effect */}
//                 <div
//                   className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 ${
//                     isDark ? 'bg-emerald-500/20' : 'bg-blue-500/20'
//                   }`}
//                 ></div>
//               </button>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className={`lg:hidden p-2 rounded-lg transition-colors ${
//                   isDark
//                     ? 'text-gray-300 hover:bg-gray-800'
//                     : 'text-gray-700 hover:bg-gray-100'
//                 }`}
//               >
//                 {isMenuOpen ? (
//                   <X className="w-6 h-6" />
//                 ) : (
//                   <Menu className="w-6 h-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Bar - Desktop */}
//       <nav className={`${isDark ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-blue-600 to-purple-600'} hidden lg:block transition-all duration-300`}>
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-1">
//               <Link 
//                 href="/" 
//                 className={`${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-white hover:bg-white/20'} px-4 py-3 transition-colors font-medium text-sm rounded-md`}
//               >
//                 HOME
//               </Link>
//               <Link 
//                 href="/about" 
//                 className={`${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-white hover:bg-white/20'} px-4 py-3 transition-colors font-medium text-sm rounded-md`}
//               >
//                 ABOUT US
//               </Link>
//               <Link 
//                 href="/services" 
//                 className={`${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-white hover:bg-white/20'} px-4 py-3 transition-colors font-medium text-sm rounded-md`}
//               >
//                 SERVICES
//               </Link>
//               <Link 
//                 href="/portfolio" 
//                 className={`${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-white hover:bg-white/20'} px-4 py-3 transition-colors font-medium text-sm rounded-md`}
//               >
//                 PORTFOLIO
//               </Link>
//               <Link 
//                 href="/contact" 
//                 className={`${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-white hover:bg-white/20'} px-4 py-3 transition-colors font-medium text-sm rounded-md`}
//               >
//                 CONTACT US
//               </Link>
//             </div>

//             <Link
//               href="/get-started"
//               className={`${isDark ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white text-blue-600 hover:bg-white/90'} px-6 py-2 rounded-full transition-all font-medium shadow-md hover:shadow-lg`}
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Navigation Menu */}
//       {isMenuOpen && (
//         <div className={`lg:hidden ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-gradient-to-r from-blue-600 to-purple-600'} transition-all duration-300`}>
//           <div className="container mx-auto px-4 py-4">
//             {/* Mobile Contact Info */}
//             <div className={`${isDark ? 'bg-gray-800 rounded-lg' : 'bg-white/10 rounded-lg'} p-4 mb-4 space-y-2 transition-colors`}>
//               <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-white'}`}>
//                 <Phone className="w-4 h-4" />
//                 <span>+91-1234567890</span>
//               </div>
//               <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-white'}`}>
//                 <Mail className="w-4 h-4" />
//                 <span>info@yourbrand.com</span>
//               </div>
//             </div>

//             {/* Mobile Menu Links */}
//             <div className="flex flex-col space-y-1">
//               <Link
//                 href="/"
//                 className={`${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-white hover:bg-white/20'} px-4 py-3 rounded transition-colors font-medium`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 HOME
//               </Link>
//               <Link
//                 href="/about"
//                 className={`${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-white hover:bg-white/20'} px-4 py-3 rounded transition-colors font-medium`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 ABOUT US
//               </Link>
//               <Link
//                 href="/services"
//                 className={`${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-white hover:bg-white/20'} px-4 py-3 rounded transition-colors font-medium`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 SERVICES
//               </Link>
//               <Link
//                 href="/portfolio"
//                 className={`${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-white hover:bg-white/20'} px-4 py-3 rounded transition-colors font-medium`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 PORTFOLIO
//               </Link>
//               <Link
//                 href="/contact"
//                 className={`${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-white hover:bg-white/20'} px-4 py-3 rounded transition-colors font-medium`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 CONTACT US
//               </Link>
//             </div>

//             {/* Get Started Button - Mobile */}
//             <div className="mt-4 pt-4 border-t border-white/20">
//               <Link
//                 href="/get-started"
//                 className={`block ${isDark ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white text-blue-600 hover:bg-white/90'} px-6 py-3 rounded-full transition-all font-medium text-center shadow-md`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


"use client";
import { Menu, X, Phone, Mail, MapPin, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { COMPANY_ID, URL } from '../constants/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) return null;

  return (
    <header className={`${isDark ? 'bg-gray-950 border-gray-800 shadow-lg shadow-black/20' : 'bg-white border-gray-100 shadow-md'} sticky top-0 z-50 transition-all duration-300`}>
      {/* Top Bar - Logo and Contact Info */}
      <div className={`${isDark ? 'bg-gray-950 border-gray-800' : 'bg-white border-b border-gray-100'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className={`w-14 h-14 bg-gradient-to-br ${isDark ? 'from-emerald-600 to-cyan-600' : 'from-emerald-600 to-cyan-600'} rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all`}>
                {/* <span className="text-white font-bold text-2xl">HP</span> */}
              </div>
              <div className="flex flex-col">
                <span className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${isDark ? 'from-emerald-400 to-cyan-400' : 'from-emerald-600 to-cyan-600'} bg-clip-text text-transparent`}>
                  Supreme HealthCare
                </span>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} hidden md:block`}>
                  Your Health Matters
                </span>
              </div>
            </Link>

            {/* Contact Info - Desktop Only */}
            <div className="hidden lg:flex items-center gap-6">
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className={`${isDark ? 'bg-emerald-900/40' : 'bg-emerald-100'} p-2 rounded-full transition-colors`}>
                  <Phone className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                </div>
                <div>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Emergency</p>
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>+91-9876543210</p>
                </div>
              </div>

              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className={`${isDark ? 'bg-emerald-900/40' : 'bg-emerald-100'} p-2 rounded-full transition-colors`}>
                  <Mail className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                </div>
                <div>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email us</p>
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>care@healthplus.com</p>
                </div>
              </div>

              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className={`${isDark ? 'bg-emerald-900/40' : 'bg-emerald-100'} p-2 rounded-full transition-colors`}>
                  <MapPin className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                </div>
                <div>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Visit us</p>
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>123 Healthcare Street</p>
                </div>
              </div>
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:gap-4">
              {/* Modern Theme Toggle Switch */}
              <button
                onClick={toggleTheme}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 ${isDark ? 'bg-emerald-600' : 'bg-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-emerald-500 focus:ring-offset-gray-950' : 'focus:ring-emerald-500 focus:ring-offset-white'
                  }`}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {/* Toggle Circle */}
                <span
                  className={`inline-block h-7 w-7 transform rounded-full bg-white transition-all duration-300 shadow-md flex items-center justify-center ${isDark ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                >
                  {/* Icon inside circle */}
                  <div
                    className={`h-full w-full flex items-center justify-center transition-all duration-300 ${isDark ? 'text-emerald-600' : 'text-gray-400'
                      }`}
                  >
                    {isDark ? (
                      <Moon className="w-4 h-4" />
                    ) : (
                      <Sun className="w-4 h-4" />
                    )}
                  </div>
                </span>

                {/* Background gradient effect */}
                <div
                  className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-500/20'
                    }`}
                ></div>
              </button>


              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${isDark
                    ? 'text-gray-300 hover:bg-gray-800'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <nav className={`${isDark ? 'bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-800' : 'bg-gradient-to-r from-emerald-600 to-cyan-600'} hidden lg:block transition-all duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Link
                href="/"
                className={`${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-white hover:bg-white/20'} px-4 py-3 transition-colors font-medium text-sm rounded-md`}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className={`${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-white hover:bg-white/20'} px-4 py-3 transition-colors font-medium text-sm rounded-md`}
              >
                ABOUT US
              </Link>
              <Link
                href="/services"
                className={`${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-white hover:bg-white/20'} px-4 py-3 transition-colors font-medium text-sm rounded-md`}
              >
                SERVICES
              </Link>
              {/* <Link
                href="/doctors"
                className={`${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-white hover:bg-white/20'} px-4 py-3 transition-colors font-medium text-sm rounded-md`}
              >
                DOCTORS
              </Link> */}
              <Link
                href="/contact"
                className={`${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-white hover:bg-white/20'} px-4 py-3 transition-colors font-medium text-sm rounded-md`}
              >
                CONTACT US
              </Link>
            </div>

            <Link
              href="/"
              className={`${isDark ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white text-emerald-600 hover:bg-white/90'} px-6 py-2 rounded-full transition-all font-medium shadow-md hover:shadow-lg`}
            >
              Book Appointment
            </Link>
            {/* <a
                target="_blank"
                rel="noopener noreferrer"
                href={URL}
                className={`${isDark ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white text-emerald-600 hover:bg-white/90'} px-6 py-2 rounded-full transition-all font-medium shadow-md hover:shadow-lg`}
              >
                Book Appointment
              </a> */}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className={`lg:hidden ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-gradient-to-r from-emerald-600 to-cyan-600'} transition-all duration-300`}>
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Contact Info */}
            <div className={`${isDark ? 'bg-gray-800 rounded-lg' : 'bg-white/10 rounded-lg'} p-4 mb-4 space-y-2 transition-colors`}>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-white'}`}>
                <Phone className="w-4 h-4" />
                <span>+91-9876543210</span>
              </div>
              <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-white'}`}>
                <Mail className="w-4 h-4" />
                <span>care@healthplus.com</span>
              </div>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className={`${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-white hover:bg-white/20'} px-4 py-3 rounded transition-colors font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className={`${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-white hover:bg-white/20'} px-4 py-3 rounded transition-colors font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                href="/services"
                className={`${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-white hover:bg-white/20'} px-4 py-3 rounded transition-colors font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              {/* <Link
                href="/doctors"
                className={`${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-white hover:bg-white/20'} px-4 py-3 rounded transition-colors font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                DOCTORS
              </Link> */}
              <Link
                href="/contact"
                className={`${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-white hover:bg-white/20'} px-4 py-3 rounded transition-colors font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </div>

            {/* Book Appointment Button - Mobile */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <Link
                href="/"
                className={`block ${isDark ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white text-emerald-600 hover:bg-white/90'} px-6 py-3 rounded-full transition-all font-medium text-center shadow-md`}
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
