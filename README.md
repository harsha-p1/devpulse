# DevPulse - Developer Dashboard

A full-stack MERN application that provides developers with a personalized dashboard to showcase their profile, skills, and GitHub portfolio.

![Tech Stack](https://img.shields.io/badge/Stack-MERN-blue)
![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20TypeScript%20%2B%20Vite-61DAFB)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933)
![Database](https://img.shields.io/badge/Database-MongoDB-47A248)

## Features

- **JWT Authentication** - Secure registration and login with bcrypt password hashing
- **Profile Management** - Edit bio, skills, and link GitHub username
- **GitHub Integration** - Auto-fetch GitHub profile data and top repositories
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Framer Motion Animations** - Smooth transitions and interactive hover effects
- **Toast Notifications** - Real-time feedback for user actions

## Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first styling
- **React Router v7** - Client-side routing
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Hot Toast** - Notification system
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type-safe development
- **MongoDB + Mongoose** - Database and ODM
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **CORS** - Cross-origin resource sharing

## Project Structure

```
Devpluse/
├── frontend/                 # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── pages/            # Route components
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── Dashboard.tsx
│   │   ├── services/         # API service layer
│   │   │   └── api.ts
│   │   ├── App.tsx           # Router configuration
│   │   ├── main.tsx          # Entry point
│   │   └── index.css         # Tailwind imports
│   ├── public/               # Static assets
│   ├── index.html            # HTML template
│   ├── vite.config.ts        # Vite configuration
│   ├── tsconfig.json         # TypeScript configuration
│   └── package.json
├── backend/                  # Node.js + Express + MongoDB
│   ├── src/
│   │   ├── config/           # Database configuration
│   │   │   └── db.ts
│   │   ├── controllers/      # Route handlers
│   │   │   ├── authController.ts
│   │   │   ├── profileController.ts
│   │   │   ├── githubController.ts
│   │   │   └── githubRepoController.ts
│   │   ├── middleware/       # Express middleware
│   │   │   └── authMiddleware.ts
│   │   ├── models/           # Mongoose models
│   │   │   └── User.ts
│   │   ├── routes/           # Express routers
│   │   │   ├── authRoutes.ts
│   │   │   ├── profileRoutes.ts
│   │   │   └── githubRoutes.ts
│   │   └── server.ts         # Express app entry point
│   ├── .env                  # Environment variables
│   ├── tsconfig.json         # TypeScript configuration
│   └── package.json
```

## Environment Setup

### Prerequisites
- **Node.js** v18+ ([Download](https://nodejs.org/))
- **MongoDB Atlas** account ([Sign Up](https://www.mongodb.com/cloud/atlas))
- **npm** or **yarn** package manager

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/devpulse?retryWrites=true&w=majority
   JWT_SECRET=your_super_secret_jwt_key_here_minimum_32_chars
   ```

   **Important:** Generate a strong JWT secret:
   ```bash
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend/` directory (optional, defaults to localhost):
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. Update `src/services/api.ts` to use the environment variable:
   ```typescript
   const API = axios.create({
     baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
   });
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

## Available Scripts

### Frontend
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production (TypeScript + Vite) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

### Backend
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with nodemon + ts-node |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run compiled JavaScript (production) |

## API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login and get JWT token | No |

### Profile
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/profile` | Get current user profile | Yes |
| PUT | `/api/profile` | Update user profile | Yes |

### GitHub
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/github/:username` | Get GitHub user info | No |
| GET | `/api/github/:username/repos` | Get GitHub repositories | No |

### Health
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API status message |
| GET | `/health` | Health check endpoint |

## Deployment

### Deploy Frontend to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import the repository
3. Set the root directory to `frontend`
4. Add environment variables:
   - `VITE_API_URL` = your deployed backend URL
5. Deploy

**Or via CLI:**
```bash
cd frontend
npm install -g vercel
vercel
```

### Deploy Backend to Render

1. Push your code to GitHub
2. Go to [Render](https://render.com) and create a new Web Service
3. Set the root directory to `backend`
4. Build command: `npm install && npm run build`
5. Start command: `node dist/server.js`
6. Add environment variables:
   - `PORT` = `10000` (Render default)
   - `MONGO_URI` = your MongoDB connection string
   - `JWT_SECRET` = your secret key
   - `NODE_ENV` = `production`
7. Deploy

**Or create a `render.yaml`:**
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

### Update Frontend API URL After Deployment

After deploying the backend, update the frontend's `.env`:
```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

## Security Checklist

- [x] Password hashing with bcrypt
- [x] JWT authentication with expiration
- [x] Protected routes on frontend and backend
- [x] Generic error messages (no info leakage)
- [ ] Input validation middleware (recommended: zod)
- [ ] Rate limiting on auth endpoints
- [ ] HTTPS in production
- [ ] HttpOnly cookies for tokens (instead of localStorage)
- [ ] CORS restricted to specific origins

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is for educational/portfolio purposes.

---

**Built with ❤️ using the MERN Stack**
