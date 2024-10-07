import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  // Placeholder untuk data produk. Bisa diganti dengan fetching dari API
  const product = {
    id: id,
    name: `Product ${id}`,
    description: `This is a detailed description of product ${id}`,
    price: 100 * id,
    image: 'https://via.placeholder.com/150',
  };

  return (
    <div className="max-w-lg mx-auto rounded overflow-hidden shadow-lg">
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="mt-2">{product.description}</p>
        <p className="text-lg font-semibold mt-4">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;