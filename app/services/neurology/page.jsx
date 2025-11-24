"use client";
import { Heart, Award, Clock, Users, Phone, Mail, MapPin, ArrowRight, Check, Activity, Stethoscope, Calendar, FileText, TrendingUp, Zap, Brain } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../../../components/layout'

export default function Neurology() {
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

  const diagnosticServices = [
    {
      name: 'Electroencephalography (EEG)',
      description: 'Non-invasive brain activity monitoring for diagnosis of epilepsy, seizure disorders, encephalopathy, and sleep disorders with digital recording and analysis'
    },
    {
      name: 'Electromyography (EMG) and Nerve Conduction Studies',
      description: 'Diagnostic testing for neuromuscular disorders including carpal tunnel syndrome, peripheral neuropathy, myasthenia gravis, and motor neuron disease'
    },
    {
      name: 'Brain MRI and CT Imaging',
      description: 'Advanced neuroimaging for detection of stroke, tumors, multiple sclerosis plaques, traumatic brain injury, and structural brain abnormalities'
    },
    {
      name: 'Transcranial Doppler (TCD)',
      description: 'Ultrasound assessment of cerebral blood flow for stroke evaluation, vasospasm detection, and monitoring of intracranial circulation'
    },
    {
      name: 'Lumbar Puncture (Spinal Tap)',
      description: 'Cerebrospinal fluid analysis for diagnosis of meningitis, encephalitis, multiple sclerosis, and subarachnoid hemorrhage with pressure measurement'
    },
    {
      name: 'Polysomnography (Sleep Study)',
      description: 'Comprehensive sleep disorder evaluation including sleep apnea, narcolepsy, and restless leg syndrome with overnight monitoring'
    },
    {
      name: 'Neuropsychological Testing',
      description: 'Cognitive function assessment for dementia, Alzheimer\'s disease, traumatic brain injury, and attention deficit disorders'
    },
    {
      name: 'Carotid Duplex Ultrasound',
      description: 'Non-invasive imaging of carotid arteries for stroke risk assessment, stenosis detection, and plaque characterization'
    }
  ];

  const clinicalConditions = [
    {
      condition: 'Stroke (Cerebrovascular Accident)',
      details: 'Emergency management of ischemic and hemorrhagic stroke with thrombolytic therapy (tPA), antiplatelet agents, rehabilitation, and secondary prevention strategies'
    },
    {
      condition: 'Epilepsy and Seizure Disorders',
      details: 'Comprehensive seizure management with anti-epileptic medications, EEG monitoring, medication optimization, and surgical evaluation for refractory epilepsy'
    },
    {
      condition: 'Parkinson\'s Disease',
      details: 'Management of movement disorder with levodopa, dopamine agonists, MAO-B inhibitors, physical therapy, and deep brain stimulation consultation'
    },
    {
      condition: 'Alzheimer\'s Disease and Dementia',
      details: 'Cognitive disorder management with cholinesterase inhibitors, memantine, behavioral interventions, and caregiver education for progressive memory loss'
    },
    {
      condition: 'Multiple Sclerosis (MS)',
      details: 'Autoimmune disease management with disease-modifying therapies, immunosuppressants, steroids for relapses, and symptom control with multidisciplinary care'
    },
    {
      condition: 'Migraine and Headache Disorders',
      details: 'Comprehensive headache management with acute treatments (triptans, NSAIDs), preventive medications, lifestyle modifications, and trigger identification'
    },
    {
      condition: 'Peripheral Neuropathy',
      details: 'Diagnosis and treatment of nerve damage from diabetes, vitamin deficiencies, or other causes with pain management, physical therapy, and underlying cause treatment'
    },
    {
      condition: 'Neuromuscular Disorders',
      details: 'Management of myasthenia gravis, muscular dystrophy, ALS, and other motor disorders with immunosuppressive therapy and supportive care'
    },
    {
      condition: 'Movement Disorders',
      details: 'Treatment of tremors, dystonia, chorea, and restless leg syndrome with medications, botulinum toxin injections, and physical therapy'
    },
    {
      condition: 'Vertigo and Balance Disorders',
      details: 'Evaluation and treatment of benign positional vertigo, vestibular neuritis, and Meniere\'s disease with repositioning maneuvers and vestibular rehabilitation'
    }
  ];

  const treatmentPrograms = [
    {
      category: 'Medical Neurology',
      items: [
        'Anti-epileptic drug therapy with therapeutic monitoring and optimization',
        'Stroke prevention with antiplatelet and anticoagulant therapy',
        'Parkinson\'s disease management with dopaminergic medications',
        'Immunosuppressive therapy for multiple sclerosis and autoimmune disorders'
      ]
    },
    {
      category: 'Interventional Neurology',
      items: [
        'Acute stroke intervention with IV thrombolysis (tPA within 4.5 hours)',
        'Botulinum toxin injections for dystonia, spasticity, and migraine',
        'Lumbar puncture for diagnostic CSF analysis',
        'Nerve blocks for chronic pain and neuropathy management'
      ]
    },
    {
      category: 'Neurorehabilitation',
      items: [
        'Post-stroke rehabilitation with physical, occupational, and speech therapy',
        'Cognitive rehabilitation for traumatic brain injury and dementia',
        'Vestibular rehabilitation for balance disorders',
        'Pain management and lifestyle counseling for chronic neurological conditions'
      ]
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Neurology Specialist',
      qualification: 'MBBS, MD (Medicine), DM (Neurology)',
      specialization: 'Clinical Neurology & Stroke Medicine',
      experience: '19+ Years',
      expertise: [
        'Stroke Management & Prevention',
        'Epilepsy & Seizure Disorders',
        'Movement Disorders & Parkinson\'s',
        'Headache & Migraine Treatment'
      ],
      availability: 'Mon-Sat: 11:00 AM - 3:00 PM'
    }
  ];

  return (
    <Layout>
    <div className={`overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      {/* ============ HERO SECTION ============ */}
      <section className={`relative min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-white via-emerald-50/40 to-cyan-50/30'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-300/20'}`}></div>
          <div className={`absolute -bottom-40 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-300/20'}`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 transition-all duration-300 ${isDark ? 'bg-emerald-500/15 border-emerald-500/30' : 'bg-emerald-100/70 border-emerald-300/60'}`}>
                <Brain className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>NEUROLOGY DEPARTMENT</span>
              </div>

              <h1 className={`text-6xl lg:text-7xl font-black mb-6 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Expert
                <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Neurological Care
                </span>
              </h1>

              <p className={`text-xl transition-colors duration-300 mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Comprehensive neurology services providing advanced diagnosis and treatment for brain, spinal cord, and nervous system disorders with state-of-the-art neuroimaging and electrophysiological testing.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">19+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">8000+</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Patients Treated</p>
                </div>
                <div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">24/7</p>
                  <p className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Stroke Care</p>
                </div>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Calendar className="w-5 h-5" />
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80 rounded-3xl flex items-center justify-center text-9xl bg-gradient-to-br from-emerald-600 to-cyan-600 shadow-2xl shadow-emerald-600/30">
                <Brain className="w-48 h-48 text-white animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OVERVIEW SECTION ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gradient-to-b from-white via-emerald-50/30 to-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Advanced Diagnostics',
                desc: 'State-of-the-art EEG, EMG, and neuroimaging facilities for accurate neurological diagnosis'
              },
              {
                icon: TrendingUp,
                title: 'Stroke Excellence',
                desc: '24/7 stroke care with rapid thrombolysis and comprehensive rehabilitation programs'
              },
              {
                icon: Users,
                title: 'Expert Neurologists',
                desc: 'Board-certified specialists with advanced training in clinical neurology and neurophysiology'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border p-8 text-center transition-all duration-300 hover:-translate-y-2 ${
                    isDark
                      ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                      : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <Icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ DIAGNOSTIC SERVICES ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Neurological Services
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive diagnostic and treatment services for all nervous system disorders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {diagnosticServices.map((service, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-600 to-cyan-600 flex-shrink-0 mt-1">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {service.name}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLINICAL CONDITIONS ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className={`text-5xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Conditions We Treat
            </h2>
            <p className={`text-lg transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Expert management of all neurological disorders affecting brain, spine, and nerves
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {clinicalConditions.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-6 transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50 hover:bg-white/10'
                    : 'bg-white border-gray-200 hover:border-emerald-400 shadow-sm hover:shadow-md'
                }`}
              >
                <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  {item.condition}
                </h3>
                <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TREATMENT PROGRAMS ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Treatment Specialties
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {treatmentPrograms.map((program, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-8 transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/15'
                    : 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200/60'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {program.category}
                </h3>

                <ul className="space-y-3">
                  {program.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-2"></div>
                      <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TEAM SECTION ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-black mb-16 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Our Neurology Team
          </h2>

          {teamMembers.map((doctor, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 max-w-5xl mx-auto ${
                isDark
                  ? 'bg-gradient-to-r from-white/8 to-white/3 border-white/10'
                  : 'bg-white border-gray-200 shadow-lg'
              }`}
            >
              <div className="h-2 bg-gradient-to-r from-emerald-600 to-cyan-600"></div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <div className="w-32 h-32 rounded-2xl flex items-center justify-center text-6xl bg-gradient-to-br from-emerald-600 to-cyan-600 mb-6">
                      👨‍⚕️
                    </div>
                    <h3 className={`text-3xl font-black mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {doctor.name}
                    </h3>
                    <p className="text-emerald-600 font-bold text-lg mb-3">{doctor.specialization}</p>
                    <div className={`space-y-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <p><strong>Qualifications:</strong> {doctor.qualification}</p>
                      <p><strong>Experience:</strong> {doctor.experience}</p>
                      <p><strong>Availability:</strong> {doctor.availability}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className={`text-xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Areas of Expertise
                    </h4>
                    <ul className="space-y-2">
                      {doctor.expertise.map((exp, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                          <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {exp}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                      Schedule Consultation
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-emerald-600 to-cyan-600`}>
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-8">
            Expert Brain & Nerve Care Available 24/7
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Our neurology specialists provide comprehensive diagnosis and treatment for all neurological conditions with advanced testing facilities and emergency stroke care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Emergency Stroke Line
            </a>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
