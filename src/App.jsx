import React, { useState } from 'react';
import Header from './components/Header';
import PromoBanner from './components/PromoBanner';
import CategoryScroll from './components/CategoryScroll';
import Filters from './components/Filters';
import RestaurantCard from './components/RestaurantCard';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import DeliveryFormModal from './components/DeliveryFormModal';
import ProfileModal from './components/ProfileModal';
import MoneyModal from './components/MoneyModal';
import LocationModal from './components/LocationModal';
import FoodItemsModal from './components/FoodItemsModal';
import ReorderModal from './components/ReorderModal';
import DiningModal from './components/DiningModal';
import { CATEGORY_ITEMS } from './data/mockData';

const VEG_RESTAURANTS = [
    {
        id: 1,
        name: "Pure Veg Meals",
        rating: 4.4,
        time: "32 mins",
        cuisine: "North Indian, Thali",
        price: "₹350 for two",
        offer: "60% OFF",
        image: "/images/poha.png"
    },
    {
        id: 2,
        name: "Burger King",
        rating: 4.1,
        time: "25 mins",
        cuisine: "Veg Burger, American",
        price: "₹250 for two",
        offer: "FREE WHOPPER",
        image: "/images/sandwich.png"
    },
    {
        id: 3,
        name: "Kwality Wall's",
        rating: 4.5,
        time: "15 mins",
        cuisine: "Ice Cream, Desserts",
        price: "₹150 for two",
        offer: "40% OFF",
        image: "/images/cake.png"
    },
    {
        id: 4,
        name: "Pizza Hut",
        rating: 3.8,
        time: "45 mins",
        cuisine: "Veg Pizza, Fast Food",
        price: "₹400 for two",
        offer: "ITEMS AT ₹179",
        image: "/images/samosa.png"
    },
    {
        id: 5,
        name: "Chai Point",
        rating: 4.3,
        time: "20 mins",
        cuisine: "Tea, Beverages",
        price: "₹200 for two",
        offer: "",
        image: "/images/poha.png"
    },
    {
        id: 6,
        name: "Truffles",
        rating: 4.6,
        time: "50 mins",
        cuisine: "Veg Continental",
        price: "₹600 for two",
        offer: "10% OFF",
        image: "/images/sandwich.png"
    }
];

const NON_VEG_RESTAURANTS = [
    {
        id: 1,
        name: "Chicken House",
        rating: 4.2,
        time: "30 mins",
        cuisine: "Chicken, North Indian",
        price: "₹450 for two",
        offer: "50% OFF",
        image: "/images/restaurant-placeholder.jpg"
    },
    {
        id: 2,
        name: "KFC",
        rating: 4.0,
        time: "25 mins",
        cuisine: "Chicken, Fast Food",
        price: "₹500 for two",
        offer: "20% OFF",
        image: "/images/restaurant-placeholder.jpg"
    },
    {
        id: 3,
        name: "Biryani Zone",
        rating: 4.3,
        time: "40 mins",
        cuisine: "Chicken Biryani",
        price: "₹400 for two",
        offer: "Flat ₹100 OFF",
        image: "/images/restaurant-placeholder.jpg"
    },
    {
        id: 4,
        name: "Empire Restaurant",
        rating: 4.5,
        time: "35 mins",
        cuisine: "Kebabs, Mughlai",
        price: "₹600 for two",
        offer: "10% OFF",
        image: "/images/restaurant-placeholder.jpg"
    },
    {
        id: 5,
        name: "Burger King (Non-Veg)",
        rating: 4.1,
        time: "25 mins",
        cuisine: "Chicken Burger",
        price: "₹300 for two",
        offer: "Free Fries",
        image: "/images/sandwich.png"
    },
    {
        id: 6,
        name: "Dominos",
        rating: 4.2,
        time: "30 mins",
        cuisine: "Chicken Pizza",
        price: "₹400 for two",
        offer: "30% OFF",
        image: "/images/samosa.png"
    }
];

function App() {
    const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMoneyOpen, setIsMoneyOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isReorderOpen, setIsReorderOpen] = useState(false);
    const [isDiningOpen, setIsDiningOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Default to Veg Mode (Green) as implied by 'convert to nonveg'
    const [isVeg, setIsVeg] = useState(true);

    const currentRestaurants = isVeg ? VEG_RESTAURANTS : NON_VEG_RESTAURANTS;

    return (
        <div className="max-w-[480px] w-full mx-auto min-h-screen bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFE4E6] pb-24 shadow-2xl relative border-x border-gray-100">
            <Header
                onOpenProfile={() => setIsProfileOpen(true)}
                onOpenLocation={() => setIsLocationOpen(true)}
                isVeg={isVeg}
                onToggleVeg={() => setIsVeg(!isVeg)}
            />

            <div className="overflow-y-auto">
                <PromoBanner />
                <CategoryScroll onCategoryClick={(cat) => setSelectedCategory(cat)} />
                <Filters />

                <div className="px-4 py-4 bg-gray-50/50">
                    <h2 className="text-base font-extrabold text-gray-800 mb-4 tracking-tight flex items-center gap-2">
                        {isVeg ? (
                            <span className="w-1 h-5 bg-green-600 rounded-full"></span>
                        ) : (
                            <span className="w-1 h-5 bg-red-600 rounded-full"></span>
                        )}
                        {isVeg ? 'Pure Veg Restaurants' : 'Non-Veg Delights'}
                    </h2>

                    <div className="grid grid-cols-1 gap-6">
                        {currentRestaurants.map(rest => (
                            <RestaurantCard key={rest.id} data={rest} />
                        ))}
                    </div>
                </div>

                <Footer />
            </div>

            <BottomNav
                onOpenDelivery={() => setIsDeliveryOpen(true)}
                onOpenMoney={() => setIsMoneyOpen(true)}
                onOpenReorder={() => setIsReorderOpen(true)}
                onOpenDining={() => setIsDiningOpen(true)}
            />

            <DeliveryFormModal
                isOpen={isDeliveryOpen}
                onClose={() => setIsDeliveryOpen(false)}
            />

            <ProfileModal
                isOpen={isProfileOpen}
                onClose={() => setIsProfileOpen(false)}
            />

            <MoneyModal
                isOpen={isMoneyOpen}
                onClose={() => setIsMoneyOpen(false)}
            />

            <LocationModal
                isOpen={isLocationOpen}
                onClose={() => setIsLocationOpen(false)}
            />

            <ReorderModal
                isOpen={isReorderOpen}
                onClose={() => setIsReorderOpen(false)}
            />

            <DiningModal
                isOpen={isDiningOpen}
                onClose={() => setIsDiningOpen(false)}
            />

            <FoodItemsModal
                isOpen={!!selectedCategory}
                category={selectedCategory}
                items={selectedCategory ? CATEGORY_ITEMS[selectedCategory] : []}
                onClose={() => setSelectedCategory(null)}
            />
        </div>
    );
}

export default App;
