import React, {
  useState
} from 'react';
import WhatsAppLogo from '../logo/WhatsAppLogo';
import EmailLogo from '../logo/EmailLogo';
import emailjs, {
  EmailJSResponseStatus
} from '@emailjs/browser';
import {
  toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  motion
} from 'framer-motion'; // Import framer-motion

const OrderModal = ({
  product, onClose
}) => {
  const [username,
    setUsername] = useState('');
  const [message,
    setMessage] = useState('');
  const [isSending,
    setIsSending] = useState(false);

  const formattedPrice = new Intl.NumberFormat('id-ID').format(product.price);

  const handleOrderEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    //     const templateParams = {
    //       username: username,
    //       product_name: product.name,
    //       product_price: product.price,
    //       product_description: product.description,
    //       message: message,
    //     };
    const now = new Date();
    const options = {
      timeZone: 'Asia/Jakarta',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    const orderTime = now.toLocaleString('id-ID', options);
    try {
      emailjs.send(
        'padilpadz',
        'padilpadz',
        {
          username: username,
          product_name: product.name,
          product_price: formattedPrice,
          product_description: product.description,
          message: message,
          order_time: orderTime,
        },
        {
          publicKey: '49DvprQgLAJIDuvb2',
        },
      );
      toast.success('Order berhasil dikirim!');
      onClose();
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        toast.error('Gagal mengirim order. Silakan coba lagi.', err);
        onClose();
      }

      toast.error('Gagal mengirim order. Silakan coba lagi.', err);
      onClose();
    }
  };

  const handleOrderWhatsApp = () => {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Jakarta',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    const orderTime = now.toLocaleString('id-ID', options);

    const whatsappMessage = `Order Details:\n\nName: ${username}\nProduct: ${product.name}\nPrice: Rp${formattedPrice}\nDescription: ${product.description}\nOrder Time: ${orderTime}\n\n\tMessage: ${message}`;
    const whatsappNumber = '6285867760406';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, '_blank');
    toast.info('Mengalihkan ke WhatsApp untuk mengirim order...');
    onClose();
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: "-100vh"
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: "100vh",
      transition: {
        duration: 0.5
      }
    } // Animasi saat modal ditutup
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      >
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <img src={product.image} alt={product.name} className="w-full h-48 rounded object-cover mb-4" />
      <p className="text-gray-700 mb-4">
        {product.description}
      </p>
      <p className="text-gray-800 font-semibold">
        Price: Rp{formattedPrice}
      </p>
      <form onSubmit={handleOrderEmail}>
        <input
        type="text"
        placeholder="Masukkan nama pengguna"
        className="border rounded px-4 py-2 mb-2 w-full"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        />
      <textarea
        placeholder="Pesan opsional untuk penjual"
        className="border rounded px-4 py-2 mb-2 w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 mr-2 rounded"
          >
          Batal
        </button>
        <button
          type="submit"
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded mr-2"
          disabled={isSending || !username}
          >
          {isSending ? 'Mengirim...': <EmailLogo style={ { height: '20px', width: '20px' }} />}
        </button>
        <button
          type="button"
          onClick={handleOrderWhatsApp}
          className="border border-green-500 text-green-500 px-4 py-2 rounded"
          disabled={!username}
          >
          <WhatsAppLogo style={ { height: '20px', width: '20px' }} />
        </button>
      </div>
    </form>
  </div>
</motion.div>
);
};

export default OrderModal;