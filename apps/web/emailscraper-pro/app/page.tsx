'use client';
import {  Search, CheckCircle, Download } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find & Verify Email Addresses
            <br />
            <span className="text-blue-600">For Nigerian Businesses</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Advanced email discovery and verification tool built specifically for the Nigerian B2B market.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter name and company (e.g., 'CTO Tech Solutions Ltd')"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              <Search className="h-5 w-5 inline mr-2" />
              Find Emails
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Search Results</h2>
              <button className="flex items-center text-sm text-blue-600">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="font-semibold text-gray-900">John Doe</h3>
                      <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                    </div>
                    <p className="text-sm text-gray-600 mb-1">CTO • Tech Solutions Ltd</p>
                    <p className="text-blue-600 font-medium">john.doe@techsolutions.ng</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900 mb-2">Score: 98%</div>
                    <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-sm">
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}