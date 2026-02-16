import React from "react";
import Card from "../Component/Card";

const Cart = ({ cart }) => {

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">
        🛒 Your Shopping Cart
      </h1>

      {cart.length === 0 ? (
        
        /* Empty State */
        <div className="flex flex-col items-center justify-center mt-20 text-gray-600">
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <p className="mt-2">Looks like you haven't added anything yet.</p>
          <button className="mt-6 bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
            Continue Shopping
          </button>
        </div>

      ) : (

        <div className="max-w-7xl mx-auto">
          
          {/* Cart Items Grid */}
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {cart.map((elem) => (
              <Card key={elem.id} elem={elem} />
            ))}
          </div>

          {/* Total Section */}
          <div className="mt-12 bg-white p-6 rounded-2xl shadow-md flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              Total Items: {cart.length}
            </h2>

            <h2 className="text-2xl font-bold text-green-600">
              Total: ₹{totalPrice.toFixed(2)}
            </h2>

            <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
              Checkout
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

export default Cart;
