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

  // Custom SVG Logo Component matching the user's description (Hands holding heart)
  const EverwellLogo = () => (
    <div className="flex items-center gap-3">
      <div className="relative w-14 h-14 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
           {/* Heart in center */}
           <path d="M50 45 C50 45 58 35 66 38 C72 40 72 48 64 56 L50 68 L36 56 C28 48 28 40 34 38 C42 35 50 45 50 45" fill="#48A9C5" />

           {/* Left Hand (Blue) #64C3D8 */}
           {/* Wrist/Thumb */}
           <path d="M30 30 C 15 30 10 50 20 70" stroke="#64C3D8" strokeWidth="7" strokeLinecap="round" />
           {/* Fingers */}
           <path d="M22 62 Q 40 70 55 62" stroke="#64C3D8" strokeWidth="5" strokeLinecap="round" />
           <path d="M25 75 Q 45 82 58 72" stroke="#64C3D8" strokeWidth="5" strokeLinecap="round" />

           {/* Right Hand (Green) #7AD0AC */}
           {/* Wrist/Thumb */}
           <path d="M70 30 C 85 30 90 50 80 70" stroke="#7AD0AC" strokeWidth="7" strokeLinecap="round" />
           {/* Fingers */}
           <path d="M78 62 Q 60 70 45 62" stroke="#7AD0AC" strokeWidth="5" strokeLinecap="round" />
           <path d="M75 75 Q 55 82 42 72" stroke="#7AD0AC" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-extrabold text-everwell-700 tracking-wider leading-none">EVERWELL</h1>
        <p className="text-xs text-everwell-700 font-bold tracking-[0.2em] mt-1">HOME CARE</p>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-everwell-50/95 backdrop-blur-sm shadow-sm border-b border-everwell-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div 
            className="cursor-pointer" 
            onClick={() => handleNav('home')}
          >
            <EverwellLogo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-sm font-bold tracking-wide transition-colors duration-200 ${
                  currentPage === link.id
                    ? 'text-everwell-500'
                    : 'text-everwell-700 hover:text-everwell-500'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
             <button 
                onClick={() => handleNav('contact')}
                className="bg-everwell-700 hover:bg-everwell-800 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2"
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
        <div className="md:hidden bg-everwell-50 border-t border-everwell-200 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-bold ${
                  currentPage === link.id
                    ? 'bg-everwell-100 text-everwell-700'
                    : 'text-everwell-700 hover:bg-everwell-100'
                }`}
              >
                {link.name}
              </button>
            ))}
             <button 
                onClick={() => handleNav('contact')}
                className="w-full mt-4 bg-everwell-700 text-white px-5 py-3 rounded-lg font-bold shadow-md flex items-center justify-center gap-2"
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