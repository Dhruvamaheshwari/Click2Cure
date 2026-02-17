/** @format */

import React from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import DataContext from "./DataContext";
import { useNavigate } from "react-router";

const Login = () => {
    const [formdata, setformdata] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const { setIsrole, setIsloggin, setUserId } = useContext(DataContext);


    // to set the formdata
    function HandleChange(e) {
        setformdata((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    }

    async function HandleSubmit(e) {
        e.preventDefault();
        // console.log(formdata);

        try {
            const res = await axios.post("http://localhost:4000/user_get", formdata);
            if (res.data.succ) {
                alert("Login Successful");
                setIsrole(res.data.data.role);
                setIsloggin(true);
                setUserId(res.data.data._id); // Store the patient/doctor ID
                const { role, _id } = res.data.data;
                localStorage.setItem("isLoggin", "true");
                localStorage.setItem("isrole", role);
                localStorage.setItem("userId", _id);
                if (res.data.data.role === "doctor") {
                    navigate("/dhome");
                } else {
                    navigate("/phome");
                }
            } else {
                alert("Login failed: " + res.data.mess);
            }
        } catch (error) {
            console.log(error);
            alert("Login failed due to network error");
        }
    }

    return (
        <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-100 flex items-center justify-center p-12">
            <div className="w-full max-w-sm space-y-12 animate-in slide-in-from-bottom-5 fade-in duration-1000">
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-semibold tracking-tighter">
                        Access Terminal
                    </h1>
                    <p className="text-zinc-400 text-sm font-medium italic">
                        Identification protocol required
                    </p>
                </div>

                <form onSubmit={HandleSubmit} className="space-y-10 group">
                    <div className="space-y-8">
                        <div className="relative border-l border-zinc-100 pl-8 space-y-2">
                            <div className="absolute -left-[4.5px] top-0 w-2 h-2 bg-zinc-900 rounded-full"></div>
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                                Node Email
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
                            Initialize link
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
                        href="/reg"
                        className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors underline-offset-8 underline decoration-zinc-100 hover:decoration-zinc-300">
                        Request Enrolment
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
