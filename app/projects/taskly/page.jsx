
//app/projects/taskly/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const projectScreenshots = [
  { src: "taskly/admin-dashboard-overview.png", alt: "Dynamic Dashboard - Real-time Stats", category: "App" },
  { src: "taskly/admin-trash-bin.png", alt: "Admin Trash Management", category: "App" },
  { src: "taskly/attachments-and-activity-log.png", alt: "User Profile & Custom Avatars", category: "App" },
  { src: "taskly/notification-panel-mobile.png", alt: "Secure Authentication Flow", category: "Auth" },
  { src: "taskly/task-discussion-comments.png", alt: "Task Discussion & Comments", category: "App" },
];

const technicalFeatures = [
  {
    title: "Real-Time Engine",
    tech: "Socket.io",
    description: "نظام مزامنة لحظي يسمح بتحديث المهام والتعليقات فوراً لجميع المستخدمين المتصلين بدون الحاجة لتحديث الصفحة، مع إدارة دقيقة لحالة الاتصال (User Presence).",
    icon: "⚡"
  },
  {
    title: "Granular RBAC",
    tech: "Node.js & MongoDB",
    description: "هيكلية صلاحيات معقدة تضمن عزل البيانات؛ حيث لا يمكن للمستخدم العادي الوصول إلا لمهامه الخاصة، بينما يمتلك الأدمن لوحة تحكم شاملة للمراقبة والأرشفة.",
    icon: "🛡️"
  },
  {
    title: "State Architecture",
    tech: "Zustand & React Query",
    description: "إدارة الحالة العالمية للتطبيق باستخدام Zustand لسرعة الأداء، مع دمج TanStack Query لعمل Caching ذكي للبيانات وتقليل طلبات السيرفر.",
    icon: "🏗️"
  },
  {
    title: "DevOps & Security",
    tech: "Docker & JWT",
    description: "تغليف التطبيق بالكامل باستخدام Docker لضمان بيئة تشغيل موحدة، مع تأمين الاتصال عبر JWT وشروط صارمة لتوثيق الهوية (Authentication Flow).",
    icon: "🐳"
  }
];

export default function TasklyProject() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full px-[5%] md:px-[12%] py-12 min-h-screen bg-gradient-to-br from-[#FDFCF8] via-[#F4F9F4] to-[#E8F3E8] text-slate-800 font-sans">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-emerald-900/5 pb-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1A3C34] mb-2 tracking-tighter">
            Taskly<span className="text-emerald-500">.</span>
          </h1>
          <p className="text-emerald-700 font-bold tracking-[0.3em] text-xs uppercase">Full-Stack Architecture</p>
        </div>
        <Link href="/#work" className="px-6 py-2 bg-white border border-emerald-100 rounded-full text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white transition-all shadow-sm font-bold">
          ← Back to Work
        </Link>
      </div>

      {/* Main Description */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3C34] mb-6">هندسة متكاملة لإدارة الإنتاجية</h2>
        <p className="text-lg text-slate-600 leading-relaxed italic">
          "تم بناء Taskly ليكون أكثر من مجرد تطبيق مهام بسيط؛ هو نظام متكامل يعالج تحديات المزامنة اللحظية وأمن البيانات في بيئات العمل المشترك."
        </p>
      </div>

      {/* Technical Deep Dive (The Explanation Section) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {technicalFeatures.map((feat, i) => (
          <div key={i} className="group bg-white p-8 rounded-[2rem] shadow-sm border border-emerald-100 hover:border-emerald-500 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl p-3 bg-emerald-50 rounded-2xl group-hover:bg-emerald-500 group-hover:scale-110 transition-all">{feat.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-[#1A3C34]">{feat.title}</h3>
                <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">{feat.tech}</span>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {feat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Visual Showcase  */}
      <h2 className="text-3xl font-black text-center text-[#1A3C34] mb-12 uppercase tracking-tighter">Inside the System</h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 max-w-6xl mx-auto">
        {projectScreenshots.map((screen, idx) => (
          <div 
            key={idx} 
            className="break-inside-avoid relative group rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100 bg-white cursor-pointer"
            onClick={() => setSelectedImage(screen)}
          >
            <Image 
              src={`/${screen.src}`} 
              alt={screen.alt} 
              width={500} 
              height={800} 
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="bg-[#1A3C34] p-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300/80 italic">{screen.category}</span>
              <p className="text-sm font-bold text-white mt-1">{screen.alt}</p>
            </div>
          </div>
        ))}
      </div>

        {/* Commercial & Licensing Section */}
        <div className="max-w-6xl mx-auto mt-32 mb-20">
          <div className="bg-[#1A3C34] rounded-[3rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
              هل تبحث عن حل مخصص لشركتك؟
            </h2>
            <p className="text-emerald-100/80 text-lg max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
              نظام Taskly جاهز للتطوير والتخصيص بما يتناسب مع احتياجات فريقك. 
              يمكنني تقديم الدعم الفني، استضافة النظام على خوادم خاصة، وإضافة ميزات برمجية حصرية حسب الطلب.
            </p>

            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <a 
                href="mailto:khawlasarhan92@gmail.com?subject=Inquiry about Taskly Enterprise Solution"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#1A3C34] font-black rounded-2xl transition-all shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                تواصل للاستفسار التجاري
              </a>
              <div className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold italic">
                قابل للتخصيص بالكامل (White Label)
              </div>
            </div>
          </div>
        </div>

      {/* Action Footer */}
      <div className="max-w-6xl mx-auto mt-24 py-12 border-t border-emerald-900/10 flex flex-col items-center gap-8">
        <h3 className="text-2xl font-bold text-[#1A3C34]">هل تريد تجربة النظام بنفسك؟</h3>
        <div className="flex flex-wrap gap-4 mb-2">
   <a href="https://task-manager-frontend-0pvi.onrender.com" target="_blank" 
        className="px-8 py-3 bg-[#1A3C34] text-white rounded-2xl font-bold shadow-lg hover:scale-105 transition-all">Live Preview</a>
          <a href="mailto:khawlasarhan92@gmail.com" 
          className="px-8 py-3 bg-white border-2 border-[#1A3C34] text-[#1A3C34] rounded-2xl 
          font-bold hover:bg-emerald-50 transition-all text-center">Request Code</a>
        </div>


        <p className="flex items-center gap-2 text-sm md:text-base text-emerald-900/70 font-medium bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100">
          <span className="animate-pulse text-lg">☕</span> 
          Note: Initial load may take ~40s while the free-tier server wakes up.
        </p>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-[#0C1A17]/90 backdrop-blur-xl z-50 flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl w-full animate-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
             <button className="absolute -top-12 right-0 text-white text-4xl" onClick={() => setSelectedImage(null)}>✕</button>
             <Image src={`/${selectedImage.src}`} alt={selectedImage.alt} width={1200} height={1600} className="max-w-full max-h-[80vh] object-contain rounded-3xl shadow-2xl" />
             <p className="text-emerald-400 mt-6 text-center text-xl font-bold uppercase tracking-widest">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}