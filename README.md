<div align="center">

<img src="public/logo-icon.png" alt="BazarDor logo" width="72" />

# 🛒 বাজার দর · BazarDor

### আজকের বাজারের দাম এক নজরে

*Check today's market prices, spot price changes and compare markets, all in Bengali.*

<br />

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-05893e?style=for-the-badge)](https://bazar-dor-a7-five.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Source_Code-181717?style=for-the-badge&logo=github)](https://github.com/Suchanaaaaa/BazarDor-A7)

</div>

<br />

<!-- Screenshot: save a screenshot as public/screenshot.png, then remove this comment and uncomment the line below
<p align="center"><img src="public/screenshot.png" alt="BazarDor screenshot" width="90%" /></p>
-->

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Technologies Used](#-technologies-used)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Author](#-author)

---

## 📖 About the Project

**BazarDor (বাজার দর)** is a Bengali-language web app that helps people check the latest prices of daily essentials before going to the market: rice, lentils, oil, vegetables, fish, meat, eggs, milk and spices.

It shows which products became **more expensive** or **cheaper** today, lets you browse by category, and gives signed-in users a detailed price breakdown with **minimum, maximum, average and market-wise prices**.

> 🎯 **Goal:** make daily market prices simple, transparent and easy to read for everyone.

---

## 🧰 Technologies Used

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Better Auth](https://img.shields.io/badge/Better_Auth-FF6B35?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

| Layer | Technology | Purpose |
|:------|:-----------|:--------|
| 🖥️ Framework | Next.js (App Router) | Routing, server rendering, API routes |
| 🎨 UI | React + Tailwind CSS v4 | Responsive, clean interface |
| 📘 Language | TypeScript | Type-safe code |
| 🔐 Auth | Better Auth | Email/Password, Google and GitHub login |
| 🗄️ Database | MongoDB Atlas | Stores users and sessions |
| 🔔 Feedback | react-hot-toast | Success and error messages |
| 🔤 Font | Hind Siliguri | Clear Bengali typography |
| ☁️ Hosting | Vercel | Deployment |

---

## ✨ Key Features

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>📈 1. Live Price Ticker</h3>
      A scrolling strip shows every product's current price with its percentage change (▲ / ▼). It pauses on hover, and the header shows today's date in Bengali.
    </td>
    <td width="50%" valign="top">
      <h3>🔺🔻 2. Today's Price Movers</h3>
      The home page highlights the <b>top 6 products that got more expensive</b> and the <b>top 6 that got cheaper</b>, followed by a grid of all products with Bengali digits.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🗂️ 3. Category Browsing + Sorting</h3>
      Browse products by category and sort them by default order, <b>price low → high</b> or <b>price high → low</b>.
    </td>
    <td width="50%" valign="top">
      <h3>🔒 4. Protected Product Details</h3>
      Every product page shows <b>min / max / average</b> price and a <b>market-wise price table</b>. Visitors who are not signed in are redirected to the sign-in page.
    </td>
  </tr>
  <tr>
    <td colspan="2" valign="top">
      <h3>🔐 5. Authentication & Profile</h3>
      Sign up and sign in with <b>Email/Password, Google or GitHub</b>. Signed-in users can view their profile and update their name.
    </td>
  </tr>
</table>

> ➕ **Also included:** skeleton loading states, a custom 404 page and a fully responsive layout for mobile, tablet and desktop.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or newer
- A MongoDB Atlas database

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Suchanaaaaa/BazarDor-A7.git
cd BazarDor-A7

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI="your-mongodb-connection-string"
MONGODB_DB="bazardor"
BETTER_AUTH_SECRET="a-long-random-secret"
BETTER_AUTH_URL="http://localhost:3000"

# Optional: enables Google / GitHub login
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
```

Generate a secret:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Then open **http://localhost:3000**.

---

## ☁️ Deployment

1. Import the repository into **Vercel**.
2. Add the environment variables in **Settings → Environment Variables** and set `BETTER_AUTH_URL` to your live domain.
3. In MongoDB Atlas, go to **Network Access** and allow `0.0.0.0/0` so Vercel can connect.
4. **Redeploy** the project.

> 🔑 For social login, set the callback URLs to
> `{BETTER_AUTH_URL}/api/auth/callback/google` and `{BETTER_AUTH_URL}/api/auth/callback/github`.

---

## 📁 Project Structure

```text
BazarDor-A7/
├── app/
│   ├── api/auth/[...all]/   # Better Auth handler
│   ├── category/[slug]/     # Category page + sorting
│   ├── product/[slug]/      # Protected product details
│   ├── profile/             # Profile + update name
│   ├── signin/ · signup/    # Authentication pages
│   └── page.tsx             # Home page
├── components/              # Navbar, Ticker, ProductCard, forms, skeletons
├── lib/                     # Auth, data fetching, session, formatters
└── public/                  # Images and logo
```

---

## 👩‍💻 Author

**Suchanaaaaa**
[![GitHub](https://img.shields.io/badge/GitHub-Suchanaaaaa-181717?style=flat-square&logo=github)](https://github.com/Suchanaaaaa)

<div align="center">

⭐ If you like this project, give it a star!

</div>
