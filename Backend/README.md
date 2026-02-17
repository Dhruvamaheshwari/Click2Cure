<!-- @format -->

# MediConnect Backend - Clinical Infrastructure

The specialized Node.js node responsible for persistent data storage, record management, and secure medical protocols.

---

## 🏗️ Technical Specifications

- **Runtime**: Node.js (v20+)
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Middleware**: CORS, JSON Parsing, URL Encoding
- **Environment**: Dotenv for secure variable isolation

---

## 📁 Repository Structure

- **`/config`**: Database initialization and connection logic.
- **`/controller`**: Business logic abstractions (Authentication, Appointments, Registry).
- **`/model`**: Mongoose schemas for Patients, Doctors, and Appointments.
- **`/routers`**: API mapping and routing.
- **`/services`**: Database interaction abstractions.

---

## 📡 API Endpoints

### 🔐 Authentication Protocol

| Method | Endpoint     | Identity                    |
| :----- | :----------- | :-------------------------- |
| `POST` | `/user_post` | Registration Node           |
| `POST` | `/user_get`  | Access Verification (Login) |

### 🩺 Clinical Registry

| Method | Endpoint     | Access               |
| :----- | :----------- | :------------------- |
| `GET`  | `/alldoctor` | Specialist Retrieval |

### 📅 Protocol Appointments

| Method | Endpoint           | Identity                        |
| :----- | :----------------- | :------------------------------ |
| `POST` | `/appointment`     | Clinical Booking Initialization |
| `GET`  | `/appointment_get` | Archive Retrieval               |

---

## 🛠️ Calibration

1. **Install Module Clusters**:

   ```bash
   npm install
   ```

2. **Initialize Environment**:
   Create a `.env` in this directory (refer to [root README](../README.md)).

3. **Start Process**:
   ```bash
   npm start
   ```

---

_Backend Node Operating on Port 4000._
