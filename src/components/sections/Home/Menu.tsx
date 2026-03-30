import { useState, useEffect } from 'react';
import { getPratos, type Prato } from '../../../services/menu';

export function Menu() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("CARNES DE BOI");
  const [pratos, setPratos] = useState<Prato[]>([]);
  const [loading, setLoading] = useState(true);

  // As categorias continuam fixas para garantir a ordem certa no design
  const categorias = [
    "VEGETARIANO", "SOPAS", "ENTRADAS", "CARNES DE BOI", 
    "CARNES DE PORCO", "CARNES DE BORREGO", "PEIXES", 
    "MARISCO", "GUARNIÇÕES EXTRAS", "BEBIDAS"
  ];

  // Vai buscar os pratos à base de dados quando a página carrega
  useEffect(() => {
    async function carregarMenu() {
      try {
        const dados = await getPratos();
        if (dados) setPratos(dados);
      } catch (error) {
        console.error("Erro ao carregar o menu:", error);
      } finally {
        setLoading(false);
      }
    }
    carregarMenu();
  }, []);

  // Filtra os pratos com base na categoria que o utilizador clicou
  const pratosExibidos = pratos.filter(p => p.categoria === categoriaAtiva);

  return (
    <section className="w-full bg-[#f4f2ee] py-20 px-4 flex justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-brand-green font-bold tracking-[0.2em] uppercase text-xs">Menu</span>
          <h2 className="text-brand-red text-4xl md:text-5xl font-light tracking-wide uppercase mt-2 mb-4">
            Os Nossos Pratos
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-[1px] bg-brand-green/30"></div>
            <span className="text-2xl">🐂</span>
            <div className="w-20 h-[1px] bg-brand-green/30"></div>
          </div>
        </div>

        {/* Barra de Categorias */}
        <div className="bg-brand-green text-white rounded-sm mb-16 overflow-x-auto shadow-lg">
          <ul className="flex items-center justify-between px-6 py-5 min-w-max gap-8">
            {categorias.map((cat) => (
              <li 
                key={cat} 
                onClick={() => setCategoriaAtiva(cat)}
                className={`text-[10px] font-bold tracking-tighter cursor-pointer transition-all
                  ${categoriaAtiva === cat ? "border-b-2 border-white pb-1" : "opacity-40 hover:opacity-100"}`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Lista de Pratos (A ler da Base de Dados!) */}
        {loading ? (
          <div className="text-center py-10 text-brand-red font-bold">A carregar os pratos...</div>
        ) : pratosExibidos.length === 0 ? (
          <div className="text-center py-10 text-gray-500 italic">Ainda não há pratos nesta categoria.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 min-h-[300px]">
            {pratosExibidos.map((item) => (
              <div key={item.id} className="flex items-center gap-4 group">
                
                {/* Miniatura Circular */}
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-brand-green/10 bg-white">
                  <img 
                    src={item.imagem || 'https://via.placeholder.com/150?text=Sem+Foto'} 
                    alt={item.nome} 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Nome e Preço */}
                <div className="flex-1 flex items-end gap-2 mb-1">
                  <span className="text-[#5a4a42] text-sm font-bold uppercase tracking-tight leading-tight">
                    {item.nome}
                  </span>
                  <div className="flex-1 border-b border-brand-green/20 border-dotted mb-1.5"></div>
                  
                  <div className="flex gap-4 text-sm font-bold text-brand-red whitespace-nowrap">
                    {item.preco_meia && (
                      <span className="flex items-center gap-1 text-gray-900">
                        <small className="font-normal text-[10px]">½</small> {item.preco_meia}
                      </span>
                    )}
                    {item.preco && (
                      <span>{item.preco}</span>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}