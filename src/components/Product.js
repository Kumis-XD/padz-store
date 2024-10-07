import React, { useState } from 'react';
import OrderModal from './OrderModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="font-bold text-lg mb-2">Price: Rp{product.price}</p>
        <button
          onClick={handleOrderClick}
          className="bg-blue-500 text-white py-2 px-4 mt-2 rounded"
        >
          Order Now
        </button>
      </div>
      {isModalOpen && <OrderModal product={product} onClose={closeModal} />}
      <ToastContainer />
    </div>
  );
};

export default Product;