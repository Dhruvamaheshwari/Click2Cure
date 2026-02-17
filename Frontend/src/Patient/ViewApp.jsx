/** @format */

import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import DataContext from "../Components/DataContext";

const ViewApp = () => {
  const [appointment, setAppointment_get] = useState([]);
  const { userId } = useContext(DataContext); // get the logged in user's ID

  useEffect(() => {
    async function appointment_get() {
      try {
        // pass the userId as a query parameter so the backend filters accordingly
        const res = await axios.get(
          `http://localhost:4000/appointment_get?patientId=${userId}`,
        );
        if (res.data.succ) {
          setAppointment_get(res.data.mess);
        } else {
          alert("Failed to fetch appointments");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
        alert("Something went wrong");
      }
    }
    if (userId) appointment_get(); // only fetch if userId exists
  }, [userId]);

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 border-green-200";
      case "reject":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-100 pt-32 pb-20 px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-5 duration-1000">
        <header className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-zinc-100 pb-12">
          <div className="space-y-4 text-left">
            <h2 className="text-5xl font-semibold tracking-tighter">
              Clinical Ledger
            </h2>
            <p className="text-zinc-400 text-sm font-medium italic">
              Archive of all verified and pending medical interactions.
            </p>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full">
            <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Live Synchronization
            </span>
          </div>
        </header>

        <div className="space-y-4">
          {appointment.length > 0 ?
            appointment.map((val, ind) => (
              <div
                key={ind}
                className="group relative bg-white border border-zinc-100 rounded-3xl p-8 hover:border-zinc-900 transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-100">
                <div className="flex flex-col md:flex-row justify-between gap-12">
                  <div className="space-y-6 flex-1">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                        Practitioner Node
                      </label>
                      <h3 className="text-xl font-semibold tracking-tight group-hover:italic transition-all">
                        Dr. {val.doctorId.name}
                      </h3>
                      <p className="text-xs text-zinc-400 font-medium font-mono lowercase">
                        {val.doctorId.email}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t border-zinc-50">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                          Timeline
                        </span>
                        <p className="text-xs font-bold text-zinc-600">
                          {val.date}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                          Slot
                        </span>
                        <p className="text-xs font-bold text-zinc-600">
                          {val.time}
                        </p>
                      </div>
                      <div className="space-y-1 col-span-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                          Protocol ID
                        </span>
                        <p className="text-[10px] font-mono font-medium text-zinc-400 uppercase tracking-tighter">
                          {val._id}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-end gap-6 min-w-[140px]">
                    <div
                      className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border transition-all duration-500 ${
                        val.status === "approved" ?
                          "bg-zinc-900 text-white border-zinc-900"
                        : val.status === "reject" ?
                          "bg-white text-zinc-300 border-zinc-100"
                        : "bg-zinc-50 text-zinc-500 border-zinc-200"
                      }`}>
                      {val.status}
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                        Initialized
                      </p>
                      <p className="text-[10px] font-medium text-zinc-400">
                        {new Date(val.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Micro-interaction Hover Background */}
                <div className="absolute inset-0 bg-zinc-50 opacity-0 group-hover:opacity-10 rounded-3xl -z-10 transition-opacity duration-500"></div>
              </div>
            ))
          : <div className="text-center py-20 bg-zinc-50/50 rounded-3xl border border-dashed border-zinc-200 animate-pulse">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                No active interactions found in primary node.
              </p>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ViewApp;
