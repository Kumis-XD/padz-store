// src/components/LiveChat.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons'; // Import ikon yang diperlukan

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  // Fungsi untuk menangani pengiriman pesan
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    // Menambahkan pesan pengguna ke dalam daftar pesan
    setMessages([...messages, { sender: 'user', text: inputMessage }]);
    setInputMessage('');

    // Simulasi respons bot
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
    }, 1000); // Simulasikan delay respons bot
  };

  const getBotResponse = (message) => {
    // Logika sederhana untuk memberikan respons
    if (message.toLowerCase().includes('halo')) {
      return 'Halo! Bagaimana saya bisa membantu Anda hari ini?';
    }
    if (message.toLowerCase().includes('hai')) {
      return 'Halo! Bagaimana saya bisa membantu Anda hari ini?';
    }
    if (message.toLowerCase().includes('butuh bantuan')) {
      return 'Tentu! Apa yang bisa saya bantu?';
    }
    if (message.toLowerCase().includes('produk')) {
      return 'Produk apa yang Anda cari? Kami memiliki berbagai pilihan.';
    }
    if (message.toLowerCase().includes('pengiriman')) {
      return 'Pengiriman biasanya memakan waktu 3-5 hari kerja. Apakah Anda memiliki pertanyaan lebih lanjut?';
    }
    if (message.toLowerCase().includes('harga')) {
      return 'Harga produk bervariasi. Produk mana yang Anda maksud?';
    }
    if (message.toLowerCase().includes('diskon')) {
      return 'Kami sering memiliki penawaran khusus. Apakah Anda ingin tahu tentang penawaran saat ini?';
    }
    if (message.toLowerCase().includes('kebijakan pengembalian')) {
      return 'Kebijakan pengembalian kami memungkinkan pengembalian dalam 30 hari setelah pembelian. Anda ingin tahu lebih lanjut?';
    }
    if (message.toLowerCase().includes('produk baru')) {
      return 'Kami selalu menambah produk baru. Apakah Anda ingin melihat koleksi terbaru kami?';
    }
    if (message.toLowerCase().includes('service pelanggan')) {
      return 'Layanan pelanggan kami siap membantu Anda. Apa yang ingin Anda tanyakan?';
    }
    if (message.toLowerCase().includes('saran')) {
      return 'Kami selalu terbuka untuk saran. Apa yang bisa kami perbaiki?';
    }
    if (message.toLowerCase().includes('testimoni')) {
      return 'Anda dapat melihat testimoni pelanggan kami di situs kami. Apakah Anda ingin melihatnya?';
    }
    if (message.toLowerCase().includes('ketersediaan')) {
      return 'Silakan beri tahu saya produk apa yang Anda cari, dan saya akan memeriksa ketersediaannya untuk Anda.';
    }
    if (message.toLowerCase().includes('pembayaran')) {
      return 'Kami menerima berbagai metode pembayaran. Apakah Anda ingin tahu lebih lanjut tentang metode yang kami terima?';
    }
    if (message.toLowerCase().includes('feedback')) {
      return 'Kami menghargai feedback Anda! Silakan berikan pendapat Anda.';
    }
    if (message.toLowerCase().includes('koneksi')) {
      return 'Anda dapat menghubungi kami melalui WhatsApp di nomor 6285867760406. Ada yang ingin Anda tanyakan lebih lanjut?';
    }

    // Respons umum jika tidak ada kecocokan
    return 'Maaf, saya tidak yakin bagaimana cara menjawab itu. Bisakah Anda menjelaskan lebih lanjut?';
  };

  return (
    <div>
      <button
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faComments} className="text-lg" /> {/* Ikon di sini */}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white shadow-lg rounded-lg">
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="flex">
            <input
              type="text"
              placeholder="Ketik pesan..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-grow border border-gray-300 rounded-l-lg p-2"
            />
            <button type="submit" className="bg-blue-600 text-white rounded-r-lg p-2">
              Kirim
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LiveChat;