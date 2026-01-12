import React, { useState, useEffect } from 'react';

const BANNERS = [
    {
        id: 1,
        title: "FLAT 50% OFF",
        subtitle: "WELCOME OFFER",
        cta: "Order Now",
        gradient: "from-violet-600 via-purple-600 to-indigo-600",
        textColor: "text-purple-700",
        image: "/images/banner.png"
    },
    {
        id: 2,
        title: "FREE DELIVERY",
        subtitle: "ON FIRST ORDER",
        cta: "Claim Now",
        gradient: "from-orange-500 via-red-500 to-pink-600",
        textColor: "text-red-600",
        image: "/images/poha.png"
    },
    {
        id: 3,
        title: "SWEET TREATS",
        subtitle: "TRY NEW DESSERTS",
        cta: "Explore",
        gradient: "from-pink-500 via-rose-500 to-red-500",
        textColor: "text-rose-600",
        image: "/images/cake.png"
    }
];

const PromoBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % BANNERS.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const banner = BANNERS[currentIndex];

    return (
        <div className="px-4 py-6">
            <div className={`bg-gradient-to-r ${banner.gradient} rounded-2xl p-5 relative overflow-hidden shadow-lg h-[160px] flex items-center transition-all duration-500 ease-in-out`}>
                <div className="z-10 w-2/3 animate-in fade-in slide-in-from-left-4 duration-500" key={banner.id}>
                    <p className="text-white/90 text-xs font-semibold tracking-wider mb-1">{banner.subtitle}</p>
                    <h2 className="text-white text-3xl font-black italic tracking-tight mb-4">{banner.title}</h2>
                    <button className={`bg-white ${banner.textColor} text-xs font-extrabold px-5 py-2.5 rounded-full shadow-md active:scale-95 transition-transform uppercase tracking-wide`}>
                        {banner.cta}
                    </button>
                </div>

                {/* Decorative & Food Images */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2">
                    <img
                        key={`img-${banner.id}`}
                        src={banner.image}
                        alt="Promo"
                        className="w-[140%] max-w-none absolute -right-4 top-1/2 -translate-y-1/2 object-contain drop-shadow-2xl animate-in fade-in slide-in-from-right-4 duration-500"
                    />
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {BANNERS.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;
