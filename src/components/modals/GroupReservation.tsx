// src/components/modals/GroupReservation.tsx
import { useState, useEffect } from 'react';
import { createReservation } from '../../services/reservations';

// Ícones
import imgData from '../../assets/modals/GroupReservation/data.png';
import imgDetalhes from '../../assets/modals/GroupReservation/detalhes do evento.png';
import imgEmail from '../../assets/modals/GroupReservation/email.png';
import imgHorario from '../../assets/modals/GroupReservation/horario.png';
import imgEspera from '../../assets/modals/GroupReservation/icone-de-espera.png';
import imgPessoas from '../../assets/modals/GroupReservation/pessoas.png';
import imgResponsavel from '../../assets/modals/GroupReservation/responsavel.png';
import imgTelemovel from '../../assets/modals/GroupReservation/telemovel.png';
import imgTouro from '../../assets/home/touro/tourro.png';

export function GroupReservation({ onClose }: { onClose?: () => void }) {
  const [menuSelecionado, setMenuSelecionado] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  // BLOQUEIO DE SCROLL DA PÁGINA PRINCIPAL
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    hora: '',
    data: '',
    pessoas: '',
    detalhes: ''
  });

  const menus = [
    { id: 1, titulo: "MENU 1", desc: "Entrada, prato principal e bebida à discrição.", preco: "23€", sub: "p/pessoa" },
    { id: 3, titulo: "MENU 3", desc: "Entrada, prato principal de carne, prato principal de peixe, bebida à discrição e sobremesa.", preco: "32€", sub: "p/pessoa" },
    { id: 2, titulo: "MENU 2", desc: "Entrada, prato principal, bebida à discrição e sobremesa.", preco: "27€", sub: "p/pessoa" },
    { id: 4, titulo: "MENU PERSONALIZADO", desc: "Ementa personalizável", preco: "preço €", sub: "sob consulta" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const menuEscolhido = menus.find(m => m.id === menuSelecionado);
    const observacaoFinal = `${menuEscolhido ? `[MENU: ${menuEscolhido.titulo}] ` : ''}${formData.detalhes || ''}`;
    
    try {
      await createReservation({
        nome_cliente: formData.nome,
        telefone_cliente: formData.telefone,
        email_cliente: formData.email,
        numero_pessoas: Number(formData.pessoas),
        data_reserva: formData.data,
        hora_reserva: formData.hora,
        tipo_reserva: 'grupo',
        observacoes: observacaoFinal
      });
      setSubmitStatus('success');
    } catch (error) {
      console.error("Erro na reserva de grupo:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // =========================================================
  // ESTADO DE SUCESSO (TELA CHEIA)
  // =========================================================
  if (submitStatus === 'success') {
    return (
      <section className="fixed inset-0 z-[150] flex flex-col items-center justify-center p-6 text-center bg-[#f4f2ee] animate-in fade-in zoom-in duration-300">
        <div className="relative w-full max-w-md flex flex-col items-center">
          
          <button onClick={onClose} className="absolute -top-10 -right-2 text-[#69151f] text-2xl font-light">✕</button>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#05402d]"></div>
            <img src={imgTouro} alt="Touro" className="h-6 w-auto mix-blend-multiply" />
            <div className="w-12 h-[1px] bg-[#05402d]"></div>
          </div>

          <h3 style={cinzel} className="text-[#69151f] text-[22px] md:text-[24px] font-bold uppercase leading-tight mb-10 tracking-wider">
            Á espera da confirmação <br /> da sua reserva!
          </h3>

          <img src={imgEspera} alt="Espera" className="w-28 h-auto mb-10" />

          <p style={montserrat} className="text-black text-[14px] md:text-[15px] font-bold leading-snug mb-4 px-4">
            Estamos a confirmar a disponibilidade de mesas no nosso espaço para validar a sua reserva, dentro de alguns minutos será lhe enviado um SMS com a confirmação da mesma.
          </p>

          <p style={montserrat} className="text-black/70 text-[12px] mb-12">
            (caso não haja disponibilidade avisaremos <br /> ou entraremos em contacto)
          </p>

          <button onClick={onClose} style={montserrat} className="w-full bg-[#69151f] text-white py-5 font-bold text-sm uppercase tracking-widest shadow-lg rounded-sm">
            Ok, fico à espera!
          </button>
        </div>
      </section>
    );
  }

  // =========================================================
  // FORMULÁRIO PRINCIPAL (TELA CHEIA)
  // =========================================================
  return (
    <section className="fixed inset-0 z-[120] bg-[#f4f2ee] w-full h-full overflow-y-auto pb-10">
      
      {/* HEADER / VOLTAR */}
      <div className="pt-6 px-6 flex items-center mb-10 max-w-7xl mx-auto">
        <button onClick={onClose} className="text-[#69151f] text-3xl mr-4 hover:scale-110 transition-transform">‹</button>
        <div className="flex-1 text-center">
          <span style={montserrat} className="text-[#05402d] text-[10px] font-extrabold uppercase tracking-[0.3em]">Reserva em Grupo</span>
        </div>
      </div>

      <div className="px-6 flex flex-col items-center max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 style={cinzel} className="text-[#69151f] text-[32px] md:text-[36px] leading-tight uppercase mb-4">Eventos & Celebrações</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#69151f]/20"></div>
            <img src={imgTouro} alt="Touro" className="h-7 w-auto mix-blend-multiply opacity-80" />
            <div className="w-12 h-[1px] bg-[#69151f]/20"></div>
          </div>
          <p style={montserrat} className="text-[#69151f]/70 font-medium text-[12px] leading-relaxed max-w-xs mx-auto">
            Preencha os detalhes para o seu evento. A nossa equipa entrará em contacto para personalizar tudo ao pormenor.
          </p>
        </div>

        <form className="w-full max-w-lg space-y-10" onSubmit={handleSubmit}>
          
          {/* CAMPOS */}
          <div className="space-y-8">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <img src={imgResponsavel} alt="icon" className="w-4 h-4" />
                <label style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-widest">Nome</label>
              </div>
              <input required name="nome" placeholder="Nome completo" onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 pb-2 pt-1 outline-none text-black text-sm" />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <img src={imgEmail} alt="icon" className="w-4 h-4" />
                <label style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-widest">Email</label>
              </div>
              <input name="email" placeholder="Email" onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 pb-2 pt-1 outline-none text-black text-sm" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <img src={imgData} alt="icon" className="w-4 h-4" />
                  <label style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-widest">Data</label>
                </div>
                <input required name="data" type="date" onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 pb-2 pt-1 outline-none text-black text-sm" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <img src={imgTelemovel} alt="icon" className="w-4 h-4" />
                  <label style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-widest">Telemóvel</label>
                </div>
                <input required name="telefone" placeholder="Contacto" onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 pb-2 pt-1 outline-none text-black text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <img src={imgHorario} alt="icon" className="w-4 h-4" />
                  <label style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-widest">Horário</label>
                </div>
                <input required name="hora" type="time" onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 pb-2 pt-1 outline-none text-black text-sm" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <img src={imgPessoas} alt="icon" className="w-4 h-4" />
                  <label style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-widest">Pessoas</label>
                </div>
                <input required name="pessoas" type="number" onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 pb-2 pt-1 outline-none text-black text-sm" />
              </div>
            </div>
          </div>

          {/* MENU SELECTION */}
          <div className="space-y-4">
            <h3 style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-[0.2em] mb-4">MENU</h3>
            <div className="space-y-3">
              {menus.map((menu) => (
                <div key={menu.id} onClick={() => setMenuSelecionado(menu.id)} 
                  className={`p-4 cursor-pointer border rounded-sm transition-all ${menuSelecionado === menu.id ? 'border-[#69151f] bg-white ring-1 ring-[#69151f]/30' : 'border-[#69151f]/20 bg-white/40'}`}>
                  <p className="text-[9px] font-bold text-[#05402d] uppercase mb-1 border-b border-[#69151f]/10 text-center">{menu.titulo}</p>
                  <div className="flex justify-between items-center"><p className="text-[11px] text-gray-700 flex-1">{menu.desc}</p><div className="text-right"><p className="text-[13px] font-bold">{menu.preco}</p><p className="text-[9px]">{menu.sub}</p></div></div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src={imgDetalhes} alt="icon" className="w-4 h-4" />
              <label style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-widest">Detalhes do Evento</label>
            </div>
            <textarea name="detalhes" placeholder="Preferências alimentares, tipo de evento..." onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 pb-2 pt-1 outline-none text-black text-sm min-h-[80px]" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <button type="submit" disabled={isSubmitting} style={montserrat} className="w-full bg-[#69151f] text-white py-5 font-bold uppercase tracking-[0.2em] shadow-lg disabled:opacity-50">
              {isSubmitting ? 'A PROCESSAR...' : 'SOLICITAR RESERVA'}
            </button>
            <p style={montserrat} className="text-[9px] font-bold text-[#69151f]/60 uppercase tracking-[0.1em] text-center">A NOSSA EQUIPA ENTRARÁ EM CONTACTO EM ATÉ 12 HORAS</p>
          </div>
        </form>
      </div>
    </section>
  );
}