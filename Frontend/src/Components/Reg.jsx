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
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 mt-15">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-blue-100/50 p-8 space-y-8 animate-in fade-in zoom-in-95 duration-700">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                        Create Account
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Please fill in the details to get started
                    </p>
                </div>

                <form onSubmit={HandleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700 ml-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={formdata.name}
                                name="name"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300"
                                placeholder="John Doe"
                                onChange={HandleChange}
                                required
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700 ml-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={formdata.email}
                                name="email"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300"
                                placeholder="name@example.com"
                                onChange={HandleChange}
                                required
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700 ml-1">
                                Password
                            </label>
                            <input
                                type="password"
                                value={formdata.password}
                                name="password"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300"
                                placeholder="••••••••"
                                onChange={HandleChange}
                                required
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700 ml-1">
                                Role
                            </label>
                            <div className="grid grid-cols-2 gap-4 p-1 bg-gray-50 rounded-xl border border-gray-200">
                                <label className="cursor-pointer block relative">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="doctor"
                                        className="peer hidden"
                                        checked={formdata.role === "doctor"}
                                        onChange={HandleChange}
                                        required
                                    />
                                    <div className="text-center py-2.5 rounded-lg text-sm font-semibold text-gray-500 transition-all peer-checked:bg-white peer-checked:text-blue-600 peer-checked:shadow-sm">
                                        Doctor
                                    </div>
                                </label>
                                <label className="cursor-pointer block relative">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="patient"
                                        className="peer hidden"
                                        checked={formdata.role === "patient"}
                                        onChange={HandleChange}
                                        required
                                    />
                                    <div className="text-center py-2.5 rounded-lg text-sm font-semibold text-gray-500 transition-all peer-checked:bg-white peer-checked:text-blue-600 peer-checked:shadow-sm">
                                        Patient
                                    </div>
                                </label>
                            </div>
                        </div>

                        {formdata.role === "doctor" && (
                            <div className="space-y-1.5 animate-in slide-in-from-top-2 duration-300">
                                <label className="text-sm font-semibold text-gray-700 ml-1">
                                    Specialty
                                </label>
                                <div className="relative">
                                    <select
                                        name="department"
                                        value={formdata.department}
                                        className="w-full bg-gray-50 border  border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                                        onChange={HandleChange}
                                        required>
                                        <option value="">Select Domain</option>
                                        <option value="E.N.T">E.N.T Domain</option>
                                        <option value="Dermatology">Dermatology Domain</option>
                                        <option value="Neurology">Neurology Domain</option>
                                        <option value="Surgery">Surgery Domain</option>
                                        <option value="Cardiology">Cardiology Domain</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-200">
                        Sign Up
                    </button>
                </form>

                <div className="text-center">
                    <p className="text-sm text-gray-500">
                        Already have an account?{" "}
                        <button
                            onClick={() => setIsRegistered(true)}
                            className="font-bold text-blue-600 hover:text-blue-700 hover:underline transition-all"
                        >
                            Sign in
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Reg;

