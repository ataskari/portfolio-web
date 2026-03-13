# 🚀 Atryverse: Professional Portfolio Ecosystem

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

**Atryverse** is a high-performance, visually stunning portfolio designed to bridge the gap between technical implementation and product thinking. It provides a high-signal, low-friction interface that balances visual storytelling with technical transparency.

![Atryverse Portfolio Mockup](https://raw.githubusercontent.com/placeholder-path/portfolio_mockup_1773389361322.png)
_(Note: Replace with actual hosted image link or relative path after pushing)_

---

## ✨ Key Features

- **"Top 4" Hero Grid**: Immediate exposure to your best work with priority-weighted project cards.
- **Interactive Modals**: Access project details, YouTube demos, and GitHub links without page hops.
- **Real-time Filtering**: Locate specific tech stacks instantly using client-side filtering logic.
- **Mobile-First UX**: Responsive utility classes ensuring a seamless experience across all devices.
- **Dark Mode & Glassmorphism**: Modern, premium aesthetic with smooth Framer Motion animations.

## 🛠️ Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database**: [Supabase](https://supabase.com/) & [Prisma ORM](https://www.prisma.io/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm / pnpm / yarn
- A Supabase account (or local PostgreSQL)

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/portfolio-web.git
    cd portfolio-web/atryverse-web
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env` file in the `atryverse-web` directory:

    ```env
    DATABASE_URL="your-postgresql-connection-string"
    DIRECT_URL="your-postgresql-direct-string"
    ```

4.  **Database Setup**:

    ```bash
    npx prisma generate
    npx prisma db push
    npm run prisma:seed # If you have a seed script
    ```

5.  **Run Development Server**:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 📁 Project Structure

```text
atryverse-web/
├── prisma/             # Database schema and migrations
├── public/             # Static assets
└── src/
    ├── app/            # Next.js App Router (pages & APIs)
    ├── components/     # UI Components (Hero, Work, Contact, etc.)
    ├── lib/            # Utility functions and shared logic
    └── types/          # TypeScript interfaces
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
