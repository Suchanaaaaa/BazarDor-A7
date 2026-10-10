<div align="center">

# 🛒 বাজার দর (BazarDor)

**আজকের বাজারের দাম এক নজরে**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-05893e?style=for-the-badge&logo=vercel&logoColor=white)](https://bazar-dor-a7-five.vercel.app)

</div>

---

## 📖 Short Description

**BazarDor (বাজার দর)** is a Bengali-language web app for checking the daily prices of everyday essentials such as rice, lentils, oil, vegetables, fish, meat, eggs, milk and spices. It shows which products got more expensive or cheaper today, lets you browse by category, and gives signed-in users a detailed price breakdown (minimum, maximum, average and market-wise prices).

## 🧰 Technologies Used

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| UI | React, Tailwind CSS v4 |
| Language | TypeScript |
| Authentication | Better Auth (Email/Password, Google, GitHub) |
| Database | MongoDB Atlas |
| Notifications | react-hot-toast |
| Deployment | Vercel |

## ✨ 5 Key Features

1. **📈 Live Price Ticker**: A scrolling strip shows every product's price and percentage change. It pauses on hover, and the header shows today's date in Bengali.
2. **🔺🔻 Today's Price Movers**: The home page highlights the top 6 products whose prices rose and the top 6 whose prices fell, followed by a grid of all products, with Bengali digits throughout.
3. **🗂️ Category Browsing + Sorting**: Browse by category and sort by default, price low → high, or price high → low.
4. **🔒 Protected Product Details**: Each product page shows min / max / average price and a market-wise price table. Signed-out visitors are redirected to the sign-in page.
5. **🔐 Authentication & Profile**: Sign up and sign in with Email/Password, Google or GitHub. Users can view their profile and update their name.

> Also included: skeleton loaders, a custom 404 page and a fully responsive layout.

## 🚀 Getting Started

```bash
git clone https://github.com/Suchanaaaaa/BazarDor-A7.git
cd BazarDor-A7
npm install
npm run dev
```

Create a `.env.local` file first:

```env
MONGODB_URI="your-mongodb-connection-string"
MONGODB_DB="bazardor"
BETTER_AUTH_SECRET="a-long-random-secret"
BETTER_AUTH_URL="http://localhost:3000"
```

## 👩‍💻 Author

Made by **Suchanaaaaa** · [GitHub](https://github.com/Suchanaaaaa)
