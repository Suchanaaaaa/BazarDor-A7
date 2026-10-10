# 🛒 বাজার দর | BazarDor

### Bangladesh Daily Market Price Tracker

BazarDor is a web-based market price tracking application designed to help users explore daily prices of essential commodities in Bangladesh. It provides product-wise price information, category-based browsing, market price comparisons, and daily price change indicators to help users understand market trends more easily.

## ✨ Key Features

1. **Daily Market Price Tracking** — View the latest available prices of essential commodities, including their current prices and average market prices.

2. **Category-Based Browsing** — Explore products through different categories such as rice, lentils, vegetables, fish, meat, and other daily necessities.

3. **Product Details** — View detailed information about each product, including its unit, description, minimum price, maximum price, and average price.

4. **Price Change Indicators** — Identify whether a product's price has increased, decreased, or remained unchanged compared with the previous day's price.

5. **Market-Wise Price Comparison** — Compare minimum, maximum, and average prices across different markets and locations.

6. **User Authentication** — Access protected features through user authentication and session management.

7. **Responsive User Interface** — Use the application on desktop, tablet, and mobile devices with a responsive layout.

## 🛠️ Technologies Used

- **Next.js** — React framework for building the web application.
- **React** — Component-based user interface development.
- **TypeScript** — Type-safe application development.
- **Tailwind CSS** — Utility-first styling and responsive layouts.
- **MongoDB Atlas** — Cloud database service.
- **Better Auth** — User authentication and session management.
- **REST API** — Retrieving product, category, and market price data.
- **Git & GitHub** — Version control and source code management.
- **Vercel** — Application deployment and hosting.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Suchanaaaaa/BazarDor-A7.git
```

**2. Navigate to the project directory**

```bash
cd BazarDor-A7
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env.local` file in the project root and add the required environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=bazardor
BETTER_AUTH_SECRET=your_authentication_secret
BETTER_AUTH_URL=http://localhost:3000
API_BASE=your_api_base_url
```

Replace the placeholder values with your actual configuration. Use `API_BASE` only if your project requires a custom API base URL.

**5. Start the development server**

```bash
npm run dev
```

**6. Open the application**

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
BazarDor-A7/
├── app/                  # Application pages and API routes
├── components/           # Reusable UI components
├── lib/                  # Data handling, formatting, and utilities
├── public/                # Static assets
├── .env.local             # Local environment variables
├── .gitignore             # Git ignored files
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration (if present)
└── README.md              # Project documentation
```

## 🌐 Deployment

The application can be deployed using Vercel.

1. Import the GitHub repository into Vercel.
2. Configure the required environment variables in the Vercel project settings.
3. Deploy the application.
4. Open the generated production URL to access the live application.

**GitHub Repository:** [Suchanaaaaa/BazarDor-A7](https://github.com/Suchanaaaaa/BazarDor-A7)

**Live Website:** Add your deployed Vercel URL here.

## 🎯 Project Objective

The main objective of BazarDor is to make market price information easier to access and understand. By presenting product prices, category information, market comparisons, and price change indicators in one place, the application helps users stay informed about the prices of everyday essentials in Bangladesh.

---

**Developed as a web development project — BazarDor (বাজার দর).**

