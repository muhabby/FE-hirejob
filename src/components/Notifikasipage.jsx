import React, { useState } from 'react';

const Notifikasipage = () => {
  const [messages, setMessages] = useState([
    { id: 1, title: 'Notifikasi 1', content: 'Ini adalah pesan notifikasi 1', read: false },
    { id: 2, title: 'Notifikasi 2', content: 'Ini adalah pesan notifikasi 2', read: true },
    { id: 3, title: 'Notifikasi 3', content: 'Ini adalah pesan notifikasi 3', read: false }
  ]);

  const handleShowUnreadMessages = () => {
    const unreadMessages = messages.filter((message) => !message.read);
    alert(`Pesan yang belum dibaca: ${unreadMessages.map((message) => message.title).join(', ')}`);
  };

  return (
    <div className="container mx-auto">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleShowUnreadMessages}
      >
        Tampilkan Pesan Belum Dibaca
      </button>
    </div>
  );
};

export default Notifikasipage;
