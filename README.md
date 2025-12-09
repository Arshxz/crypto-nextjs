# 💰 Crypto Dashboard

A modern and responsive cryptocurrency dashboard that displays real-time market data, built with cutting-edge web technologies like Next.js 13 and Tailwind CSS. It allows users to search, explore, and monitor crypto prices through a seamless interface optimized for performance and usability.

![Lighthouse Performance](https://img.shields.io/badge/Performance-98%2B-brightgreen?logo=lighthouse&style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-13-blue?logo=next.js&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Enabled-38B2AC?logo=tailwind-css&style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-Enabled-F7DF1E?logo=javascript&logoColor=000&style=flat-square)
![MIT License](https://img.shields.io/github/license/Arshxz/crypto-nextjs?style=flat-square)

---

## 🚀 Live Demo

👉[https://Arsh.studio](https://satoshi-5x4.pages.dev/explore)

---

## ✨ Features

- 📊 Real-time cryptocurrency price data using CoinGecko API
- 🔍 Live search functionality for quick coin lookup
- 🌐 Fully responsive design for mobile, tablet, and desktop
- 💡 Optimized dark mode support
- ⚡ Fast performance with Next.js 13 App Router
- 🧩 Modular, reusable components
- 🎯 Lighthouse score: 98+ in performance, 100 in accessibility, SEO, and best practices

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 13 (App Router)](https://nextjs.org/docs/app)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Data API**: [CoinGecko API](https://www.coingecko.com/en/api)
- **Fonts**: `next/font` for performance-optimized web fonts
- **Deployment**: [Vercel](https://vercel.com/)

---

## ⚙️ Environment Variables

> This project uses public endpoints from CoinGecko. If you switch to a private/paid API, here's how to configure it:

1. Create a `.env.local` file in the root directory:

env
`NEXT_PUBLIC_API_BASE_URL=https://api.coingecko.com/api/v3`

2. Access it in the project like this:

`const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;`

🔁 Don’t forget to restart the dev server after making changes to .env.local.

**📦 Installation**

**✅ Prerequisites**
• Node.js (v18 or later)
• npm or yarn

---

## 🔧 Setup Instructions

**Clone the repository**
`git clone https://github.com/Arshxz/crypto-nextjs.git`

**Navigate to the project directory**
`cd crypto-nextjs`

**Install dependencies**
`npm install`

**Set up environment variables**
`cp .env.example .env.local  # or create .env.local manually`

**Start the development server**
`npm run dev`

**Open in your browser**
`http://localhost:3000`

---

## 📂 Project Structure

```
crypto-nextjs/
├── app/                    # Pages and routing using App Router
│   └── page.tsx           # Home page component
├── components/            # Reusable UI components
├── styles/                # Global styles and Tailwind config
├── utils/                 # Utility functions and API calls
├── public/                # Static assets like icons/images
├── .env.local             # Environment config (not committed)
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript config
```

---

## 🤝 Contributing

Contributions are welcome! If you’d like to suggest improvements, report bugs, or submit a pull request, please follow these steps:

1. Fork the repository
2. Create a new branch: git checkout -b feature/your-feature-name
3. Commit your changes: git commit -m 'Add some feature'
4. Push to the branch: git push origin feature/your-feature-name
5. Open a Pull Request

---

## 🙋‍♂️ Author

**Arshdeep Singh**

📍 [GitHub](https://github.com/Arshxz)

🌐 [Portfolio](http://github.com/arshxz/)

`Made with ❤️ using Next.js & Tailwind CSS`
