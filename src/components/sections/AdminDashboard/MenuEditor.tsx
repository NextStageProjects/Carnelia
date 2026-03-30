import { useState, useEffect } from 'react';
import { getPratos, createPrato, updatePrato, deletePrato, uploadImagemMenu, type Prato } from '../../../services/menu';

export function MenuEditor() {
  const [pratos, setPratos] = useState<Prato[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [filtroAtivo, setFiltroAtivo] = useState<'todos' | 'home' | 'menu'>('todos');

  const [formData, setFormData] = useState({
    id: '', nome: '', preco: '', preco_meia: '', categoria: 'CARNES DE BOI', imagem: '', destaque: false
  });

  const categorias = ["VEGETARIANO", "SOPAS", "ENTRADAS", "CARNES DE BOI", "CARNES DE PORCO", "CARNES DE BORREGO", "PEIXES", "MARISCO", "GUARNIÇÕES EXTRAS", "BEBIDAS"];

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      setLoading(true);
      const dados = await getPratos();
      if (dados) setPratos(dados);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    // Mantemos a variável 'destaque' apenas para a base de dados, mas não usamos a palavra no ecrã
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    try {
      setIsSubmitting(true);
      const url = await uploadImagemMenu(e.target.files[0]);
      setFormData({ ...formData, imagem: url });
    } catch (error) {
      alert("Erro ao enviar imagem.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (formData.id) {
        await updatePrato(formData.id, formData);
      } else {
        await createPrato({
          nome: formData.nome, preco: formData.preco, preco_meia: formData.preco_meia, 
          categoria: formData.categoria, imagem: formData.imagem, destaque: formData.destaque
        });
      }
      setFormData({ id: '', nome: '', preco: '', preco_meia: '', categoria: 'CARNES DE BOI', imagem: '', destaque: false });
      carregarDados();
    } catch (error) {
      alert("Erro ao guardar o prato.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const editarPrato = (prato: Prato) => {
    setFormData({
      id: prato.id, nome: prato.nome, preco: prato.preco || '', preco_meia: prato.preco_meia || '',
      categoria: prato.categoria, imagem: prato.imagem || '', destaque: prato.destaque
    });
  };

  const apagarPrato = async (id: string) => {
    if (!confirm("Tem a certeza que deseja apagar este prato do sistema?")) return;
    try {
      await deletePrato(id);
      carregarDados();
    } catch (error) {
      alert("Erro ao apagar.");
    }
  };

  const pratosFiltrados = pratos.filter(prato => {
    if (filtroAtivo === 'home') return prato.destaque === true;
    if (filtroAtivo === 'menu') return prato.destaque === false;
    return true; 
  });

  const resetForm = () => setFormData({ id: '', nome: '', preco: '', preco_meia: '', categoria: 'CARNES DE BOI', imagem: '', destaque: false });

  if (loading) return <div className="p-12 text-[#69151f] font-bold uppercase tracking-widest text-center text-sm">A carregar dados...</div>;

  return (
    <section className="w-full animate-fade-in flex flex-col xl:flex-row gap-8">
      
      {/* ===== LADO ESQUERDO: FORMULÁRIO ===== */}
      <div className="w-full xl:w-1/3 bg-white p-8 rounded-sm shadow-sm border border-gray-200 self-start sticky top-8">
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
          <h3 className="text-lg font-serif text-[#69151f] uppercase tracking-wider">
            {formData.id ? 'Editar Prato' : 'Novo Prato'}
          </h3>
          {formData.id && (
            <button onClick={resetForm} className="text-[10px] uppercase font-bold text-gray-400 hover:text-[#69151f] tracking-widest transition-colors">
              Cancelar
            </button>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#69151f] uppercase tracking-widest">Categoria</label>
            <select name="categoria" value={formData.categoria} onChange={handleInputChange} className="w-full p-2.5 border border-gray-300 rounded-sm text-sm focus:border-[#69151f] outline-none transition-colors bg-white">
              {categorias.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#69151f] uppercase tracking-widest">Nome do Prato</label>
            <input required name="nome" value={formData.nome} onChange={handleInputChange} type="text" className="w-full p-2.5 border border-gray-300 rounded-sm text-sm focus:border-[#69151f] outline-none transition-colors" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#69151f] uppercase tracking-widest">Preço</label>
              <input name="preco" value={formData.preco} onChange={handleInputChange} type="text" placeholder="Ex: 20,50€" className="w-full p-2.5 border border-gray-300 rounded-sm text-sm focus:border-[#69151f] outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#69151f] uppercase tracking-widest">Meia Dose</label>
              <input name="preco_meia" value={formData.preco_meia} onChange={handleInputChange} type="text" placeholder="Opcional" className="w-full p-2.5 border border-gray-300 rounded-sm text-sm focus:border-[#69151f] outline-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#69151f] uppercase tracking-widest">Fotografia</label>
            <div className="flex items-center gap-4">
              {formData.imagem ? (
                <img src={formData.imagem} alt="Preview" className="h-12 w-12 object-cover rounded-sm border border-gray-300" />
              ) : (
                <div className="h-12 w-12 bg-gray-100 border border-gray-300 rounded-sm flex items-center justify-center text-gray-400 text-[9px] uppercase font-bold text-center leading-none">Sem<br/>Foto</div>
              )}
              <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-[10px] file:uppercase file:font-bold file:tracking-widest file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* TEXTO CORRIGIDO AQUI */}
          <div className="p-4 border border-gray-200 rounded-sm bg-gray-50">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="destaque" checked={formData.destaque} onChange={handleInputChange} className="w-4 h-4 mt-0.5 accent-[#69151f] rounded-sm cursor-pointer" />
              <div>
                <span className="block text-sm font-bold text-gray-800">Mostrar na Página Principal</span>
                <span className="block text-[11px] text-gray-500 mt-1 leading-relaxed">Assinale a caixa para o prato aparecer na Página Principal. Se não assinalar, aparecerá apenas na Página Menu.</span>
              </div>
            </label>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-[#05402d] text-white py-3.5 rounded-sm font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-black transition-colors disabled:opacity-50 mt-2">
            {isSubmitting ? 'A Processar...' : formData.id ? 'Guardar Alterações' : 'Adicionar ao Sistema'}
          </button>
        </form>
      </div>

      {/* ===== LADO DIREITO: TABELA ===== */}
      <div className="w-full xl:w-2/3 flex flex-col">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4 border-b border-gray-300 pb-4">
          <div>
            <h2 className="text-3xl font-serif text-[#69151f]">Menu do Restaurante</h2>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Controlo total da ementa</p>
          </div>
          
          {/* BOTÕES CORRIGIDOS AQUI */}
          <div className="flex bg-gray-200 p-0.5 rounded-sm self-start sm:self-auto">
            <button onClick={() => setFiltroAtivo('todos')} className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-colors ${filtroAtivo === 'todos' ? 'bg-white text-[#69151f] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
              Todos os Pratos
            </button>
            <button onClick={() => setFiltroAtivo('home')} className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-colors ${filtroAtivo === 'home' ? 'bg-white text-[#69151f] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
              Página Principal
            </button>
            <button onClick={() => setFiltroAtivo('menu')} className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-colors ${filtroAtivo === 'menu' ? 'bg-white text-[#69151f] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
              Página Menu
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden flex-1">
          <table className="w-full text-left">
            <thead className="bg-[#f4f2ee] text-[#69151f] text-[10px] uppercase font-bold tracking-widest border-b border-gray-200">
              <tr>
                <th className="py-4 px-6">Identificação do Prato</th>
                <th className="py-4 px-6">Valores</th>
                <th className="py-4 px-6 text-center">Onde Aparece</th>
                <th className="py-4 px-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pratosFiltrados.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-gray-400 text-sm italic">
                    Nenhum registo encontrado.
                  </td>
                </tr>
              ) : (
                pratosFiltrados.map((prato) => (
                  <tr key={prato.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 flex items-center gap-4">
                      {prato.imagem ? (
                        <img src={prato.imagem} className="w-10 h-10 rounded-sm object-cover border border-gray-200" alt="" />
                      ) : (
                        <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-sm"></div>
                      )}
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{prato.nome}</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">{prato.categoria}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-bold text-[#05402d] text-sm">{prato.preco || '-'}</span>
                      {prato.preco_meia && <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block mt-0.5">Meia: {prato.preco_meia}</span>}
                    </td>
                    {/* ETIQUETAS CORRIGIDAS AQUI */}
                    <td className="py-4 px-6 text-center">
                      {prato.destaque ? (
                        <span className="inline-block px-2 py-1 bg-gray-200 border border-gray-300 text-gray-700 text-[9px] font-bold uppercase tracking-widest rounded-sm">
                          Pág. Principal
                        </span>
                      ) : (
                        <span className="inline-block px-2 py-1 bg-gray-50 border border-gray-200 text-gray-400 text-[9px] font-bold uppercase tracking-widest rounded-sm">
                          Pág. Menu
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <button onClick={() => editarPrato(prato)} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-[#05402d] transition-colors mr-4">
                        Editar
                      </button>
                      <button onClick={() => apagarPrato(prato.id)} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-red-600 transition-colors">
                        Apagar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}