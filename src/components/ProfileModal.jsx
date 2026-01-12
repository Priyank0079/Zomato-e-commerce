import React from 'react';
import { FaTimes, FaUser, FaCrown, FaHistory, FaMapMarkerAlt, FaHeadset, FaCog, FaSignOutAlt, FaChevronRight, FaHeart } from 'react-icons/fa';

const ProfileModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const user = {
        name: 'Priyank Patel',
        email: 'priyank.patel@example.com',
        phone: '+91 98765 43210',
        memberSince: '2023',
    };

    return (
        <div className="fixed inset-0 z-[90] flex justify-center pointer-events-none">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto transition-opacity" onClick={onClose}></div>

            {/* Modal Content - Side Drawer Style or Bottom Sheet */}
            <div className="w-full max-w-[480px] h-full bg-gray-50 flex flex-col pointer-events-auto shadow-2xl animate-in slide-in-from-right duration-300 relative">

                {/* Header / Profile Card */}
                <div className="bg-white pb-6 rounded-b-[2rem] shadow-sm relative overflow-hidden">
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-100"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

                    <div className="relative px-6 pt-12">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors backdrop-blur-md" onClick={onClose}>
                                <FaTimes className="text-white text-lg" />
                            </div>
                            <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center gap-1 shadow-lg shadow-yellow-500/20">
                                <FaCrown className="text-white text-xs" />
                                <span className="text-[10px] font-black text-white tracking-wider uppercase">Gold Member</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-20 h-20 rounded-full border-4 border-white/10 p-1 relative">
                                <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                                    <img src="https://ui-avatars.com/api/?name=Priyank+Patel&background=random" alt="Profile" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-gray-900 rounded-full"></div>
                            </div>
                            <div className="text-white">
                                <h2 className="text-2xl font-black tracking-tight">{user.name}</h2>
                                <p className="text-white/60 text-sm font-medium">{user.email}</p>
                                <p className="text-white/60 text-xs mt-1">{user.phone}</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex justify-between px-8 mt-8 relative z-10">
                        <div className="text-center">
                            <h4 className="text-white font-black text-xl">124</h4>
                            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Orders</p>
                        </div>
                        <div className="w-px bg-white/10"></div>
                        <div className="text-center">
                            <h4 className="text-white font-black text-xl">₹8.5k</h4>
                            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Saved</p>
                        </div>
                        <div className="w-px bg-white/10"></div>
                        <div className="text-center">
                            <h4 className="text-white font-black text-xl">4.8</h4>
                            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Rating</p>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">

                    {/* Zomato Gold Card */}
                    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black p-5 rounded-2xl shadow-xl relative overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform">
                        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                        <div className="relative z-10 flex justify-between items-center">
                            <div>
                                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 font-black text-lg italic uppercase tracking-tighter">Zomato Gold</h3>
                                <p className="text-gray-400 text-xs mt-1 font-medium">Free delivery on all orders</p>
                            </div>
                            <button className="bg-white text-black font-extrabold text-xs px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                UPGRADE
                            </button>
                        </div>
                    </div>

                    {/* Menu List */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <MenuItem icon={FaHistory} label="Your Orders" sub="View past orders" />
                        <MenuItem icon={FaHeart} label="Favorite Orders" sub="Reorder your favorites" />
                        <MenuItem icon={FaMapMarkerAlt} label="Address Book" sub="Manage delivery addresses" />
                        <MenuItem icon={FaHeadset} label="Online Ordering Help" sub="Get help with recent orders" />
                    </div>

                    {/* Settings & Logout */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <MenuItem icon={FaCog} label="Settings" sub="Notifications, Password" />
                        <div className="p-4 flex items-center gap-4 cursor-pointer hover:bg-red-50 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-red-100 transition-colors">
                                <FaSignOutAlt />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-red-500 text-sm">Logout</h4>
                                <p className="text-red-300 text-[10px] font-medium">Sign out of your account</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center py-6">
                        <p className="text-xs text-gray-400 font-medium">App Version 4.2.0</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

// Helper Component for Menu Items
const MenuItem = ({ icon: Icon, label, sub }) => (
    <div className="p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 group">
        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors">
            <Icon />
        </div>
        <div className="flex-1">
            <h4 className="font-bold text-gray-800 text-sm group-hover:text-brand-red transition-colors">{label}</h4>
            <p className="text-gray-400 text-[10px] font-medium">{sub}</p>
        </div>
        <FaChevronRight className="text-gray-300 text-xs" />
    </div>
);

export default ProfileModal;
