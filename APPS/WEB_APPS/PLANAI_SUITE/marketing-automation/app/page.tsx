export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <span className="text-2xl">🚀</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Marketing Automation
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Part of the BoldMind ecosystem. This product is currently in development.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold">
            Coming Soon
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">Innovation</div>
              <p className="text-gray-600">Built with cutting-edge technology</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">Quality</div>
              <p className="text-gray-600">Enterprise-grade solutions</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-2">Support</div>
              <p className="text-gray-600">24/7 customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}