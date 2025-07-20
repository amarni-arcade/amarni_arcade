import React from 'react';

export default function Home() {
  const openTikTokShop = () => {
    window.open("https://www.tiktok.com/@amarniarcade/shop", "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-4 border-b shadow-sm flex justify-between items-center">
        <h1 className="text-2xl font-bold">Amarni Arcade</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#shop" className="hover:underline">Shop</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>
      <section id="home" className="py-16 px-6 text-center bg-gradient-to-br from-blue-100 to-purple-100">
        <h2 className="text-4xl font-extrabold mb-4">Explore Sensory & Fidget Tools</h2>
        <p className="text-lg mb-6">Tools to soothe your senses and sharpen your focus.</p>
        <button onClick={openTikTokShop} className="bg-blue-600 text-white px-4 py-2 rounded">Shop on TikTok</button>
      </section>
      <section id="shop" className="py-12 px-6">
        <div className="shadow p-4 rounded max-w-md mx-auto">
          <img src="https://images.unsplash.com/photo-1611078489935-fd8a49ef0b56" alt="Fidget Cube" className="mb-4 w-full h-48 object-cover rounded" />
          <h3 className="text-xl font-semibold mb-2">Fidget Cube</h3>
          <p className="text-sm text-gray-600">Tactile tool for stress relief and focus.</p>
          <button onClick={openTikTokShop} className="mt-2 bg-purple-600 text-white px-3 py-1 rounded">Buy on TikTok</button>
        </div>
      </section>
      <footer className="p-4 text-center text-sm text-gray-500 border-t">
        &copy; 2025 Amarni Arcade. All rights reserved.
      </footer>
    </div>
  );
}
