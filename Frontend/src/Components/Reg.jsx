/** @format */

import React from "react";
import { useState } from "react";
import axios from "axios";
import Login from "./Login";

const Reg = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
    password: "",
  });

  // to set the formdata
  function HandleChange(e) {
    setformdata((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  }

  async function HandleSubmit(e) {
    e.preventDefault();
    // console.log(formdata);

    try {
      const res = await axios.post("http://localhost:4000/user_post", formdata);
      if (res.data.succ) {
        alert("Registration Successful");
        setIsRegistered(true);
      } else {
        alert("Registration failed: " + res.data.mess);
      }
    } catch (error) {
      console.log(error);
      alert("Registration failed due to network error");
    }
    // to send this data in the database
  }

  if (isRegistered) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-100 flex items-center justify-center p-12 overflow-y-auto">
      <div className="w-full max-w-lg space-y-12 animate-in slide-in-from-bottom-5 fade-in duration-1000 py-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-semibold tracking-tighter">
            Initialize Identity
          </h1>
          <p className="text-zinc-400 text-sm font-medium italic">
            Join the medical network
          </p>
        </div>

        <form onSubmit={HandleSubmit} className="space-y-10 group">
          <div className="space-y-8">
            <div className="relative border-l border-zinc-100 pl-8 space-y-2">
              <div className="absolute -left-[4.5px] top-0 w-2 h-2 bg-zinc-200 rounded-full"></div>
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Full Name
              </label>
              <input
                type="text"
                value={formdata.name}
                name="name"
                className="w-full bg-transparent border-b border-zinc-100 py-3 text-sm focus:border-zinc-900 focus:outline-none transition-all duration-500 ease-in-out"
                placeholder="Identity Label"
                onChange={HandleChange}
                required
              />
            </div>

            <div className="relative border-l border-zinc-100 pl-8 space-y-2">
              <div className="absolute -left-[4.5px] top-0 w-2 h-2 bg-zinc-100 rounded-full"></div>
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Protocol Email
              </label>
              <input
                type="email"
                value={formdata.email}
                name="email"
                className="w-full bg-transparent border-b border-zinc-100 py-3 text-sm focus:border-zinc-900 focus:outline-none transition-all duration-500 ease-in-out"
                placeholder="entity@network.db"
                onChange={HandleChange}
                required
              />
            </div>

            <div className="relative border-l border-zinc-100 pl-8 space-y-6 text-left">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 block mb-4">
                Classify Role
              </label>
              <div className="flex gap-4">
                <label className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="doctor"
                    className="hidden"
                    checked={formdata.role === "doctor"}
                    onChange={HandleChange}
                    required
                  />
                  <div
                    className={`text-center p-4 border rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${formdata.role === "doctor" ? "bg-zinc-900 text-white border-zinc-900 shadow-xl shadow-zinc-200" : "bg-zinc-50 text-zinc-400 border-zinc-100 group-hover:border-zinc-200"}`}>
                    Practitioner
                  </div>
                </label>

                <label className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="patient"
                    className="hidden"
                    checked={formdata.role === "patient"}
                    onChange={HandleChange}
                    required
                  />
                  <div
                    className={`text-center p-4 border rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${formdata.role === "patient" ? "bg-zinc-900 text-white border-zinc-900 shadow-xl shadow-zinc-200" : "bg-zinc-50 text-zinc-400 border-zinc-100 group-hover:border-zinc-200"}`}>
                    Participant
                  </div>
                </label>
              </div>
            </div>

            {formdata.role === "doctor" && (
              <div className="relative border-l border-zinc-100 pl-8 space-y-2 animate-in slide-in-from-left-2 duration-300">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Department Node
                </label>
                <select
                  name="department"
                  value={formdata.department}
                  className="w-full bg-transparent border-b border-zinc-100 py-3 text-sm focus:border-zinc-900 focus:outline-none transition-all duration-500 rounded-none cursor-pointer"
                  onChange={HandleChange}
                  required>
                  <option value="">Select Domain</option>
                  <option value="E.N.T">E.N.T</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Surgery">Surgery</option>
                  <option value="Cardiology">Cardiology</option>
                </select>
              </div>
            )}

            <div className="relative border-l border-zinc-100 pl-8 space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Secure Pin
              </label>
              <input
                type="password"
                value={formdata.password}
                name="password"
                className="w-full bg-transparent border-b border-zinc-100 py-3 text-sm focus:border-zinc-900 focus:outline-none transition-all duration-500 ease-in-out"
                placeholder="Access Hash"
                onChange={HandleChange}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="group w-full bg-zinc-900 text-white font-bold h-16 rounded-full hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-2xl shadow-zinc-200 flex items-center justify-center gap-4 group/btn">
            <span className="uppercase tracking-[0.3em] text-[10px]">
              Create Entry
            </span>
            <svg
              className="w-4 h-4 translate-x-0 group-hover/btn:translate-x-2 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>

        <div className="text-center">
          <a
            href="/login"
            className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">
            Already Enrolled
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reg;
