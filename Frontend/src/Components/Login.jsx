/** @format */

import React from "react";
import { useState } from "react";
import api from "../api";
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
            const res = await api.post("/user_get", formdata);
            if (res.data.succ) {
                alert("Login Successful");
                setIsrole(res.data.data.role);
                setIsloggin(true);
                setUserId(res.data.data.id); // Store the patient/doctor ID
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
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-blue-100/50 p-10 space-y-8 animate-in fade-in zoom-in-95 duration-700">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                        Welcome Back
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Please enter your details to sign in
                    </p>
                </div>

                <form onSubmit={HandleSubmit} className="space-y-6">
                    <div className="space-y-4">
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
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-200">
                        Sign In
                    </button>
                </form>

                <div className="text-center pt-4">
                    <p className="text-gray-500 text-sm">
                        Don't have an account?{" "}
                        <button
                            onClick={() => navigate("/reg")}
                            className="text-blue-600 font-bold hover:underline"
                        >
                            Create one
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
