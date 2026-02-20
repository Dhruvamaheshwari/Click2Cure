import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">

            {/* Navbar Placeholder */}
            <div className="h-20 mb-10"></div>

            {/* Department Marquee Section */}
            <div className="bg-slate-900 py-6 overflow-hidden border-y border-slate-800 m-3 rounded-xl">
                <div className="flex gap-16 animate-scroll whitespace-nowrap text-slate-400 font-bold text-lg uppercase tracking-[0.2em] select-none  transition-colors  ">
                    {/* First set of items */}
                    <span className='hover:text-slate-200 duration-500 '>Cardiology</span>
                    <span className="text-indigo-500">•</span>
                    <span className='hover:text-slate-200 duration-500 '>Neurology</span>
                    <span className="text-indigo-500">•</span>
                    <span className='hover:text-slate-200 duration-500 '>Pediatrics</span>
                    <span className="text-indigo-500">•</span>
                    <span className='hover:text-slate-200 duration-500 '>Orthopedics</span>
                    <span className="text-indigo-500">•</span>
                    <span className='hover:text-slate-200 duration-500 '>Dermatology</span>
                    <span className="text-indigo-500">•</span>
                    <span className='hover:text-slate-200 duration-500 '>Surgery</span>
                    <span className="text-indigo-500">•</span>
                    <span className='hover:text-slate-200 duration-500 '>Oncology</span>
                    <span className="text-indigo-500">•</span>
                    <span className='hover:text-slate-200 duration-500 '>Gynecology</span>
                    <span className="text-indigo-500">•</span>

                    {/* Duplicate set for seamless loop */}
                    <span className='hover:text-slate-200 duration-500 '>Cardiology</span>
                    <span className="text-indigo-500">•</span>
                    <span className='hover:text-slate-200 duration-500 '>Neurology</span>
                    <span className="text-indigo-500">•</span>
                    <span className='hover:text-slate-200 duration-500 '>Pediatrics</span>
                    <span className="text-indigo-500">•</span>
                    <span className='hover:text-slate-200 duration-500 '>Orthopedics</span>
                    <span className="text-indigo-500">•</span>
                    <span className='hover:text-slate-200 duration-500 '>Dermatology</span>
                    <span className="text-indigo-500">•</span>
                    <span className='hover:text-slate-200 duration-500 '>Surgery</span>
                    <span className="text-indigo-500">•</span>
                    <span className='hover:text-slate-200 duration-500 '>Oncology</span>
                    <span className="text-indigo-500">•</span>
                    <span className='hover:text-slate-200 duration-500 '>Gynecology</span>
                    <span className="text-indigo-500">•</span>
                </div>
            </div>

            {/* Hero Section */}
            <header className="pt-24 pb-20 px-6 text-center max-w-5xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-widest mb-8 border border-indigo-100">
                    Next Generation Healthcare
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
                    Modern Healthcare<br />
                    <span className="text-indigo-600">Simplified.</span>
                </h1>

                <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
                    Book appointments, manage records, and connect with top specialists.
                    No complex forms, just simple, secure care.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/reg" className="px-8 py-3.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                        Get Started
                    </Link>
                    <Link to="/login" className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors">
                        Member Login
                    </Link>
                </div>
            </header>



            {/* Simple Features */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl">👨‍⚕️</div>
                            <h3 className="text-xl font-bold text-slate-900">Top Specialists</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                Access certified doctors across Neurology, Cardiology, and more.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl">⚡</div>
                            <h3 className="text-xl font-bold text-slate-900">Instant Booking</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                Real-time scheduling with zero wait times. Book in seconds.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl">🛡️</div>
                            <h3 className="text-xl font-bold text-slate-900">Secure Data</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                Your medical history is encrypted and private.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Minimal Stats */}
            <section className="py-20">
                <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 text-center">
                    <div>
                        <div className="text-4xl font-black text-slate-900">500+</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Doctors</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-slate-900">10k+</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Patients</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-slate-900">24/7</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Support</div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 border-t border-slate-200">
                <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center gap-2 opacity-80">
                        <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
                            <span className="text-white font-bold text-[10px]">C+</span>
                        </div>
                        <span className="font-bold text-slate-900 tracking-widest text-xs">CLICK 2 CURE</span>
                    </div>
                    <p className="text-xs text-slate-400">© 2024 Click 2 Cure Inc.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
