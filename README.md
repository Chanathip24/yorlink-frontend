# 🔗 YorLink - URL Shortener

A modern, feature-rich URL shortener application built with React and TypeScript. Create short links, protect them with passwords, schedule activation dates, and manage your links with ease.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)

## ✨ Features

- **🔗 URL Shortening** - Convert long URLs into short, shareable links
- **🔒 Protected Links** - Secure your links with password protection and optional hints
- **📅 Scheduled Links** - Set activation dates for your links to go live at specific times
- **⏰ Expiring Links** - Create links that automatically expire after a set duration
- **🎯 Custom Aliases** - Create memorable custom short URLs
- **📱 QR Code Generation** - Generate QR codes for easy sharing
- **📊 Link History** - View and manage all your shortened URLs
- **🎨 Modern UI** - Beautiful, responsive interface built with Emotion and Radix UI
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Framework**: React 19.1.1
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.1.7
- **Styling**: Emotion (CSS-in-JS)
- **UI Components**: Radix UI
- **State Management**: Jotai
- **Data Fetching**: TanStack Query (React Query)
- **Form Handling**: React Hook Form + Zod
- **Routing**: React Router DOM 7.6.0
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **pnpm** (package manager) - [Install pnpm](https://pnpm.io/installation)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd yorlink-frontend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# API Configuration
VITE_YORLINK_API_BASE_URL=https://api.yorlink.com
VITE_YORLINK_FRONTEND_URL=https://yorlink.com
```

> **Note**: Replace the URLs with your actual API and frontend URLs.

### Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

Build the application for production:

```bash
pnpm build
```

The optimized build will be in the `dist` directory.

Preview the production build locally:

```bash
pnpm preview
```

### Linting

Check for linting errors:

```bash
pnpm lint
```

Auto-fix linting issues:

```bash
pnpm lint:fix
```

## 📁 Project Structure

```
yorlink-frontend/
├── public/              # Static assets
├── src/
│   ├── atoms/          # Jotai state atoms
│   ├── component/      # React components
│   │   ├── common/     # Reusable UI components
│   │   ├── layout/     # Layout components
│   │   └── pages/      # Page components
│   ├── config/         # Configuration files
│   ├── constant/       # Constants and enums
│   ├── hook/           # Custom React hooks
│   │   ├── api/        # API hooks (queries & mutations)
│   │   └── client/     # API client setup
│   ├── pages/          # Page routes
│   ├── router/         # Router configuration
│   ├── styles/         # Global styles and themes
│   ├── type/           # TypeScript type definitions
│   ├── utilities/      # Utility functions
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Application entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🎯 Key Features Explained

### Normal Links
Create simple short URLs that redirect immediately to the original URL.

### Protected Links
Add password protection to your links. Optionally provide a password hint to help users remember the password.

### Scheduled Links
Set an activation date for your link. The link will only become active after the specified date and time.

### Expiring Links
Create links that automatically expire after a certain duration, perfect for time-sensitive content.

### Custom Aliases
Instead of random short codes, create memorable custom aliases for your links (e.g., `yorlink.com/my-custom-link`).

## 🔧 Development Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint errors automatically |

## 📝 Code Style

This project uses:
- **ESLint** for code linting
- **TypeScript** for type safety
- **Emotion** for styling with CSS-in-JS
- **React Hook Form** with **Zod** for form validation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

---

Made with ❤️ using React and TypeScript
