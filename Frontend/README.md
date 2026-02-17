<!-- @format -->

# MediConnect Frontend - Patient Interface

A high-contrast, minimalist healthcare terminal built for professional clinical interaction.

---

## 🎨 Design Philosophy - "GPT Minimal"

- **Palette**: Zinc Gray, Pure White, and Backdrop-blur glassmorphism.
- **Typography**: Tight tracking, strong uppercase labels.
- **Interactions**: Subtle "Protocol" pulse indicators and slide-in entrance animations.
- **Responsive**: Fluid layouts across all digital viewports.

---

## 🏗️ Technical Matrix

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS (v4 Alpha)
- **Routing**: React Router 7 (Data API)
- **State**: Context API for global session persistence.
- **Client**: Axios for backend synchronization.

---

## 📂 Interface Structure

- **`/src/Components`**: Shared UI blocks (Navbar, Authenticator, Global Context).
- **`/src/Doctor`**: Specialized terminal for medical specialist interactions.
- **`/src/Patient`**: User-centric modules for appointment protocols and archives.
- **`/assets`**: Clinical icons and media assets.

---

## 🧪 Quick Setup

1. **Install Interface Modules**:

   ```bash
   npm install
   ```

2. **Initialize Development Mode**:

   ```bash
   npm run dev
   ```

3. **Build Production Image**:
   ```bash
   npm run build
   ```

---

## 🔐 Session Management

The interface uses `localStorage` for state hydration across refreshes. The global `DataContext` ensures consistent authentication state for the following keys:

- `isLoggin`: session status.
- `isrole`: identity classification.
- `userId`: unique identifier.

---

_MediConnect Frontend Node._
