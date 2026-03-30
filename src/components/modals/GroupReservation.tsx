import { useState } from 'react';
import { createReservation } from '../../services/reservations';

export function GroupReservation({ onClose }: { onClose?: () => void }) {
  const [menuSelecionado, setMenuSelecionado] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    { id: 1, titulo: "MENU 1", desc: "Entrada, prato principal e bebida à discrição.", preco: "23€" },
    { id: 2, titulo: "MENU 2", desc: "Entrada, prato principal, bebida à discrição e sobremesa.", preco: "27€" },
    { id: 3, titulo: "MENU 3", desc: "Entrada, prato principal de carne, prato principal de peixe, bebida à discrição e sobremesa.", preco: "32€" },
    { id: 4, titulo: "MENU PERSONALIZADO", desc: "Ementa personalizável", preco: "preço € sob consulta" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const menuInfo = menuSelecionado ? `[Menu: ${menus.find(m => m.id === menuSelecionado)?.titulo}] ` : '';
    
    try {
      await createReservation({
        nome_cliente: formData.nome,
        telefone_cliente: formData.telefone,
        email_cliente: formData.email,
        data_reserva: formData.data,
        hora_reserva: formData.hora,
        numero_pessoas: Number(formData.pessoas),
        tipo_reserva: 'grupo',
        observacoes: menuInfo + formData.detalhes
      });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="min-h-screen bg-[#f4f2ee] py-12 px-4 flex items-center justify-center">
        <div className="bg-white rounded-[30px] border-[6px] border-[#05402d] p-12 text-center shadow-2xl max-w-lg w-full">
          <div className="text-6xl mb-6">✅</div>
          <h3 className="text-3xl font-bold text-[#05402d] mb-4">Pedido Enviado!</h3>
          <p className="text-gray-700 mb-8 font-medium">A nossa equipa entrará em contacto em breve.</p>
          <button onClick={onClose} className="bg-black text-white px-8 py-3 rounded-lg font-bold uppercase">Fechar</button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f4f2ee] py-12 px-4 md:px-0 flex justify-center">
      <div className="max-w-4xl w-full">
        <button onClick={onClose} className="text-brand-red text-[10px] font-bold uppercase mb-8">← VOLTAR</button>
        
        <div className="text-center mb-16">
          <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-[10px]">RESERVA EM GRUPO</span>
          <h2 className="text-brand-red text-4xl md:text-5xl font-serif uppercase mt-2 mb-6">Eventos & Celebrações</h2>
          <p className="text-brand-red/80 italic text-[13px]">Preencha os detalhes e entraremos em contacto.</p>
        </div>

        <form className="space-y-12" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-4">
            <input required name="nome" placeholder="Nome *" onChange={handleInputChange} className="bg-transparent border-b border-black/40 p-2 outline-none" />
            <input required name="telefone" placeholder="Telemóvel *" onChange={handleInputChange} className="bg-transparent border-b border-black/40 p-2 outline-none" />
            <input name="email" placeholder="Email" onChange={handleInputChange} className="bg-transparent border-b border-black/40 p-2 outline-none" />
            <input required name="hora" type="time" onChange={handleInputChange} className="bg-transparent border-b border-black/40 p-2 outline-none" />
            <input required name="data" type="date" onChange={handleInputChange} className="bg-transparent border-b border-black/40 p-2 outline-none" />
            <input required name="pessoas" type="number" placeholder="Nº Pessoas *" onChange={handleInputChange} className="bg-transparent border-b border-black/40 p-2 outline-none" />
          </div>

          <div className="px-4">
            <h3 className="text-[10px] font-bold text-brand-green uppercase mb-6">ESCOLHA O MENU</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menus.map((menu) => (
                <div key={menu.id} onClick={() => setMenuSelecionado(menu.id)} className={`p-6 cursor-pointer border-2 transition-all ${menuSelecionado === menu.id ? 'border-brand-red bg-white' : 'border-brand-red/10'}`}>
                  <p className="text-[10px] font-bold text-brand-green uppercase">{menu.titulo}</p>
                  <p className="text-xs text-gray-600 my-2">{menu.desc}</p>
                  <p className="text-sm font-bold">{menu.preco}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="px-4">
            <textarea name="detalhes" placeholder="Detalhes extra..." onChange={handleInputChange} className="w-full bg-transparent border-b border-black/40 p-2 outline-none min-h-[100px] resize-none" />
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-[#63101d] text-white py-4 font-bold uppercase hover:bg-black transition-all">
            {isSubmitting ? 'A ENVIAR...' : 'SOLICITAR RESERVA EM GRUPO'}
          </button>
        </form>
      </div>
    </section>
  );
}