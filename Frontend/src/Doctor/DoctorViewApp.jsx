import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../Components/DataContext'
import api from '../api'

const DoctorViewApp = () => {

    const { userId } = useContext(DataContext)

    const [doctorappointment, setdoctorAppointment_get] = useState([]);
    // console.log(userId)

    useEffect(() => {
        async function show_doctor_appointement_get() {
            try {
                const res = await api.get(`/show_doctor_appointement_get?doctorId=${userId}`)
                console.log(res.data.mess)
                setdoctorAppointment_get(res.data.mess)
            } catch (error) {
                console.error("Error fetching appointments:", error);
                alert("Something went wrong");
            }
        }
        if (userId) show_doctor_appointement_get()
    }, [userId])

    const handleStatusUpdate = async (id, newStatus) => {
        try {
            const res = await api.patch(`/update_status`, {
                appointmentId: id,
                status: newStatus
            });
            if (res.data.succ) {
                setdoctorAppointment_get(prev =>
                    prev.map(app => app._id === id ? { ...app, status: newStatus } : app)
                );
            }
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update status");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-28 pb-12 px-8 font-sans">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-200/60">
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Medical Dashboard</h1>
                        <p className="text-slate-500 font-medium">Overview of your patient appointments</p>
                    </div>
                    <div className="text-right hidden md:block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Current Date</span>
                        <span className="text-lg font-bold text-slate-700">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                </div>

                <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden relative">
                    {/* Decorative top pattern */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/70 via-indigo-600/70 to-violet-600/70"></div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-100">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-widest text-slate-300">Patient Data</th>
                                    <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-widest text-slate-300">Schedule Info</th>
                                    <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-widest text-slate-300">Current Status</th>
                                    <th className="px-8 py-5 text-center text-xs font-bold uppercase tracking-widest text-slate-300">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100">
                                {doctorappointment.length > 0 ? (
                                    doctorappointment.map((val, ind) => (
                                        <tr key={ind} className="hover:bg-slate-50/80 transition-colors duration-200 group">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-10 w-10 rounded-full uppercase bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg">
                                                        {val.patientId?.name?.charAt(0) || "P"}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="font-bold uppercase text-slate-900 text-sm">{val.patientId?.name || "Unknown"}</span>
                                                        <span className="text-xs font-medium text-slate-500">{val.patientId?.email || "No Email"}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
                                                        {val.date}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold bg-indigo-50 w-fit px-2 py-1 rounded-md">
                                                        {val.time}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${val.status === 'approved'
                                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                                    : val.status === 'reject'
                                                        ? 'bg-rose-50 text-rose-700 border-rose-100'
                                                        : 'bg-amber-50 text-amber-700 border-amber-100'
                                                    }`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${val.status === 'approved' ? 'bg-emerald-500' : val.status === 'reject' ? 'bg-rose-500' : 'bg-amber-500'
                                                        }`}></span>
                                                    {val.status}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6">
                                                {val.status === 'pending' ? (
                                                    <div className="flex justify-center gap-3 opacity-100 transition-opacity">
                                                        <button
                                                            onClick={() => handleStatusUpdate(val._id, 'approved')}
                                                            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 transition-all active:scale-95 text-xs font-bold uppercase tracking-wide"
                                                        >
                                                            Approve
                                                        </button>
                                                        <button
                                                            onClick={() => handleStatusUpdate(val._id, 'reject')}
                                                            className="flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 border border-rose-100 rounded-xl hover:bg-rose-100 hover:border-rose-200 transition-all active:scale-95 text-xs font-bold uppercase tracking-wide"
                                                        >
                                                            Decline
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="text-center">
                                                        <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">Completed</span>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="px-8 py-24 text-center">
                                            <div className="flex flex-col items-center justify-center text-slate-400">
                                                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                                    <span className="text-2xl">📅</span>
                                                </div>
                                                <p className="text-lg font-medium text-slate-600">No appointments scheduled</p>
                                                <p className="text-sm">New appointment requests will appear here</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DoctorViewApp