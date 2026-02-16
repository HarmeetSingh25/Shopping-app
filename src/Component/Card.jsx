import React from "react";
import { ShoppingCart } from "lucide-react";

const Card = ({ elem, setcart }) => {


    return (

        <div className="w-64 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">

            {/* Product Image */}
            <div className="w-full h-60 overflow-hidden">
                <img
                    src={elem.image}
                    alt={elem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col gap-2">
                <h1 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {elem.title}
                </h1>

                <p className="text-xl font-bold text-green-600">
                    ${elem.price}
                </p>
                <div className="flex items-center gap-3 mt-3">

                    {/* Buy Now Button */}
                    <button className="flex-1 flex items-center text-xs  justify-center gap-2 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition duration-300 font-medium">
                        <ShoppingCart size={18} />
                        Buy Now
                    </button>

                    {/* Add to Cart Button */}
                    <button onClick={() => {
                        console.log(setcart);
                        setcart(prev => [...prev, elem])
                    }} className="flex-1 flex text-xs items-center text-nowrap  justify-center gap-2 border border-black text-black py-2 rounded-xl hover:bg-black hover:text-white transition duration-300 font-medium">
                        <ShoppingCart size={18} />
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Card;
