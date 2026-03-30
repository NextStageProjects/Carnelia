import { useState, useEffect } from 'react';
import { getReservations, updateReservationStatus } from '../../../services/reservations';

export function ReservationsList() {
  const [reservas, setReservas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState<'diario' | 'semanal' | 'mensal'>('diario');
  const [typeFilter, setTypeFilter] = useState<'todas' | 'carta' | 'grupo'>('todas');

  const fetchReservas = async () => {
    setLoading(true);
    try {
      const data = await getReservations();
      setReservas(data);
    } catch (err) {
      console.error("Erro ao carregar:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchReservas(); }, []);

  const handleStatus = async (id: string, estado: 'aceite' | 'cancelado') => {
    try {
      await updateReservationStatus(id, estado);
      fetchReservas(); // Recarrega a lista
    } catch (err) {
      alert("Erro ao atualizar estado");
    }
  };

  if (loading) return <div className="p-10 text-[#69151f] font-bold">A carregar dados do Supabase...</div>;

  return (
    <section className="w-full animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl font-serif text-[#69151f]">Gestão de Reservas (Admin)</h2>
        <p className="text-gray-600 mt-1">Controlo total das entradas do restaurante.</p>
      </header>

      {/* Filtros */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex bg-gray-100 p-1 rounded-lg">
          {['diario', 'semanal', 'mensal'].map((f) => (
            <button key={f} onClick={() => setTimeFilter(f as any)} className={`px-6 py-2 text-sm font-bold rounded-md transition-all ${timeFilter === f ? 'bg-white text-[#69151f] shadow' : 'text-gray-500'}`}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value as any)} className="bg-gray-50 border border-gray-200 p-2.5 rounded-lg text-sm font-medium outline-none">
          <option value="todas">Todas as Reservas</option>
          <option value="carta">À Carta</option>
          <option value="grupo">Em Grupo</option>
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {reservas.map((res) => (
          <div key={res.id} className="flex flex-col lg:flex-row items-center px-6 py-5 border-b border-gray-100 hover:bg-gray-50">
            <div className="w-full lg:w-2/6">
              <p className="font-bold text-gray-900">{res.nome_cliente}</p>
              <p className="text-xs text-gray-500">📞 {res.telefone_cliente}</p>
            </div>
            <div className="w-full lg:w-1/6 text-sm">
              <span className="font-medium capitalize">{res.tipo_reserva}</span>
              <p className="text-gray-500">👥 {res.numero_pessoas} pax</p>
            </div>
            <div className="w-full lg:w-1/6 text-sm">
              <p className="font-medium">{res.data_reserva}</p>
              <p className="text-gray-500">{res.hora_reserva}</p>
            </div>
            <div className="w-full lg:w-1/6">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${res.estado === 'pendente' ? 'bg-yellow-100 text-yellow-700' : res.estado === 'aceite' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {res.estado}
              </span>
            </div>
            <div className="w-full lg:w-auto flex gap-2 justify-end">
              <button onClick={() => handleStatus(res.id, 'aceite')} className="w-[80px] py-1.5 border-2 border-[#05402d] text-[#05402d] rounded text-[10px] font-bold uppercase hover:bg-[#05402d] hover:text-white transition-all">Aceitar</button>
              <button className="w-[80px] py-1.5 border-2 border-gray-400 text-gray-400 rounded text-[10px] font-bold uppercase hover:bg-gray-400 hover:text-white transition-all">Editar</button>
              <button onClick={() => handleStatus(res.id, 'cancelado')} className="w-[80px] py-1.5 border-2 border-[#69151f] text-[#69151f] rounded text-[10px] font-bold uppercase hover:bg-[#69151f] hover:text-white transition-all">Cancelar</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}