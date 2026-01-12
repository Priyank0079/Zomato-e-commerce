import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const DeliveryFormModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}! We will contact you at ${formData.contact}.`);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center pointer-events-none">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-white w-full max-w-md p-6 rounded-t-3xl sm:rounded-2xl shadow-2xl transform transition-transform duration-300 pointer-events-auto relative">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-black text-gray-800 tracking-tight">Delivery Details</h2>
                    <button onClick={onClose} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                        <FaTimes className="text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Name</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium focus:outline-none focus:border-brand-red/50 focus:ring-4 focus:ring-brand-red/10 transition-all"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Contact Number</label>
                        <input
                            type="tel"
                            required
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium focus:outline-none focus:border-brand-red/50 focus:ring-4 focus:ring-brand-red/10 transition-all"
                            placeholder="Enter mobile number"
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium focus:outline-none focus:border-brand-red/50 focus:ring-4 focus:ring-brand-red/10 transition-all"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-brand-red text-white font-bold text-lg py-3.5 rounded-xl shadow-lg shadow-brand-red/30 active:scale-95 transition-transform mt-4"
                    >
                        Submit Details
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DeliveryFormModal;
