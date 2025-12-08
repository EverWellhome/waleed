import React, { useState } from 'react';
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import ChatAssistant from './components/ChatAssistant';
import { Icon } from './components/Icons';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const scrollToSection = (id: string) => {
    setCurrentPage(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-everwell-50 font-sans">
      <Header onNavigate={scrollToSection} currentPage={currentPage} />

      <main>
        {/* Hero Section */}
        <section id="home" className="relative bg-everwell-50 pt-16 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
             {/* Abstract organic shapes for background */}
             <div className="absolute -top-20 -right-20 w-96 h-96 bg-everwell-200 rounded-full blur-3xl opacity-40"></div>
             <div className="absolute top-40 -left-20 w-72 h-72 bg-everwell-300 rounded-full blur-3xl opacity-40"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-everwell-100 border border-everwell-200 text-everwell-700 text-sm font-bold mb-6">
                  <Icon name="Heart" size={16} className="mr-2 fill-current" />
                  Compassionate Home Care in Middleton, MA
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-everwell-900 leading-tight">
                  Compassionate Care in the <span className="text-everwell-500">Comfort of Home</span>
                </h1>
                <p className="mt-6 text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
                  We provide professional, non-medical home healthcare services tailored to help your loved ones maintain their independence and dignity.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-everwell-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-everwell-700 transition-all hover:shadow-xl hover:-translate-y-1"
                  >
                    Get a Free Assessment
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="bg-white text-everwell-700 border border-everwell-200 px-8 py-4 rounded-lg font-bold text-lg hover:bg-everwell-50 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    View Services
                    <Icon name="ChevronRight" size={20} />
                  </button>
                </div>
                
                <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-bold">
                  <div className="flex items-center gap-2">
                    <Icon name="ShieldCheck" className="text-everwell-500" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="User" className="text-everwell-500" />
                    <span>Vetted Caregivers</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500">
                  {/* Updated Image: Caregiver and Elderly Person */}
                  <img 
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop" 
                    alt="Caregiver helping senior woman" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-everwell-900/30 to-transparent"></div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-everwell-100 max-w-xs hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-everwell-100 p-3 rounded-full text-everwell-600">
                      <Icon name="Smile" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-everwell-900 text-lg">98% Satisfaction</p>
                      <p className="text-slate-500 text-sm font-medium">Based on family reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />

        {/* About Section */}
        <section id="about" className="py-20 bg-white border-t border-everwell-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="grid grid-cols-2 gap-4">
                   {/* Updated Images: Caregiving scenes */}
                  <img src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=800&auto=format&fit=crop" alt="Caregiver holding senior hand" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                  <img src="https://images.unsplash.com/photo-1581056771107-24ca5f025052?q=80&w=800&auto=format&fit=crop" alt="Caregiver walking with senior" className="rounded-2xl shadow-lg w-full h-64 object-cover translate-y-8" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                 <span className="text-everwell-500 font-bold tracking-wider uppercase text-sm">About Everwell</span>
                 <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-everwell-900">
                    More Than Caregivers, We Are Family
                 </h2>
                 <p className="mt-6 text-lg text-slate-600 leading-relaxed font-medium">
                    Founded on the belief that everyone deserves to age with dignity in the place they love most—home. Everwell was established to provide a higher standard of home care, focusing on emotional connection just as much as physical assistance.
                 </p>
                 <div className="mt-8 space-y-4">
                   <div className="flex gap-4">
                     <div className="w-12 h-12 rounded-full bg-everwell-100 flex items-center justify-center text-everwell-600 flex-shrink-0">
                       <span className="font-bold text-xl">1</span>
                     </div>
                     <div>
                       <h4 className="font-bold text-everwell-900">Personalized Care Plans</h4>
                       <p className="text-slate-600 text-sm mt-1">Every individual is unique. We customize our care to match your specific habits, preferences, and needs.</p>
                     </div>
                   </div>
                   <div className="flex gap-4">
                     <div className="w-12 h-12 rounded-full bg-everwell-100 flex items-center justify-center text-everwell-600 flex-shrink-0">
                       <span className="font-bold text-xl">2</span>
                     </div>
                     <div>
                       <h4 className="font-bold text-everwell-900">Compassionate Matchmaking</h4>
                       <p className="text-slate-600 text-sm mt-1">We don't just send a caregiver; we send the right caregiver, matching personalities for a lasting bond.</p>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="bg-everwell-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center text-white mb-4">
                {/* Small Footer Logo */}
                <div className="w-8 h-8 flex items-center justify-center mr-2">
                   <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                      {/* Heart in center */}
                      <path d="M50 45 C50 45 58 35 66 38 C72 40 72 48 64 56 L50 68 L36 56 C28 48 28 40 34 38 C42 35 50 45 50 45" fill="#48A9C5" />
                      {/* Left Hand */}
                      <path d="M30 30 C 15 30 10 50 20 70" stroke="#64C3D8" strokeWidth="7" strokeLinecap="round" />
                      <path d="M22 62 Q 40 70 55 62" stroke="#64C3D8" strokeWidth="5" strokeLinecap="round" />
                      <path d="M25 75 Q 45 82 58 72" stroke="#64C3D8" strokeWidth="5" strokeLinecap="round" />
                      {/* Right Hand */}
                      <path d="M70 30 C 85 30 90 50 80 70" stroke="#7AD0AC" strokeWidth="7" strokeLinecap="round" />
                      <path d="M78 62 Q 60 70 45 62" stroke="#7AD0AC" strokeWidth="5" strokeLinecap="round" />
                      <path d="M75 75 Q 55 82 42 72" stroke="#7AD0AC" strokeWidth="5" strokeLinecap="round" />
                   </svg>
                </div>
                <span className="font-bold text-xl tracking-wider">EVERWELL</span>
              </div>
              <p className="text-sm leading-relaxed text-everwell-200">
                Providing compassionate, non-medical home care services to seniors and adults with disabilities.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-everwell-400 transition-colors">Companionship</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-everwell-400 transition-colors">Personal Care</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-everwell-400 transition-colors">Respite Care</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-everwell-400 transition-colors">Dementia Care</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-everwell-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-everwell-400 transition-colors">Careers</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-everwell-400 transition-colors">Contact</button></li>
                <li><a href="#" className="hover:text-everwell-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <p className="text-sm mb-2 text-everwell-100">35 Village Road</p>
              <p className="text-sm mb-2 text-everwell-100">Middleton, MA 01949</p>
              <p className="text-sm mb-2 text-everwell-100">Info@everwellhome.care</p>
              <p className="text-sm font-bold text-white mt-2">(910) 317-3721</p>
            </div>
          </div>
          <div className="border-t border-everwell-800 mt-12 pt-8 text-center text-sm text-everwell-400">
            <p>&copy; {new Date().getFullYear()} Everwell Home Care. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Assistant Widget */}
      <ChatAssistant />
    </div>
  );
}

export default App;