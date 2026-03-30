// Caminho: src/components/sections/AdminDashboard/Overview.tsx

export function Overview() {
  return (
    <section className="w-full animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl font-serif text-[#69151f]">Visão Geral</h2>
        <p className="text-gray-600 mt-1">Bem-vindo à Dashboard de Gestão da Cernelha.</p>
      </header>
      
      <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-200 text-center flex flex-col items-center justify-center">
        <span className="text-6xl mb-4">📊</span>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Estatísticas em Breve</h3>
        <p className="text-gray-500 max-w-md">
          Este será o teu painel principal. No futuro, vais poder ver aqui o número total de reservas do dia, os lucros e os pratos mais pedidos.
        </p>
      </div>
    </section>
  );
}