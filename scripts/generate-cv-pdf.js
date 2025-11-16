const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function generate() {
  const url = process.env.CV_URL || 'http://localhost:3000/cv';
  const outPath = path.join(__dirname, '..', 'public', 'cv.pdf');

  const browser = await puppeteer.launch({ 
    headless: true, 
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security', '--disable-dev-shm-usage'],
    executablePath: process.env.CHROME_PATH || undefined
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 900 });
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

    // remove the download button from the DOM so it doesn't appear in the PDF
    await page.evaluate(() => {
      const btn = document.querySelector('a[href="/cv.pdf"]');
      if (btn) btn.remove();
    });

    // inject print CSS to make the PDF use full printable width and disable shadows/rounded corners
    await page.addStyleTag({ content: `
      @media print {
        html, body {
          background: #fff !important;
          -webkit-print-color-adjust: exact;
        }
        /* target common container used in CV page */
        .max-w-2xl, [class*="max-w-2xl"] {
          max-width: calc(210mm - 36mm) !important; /* A4 width minus left+right margins */
          width: calc(210mm - 36mm) !important;
          margin: 0 auto !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          background: #fff !important;
        }
        .prose {
          font-size: 12pt !important;
          line-height: 1.35 !important;
        }
        /* remove any decorative elements */
        .shadow-lg { box-shadow: none !important; }
        .rounded-2xl { border-radius: 0 !important; }
      }
    `});

    // make Puppeteer use print styles
    await page.emulateMediaType('print');

    await page.pdf({
      path: outPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '18mm', right: '18mm', bottom: '18mm', left: '18mm' }
    });

    console.log('PDF generated at', outPath);
  } catch (err) {
    console.error('PDF generation failed:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

generate();
