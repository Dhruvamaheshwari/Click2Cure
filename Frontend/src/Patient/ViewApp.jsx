/** @format */

import api from "../api";
import React, { useEffect, useState, useContext } from "react";
import DataContext from "../Components/DataContext";

const ViewApp = () => {
  const [appointment, setAppointment_get] = useState([]);
  const { userId } = useContext(DataContext); // get the logged in user's ID

  useEffect(() => {
    async function appointment_get() {
      try {
        // pass the userId as a query parameter so the backend filters accordingly
        const res = await api.get(
          `/appointment_get?patientId=${userId}`,
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
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-1000">
        <header className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-200 pb-10">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              My Appointments
            </h1>
            <p className="text-gray-500 font-medium">
              View and track all your scheduled consultations.
            </p>
          </div>
          <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-100">
            {appointment.length} Total Appointments
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {appointment.length > 0 ?
            appointment.map((val, ind) => (
              <div
                key={ind}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-blue-50 uppercase font-bold rounded-2xl flex items-center justify-center text-2xl">
                      {val.doctorId?.name?.charAt(0) || "Unknown"}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 ">
                        Dr. <span className="uppercase">{val.doctorId?.name || "Unknown"}</span>
                      </h3>
                      <p className="text-gray-500 text-sm font-medium">
                        {val.doctorId?.email || "No email available"}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Date</p>
                      <p className="text-sm font-bold text-gray-700">{val.date}</p>
                    </div>
                    <div className="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Time</p>
                      <p className="text-sm font-bold text-gray-700">{val.time}</p>
                    </div>
                    <div className={`px-5 py-2.5 rounded-xl border text-sm font-bold shadow-sm ${getStatusColor(val.status)}`}>
                      {val.status.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            ))
            : (
              <div className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-sm">
                <div className="text-5xl mb-6">📅</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Appointments Yet</h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">You haven't booked any consultations yet. Start by finding a specialist.</p>
                <a href="/application" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                  Book Initial Appointment
                </a>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ViewApp;

