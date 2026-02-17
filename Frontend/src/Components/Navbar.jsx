/** @format */

import { useContext } from "react";
import DataContext from "./DataContext";
import { Link, useNavigate } from "react-router";

function Navbar() {
  const { isLoggin, setIsloggin, isrole } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 flex items-center justify-between px-8 h-20 transition-all duration-500 ease-in-out">
      <div className="flex items-center gap-3 group px-4">
        <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-[15deg] duration-300">
          <span className="text-white font-black text-xs">M+</span>
        </div>
        <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-900">
          MediConnect
        </h1>
      </div>

      <div className="flex items-center gap-12 font-medium">
        {isLoggin && isrole === "doctor" && (
          <div className="flex gap-8 items-center animate-in fade-in slide-in-from-top-2 duration-700 font-bold uppercase tracking-widest text-[10px]">
            <Link
              to="/dhome"
              className="text-zinc-400 hover:text-zinc-900 transition-colors px-2 py-1">
              Registry
            </Link>
            <div className="text-zinc-400 hover:text-zinc-900 transition-colors px-2 py-1 cursor-pointer">
              Protocol
            </div>
            <button
              onClick={() => {
                localStorage.clear();
                setIsloggin(false);
                navigate("/login");
              }}
              className="bg-zinc-900 text-white px-6 py-2.5 rounded-full hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-zinc-100">
              Sign Out
            </button>
          </div>
        )}

        {isLoggin && isrole === "patient" && (
          <div className="flex gap-10 items-center animate-in fade-in slide-in-from-top-2 duration-700 font-bold uppercase tracking-[0.15em] text-[10px]">
            <Link
              to="/phome"
              className="text-zinc-400 hover:text-zinc-900 transition-colors">
              Interface
            </Link>
            <Link
              to="/application"
              className="text-zinc-400 hover:text-zinc-900 transition-colors">
              Booking
            </Link>
            <Link
              to="/viewapp"
              className="text-zinc-400 hover:text-zinc-900 transition-colors">
              Archives
            </Link>
            <button
              onClick={() => {
                localStorage.clear();
                setIsloggin(false);
                navigate("/login");
              }}
              className="bg-zinc-900 text-white px-6 py-2.5 rounded-full hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-zinc-100">
              Log Out
            </button>
          </div>
        )}

        {!isLoggin && (
          <div className="flex gap-8 items-center animate-in fade-in slide-in-from-top-2 duration-700 font-bold uppercase tracking-widest text-[10px]">
            <Link
              to="/login"
              className="text-zinc-400 hover:text-zinc-900 transition-colors">
              Enrolment
            </Link>
            <Link
              to="/reg"
              className="bg-zinc-900 text-white px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-zinc-200 transition-all active:scale-95">
              Join Network
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
