# 🖥️ UserHub — Full Stack User Management System

**Repository:** Full-stack project combining frontend (React) and backend (Node.js, Express, MySQL, Redis)
**Purpose:** Minimal user management system with registration/login, admin user management, user status updates, and asynchronous email notifications.

---

## 🔧 Project Summary

UserHub is a **full-stack user management system**:

* **Frontend:** React SPA (dashboard, registration/login, profile, admin view)
* **Backend:** Node.js + Express API
* **Database:** MySQL (user data), Redis (email queue)
* **Features:** JWT authentication, password hashing (bcrypt), input validation (Joi), asynchronous registration emails via BullMQ and nodemailer

This project demonstrates **full-stack development**, **API integration**, **state management**, and **asynchronous workflows**.

---

## 🧠 Tech Stack

**Frontend:**
React, Redux Toolkit, React Query, Axios, Formik, Yup, Tailwind-like styling

**Backend:**
Node.js, Express.js, MySQL, Redis, BullMQ, Nodemailer, JWT, bcrypt, Joi

**Other Tools:**
Git, npm, VS Code

---

## 🧩 Key Features

### Backend

* User registration `/api/register` with bcrypt password hashing and validation
* Login `/api/login` with JWT authentication
* Admin user creation `/api/create` and view users by creator `/api/viewUsers`
* Toggle user status `/api/updateStatus`
* Asynchronous registration emails via BullMQ worker
* JWT authentication middleware for cookie-based auth

### Frontend

* Registration, login, and protected routes
* Admin dashboard: view users and update status
* User dashboard: profile view and updates
* Redux Toolkit + React Query for state management
* Formik + Yup for form handling and validation
* Axios API integration with interceptors

---

## 📁 Project Structure

### Backend

```
back_end/
├── index.js            # Entry point, sets up server and email worker
├── controllers/        # Business logic (register, login, create, mailService, viewUsers)
├── registerUser.js     # MySQL queries
├── validations/        # Joi schemas and auth middleware
├── config/             # Mailer, Redis, MySQL setup
├── queues/             # BullMQ queue and worker
└── registerRoute.js    # API endpoints
```

### Frontend

```
front_end/src/
├── App.js               # Main component with routes
├── index.js, index.css  # App entry and styles
├── store.js             # Redux store
├── authslice.js         # Auth slice (setUser, logout, setUsers)
├── axiosConfig.js       # Axios instance & interceptors
├── api/users/           # API helper functions
├── hooks/               # Custom hooks for API calls
├── components/          # UI components (Dashboard, Login, Register, Profile, ViewUsers, Sidebar, Welcome)
└── routes/ProtectedRoute.jsx # Route guards
```

---

## ⚙️ Setup & Quick Start

### Prerequisites

* Node.js 16+
* MySQL & Redis running locally
* `.env` file for backend configuration

### Backend

```bash
cd back_end
npm install
```

Set up database:

```bash
mysql -u username -p database_name < user_details.sql
```

Start server:

```bash
node index.js
```

**Required environment variables:**

```
ACCESS_TOKEN_SECRET=<secret>
TOKEN_EXPIRY=1h
SMTP_HOST=<host>
SMTP_PORT=<port>
SMTP_USER=<user>
SMTP_PASS=<pass>
FROM_EMAIL=<email>
REDIS_HOST=<host>
REDIS_PORT=<port>
REDIS_PASSWORD=<password>
```

### Frontend

```bash
cd front_end
npm install
npm start
```

> Axios base URL is set in `axiosConfig.js`. Change if your backend runs elsewhere.

---

## 🔐 Security Notes

* Passwords hashed with **bcrypt**
* JWT stored in cookies; Axios reads token (recommend unifying storage)
* CORS configured for frontend with credentials
* Admin endpoints (`/api/create`) should be protected (currently not secured)

---

## 🛠️ Improvements & To-Do

* Move DB credentials to env variables
* Protect admin-only endpoints with role checks and secure cookies
* Add automated unit and integration tests
* Add logging, error handling, retry/backoff for email worker
* Optional: deploy backend and frontend to a live server

---

## 📦 Scripts

**Backend**

```bash
node index.js
```

**Frontend**

```bash
npm start        # Development
npm run build    # Production
```

---

