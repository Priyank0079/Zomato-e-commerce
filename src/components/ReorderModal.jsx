import React from 'react';
import { FaTimes, FaHistory, FaCheckCircle, FaRedo, FaStar } from 'react-icons/fa';

const PAST_ORDERS = [
    {
        id: 'o1',
        restaurant: 'Meghana Foods',
        items: 'Chicken Boneless Biryani, Thumbs Up',
        price: '₹380',
        date: 'Yesterday, 8:30 PM',
        rating: 5,
        image: '/images/restaurant-placeholder.jpg',
        live: false
    },
    {
        id: 'o2',
        restaurant: 'Burger King',
        items: '2x Crispy Veg Burger, Fries (M)',
        price: '₹248',
        date: '2 Days ago',
        rating: 4,
        image: '/images/sandwich.png',
        live: false
    },
    {
        id: 'o3',
        restaurant: 'Pizza Hut',
        items: 'Non-Veg Supreme (Med), Garlic Bread',
        price: '₹560',
        date: '10 Jan 2026',
        rating: 3,
        image: '/images/samosa.png',
        live: false
    },
    {
        id: 'o4',
        restaurant: 'Chai Point',
        items: 'Ginger Tea (500ml), Bun Maska',
        price: '₹190',
        date: '08 Jan 2026',
        rating: 5,
        image: '/images/poha.png',
        live: false
    }
];

const ReorderModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" onClick={onClose}></div>

            {/* Centered Modal */}
            <div className="relative w-full max-w-[360px] h-[65vh] bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 fade-in duration-300 ring-1 ring-white/20">

                {/* Header */}
                <div className="px-6 py-5 bg-gradient-to-br from-brand-red to-red-600 text-white shrink-0 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
                    <div className="relative z-10 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-black tracking-tight">Reorder</h2>
                            <p className="text-[10px] font-bold text-red-100 uppercase tracking-wider opacity-80">Favourites</p>
                        </div>
                        <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                            <FaTimes className="text-white text-xs" />
                        </button>
                    </div>
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {PAST_ORDERS.map((order) => (
                        <div key={order.id} className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col gap-3 group hover:shadow-md transition-shadow">

                            {/* Top Row: Image & Rest Name */}
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                                    <img src={order.image} alt={order.restaurant} className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-extrabold text-gray-800 text-sm truncate">{order.restaurant}</h3>
                                    <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">{order.items}</p>
                                </div>
                                <div className="shrink-0 flex flex-col items-end">
                                    <span className="text-xs font-black text-gray-900">{order.price}</span>
                                    <div className="flex gap-0.5 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={`text-[8px] ${i < order.rating ? 'text-yellow-400' : 'text-gray-200'}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Reorder Button (Full Width) */}
                            <button
                                onClick={() => alert(`Reordering from ${order.restaurant}`)}
                                className="w-full flex items-center justify-center gap-2 bg-white border border-brand-red/20 text-brand-red text-[10px] font-bold py-2 rounded-xl shadow-sm active:scale-[0.98] transition-all hover:bg-brand-red hover:text-white"
                            >
                                <FaRedo className="text-[9px]" /> REPEAT ORDER
                            </button>
                        </div>
                    ))}

                    <div className="text-center py-6">
                        <div className="inline-block p-3 rounded-full bg-gray-100 mb-2">
                            <FaHistory className="text-xl text-gray-400" />
                        </div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">No more history</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReorderModal;
