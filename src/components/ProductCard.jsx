import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import productImg from "../assets/product1.jpg";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img className="w-full" src={productImg} alt="productImage" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-gray-900 font-bold text-xl">
          ${product.price}
        </span>
        <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full flex items-center">
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
