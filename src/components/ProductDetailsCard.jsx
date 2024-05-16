import React from 'react';

const ProductDetailsCard = () => {
          console.log("rendered!!")
  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white rounded-md shadow-md overflow-hidden">
      <div className="md:flex">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src="https://via.placeholder.com/500"
            alt="Product"
            className="w-full h-auto"
          />
        </div>
        {/* Product Details */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">Product Name</h2>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat consequat libero, at efficitur felis suscipit nec.</p>
          {/* Color Options */}
          <div className="mb-4">
            <label htmlFor="color" className="block text-gray-700 font-bold mb-2">Color:</label>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full bg-blue-500"></button>
              <button className="w-8 h-8 rounded-full bg-red-500"></button>
              <button className="w-8 h-8 rounded-full bg-green-500"></button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Available Stock: <span className="font-bold">10</span></p>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-gray-700 font-bold">4.5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
