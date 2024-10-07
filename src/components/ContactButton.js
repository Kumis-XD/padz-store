// src/components/ContactButton.js

import React from 'react';

const ContactButton = () => {
  const handleContactClick = () => {
    const phoneNumber = '6285867760406'; // Nomor WhatsApp
    const message = encodeURIComponent('Halo! Saya ingin bertanya tentang produk.'); // Pesan awal
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappLink, '_blank'); // Buka WhatsApp di tab baru
  };

  return (
    <button 
      onClick={handleContactClick} 
      className="bg-green-500 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-green-600"
    >
      Contact
    </button>
  );
};

export default ContactButton;