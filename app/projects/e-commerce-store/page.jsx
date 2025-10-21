'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// قائمة الصور الحقيقية للمشروع
const projectScreenshots = [
  // صور الأدمن
  { src: "project-images/admin-portal/admin-dashboard-metrics.png", alt: "Admin Dashboard - Sales Metrics and Charts", category: "Admin" },
  { src: "project-images/admin-portal/manage-orders.png", alt: "Admin Portal - Order Management", category: "Admin" },
  { src: "project-images/admin-portal/manage-users.png", alt: "Admin Portal - User Management", category: "Admin" },
  { src: "project-images/admin-portal/cretae-update-product.png", alt: "Admin Portal - Product Management", category: "Admin" },
  
  // صور الكلاينت  
  { src: "project-images/client-ui/checkout-test-payment.png", alt: "Secure Checkout with Payment", category: "Client" },
  { src: "project-images/client-ui/shop-filtering.png", alt: "Shop Page with Filtering", category: "Client" },
  { src: "project-images/client-ui/shopping-cart.png", alt: "Shopping Cart Management", category: "Client" },
  { src: "project-images/client-ui/product-reviews.png", alt: "Product Reviews and Ratings", category: "Client" }
];


export default function ECommerceStore() {
  const [selectedImage, setSelectedImage] = useState(null);
  const lastFocusedRef = { current: null };
  const openModal = (screen) => {
    lastFocusedRef.current = document.activeElement;
    setSelectedImage(screen);
  };

  const closeModal = () => {
    setSelectedImage(null);
    if (lastFocusedRef.current && typeof lastFocusedRef.current.focus === 'function') {
      lastFocusedRef.current.focus();
    }
  };

  return (
    <div className="w-full px-[5%] md:px-[12%] py-12 min-h-screen bg-gray-900 text-white">
      
      {/* HEADER & LINKS */}
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center sm:text-left max-w-md sm:max-w-full mx-auto sm:mx-0">
          Full-Stack E-commerce Platform | MERN Stack
        </h1>
        <Link
          href="/#work"
          className="px-5 py-2 text-sm font-medium text-white border border-gray-600 rounded-full hover:bg-gray-800 transition duration-300 
          inline-flex items-center self-center sm:self-auto"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to My Work</span>
        </Link>
      </div>

     
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <a
          href="https://mernstack-e-commerce-store.pages.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full sm:w-auto text-center px-6 py-3 bg-pink-600 text-white text-base sm:text-lg font-semibold
           rounded-lg shadow-lg hover:bg-pink-700 transition duration-300"
        >
          Live Demo (Client View)
        </a>
        <a
          href="https://github.com/khawlasarhan92-dev/FullStack-e-Commerce-Store"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full sm:w-auto text-center px-6 py-3 bg-gray-700 text-white border border-gray-600 text-base 
          sm:text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
        >
          View Code (GitHub)
        </a>
      </div>

      {/* PROJECT OVERVIEW */}
      <h2 className="text-3xl font-bold mb-2 text-white border-b border-pink-600/50 pb-2">Project Overview</h2>
      <p className="text-base sm:text-lg md:text-xl mb-6 max-w-md sm:max-w-2xl lg:max-w-3xl text-gray-400 leading-relaxed mx-auto sm:mx-0">
        A **Full-stack E-commerce Platform** built on the **MERN** stack and **Redux Toolkit**.
         This project demonstrates my ability to build **scalable RESTful APIs** and manage complex authentication flows.
          A core feature is the secure, **role-based Admin Portal** which controls inventory and sales,
           alongside a complete customer interface with **advanced filtering**, **user account management**, 
           and an **integrated mock payment system** for secure transaction testing.
            This project was deployed on Render/Cloudflare Pages (End-to-End) and utilizes Cloudinary for image asset management.
      </p>

      {/* TECHNICAL FEATURES - Enhanced Content */}
      <h2 className="text-3xl font-bold mb-6 text-white border-b border-pink-600/50 pb-2">Key Technical 
      Implementations</h2>
      <ul className="space-y-6 mb-12 text-lg text-gray-300">
        
        <li className="flex items-start">
          <span className="font-semibold text-pink-500 text-xl mr-3">✓</span>
          <div>
            <strong className="text-white">Scalable Payment Integration:</strong> 
           Implemented a secure checkout process utilizing an
             using a **Integrated Sandbox Payment Flow** (`TestPayment` confirmed in Order Summary)
             to handle transaction validation, order status updates, and inventory reduction upon successful purchase.
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold text-pink-500 text-xl mr-3">✓</span>
          <div>
            <strong className="text-white">Role-Based Access Control (RBAC):</strong>
             Engineered a complete Admin Portal with protected backend routes (Node/Express).
             Used Mongoose Middleware to enforce **CRUD**
             permissions for products, orders, and user management.
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold text-pink-500 text-xl mr-3">✓</span>
          <div>
            <strong className="text-white">Industry-Standard Security:</strong> Developed robust User Sign-up/Login 
           flows using **JWT** for secure session management, and **Bcrypt** hashing for password protection.
           Implemented a robust token refresh mechanism for extended user sessions.
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold text-pink-500 text-xl mr-3">✓</span>
          <div>
            <strong className="text-white">Advanced Filtering & Redux State Management:</strong>
            Optimized product discovery by implementing **MongoDB Aggregation Pipelines** 
            for advanced multi-criteria filtering and search. Managed the Shopping Cart and Favorites state using **Redux Toolkit** 
            for a seamless user experience.
          </div>
        </li>
      </ul>

      {/* PROJECT IMAGES GALLERY */}
      <h2 className="text-3xl font-bold mb-6 text-white border-b border-pink-600/50 pb-2">Visual Showcase (Admin & Client)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projectScreenshots.map((screen, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-xl shadow-2xl cursor-pointer"
            onClick={() => openModal(screen)}
          >
             <Image 
              src={`/${screen.src}`} 
              alt={screen.alt} 
              width={500} 
              height={300} 
              className="w-full object-cover h-auto transition-transform duration-300 group-hover:scale-[1.05] border border-gray-700" 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                   strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
            <p className="absolute bottom-0 w-full text-center py-2 bg-pink-600/90 text-white text-sm font-medium">
              {screen.alt}
            </p>
          </div>
        ))}
      </div>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          role="presentation"
        >
          <div role="dialog" aria-modal="true" aria-label="Image preview" 
          className="relative max-w-5xl max-h-[90vh] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-60 bg-pink-600 hover:bg-pink-700 text-white rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <Image 
              src={`/${selectedImage.src}`} 
              alt={selectedImage.alt} 
              width={1200} 
              height={800} 
              className="w-full h-auto object-contain max-h-[80vh]" 
            />
            
            {/* Image Info */}
            <div className="p-6 bg-gray-800">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedImage.category === 'Admin' 
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-600/30' 
                    : 'bg-pink-600/20 text-pink-300 border border-pink-600/30'
                }`}>
                  {selectedImage.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{selectedImage.alt}</h3>
              <p className="text-gray-400 text-sm">Click anywhere outside to close</p>
            </div>
          </div>
        </div>
      )}


      {/* TECH STACK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-white border-b border-pink-600/50 pb-2">Core Tech Stack</h2>
          <ul className="list-disc ml-6 text-lg text-gray-300 space-y-2">
            <li><strong className="text-white">Frontend:</strong> React.js, **Tailwind CSS (Dark Mode UI)**, Redux Toolkit</li>
            <li><strong className="text-white">Backend:</strong> Node.js, Express.js (RESTful API), MongoDB (NoSQL Database)</li>
            <li><strong className="text-white">Security/Tools:</strong> JSON Web Tokens (JWT), Bcrypt, Chart.js, Axios</li>
          </ul>
        </div>
      </div>
    </div>
  );
}