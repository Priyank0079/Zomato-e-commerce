import React from 'react';
import { FaHeart, FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-gray-50 text-gray-800 pt-12 pb-24 mt-8 rounded-t-[2.5rem] relative overflow-hidden font-sans border-t border-gray-200">
            {/* Animated gradient top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-orange-400 to-yellow-400"></div>

            {/* Content */}
            <div className="flex flex-col items-center text-center relative z-10 px-6">

                {/* Profile / Owner Section */}
                <div className="mb-8 transform hover:scale-105 transition-transform duration-300 group">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-lg shadow-gray-200 border-2 border-brand-red/10 group-hover:border-brand-red transition-colors">
                        <FaUser className="text-2xl text-gray-400 group-hover:text-brand-red transition-colors" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-1">
                        Priyank Patel
                    </h3>
                    <span className="text-[10px] font-bold text-brand-red tracking-[0.2em] uppercase bg-brand-red/5 border border-brand-red/10 py-1 px-3 rounded-full inline-block">
                        Owner & UI Architect
                    </span>
                </div>

                {/* Contact info with hover animations */}
                <div className="space-y-3 w-full max-w-xs">
                    {/* Email Card */}
                    <a href="mailto:priyank4u777@gmail.com" className="group flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-100 hover:border-brand-red/30 hover:bg-red-50/30 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
                        <div className="flex items-center gap-4 overflow-hidden w-full">
                            <div className="bg-red-50 p-2.5 rounded-full text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shrink-0">
                                <FaEnvelope className="text-sm" />
                            </div>
                            <div className="flex flex-col items-start min-w-0">
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Email</span>
                                <span className="text-sm text-gray-800 font-bold tracking-wide truncate w-full text-left group-hover:text-brand-red transition-colors">priyank4u777@gmail.com</span>
                            </div>
                        </div>
                    </a>

                    {/* Phone Card */}
                    <a href="tel:8340425" className="group flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-100 hover:border-green-500/30 hover:bg-green-50/30 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
                        <div className="flex items-center gap-4 w-full">
                            <div className="bg-green-50 p-2.5 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shrink-0">
                                <FaPhoneAlt className="text-sm" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Call</span>
                                <span className="text-sm text-gray-800 font-bold tracking-wide group-hover:text-green-600 transition-colors">8340425###</span>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Footer Note */}
                <div className="mt-12 flex items-center justify-center gap-2 opacity-60 text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                    <span>Made with</span>
                    <FaHeart className="text-brand-red animate-pulse drop-shadow-sm text-xs" />
                    <span>for Foodies</span>
                </div>
            </div>

            {/* Decorative background blobs - lighter for light theme */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none z-0 opacity-40">
                <div className="absolute top-10 left-10 w-48 h-48 bg-brand-red/5 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-yellow-400/10 rounded-full blur-[80px]"></div>
            </div>
        </div>
    );
};

export default Footer;
