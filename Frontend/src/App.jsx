/** @format */

import Reg from "./Components/Reg";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import DataContext from "./Components/DataContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./Doctor/Home";
import Phome from "./Patient/Phome";
import Application from "./Patient/Application";
import ViewApp from "./Patient/ViewApp";
import DoctorViewApp from "./Doctor/DoctorViewApp";
import LandingPage from "./Components/LandingPage";

function App() {
  const [isLoggin, setIsloggin] = useState(false);
  const [isrole, setIsrole] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:4000/check_auth", {
          withCredentials: true,
        });
        if (res.data.succ) {
          setIsrole(res.data.data.role);
          setIsloggin(true);

          setUserId(res.data.data.id);
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkAuth();
  }, []);


  return (
    <div className="selection:bg-blue-100 selection:text-blue-900 font-sans tracking-tight antialiased">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
      <DataContext.Provider
        value={{ setIsloggin, isLoggin, setIsrole, isrole, userId, setUserId }}>
        <Navbar />
        <Routes>
          <Route path="/" element={isLoggin ? isrole === "doctor" ? <Home /> : <Phome /> : <LandingPage />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dhome" element={<Home />} />
          <Route path="/phome" element={<Phome />} />
          <Route path="/application" element={<Application />} />
          <Route path="/viewapp" element={<ViewApp />} />
          <Route path="/doctorviewapp" element={<DoctorViewApp />} />
        </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;
