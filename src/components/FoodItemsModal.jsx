import React from 'react';
import { FaArrowLeft, FaStar, FaPlus, FaCircle, FaCaretUp, FaHeart } from 'react-icons/fa';

const FoodItemsModal = ({ isOpen, onClose, category, items }) => {
    if (!isOpen) return null;

    // Helper to determine simulated Veg/Non-Veg based on category names usually
    const isVegCategory = ['Biryani', 'Pizza', 'Burger', 'Chinese'].includes(category) ? false : true; // Just a rough logic, or simple random

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" onClick={onClose}></div>

            {/* Centered Card */}
            <div className="relative w-full max-w-[360px] h-[65vh] bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 fade-in duration-300 ring-1 ring-white/20">

                {/* Header with decorative bg */}
                <div className="relative px-6 py-5 bg-gradient-to-r from-gray-900 to-gray-800 shrink-0">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-black text-white tracking-tight">{category}</h2>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{items ? items.length : 0} items</span>
                        </div>
                        <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                            <FaArrowLeft className="text-xs" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
                    {items && items.map((item, idx) => (
                        <div key={item.id} className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-3 group active:scale-[0.98] transition-transform">
                            {/* Image with Tag */}
                            <div className="w-24 h-24 rounded-xl relative overflow-hidden shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute bottom-1 right-1 bg-white/95 backdrop-blur-sm px-1.5 py-0.5 rounded-lg flex items-center gap-0.5 shadow-sm">
                                    <span className="text-[10px] font-black text-gray-800">{item.rating}</span>
                                    <FaStar className="text-[8px] text-yellow-500" />
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-extrabold text-gray-800 text-sm leading-tight line-clamp-2">{item.name}</h3>
                                        {/* Mock Veg/Non-Veg */}
                                        <div className={`shrink-0 w-3 h-3 border flex items-center justify-center p-[1px] ${idx % 2 === 0 ? 'border-green-600' : 'border-red-600'} rounded-sm mt-0.5`}>
                                            <div className={`w-full h-full rounded-full ${idx % 2 === 0 ? 'bg-green-600' : 'bg-red-600'}`} />
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-gray-400 font-medium line-clamp-2 mt-1 leading-relaxed">{item.desc}</p>
                                </div>

                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-sm font-black text-gray-900">{item.price}</span>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); alert(`Added ${item.name}`); }}
                                        className="bg-gray-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg shadow-gray-900/20 active:scale-90 transition-transform flex items-center gap-1"
                                    >
                                        ADD <FaPlus className="text-[8px]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {(!items || items.length === 0) && (
                        <div className="flex flex-col items-center justify-center h-40 text-center opacity-50">
                            <FaCircle className="text-gray-200 text-3xl mb-2" />
                            <p className="font-bold text-gray-400 text-sm">No items found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FoodItemsModal;
