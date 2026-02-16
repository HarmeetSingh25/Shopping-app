import React from 'react'
import Card from '../Component/Card'

const Home = ({products , settoggle, setcart}) => {
    console.log(products);
    
  return (
    <div>
         <div className="bg-gradient-to-r from-black to-gray-800 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Welcome to ShopMate 🛍️</h1>
        <p className="mt-3 text-gray-300">
          Discover the best products at unbeatable prices
        </p>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((elem) => (
            <Card setcart={setcart} key={elem.id} elem={elem} />
          ))}
        </div>

      </div>

    </div>
  )
}

export default Home