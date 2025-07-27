import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Amarni Arcade</title>
      </Head>

      <header className="p-4 shadow-md flex justify-between items-center bg-white">
        <h1 className="text-2xl font-bold">Amarni Arcade</h1>
      </header>

      <main className="p-6">
        <section className="text-center py-12">
          <h2 className="text-4xl font-extrabold mb-4">Squishy Cube Stress Relief Toy</h2>
          <p className="text-lg text-gray-700 mb-2">£4.50 + £3.99 delivery</p>
          <p className="text-md max-w-xl mx-auto mb-6">
            Designed to help relieve stress and anxiety, this squishy cube is soft, slow-rising, and easy to handle. 
            Great for kids and adults who need a calming outlet for fidgeting. Choose from vibrant colors and cute designs that feel satisfying to squeeze.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Image src="/product1.jpg" alt="Squishy Cube 1" width={300} height={300} />
            <Image src="/product2.jpg" alt="Squishy Cube 2" width={300} height={300} />
          </div>
        </section>

        <section className="bg-gray-100 p-6 rounded-xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center">Customer Testimonials</h3>
          <ul className="space-y-4 text-left text-gray-800">
            <li>"Absolutely love this squishy cube! My son can’t put it down!" – Sarah J.</li>
            <li>"Feels amazing to squish and helped me focus more while working!" – Jake T.</li>
            <li>"Soft, durable and cute – what more could I want?" – Amina R.</li>
          </ul>
        </section>

        <section className="text-center py-10">
          <p className="text-sm text-gray-500">Contact us at <a href="mailto:info@amarniarcade.co.uk" className="underline">info@amarniarcade.co.uk</a></p>
        </section>
      </main>
    </div>
  );
}
