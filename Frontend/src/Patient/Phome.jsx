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
                        <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.95] text-zinc-900">
                            The New Standard <br />
                            <span className="text-zinc-300 italic font-medium">In Care Control.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-500 max-w-xl font-medium tracking-tight leading-relaxed">
                            A minimalist clinical interface designed for high-precision healthcare management. Access practitioners, schedule surgery, and monitor wellness with unified control.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link 
                            to="/application" 
                            className="bg-zinc-900 text-white px-10 py-5 rounded-full font-bold hover:bg-zinc-800 hover:shadow-2xl hover:shadow-zinc-300 transition-all active:scale-[0.98] uppercase tracking-[0.2em] text-[10px] text-center"
                        >
                            Initialize Booking
                        </Link>
                        <Link 
                            to="/viewapp" 
                            className="bg-white text-zinc-900 px-10 py-5 rounded-full font-bold border border-zinc-200 hover:border-zinc-900 transition-all active:scale-[0.98] uppercase tracking-[0.2em] text-[10px] text-center"
                        >
                            Access Archives
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100 rounded-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-1000 delay-300 shadow-sm">
                    <div className="bg-white p-12 space-y-6 hover:bg-zinc-50/50 transition-colors duration-500 group">
                        <div className="w-10 h-10 border border-zinc-200 rounded-xl flex items-center justify-center text-xs font-bold text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all">01</div>
                        <h3 className="text-lg font-semibold tracking-tight">Rapid Scheduling</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed font-medium">Native synchronization for all healthcare domains. Real-time slot availability.</p>
                    </div>

                    <div className="bg-white p-12 space-y-6 hover:bg-zinc-50/50 transition-colors duration-500 group border-l border-zinc-100">
                        <div className="w-10 h-10 border border-zinc-200 rounded-xl flex items-center justify-center text-xs font-bold text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all">02</div>
                        <h3 className="text-lg font-semibold tracking-tight">Verified Domain</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed font-medium">Access board-certified practitioners across multiple clinical nodes.</p>
                    </div>

                    <div className="bg-white p-12 space-y-6 hover:bg-zinc-50/50 transition-colors duration-500 group border-l border-zinc-100">
                        <div className="w-10 h-10 border border-zinc-200 rounded-xl flex items-center justify-center text-xs font-bold text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all">03</div>
                        <h3 className="text-lg font-semibold tracking-tight">Secured Logs</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed font-medium">Encrypted medical history archives accessible from any terminal.</p>
                    </div>
                </div>
            </main>

            <footer className="max-w-6xl mx-auto w-full mt-24 pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8 animate-in fade-in duration-1000 delay-500 opacity-40">
                <h4 className="text-zinc-900 font-bold text-[10px] uppercase tracking-[0.4em]">MediConnect Network</h4>
                <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Protocol</a>
                    <a href="#" className="hover:text-zinc-900 transition-colors">Legal Framework</a>
                </div>
            </footer>
        </div>
    );
}

export default Phome;
