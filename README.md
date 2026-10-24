# 🏛️ E-Gram Panchayat

### Digital Governance for Smarter Villages

E-Gram Panchayat is a web-based platform designed to help citizens submit and track local civic complaints online while enabling government officials to manage, verify, assign, and resolve complaints through a structured workflow.

🌐 **Live Website:** https://e-panchayat.onrender.com

📂 **GitHub Repository:** https://github.com/abhishekreddy17092004-wq/new-E-Panchayat

## ✨ Features

* 👤 Citizen registration and login
* 📝 Online civic complaint submission
* 🔎 Complaint tracking using a complaint ID
* 🏢 Role-based dashboards for administrators and officials
* 🔄 Complaint verification, assignment, and status updates
* ⏰ Automated complaint escalation
* 📸 Complaint photo uploads
* 🌐 Multilingual interface supporting English, Hindi, and Kannada
* 📱 Responsive web interface
* 📲 Android application development using Capacitor

## 🛠️ Technology Stack

**Frontend**

* HTML
* CSS
* JavaScript

**Backend**

* Node.js
* Express.js
* REST API

**Database**

* MongoDB Atlas
* Mongoose

**Authentication and Security**

* JSON Web Tokens (JWT)
* bcryptjs
* Role-based access control

**Deployment**

* GitHub
* Render

**Android**

* Capacitor
* Android Studio

## 🏗️ Project Structure

```text
E-Panchayat/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── scripts/
│   ├── services/
│   ├── package.json
│   └── server.js
└── frontend/
    ├── index.html
    ├── script.js
    ├── style.css
    └── android/
```

## 🚀 Getting Started

### Prerequisites

* Node.js and npm
* MongoDB Atlas account or another MongoDB instance
* Git

### 1. Clone the repository

```bash
git clone https://github.com/abhishekreddy17092004-wq/new-E-Panchayat.git
cd new-E-Panchayat
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_secret
NODE_ENV=development
PORT=5000
```

Replace the example values with your own credentials. Never commit your `.env` file.

### 4. Start the backend

```bash
npm start
```

### 5. Open the frontend

Open `frontend/index.html` in your browser, ensuring that the frontend API configuration points to your running backend.

## 🔐 Security

* Keep database credentials and JWT secrets private.
* Do not commit `.env` files.
* Use appropriate MongoDB Atlas network access restrictions.
* Validate user input and enforce authorization on protected API routes.

## 📱 Android Application

The project includes an Android application wrapper created with Capacitor. Android build and installation steps may vary by development environment.

## 👨‍💻 Project

**Project Name:** E-Gram Panchayat
**Repository:** `new-E-Panchayat`

## 📄 License

No license has been specified yet. Unless a license is added, the source code is not automatically open for unrestricted reuse.
