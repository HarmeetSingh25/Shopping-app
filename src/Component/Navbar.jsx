import React from "react";
import { CircleUserRound, ShoppingCart, Heart } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between sticky top-0 z-50">

            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <img
                    src="https://imgs.search.brave.com/ht2303QMIpWz1Ihx21xMUbumBdh5-UiPUFSIXElAjVE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9sZXRz/LXNob3BwaW5nLWxv/Z28tZGVzaWduLXRl/bXBsYXRlLXNob3At/aWNvbi0xMzU2MTA1/MDAuanBn"
                    alt="logo"
                    className="w-10 h-10 rounded-full"
                />
                <h1 className="text-2xl font-bold text-gray-800">ShopMate</h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
                <p className="cursor-pointer hover:text-black transition">Home</p>
                <div className="flex items-center gap-1 cursor-pointer hover:text-black transition">
                    <ShoppingCart size={20} />
                    <span>Cart</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-black transition">
                    <Heart size={20} />
                    <span>Wishlist</span>
                </div>
            </div>

            {/* Profile Icon */}
            <div className="cursor-pointer text-gray-600 hover:text-black transition">
                <CircleUserRound size={28} />
            </div>

        </nav>
    );
};

export default Navbar;
