import React from 'react';

const CATEGORIES = [
    { id: 1, name: 'Biryani', img: '/images/poha.png' },
    { id: 2, name: 'Pizza', img: '/images/samosa.png' },
    { id: 3, name: 'Burger', img: '/images/sandwich.png' },
    { id: 4, name: 'Cake', img: '/images/cake.png' },
    { id: 5, name: 'Thali', img: '/images/poha.png' },
    { id: 6, name: 'Rolls', img: '/images/samosa.png' },
    { id: 7, name: 'Chicken', img: '/images/restaurant-placeholder.jpg' },
    { id: 8, name: 'Noodles', img: '/images/sandwich.png' },
    { id: 9, name: 'Dosa', img: '/images/poha.png' },
    { id: 10, name: 'Paratha', img: '/images/samosa.png' },
    { id: 11, name: 'Ice Cream', img: '/images/cake.png' },
];

const CategoryScroll = ({ onCategoryClick }) => {
    return (
        <div className="mb-6">
            <div className="px-4 mb-4 flex items-center justify-between">
                <h3 className="font-bold text-gray-800 tracking-wide uppercase text-sm">Eat what makes you happy</h3>
            </div>
            <div className="flex overflow-x-auto px-4 gap-6 no-scrollbar pb-2">
                {CATEGORIES.map((cat) => (
                    <div
                        key={cat.id}
                        className="flex flex-col items-center min-w-[76px] gap-2 cursor-pointer group active:scale-95 transition-transform"
                        onClick={() => onCategoryClick && onCategoryClick(cat.name)}
                    >
                        <div className="w-[76px] h-[76px] rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow bg-gray-100">
                            <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 group-hover:text-black">{cat.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryScroll;
