import { useState, useEffect } from 'react';
import { getReservations, updateReservationStatus } from '../../../services/reservations';

export function ReservationsList() {
  const [reservas, setReservas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState<'diario' | 'semanal' | 'mensal'>('diario');

  const fetchReservas = async () => {
    setLoading(true);
    try {
      const data = await getReservations();
      setReservas(data);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchReservas(); }, []);

  const handleStatus = async (id: string, estado: 'aceite' | 'cancelado') => {
    if (window.confirm(`Deseja marcar como ${estado}?`)) {
      await updateReservationStatus(id, estado);
      fetchReservas();
    }
  };

  if (loading) return <div className="p-10 text-[#69151f] font-bold">A carregar lista operacional...</div>;

  return (
    <section className="w-full animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl font-serif text-[#69151f]">Operação de Mesas</h2>
        <p className="text-gray-600 mt-1">Gestão diária de reservas e estados.</p>
      </header>

      <div className="flex bg-gray-100 p-1 rounded-lg mb-6 w-fit">
        {['diario', 'semanal', 'mensal'].map((f) => (
          <button key={f} onClick={() => setTimeFilter(f as any)} className={`px-6 py-2 text-sm font-bold rounded-md transition-all ${timeFilter === f ? 'bg-white text-[#69151f] shadow' : 'text-gray-500'}`}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {reservas.map((res) => (
          <div key={res.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{res.tipo_reserva}</p>
              <h4 className="text-lg font-bold text-gray-900">{res.nome_cliente}</h4>
              <p className="text-sm text-gray-500">{res.data_reserva} às {res.hora_reserva} — {res.numero_pessoas} pessoas</p>
            </div>

            <div className="flex items-center gap-3">
              <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${res.estado === 'pendente' ? 'bg-yellow-100 text-yellow-700' : res.estado === 'aceite' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {res.estado}
              </span>
              <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>
              <div className="flex gap-2">
                <button onClick={() => handleStatus(res.id, 'aceite')} className="w-[85px] py-2 border-2 border-[#05402d] text-[#05402d] rounded-md text-[10px] font-bold uppercase hover:bg-[#05402d] hover:text-white transition-all">Aceitar</button>
                <button onClick={() => handleStatus(res.id, 'cancelado')} className="w-[85px] py-2 border-2 border-[#69151f] text-[#69151f] rounded-md text-[10px] font-bold uppercase hover:bg-[#69151f] hover:text-white transition-all">Cancelar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}