import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import pterodactylImage from '../image/IMG-20241004-WA0003.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS AOS

const productsData = [
  {
    id: 1,
    name: 'Pterodactyl (Panel)',
    price: '1000',
    description: 'Memory: 1GB\nCPU: 50%\nDisk: 0',
    image: pterodactylImage,
  },
  {
    id: 2,
    name: 'Pterodactyl (Panel)',
    price: '1500',
    description: 'Memory: 2GB\nCPU: 0%\nDisk: 0',
    image: pterodactylImage,
  },
  {
    id: 3,
    name: 'Pterodactyl (Panel)',
    price: '2000',
    description: 'Memory: 3GB\nCPU: 100%\nDisk: 0',
    image: pterodactylImage,
  },
  {
    id: 4,
    name: 'Pterodactyl (Panel)',
    price: '3000',
    description: 'Memory: 4GB\nCPU: 125%\nDisk: 4000',
    image: pterodactylImage,
  },
  {
    id: 5,
    name: 'Pterodactyl (Panel)',
    price: '4000',
    description: 'Memory: 5GB\nCPU: 150%\nDisk: 0',
    image: pterodactylImage,
  },
  {
    id: 6,
    name: 'Pterodactyl (Panel)',
    price: '5000',
    description: 'Memory: 6GB\nCPU: 175%\nDisk: 6000',
    image: pterodactylImage,
  },
  {
    id: 7,
    name: 'Pterodactyl (Panel)',
    price: '6500',
    description: 'Memory: 7GB\nCPU: 175%\nDisk: 7000',
    image: pterodactylImage,
  },
  {
    id: 8,
    name: 'Pterodactyl (Panel)',
    price: '8000',
    description: 'Memory: 8GB\nCPU: 200%\nDisk: 8000',
    image: pterodactylImage,
  },
  {
    id: 9,
    name: 'Pterodactyl (Panel)',
    price: '10000',
    description: 'Memory: Unlimited\nCPU: Unlimited\nDisk: Unlimited',
    image: pterodactylImage,
  },
];

const ProductList = ({ onOrderClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Inisialisasi AOS saat komponen dimount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Fungsi untuk menangani pencarian
  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);

    // Filter produk berdasarkan keyword di CPU, Memory, atau Disk
    const filtered = productsData.filter(product =>
      product.description.toLowerCase().includes(keyword)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      {/* Form pencarian */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari CPU, Memory, atau Disk..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      </div>

      {/* Menampilkan pesan jika tidak ada produk yang ditemukan */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-red-500 mb-4">
          Tidak ada produk yang ditemukan.
        </div>
      )}

      {/* Grid produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div data-aos="zoom-in" key={product.id}>
            <ProductCard product={product} onOrderClick={onOrderClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;