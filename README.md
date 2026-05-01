# 🚀 DevPulse - Developer Productivity Dashboard

<div align="center">

**A full-stack MERN application that provides developers with a personalized dashboard to showcase their profile, skills, and GitHub portfolio.**

[![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge)](https://www.mongodb.com/mern-stack)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_App-00C7B7?style=for-the-badge)](https://devpulse-three.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-harsha--p1%2Fdevpulse-181717?style=for-the-badge&logo=github)](https://github.com/harsha-p1/devpulse)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Deployment](#-deployment) • [API](#-api-endpoints)

</div>

---

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Architecture Overview](#-architecture-overview)
5. [Authentication Flow](#-authentication-flow)
6. [GitHub API Integration](#-github-api-integration)
7. [Screenshots](#-screenshots)
8. [Folder Structure](#-folder-structure)
9. [Installation](#-installation)
10. [Environment Variables](#-environment-variables)
11. [Running Locally](#-running-locally)
12. [Deployment](#-deployment)
13. [API Endpoints](#-api-endpoints)
14. [Challenges Solved](#-challenges-solved)
15. [Future Improvements](#-future-improvements)
16. [Learning Outcomes](#-learning-outcomes)
17. [Author](#-author)

---

## 🎯 Project Overview

**DevPulse** is a modern, full-stack developer productivity dashboard built with the MERN stack (MongoDB, Express.js, React, Node.js). It empowers developers to create a personalized profile, showcase their technical skills, and seamlessly integrate their GitHub presence into a single, elegant dashboard.

### Key Highlights:
- 🔐 **Secure JWT Authentication** with bcryptjs password hashing (salt rounds: 10)
- 🎨 **Modern UI** with Tailwind CSS v4 and Framer Motion animations
- 🌙 **Dark Mode** with localStorage persistence and smooth transitions
- 📱 **Fully Responsive** design optimized for desktop, tablet, and mobile
- 🐙 **GitHub Integration** with real-time profile and repository data
- ⚡ **Fast Development** with Vite 8 and Hot Module Replacement (HMR)

---

## ✨ Features

### 🔐 Authentication & Security
- **User Registration** with secure password hashing (bcryptjs, salt rounds: 10)
- **JWT-based Login** with 7-day token expiry
- **Protected Routes** on both frontend (`ProtectedRoute`) and backend (`authMiddleware`)
- **Automatic Token Handling** via Axios request interceptors
- **Secure Logout** with token cleanup and redirect

### 👤 Profile Management
- **Editable Bio** - Add a personal description
- **Skills Showcase** - Display technical skills as tags
- **GitHub Username Integration** - Link your GitHub profile
- **Real-time Updates** - Instant profile updates with toast notifications

### 🐙 GitHub Integration
- **Live GitHub Profile Data** - Fetches user info from GitHub REST API
- **Repository Showcase** - Displays top 6 recently updated repositories
- **GitHub Stats** - Followers, following, and public repo count
- **Direct Links** - One-click access to GitHub profile and repositories
- **Sorted Repositories** - Automatically sorted by `updated_at` field

### 🎨 User Experience
- **Dark/Light Mode Toggle** with smooth transitions via Tailwind classes
- **Framer Motion Animations** - Fluid, interactive UI elements (`whileHover`, `whileTap`, `animate`)
- **Responsive Design** - Optimized for desktop, tablet, and mobile with Tailwind grid/flex
- **Toast Notifications** - Real-time feedback with react-hot-toast
- **Loading States** - Elegant animated loading screens
- **Form Validation** - Required fields with focus ring styles

---

## 🛠 Tech Stack

### Frontend Technologies
| Technology | Version | Purpose |
|------------|----------|---------|
| **React** | ^19.2.5 | UI library with latest features |
| **TypeScript** | ~6.0.2 | Type-safe development |
| **Vite** | ^8.0.10 | Lightning-fast build tool and dev server |
| **Tailwind CSS** | ^4.2.4 | Utility-first CSS framework (v4 with zero config) |
| **@tailwindcss/vite** | ^4.2.4 | Vite plugin for Tailwind CSS v4 |
| **React Router DOM** | ^7.14.2 | Client-side routing |
| **Framer Motion** | ^12.38.0 | Production-ready animations |
| **Lucide React** | ^1.14.0 | Beautiful icon library |
| **React Hot Toast** | ^2.6.0 | Elegant toast notifications |
| **Axios** | ^1.15.2 | HTTP client with interceptors |
| **PostCSS** | ^8.5.12 | CSS processing (Tailwind v4 requirement) |
| **Autoprefixer** | ^10.5.0 | CSS vendor prefix automation |

### Backend Technologies
| Technology | Version | Purpose |
|------------|----------|---------|
| **Node.js** | v18+ | Runtime environment |
| **Express.js** | ^5.2.1 | Web framework |
| **TypeScript** | ^6.0.3 | Type-safe backend development |
| **MongoDB** | ^9.6.1 | NoSQL database (via Mongoose) |
| **Mongoose** | ^9.6.1 | MongoDB ODM |
| **jsonwebtoken** | ^9.0.3 | JWT authentication |
| **bcryptjs** | ^3.0.3 | Password hashing |
| **cors** | ^2.8.6 | Cross-origin resource sharing |
| **dotenv** | ^17.4.2 | Environment variable management |
| **ts-node** | ^10.9.2 | TypeScript execution for development |
| **nodemon** | ^3.1.14 | Auto-restart during development |

---

## 🏗 Architecture Overview

### Frontend Architecture
```
src/
├── components/           # Reusable UI components
│   ├── Navbar.tsx        # Navbar (available but not currently used in routes)
│   └── ProtectedRoute.tsx # Route guard for authenticated users
├── pages/                # Route-level components
│   ├── Login.tsx         # Login form with validation and toast notifications
│   ├── Register.tsx      # Registration form with validation
│   └── Dashboard.tsx     # Main dashboard with GitHub integration and dark mode
├── services/             # API service layer
│   └── api.ts           # Axios instance with interceptors and 401 handling
├── App.tsx               # Router configuration with React Router v7
├── main.tsx              # Entry point with React 19 createRoot
└── index.css             # Tailwind CSS v4 imports (@import "tailwindcss")
```

**Key Architectural Decisions:**
- **Component-based architecture** with clear separation of pages and components
- **Axios interceptors** automatically attach JWT tokens and handle 401 responses
- **ProtectedRoute wrapper** checks localStorage for token before rendering
- **TypeScript interfaces** for `Profile`, `GithubUser`, and `GithubRepo` data

### Backend Architecture
```
src/
├── config/               # Configuration files
│   └── db.ts            # MongoDB connection with Mongoose
├── controllers/          # Request handlers
│   ├── authController.ts # Register and login logic
│   ├── profileController.ts # Profile CRUD operations
│   ├── githubController.ts # (Available but routes use inline)
│   └── githubRepoController.ts # (Available but routes use inline)
├── middleware/            # Express middleware
│   └── authMiddleware.ts # JWT verification and route protection
├── models/               # Mongoose schemas
│   └── User.ts          # User model with timestamps
├── routes/               # Express routers
│   ├── authRoutes.ts    # /api/auth/*
│   ├── profileRoutes.ts # /api/profile/*
│   └── githubRoutes.ts  # /api/github/*
└── server.ts             # Express app entry point
```

**Key Architectural Decisions:**
- **MVC Pattern** - Clear separation of Models, Views (frontend), and Controllers
- **Middleware-based auth** - Reusable `authMiddleware` for protected routes
- **Environment-based CORS** - Different origins for development (`localhost:5173`) and production (`CLIENT_URL`)
- **Error handling** - Try-catch blocks with generic error messages (no info leakage)

---

## 🔐 Authentication Flow

DevPulse implements a secure JWT-based authentication system:

### Registration Flow
```
User fills form → POST /api/auth/register → Check existing user → Hash password (bcryptjs) → Save to MongoDB → Return success (201)
```

### Login Flow
```
User fills form → POST /api/auth/login → Find user by email → Compare password (bcryptjs.compare) → Generate JWT (7d expiry) → Store token in localStorage → Redirect to /dashboard
```

### Protected Route Flow
```
User visits /dashboard → ProtectedRoute checks localStorage token → Token exists? → Render Dashboard : Redirect to /login
```

### API Request Flow
```
API request → Axios interceptor attaches Bearer token → Backend authMiddleware verifies JWT → req.user = decoded payload → Controller processes request → Response
```

### Logout Flow
```
User clicks Logout → Remove token from localStorage → Redirect to /login → Show toast notification
```

---

## 🐙 GitHub API Integration

DevPulse integrates with the GitHub REST API to fetch real-time data:

### Implementation Details
- **Backend Proxy Routes** - `/api/github/:username` (user info) and `/api/github/:username/repos` (repositories)
- **Axios HTTP Client** - Server-side fetching with proper headers (`User-Agent`, `Authorization`)
- **GitHub Token** - Optional `GITHUB_TOKEN` env var (`Authorization: Bearer <token>`) for higher rate limits
- **Data Displayed** - Frontend receives data and displays in GitHub Card and Repo Cards
- **Sorted Repos** - Frontend sorts by `updated_at` (descending) and displays top 6

### GitHub Data Displayed
| Data Point | Source | Display Location |
|------------|--------|------------------|
| Avatar URL | GitHub API | GitHub Card (img) |
| Name | GitHub API | GitHub Card (h2) |
| Login (username) | GitHub API | GitHub Card (@username) |
| Followers count | GitHub API | GitHub Card (stat) |
| Following count | GitHub API | GitHub Card (stat) |
| Public repos count | GitHub API | GitHub Card (stat) |
| Repository name | GitHub API | Repo Cards |
| Repository description | GitHub API | Repo Cards |
| Stargazers count | GitHub API | Repo Cards (⭐) |
| Last updated | GitHub API | Sorting logic |

### Rate Limit Consideration
- Without token: 60 requests/hour (unauthenticated)
- With token: 5,000 requests/hour (authenticated via `GITHUB_TOKEN`)
- Add `GITHUB_TOKEN` to `backend/.env` for production use

---

## 📸 Screenshots

<div align="center">

### Login Page
*Replace with actual screenshot*
```
[Login page with DevPulse branding, email/password fields, and gradient background]
```

### Dashboard (Light Mode)
*Replace with actual screenshot*
```
[Dashboard showing user profile, GitHub stats card, skills tags, and repo grid]
```

### Dashboard (Dark Mode)
*Replace with actual screenshot*
```
[Same dashboard with dark theme enabled, showing smooth transition]
```

### Mobile View
*Replace with actual screenshot*
```
[Responsive dashboard on mobile device, showing stacked layout]
```

### GitHub Integration
*Replace with actual screenshot*
```
[GitHub card with avatar, stats, and repository grid below]
```

</div>

---

## 📁 Folder Structure

```
DevPulse/
├── frontend/                          # React + TypeScript + Vite
│   ├── public/                       # Static assets
│   ├── src/
│   │   ├── components/                # Reusable components
│   │   │   ├── Navbar.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── pages/                     # Page components
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── Dashboard.tsx
│   │   ├── services/                  # API layer
│   │   │   └── api.ts
│   │   ├── App.tsx                    # Routes config
│   │   ├── main.tsx                   # Entry point
│   │   └── index.css                  # Tailwind v4 imports
│   ├── index.html                     # Vite HTML template
│   ├── vite.config.ts                 # Vite + Tailwind plugin
│   ├── tsconfig.json                  # TypeScript config
│   ├── .env                           # Frontend env vars
│   ├── .env.example                   # Env template
│   ├── .gitignore                     # Git ignore rules
│   └── package.json                   # Dependencies
│
├── backend/                           # Node.js + Express + MongoDB
│   ├── src/
│   │   ├── config/                    # Configuration
│   │   │   └── db.ts
│   │   ├── controllers/               # Route handlers
│   │   │   ├── authController.ts
│   │   │   ├── profileController.ts
│   │   │   ├── githubController.ts
│   │   │   └── githubRepoController.ts
│   │   ├── middleware/                # Express middleware
│   │   │   └── authMiddleware.ts
│   │   ├── models/                    # Mongoose models
│   │   │   └── User.ts
│   │   ├── routes/                    # Express routers
│   │   │   ├── authRoutes.ts
│   │   │   ├── profileRoutes.ts
│   │   │   └── githubRoutes.ts
│   │   └── server.ts                  # Entry point
│   ├── .env                           # Backend env vars
│   ├── .env.example                   # Env template
│   ├── .gitignore                     # Git ignore rules
│   ├── tsconfig.json                  # TypeScript config
│   └── package.json                   # Dependencies
│
├── PROJECT_AUDIT_REPORT.md            # Initial audit report
├── FINAL_PROJECT_AUDIT.md             # Final audit report
├── README.md                          # This file
└── .gitignore                        # Root git ignore
```

---

## 💻 Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (v9 or higher) or **yarn**
- **MongoDB Atlas Account** - [Sign up here](https://www.mongodb.com/cloud/atlas) (or local MongoDB)
- **Git** - [Download here](https://git-scm.com/)

### Clone the Repository
```bash
git clone https://github.com/harsha-p1/devpulse.git
cd devpulse
```

**GitHub Repository:** [https://github.com/harsha-p1/devpulse](https://github.com/harsha-p1/devpulse)  
**Live Demo:** [https://devpulse-three.vercel.app/](https://devpulse-three.vercel.app/)

---

## 🔧 Environment Variables

### Backend Environment Variables (`.env`)
Create `backend/.env` with the following:

```env
# Server Configuration
PORT=5000

# MongoDB Connection (MongoDB Atlas)
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/devpulse?retryWrites=true&w=majority

# JWT Secret (Generate a strong secret!)
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters_long

# CORS - Frontend URL (for production)
CLIENT_URL=https://devpulse-three.vercel.app

# Optional: GitHub Token (for higher API rate limits)
GITHUB_TOKEN=ghp_your_github_personal_access_token
```

**Generate a strong JWT secret:**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### Frontend Environment Variables (`.env`)
Create `frontend/.env` with the following:

```env
# Backend API URL
VITE_API_URL=http://localhost:5000/api
```

**For production (after backend deployment):**
```env
VITE_API_URL=https://your-backend.onrender.com/api
```

---

## 🚀 Running Locally

### Start the Backend Server
```bash
cd backend
npm install
npm run dev
```
The backend will run on `http://localhost:5000`

### Start the Frontend Dev Server
```bash
cd frontend
npm install
npm run dev
```
The frontend will run on `http://localhost:5173`

### Verify Setup
1. Open `http://localhost:5173` in your browser
2. You should see the DevPulse login page
3. Register a new account
4. Login and explore the dashboard

---

## 🌐 Deployment

### Deploy Frontend to Vercel

**Option 1: Vercel Dashboard (Recommended)**
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and click "New Project"
3. Import your GitHub repository
4. Set the **Root Directory** to `frontend`
5. Add environment variable:
   - `VITE_API_URL` = `https://your-backend-url.onrender.com/api`
6. Click "Deploy"

**Option 2: Vercel CLI**
```bash
cd frontend
npm install -g vercel
vercel
```
Follow the interactive prompts, set root directory to `.` and add env vars.

### Deploy Backend to Render

**Option 1: Render Dashboard (Recommended)**
1. Push your code to GitHub
2. Go to [Render](https://render.com) and create a new "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `node dist/server.js`
5. Add environment variables:
   - `PORT` = `10000` (Render default)
   - `MONGO_URI` = Your MongoDB Atlas connection string
   - `JWT_SECRET` = Your secret key
   - `NODE_ENV` = `production`
   - `CLIENT_URL` = `https://your-frontend.vercel.app`
6. Click "Create Web Service"

**Option 2: Using render.yaml**
Create `render.yaml` in the root:
```yaml
services:
  - type: web
    name: devpulse-api
    env: node
    rootDir: backend
    buildCommand: npm install && npm run build
    startCommand: node dist/server.js
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
```

### Post-Deployment Steps
1. Copy your Render backend URL
2. Update `frontend/.env`:
   ```env
   VITE_API_URL=https://devpulse-backend-g4d5.onrender.com/api
   ```
3. Redeploy frontend on Vercel (it auto-redeploys on git push)

**Live Demo:** Once deployed, your app will be available at `https://devpulse-three.vercel.app`

---

## 📡 API Endpoints

### Authentication Routes
| Method | Endpoint | Description | Auth Required |
|--------|-----------|-------------|---------------|
| `POST` | `/api/auth/register` | Register a new user | ❌ No |
| `POST` | `/api/auth/login` | Login and receive JWT | ❌ No |

### Profile Routes (Protected)
| Method | Endpoint | Description | Auth Required |
|--------|-----------|-------------|---------------|
| `GET` | `/api/profile` | Get current user profile | ✅ Yes |
| `PUT` | `/api/profile` | Update user profile | ✅ Yes |

**Profile Update Request Body:**
```json
{
  "bio": "Full-stack developer passionate about MERN stack",
  "skills": ["React", "Node.js", "MongoDB", "TypeScript"],
  "githubUsername": "yourusername"
}
```

### GitHub Routes
| Method | Endpoint | Description | Auth Required |
|--------|-----------|-------------|---------------|
| `GET` | `/api/github/:username` | Get GitHub user profile | ❌ No |
| `GET` | `/api/github/:username/repos` | Get user's repositories | ❌ No |

### Health Check Routes
| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/` | Returns "DevPulse API Running 🚀" |
| `GET` | `/health` | Health check endpoint `{ status: "Server Running Successfully" }` |

### Example API Responses

**POST /api/auth/login (Success)**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**GET /api/profile (Success)**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "bio": "Full-stack developer",
  "skills": ["React", "Node.js", "MongoDB"],
  "githubUsername": "johndoe",
  "createdAt": "2026-01-01T00:00:00.000Z",
  "updatedAt": "2026-01-01T00:00:00.000Z"
}
```

---

## 🎯 Challenges Solved

### 1. **Tailwind CSS v4 Migration**
- **Challenge:** Transitioning from Tailwind v3 (config file) to v4 (zero-config with Vite plugin)
- **Solution:** Used `@tailwindcss/vite` plugin and updated `index.css` to use `@import "tailwindcss"`

### 2. **React 19 Compatibility**
- **Challenge:** TypeScript JSX types changed in React 19
- **Solution:** Updated `ProtectedRoute.tsx` to use `React.ReactElement` instead of `JSX.Element`

### 3. **JWT Token Management**
- **Challenge:** Handling token expiration and unauthorized requests
- **Solution:** Implemented Axios interceptors to auto-attach tokens and redirect on 401 errors

### 4. **TypeScript Strict Mode**
- **Challenge:** Removing `any` types and adding proper interfaces
- **Solution:** Created `Profile`, `GithubUser`, and `GithubRepo` interfaces in Dashboard.tsx

### 5. **Environment-based Configuration**
- **Challenge:** Managing different configs for dev/prod
- **Solution:** Used `import.meta.env.VITE_API_URL` for frontend and `process.env` for backend

### 6. **GitHub API Rate Limiting**
- **Challenge:** GitHub API has rate limits (60 req/hour unauthenticated)
- **Solution:** Added optional `GITHUB_TOKEN` environment variable for higher limits (5,000 req/hour)

### 7. **Dark Mode Persistence**
- **Challenge:** Dark mode state lost on page reload
- **Solution:** Implemented `localStorage` persistence with `useEffect` in Dashboard.tsx

### 8. **Protected Routes**
- **Challenge:** Preventing unauthorized access to dashboard
- **Solution:** Created `ProtectedRoute` component that checks localStorage token

---

## 🔮 Future Improvements

### Authentication & Security
- [ ] Add **input validation** with Zod or express-validator
- [ ] Implement **rate limiting** on auth endpoints (express-rate-limit)
- [ ] Switch to **HttpOnly cookies** instead of localStorage (XSS protection)
- [ ] Add **Helmet.js** for security headers
- [ ] Implement **password reset** via email
- [ ] Add **email verification** on registration

### Features
- [ ] **GitHub Activity Feed** - Show recent commits and pull requests
- [ ] **Portfolio Projects** section - Add custom projects with live demos
- [ ] **Resume Upload** - Allow PDF resume uploads
- [ ] **Social Links** - Add LinkedIn, Twitter, personal website
- [ ] **Blog Section** - Integrate a simple markdown blog
- [ ] **Analytics Dashboard** - Track profile views

### UI/UX
- [ ] Add **loading skeletons** instead of text
- [ ] Implement **infinite scroll** for repositories
- [ ] Add **search functionality** for repos
- [ ] Create **custom 404 page**
- [ ] Add **keyboard shortcuts** for navigation
- [ ] Implement **PWA** (Progressive Web App) support

### Testing & Quality
- [ ] Add **unit tests** with Vitest
- [ ] Add **component tests** with React Testing Library
- [ ] Add **E2E tests** with Playwright or Cypress
- [ ] Set up **CI/CD pipeline** with GitHub Actions
- [ ] Add **code coverage** reporting

### DevOps
- [ ] Add **Docker** support with Dockerfile and docker-compose
- [ ] Set up **logging** with Winston or Morgan
- [ ] Add **monitoring** with Sentry or New Relic
- [ ] Implement **API documentation** with Swagger/OpenAPI

---

## 🎓 Learning Outcomes

Building DevPulse provided hands-on experience with:

### Frontend Skills
- ✅ Building modern React applications with **React 19** features
- ✅ TypeScript **type safety** and interface design
- ✅ **Vite** configuration and optimization
- ✅ **Tailwind CSS v4** utility-first styling
- ✅ **Framer Motion** animation library mastery
- ✅ **React Router v7** client-side routing
- ✅ **Axios interceptors** for token management
- ✅ **Responsive design** principles
- ✅ **Dark mode** implementation with persistence

### Backend Skills
- ✅ **Node.js + Express** server development
- ✅ **TypeScript** in backend applications
- ✅ **MongoDB + Mongoose** ODM and schema design
- ✅ **JWT authentication** and middleware
- ✅ **bcrypt** password hashing best practices
- ✅ **Environment variable** management with dotenv
- ✅ **CORS** configuration for cross-origin requests
- ✅ **GitHub API** integration with Axios
- ✅ **Error handling** and status codes

### DevOps & Tools
- ✅ **Git** version control best practices
- ✅ **Vercel** frontend deployment
- ✅ **Render** backend deployment
- ✅ **MongoDB Atlas** cloud database setup
- ✅ **Environment management** for dev/prod
- ✅ **npm scripts** for build automation

### Software Engineering Principles
- ✅ **MVC Architecture** separation of concerns
- ✅ **Component-based** UI design
- ✅ **RESTful API** design
- ✅ **Authentication flows** and security
- ✅ **Error handling** strategies
- ✅ **Code organization** and modularity

---

## 👨‍💻 Author

<div align="center">

**Built with ❤️ by Harsha P**

[![GitHub](https://img.shields.io/badge/GitHub-harsha--p1-181717?style=for-the-badge&logo=github)](https://github.com/harsha-p1)
[![GitHub Repo](https://img.shields.io/badge/Repository-harsha--p1%2Fdevpulse-181717?style=for-the-badge&logo=github)](https://github.com/harsha-p1/devpulse)
[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_App-00C7B7?style=for-the-badge)](https://devpulse-three.vercel.app)

---

### 🌟 Show Your Support

If you found this project helpful or interesting, please consider giving it a ⭐ on [GitHub](https://github.com/harsha-p1/devpulse)!

---

<div align="left">

## 📄 License

This project is licensed for educational and portfolio use.

**© 2026 DevPulse. Built by Harsha P for learning and showcasing MERN stack skills.**

---

<div align="center">

### 🚀 Ready for Internship Submission

*This project demonstrates proficiency in full-stack development with the MERN stack, modern tooling, and production-ready practices.*

**Thank you for reviewing!** 🙏
</div>
