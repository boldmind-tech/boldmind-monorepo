import { Heart, Apple, Users, TrendingDown } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Weight Loss & Wellness
            <br />
            <span className="text-pink-600">For Nigerian Women</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Personalized meal plans, NEPA-proof workouts, and a supportive community 
            designed specifically for Nigerian women's health and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 text-lg font-semibold"
            >
              Start 7-Day Free Trial
            </Link>
            <button className="px-8 py-4 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 text-lg font-semibold">
              Watch Success Stories
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built for Nigerian Women, by Nigerian Women
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="p-3 bg-pink-100 rounded-lg w-fit mb-4">
              <Apple className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Nigerian Food Database</h3>
            <p className="text-gray-600">500+ authentic Nigerian dishes with accurate calorie counts</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">NEPA-Proof Workouts</h3>
            <p className="text-gray-600">Home workouts that don't require electricity</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">WhatsApp Community</h3>
            <p className="text-gray-600">Join supportive WhatsApp groups</p>
          </div>
        </div>
      </div>
    </div>
  );
}