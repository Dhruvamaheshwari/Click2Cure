/** @format */

import { useContext } from "react";
import DataContext from "./DataContext";
import { Link, useNavigate } from "react-router";
import api from "../api";

function Navbar() {
  const { isLoggin, setIsloggin, isrole, setIsrole, setUserId } = useContext(DataContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await api.get("/logout");
      if (res.data.succ) {
        setIsloggin(false);
        setIsrole(null);
        setUserId(null);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 flex items-center justify-between px-8 h-20 transition-all duration-500 ease-in-out">
      <Link to='/'>
        <div className="flex items-center gap-3 group px-4">
          <div className="w-12 h-8  animate-pulse duration-500 bg-zinc-800 rounded-lg flex items-center justify-center transition-transform ">
            <span className="text-white font-black text-md">C 2</span>
          </div>
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-900 ">
            Click <span className="text-xl text-red-600/60 font-bold ">2</span> Cure
          </h1>
        </div>
      </Link>

      <div className="flex items-center gap-12 font-medium">
        {isLoggin && isrole === "doctor" && (
          <div className="flex gap-8 items-center animate-in fade-in slide-in-from-top-2 duration-700 font-semibold tracking-tight text-sm">
            <Link
              to="/dhome"
              className="text-gray-500 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link
              to="/doctorviewapp"
              className="text-gray-500 hover:text-blue-600 transition-colors">
              Appointments
            </Link>
            <button
              onClick={handleLogout}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all active:scale-95 shadow-sm">
              Sign Out
            </button>
          </div>
        )}

        {isLoggin && isrole === "patient" && (
          <div className="flex gap-8 items-center animate-in fade-in slide-in-from-top-2 duration-700 font-semibold tracking-tight text-sm">
            <Link
              to="/phome"
              className="text-gray-500 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link
              to="/application"
              className="text-gray-500 hover:text-blue-600 transition-colors">
              Book Appointment
            </Link>
            <Link
              to="/viewapp"
              className="text-gray-500 hover:text-blue-600 transition-colors">
              View Appointment
            </Link>
            <button onClick={handleLogout} className=" hover:underline font-bold text-lg hover:cursor-pointer duration-300 border-2 w-20 rounded-lg bg-red-600/20"><span className="text-red-900/90">LogOut</span> </button>
          </div>
        )}

        {!isLoggin && (
          <div className="flex gap-8 items-center animate-in fade-in slide-in-from-top-2 duration-700 font-semibold tracking-tight text-sm">
            <Link
              to="/login"
              className="text-gray-500 hover:text-blue-600 transition-colors">
              Log In
            </Link>
            <Link
              to="/reg"
              className="bg-blue-600 text-white px-8 py-2.5 rounded-lg hover:bg-blue-700 hover:shadow-md transition-all active:scale-95">
              Create Account
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
