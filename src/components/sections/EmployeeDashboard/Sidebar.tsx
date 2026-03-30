interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  return (
    <aside className="w-64 min-h-screen bg-[#69151f] text-white flex flex-col shadow-2xl">
      <div className="p-6 border-b border-white/10 text-center">
        <h1 className="text-2xl font-serif italic font-bold tracking-widest text-[#f1efea]">A Cernelha</h1>
        <p className="text-[10px] uppercase tracking-[0.3em] mt-2 text-[#f1efea]/70">Conta Funcionário</p>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2">
        <button onClick={() => setActiveSection('reservations')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all ${activeSection === 'reservations' ? 'bg-[#05402d] font-bold shadow-lg' : 'hover:bg-white/10 text-[#f1efea]/80 hover:text-white'}`}>
          <span>📅</span> Reservas
        </button>
      </nav>

      <div className="p-4 border-t border-white/10">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm text-[#f1efea]/70 hover:text-white hover:bg-white/10 rounded-md transition-all">
          <span>🚪</span> Sair
        </button>
      </div>
    </aside>
  );
}