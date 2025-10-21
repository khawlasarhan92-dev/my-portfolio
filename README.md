# KHAWLA SARHAN - Full-Stack Developer Portfolio & Online CV

This repository hosts my personal Curriculum Vitae (CV) and Portfolio website, built with **Next.js 14** and **Tailwind CSS**.

The primary purpose is to showcase my expertise in **MERN Stack** (MongoDB, Express, React, Node.js) and **Full-Stack JavaScript/TypeScript** development, highlighting my ability to handle complex application architecture from end-to-end.

---

## 🚀 Live Access & Key Links

This section provides direct access to my live CV and projects, as well as core professional profiles.

| Description | Link |
| :--- | :--- |
| **🌐 Live CV & Portfolio** | [View Live Site](https://my-portfolio-b6a.pages.dev) |
| **⬇️ Download Official CV (1-Page PDF)** | [Download PDF](https://my-portfolio-b6a.pages.dev/cv.pdf) |
| **🔗 LinkedIn Profile** | [Connect on LinkedIn](https://www.linkedin.com/in/khawla-sarhan-fullstack) |
| **💻 GitHub Repository** | [Source Code](https://github.com/khawlasarhan92-dev) |

---

## 🛠️ Tech Stack & Core Skills

The project is built upon a modern, high-performance stack:

* **Framework:** [Next.js (App Router)](https://nextjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & custom CSS for print media.
* **Languages:** JavaScript (ES6+), **TypeScript** (Applied).
* **Utilities:** ReactMarkdown for rendering the CV text (`public/CV.md`).

---

## 📂 Project Highlights

My portfolio is centered around two main, feature-rich applications that demonstrate core Full-Stack competencies:

### 1. KH Media App — Real-Time Social Platform
* **Description:** A full-featured social application implementing real-time features and secure token-based communication.
* **Key Features Demonstrated:** **Socket.IO** for live chat and notifications, **JWT** authorization, and performance optimization.

### 2. Full-Stack E-commerce Store
* **Description:** A complete MERN e-commerce solution focused on robust backend logic and scalable data handling.
* **Key Features Demonstrated:** Role-Based Access Control (**RBAC**), complex **MongoDB Aggregation Pipelines** for data analysis, and secure state management using **Redux Toolkit**.

---

## ⚙️ Local Setup Instructions

Follow these steps to run the project on your local machine:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/khawlasarhan92-dev/my-portfolio
    cd my-portfolio
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    # Access the site at http://localhost:3000
    ```

### Generating the PDF CV

The text content of the CV is maintained in `public/CV.md`. To generate the PDF version from this source, run:

```bash
npm run generate-cv
```

This command executes `scripts/generate-cv-pdf.js` which generates `public/cv.pdf` from `public/CV.md`.

The repository is logically organized to separate application logic from static content:

/my-portfolio
├── app/                  # Next.js App Router (Root layout and pages)
├── components/           # Reusable React components (e.g., CV rendering logic)
├── public/               # Static assets (images, PDF, CV source)
│   ├── CV.md             # The source text file for the CV
│   └── cv.pdf            # The 1-page PDF file
└── package.json          # Project dependencies and scripts