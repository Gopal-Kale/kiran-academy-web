# 🎓 The Kiran Academy — Web Application

A modern, high-aesthetic web application based on **[The Kiran Academy](https://thekiranacademy.com/)**, Pune's leading IT training institute.

Built with **HTML5**, **Vanilla CSS** (custom design system, glassmorphic UI, responsive layouts, dark/light theme switch), and **Modular JavaScript**.

---

## 🌟 Key Features

- **Mega Menu Navigation**: Multi-tab course navigation with category panels.
- **Dark/Light Theme Switcher**: Toggle between sleek dark mode and bright clean light mode.
- **Dismissable Announcement Ribbon**: Top banner announcing master programs with persistent local state.
- **Interactive Course Explorer**: Filter courses by domain (*Full Stack*, *Data & AI*, *Testing*) or live search.
- **Career & Salary Estimator Widget**: Interactive package calculator based on track and background.
- **Alumni Placement Wall**: Filterable showcase of placed students, hiring companies, and salary packages (LPA).
- **Branch Locator Tabs**: Real branch address, phone numbers, and operational timings for Karve Nagar, Hadapsar, Chinchwad, and Nagpur.
- **Demo Booking & Syllabus Modals**: Full modal forms with field validation and toast feedback notifications.
- **SEO & Performance Optimized**: Schema.org JSON-LD structured data, meta descriptions, semantic HTML5, zero external bulky dependencies.

---

## 🚀 How to Run Locally

### Option 1: Live Development Server (Vite)
1. Open your terminal in this directory:
   ```bash
   cd C:\Users\hp\.gemini\antigravity\scratch\kiran-academy-web
   ```
2. Install dependencies and start local server:
   ```bash
   npm install
   npm run dev
   ```
3. Open the URL printed in the terminal (e.g. `http://localhost:5173`).

### Option 2: Direct Browser Preview
You can directly double click `index.html` or open it in any web browser!

---

## 🌐 How to Deploy (Choose Any Platform)

### 1. Deploying to Netlify (Free & Fastest - 1 Minute)
#### Method A: Netlify Drag & Drop
1. Log in to [Netlify App](https://app.netlify.com/).
2. Go to **Sites** -> **Add new site** -> **Deploy manually**.
3. Drag the folder `C:\Users\hp\.gemini\antigravity\scratch\kiran-academy-web` and drop it onto the Netlify drop zone.
4. Your website is instantly live with a free SSL certificate!

#### Method B: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

---

### 2. Deploying to Vercel (Free)
1. Install Vercel CLI (or connect via GitHub):
   ```bash
   npm install -g vercel
   ```
2. Run the deployment command in the project folder:
   ```bash
   vercel
   ```
3. Follow the quick terminal prompts. Choose default settings. Vercel will auto-detect `index.html` and `vercel.json` and deploy.

---

### 3. Deploying to GitHub Pages (Free)
1. Create a new repository on GitHub (e.g., `kiran-academy-web`).
2. Initialize git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Kiran Academy web app"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/kiran-academy-web.git
   git push -u origin main
   ```
3. In GitHub repo settings, go to **Pages** -> Select **Branch: main** -> Save.
4. Your site will be live at `https://YOUR_USERNAME.github.io/kiran-academy-web/`.

---

## 📁 File Structure

```
kiran-academy-web/
├── index.html           # Main application HTML structure
├── css/
│   └── style.css        # Design tokens, variables, components & responsive styles
├── js/
│   └── app.js           # Client interactions, filters, salary calculator, modals, toast
├── package.json         # Node scripts & Vite configuration
├── vercel.json          # Vercel deployment configuration
├── netlify.toml         # Netlify deployment headers & settings
└── README.md            # Setup & deployment guide
```
