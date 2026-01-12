import React, { useState } from 'react';
import { FaTimes, FaWallet, FaCreditCard, FaGooglePay, FaAngleRight } from 'react-icons/fa';

const MoneyModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [amount, setAmount] = useState('');
    const [selectedMethod, setSelectedMethod] = useState('');

    const handlePayment = (e) => {
        e.preventDefault();
        if (!amount) alert('Please enter an amount');
        else if (!selectedMethod) alert('Please select a payment method');
        else {
            alert(`Processing ₹${amount} via ${selectedMethod}...`);
            onClose();
        }
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
                    <div className="flex items-center gap-2">
                        <div className="bg-brand-red/10 p-2 rounded-full text-brand-red">
                            <FaWallet />
                        </div>
                        <h2 className="text-xl font-black text-gray-800 tracking-tight">Add Money</h2>
                    </div>
                    <button onClick={onClose} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                        <FaTimes className="text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handlePayment} className="space-y-6">
                    {/* Amount Input */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Enter Amount</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-400">₹</span>
                            <input
                                type="number"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-4 text-2xl font-bold text-gray-800 focus:outline-none focus:border-brand-red transition-all placeholder:text-gray-300"
                                placeholder="0"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                autoFocus
                            />
                        </div>
                        {/* Quick amounts */}
                        <div className="flex gap-2 mt-3">
                            {[100, 200, 500, 1000].map(val => (
                                <button
                                    key={val}
                                    type="button"
                                    onClick={() => setAmount(val)}
                                    className="px-3 py-1 rounded-full border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-100 hover:border-gray-300 transition-colors"
                                >
                                    +₹{val}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Select Payment Mode</label>

                        <div className="space-y-3">
                            {/* UPI */}
                            <label className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${selectedMethod === 'UPI' ? 'border-brand-red bg-red-50/50' : 'border-gray-100 hover:border-gray-200'}`}>
                                <input
                                    type="radio"
                                    name="payment"
                                    className="hidden"
                                    value="UPI"
                                    onChange={(e) => setSelectedMethod(e.target.value)}
                                />
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                                    <FaGooglePay className="text-xl text-gray-700" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-800 text-sm">Pay via UPI</h4>
                                    <p className="text-[10px] text-gray-500 font-medium">Google Pay, PhonePe, Paytm</p>
                                </div>
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedMethod === 'UPI' ? 'border-brand-red' : 'border-gray-300'}`}>
                                    {selectedMethod === 'UPI' && <div className="w-2 h-2 bg-brand-red rounded-full"></div>}
                                </div>
                            </label>

                            {/* Cards */}
                            <label className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${selectedMethod === 'Card' ? 'border-brand-red bg-red-50/50' : 'border-gray-100 hover:border-gray-200'}`}>
                                <input
                                    type="radio"
                                    name="payment"
                                    className="hidden"
                                    value="Card"
                                    onChange={(e) => setSelectedMethod(e.target.value)}
                                />
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                                    <FaCreditCard className="text-sm text-gray-700" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-800 text-sm">Debit / Credit Card</h4>
                                    <p className="text-[10px] text-gray-500 font-medium">Visa, Mastercard, Rupay</p>
                                </div>
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedMethod === 'Card' ? 'border-brand-red' : 'border-gray-300'}`}>
                                    {selectedMethod === 'Card' && <div className="w-2 h-2 bg-brand-red rounded-full"></div>}
                                </div>
                            </label>
                        </div>

                        <button type="button" className="w-full mt-3 flex items-center justify-between p-3 text-xs font-bold text-gray-500 hover:text-gray-800 transition-colors">
                            <span>More Payment Options</span>
                            <FaAngleRight />
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-brand-red text-white font-bold text-lg py-3.5 rounded-xl shadow-lg shadow-brand-red/30 active:scale-95 transition-transform"
                        disabled={!amount || !selectedMethod}
                    >
                        Add ₹{amount || '0'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MoneyModal;
