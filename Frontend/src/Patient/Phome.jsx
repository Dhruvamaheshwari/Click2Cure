import { Link } from "react-router-dom";

function Phome() {
    return (
        <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-100 flex flex-col pt-32 pb-12 px-12 lg:px-24">
            <main className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center space-y-20">
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <div className="space-y-6 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-100 rounded-full mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-2 rounded-full bg-zinc-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
                            </span>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 font-mono">System Active • V.2.0</span>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] text-gray-900">
                            Your Health, <br />
                            <span className="text-blue-600">Simplified.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 max-w-xl font-medium leading-relaxed">
                            Connect with top healthcare professionals, book appointments in seconds, and manage your medical history all in one place.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/application"
                            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-[0.98] text-center"
                        >
                            Book Appointment
                        </Link>
                        <Link
                            to="/viewapp"
                            className="bg-white text-gray-700 px-8 py-4 rounded-xl font-bold border border-gray-200 hover:border-gray-900 transition-all active:scale-[0.98] text-center"
                        >
                            My Appointments
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in zoom-in-95 duration-1000 delay-300">
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 group">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all text-xl">📅</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Booking</h3>
                        <p className="text-gray-500 leading-relaxed">Schedule consultations with your preferred doctors at your convenience.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 group">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all text-xl">👨‍⚕️</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Doctors</h3>
                        <p className="text-gray-500 leading-relaxed">Access a wide range of certified specialists across various departments.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 group">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all text-xl">📂</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Medical History</h3>
                        <p className="text-gray-500 leading-relaxed">Keep track of all your past and upcoming appointments securely.</p>
                    </div>
                </div>
            </main>

            <footer className="max-w-6xl mx-auto w-full mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400 text-sm">
                <p>© 2026 MediConnect. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
                </div>
            </footer>
        </div>
    );
}

export default Phome;
