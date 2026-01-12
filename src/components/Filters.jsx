import React from 'react';
import { FaSortAmountDown } from 'react-icons/fa';

const Filters = () => {
    return (
        <div className="sticky top-[138px] z-40 bg-white py-3 border-b border-gray-100 shadow-sm">
            <div className="flex gap-3 overflow-x-auto px-4 no-scrollbar">
                <button className="flex items-center gap-1 bg-white border border-gray-300 rounded-lg px-2.5 py-1.5 shadow-sm active:scale-95 transition-all">
                    <FaSortAmountDown className="text-xs" />
                    <span className="text-xs font-bold text-gray-700 whitespace-nowrap">Sort</span>
                    <span className="text-[9px] bg-red-500 text-white px-1 rounded-sm ml-1">1</span>
                </button>

                <button className="bg-white border border-gray-300 rounded-lg px-3 py-1.5 shadow-sm text-xs font-bold text-gray-700 whitespace-nowrap active:scale-95 transition-all">
                    Near & Fast
                </button>

                <button className="bg-white border border-gray-300 rounded-lg px-3 py-1.5 shadow-sm text-xs font-bold text-gray-700 whitespace-nowrap active:scale-95 transition-all">
                    Great Offers
                </button>

                <button className="bg-white border border-gray-300 rounded-lg px-3 py-1.5 shadow-sm text-xs font-bold text-gray-700 whitespace-nowrap active:scale-95 transition-all">
                    Rating 4.0+
                </button>

                <button className="bg-white border border-gray-300 rounded-lg px-3 py-1.5 shadow-sm text-xs font-bold text-gray-700 whitespace-nowrap active:scale-95 transition-all">
                    Pure Veg
                </button>
            </div>
        </div>
    );
};

export default Filters;
