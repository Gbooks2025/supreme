// "use client";
// import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* About Section */}
//           <div>
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 {/* <span className="text-white font-bold text-lg">YB</span> */}
//               </div>
//               <h3 className="text-xl font-bold">Supreme HealthCare</h3>
//             </div>
//             <p className="text-gray-400 mb-4">
//               Building modern web experiences with cutting-edge technology and innovative design solutions.
//             </p>
//             <div className="flex space-x-4">
//               <a 
//                 href="https://facebook.com" 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-blue-500 transition-colors"
//               >
//                 <Facebook size={20} />
//               </a>
//               <a 
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer" 
//                 className="text-gray-400 hover:text-pink-500 transition-colors"
//               >
//                 <Instagram size={20} />
//               </a>
//               <a 
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer" 
//                 className="text-gray-400 hover:text-blue-400 transition-colors"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a 
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer" 
//                 className="text-gray-400 hover:text-sky-400 transition-colors"
//               >
//                 <Twitter size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
//                   Our Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
//                   Portfolio
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
//                   Our Team
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
//                   Careers
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Services</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/services/web-development" className="text-gray-400 hover:text-white transition-colors">
//                   Web Development
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services/mobile-apps" className="text-gray-400 hover:text-white transition-colors">
//                   Mobile Apps
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services/ui-ux-design" className="text-gray-400 hover:text-white transition-colors">
//                   UI/UX Design
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services/digital-marketing" className="text-gray-400 hover:text-white transition-colors">
//                   Digital Marketing
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services/consulting" className="text-gray-400 hover:text-white transition-colors">
//                   Consulting
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Contact Info</h3>
//             <ul className="space-y-3">
//               <li className="text-gray-400 flex items-start">
//                 <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
//                 <span className="text-sm">
//                   123 Business Street, Tech Park,<br />
//                   Your City, State 123456
//                 </span>
//               </li>
//               <li className="text-gray-400 flex items-center">
//                 <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
//                 <a href="tel:+911234567890" className="text-sm hover:text-white transition-colors">
//                   +91-1234567890
//                 </a>
//               </li>
//               <li className="text-gray-400 flex items-center">
//                 <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
//                 <a href="mailto:info@yourbrand.com" className="text-sm hover:text-white transition-colors">
//                   info@yourbrand.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-800 pt-8 mt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-400 text-sm text-center md:text-left">
//               &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
//             </p>
//             <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
//               <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
//                 Privacy Policy
//               </Link>
//               <span className="text-gray-600">|</span>
//               <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
//                 Terms of Service
//               </Link>
//               <span className="text-gray-600">|</span>
//               <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
//                 Sitemap
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



"use client";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PH</span>
              </div> */}
              <h3 className="text-xl font-bold">Supreme Healthcare</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Multispecialty healthcare under one roof — trusted expertise, modern facilities, and compassionate care for your family.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Departments & Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Departments</h3>
            <ul className="space-y-2">
              <li><Link href="/services/cardiology" className="text-gray-400 hover:text-white transition-colors">Cardiology</Link></li>
              <li><Link href="/services/general-medicine" className="text-gray-400 hover:text-white transition-colors">General Medicine</Link></li>
              <li><Link href="/services/orthopedics" className="text-gray-400 hover:text-white transition-colors">Orthopedics</Link></li>
              <li><Link href="/services/pediatrics" className="text-gray-400 hover:text-white transition-colors">Pediatrics</Link></li>
              <li><Link href="/services/gynecology" className="text-gray-400 hover:text-white transition-colors">Gynecology</Link></li>
              <li><Link href="/services/ophthalmology" className="text-gray-400 hover:text-white transition-colors">Ophthalmology</Link></li>
              <li><Link href="/services/pathology" className="text-gray-400 hover:text-white transition-colors">Pathology</Link></li>
              <li><Link href="/services/ultrasound" className="text-gray-400 hover:text-white transition-colors">Ultrasound</Link></li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Patient Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link href="/doctors" className="text-gray-400 hover:text-white transition-colors">Meet Our Doctors</Link></li>
              <li><Link href="/insurance" className="text-gray-400 hover:text-white transition-colors">Insurance</Link></li>
              <li><Link href="/patient-forms" className="text-gray-400 hover:text-white transition-colors">Patient Forms</Link></li>
              <li><Link href="/health-tips" className="text-gray-400 hover:text-white transition-colors">Health Tips</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  23 Emerald Avenue, MedCity,<br />
                  Your City, State 123456
                </span>
              </li>
              <li className="text-gray-400 flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-sm hover:text-white transition-colors">
                  +91-1234567890
                </a>
              </li>
              <li className="text-gray-400 flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="mailto:info@primepolyclinic.com" className="text-sm hover:text-white transition-colors">
                  info@primepolyclinic.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Prime Polyclinic. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <span className="text-gray-600">|</span>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
