import { useState, useEffect } from 'react';
import { getEspecialidades, updateEspecialidade, uploadImagemEspecialidade, type Especialidade } from '../../../services/especialidades';

export function SpecialtiesEditor() {
  const [pratos, setPratos] = useState<Especialidade[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      setLoading(true);
      const dados = await getEspecialidades();
      if (dados) setPratos(dados);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (id: string, campo: keyof Especialidade, valor: string) => {
    setPratos(pratos.map(prato => 
      prato.id === id ? { ...prato, [campo]: valor } : prato
    ));
  };

  // Nova função para tratar do ficheiro quando o Admin escolhe uma foto
  const handleImageUpload = async (id: string, file: File) => {
    try {
      setSavingId(id); // Mostra que está a carregar
      const novaUrl = await uploadImagemEspecialidade(file); // Envia para o Supabase
      handleChange(id, 'imagem', novaUrl); // Atualiza a foto no ecrã automaticamente
    } catch (error) {
      alert('Erro ao fazer upload da imagem. Verifica se o ficheiro é válido.');
    } finally {
      setSavingId(null);
    }
  };

  const handleGuardar = async (prato: Especialidade) => {
    try {
      setSavingId(prato.id);
      await updateEspecialidade(prato.id, {
        nome: prato.nome,
        preco: prato.preco,
        imagem: prato.imagem
      });
      alert('Especialidade guardada com sucesso! ✅');
    } catch (error) {
      alert('Erro ao guardar as alterações.');
    } finally {
      setSavingId(null);
    }
  };

  if (loading) return <div className="p-10 text-[#69151f] font-bold">A carregar especialidades...</div>;

  return (
    <section className="w-full animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl font-serif text-[#69151f]">Especialidades</h2>
        <p className="text-gray-600 mt-1">Edição de imagens e textos dos 3 pratos em destaque.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pratos.map((prato, index) => (
          <div key={prato.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
              <h3 className="font-bold text-[#69151f] text-sm uppercase tracking-wider">
                Destaque #{index + 1}
              </h3>
            </div>

            <div className="h-48 w-full bg-gray-100 relative group">
              <img 
                src={prato.imagem} 
                alt="Preview" 
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Sem+Foto' }}
              />
            </div>

            <div className="p-5 flex-1 flex flex-col gap-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Nome do Prato</label>
                <input 
                  type="text" 
                  value={prato.nome}
                  onChange={(e) => handleChange(prato.id, 'nome', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-[#69151f]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Preço (Opcional)</label>
                <input 
                  type="text" 
                  value={prato.preco || ''}
                  onChange={(e) => handleChange(prato.id, 'preco', e.target.value)}
                  placeholder="Ex: 15,50€"
                  className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-[#69151f]"
                />
              </div>

              {/* AQUI ESTÁ A MAGIA DO UPLOAD */}
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Alterar Foto</label>
                <input 
                  type="file" 
                  accept="image/*" // Só aceita imagens
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleImageUpload(prato.id, e.target.files[0]);
                    }
                  }}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-bold file:bg-[#05402d] file:text-white hover:file:bg-black cursor-pointer transition-colors"
                />
                <p className="text-[10px] text-gray-400 mt-1">A foto é enviada logo ao ser escolhida.</p>
              </div>

              <button 
                onClick={() => handleGuardar(prato)}
                disabled={savingId === prato.id}
                className="mt-auto w-full bg-[#69151f] text-white py-3 rounded font-bold uppercase tracking-widest text-xs hover:bg-black transition-colors disabled:opacity-50"
              >
                {savingId === prato.id ? 'A Carregar...' : 'Guardar Textos'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}