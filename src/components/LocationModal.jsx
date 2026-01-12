import React, { useState } from 'react';
import { FaTimes, FaSearch, FaCrosshairs, FaMapMarkerAlt, FaHome, FaBriefcase, FaMapMarkedAlt } from 'react-icons/fa';

const LocationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [searchText, setSearchText] = useState('');

    return (
        <div className="fixed inset-0 z-[70] flex justify-center pointer-events-none">
            {/* Optional Backdrop for when viewed on Desktop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto transition-opacity" onClick={onClose}></div>

            {/* Modal Content - Constrained to Mobile Width */}
            <div className="w-full max-w-[480px] h-full bg-white flex flex-col pointer-events-auto shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300 relative">
                {/* Header */}
                <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3 shadow-sm bg-white sticky top-0 z-10">
                    <button onClick={onClose} className="text-gray-600 text-lg">
                        <FaTimes />
                    </button>
                    <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-800">Select a location</h2>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="px-5 py-4">
                    <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm focus-within:shadow-md focus-within:border-brand-red/50 transition-all">
                        <FaSearch className="text-brand-red text-lg shrink-0" />
                        <input
                            type="text"
                            placeholder="Search for area, street name..."
                            className="flex-1 ml-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none font-medium min-w-0"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            autoFocus
                        />
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-5 pb-6">
                    {/* Current Location Option */}
                    <div className="flex items-center gap-4 py-4 border-b border-gray-100 cursor-pointer group">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent border border-gray-200 group-hover:border-brand-red group-hover:bg-red-50 transition-colors">
                            <FaCrosshairs className="text-brand-red text-sm" />
                        </div>
                        <div>
                            <h3 className="text-brand-red font-bold text-sm">Use current location</h3>
                            <p className="text-xs text-gray-400 mt-0.5">Using GPS</p>
                        </div>
                    </div>

                    {/* Map Logo Visualization */}
                    <div className="my-8 flex justify-center opacity-80">
                        <div className="relative w-full max-w-[280px] h-40 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                            <div className="text-center z-10">
                                <FaMapMarkedAlt className="text-5xl text-gray-300 mx-auto mb-2" />
                                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Map View</p>
                            </div>
                            {/* Floating Pins */}
                            <FaMapMarkerAlt className="absolute top-8 left-12 text-brand-red/40 text-xl animate-bounce" style={{ animationDelay: '0s' }} />
                            <FaMapMarkerAlt className="absolute bottom-10 right-16 text-brand-red/60 text-2xl animate-bounce" style={{ animationDelay: '0.2s' }} />
                            <FaMapMarkerAlt className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-red text-3xl drop-shadow-lg" />
                        </div>
                    </div>

                    {/* Saved Addresses */}
                    <div className="mb-6">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Saved Addresses</h4>

                        <div className="space-y-6">
                            <div className="flex gap-4 cursor-pointer hover:bg-gray-50 -mx-2 p-2 rounded-lg transition-colors">
                                <FaHome className="text-xl text-gray-400 mt-0.5" />
                                <div>
                                    <h5 className="font-bold text-gray-800 text-sm">Home</h5>
                                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                        201, Green Heights, New Palasia, Indore, Madhya Pradesh - 452001
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 cursor-pointer hover:bg-gray-50 -mx-2 p-2 rounded-lg transition-colors">
                                <FaBriefcase className="text-lg text-gray-400 mt-1" />
                                <div>
                                    <h5 className="font-bold text-gray-800 text-sm">Work</h5>
                                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                        C21 Business Park, Pushp Vihar Colony, Indore, Madhya Pradesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Locations */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Recent Locations</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 cursor-pointer text-gray-600 hover:text-brand-red transition-colors">
                                <FaMapMarkerAlt className="text-gray-300" />
                                <span className="text-sm font-medium">Bhawarkua Main Rd, Indore</span>
                            </div>
                            <div className="flex items-center gap-3 cursor-pointer text-gray-600 hover:text-brand-red transition-colors">
                                <FaMapMarkerAlt className="text-gray-300" />
                                <span className="text-sm font-medium">Vijay Nagar, Indore</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationModal;
