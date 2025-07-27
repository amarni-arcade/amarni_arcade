
export default function Home() {
  return (
    <section id="shop" className="py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="border rounded-xl p-4 hover:shadow-lg transition-shadow">
        <img src="/images/product1.jpg" alt="Squishy Cube 1" className="mb-4 w-full h-48 object-cover rounded-xl" />
        <h3>Squishy Cube Stress Relief Toy</h3>
        <p>£4.50 + £3.99 delivery</p>
        <p>Unwind instantly with this soft, slow-rising foam cube...</p>
        <a href="#" className="bg-black text-white px-4 py-2 rounded-full">Buy on TikTok</a>
      </div>
    </section>
  );
}
