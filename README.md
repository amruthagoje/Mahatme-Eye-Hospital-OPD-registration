# 🏥 Mahatme Eye Hospital – OPD Registration System

A modern **Full-Stack Web Application** designed to streamline patient registration and hospital administration. The platform acts as a digital patient portal for **Mahatme Eye Hospital**, enabling users to access hospital information, register for OPD services, and interact with an AI-powered assistant.

---

# 📌 Project Information

**Project Type:** Full-Stack Web Application (Patient & Admin Portal)

🎥 **Prototype Demo Video**
[`Mahatme Eye Hospital.mov`](https://drive.google.com/file/d/1UuWxjLBsctirf5yAWx97H-3SJTDyvYcN/view?usp=sharing)

💻 **GitHub Repository**
[https://github.com/amruthagoje/Mahatme-Eye-Hospital-OPD-registration](https://github.com/amruthagoje/Mahatme-Eye-Hospital-OPD-registration)

🌐 **Live Website**  
[Visit Here](https://mahatme-eye-hospital-opd-registration.netlify.app)

📄 **Project Thesis (PDF)**  
[View Thesis](https://drive.google.com/file/d/1VzOQHUw1IDgQb8vYYGCdMtoIE3ZYqVFS/view?usp=sharing)

---

# 📖 Project Overview

This project is a **production-ready prototype** of a hospital patient portal. The application acts as the official website for **Mahatme Eye Hospital**, providing information about services, doctors, and patient testimonials.

The system includes a **complete OPD patient registration system** along with a **secure admin dashboard** where hospital staff can view and manage patient registrations.

The platform is **fully responsive**, **multilingual**, and enhanced with an **AI-powered assistant** that answers patient queries in real time.

---

# 🚀 Key Features

## 🎨 Front-End Development

* Built using **Next.js, React, and Tailwind CSS**
* Used **ShadCN UI** for modern and accessible components
* Fully responsive design for desktop, tablet, and mobile devices

## 🔐 Backend & Database Integration

* Backend powered by **Firebase**
* **Firestore** used to store patient registration data
* **Firebase Authentication** implemented for secure admin login

## 🧑‍💼 Admin Dashboard

* Role-based private dashboard for hospital administrators
* Staff can:

  * View patient registrations
  * Sort and manage records
  * Identify **new vs returning patients**

## 🤖 AI-Powered Assistant

* Integrated **Generative AI FAQ assistant**
* Built using **Genkit and Google Gemini models**
* Provides instant answers to patient queries

## 🌍 Multi-Language Support

* Internationalization implemented
* Supports:

  * English
  * Hindi
  * Marathi
* Dynamic language switching

---

# 🛠️ Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS
* ShadCN UI

### Backend

* Firebase
* Firestore Database
* Firebase Authentication

### AI Integration

* Genkit
* Google Gemini AI

---

# ⚙️ Installation Guide

Follow these steps to run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/amruthagoje/Mahatme-Eye-Hospital-OPD-registration.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd Mahatme-Eye-Hospital-OPD-registration
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start Development Server

```bash
npm run dev
```

The project will run at:

```
http://localhost:3000
```

---

# 🔥 Firebase Setup

To connect the project with Firebase:

### 1️⃣ Create Firebase Project

1. Go to **Firebase Console**
2. Click **Create Project**
3. Enable:

   * **Firestore Database**
   * **Authentication**

---

### 2️⃣ Create Web App in Firebase

Add a **Web App** in your Firebase project and copy the configuration.

Example:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};
```

---

### 3️⃣ Configure Firebase in Project

Create a file:

```
firebase/config.js
```

Add your Firebase configuration there.

---

### 4️⃣ Enable Authentication

In Firebase Console:

```
Authentication → Sign-in Method → Enable Email/Password
```

---

### 5️⃣ Setup Firestore Database

1. Go to **Firestore Database**
2. Create database
3. Start in **test mode** (for development)

---

# 🤖 AI Assistant Setup

The project integrates **Genkit with Google Gemini AI**.

Steps:

1. Create **Google AI API Key**
2. Add the key in environment variables

Create `.env.local`

```
GOOGLE_API_KEY=your_api_key_here
```

---

# 🚀 Deployment

The project can be deployed easily using **Vercel**.

### 1️⃣ Install Vercel CLI

```bash
npm install -g vercel
```

### 2️⃣ Deploy

```bash
vercel
```

Follow the CLI instructions.

---

### Alternative Deployment Platforms

You can also deploy on:

* **Vercel (Recommended)**
* **Netlify**
* **Firebase Hosting**
* **AWS Amplify**

---

# 📊 Outcome

This project demonstrates a **modern digital healthcare platform** combining:

* Patient registration system
* Secure admin dashboard
* Real-time database integration
* AI-powered assistance
* Multi-language accessibility

The system showcases the ability to build **scalable full-stack healthcare solutions with AI integration**.

---

# Snapshots of Mahatme Eye Hospital – OPD Registration System

<img width="3420" height="1974" alt="image" src="https://github.com/user-attachments/assets/f37f58fc-f6f9-431b-b616-59370f4b67fd" />

<img width="3420" height="1970" alt="image" src="https://github.com/user-attachments/assets/4d2dcc75-5132-47aa-a717-ed73db77da79" />

<img width="3420" height="1972" alt="image" src="https://github.com/user-attachments/assets/90156caa-698f-4cf3-b8d0-18c90b63c110" />

<img width="3420" height="1972" alt="image" src="https://github.com/user-attachments/assets/397dede3-056c-4049-b54f-2066e01a4edd" />

<img width="3420" height="1972" alt="image" src="https://github.com/user-attachments/assets/3ea061ff-3f48-446c-863d-a1179bffd44e" />

<img width="3420" height="1972" alt="image" src="https://github.com/user-attachments/assets/421ed5d1-9857-40c6-a8a4-310bd285c6f7" />

<img width="3420" height="376" alt="image" src="https://github.com/user-attachments/assets/f724706e-8d78-469e-827e-7c4825e409ae" />

<img width="3420" height="1974" alt="image" src="https://github.com/user-attachments/assets/3eb361e0-ed87-428a-ac97-6a13e2896c43" />

<img width="3420" height="1970" alt="image" src="https://github.com/user-attachments/assets/7d924aad-10ca-4e4d-b0e1-d8e5bdd45689" />

<img width="3420" height="1970" alt="image" src="https://github.com/user-attachments/assets/e7b3e31c-4a8c-4474-8989-97d8bd59caed" />

<img width="3420" height="1970" alt="image" src="https://github.com/user-attachments/assets/21ec21ca-6f3a-43ec-9de6-5a252b9b8df0" />











