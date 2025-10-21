"use client";
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';


const Icons = {
  Email: () => (
    <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
  ),
  Phone: () => (
    <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.293 1.255l-4.793 4.793a1 1 0 00-.214 1.056l1.378 4.303a1 1 0 00.945.683h2.022c.28 0 .554-.086.79-.26l5.09-3.714a1 1 0 00.56-.913V12a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1a1 1 0 00-1-1H3V5z"></path></svg>
  ),
  GitHub: () => (
    <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.169 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.368-1.341-3.368-1.341-.454-1.157-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.83.091-.64.359-1.088.653-1.334-2.228-.252-4.553-1.112-4.553-4.931 0-1.09.39-1.984 1.029-2.682-.103-.252-.446-1.27.098-2.651 0 0 .84-.269 2.75 1.024A9.574 9.574 0 0112 6.844c.85.004 1.701.11 2.5.326 1.909-1.293 2.747-1.024 2.747-1.024.546 1.382.202 2.399.098 2.651.64.698 1.028 1.592 1.028 2.682 0 3.829-2.333 4.675-4.565 4.922.359.307.678.915.678 1.848 0 1.334-.012 2.41-.012 2.73 0 .267.18.577.688.484C20.137 20.15 23 16.416 23 12.017 23 6.484 18.522 2 13 2h-1z"></path></svg>
  ),
  Link: () => (
    <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
  ),
  LinkedIn: () => (
    <span className="w-4 h-4 mr-1 font-bold text-lg leading-none flex-shrink-0">in</span> 
  ),
};


export default function CVPage() {
  const [rawMd, setRawMd] = useState('');
  const [cleanMd, setCleanMd] = useState('');
  const [name, setName] = useState('');
  const [titleLine, setTitleLine] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [locationLine, setLocationLine] = useState('');

  useEffect(() => {
    fetch('/CV.md')
      .then((r) => r.text())
      .then((text) => {
        setRawMd(text);

        // Split lines and extract contact info heuristically
        const lines = text.split(/\r?\n/).map((l) => l.trim());

        // find first non-empty line as name and strip any leading Markdown header hashes
        const firstNonEmpty = lines.find((l) => l.length > 0) || '';
        const cleanFirst = firstNonEmpty.replace(/^#+\s*/, '').trim();
        setName(cleanFirst);

        // find next non-empty after name as title (optional)
        const firstIndex = lines.findIndex((l) => l === firstNonEmpty);
        const nextLine = lines.slice(firstIndex + 1).find((l) => l.length > 0) || '';
        setTitleLine(nextLine);

        // helper regex
        const emailRe = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
        const phoneRe = /\+?\d[\d\s\-]{6,}\d/;

        let e = '';
        let p = '';
        let gh = '';
        let li = '';
        let pf = '';
        let loc = '';

        for (const l of lines) {
          // extract email and phone even if on the same line
          if (!e && emailRe.test(l)) {
            const m = l.match(emailRe);
            e = m ? m[0] : '';
          }
          if (!p && phoneRe.test(l)) {
            const m = l.match(phoneRe);
            p = m ? m[0] : '';
          }

          // Extract URLs based on keywords (using a general URL pattern)
          // Find all URL occurrences on the line (if multiple are present)
          const urlMatches = l.match(/https?:\/\/[\w.\/\-?=&#%]+/ig) || [];

          if (!gh && /github\.com/i.test(l)) {
            // Prefer a matched URL that contains github.com
            gh = (urlMatches.find((u) => /github\.com/i.test(u)) || urlMatches[0] || '');
          }
          if (!li && /linkedin\.com/i.test(l)) {
            // Prefer a matched URL that contains linkedin.com
            li = (urlMatches.find((u) => /linkedin\.com/i.test(u)) || urlMatches[0] || '');
          }
          if (!pf && /portfolio|live demo|pages\.dev|vercel\.app/i.test(l)) {
            // Prefer a matched URL that looks like a portfolio/live demo
            pf = (urlMatches.find((u) => /portfolio|pages\.dev|vercel\.app|live\s?demo/i.test(u)) || urlMatches[0] || '');
          }
          if (!loc && /Open to:|Location:|Available for/i.test(l)) {
            loc = l;
          }
        }

        setEmail(e);
        setPhone(p);
        setGithub(gh);
        setLinkedin(li);
        // Prioritize a dedicated 'Portfolio' link, otherwise keep the best guess
        setPortfolio(pf); 
        setLocationLine(loc);

        // remove lines that contained those contact bits from markdown before rendering
        const cleaned = lines.filter((l) => {
          // Skip the first two lines (Name and Title/Specialty line)
          if (l === firstNonEmpty) return false;
          if (l === nextLine) return false;
          // Skip lines containing contact info that are rendered in the header
          if (emailRe.test(l) || phoneRe.test(l)) return false;
          if (l.includes('github.com')) return false;
          if (l.includes('linkedin.com')) return false;
          if (/portfolio|live demo/i.test(l)) return false;
          if (/Open to:|Location:|Available for/i.test(l)) return false;
          
          return true;
        }).join('\n\n'); // Use double newline for better markdown paragraph separation

        setCleanMd(cleaned);
      })
      .catch(() => {
        setRawMd('');
        setCleanMd('');
      });
  }, []);

  return (
    <div className="w-full px-6 sm:px-12 py-10 sm:py-20 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 sm:p-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-left text-gray-900 dark:text-white">{name}</h1>
            {/* Title Line (Specialty) */}
            {titleLine && <p className="mt-1 text-lg font-medium text-blue-600 dark:text-blue-400">{titleLine}</p>} 
            
            {/* Contact Information Block */}
            <div className="mt-4 text-base text-gray-700 dark:text-gray-300 text-left">
              
              {/* Row 1: Email and Phone */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-2">
                {email && <span className="flex items-center">
                    <Icons.Email />
                    <a className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition" href={`mailto:${email}`}>{email}</a>
                </span>}
                {phone && <span className="flex items-center">
                    <Icons.Phone />
                    <span>{phone}</span>
                </span>}
              </div>
              
              {/* Row 2: Social Links */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                {github && <a className="hover:underline flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition" href={github}>
                    <Icons.GitHub />
                    GitHub
                </a>}
                {linkedin && <a className="hover:underline flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition" href={linkedin}>
                    <Icons.LinkedIn />
                    LinkedIn
                </a>}
                {portfolio && <a className="hover:underline flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition" href={portfolio}>
                    <Icons.Link />
                    Portfolio
                </a>}
              </div>
              
              {/* Location/Open to line */}
              {locationLine && <div className="mt-3 text-sm italic text-gray-500 dark:text-gray-400">{locationLine}</div>}
            </div>
          </div>
          
          {/* Download Button */}
          <div className="flex-shrink-0 mt-4 sm:mt-0">
            <a href="/cv.pdf" className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-150 shadow-md">
                Download PDF
            </a>
          </div>
        </div>

        {/* Markdown Content Section */}
        {/* We use a global style block to enhance the default prose/markdown styling */}
        <div className="prose max-w-none dark:prose-invert">
          <style jsx global>{`
            .prose h2 {
              /* Style H2 (Major Sections) */
              border-bottom: 2px solid #e5e7eb; /* Light separator line */
              padding-bottom: 0.5rem; 
              margin-top: 2.5rem !important;
              margin-bottom: 1rem !important;
              font-weight: 800; /* Extra Bold */
              color: #1f2937; /* Darker text */
              letter-spacing: -0.025em; /* Tighten up the letters a bit */
            }
            .dark .prose h2 {
              border-bottom-color: #374151; /* Darker separator */
              color: #f3f4f6;
            }
            .prose h3 {
              /* Style H3 (Sub-sections like Project Titles) */
              margin-top: 1.5rem !important;
              margin-bottom: 0.5rem !important;
              font-weight: 700;
              color: #111827; /* Very dark title */
            }
            .prose ul, .prose ol {
              padding-left: 1.5em; 
            }
            .prose li {
              margin-bottom: 0.5rem; 
              line-height: 1.6; /* Better readability for bullet points */
            }
          `}</style>
          <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>{cleanMd || rawMd}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}