import { Shield, AlertTriangle, Users, Map } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/50 border border-blue-700 mb-6">
            <Shield className="h-5 w-5 mr-2" />
            <span>Security Analytics & Forensics Engine AI</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            SAFE <span className="text-blue-400">AI</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered security intelligence platform for Nigerian police and private security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="p-3 bg-blue-900/50 rounded-lg w-fit mb-4">
              <AlertTriangle className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Incident Reporting</h3>
            <p className="text-gray-400">Real-time incident reporting with GPS tagging</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="p-3 bg-green-900/50 rounded-lg w-fit mb-4">
              <Users className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Criminal Database</h3>
            <p className="text-gray-400">Facial recognition and pattern detection</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="p-3 bg-purple-900/50 rounded-lg w-fit mb-4">
              <Map className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Predictive Policing</h3>
            <p className="text-gray-400">Crime hotspot prediction and resource optimization</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="p-3 bg-red-900/50 rounded-lg w-fit mb-4">
              <Shield className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Communication</h3>
            <p className="text-gray-400">End-to-end encrypted officer communication</p>
          </div>
        </div>
      </div>
    </div>
  );
}