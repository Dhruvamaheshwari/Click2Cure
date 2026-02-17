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
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-100 pt-32 pb-20 px-6 font-sans">
      <div className="max-w-xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <header className="space-y-4 text-center">
          <h2 className="text-4xl font-semibold tracking-tighter">
            Initialize Booking
          </h2>
          <p className="text-zinc-400 text-sm font-medium italic">
            Protocol sequence: 01. Dept → 02. Practitioner → 03. Protocol
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Step 01: Department Selection */}
          <section className="relative border-l border-zinc-100 pl-8 space-y-6 group">
            <div className="absolute -left-[4.5px] top-0 w-2 h-2 bg-zinc-900 rounded-full"></div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 group-hover:text-zinc-900 transition-colors">
                01. Clinical Domain
              </label>
              <select
                className="w-full bg-transparent border-b border-zinc-100 py-4 text-sm focus:border-zinc-900 focus:outline-none transition-all duration-500 rounded-none cursor-pointer"
                value={selectedDept}
                onChange={handleDeptChange}
                required>
                <option value="">Select Domain</option>
                {departments.map((dept, ind) => (
                  <option key={ind} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </section>

          {/* Step 02: Practitioner Selection */}
          <section
            className={`relative border-l border-zinc-100 pl-8 space-y-6 group transition-all duration-700 ${!selectedDept ? "opacity-20 pointer-events-none grayscale" : "opacity-100"}`}>
            <div
              className={`absolute -left-[4.5px] top-0 w-2 h-2 rounded-full transition-colors duration-500 ${selectedDept ? "bg-zinc-900" : "bg-zinc-100"}`}></div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 group-hover:text-zinc-900 transition-colors">
                02. Specialist Node
              </label>
              <select
                name="doctorId"
                className="w-full bg-transparent border-b border-zinc-100 py-4 text-sm focus:border-zinc-900 focus:outline-none transition-all duration-500 rounded-none cursor-pointer"
                value={appointment.doctorId}
                onChange={handleChange}
                disabled={!selectedDept}
                required>
                <option value="">
                  {selectedDept ?
                    "Select Practitioner"
                  : "Awaiting Domain Selection"}
                </option>
                {filteredDoctors.map((val, ind) => (
                  <option key={ind} value={val._id}>
                    {val.name}
                  </option>
                ))}
              </select>
            </div>
          </section>

          {/* Step 03: Temporal Protocol */}
          <section
            className={`relative border-l border-zinc-100 pl-8 space-y-10 group transition-all duration-700 ${!appointment.doctorId ? "opacity-20 pointer-events-none grayscale" : "opacity-100"}`}>
            <div
              className={`absolute -left-[4.5px] top-0 w-2 h-2 rounded-full transition-colors duration-500 ${appointment.doctorId ? "bg-zinc-900" : "bg-zinc-100"}`}></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 block">
                  03-A. Timeline
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full bg-transparent border-b border-zinc-100 py-3 text-sm focus:border-zinc-900 focus:outline-none transition-all duration-500 rounded-none"
                  value={appointment.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 block">
                  03-B. Slot Window
                </label>
                <select
                  name="time"
                  className="w-full bg-transparent border-b border-zinc-100 py-3 text-sm focus:border-zinc-900 focus:outline-none transition-all duration-500 rounded-none cursor-pointer"
                  value={appointment.time}
                  onChange={handleChange}
                  required>
                  <option value="">Select Window</option>
                  <option value="10:00 AM">10:00 AM - 11:00 AM</option>
                  <option value="11:00 AM">11:00 AM - 12:00 PM</option>
                  <option value="12:00 PM">12:00 PM - 01:00 PM</option>
                  <option value="02:00 PM">02:00 PM - 03:00 PM</option>
                  <option value="03:00 PM">03:00 PM - 04:00 PM</option>
                  <option value="04:00 PM">04:00 PM - 05:00 PM</option>
                </select>
              </div>
            </div>
          </section>

          <button
            type="submit"
            className="group w-full bg-zinc-900 text-white font-bold h-20 rounded-full hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-2xl shadow-zinc-200 flex items-center justify-center gap-6">
            <span className="uppercase tracking-[0.4em] text-[10px]">
              Execute Confirmation
            </span>
            <div className="w-6 h-6 border border-zinc-700 rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-zinc-900 transition-all duration-500">
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Application;
