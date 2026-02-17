<!-- @format -->

# MediConnect - Patient-Doctor Management System

**MediConnect** is a modern, high-contrast minimalist healthcare application designed for streamlined medical consultations. It features a sophisticated, "GPT-style" Zinc/White aesthetic with micro-interactions and a multi-step appointment booking protocol.

---

## 🏛️ Project Architecture

The project is divided into two primary nodes:

- **[Frontend](./Frontend)**: A React-based interface powered by Vite and Tailwind CSS (v4).
- **[Backend](./Backend)**: A Node.js/Express server using MongoDB for persistent record-keeping.

---

## 🚀 Quick Start

### 1. Database Configuration

Ensure you have a MongoDB instance running. Create a `.env` file in the `Backend/` directory:

```env
# Example configuration
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

### 2. Initialize Backend Node

```bash
cd Backend
npm install
npm start
```

### 3. Initialize Frontend Interface

```bash
cd Frontend
npm install
npm run dev
```

---

## 🧪 Key Features

- **Multi-Role Access**: Independent terminals for Doctors and Patients.
- **Protocol Booking**: A stepped UI sequence for selecting departments and specialists.
- **Session Persistence**: `localStorage` based hydration ensuring users remain within their session across refreshes.
- **Medical Archives**: Secure patient ledgers displaying appointment statuses and medical history.
- **Minimalist Aesthetic**: Zinc-themed UI with advanced typography and smooth transitions.

---

## 🛠️ Tech Stack

| Component    | Technology                                            |
| :----------- | :---------------------------------------------------- |
| **Frontend** | React 19, Vite, Tailwind CSS 4, React Router 7, Axios |
| **Backend**  | Node.js, Express, MongoDB, Mongoose                   |
| **Styling**  | Zinc Palette, Backdrop Blur, Micro-interactions       |
| **Storage**  | Browser Local Storage (Persistence)                   |

---

Developed with a focus on high-end user experience and clinical efficiency.
