import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Star } from 'lucide-react';

export default function NaijaFitHerHome() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const testimonials = [
    {
      name: 'Blessing Okafor',
      location: 'Lagos',
      weight: '15kg lost',
      image: 'https://i.pravatar.cc/150?img=1',
      text: 'I don chop jollof, fried rice, and still lose weight! This app na waya!',
      rating: 5,
    },
    {
      name: 'Chioma Eze',
      location: 'Abuja',
      weight: '12kg lost',
      image: 'https://i.pravatar.cc/150?img=5',
      text: 'No gym, no wahala. Just follow the plan and your body go change!',
      rating: 5,
    },
    {
      name: 'Fatima Musa',
      location: 'Kano',
      weight: '18kg lost',
      image: 'https://i.pravatar.cc/150?img=9',
      text: 'Best thing wey don happen to me this year. I fit wear any cloth now!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white sticky top-0 z-50 shadow-xl">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">💪</span>
            </div>
            <div>
              <h1 className="text-xl font-black">Naija FitHer</h1>
              <p className="text-xs text-white/80">For Naija Queens 👑</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="hidden sm:block px-6 py-2 font-bold hover:text-yellow-300">Login</button>
            <button className="px-6 py-2 bg-white text-pink-600 rounded-full font-bold hover:bg-pink-50">
              Start Free
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold mb-6">
              🎉 Join 25,000+ Nigerian Women
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Lose Weight,<br />
              <span className="text-yellow-300">Naija Style</span> 🍛
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Eat jollof, moi moi, plantain - and still lose 10kg in 90 days!
              AI meal plans with Nigerian foods you already love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-full text-lg font-black hover:bg-yellow-300 flex items-center justify-center gap-2">
                Get Free Meal Plan
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-white rounded-full text-lg font-bold hover:bg-white/10">
                See Success Stories
              </button>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-yellow-300">25K+</div>
                <div className="text-sm text-white/80">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-yellow-300">10kg</div>
                <div className="text-sm text-white/80">Avg. Weight Loss</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-yellow-300">4.9⭐</div>
                <div className="text-sm text-white/80">User Rating</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop"
              alt="Fit Nigerian woman"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-black text-pink-600 mb-2">500+</div>
              <div className="text-sm font-bold">Nigerian Foods</div>
              <div className="text-xs text-gray-600">Jollof, Egusi, Moi Moi & more</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-black text-center mb-16 text-gray-900">
          How E Dey Work? Simple! 🎯
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '1',
              title: 'Tell Us About You',
              description: 'Your age, weight, goal - AI go create personalized meal plan for you',
              icon: '📝',
            },
            {
              step: '2',
              title: 'Get Nigerian Meal Plans',
              description: 'Eat foods you already know - jollof, plantain, beans, fish. No oyibo diet!',
              icon: '🍛',
            },
            {
              step: '3',
              title: 'Track & Lose Weight',
              description: 'Follow simple home workouts, track progress, join WhatsApp community',
              icon: '📊',
            },
          ].map((item) => (
            <div key={item.step} className="relative group">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-black shadow-lg">
                  {item.step}
                </div>
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nigerian Foods Showcase */}
      <section className="bg-gradient-to-r from-orange-100 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-6 text-gray-900">
            Eat Your Favorite Nigerian Foods 🍲
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            No more boring oyibo diet! Our AI creates meals with foods you already love
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Jollof Rice', cal: '350 cal', img: '🍚' },
              { name: 'Moi Moi', cal: '185 cal', img: '🫘' },
              { name: 'Grilled Fish', cal: '250 cal', img: '🐟' },
              { name: 'Plantain', cal: '122 cal', img: '🍌' },
              { name: 'Egusi Soup', cal: '280 cal', img: '🥣' },
              { name: 'Beans & Dodo', cal: '320 cal', img: '🫘' },
              { name: 'Pepper Soup', cal: '120 cal', img: '🍲' },
              { name: 'Pap & Akara', cal: '250 cal', img: '🥛' },
            ].map((food) => (
              <div key={food.name} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
                <div className="text-5xl mb-3">{food.img}</div>
                <h4 className="font-bold text-gray-900 mb-1">{food.name}</h4>
                <p className="text-sm text-gray-600">{food.cal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-black text-center mb-16 text-gray-900">
          See Wetin Our Queens Talk! 👑
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((person) => (
            <div key={person.name} className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{person.name}</h4>
                  <p className="text-sm text-gray-600">{person.location}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(person.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">"{person.text}"</p>
              <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-bold">
                🎉 {person.weight}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-6">
            Start Your Journey Today! 💪
          </h2>
          <p className="text-center text-xl mb-12 text-white/90">
            Choose the plan wey fit your pocket
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`px-8 py-3 rounded-full font-bold ${
                selectedPlan === 'monthly'
                  ? 'bg-white text-pink-600'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`px-8 py-3 rounded-full font-bold ${
                selectedPlan === 'yearly'
                  ? 'bg-white text-pink-600'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              Yearly <span className="text-yellow-300">(Save 40%)</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Basic',
                price: selectedPlan === 'monthly' ? '₦1,500' : '₦12,000',
                period: selectedPlan === 'monthly' ? '/month' : '/year',
                features: [
                  'AI Meal Plans (Nigerian Foods)',
                  'Basic Workout Videos',
                  'Progress Tracking',
                  'Email Support',
                ],
              },
              {
                name: 'Premium',
                price: selectedPlan === 'monthly' ? '₦3,500' : '₦30,000',
                period: selectedPlan === 'monthly' ? '/month' : '/year',
                features: [
                  'Everything in Basic',
                  'WhatsApp Community Access',
                  'Weekly Live Sessions',
                  'Personal Nutritionist Chat',
                  'Recipe Videos',
                ],
                popular: true,
              },
              {
                name: 'VIP',
                price: selectedPlan === 'monthly' ? '₦7,500' : '₦60,000',
                period: selectedPlan === 'monthly' ? '/month' : '/year',
                features: [
                  'Everything in Premium',
                  '1-on-1 Coaching Calls',
                  'Custom Meal Plans',
                  'Priority Support',
                  'Exclusive Events',
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white text-gray-900 p-8 rounded-3xl ${
                  plan.popular ? 'ring-4 ring-yellow-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                    ⭐ Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-full font-bold ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-black mb-6 text-gray-900">
          Ready to Transform? 🦋
        </h2>
        <p className="text-2xl text-gray-600 mb-8">
          Join 25,000+ Nigerian women who don change their life!
        </p>
        <button className="px-12 py-5 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full text-xl font-black hover:shadow-2xl hover:scale-105 transition">
          Get Started Free - No Credit Card 🎉
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-black mb-2">Naija FitHer</h3>
            <p className="text-gray-400">A BoldMind Technology Product</p>
          </div>
          <div className="flex justify-center gap-8 mb-8">
            <a href="/about" className="hover:text-pink-400">About</a>
            <a href="/contact" className="hover:text-pink-400">Contact</a>
            <a href="/privacy" className="hover:text-pink-400">Privacy</a>
            <a href="/terms" className="hover:text-pink-400">Terms</a>
          </div>
          <p className="text-gray-400">&copy; 2026 Naija FitHer - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}