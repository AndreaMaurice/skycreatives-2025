//scrolling vertical infos
// export default function Services() {
//     const services = [
//         {
//             icon: "⚙️",
//             title: "Custom Website Development & Graphics Design",
//             description:
//                 "We craft beautiful, responsive websites tailored to your brand and goals. Fast, accessible, and SEO-friendly from the ground up.",
//             gradient: "from-[#d0e7ff] to-[#f4f4f4]",
//         },
//         {
//             icon: "🛍️",
//             title: "E-Commerce Solutions",
//             description:
//                 "Launch or upgrade your online store with secure payment integration, inventory control, and engaging product pages.",
//             gradient: "from-[#fde2e2] to-[#f4f4f4]",
//         },
//         {
//             icon: "📝",
//             title: "CMS Integration",
//             description:
//                 "Simplify content updates with modern CMS platforms like WordPress, Sanity, or custom-built solutions tailored to your workflow.",
//             gradient: "from-[#dcfce7] to-[#f4f4f4]",
//         },
//         {
//             icon: "🛠️",
//             title: "Hosting & Technical Support",
//             description:
//                 "From Vercel deployment to ongoing maintenance, we've got your back—so you can focus on growing your business.",
//             gradient: "from-[#ffe6cc] to-[#f4f4f4]",
//         },
//     ];

//     return (
//         <section className="w-full px-6 py-20 font-open-sans">
//             <div className="max-w-[1100px] mx-auto">
//                 <h1 className="text-6xl font-extrabold text-center text-[#8d4a4a] mb-6">
//                     What We Offer
//                 </h1>
//                 <p className="text-lg text-center text-gray-600 font-pt-sans max-w-3xl mx-auto mb-16">
//                     From sleek sites to powerful applications, our services are built to elevate your digital presence.
//                 </p>

//                 <div className="space-y-10">
//                     {services.map((service, i) => (
//                         <div
//                             key={i}
//                             className={`relative p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 bg-gradient-to-br ${service.gradient}`}
//                         >
//                             {/* Floating animated icon bubble */}
//                             <div className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-[#0078d7] border-4 border-white flex items-center justify-center text-white text-3xl shadow-md transition-transform duration-300 hover:scale-110">
//                                 {service.icon}
//                             </div>

//                             <h2 className="text-2xl font-open-sans text-[#0078d7] font-semibold mb-2 mt-6">
//                                 {service.title}
//                             </h2>
//                             <p className="text-base font-pt-sans text-gray-700 leading-relaxed">
//                                 {service.description}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

//flip cards
// "use client";

// import React, { useState } from "react";

// const services = [
//   {
//     icon: "⚙️",
//     title: "Custom Website Development & Graphics Design",
//     description:
//       "We craft beautiful, responsive websites tailored to your brand and goals. Fast, accessible, and SEO-friendly from the ground up.",
//   },
//   {
//     icon: "🛍️",
//     title: "E-Commerce Solutions",
//     description:
//       "Launch or upgrade your online store with secure payment integration, inventory control, and engaging product pages.",
//   },
//   {
//     icon: "📝",
//     title: "CMS Integration",
//     description:
//       "Simplify content updates with modern CMS platforms like WordPress, Sanity, or custom-built solutions tailored to your workflow.",
//   },
// ];

// export default function ServicesPage() {
//   const [flipped, setFlipped] = useState(null);

//   return (
//     <section className="px-6 py-20">
//       <div className="max-w-5xl mx-auto text-center mb-12">
//         <h1 className="text-5xl font-extrabold text-[#8d4a4a]">
//           What We Offer
//         </h1>
//       </div>

//       {/* 1-col mobile → 2-col sm → 3-col md+ */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {services.map((s, idx) => (
//           <div
//             key={idx}
//             className="w-full h-90"
//             style={{ perspective: "1000px" }}
//             onMouseEnter={() => setFlipped(idx)}
//             onMouseLeave={() => setFlipped(null)}
//             onClick={() => setFlipped(prev => (prev === idx ? null : idx))}
//           >
//             <div
//               className="relative w-full h-full transition-transform duration-600 ease-in-out"
//               style={{
//                 transform:
//                   flipped === idx ? "rotateY(180deg)" : "rotateY(0deg)",
//                 transformStyle: "preserve-3d",
//               }}
//             >
//               {/* Front */}
//               <div
//                 className="absolute inset-0 bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center"
//                 style={{ backfaceVisibility: "hidden" }}
//               >
//                 <div className="text-5xl mb-4">{s.icon}</div>
//                 <h3 className="text-xl font-semibold text-center">{s.title}</h3>
//               </div>

//               {/* Back */}
//               <div
//                 className="absolute inset-0 bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-center"
//                 style={{
//                   backfaceVisibility: "hidden",
//                   transform: "rotateY(180deg)",
//                 }}
//               >
//                 <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {s.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

//with prices best so far
// app/services/page.js
"use client";

import React from "react";

const services = [
  {
    icon: "⚙️",
    title: "Basic Website & Branding",
    description:
      "Ideal for startups and personal brands. Includes a responsive homepage and essential graphics.",
    price: "$3,000",
    features: ["1-page website", "Logo design", "Mobile optimization"],
    buttonColor: "sky",
  },
  {
    icon: "🛍️",
    title: "E-Commerce Essentials",
    description:
      "Perfect for small businesses ready to sell online. Secure checkout and clean product layout.",
    price: "$5,000",
    features: ["Up to 10 products", "Payment integration", "Basic CMS"],
    buttonColor: "emerald",
  },
  {
    icon: "📝",
    title: "Pro Business Suite",
    description:
      "Fully-featured web solution for growing brands. Custom CMS, dynamic pages, and full support.",
    price: "$10,000",
    features: ["Custom CMS", "SEO Setup", "Ongoing support"],
    buttonColor: "purple",
  },
];

//og color 
const buttonColors = {
  sky: "hover:bg-sky-500 hover:text-white hover:[box-shadow:5px_5px_#075985]",       
  emerald: "hover:bg-emerald-500 hover:text-white hover:[box-shadow:5px_5px_#065f46]", 
  purple: "hover:bg-purple-500 hover:text-white hover:[box-shadow:5px_5px_#5b21b6]",   
};

//glass feels with additional shadows
// const buttonColors = {
//   sky: `hover:bg-sky-500 hover:text-white hover:[box-shadow:5px_5px_#075985,_0_0_8px_#075985]`,
//   emerald: `hover:bg-emerald-500 hover:text-white hover:[box-shadow:5px_5px_#065f46,_0_0_8px_#065f46]`,
//   purple: `hover:bg-purple-600 hover:text-white hover:[box-shadow:5px_5px_#4c1d95,_0_0_8px_#4c1d95]`,
// };

export default function ServicesPage() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8d4a4a] to-[#0078d7]"> What We Offer </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((s, idx) => (
          <div key={idx} className="relative animate-fade-up">
            {/* Accent bar */}
            <div className="absolute left-0 top-6 bottom-6 w-[6px] bg-gradient-to-b from-[#0078d7] to-[#8d4a4a] rounded-full z-0"></div>

            {/* Card */}
            <div className="relative backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-8 pl-10 transition-transform hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] z-10">
              {/* Icon Bubble */}
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-inner text-4xl text-[#0078d7]">
                  {s.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-700 mb-4">{s.description}</p>
              <p className="text-lg font-semibold text-[#0078d7] mb-4">
                {s.price}
              </p>

              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                {s.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#0078d7] text-lg">⚡</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-6 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 px-6 font-medium text-neutral-600 transition-all duration-100
                bg-white
                ${buttonColors[s.buttonColor]}
                [box-shadow:5px_5px_rgb(82_82_82)]
                active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]
                `}
            >
                    Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

