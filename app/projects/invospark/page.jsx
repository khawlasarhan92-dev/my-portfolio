'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

// Complete Gallery of Screenshots & High-Precision Technical Descriptions
const projectScreenshots = [
  // 1. EXECUTIVE DASHBOARD & FINANCIAL ANALYTICS
  { 
    src: "invospark/dashboard-analytics.png", 
    title: "Executive Financial Dashboard & Real-Time Analytics", 
    category: "Financial Dashboard",
    description: "Engineered an executive financial dashboard delivering real-time business KPIs. Features dynamic computation pipelines tracking Gross vs. Net revenues (net of returns), automated COGS-derived Gross Profit Margin (%), dual-currency aggregation (USD/SYP), and multi-branch liability totals."
  },

  // 2. PRODUCTS & MULTI-BRANCH CATALOG
  { 
    src: "invospark/products-catalog.png", 
    title: "Multi-Branch Product Directory & Pricing Engine", 
    category: "Products Directory",
    description: "Architected a centralized product catalog managing enterprise master data (SKUs, Categories, Dual-Currency Pricing). Features a popover visual overlay for real-time Branch Availability, enforcing transactional inventory consistency across isolated operational units."
  },

  // 3. WAREHOUSE & STOCK LEDGER
  { 
    src: "invospark/inventory-audit-trail.png", 
    title: "Global Stock Ledger & Immutable Audit Trail", 
    category: "Inventory & Audit",
    description: "Architected an immutable, transaction-driven Global Stock Ledger logging line-item movements (Sales, Purchases, Returns, Adjustments). Computes precise prior and updated running balances with mandatory timestamps and user attributions for audit reconciliation."
  },
  { 
    src: "invospark/inventory-low-stock.png", 
    title: "Proactive Low-Stock Alerting & Suggested Actions", 
    category: "Inventory & Audit",
    description: "Integrated a reactive stock-monitoring engine that evaluates real-time inventory against dynamic reorder thresholds. Triggers low-stock alerts and suggests immediate business workflows (e.g., Create Purchase Order)."
  },

  // 4. DUAL-CURRENCY SALES INVOICING, PARTIAL RETURNS & CANCELLATION GUARDRAILS
  { 
    src: "invospark/sales-partial-return-reconciliation.png", 
    title: "Multi-Currency Invoicing, Partial Returns & Accounting Guardrails", 
    category: "Sales, Returns & Audit",
    description: "Engineered an end-to-end sales invoicing pipeline supporting dual-currency POS operations (USD/SYP rate freezing), line-item savings tracking, and dynamic 15% VAT calculations. Reconciles partial customer returns by pro-rating tax reversals and recalculating Net Totals (transitioning status to PARTIALLY REFUNDED), while enforcing strict accounting guardrails that lock invoice cancellation when linked to active return entries."
  },
  { 
    src: "invospark/sales-invoices-directory.png", 
    title: "Sales Invoices Directory & Real-Time Revenue Aggregation", 
    category: "Sales & Invoicing",
    description: "Engineered a centralized sales invoice management directory with real-time aggregate metrics (Page Total, Paid Amount, Remaining Balance). Features multi-parameter filtering (status, date ranges, full-text search), visual strikethrough pricing for partially refunded invoices, and seamless dual-currency state tracking."
  },
  { 
    src: "invospark/returns-and-refunds-audit.png", 
    title: "Omni-Channel Returns Directory & Granular Refund Audit Modal", 
    category: "Returns & Audit",
    description: "Architected a unified returns management system handling both Customer (Sales) and Supplier (Purchase) return workflows. Features a centralized registry linked to original invoice references, paired with a modal inspector that calculates itemized refund breakdowns, enforces historical exchange rate freezing (1 USD = 14,000 SYP), applies pro-rated 15% VAT reversals, and logs mandatory return reason codes for audit compliance."
  },

  // 5. ACCOUNTS PAYABLE & PURCHASING
  { 
    src: "invospark/supplier-ledger-statement.png", 
    title: "Supplier Ledger Audit Trail & Running Balance Engine", 
    category: "Accounts Payable",
    description: "Architected a double-entry supplier ledger computing real-time running balances (CR/DR). Accurately reconciles purchases, returns, inline invoice payments, and standalone vouchers with full multi-currency conversion tracking."
  },
  { 
    src: "invospark/purchase-invoice-payment-allocation.png", 
    title: "Dual-Currency Purchasing, Payment Allocations & AP Ledger Synchronization", 
    category: "Purchasing & Accounts Payable",
    description: "Engineered an atomic purchasing and Accounts Payable (AP) workflow supporting dual-currency transactions (USD/SYP exchange rate freezing). Features multi-stage payment processing (embedded at creation or via standalone supplier vouchers), real-time payment allocation logging, automatic remaining balance computation (Balance Due), and live ledger synchronization updating supplier credit/debit totals across branch directories."
  },

  // 6. SECURITY, RBAC & USER MANAGEMENT
  { 
    src: "invospark/landing-rbac-credentials.png", 
    title: "Role-Based Security Architecture & Instant Multi-Role Demo Access", 
    category: "Security & Access Control",
    description: "Engineered a granular Role-Based Access Control (RBAC) security framework with strict UI/API data-masking layers across 4 operational roles (Super Admin, Accountant, POS Cashier, Inventory Manager). Restricts sensitive financial metrics for warehouse staff, isolates POS transactions, and enforces branch-scoped data security. Features instant one-click demo credentials directly on the landing page for live role-switch testing."
  },
  { 
    src: "invospark/user-branch-access-management.png", 
    title: "Role-Based Access Control (RBAC) & Multi-Branch Access Scoping", 
    category: "Security & Access",
    description: "Configured multi-tenant enterprise security with granular domain permissions, role-based navigation guards, dynamic branch context switching, and isolated data visibility across operational units."
  },
  { 
    src: "invospark/account-security-best-practices.png", 
    title: "Account Security & Password Lifecycle Management", 
    category: "Security & Access",
    description: "Implemented enterprise authentication controls including strict password policy validation, secure JWT refresh session lifecycles, and audit logging for account governance."
  }
];

export default function InvoSparkERP() {
  const [selectedImage, setSelectedImage] = useState(null);
  const lastFocusedRef = useRef(null);

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

  // Keyboard accessibility & Body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="w-full px-[5%] md:px-[12%] py-12 min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900">
      
      {/* HEADER & BACK BUTTON */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200 mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Enterprise Grade ERP Engine
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 text-center sm:text-left tracking-tight">
            InvoSpark ERP <span className="text-sky-600">|</span> Multi-Branch Financial &amp; Inventory System
          </h1>
        </div>

        <Link
          href="/#work"
          className="px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-full hover:bg-slate-100 hover:text-slate-900 transition duration-200 inline-flex items-center shrink-0 shadow-sm"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* CALL TO ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <a
          href="https://invospark-web.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full sm:w-auto text-center px-6 py-3.5 bg-sky-600 text-white text-base sm:text-lg font-semibold rounded-xl shadow-md shadow-sky-600/20 hover:bg-sky-700 transition duration-200"
        >
          Live Production App
        </a>
        <a
          href="https://github.com/khawlasarhan92-dev/invoSpark-erp"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full sm:w-auto text-center px-6 py-3.5 bg-white text-slate-800 border border-slate-300 text-base sm:text-lg font-semibold rounded-xl shadow-sm hover:bg-slate-50 hover:border-slate-400 transition duration-200"
        >
          View Source Code (GitHub)
        </a>
      </div>

      {/* PROJECT OVERVIEW */}
      <div className="mb-12 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-3">
          <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Project Overview
        </h2>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
          <strong className="text-slate-900">InvoSpark ERP</strong> is an enterprise-grade multi-branch Enterprise Resource Planning (ERP) platform designed for complex retail, supply chain, and multi-currency environments. Built with a modern decoupled stack featuring <span className="text-sky-700 font-semibold">NestJS 11</span>, <span className="text-sky-700 font-semibold">Prisma ORM with PostgreSQL</span>, and <span className="text-sky-700 font-semibold">Next.js 15 (App Router)</span>, the platform provides strict transactional ACID guarantees, an immutable stock ledger audit trail, accounting cancellation guardrails, and real-time multi-branch inventory synchronization.
        </p>

        {/* IMPACT METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
            <span className="block text-2xl font-extrabold text-sky-600 mb-1">4 System Roles</span>
            <span className="text-xs text-slate-600 font-medium">Super Admin, Accountant, POS Cashier, Inventory</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
            <span className="block text-2xl font-extrabold text-sky-600 mb-1">Dual-Currency FX</span>
            <span className="text-xs text-slate-600 font-medium">USD / SYP Real-Time &amp; Historical Freezing</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
            <span className="block text-2xl font-extrabold text-sky-600 mb-1">100% Transactional</span>
            <span className="text-xs text-slate-600 font-medium">Prisma $transaction ACID Guarantees</span>
          </div>
        </div>
      </div>

      {/* TECHNICAL HIGHLIGHTS & ARCHITECTURE */}
      <div className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-3">
          Senior Architectural &amp; Financial Engineering Highlights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-sky-300 transition-all flex items-start space-x-4">
            <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Embedded Payment Engine &amp; Atomic Vouchers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Engineered atomic payment workflows executing voucher generation during purchasing/sales invoicing. Encapsulates payment allocation logs and financial vouchers inside single Prisma <code className="text-sky-800 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200 text-xs font-mono">$transaction</code> blocks to guarantee zero-discrepancy ledger updates.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-sky-300 transition-all flex items-start space-x-4">
            <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Immutable Stock Ledger &amp; Running Balance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Architected a document-driven inventory ledger recording every stock movement (<code className="text-sky-800 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200 text-xs font-mono">SALE</code>, <code className="text-sky-800 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200 text-xs font-mono">RETURN</code>, <code className="text-sky-800 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200 text-xs font-mono">ADJUSTMENT</code>) alongside prior and updated running balances for complete audit trail transparency.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-sky-300 transition-all flex items-start space-x-4">
            <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Cancellation Guardrails &amp; Accounting Safeguards</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Implemented strict financial guards preventing invoice deletion or cancellation when linked to active sales returns, maintaining strict balance sheet alignment and avoiding unrecorded inventory leaks.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-sky-300 transition-all flex items-start space-x-4">
            <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Multi-Currency &amp; Historical FX Rate Freezing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Stores dual-currency entries alongside locked exchange rates (<code className="text-sky-800 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200 text-xs font-mono">exchangeRate</code>, <code className="text-sky-800 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200 text-xs font-mono">totalInBaseCurrency</code>), ensuring macro-economic fluctuations do not distort past financial statements.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-sky-300 transition-all flex items-start space-x-4">
            <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Optimistic Concurrency &amp; Race Condition Prevention</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Guarded stock inventory against concurrent branch transactions using version-based optimistic locking (<code className="text-sky-800 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200 text-xs font-mono">ProductBranch.version</code>) to prevent race conditions during peak checkout periods.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-sky-300 transition-all flex items-start space-x-4">
            <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Real-Time WebSockets &amp; Branch-Scoped Rooms</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Built a Socket.IO gateway broadcasting instant notifications for low-stock threshold breaches and voucher allocations across isolated branch rooms (<code className="text-sky-800 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200 text-xs font-mono">branch_id</code>).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SYSTEM SHOWCASE GRID */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-3">
        System Showcase &amp; Detailed Workflows
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {projectScreenshots.map((screen, index) => (
          <div 
            key={index} 
            role="button"
            tabIndex={0}
            className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer group hover:-translate-y-1 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            onClick={() => openModal(screen)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(screen);
              }
            }}
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-200">
              <Image 
                src={`/${screen.src}`} 
                alt={screen.title} 
                width={500} 
                height={300} 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-sky-600 text-white p-2.5 rounded-full shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2.5">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                  {screen.category}
                </span>
              </div>
              
              <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-sky-600 transition-colors">
                {screen.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                {screen.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN IMAGE PREVIEW MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
          role="presentation"
        >
          <div 
            role="dialog" 
            aria-modal="true" 
            aria-label="Image preview" 
            className="relative max-w-5xl max-h-[92vh] w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-slate-900 hover:bg-slate-800 text-white rounded-full p-2 transition-colors duration-200 shadow-md focus:outline-hidden focus:ring-2 focus:ring-white"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image Preview Container */}
            <div className="relative w-full bg-slate-100 flex-1 flex items-center justify-center overflow-hidden p-3 border-b border-slate-200">
              <Image 
                src={`/${selectedImage.src}`} 
                alt={selectedImage.title} 
                width={1200} 
                height={800} 
                className="w-full h-auto object-contain max-h-[70vh] rounded-lg shadow-sm" 
              />
            </div>
            
            {/* Image Description Footer */}
            <div className="p-6 bg-slate-50">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-md text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
                  {selectedImage.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{selectedImage.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* TECH STACK BREAKDOWN */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900 border-b border-slate-200 pb-3">
        System Architecture &amp; Technology Stack
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
            <span className="text-sky-600 font-extrabold">01.</span> Backend &amp; Financial Engine
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-600">
            <li><strong className="text-slate-900">Framework:</strong> NestJS 11 (Node.js 22), TypeScript / Node.js</li>
            <li><strong className="text-slate-900">ORM &amp; Database:</strong> Prisma 5.22, PostgreSQL 16</li>
            <li><strong className="text-slate-900">Caching &amp; Queues:</strong> Redis 7 (Service Containers)</li>
            <li><strong className="text-slate-900">Real-Time Gateway:</strong> Socket.IO WebSockets</li>
            <li><strong className="text-slate-900">Reporting Engine:</strong> Puppeteer (PDF Rendering), Cloudinary</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
            <span className="text-sky-600 font-extrabold">02.</span> Frontend &amp; State Management
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-600">
            <li><strong className="text-slate-900">Framework:</strong> Next.js 15 (App Router), React 18</li>
            <li><strong className="text-slate-900">Design System:</strong> Tailwind CSS 3.4, shadcn/ui</li>
            <li><strong className="text-slate-900">State &amp; Server Query:</strong> Zustand, TanStack React Query</li>
            <li><strong className="text-slate-900">Forms &amp; Data Viz:</strong> React Hook Form, Zod, Recharts</li>
            <li><strong className="text-slate-900">Precision Math:</strong> Decimal.js, Currency.js, Date-fns</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
            <span className="text-sky-600 font-extrabold">03.</span> DevOps, Security &amp; Audit
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-600">
            <li><strong className="text-slate-900">Containerization:</strong> Docker &amp; Multi-stage Docker Compose</li>
            <li><strong className="text-slate-900">Web Server:</strong> Nginx (Production Reverse Proxy)</li>
            <li><strong className="text-slate-900">Cloud Platform:</strong> Render Blueprint (render.yaml)</li>
            <li><strong className="text-slate-900">Security &amp; Auth:</strong> JWT, Passport, NestJS Throttler, Bcrypt</li>
            <li><strong className="text-slate-900">API Documentation:</strong> Swagger / OpenAPI 3.0</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM CALL TO ACTION / FOOTER NAVIGATION */}
      <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Interested in this Architecture?</h3>
          <p className="text-sm text-slate-600">Explore the live demo or review the repository on GitHub.</p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Link
            href="/#work"
            className="px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition shadow-sm text-center flex-1 sm:flex-none"
          >
            ← Back to Portfolio
          </Link>
          <a
            href="https://invospark-web.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 rounded-xl hover:bg-sky-700 transition shadow-md shadow-sky-600/20 text-center flex-1 sm:flex-none"
          >
            Launch Live Demo
          </a>
        </div>
      </div>

    </div>
  );
}