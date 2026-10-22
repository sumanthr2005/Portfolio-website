# Sumanth R — Premium Engineering Portfolio

> **"Building intelligent systems. Engineering useful products."**  
> A cinematic, editorial, high-contrast dark portfolio website for **Sumanth R** — AI/ML and Software Engineer (SRM Institute of Science and Technology, Class of 2027).

---

## 🌟 Visual & Architectural Direction

Inspired by high-fashion editorial poster layouts and technical engineering dashboards:
* **Color Palette:**
  * Base Background: Deep Obsidian `#080808`
  * Secondary Surfaces: Charcoal Glassmorphism `#111111`, `#161616` with thin `#222222` borders
  * Primary Accent: Intense Crimson Red `#E50914` with ambient neon backlights
  * Text: Warm White `#F5F5F5` and Subdued Technical Gray `#A3A3A3`
* **Typography:**
  * **Display:** Bebas Neue (Condensed uppercase poster headers)
  * **Body / Editorial:** Plus Jakarta Sans & Inter
  * **Code / Technical Metadata:** JetBrains Mono
  * **Script Accent:** Caveat ("Hello, I'm")
* **Key Sections:**
  1. **Hero (Cinematic Poster):** Giant crimson `INTELLIGENCE` backdrop, authentic color-graded portrait of Sumanth R with ambient rim lighting, verified metrics, and dual CTAs.
  2. **About Me ("Beyond the Code"):** Professional narrative articulating end-to-end engineering philosophy, systems rigor, and an academic profile panel.
  3. **Selected Projects:** Asymmetrical editorial cards (`01`, `02`, `03`...) featuring *MultiShield-AI*, *InterviewVerse AI*, *Marine Sentinel*, *Enterprise RAG*, *Distributed Job Scheduler*, and *AI-Powered SQL Learning Platform*.
  4. **Interactive MultiShield-AI Sandbox:** Live in-browser multi-agent routing and SHAP token attribution simulator showcasing explainable AI in action.
  5. **Technical Skills ("The Engineering Toolkit"):** Categorized into 6 clean disciplines without arbitrary percentage bars.
  6. **Research & Publications:** Dedicated showcase of Sumanth's IEEE SCEECS 2026 paper on deep learning brain tumor classification (16,000+ MRI scans, 96%+ accuracy, 0.997 AUC, 75% PCA reduction).
  7. **Experience & Fellowships:** Verified timeline spanning Works Applications India (On-site SDE Intern), Hyphiin (Remote SDE Intern), Google AI/ML Virtual Intern (AICTE), and Headstarter AI Fellow.
  8. **How I Build ("From Problem to Product"):** 5-step engineering process (Discover → Design → Build → Validate → Iterate) alongside an editorial quote panel.
  9. **Academics & Credentials:** SRM IST B.Tech CSE (AIML) with 8.98/10 CGPA, coursework breakdown, and hackathon podium honors (3rd Place in CodeMavens 2025).
  10. **Contact ("Let's Build Something Meaningful"):** Direct channels with one-click copy, validated contact form, and celebratory confetti animation with automatic mailto fallback.
  11. **Footer:** Minimal high-contrast footer with dynamic copyright year and back-to-top interaction.

---

## 🛠️ Technology Stack

* **Framework:** React 19 + TypeScript
* **Build Tool:** Vite 8 (Ultra-fast HMR and bundle compilation)
* **Styling:** Tailwind CSS + PostCSS + Autoprefixer
* **Icons:** Lucide Icons & Custom SVG Brand Monograms
* **Interactions:** Canvas-Confetti, smooth anchor scrolling, interactive modal state management

---

## 🚀 Getting Started Locally

### Prerequisites
* **Node.js:** v18.0.0 or later (Tested with Node v22.14.0)
* **npm:** v9.0.0 or later

### Installation
```bash
# Clone or navigate to the repository directory
cd d:/PORTFOLIO

# Install dependencies
npm install
```

### Development Server
```bash
# Start local development server with Hot Module Replacement
npm run dev
```
The site will be accessible at:
* Local: `http://localhost:5173/`

### Production Build
```bash
# Type check and build optimized static production bundle
npm run build
```
The compiled output is located in the `dist/` directory.

### Preview Production Build
```bash
# Serve the compiled production dist directory
npm run preview
```

---

## 📁 Repository Structure

```text
PORTFOLIO/
├── public/
│   ├── assets/
│   │   ├── portrait.png          # Color-graded authentic portrait with rim glow
│   │   └── avatar_badge.png      # Avatar badge for Open Graph and metadata
│   ├── resumes/                  # Archived verified resume PDFs
│   ├── favicon.svg               # Sleek dark and crimson SVG favicon
│   └── Sumanth_R_Resume.pdf      # Primary downloadable resume asset
├── src/
│   ├── components/
│   │   ├── About.tsx             # Professional narrative & profile panel
│   │   ├── CaseStudyModal.tsx    # Architectural deep-dive modal
│   │   ├── Contact.tsx           # Validated contact form & direct channels
│   │   ├── Education.tsx         # SRM IST academic record & credentials
│   │   ├── Experience.tsx        # Internships & hackathon timeline
│   │   ├── Footer.tsx            # Minimal high-contrast footer
│   │   ├── Hero.tsx              # Cinematic poster hero with oversized display
│   │   ├── Icons.tsx             # Custom SVG brand icons (GitHub, LinkedIn)
│   │   ├── InteractiveDemo.tsx   # MultiShield-AI live sandbox simulator
│   │   ├── Navbar.tsx            # Fixed blur navbar & mobile drawer
│   │   ├── Process.tsx           # 5-step engineering process & quote panel
│   │   ├── Projects.tsx          # Asymmetric project grid & category filter
│   │   ├── Research.tsx          # IEEE SCEECS 2026 publication card
│   │   └── Skills.tsx            # Categorized engineering toolkit
│   ├── data/
│   │   └── portfolioData.ts      # Single source of truth for verified content
│   ├── App.tsx                   # Main layout assembling all sections
│   ├── index.css                 # Custom design tokens, scrollbar & utilities
│   └── main.tsx                  # Application entry point
├── index.html                    # SEO meta tags, Google Fonts & Open Graph
├── tailwind.config.js            # Curated theme colors, fonts & shadows
├── package.json
└── tsconfig.json
```

---

## 🚢 Deployment Guidelines

### Option A: Deploying to Vercel (Recommended)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Sumanth R portfolio"
   git remote add origin https://github.com/sumanthr2005/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Set the build settings:
   * **Framework Preset:** Vite
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
   * **Install Command:** `npm install`
5. Click **"Deploy"**. Your portfolio is live with global CDN and automated SSL!

### Option B: Deploying to Netlify
1. Create a `netlify.toml` file or import through the Netlify dashboard:
   * **Build command:** `npm run build`
   * **Publish directory:** `dist`
2. Connect your GitHub repository to enable continuous deployments on every commit.

---

## 🔒 Content Verification & Integrity Note

All facts, metrics, and technical contributions in this portfolio are sourced directly from Sumanth R's official resume versions and published academic documentation:
* **Academic Record:** SRM Institute of Science and Technology, B.Tech. CSE (AIML), 2023–2027 (CGPA 8.98/10).
* **Internships:** Works Applications India (On-site), Hyphiin (Remote), All India Council for Technical Education / Google AI/ML (Remote).
* **Research:** IEEE SCEECS 2026 Conference publication on Brain Tumor Classification using deep learning and PCA feature compression on 16,000+ MRI scans.
* **Awards:** 3rd Place at CodeMavens 2025 Hackathon (ACM-W SRM Chapter).
* **Zero Arbitrary Metrics:** No fabricated skill percentages or fake social proof.
