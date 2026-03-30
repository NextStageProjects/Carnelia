import { useState } from 'react';
import { createReservation } from '../../../services/reservations';

export function Reservas() {
  // Estado para saber se o cliente já escolheu o tipo de reserva ou se mostramos os cartões
  const [selectedType, setSelectedType] = useState<'carta' | 'grupo' | null>(null);
  
  // Estados para o formulário e envio
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Dados que o cliente vai preencher
  const [formData, setFormData] = useState({
    nome_cliente: '',
    email_cliente: '',
    telefone_cliente: '',
    data_reserva: '',
    hora_reserva: '',
    numero_pessoas: 2,
    observacoes: ''
  });

  // Atualiza os dados conforme o cliente escreve
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Função que envia para o Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Chama a função que criaste no services/reservations.ts
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
    <section className="w-full bg-brand-red py-20 px-4 md:px-0 flex justify-center min-h-screen items-center">
      <div className="max-w-6xl w-full">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12">
          <span className="text-white/80 font-bold tracking-[0.3em] uppercase text-[10px]">
            Marcações
          </span>
          <h2 className="text-white text-5xl md:text-6xl font-light tracking-wide uppercase mt-2 mb-6">
            Reservas
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-white/30"></div>
            <span className="text-2xl">🐂</span>
            <div className="w-16 h-[1px] bg-white/30"></div>
          </div>

          <p className="text-white/90 italic text-sm font-light">
            Faz as tuas reservas e marca já a tua mesa.
          </p>
        </div>

        {/* 1. SE AINDA NÃO ESCOLHEU O TIPO, MOSTRA OS CARTÕES */}
        {!selectedType && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-10 animate-fade-in">
            {/* Card 1: Á Carta */}
            <div 
              onClick={() => setSelectedType('carta')}
              className="cursor-pointer bg-[#f4f2ee] rounded-[30px] border-[6px] border-brand-green p-8 md:p-12 flex flex-col md:flex-row items-center justify-between group hover:scale-[1.02] transition-transform duration-300 shadow-2xl"
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-4xl font-bold text-black mb-4 group-hover:text-[#05402d] transition-colors">Á Carta</h3>
                <p className="text-gray-700 text-lg leading-relaxed max-w-[240px]">
                  Reserva normal, escolha do prato através da carta, no restaurante.
                </p>
                <span className="inline-block mt-4 text-[#05402d] font-bold text-sm uppercase tracking-wider">➔ Fazer Marcação</span>
              </div>
              <div className="mt-8 md:mt-0 w-32 h-32 rounded-full border border-black/20 flex items-center justify-center p-4">
                <span className="text-black/40 text-[10px] uppercase font-serif text-center leading-tight italic">
                  Restaurante<br/>A Cernelha
                </span>
              </div>
            </div>

            {/* Card 2: Grupo */}
            <div 
              onClick={() => setSelectedType('grupo')}
              className="cursor-pointer bg-[#f4f2ee] rounded-[30px] border-[6px] border-brand-green p-8 md:p-12 flex flex-col md:flex-row items-center justify-between group hover:scale-[1.02] transition-transform duration-300 shadow-2xl"
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-4xl font-bold text-black mb-4 group-hover:text-[#05402d] transition-colors">Grupo</h3>
                <p className="text-gray-700 text-lg leading-relaxed max-w-[240px]">
                  Reserva coletiva com menu pré-definido e preço p/pessoa estipulado.
                </p>
                <span className="inline-block mt-4 text-[#05402d] font-bold text-sm uppercase tracking-wider">➔ Fazer Marcação</span>
              </div>
              <div className="mt-8 md:mt-0 w-40 h-40 flex items-center justify-center">
                 <span className="text-6xl group-hover:rotate-12 transition-transform duration-500">🥘</span>
              </div>
            </div>
          </div>
        )}

        {/* 2. SE JÁ ESCOLHEU, MOSTRA O FORMULÁRIO */}
        {selectedType && submitStatus !== 'success' && (
          <div className="max-w-3xl mx-auto bg-[#f4f2ee] rounded-[30px] border-[6px] border-brand-green p-8 md:p-12 shadow-2xl animate-fade-in relative">
            <button 
              onClick={() => setSelectedType(null)}
              className="absolute top-6 left-6 text-gray-500 hover:text-black font-bold uppercase text-xs tracking-wider"
            >
              ← Voltar
            </button>
            
            <h3 className="text-3xl font-bold text-center text-black mb-8 mt-4">
              Reserva {selectedType === 'carta' ? 'À Carta' : 'Para Grupo'}
            </h3>

            {submitStatus === 'error' && (
              <div className="bg-red-100 text-red-700 p-4 rounded-md mb-6 text-center text-sm font-bold">
                Ocorreu um erro ao enviar a reserva. Tente novamente ou contacte-nos por telefone.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Nome Completo *</label>
                  <input required type="text" name="nome_cliente" value={formData.nome_cliente} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#05402d] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Telefone *</label>
                  <input required type="tel" name="telefone_cliente" value={formData.telefone_cliente} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#05402d] outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Data *</label>
                  <input required type="date" name="data_reserva" value={formData.data_reserva} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#05402d] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Hora *</label>
                  <input required type="time" name="hora_reserva" value={formData.hora_reserva} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#05402d] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Pessoas *</label>
                  <input required type="number" min="1" name="numero_pessoas" value={formData.numero_pessoas} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#05402d] outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Observações / Pedidos Especiais</label>
                <textarea name="observacoes" rows={3} value={formData.observacoes} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#05402d] outline-none resize-none" placeholder="Ex: Cadeira de bebé, alergias..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#05402d] text-white font-bold text-lg uppercase tracking-widest py-4 rounded-lg hover:bg-black transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'A enviar...' : 'Confirmar Reserva'}
              </button>
            </form>
          </div>
        )}

        {/* 3. SE O ENVIO FOI UM SUCESSO, MENSAGEM VERDE */}
        {submitStatus === 'success' && (
          <div className="max-w-xl mx-auto bg-[#f4f2ee] rounded-[30px] border-[6px] border-[#05402d] p-12 text-center shadow-2xl animate-fade-in">
            <div className="text-6xl mb-6">✅</div>
            <h3 className="text-3xl font-bold text-[#05402d] mb-4">Pedido Enviado!</h3>
            <p className="text-gray-700 text-lg mb-8">
              A sua reserva foi recebida e está <strong className="uppercase">pendente</strong> de confirmação. Entraremos em contacto brevemente.
            </p>
            <button 
              onClick={() => {
                setSubmitStatus('idle');
                setSelectedType(null);
                setFormData({ ...formData, nome_cliente: '', telefone_cliente: '', observacoes: '' }); // Limpa o form
              }}
              className="bg-black text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              Voltar ao Início
            </button>
          </div>
        )}

      </div>
    </section>
  );
}