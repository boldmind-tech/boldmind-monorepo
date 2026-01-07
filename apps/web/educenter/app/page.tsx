import { BookOpen, CheckCircle, Users, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Ace Your Exams with
            <span className="text-blue-600"> Nigeria's #1</span>
            <br />
            Online Learning Platform
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Join 15,000+ Nigerian students preparing for JAMB, WAEC, and NECO with 
            interactive lessons, past questions, and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg font-semibold flex items-center justify-center"
            >
              Start Free Trial
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
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Excel
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">JAMB Past Questions</h3>
            <p className="text-gray-600">10+ years of past questions with solutions</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">WAEC/NECO Syllabus</h3>
            <p className="text-gray-600">Full coverage of SSCE syllabus</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Users className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Live Classes</h3>
            <p className="text-gray-600">Interactive sessions with certified teachers</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Award className="h-8 w-8 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Certificates</h3>
            <p className="text-gray-600">Earn verifiable certificates</p>
          </div>
        </div>
      </div>
    </div>
  );
}