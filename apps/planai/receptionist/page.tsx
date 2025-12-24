// // app/planai/receptionist/page.tsx - EXAMPLE SUBPAGE
// import Link from 'next/link'
// import Image from 'next/image'

// export default function ReceptionistPage() {
//   return (
//     <main className="relative min-h-screen bg-[#0A1D37] text-white">
//       {/* Grain texture */}
//       <div className="fixed inset-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXhpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHBhdGggZD0iTTAgMGgzMDB2MzAwSDB6IiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')]" />

//       {/* HEADER */}
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1D37]/90 backdrop-blur-lg border-b border-[#FFC107]/20">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <Link href="/planai" className="flex items-center gap-3">
//             <Image src="/boldmind-logo.png" alt="BoldMind Logo" width={40} height={40} className="rounded-full" />
//             <span className="font-black text-xl">AI Receptionist</span>
//           </Link>
//           <Link href="/planai" className="text-[#FFC107] hover:text-[#FFCC00] font-semibold">
//             ← Back to Suite
//           </Link>
//         </div>
//       </nav>

//       <section className="pt-32 py-20 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-5xl md:text-7xl font-black mb-6">AI Receptionist</h1>
//           <p className="text-2xl text-[#FFC107] mb-4">Never miss a lead again</p>
//           <p className="text-xl text-[#E0E0E0] mb-8">Multi-tenant AI-powered lead capture and booking system. Auto-reply to comments and DMs on Facebook, Instagram, and WhatsApp.</p>
//           <span className="text-lg font-bold px-4 py-2 rounded-full bg-black/30 text-green-400 mb-12 inline-block">✅ LIVE</span>

//           <ul className="max-w-2xl mx-auto text-left space-y-4 mb-12">
//             {products[0].features.map((feature, i) => (
//               <li key={i} className="flex items-start text-lg text-[#E0E0E0]">
//                 <svg className="w-6 h-6 text-[#FFC107] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 {feature}
//               </li>
//             ))}
//           </ul>

//           <p className="text-2xl text-[#FFC107] font-bold mb-8">{products[0].pricing}</p>

//           <a href="https://wa.me/2349138349271?text=Interested%20in%20AI%20Receptionist" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-4 bg-[#FFC107] text-[#0A1D37] font-bold text-lg rounded-lg hover:bg-[#FFCC00] transition-all hover:scale-105">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
//             Join Waitlist on WhatsApp
//           </a>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="relative py-12 px-6 border-t border-[#FFC107]/20">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <Image src="/boldmind-logo.png" alt="BoldMind Logo" width={60} height={60} className="rounded-full mb-4" />
//               <p className="text-[#E0E0E0] text-sm">Part of the BoldMind Technology Solution Enterprise</p>
//             </div>

//             <div>
//               <h4 className="font-black text-white mb-4">Products</h4>
//               <ul className="space-y-2 text-[#E0E0E0] text-sm">
//                 <li><a href="https://amebogist.ng" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107]">AmeboGist</a></li>
//                 <li><a href="https://educenter.com.ng" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107]">EduCenter</a></li>
//                 <li><Link href="/planai" className="hover:text-[#FFC107]">PlanAI Suite</Link></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-black text-white mb-4">Company</h4>
//               <ul className="space-y-2 text-[#E0E0E0] text-sm">
//                 <li><Link href="/#about" className="hover:text-[#FFC107]">About</Link></li>
//                 <li><Link href="/#contact" className="hover:text-[#FFC107]">Contact</Link></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-black text-white mb-4">Connect</h4>
//               <div className="flex gap-4">
//                 <a href="https://x.com/VillageCircle" target="_blank" rel="noopener noreferrer" className="text-[#E0E0E0] hover:text-[#FFC107]">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
//                 </a>
//                 <a href="https://www.linkedin.com/company/boldmind-technology-solution-enterprise" target="_blank" rel="noopener noreferrer" className="text-[#E0E0E0] hover:text-[#FFC107]">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
//                 </a>a
//               </div>
//             </div>
//           </div>

//           <div className="text-center text-[#E0E0E0] text-sm pt-8 border-t border-[#FFC107]/20">
//             © {new Date().getFullYear()} BoldMind Technology Solution Enterprise. All rights reserved.
//           </div>eb
//         </div>
//       </footer>
//     </main>
//   )
// }