/** @format */

import Reg from "./Components/Reg";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import DataContext from "./Components/DataContext";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Doctor/Home";
import Phome from "./Patient/Phome";
import Application from "./Patient/Application";
import ViewApp from "./Patient/ViewApp";

function App() {
  const [isLoggin, setIsloggin] = useState(localStorage.getItem("isLoggin") || false);
  const [isrole, setIsrole] = useState(localStorage.getItem("isrole") || null);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);

  return (
    <div className="selection:bg-zinc-100 selection:text-zinc-900 font-sans tracking-tight antialiased">
      <DataContext.Provider
        value={{ setIsloggin, isLoggin, setIsrole, isrole, userId, setUserId }}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              isLoggin ?
                isrole === "doctor" ?
                  <Home />
                : <Phome />
              : <Login />
            }
          />
          <Route path="/reg" element={<Reg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dhome" element={<Home />} />
          <Route path="/phome" element={<Phome />} />
          <Route path="/application" element={<Application />} />
          <Route path="/viewapp" element={<ViewApp />} />
        </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;
