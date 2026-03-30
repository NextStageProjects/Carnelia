// src/components/sections/Home/Reservas.tsx
import { useState } from 'react';
import { createReservation } from '../../../services/reservations';

// Importação do ícone da carta
import iconeCarta from '../../../assets/home/reservas/icones/icone-da-parte-a-carta.png';

export function Reservas() {
  const [selectedType, setSelectedType] = useState<'carta' | 'grupo' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  const [formData, setFormData] = useState({
    nome_cliente: '',
    email_cliente: '',
    telefone_cliente: '',
    data_reserva: '',
    hora_reserva: '',
    numero_pessoas: 2,
    observacoes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await createReservation({
        ...formData,
        numero_pessoas: Number(formData.numero_pessoas),
        tipo_reserva: selectedType!
      });
      setSubmitStatus('success');
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    /* Reduzi o py-24 para py-16 para a secção não parecer tão alta */
    <section className="w-full bg-[#69151f] py-16 px-4 md:px-0 flex justify-center items-center">
      <div className="max-w-6xl w-full">
        
        {/* CABEÇALHO DA SEÇÃO (Mais compacto) */}
        <div className="text-center mb-10">
          <span style={montserrat} className="text-white text-[11px] font-bold tracking-[0.4em] uppercase">
            Marcações
          </span>
          <h2 style={cinzel} className="text-white text-[34px] leading-tight uppercase mt-2 mb-4">
            Reservas
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-12 h-[1px] bg-[#05402d]"></div>
            <span className="text-xl">🐂</span>
            <div className="w-12 h-[1px] bg-[#05402d]"></div>
          </div>

          <p style={montserrat} className="text-white/80 text-[10px] uppercase tracking-widest font-light">
            Faz as tuas reservas e marca já a tua mesa.
          </p>
        </div>

        {/* 1. SELEÇÃO DE TIPO (CARDS) */}
        {!selectedType && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4 md:px-10">
            
            {/* Card 1: Á Carta com a imagem local */}
            <div 
              onClick={() => setSelectedType('carta')}
              className="cursor-pointer bg-[#f4f2ee] rounded-[30px] border-[6px] border-[#05402d] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between group hover:scale-[1.01] transition-transform duration-300 shadow-2xl"
            >
              <div className="flex-1 text-center md:text-left">
                <h3 style={montserrat} className="text-[30px] font-bold text-black mb-3">À Carta</h3>
                <p style={montserrat} className="text-gray-700 text-[13px] leading-relaxed max-w-[240px]">
                  Reserva normal, escolha do prato através da carta, no restaurante.
                </p>
                <span style={montserrat} className="inline-block mt-4 text-[#05402d] font-bold text-[10px] uppercase tracking-widest">➔ Fazer Marcação</span>
              </div>
              <div className="mt-6 md:mt-0 w-28 h-28 flex items-center justify-center overflow-hidden">
                <img 
                  src={iconeCarta} 
                  alt="Ícone À Carta" 
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Card 2: Grupo com Ícone de Touro */}
            <div 
              onClick={() => setSelectedType('grupo')}
              className="cursor-pointer bg-[#f4f2ee] rounded-[30px] border-[6px] border-[#05402d] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between group hover:scale-[1.01] transition-transform duration-300 shadow-2xl"
            >
              <div className="flex-1 text-center md:text-left">
                <h3 style={montserrat} className="text-[30px] font-bold text-black mb-3">Grupo</h3>
                <p style={montserrat} className="text-gray-700 text-[13px] leading-relaxed max-w-[240px]">
                  Reserva coletiva com menu pré-definido e preço p/pessoa estipulado.
                </p>
                <span style={montserrat} className="inline-block mt-4 text-[#05402d] font-bold text-[10px] uppercase tracking-widest">➔ Fazer Marcação</span>
              </div>
              <div className="mt-6 md:mt-0 w-32 h-32 flex items-center justify-center">
                 {/* ÍCONE DE TOURO PARA GRUPO */}
                 <span className="text-7xl group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">🐂</span>
              </div>
            </div>
          </div>
        )}

        {/* 2. FORMULÁRIO (Ajustado para ocupar menos espaço vertical) */}
        {selectedType && submitStatus !== 'success' && (
          <div className="max-w-2xl mx-auto bg-[#f4f2ee] rounded-[30px] border-[6px] border-[#05402d] p-8 md:p-10 shadow-2xl relative animate-fade-in">
            <button 
              onClick={() => setSelectedType(null)}
              style={montserrat}
              className="absolute top-4 left-6 text-[#69151f] hover:text-black font-bold uppercase text-[10px] tracking-wider"
            >
              ← Voltar
            </button>
            
            <h3 style={cinzel} className="text-2xl font-bold text-center text-black mb-6 mt-2 uppercase">
              Reserva {selectedType === 'carta' ? 'À Carta' : 'Para Grupo'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label style={montserrat} className="block text-[10px] font-bold text-gray-700 mb-1 uppercase tracking-wide">Nome Completo *</label>
                  <input required type="text" name="nome_cliente" value={formData.nome_cliente} onChange={handleInputChange} className="w-full p-2.5 rounded-lg border border-gray-300 outline-none focus:border-[#05402d]" />
                </div>
                <div>
                  <label style={montserrat} className="block text-[10px] font-bold text-gray-700 mb-1 uppercase tracking-wide">Telefone *</label>
                  <input required type="tel" name="telefone_cliente" value={formData.telefone_cliente} onChange={handleInputChange} className="w-full p-2.5 rounded-lg border border-gray-300 outline-none focus:border-[#05402d]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label style={montserrat} className="block text-[10px] font-bold text-gray-700 mb-1 uppercase tracking-wide">Data *</label>
                  <input required type="date" name="data_reserva" value={formData.data_reserva} onChange={handleInputChange} className="w-full p-2.5 rounded-lg border border-gray-300" />
                </div>
                <div>
                  <label style={montserrat} className="block text-[10px] font-bold text-gray-700 mb-1 uppercase tracking-wide">Hora *</label>
                  <input required type="time" name="hora_reserva" value={formData.hora_reserva} onChange={handleInputChange} className="w-full p-2.5 rounded-lg border border-gray-300" />
                </div>
                <div>
                  <label style={montserrat} className="block text-[10px] font-bold text-gray-700 mb-1 uppercase tracking-wide">Pessoas *</label>
                  <input required type="number" min="1" name="numero_pessoas" value={formData.numero_pessoas} onChange={handleInputChange} className="w-full p-2.5 rounded-lg border border-gray-300" />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                style={montserrat}
                className="w-full bg-[#05402d] text-white font-bold text-xs uppercase tracking-[0.2em] py-4 rounded-lg hover:bg-[#69151f] transition-all disabled:opacity-50 mt-2"
              >
                {isSubmitting ? 'A enviar...' : 'Confirmar Reserva'}
              </button>
            </form>
          </div>
        )}

        {/* 3. SUCESSO (Mensagem) */}
        {submitStatus === 'success' && (
          <div className="max-w-xl mx-auto bg-[#f4f2ee] rounded-[30px] border-[6px] border-[#05402d] p-10 text-center shadow-2xl">
            <div className="text-5xl mb-4">✅</div>
            <h3 style={cinzel} className="text-2xl font-bold text-[#05402d] mb-3">Pedido Enviado!</h3>
            <p style={montserrat} className="text-gray-700 text-[11px] mb-6 uppercase tracking-widest">
              Entraremos em contacto brevemente.
            </p>
            <button 
              onClick={() => { setSubmitStatus('idle'); setSelectedType(null); }}
              style={montserrat}
              className="bg-[#69151f] text-white px-8 py-3 rounded-lg font-bold uppercase text-xs tracking-wider"
            >
              Voltar
            </button>
          </div>
        )}
      </div>
    </section>
  );
}