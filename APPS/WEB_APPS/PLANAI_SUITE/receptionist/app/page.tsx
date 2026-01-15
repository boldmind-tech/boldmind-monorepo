import { MessageSquare, Calendar, Users, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your AI-Powered 24/7
            <span className="text-blue-600"> Receptionist</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Never miss a lead again. Our AI receptionist manages your social media DMs,
            qualifies leads, and books appointments automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg font-semibold flex items-center justify-center"
            >
              Start 14-Day Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="px-8 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-lg font-semibold">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <MessageSquare className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">24/7 AI Receptionist</h3>
            <p className="text-gray-600">Instant replies to DMs on Facebook, Instagram, WhatsApp</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Calendar className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Smart Booking</h3>
            <p className="text-gray-600">Clients book appointments directly from social media</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Users className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Lead Qualification</h3>
            <p className="text-gray-600">AI asks qualifying questions and scores leads</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Zap className="h-8 w-8 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Multi-Platform</h3>
            <p className="text-gray-600">Manage multiple clients from one dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}