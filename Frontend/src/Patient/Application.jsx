/** @format */

import axios from "axios";
import { useEffect, useState, useContext } from "react";
import DataContext from "../Components/DataContext";

function Application() {
  const { userId } = useContext(DataContext);
  const [allDoctor, setDoctor] = useState([]);
  const [selectedDept, setSelectedDept] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [appointment, setAppointment] = useState({
    doctorId: "",
    date: "",
    time: "",
  });

  const handleDeptChange = (e) => {
    const dept = e.target.value;
    setSelectedDept(dept);
    setAppointment({ ...appointment, doctorId: "" }); // Reset doctor selection

    if (dept) {
      const doctors = allDoctor.filter((doc) => doc.department === dept);
      setFilteredDoctors(doctors);
    } else {
      setFilteredDoctors([]);
    }
  };

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Pass the student/patient id from login context
    const appointmentData = { ...appointment, patientId: userId };
    console.log("Appointment Data:", appointmentData);

    try {
      const res = await axios.post(
        "http://localhost:4000/appointment",
        appointmentData,
      );
      if (res.data.succ) {
        alert("Appointment booked successfully!");
        setAppointment({ doctorId: "", date: "", time: "" });
        setSelectedDept("");
      } else {
        alert("Failed: " + res.data.mess);
      }
    } catch (err) {
      console.error(err);
      alert("Booking error.");
    }
  };

  useEffect(() => {
    async function DoctorData() {
      try {
        const res = await axios.get("http://localhost:4000/alldoctor");
        setDoctor(res.data.mess);
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    }
    DoctorData();
  }, []);

  const departments = [
    ...new Set(allDoctor.map((d) => d.department).filter(Boolean)),
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6 font-sans">
      <div className="max-w-2xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-1000">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 leading-tight">
            Book an Appointment
          </h1>
          <p className="text-gray-500 max-w-md mx-auto">
            Choose a department and your preferred doctor. Select a convenient time for your consultation.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl shadow-blue-100/30 p-10 space-y-10 border border-gray-100">
          {/* Step 01: Department Selection */}
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase tracking-wider">
              <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs">1</span>
              Clinical Department
            </label>
            <select
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 cursor-pointer"
              value={selectedDept}
              onChange={handleDeptChange}
              required>
              <option value="">Select a Department</option>
              {departments.map((dept, ind) => (
                <option key={ind} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Step 02: Practitioner Selection */}
          <div className={`space-y-4 transition-all duration-500 ${!selectedDept ? "opacity-40 pointer-events-none" : "opacity-100"}`}>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase tracking-wider">
              <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs">2</span>
              Preferred Doctor
            </label>
            <select
              name="doctorId"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 cursor-pointer"
              value={appointment.doctorId}
              onChange={handleChange}
              disabled={!selectedDept}
              required>
              <option value="">
                {selectedDept ? "Select a Doctor" : "Please select a department first"}
              </option>
              {filteredDoctors.map((val, ind) => (
                <option key={ind} value={val._id}>
                  Dr. {val.name}
                </option>
              ))}
            </select>
          </div>

          {/* Step 03: DateTime Selection */}
          <div className={`space-y-6 transition-all duration-500 ${!appointment.doctorId ? "opacity-40 pointer-events-none" : "opacity-100"}`}>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase tracking-wider">
              <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs">3</span>
              Schedule Date & Time
            </label>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-gray-500 ml-1">Select Date</span>
                <input
                  type="date"
                  name="date"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300"
                  value={appointment.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-gray-500 ml-1">Select Time Slot</span>
                <select
                  name="time"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 cursor-pointer"
                  value={appointment.time}
                  onChange={handleChange}
                  required>
                  <option value="">Available Slots</option>
                  <option value="10:00 AM">10:00 AM - 11:00 AM</option>
                  <option value="11:00 AM">11:00 AM - 12:00 PM</option>
                  <option value="12:00 PM">12:00 PM - 01:00 PM</option>
                  <option value="02:00 PM">02:00 PM - 03:00 PM</option>
                  <option value="03:00 PM">03:00 PM - 04:00 PM</option>
                  <option value="04:00 PM">04:00 PM - 05:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-3">
            <span>Confirm Appointment</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Application;

