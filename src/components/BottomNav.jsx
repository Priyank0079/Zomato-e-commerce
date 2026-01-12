import React from 'react';
import { FaHome, FaUtensils, FaShoppingBag, FaWallet } from 'react-icons/fa';

const BottomNav = ({ onOpenDelivery, onOpenMoney, onOpenReorder, onOpenDining }) => {
    return (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white border-t border-gray-200 py-2.5 px-6 flex justify-between items-center z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
            <div
                className="flex flex-col items-center gap-1 cursor-pointer active:scale-95 transition-transform"
                onClick={onOpenDelivery}
            >
                <div className="text-brand-red">
                    <FaHome className="text-xl" />
                </div>
                <span className="text-[10px] font-bold text-brand-red">Delivery</span>
            </div>

            <div
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer active:scale-95 transition-transform"
                onClick={onOpenDining}
            >
                <FaUtensils className="text-xl" />
                <span className="text-[10px] font-medium">Dining</span>
            </div>

            <div
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer active:scale-95 transition-transform"
                onClick={onOpenReorder}
            >
                <FaShoppingBag className="text-xl" />
                <span className="text-[10px] font-medium">Reorder</span>
            </div>

            <div
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer active:scale-95 transition-transform"
                onClick={onOpenMoney}
            >
                <FaWallet className="text-xl" />
                <span className="text-[10px] font-medium">Money</span>
            </div>
        </div>
    );
};

export default BottomNav;
