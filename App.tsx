
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
    <div className="min-h-screen bg-everwell-50 font-sans selection:bg-everwell-200 selection:text-everwell-800">
      <Header onNavigate={scrollToSection} currentPage={currentPage} />

      <main>
        {/* Hero Section */}
        <section id="home" className="relative bg-everwell-50 pt-16 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="absolute -top-20 -right-20 w-96 h-96 bg-everwell-200 rounded-full blur-3xl opacity-40"></div>
             <div className="absolute top-40 -left-20 w-72 h-72 bg-everwell-300 rounded-full blur-3xl opacity-40"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-everwell-100 border border-everwell-200 text-everwell-700 text-sm font-bold mb-6">
                  <Icon name="Heart" size={16} className="mr-2 fill-everwell-500 text-everwell-500" />
                  Compassionate Home Care in Middleton, MA
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-everwell-900 leading-tight">
                  Compassionate Care in the <span className="text-everwell-500">Comfort of Home</span>
                </h1>
                <p className="mt-6 text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
                  Professional, non-medical home healthcare services tailored to help your loved ones maintain their independence and dignity.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-everwell-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-everwell-800 transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
                  >
                    Get a Free Assessment
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="bg-white text-everwell-700 border border-everwell-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-everwell-50 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    View Services
                    <Icon name="ChevronRight" size={20} />
                  </button>
                </div>
                
                <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-bold">
                  <div className="flex items-center gap-2">
                    <Icon name="ShieldCheck" className="text-everwell-600" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="User" className="text-everwell-600" />
                    <span>Vetted Caregivers</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white transform rotate-2 hover:rotate-0 transition-all duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop" 
                    alt="Compassionate caregiver providing assistance" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-everwell-900/30 to-transparent"></div>
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-everwell-100 max-w-xs hidden md:block animate-bounce-slow">
                  <div className="flex items-center gap-4">
                    <div className="bg-everwell-100 p-3 rounded-xl text-everwell-600">
                      <Icon name="Smile" size={28} />
                    </div>
                    <div>
                      <p className="font-extrabold text-everwell-900 text-xl leading-none">98% Satisfaction</p>
                      <p className="text-slate-500 text-sm font-semibold mt-1">From local families</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />

        {/* About Section */}
        <section id="about" className="py-24 bg-white border-t border-everwell-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-everwell-100 h-[450px]">
                   <img 
                     src="https://images.unsplash.com/photo-1516307073027-e4e69f7831f8?q=80&w=1200&auto=format&fit=crop" 
                     alt="Senior woman laughing" 
                     className="w-full h-full object-cover" 
                   />
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-everwell-200 rounded-full -z-10 opacity-50"></div>
              </div>
              <div className="order-1 lg:order-2">
                 <span className="text-everwell-500 font-black tracking-[0.2em] uppercase text-xs">Our Mission</span>
                 <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-everwell-900 leading-tight">
                    More Than Caregivers, We Are <span className="text-everwell-600">Family</span>
                 </h2>
                 <p className="mt-8 text-lg text-slate-600 leading-relaxed font-medium">
                    Everwell was founded on a simple principle: dignity. We believe that everyone deserves to age comfortably in the home they love. Our care plans are built around connection, ensuring your family receives the emotional and physical support they need.
                 </p>
                 <div className="mt-10 space-y-6">
                   <div className="flex gap-5">
                     <div className="w-14 h-14 rounded-2xl bg-everwell-50 border border-everwell-100 flex items-center justify-center text-everwell-600 flex-shrink-0 shadow-sm">
                       <Icon name="Heart" size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-everwell-900 text-lg">Personalized Approach</h4>
                       <p className="text-slate-600 text-sm mt-1 leading-relaxed">Every person has a story. We customize every plan to match your loved one's unique personality and history.</p>
                     </div>
                   </div>
                   <div className="flex gap-5">
                     <div className="w-14 h-14 rounded-2xl bg-everwell-50 border border-everwell-100 flex items-center justify-center text-everwell-600 flex-shrink-0 shadow-sm">
                       <Icon name="ShieldCheck" size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-everwell-900 text-lg">Rigorous Screening</h4>
                       <p className="text-slate-600 text-sm mt-1 leading-relaxed">Our caregivers undergo deep background checks and intensive interviews to ensure only the best enter your home.</p>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="bg-everwell-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center text-white mb-6">
                {/* Official SVG Logo for Footer */}
                <div className="w-12 h-12 flex-shrink-0 mr-3">
                  <svg viewBox="0 0 512 512" fill="none" className="w-full h-full">
                    <path d="M256 440C256 440 370 380 410 320C450 260 440 160 360 160C280 160 256 220 256 220C256 220 232 160 152 160C72 160 62 260 102 320C142 380 256 440 256 440Z" stroke="#7AD0AC" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M102 320C142 380 256 440 256 440C256 440 370 380 410 320C450 260 440 160 360 160C280 160 256 220 256 220" stroke="#48A9C5" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M210 360C170 340 140 300 135 280" stroke="#48A9C5" strokeWidth="32" strokeLinecap="round"/>
                    <path d="M235 390C190 375 160 340 155 320" stroke="#48A9C5" strokeWidth="32" strokeLinecap="round"/>
                    <path d="M256 310C256 310 285 275 315 275C345 275 365 295 355 330C345 365 256 420 256 420C256 420 167 365 157 330C147 295 167 275 197 275C227 275 256 310 256 310Z" fill="#48A9C5" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-xl tracking-wider leading-[0.85]">EVERWELL</span>
                  <span className="text-[0.6rem] font-bold tracking-[0.35em] mt-1 text-everwell-400">HOME CARE</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-everwell-200/80">
                A licensed provider of professional, non-medical home care services dedicated to the Middleton community.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-everwell-400 transition-colors">Companionship</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-everwell-400 transition-colors">Personal Care</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-everwell-400 transition-colors">Respite Care</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-everwell-400 transition-colors">Dementia Care</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-everwell-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-everwell-400 transition-colors">Careers</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-everwell-400 transition-colors">Client Reviews</button></li>
                <li><a href="#" className="hover:text-everwell-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Connect</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={18} className="text-everwell-500 mt-1" />
                  <p className="text-sm">35 Village Road<br/>Middleton, MA 01949</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={18} className="text-everwell-500" />
                  <p className="text-sm">Info@everwellhome.care</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={18} className="text-everwell-500" />
                  <p className="text-sm font-bold text-white">(910) 317-3721</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-everwell-800 mt-16 pt-8 text-center text-xs text-everwell-400/60 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Everwell Home Care LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  );
}

export default App;
