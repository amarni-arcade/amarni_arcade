
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
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
        <Button>Shop on TikTok</Button>
      </section>

      <section id="shop" className="py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent>
            <img src="https://ae01.alicdn.com/kf/S0b9e5bc3395f48bcb51e6cf5e3e76e0bb.jpg" alt="Squishy Cube Stress Relief Toy" className="mb-4 w-full h-48 object-cover rounded-xl" />
            <h3 className="text-xl font-semibold mb-2">Squishy Cube Stress Relief Toy</h3>
            <p className="mb-4 text-sm text-gray-600">
              Unwind instantly with this super-soft Squishy Cube — a satisfying, palm-sized stress reliever designed to melt tension away.
              Made from ultra-squishy, slow-rising foam, it’s perfect for squeezing, squashing, and fidgeting during work, study, or downtime.
              Available in fun, vibrant colors — it’s the ultimate sensory companion!
            </p>
            <p className="text-sm text-gray-700 mb-2 font-medium">£4.50 + £3.99 delivery</p>
            <Button>Buy on TikTok</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent>
            <img src="https://ae01.alicdn.com/kf/S1400fbc7549e400e9d18e7a1638182c5I.jpg" alt="Squishy Cube Stress Relief Toy #2" className="mb-4 w-full h-48 object-cover rounded-xl" />
            <h3 className="text-xl font-semibold mb-2">Squishy Cube Stress Relief Toy #2</h3>
            <p className="mb-4 text-sm text-gray-600">
              A colorful, ultra-squishy stress cube that’s great for relaxing, focusing, and sensory fun. Soft and slow-rising with a smooth foam feel.
            </p>
            <p className="text-sm text-gray-700 mb-2 font-medium">£4.50 + £3.99 delivery</p>
            <Button>Buy on TikTok</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent>
            <img src="https://ae01.alicdn.com/kf/Sb4ef27c3d0a54ef5b91f9499117290bdX.jpg" alt="Squishy Cube Stress Relief Toy #3" className="mb-4 w-full h-48 object-cover rounded-xl" />
            <h3 className="text-xl font-semibold mb-2">Squishy Cube Stress Relief Toy #3</h3>
            <p className="mb-4 text-sm text-gray-600">
              Soft, colorful, and satisfying to squeeze — this stress cube is perfect for both kids and adults who love tactile stimulation.
            </p>
            <p className="text-sm text-gray-700 mb-2 font-medium">£4.50 + £3.99 delivery</p>
            <Button>Buy on TikTok</Button>
          </CardContent>
        </Card>
      </section>

      
      <section id="testimonials" className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">What Our Customers Say</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">"The squishy cube is so satisfying to use — it's helped me stay calm during work!"</p>
            <p className="mt-2 text-sm font-semibold text-right text-gray-500">– Sarah J.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">"Got this for my son who has ADHD and he absolutely loves it. Amazing product!"</p>
            <p className="mt-2 text-sm font-semibold text-right text-gray-500">– Daniel M.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">"Super soft, cute colors, and very relaxing to squeeze. Highly recommend!"</p>
            <p className="mt-2 text-sm font-semibold text-right text-gray-500">– Layla T.</p>
          </div>
        </div>
      </section>


      <footer className="p-4 text-center text-sm text-gray-500 border-t">
        &copy; 2025 Amarni Arcade. All rights reserved.
      </footer>
    </div>
  );
}
