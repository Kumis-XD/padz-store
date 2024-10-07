import React, { useState } from 'react';
import ProductList from './components/ProductList';
import LiveChat from './components/LiveChat';
import Navbar from './components/Navbar';
import OrderModal from './components/OrderModal';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <Navbar onOrderClick={handleOrderClick} />
      <ToastContainer 
        className="toast-container" // Terapkan kelas kustom di sini
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        icon={true}
      />
      <div className="container mx-auto p-4 pt-20">
        <ProductList onOrderClick={handleOrderClick} />
        <LiveChat />
      </div>
      <Footer />
      {isModalOpen && <OrderModal product={selectedProduct} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;