import React from 'react';
import { FaTimes, FaMapMarkerAlt, FaStar, FaUtensils, FaRegClock, FaCalendarAlt } from 'react-icons/fa';

const DINING_SPOTS = [
    {
        id: 'd1',
        name: 'Sayaji Hotel',
        location: 'Vijay Nagar, Indore',
        rating: 4.8,
        cuisine: 'North Indian, Buffet',
        image: '/images/restaurant-placeholder.jpg',
        dist: '2.5 km',
        table: 'Available'
    },
    {
        id: 'd2',
        name: 'The Square - Sayaji',
        location: 'Vijay Nagar, Indore',
        rating: 4.7,
        cuisine: 'Continental, Italian',
        image: '/images/cake.png',
        dist: '2.5 km',
        table: 'Few Left'
    },
    {
        id: 'd3',
        name: 'Fitoor',
        location: 'New Palasia, Indore',
        rating: 4.5,
        cuisine: 'Bar, North Indian',
        image: '/images/samosa.png',
        dist: '4.0 km',
        table: 'Book Early'
    },
    {
        id: 'd4',
        name: 'Shreemaya Celebrity',
        location: 'AB Road, Indore',
        rating: 4.6,
        cuisine: 'Pure Veg, Indian',
        image: '/images/poha.png',
        dist: '3.2 km',
        table: 'Available'
    }
];

const DiningModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" onClick={onClose}></div>

            {/* Centered Modal */}
            <div className="relative w-full max-w-[360px] h-[65vh] bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 fade-in duration-300 ring-1 ring-white/20">

                {/* Header */}
                <div className="px-6 py-5 bg-gradient-to-br from-blue-600 to-indigo-700 text-white shrink-0 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    <div className="relative z-10 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-black tracking-tight">Dining Out</h2>
                            <p className="text-[10px] font-bold text-blue-100 uppercase tracking-wider opacity-80">Book a Table</p>
                        </div>
                        <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                            <FaTimes className="text-white text-xs" />
                        </button>
                    </div>
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {DINING_SPOTS.map((spot) => (
                        <div key={spot.id} className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col gap-3 group hover:shadow-md transition-shadow">

                            {/* Image & Overlay */}
                            <div className="w-full h-32 rounded-xl relative overflow-hidden bg-gray-100">
                                <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-sm">
                                    <span className="text-[10px] font-black text-gray-800">{spot.rating}</span>
                                    <FaStar className="text-[8px] text-yellow-500" />
                                </div>
                                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-lg flex items-center gap-1">
                                    <FaMapMarkerAlt className="text-[8px] text-white" />
                                    <span className="text-[10px] font-bold text-white tracking-wide">{spot.dist}</span>
                                </div>
                            </div>

                            {/* Details */}
                            <div>
                                <h3 className="font-extrabold text-gray-800 text-lg leading-tight">{spot.name}</h3>
                                <p className="text-xs text-gray-500 font-medium mb-1">{spot.cuisine}</p>
                                <div className="flex items-center gap-1 text-gray-400 text-[10px]">
                                    <FaMapMarkerAlt className="text-[8px]" /> {spot.location}
                                </div>
                            </div>

                            {/* Action Loop */}
                            <div className="flex items-center gap-2 mt-1">
                                <div className="flex-1 bg-gray-50 rounded-lg p-2 flex items-center justify-center gap-1.5 border border-gray-100">
                                    <FaCalendarAlt className="text-gray-400 text-[10px]" />
                                    <span className="text-[10px] font-bold text-gray-600">Today</span>
                                </div>
                                <button
                                    onClick={() => alert(`Booking functionality for ${spot.name} coming soon!`)}
                                    className="flex-[2] bg-blue-600 text-white text-[10px] font-bold py-2.5 rounded-xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all hover:bg-blue-700 flex items-center justify-center gap-2 uppercase tracking-wide"
                                >
                                    Book Table
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="text-center py-6">
                        <div className="inline-block p-3 rounded-full bg-gray-100 mb-2">
                            <FaUtensils className="text-xl text-gray-400" />
                        </div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Explore more spots</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiningModal;
