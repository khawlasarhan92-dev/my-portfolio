'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const projectScreenshots = [
  { src: "media-images/home-page.png", alt: "Home Feed - Posts & Suggestions" },
  { src: "media-images/create-post-madal.png", alt: "Create Post Modal" },
  { src: "media-images/messages-page.png", alt: "Messages Page" },
  { src: "media-images/user-profile.png", alt: "User Profile" },
  { src: "media-images/update-profile-page.png", alt: "Update Profile" },
  { src: "media-images/view-comments-modal.png", alt: "View Comments Modal" },
  { src: "media-images/activeusers-list.png", alt: "Active Users List" },
  { src: "media-images/register-page.png", alt: "Register Page" },
  { src: "media-images/verify-otp-page.png", alt: "Verify OTP Page" }
];

export default function KHMediaApp() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (screen) => setSelectedImage(screen);
  const closeModal = () => setSelectedImage(null);
  // Focus management for accessibility: save/restore focused element
  const lastFocusedRef = { current: null };
  const handleOpen = (screen) => {
    lastFocusedRef.current = document.activeElement;
    openModal(screen);
  };
  const handleClose = () => {
    closeModal();
    if (lastFocusedRef.current && typeof lastFocusedRef.current.focus === 'function') {
      lastFocusedRef.current.focus();
    }
  };

  // close modal on Escape key when it's open
  useEffect(() => {
    if (!selectedImage) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [selectedImage]);

  return (
    <div className="w-full px-[5%] md:px-[12%] py-12 min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-blue-700 drop-shadow leading-tight sm:leading-tight 
        tracking-tight max-w-md sm:max-w-2xl mx-auto">
          KH Media App — Real‑Time Social Platform
        </h1>
        <p className="text-base sm:text-lg mb-8 max-w-md sm:max-w-2xl mx-auto text-center text-gray-600 leading-relaxed">
         KH Media App is a modern, end‑to‑end social media platform engineered for real‑time interaction and scalable community engagement.
          Built with Next.js, Node.js, and Socket.IO,
           it focuses on low‑latency communication, robust backend integrity, and a polished user experience — featuring live chat, 
           instant notifications, and media‑enabled posts.
        </p>
        {/* Socket.io Highlight Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-blue-700 mb-2 text-center">Real-Time Communication (Socket.io)</h2>
          <p className="text-base text-gray-700 text-center max-w-2xl mx-auto">
           The platform's real‑time engine, powered by  
            <span className="font-semibold text-cyan-700">Socket.io</span>. 
            provides instant messaging, live notifications, and accurate user presence tracking. 
            On the backend we use atomic checks and unique constraints to prevent duplicate chat creation, 
           ensuring consistent behavior under concurrent load and reliable message delivery for connected users.
          </p>
        </div>

        {/* معرض صور المشروع */}
  <h2 className="text-2xl font-semibold mb-6 text-blue-700 text-center">Interactive Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {projectScreenshots.map((screen, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-xl cursor-pointer border border-cyan-200
               bg-gradient-to-tr from-blue-100 to-cyan-50"
              onClick={() => handleOpen(screen)}
            >
              <Image
                src={`/${screen.src}`}
                alt={screen.alt}
                width={400}
                height={250}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.05] group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-700/0 group-hover:bg-blue-700/20 transition-all duration-300 flex
               items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                     strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <p className="absolute bottom-0 w-full text-center py-2 bg-cyan-600/90 text-white text-sm font-medium">
                {screen.alt}
              </p>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleClose}
            role="presentation"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Image preview"
              className="relative max-w-3xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-60 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg
                 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={`/${selectedImage.src}`}
                alt={selectedImage.alt}
                width={1000}
                height={700}
                loading="eager"
                className="w-full h-auto object-contain max-h-[80vh]"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-blue-700 mb-2">{selectedImage.alt}</h3>
                <p className="text-gray-500 text-sm"> click outside the image or press Esc to close the preview.</p>
              </div>
            </div>
          </div>
        )}

        {/* Main Features */}
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Main Features</h2>
        <ul className="list-disc ml-8 mb-8 text-base text-gray-700">
          <li className="hover:text-blue-600 transition">Real‑time chat and instant notifications (Socket.IO) with optimistic UI updates</li>
          <li className="hover:text-blue-600 transition">Create, like, and comment on posts with dynamic updates</li>
          <li className="hover:text-blue-600 transition">Follow/unfollow system to personalize user feeds and recommendations</li>
          <li className="hover:text-blue-600 transition">Advanced profile management and editing</li>
          <li className="hover:text-blue-600 transition">Secure authentication and role‑aware access controls (JWT)</li>
          <li className="hover:text-blue-600 transition">Full‑text search for posts and users with relevance‑based results</li>
        </ul>

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Tech Stack</h2>
        <ul className="list-disc ml-8 mb-10 text-base text-gray-700">
          <li className="hover:text-cyan-600 transition"><span className="font-semibold">Frontend:</span>
           Next.js, React, TypeScript, Tailwind CSS, Redux Toolkit — client‑side rendering with performant routing and state management</li>
          <li className="hover:text-cyan-600 transition"><span className="font-semibold">Backend:</span> Node.js, Express, MongoDB (Mongoose), Socket.IO — scalable REST APIs and a resilient real‑time layer</li>
          <li className="hover:text-cyan-600 transition"><span className="font-semibold">Other:</span> Infrastructure & Integrations: JWT auth, Multer + Cloudinary for media handling, Mailtrap for email testing, Sonner for in‑app notifications</li>
        </ul>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/#work" 
          className="block w-full sm:w-auto text-center px-6 py-3 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800 transition">
            Back to Projects
          </a>
          <a href="https://kh-media-app.pages.dev" 
          target="_blank" 
          rel="noopener" 
          className="block w-full sm:w-auto text-center px-6 py-3 bg-cyan-500 text-white rounded-full shadow-lg hover:bg-cyan-600 transition">
            View Live Demo
          </a>
          <a href="https://github.com/khawlasarhan92-dev/KH-Media-App"
           target="_blank"
            rel="noopener" 
            className="block w-full sm:w-auto text-center px-6 py-3 bg-gray-100 text-blue-700 border border-blue-300 rounded-full
             shadow-lg hover:bg-gray-200 transition">
              View Source on GitHub
            </a>
        </div>
      </div>
    </div>
  );
}
