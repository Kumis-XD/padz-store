import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import { FaShoppingCart } from 'react-icons/fa'; // Import ikon dari react-icons

const ProductCard = ({ product, onOrderClick }) => {
  // Format harga dengan ribuan
  const formattedPrice = new Intl.NumberFormat('id-ID').format(product.price);

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    clicked: {
      scale: 0.95, // Sedikit mengecil saat diklik
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Bayangan yang lebih besar
      transition: {
        duration: 0.2, // Animasi lebih cepat untuk klik
        ease: 'easeOut' // Transisi cepat
      }
    }
  };

  return (
    <motion.div
      className="border rounded-lg shadow p-4 bg-white"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileTap="clicked" // Efek saat diklik
    >
      <img src={product.image} alt={product.name} className="w-full h-48 rounded object-cover mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500 mb-2">{product.description}</p>
      <p className="text-gray-800 font-semibold">Price: Rp{formattedPrice}</p>
      <button
        onClick={() => onOrderClick(product)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center"
      >
        <FaShoppingCart className="mr-2" /> {/* Ikon dengan margin kanan */}
        Order Now
      </button>
    </motion.div>
  );
};

export default ProductCard;