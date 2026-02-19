import React from "react";
import { useState } from "react";
import axios from "axios";
import Login from "./Login";

const Reg = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        role: "patient",
        department: "",
        password: "",
    });

    // to set the formdata
    function HandleChange(e) {
        setformdata((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    }

    async function HandleSubmit(e) {
        e.preventDefault();

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
    }

    if (isRegistered) {
        return <Login />;
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6 py-24">
            <div className="w-full max-w-xl space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-100 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-2">
                        Member Enrollment
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter text-zinc-900 leading-none">
                        Join <span className="text-zinc-300">Medi</span>Platform
                    </h1>
                </div>

                <form onSubmit={HandleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="group space-y-2 relative md:col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-1 block group-focus-within:text-zinc-900 transition-colors">
                            Full Name
                        </label>
                        <input
                            type="text"
                            value={formdata.name}
                            name="name"
                            className="w-full bg-transparent border-b-2 border-zinc-50 px-1 py-3 text-sm focus:border-zinc-900 focus:outline-none transition-all duration-500"
                            placeholder="Full Identity Name"
                            onChange={HandleChange}
                            required
                        />
                    </div>

                    <div className="group space-y-2 relative">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-1 block group-focus-within:text-zinc-900 transition-colors">
                            Electronic Mail
                        </label>
                        <input
                            type="email"
                            value={formdata.email}
                            name="email"
                            className="w-full bg-transparent border-b-2 border-zinc-50 px-1 py-3 text-sm focus:border-zinc-900 focus:outline-none transition-all duration-500"
                            placeholder="email@example.com"
                            onChange={HandleChange}
                            required
                        />
                    </div>

                    <div className="group space-y-2 relative">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-1 block group-focus-within:text-zinc-900 transition-colors">
                            Security Key
                        </label>
                        <input
                            type="password"
                            value={formdata.password}
                            name="password"
                            className="w-full bg-transparent border-b-2 border-zinc-50 px-1 py-3 text-sm focus:border-zinc-900 focus:outline-none transition-all duration-500"
                            placeholder="••••••••"
                            onChange={HandleChange}
                            required
                        />
                    </div>

                    <div className="md:col-span-2 bg-zinc-50 p-6 rounded-3xl space-y-6">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 text-center block mb-2">
                            Deployment Role
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="cursor-pointer group">
                                <input
                                    type="radio"
                                    name="role"
                                    value="doctor"
                                    className="peer hidden"
                                    checked={formdata.role === "doctor"}
                                    onChange={HandleChange}
                                    required
                                />
                                <div className="text-center p-4 rounded-2xl border-2 border-transparent bg-white text-zinc-400 font-black text-[10px] uppercase tracking-widest transition-all peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:shadow-2xl peer-checked:shadow-zinc-200">
                                    Doctor
                                </div>
                            </label>
                            <label className="cursor-pointer group">
                                <input
                                    type="radio"
                                    name="role"
                                    value="patient"
                                    className="peer hidden"
                                    checked={formdata.role === "patient"}
                                    onChange={HandleChange}
                                    required
                                />
                                <div className="text-center p-4 rounded-2xl border-2 border-transparent bg-white text-zinc-400 font-black text-[10px] uppercase tracking-widest transition-all peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:shadow-2xl peer-checked:shadow-zinc-200">
                                    Patient
                                </div>
                            </label>
                        </div>

                        {formdata.role === "doctor" && (
                            <div className="animate-in slide-in-from-top-4 duration-500 pt-2 border-t border-zinc-100">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 block text-center">
                                    Specialty Domain
                                </label>
                                <select
                                    name="department"
                                    value={formdata.department}
                                    className="w-full bg-white rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-widest focus:ring-2 focus:ring-zinc-900 focus:outline-none transition-all cursor-pointer shadow-sm"
                                    onChange={HandleChange}
                                    required>
                                    <option value="">Select Domain</option>
                                    <option value="E.N.T">E.N.T Domain</option>
                                    <option value="Dermatology">Dermatology Domain</option>
                                    <option value="Neurology">Neurology Domain</option>
                                    <option value="Surgery">Surgery Domain</option>
                                    <option value="Cardiology">Cardiology Domain</option>
                                </select>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="md:col-span-2 group relative h-16 bg-zinc-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all hover:bg-zinc-800 active:scale-[0.98] mt-6 flex items-center justify-center gap-4"
                    >
                        Initialize Enrollment
                        <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-3 group-hover:translate-x-0">+</span>
                    </button>
                </form>

                <div className="text-center pt-8">
                    <button
                        onClick={() => setIsRegistered(true)}
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-900 transition-colors"
                    >
                        Already Registered? Return to Hub
                    </button>
                </div>
            </div>
            
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>
    );
};

export default Reg;

