// "use client";

// import { useEffect, useState } from 'react';
// import { useAuth } from '@boldmind/auth';
// // import { socialAccounts } from '@boldmind/utils/constants/social';

// export default function ClientDashboard() {
//   const { user } = useAuth();
//   const [integrations, setIntegrations] = useState<any[]>([]);
//   const [leads, setLeads] = useState([]);

//   // Fetch client's social integrations
//   useEffect(() => {
//     // This would fetch from your receptionist backend
//     const fetchIntegrations = async () => {
//       const response = await fetch('https://api.boldmind.ng/receptionist/integrations', {
//         headers: { Authorization: `Bearer ${user.token}` }
//       });
//       const data = await response.json();
//       setIntegrations(data);
//     };
    
//     fetchIntegrations();
//   }, [user]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section for New Clients */}
//       <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-4">
//             Welcome to Your AI Receptionist Dashboard
//           </h1>
//           <p className="text-xl mb-8">
//             Automatically capture leads, book appointments, and grow your business 24/7
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white/10 p-6 rounded-lg">
//               <div className="text-3xl mb-2">📱</div>
//               <h3 className="font-bold text-lg mb-2">Social Media Integration</h3>
//               <p>Connect Facebook, Instagram, WhatsApp for automated responses</p>
//             </div>
            
//             <div className="bg-white/10 p-6 rounded-lg">
//               <div className="text-3xl mb-2">🤖</div>
//               <h3 className="font-bold text-lg mb-2">AI-Powered Responses</h3>
//               <p>Intelligent replies that qualify leads and book appointments</p>
//             </div>
            
//             <div className="bg-white/10 p-6 rounded-lg">
//               <div className="text-3xl mb-2">📊</div>
//               <h3 className="font-bold text-lg mb-2">Real-time Analytics</h3>
//               <p>Track leads, conversions, and ROI from all platforms</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Integration Setup */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-2xl font-bold mb-6">Connect Your Social Accounts</h2>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {Object.entries(socialAccounts).map(([platform, accounts]) => (
//               <div key={platform} className="border rounded-lg p-4">
//                 <div className="flex items-center gap-2 mb-3">
//                   <span className="text-2xl">
//                     {platform === 'facebook' ? '📘' : 
//                      platform === 'instagram' ? '📸' : 
//                      platform === 'x' ? '🐦' : 
//                      platform === 'youtube' ? '📺' : 
//                      platform === 'tiktok' ? '🎵' : '💬'}
//                   </span>
//                   <h3 className="font-bold capitalize">{platform}</h3>
//                 </div>
                
//                 <div className="space-y-2">
//                   {accounts.map((account: any) => (
//                     <button
//                       key={account.id}
//                       className="w-full text-left p-2 bg-gray-100 hover:bg-gray-200 rounded text-sm"
//                       onClick={() => connectPlatform(platform, account.id)}
//                     >
//                       {account.name}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }