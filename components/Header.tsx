
import React, { useState } from 'react';
import { Icon } from './Icons';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  // Exact high-fidelity recreation of the provided Everwell logo
  const EverwellLogo = () => (
    <div className="flex items-center gap-3">
      <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
        <svg viewBox="0 0 512 512" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Right Hand (Sage/Mint) */}
          <path d="M256 440C256 440 370 380 410 320C450 260 440 160 360 160C280 160 256 220 256 220C256 220 232 160 152 160C72 160 62 260 102 320C142 380 256 440 256 440Z" stroke="#7AD0AC" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Left Hand (Teal) with overlapping details */}
          <path d="M102 320C142 380 256 440 256 440C256 440 370 380 410 320C450 260 440 160 360 160C280 160 256 220 256 220" stroke="#48A9C5" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Finger details - Left side (Teal) */}
          <path d="M210 360C170 340 140 300 135 280" stroke="#48A9C5" strokeWidth="32" strokeLinecap="round"/>
          <path d="M235 390C190 375 160 340 155 320" stroke="#48A9C5" strokeWidth="32" strokeLinecap="round"/>
          
          {/* Central Heart (Teal) */}
          <path d="M256 310C256 310 285 275 315 275C345 275 365 295 355 330C345 365 256 420 256 420C256 420 167 365 157 330C147 295 167 275 197 275C227 275 256 310 256 310Z" fill="#48A9C5" />
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-[900] text-everwell-700 tracking-[0.05em] leading-[0.85]">EVERWELL</h1>
        <p className="text-[0.65rem] md:text-[0.75rem] text-everwell-700 font-bold tracking-[0.4em] mt-1.5 ml-0.5 whitespace-nowrap">HOME CARE</p>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-everwell-50/95 backdrop-blur-sm shadow-sm border-b border-everwell-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div 
            className="cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-95" 
            onClick={() => handleNav('home')}
          >
            <EverwellLogo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-sm font-bold tracking-widest uppercase transition-colors duration-200 relative group ${
                  currentPage === link.id
                    ? 'text-everwell-500'
                    : 'text-everwell-700 hover:text-everwell-500'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-everwell-500 transform origin-left transition-transform duration-300 ${currentPage === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
             <button 
                onClick={() => handleNav('contact')}
                className="bg-everwell-700 hover:bg-everwell-800 text-white px-7 py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2"
             >
                <Icon name="Phone" size={16} />
                <span>(910) 317-3721</span>
             </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-everwell-700 hover:text-everwell-500 p-2"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-everwell-50 border-t border-everwell-200 absolute w-full shadow-2xl animate-fade-in">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`block w-full text-left px-4 py-4 rounded-xl text-base font-bold transition-all ${
                  currentPage === link.id
                    ? 'bg-everwell-100 text-everwell-700'
                    : 'text-everwell-700 hover:bg-everwell-50'
                }`}
              >
                {link.name}
              </button>
            ))}
             <button 
                onClick={() => handleNav('contact')}
                className="w-full mt-6 bg-everwell-700 text-white px-5 py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
             >
                <Icon name="Phone" size={18} />
                <span>Call (910) 317-3721</span>
             </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
