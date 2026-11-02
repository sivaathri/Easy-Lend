# Eazy Lend - React + Vite Landing Page

Pixel-perfect recreation of the **Eazy Lend** financial partner landing UI design built with React, Vite, Tailwind CSS, and Lucide Icons.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Design Breakdown

- **Top Navigation Bar:**
  - Official brand logo with tagline *"Get loan, Buy insurance"*
  - High-visibility Call Now pill button with phone icon and direct dialer (`9659590505`)

- **Hero Section:**
  - Eyebrow: `— YOUR TRUSTED FINANCIAL PARTNER`
  - Headline: **The Right Loan. The Right Protection.**
  - Subtitle: *"Personal guidance for loans and insurance, all in one place."*
  - CTA Buttons:
    - Primary solid: *"Explore Loan Options →"*
    - Secondary outlined: *"Get Insurance Guidance →"*
  - High-fidelity financial consultation scene with subtle desktop gradient blending.

- **Trust Badges Bar:**
  - `Personal Guidance` - Solutions tailored to your needs
  - `Transparent Process` - Clear information, no hidden charges
  - `Support at Every Step` - From enquiry to approval and beyond

- **Product Categories:**
  - **Loan Solutions (5 Cards):**
    1. Home Loan (*Fulfill Your Dream of a Home*)
    2. Personal Loan (*Easy Access to Personal Funds*)
    3. Business Loan (*Scale Your Business Ambitions*)
    4. Mortgage Loan (*Secured Property Financing*)
    5. Working Capital (*OD / CC / UCL for Your Business*)
  - **Insurance Solutions (4 Cards in container):**
    1. Health Insurance (*Comprehensive Health Coverage*)
    2. Life Insurance (*Secure Your Family's Future*)
    3. Term Insurance (*Life Coverage for Your Family*)
    4. Vehicle Insurance (*Secure Your Journey*)

---

## 📁 Project Structure

```
├── public/
│   ├── assets/             # Sliced 3D product icons, logo, and hero graphics
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Top header with logo & phone dialer pill
│   │   ├── Hero.jsx             # Headline, CTAs, & advisor hero image
│   │   ├── TrustBar.jsx         # 3 Trust features with dividers
│   │   └── SolutionsSection.jsx # Loan & Insurance cards
│   ├── App.jsx                  # Main application composition
│   ├── index.css                # Tailwind directives & typography
│   └── main.jsx                 # Vite React entrypoint
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

