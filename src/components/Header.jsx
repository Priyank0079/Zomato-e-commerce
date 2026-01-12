import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaCaretDown, FaSearch, FaMicrophone, FaUserCircle } from 'react-icons/fa';

const PLACEHOLDERS = [
  "Search 'Biryani'",
  "Search 'Pizza'",
  "Search 'Burger'",
  "Search 'Cake'",
  "Search 'Ice Cream'"
];

const Header = ({ onOpenProfile, onOpenLocation, isVeg, onToggleVeg }) => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Rotate placeholders
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(prev => (prev + 1) % PLACEHOLDERS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Detect scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-white py-3 border-b border-gray-50 shadow-sm'} px-4`}>

      {/* Top Row: Location & Profile */}
      <div className={`flex justify-between items-center gap-2 mb-3 transition-all duration-300 ${isScrolled ? 'mb-2' : 'mb-4'}`}>
        {/* Left Side: Location - Uses min-w-0 and flex-1 to allow truncation */}
        <div
          className="flex items-start gap-2 flex-1 min-w-0 cursor-pointer group active:scale-[0.98] transition-transform"
          onClick={onOpenLocation}
        >
          <div className="mt-1 w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
            <FaMapMarkerAlt className="text-brand-red text-lg shrink-0 animate-bounce" style={{ animationDuration: '3s' }} />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1 cursor-pointer">
              <h1 className="text-lg font-black text-gray-900 truncate tracking-tight group-hover:text-brand-red transition-colors">
                New Palasia
              </h1>
              <FaCaretDown className="text-gray-700 text-sm shrink-0 group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <p className="text-xs text-gray-500 font-medium truncate group-hover:text-gray-700 transition-colors">Indore, Madhya Pradesh</p>
          </div>
        </div>

        {/* Right Side: Actions - shrink-0 prevents it from being squashed */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Veg/Non-Veg Toggle */}
          <div
            className={`w-10 h-6 rounded-full border-2 flex items-center px-1 relative cursor-pointer transition-all duration-300 ${isVeg ? 'border-green-600 bg-green-50' : 'border-red-600 bg-red-50'}`}
            onClick={onToggleVeg}
          >
            <div className={`w-3.5 h-3.5 rounded-full shadow-sm flex items-center justify-center transition-all duration-300 absolute top-1/2 -translate-y-1/2 ${isVeg ? 'left-1 bg-green-600' : 'left-[calc(100%-1.125rem)] bg-red-600'}`}>
              {/* Inner Symbol */}
              {!isVeg && <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[5px] border-b-white transform -translate-y-px"></div>}
            </div>
          </div>

          {/* Profile with ring animation */}
          <div className="relative group cursor-pointer" onClick={onOpenProfile}>
            <div className="absolute inset-0 rounded-full border border-gray-300 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
            <FaUserCircle className="text-3xl text-gray-300 group-hover:text-gray-500 transition-colors relative z-10" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative group">
        <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.03)] group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] group-hover:border-gray-300 transition-all duration-300 focus-within:border-gray-400 focus-within:shadow-md">
          <FaSearch className="text-brand-red text-lg shrink-0 group-hover:scale-110 transition-transform duration-300" />
          <div className="flex-1 ml-3 relative h-5 overflow-hidden">
            {/* Animated Placeholder Input */}
            <input
              type="text"
              className="w-full h-full text-sm text-gray-800 font-medium outline-none bg-transparent absolute inset-0 z-10 placeholder-transparent"
              placeholder="Search..." // Static fallback
            />

            {/* Animated Text below input */}
            <div className="absolute inset-0 flex flex-col transition-transform duration-500 will-change-transform" style={{ transform: `translateY(-${placeholderIndex * 20}px)` }}>
              {PLACEHOLDERS.map((text, i) => (
                <span key={i} className="text-sm font-medium text-gray-400 h-5 flex items-center">{text}</span>
              ))}
            </div>
          </div>

          <div className="border-l border-gray-200 pl-3 ml-2 shrink-0 cursor-pointer">
            <FaMicrophone className="text-brand-red text-lg hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
