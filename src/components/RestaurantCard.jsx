import React from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';

const RestaurantCard = ({ data }) => {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-xl transition-shadow duration-300 cursor-pointer relative">
            <div className="relative h-44 overflow-hidden">
                <img src={data.image} alt={data.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                {/* Offer Tag */}
                {data.offer && (
                    <div className="absolute bottom-3 left-0 bg-blue-600 shadow-md text-white text-[10px] font-extrabold px-3 py-1 rounded-r-md uppercase tracking-wider">
                        {data.offer}
                    </div>
                )}

                {/* Bookmark */}
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full cursor-pointer hover:bg-white text-gray-500 hover:text-red-500 transition-colors">
                    <FaHeart className="text-sm" />
                </div>

                {/* Delivery Time Pill */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-gray-800 shadow-sm">
                    {data.time}
                </div>
            </div>

            <div className="p-3">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-base text-gray-900 line-clamp-1">{data.name}</h3>
                    <div className="flex items-center gap-1 bg-green-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[4px]">
                        {data.rating} <FaStar className="text-[8px]" />
                    </div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
                    <p className="truncate w-32">{data.cuisine}</p>
                    <p>{data.price}</p>
                </div>

                <div className="mt-2 pt-2 border-t border-gray-100 flex items-center gap-2">
                    <img src="/vite.svg" className="w-4 h-4 opacity-50 grayscale" alt="icon" />
                    <span className="text-[10px] text-gray-400 font-medium">Safe & Hygienic packaging</span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
