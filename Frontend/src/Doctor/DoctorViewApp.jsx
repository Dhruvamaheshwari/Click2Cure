import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../Components/DataContext'
import axios from 'axios'

const DoctorViewApp = () => {

    const { userId } = useContext(DataContext)

    const [doctorappointment, setdoctorAppointment_get] = useState([]);
    // console.log(userId)

    useEffect(() => {
        async function show_doctor_appointement_get() {
            try {
                const res = await axios.get(`http://localhost:4000/show_doctor_appointement_get?doctorId=${userId}`)
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
            const res = await axios.patch(`http://localhost:4000/update_status`, {
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
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl shadow-md p-6">
                <h1 className="text-3xl font-extrabold mb-8 text-gray-800 border-b pb-4">My Appointments</h1>

                <div className="overflow-x-auto rounded-lg border border-gray-100">
                    <table className="min-w-full bg-white divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left font-bold text-gray-600 uppercase text-xs tracking-wider">Patient Details</th>
                                <th className="px-6 py-4 text-left font-bold text-gray-600 uppercase text-xs tracking-wider">Schedule</th>
                                <th className="px-6 py-4 text-left font-bold text-gray-600 uppercase text-xs tracking-wider">Status</th>
                                <th className="px-6 py-4 text-center font-bold text-gray-600 uppercase text-xs tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {doctorappointment.length > 0 ? (
                                doctorappointment.map((val, ind) => (
                                    <tr key={ind} className="hover:bg-blue-50/30 transition duration-150">
                                        <td className="px-6 py-5">
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-gray-900">{val.patientId?.name || "Unknown Patient"}</span>
                                                <span className="text-sm text-gray-500">{val.patientId?.email || "No Email"}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex flex-col">
                                                <span className="text-gray-700 font-medium">🗓️ {val.date}</span>
                                                <span className="text-gray-500 text-sm">⏰ {val.time}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase ${val.status === 'approved' ? 'bg-green-100 text-green-700' :
                                                val.status === 'reject' ? 'bg-red-100 text-red-700' :
                                                    'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {val.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            {val.status === 'pending' ? (
                                                <div className="flex justify-center space-x-3">
                                                    <button
                                                        onClick={() => handleStatusUpdate(val._id, 'approved')}
                                                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-sm text-sm font-medium"
                                                    >
                                                        Accept
                                                    </button>
                                                    <button
                                                        onClick={() => handleStatusUpdate(val._id, 'reject')}
                                                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow-sm text-sm font-medium"
                                                    >
                                                        Reject
                                                    </button>
                                                </div>
                                            ) : (
                                                <span className="text-gray-400 text-sm italic">No actions available</span>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="px-6 py-12 text-center text-gray-500 italic">
                                        No appointments found for you.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DoctorViewApp