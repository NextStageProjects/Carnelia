import { useState, useEffect } from 'react';
import { createReservation } from '../../services/reservations';
import { GroupReservation } from './GroupReservation'; 
import imgEspera from '../../assets/modals/ReservationModal/icone-de-espera.png';
import imgTouro from '../../assets/home/touro/tourro.png';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'carta' | 'grupo';
}

export function ReservationModal({ isOpen, onClose, initialType = 'carta' }: ReservationModalProps) {
  const [tipoReserva, setTipoReserva] = useState<'carta' | 'grupo'>(initialType);
  const [enviado, setEnviado] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  const [formData, setFormData] = useState({
    nome: '', telemovel: '', pessoas: '', data: '', hora: ''
  });

  const ticketClip = {
    clipPath: "polygon(0% 20%, 5% 0%, 95% 0%, 100% 20%, 100% 80%, 95% 100%, 5% 100%, 0% 80%)"
  };

  useEffect(() => {
    if (isOpen) {
      setTipoReserva(initialType);
      setEnviado(false);
      setError(null);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialType]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await createReservation({
        nome_cliente: formData.nome,
        telefone_cliente: formData.telemovel,
        numero_pessoas: Number(formData.pessoas),
        data_reserva: formData.data,
        hora_reserva: formData.hora,
        tipo_reserva: 'carta',
      });
      setEnviado(true);
    } catch (err: any) {
      console.error("Erro Supabase:", err);
      setError('Erro ao processar a reserva.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col md:items-center md:justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-[#f4f2ee] w-full h-full md:h-auto md:max-w-[550px] md:rounded-sm md:shadow-2xl overflow-y-auto z-10">
        <div className="p-8 md:p-12 min-h-full flex flex-col">
          <button onClick={onClose} className="absolute top-6 right-6 text-[#69151f] text-2xl z-20">✕</button>

          {tipoReserva === 'grupo' ? (
            <div className="w-full flex-1">
               <GroupReservation onClose={onClose} />
            </div>
          ) : (
            <div className="flex-1 flex flex-col">
              {!enviado ? (
                <>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-[1px] w-20 bg-[#05402d]/20"></div>
                    <img src={imgTouro} alt="Touro" className="h-8 w-auto mix-blend-multiply" />
                    <div className="h-[1px] w-20 bg-[#05402d]/20"></div>
                  </div>

                  <h2 style={cinzel} className="text-[#69151f] text-center text-3xl md:text-4xl uppercase mb-10 tracking-[0.2em]">Reservas</h2>

                  <div className="flex gap-4 justify-center mb-12">
                    <button type="button" onClick={() => setTipoReserva('carta')} style={ticketClip}
                      className={`px-8 py-3 text-[11px] font-bold tracking-widest transition-all ${tipoReserva === 'carta' ? 'bg-[#05402d] text-white' : 'bg-[#05402d]/10 text-[#05402d] opacity-50'}`}>Á CARTA</button>
                    <button type="button" onClick={() => setTipoReserva('grupo')} style={ticketClip}
                      className={`px-8 py-3 text-[11px] font-bold tracking-widest transition-all ${tipoReserva === 'grupo' ? 'bg-[#05402d] text-white' : 'bg-[#05402d]/10 text-[#05402d] opacity-50'}`}>GRUPO</button>
                  </div>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="space-y-1">
                      <label style={montserrat} className="block text-[13px] text-[#69151f] font-semibold uppercase">Nome Sobrenome</label>
                      <input required name="nome" value={formData.nome} onChange={handleInputChange} className="w-full p-4 bg-white border border-[#69151f]/20 outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                       <div className="space-y-1">
                         <label style={montserrat} className="block text-[13px] text-[#69151f] font-semibold uppercase">Telemóvel</label>
                         <input required name="telemovel" value={formData.telemovel} onChange={handleInputChange} className="w-full p-4 bg-white border border-[#69151f]/20 outline-none" />
                       </div>
                       <div className="space-y-1">
                         <label style={montserrat} className="block text-[13px] text-[#69151f] font-semibold uppercase">Pessoas</label>
                         <input required name="pessoas" type="number" value={formData.pessoas} onChange={handleInputChange} className="w-full p-4 bg-white border border-[#69151f]/20 outline-none" />
                       </div>
                    </div>
                    <div className="space-y-1">
                      <label style={montserrat} className="block text-[13px] text-[#69151f] font-semibold uppercase">Data e Hora</label>
                      <div className="flex border border-[#69151f]/20 bg-white">
                        <input required name="data" value={formData.data} onChange={handleInputChange} type="date" className="flex-1 p-4 outline-none bg-transparent" />
                        <input required name="hora" value={formData.hora} onChange={handleInputChange} type="time" className="flex-1 p-4 outline-none bg-transparent" />
                      </div>
                    </div>
                    {error && <p className="text-red-600 text-xs font-bold text-center">{error}</p>}
                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#69151f] text-white py-5 font-bold uppercase tracking-[0.3em]">{isSubmitting ? 'A PROCESSAR...' : 'RESERVAR MESA'}</button>
                  </form>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-12 h-[1px] bg-[#05402d]"></div>
                    <img src={imgTouro} alt="Touro" className="h-6 w-auto mix-blend-multiply" />
                    <div className="w-12 h-[1px] bg-[#05402d]"></div>
                  </div>
                  <h3 style={cinzel} className="text-[#69151f] text-[22px] font-bold uppercase mb-10">Á espera da confirmação <br /> da sua reserva!</h3>
                  <img src={imgEspera} alt="Ampulheta" className="w-28 h-auto mb-10" />
                  <p style={montserrat} className="text-black text-[14px] font-bold leading-snug mb-4">Estamos a confirmar a disponibilidade de mesas no nosso espaço para validar a sua reserva, dentro de alguns minutos será lhe enviado um SMS com a confirmação da mesma.</p>
                  <p style={montserrat} className="text-black/70 text-[12px] mb-12">(caso não haja disponibilidade avisaremos ou entraremos em contacto)</p>
                  <button onClick={onClose} className="w-full bg-[#69151f] text-white py-5 font-bold uppercase tracking-widest shadow-lg">Ok, fico à espera!</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}