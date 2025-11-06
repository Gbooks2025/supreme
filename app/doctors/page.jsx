"use client";
import { Heart, Stethoscope, MapPin, Phone, Mail, Star, Search, Filter, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../components/layout'

export default function Doctors() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

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

  const doctors = [
    {
      id: 1,
      name: 'Dr. Imran Jiye Mansur',
      specialty: 'Cardiology',
      qualification: 'MBBS, MD',
      experience: 'Noon - 1:00 PM',
      rating: 4.9,
      image: '👨‍⚕️',
      bio: 'Expert cardiologist with 15+ years experience'
    },
    {
      id: 2,
      name: 'Dr. Sukhransh Mazumdar',
      specialty: 'General Medicine',
      qualification: 'MBBS, MD',
      experience: 'First Monday & Saturday 5:00 PM',
      rating: 4.8,
      image: '👨‍⚕️',
      bio: 'Primary healthcare specialist'
    },
    {
      id: 3,
      name: 'Dr. Gaurav Agrawal',
      specialty: 'Orthopedics',
      qualification: 'MBBS, MS',
      experience: 'First Saturday Evening 2 PM',
      rating: 4.7,
      image: '👨‍⚕️',
      bio: 'Bone and joint specialist'
    },
    {
      id: 4,
      name: 'Dr. Ramiz Hasnain',
      specialty: 'Pediatrics',
      qualification: 'MBBS, DCH',
      experience: 'First Saturday Evening 1 PM',
      rating: 4.9,
      image: '👨‍⚕️',
      bio: 'Children\'s health specialist'
    },
    {
      id: 5,
      name: 'Dr. Ashik Rekha Choudhury',
      specialty: 'Gynecology',
      qualification: 'MBBS, DGO',
      experience: 'First Sunday Evening 12 PM',
      rating: 4.8,
      image: '👩‍⚕️',
      bio: 'Women\'s health expert'
    },
    {
      id: 6,
      name: 'Dr. Geetasyndi Dewd',
      specialty: 'Pediatrics',
      qualification: 'MBBS, MS, MSC',
      experience: 'First Monday & Thursday 5-6 PM',
      rating: 4.7,
      image: '👩‍⚕️',
      bio: 'Pediatric care specialist'
    },
    {
      id: 7,
      name: 'Dr. Me: Bin Selim Halidar',
      specialty: 'Skin & Hair',
      qualification: 'B.E. (Dermatology)',
      experience: 'First Saturday Evening 8 PM',
      rating: 4.8,
      image: '👨‍⚕️',
      bio: 'Dermatology specialist'
    },
    {
      id: 8,
      name: 'Dr. Arinjez Ray',
      specialty: 'ENT',
      qualification: 'MBBS, MS',
      experience: 'First Saturday Evening 12:30 PM',
      rating: 4.9,
      image: '👨‍⚕️',
      bio: 'ENT specialist'
    },
    {
      id: 9,
      name: 'Dr. Afshar Kasim Ray',
      specialty: 'Neurology',
      qualification: 'MBBS, MD',
      experience: 'First Monday Evening & Tuesday',
      rating: 4.8,
      image: '👨‍⚕️',
      bio: 'Neurology specialist'
    },
    {
      id: 10,
      name: 'Dr. Gazhi Abesh',
      specialty: 'Urology',
      qualification: 'MBBS, MS',
      experience: 'Noon - 1 PM',
      rating: 4.7,
      image: '👨‍⚕️',
      bio: 'Urology specialist'
    }
  ];

  const specialties = ['all', 'Cardiology', 'General Medicine', 'Orthopedics', 'Pediatrics', 'Gynecology', 'Skin & Hair', 'ENT', 'Neurology', 'Urology'];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

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
          <h1 className={`text-6xl lg:text-7xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Our Expert Doctors
          </h1>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Meet our team of highly qualified and experienced medical professionals dedicated to your health
          </p>
        </div>
      </section>

      {/* ============ SEARCH & FILTER ============ */}
      <section className={`relative py-8 px-4 sm:px-6 lg:px-8 sticky top-24 z-40 transition-colors duration-300 ${isDark ? 'bg-slate-900/80 backdrop-blur-lg' : 'bg-white/80 backdrop-blur-lg'} border-b ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className={`relative mb-6 rounded-full border transition-all duration-300 ${
            isDark
              ? 'bg-white/10 border-white/20 focus-within:border-emerald-500/50'
              : 'bg-gray-50 border-gray-300 focus-within:border-emerald-500'
          }`}>
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              placeholder="Search doctors or specialties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-6 py-3 rounded-full transition-colors duration-300 ${
                isDark
                  ? 'bg-transparent text-white placeholder-gray-400 focus:outline-none'
                  : 'bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none'
              }`}
            />
          </div>

          {/* Specialty Filter */}
          <div className="flex flex-wrap gap-2">
            {specialties.map(specialty => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  selectedSpecialty === specialty
                    ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg'
                    : isDark
                      ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {specialty === 'all' ? 'All Doctors' : specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DOCTORS GRID ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          {filteredDoctors.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                    isDark
                      ? 'bg-gradient-to-br from-white/8 to-white/3 border-white/10 hover:border-emerald-500/50 hover:bg-white/10'
                      : 'bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-emerald-400 shadow-sm hover:shadow-lg'
                  }`}
                >
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-gradient-to-br from-emerald-600/20 to-cyan-600/20' : 'bg-gradient-to-br from-emerald-600/10 to-cyan-600/10'}`}></div>

                  <div className="relative z-10 p-8">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl bg-gradient-to-br from-emerald-600 to-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                      {doctor.image}
                    </div>

                    {/* Name */}
                    <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {doctor.name}
                    </h3>

                    {/* Specialty Badge */}
                    <div className="inline-flex items-center gap-1 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 text-emerald-600">
                        {doctor.specialty}
                      </span>
                    </div>

                    {/* Qualification */}
                    <p className={`text-sm transition-colors duration-300 mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="font-semibold">Qualifications:</span> {doctor.qualification}
                    </p>

                    {/* Bio */}
                    <p className={`text-sm mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {doctor.bio}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(doctor.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {doctor.rating}
                      </span>
                    </div>

                    {/* Availability */}
                    <p className={`text-xs transition-colors duration-300 mb-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      <span className="font-semibold">Available:</span> {doctor.experience}
                    </p>

                    {/* Action Button */}
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group/btn">
                      Book Appointment
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className={`text-2xl font-bold transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                No doctors found matching your search
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============ STATS SECTION ============ */}
      <section className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Expert Doctors', value: '50+' },
              { label: 'Specialties', value: '15+' },
              { label: 'Patient Rating', value: '4.8★' },
              { label: 'Experience', value: '14+ yrs' }
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
          <h2 className="text-5xl font-black text-white mb-8">Book Your Appointment Today</h2>
          <p className="text-xl text-white/90 mb-12">
            Connect with our expert doctors and get the best healthcare service
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-lg"
          >
            <Phone className="w-5 h-5" />
            Schedule Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
    </Layout>
  );
}
