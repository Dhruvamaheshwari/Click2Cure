/** @format */

import { Link } from "react-router";

function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-100 flex flex-col pt-32 pb-12 px-12 lg:px-24 font-sans">
      <main className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center space-y-20">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-2 rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 font-mono">
                Doctor Portal Active
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] text-gray-900">
              Doctor <br />
              <span className="text-blue-600">Dashboard.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-xl font-medium leading-relaxed">
              Manage your patient appointments, review medical history, and coordinate care with ease. Your professional center for clinical efficiency.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/doctorviewapp"
              className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-[0.98] text-center"
            >
              View Appointments
            </Link>
            <button className="bg-white text-gray-700 px-10 py-5 rounded-xl font-bold border border-gray-200 hover:border-gray-900 transition-all active:scale-[0.98]">
              Archive Records
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 group">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all text-xs font-bold font-mono">SCH</div>
            <h3 className="font-bold text-gray-900 mb-1 tracking-tight">Schedule</h3>
            <p className="text-gray-400 text-xs leading-relaxed uppercase tracking-widest opacity-60">Daily Hours</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 group">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all text-xs font-bold font-mono">RX</div>
            <h3 className="font-bold text-gray-900 mb-1 tracking-tight">Prescript</h3>
            <p className="text-gray-400 text-xs leading-relaxed uppercase tracking-widest opacity-60">Digital Scripts</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 group">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all text-xs font-bold font-mono">ANL</div>
            <h3 className="font-bold text-gray-900 mb-1 tracking-tight">Analytics</h3>
            <p className="text-gray-400 text-xs leading-relaxed uppercase tracking-widest opacity-60">Patient Trends</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 group">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all text-xs font-bold font-mono">MSG</div>
            <h3 className="font-bold text-gray-900 mb-1 tracking-tight">Messages</h3>
            <p className="text-gray-400 text-xs leading-relaxed uppercase tracking-widest opacity-60">Care Comms</p>
          </div>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto w-full mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400 text-xs font-medium">
        <div className="opacity-60">
          © 2026 MediConnect • Dr. Portal v.1.0
        </div>
        <div className="flex gap-12 uppercase tracking-widest">
          <span>System Status: <span className="text-green-500">Active</span></span>
        </div>
      </footer>
    </div>
  );
}

export default Home;

