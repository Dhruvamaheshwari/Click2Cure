/** @format */

function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-100 flex flex-col pt-32 pb-12 px-12 lg:px-24 font-sans">
      <main className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center space-y-24">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-100 rounded-full mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-2 rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 font-mono">
                Practitioner Node Active • S-09
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.95] text-zinc-900">
              Clinical <br />
              <span className="text-zinc-300 italic">Interface.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl font-medium tracking-tight leading-relaxed">
              System tools initialized for patient coordination, diagnostic
              archiving, and surgical scheduling. Secure link established with
              primary medical database.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-zinc-900 text-white px-10 py-5 rounded-full font-bold hover:bg-zinc-800 hover:shadow-2xl hover:shadow-zinc-300 transition-all active:scale-[0.98] uppercase tracking-[0.2em] text-[10px]">
              Open Queue
            </button>
            <button className="bg-white text-zinc-900 px-10 py-5 rounded-full font-bold border border-zinc-200 hover:border-zinc-900 transition-all active:scale-[0.98] uppercase tracking-[0.2em] text-[10px]">
              Archives
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-zinc-100 border border-zinc-100 rounded-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-1000 delay-300 shadow-sm transition-all hover:shadow-xl hover:shadow-zinc-100">
          <div className="bg-white p-10 space-y-6 hover:bg-zinc-50/50 transition-colors duration-500 group">
            <div className="w-10 h-10 border border-zinc-200 rounded-xl flex items-center justify-center text-[10px] font-bold text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all uppercase tracking-widest">
              SCH
            </div>
            <h3 className="text-xs font-semibold tracking-tight uppercase">
              Scheduling
            </h3>
            <p className="text-zinc-400 text-[11px] leading-relaxed font-medium uppercase tracking-wider opacity-60">
              Synchronize clinical hours and patient consultations.
            </p>
          </div>

          <div className="bg-white p-10 space-y-6 hover:bg-zinc-50/50 transition-colors duration-500 group border-l border-zinc-100">
            <div className="w-10 h-10 border border-zinc-200 rounded-xl flex items-center justify-center text-[10px] font-bold text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all uppercase tracking-widest">
              RX
            </div>
            <h3 className="text-xs font-semibold tracking-tight uppercase">
              Prescript
            </h3>
            <p className="text-zinc-400 text-[11px] leading-relaxed font-medium uppercase tracking-wider opacity-60">
              Digital pharmacological directives and verification.
            </p>
          </div>

          <div className="bg-white p-10 space-y-6 hover:bg-zinc-50/50 transition-colors duration-500 group border-l border-zinc-100">
            <div className="w-10 h-10 border border-zinc-200 rounded-xl flex items-center justify-center text-[10px] font-bold text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all uppercase tracking-widest">
              ANL
            </div>
            <h3 className="text-xs font-semibold tracking-tight uppercase">
              Analytics
            </h3>
            <p className="text-zinc-400 text-[11px] leading-relaxed font-medium uppercase tracking-wider opacity-60">
              Statistical mapping of recovery metrics and trends.
            </p>
          </div>

          <div className="bg-white p-10 space-y-6 hover:bg-zinc-50/50 transition-colors duration-500 group border-l border-zinc-100">
            <div className="w-10 h-10 border border-zinc-200 rounded-xl flex items-center justify-center text-[10px] font-bold text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all uppercase tracking-widest">
              MSG
            </div>
            <h3 className="text-xs font-semibold tracking-tight uppercase">
              Comms
            </h3>
            <p className="text-zinc-400 text-[11px] leading-relaxed font-medium uppercase tracking-wider opacity-60">
              Encrypted staff synchronization and coordination.
            </p>
          </div>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto w-full mt-24 pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8 animate-in fade-in duration-1000 delay-500 opacity-40">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="text-zinc-900 font-bold text-[10px] uppercase tracking-[0.4em]">
            Authorization Verified
          </h4>
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest opacity-50 italic">
            Professional Portal v.1.0.42
          </p>
        </div>
        <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <span>Terminal Status: Active</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
