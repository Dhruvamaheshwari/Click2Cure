<!-- @format -->

# MediConnect - Patient-Doctor Management System

**MediConnect** (Mini pro 2) is a comprehensive full-stack application designed to facilitate seamless interaction between doctors and patients. It provides a platform for booking appointments, managing schedules, and maintaining medical records securely.

## 🚀 Features

- **Role-Based Access:** Distinct portals for Doctors and Patients.
- **User Authentication:** Secure Login and Registration using JWT (JSON Web Tokens).
- **Appointment Management:** Patients can book appointments; Doctors can view their schedules.
- **Responsive Design:** Modern, minimalist UI built with React 19 and Tailwind CSS v4.
- **Secure Data:** Password hashing with Bcrypt and persistent MongoDB storage.

## � Screenshots

|                              Landing Page                              |                             Login Page                             |
| :--------------------------------------------------------------------: | :----------------------------------------------------------------: |
| ![Landing Page](https://via.placeholder.com/400x200?text=Landing+Page) | ![Login Page](https://via.placeholder.com/400x200?text=Login+Page) |

|                                Patient Dashboard                                 |                                Doctor Dashboard                                |
| :------------------------------------------------------------------------------: | :----------------------------------------------------------------------------: |
| ![Patient Dashboard](https://via.placeholder.com/400x200?text=Patient+Dashboard) | ![Doctor Dashboard](https://via.placeholder.com/400x200?text=Doctor+Dashboard) |

|                                 Appointment Booking                                  |
| :----------------------------------------------------------------------------------: |
| ![Appointment Booking](https://via.placeholder.com/400x200?text=Appointment+Booking) |

## �🛠️ Tech Stack

### Frontend

- **Framework:** React 19 (via Vite)
- **Styling:** Tailwind CSS v4 (Zinc Palette, Backpack Blur)
- **Routing:** React Router 7
- **State Management:** React Context API
- **HTTP Client:** Axios

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Authentication:** JWT (JSON Web Tokens) & Bcrypt
- **Middleware:** CORS, Cookie-Parser

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local installation or Atlas URI)

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd "Mini pro 2"
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd Backend
npm install
```

**Environment Variables:**
Create a `.env` file in the `Backend` directory and add the following variables:

```env
MONGO_URL=mongodb://localhost:27017/mediconnect  # Or your MongoDB Atlas URI
JWT_TOKNE_VALUE=your_secret_key_here          # Secret key for JWT signing
PORT=4000
```

_Note: The variable name `JWT_TOKNE_VALUE` is currently used in the codebase (preserving the typo)._

Start the backend server:

```bash
npm start
```

The backend server will run on `http://localhost:4000`.

### 3. Frontend Setup

Open a new terminal, navigate to the frontend directory, and install dependencies:

```bash
cd Frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will typically run on `http://localhost:5173`.

## 📂 Project Structure

```
Mini pro 2/
├── Backend/                 # Node.js & Express Server
│   ├── config/              # Database connection
│   ├── controller/          # Route logic
│   ├── model/               # Mongoose Schemas
│   ├── routers/             # API Routes
│   ├── services/            # Helper services (Auth, etc.)
│   └── index.js             # Entry point
│
├── Frontend/                # React Application
│   ├── src/
│   │   ├── Components/      # Reusable UI components
│   │   ├── Doctor/          # Doctor-specific views
│   │   ├── Patient/         # Patient-specific views
│   │   └── App.jsx          # Main application component
│   └── vite.config.js       # Vite configuration
│
└── README.md                # Project documentation
```

## 📡 API Endpoints

| Method   | Endpoint           | Description             |
| :------- | :----------------- | :---------------------- |
| **POST** | `/user_post`       | User Registration       |
| **POST** | `/user_get`        | User Login              |
| **GET**  | `/alldoctor`       | Get list of all doctors |
| **POST** | `/appointment`     | Book an appointment     |
| **GET**  | `/appointment_get` | Get appointment details |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
