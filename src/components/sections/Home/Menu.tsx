// src/components/sections/Home/Menu.tsx
import { useState, useEffect } from 'react';
import { getPratos, type Prato } from '../../../services/menu';

export function Menu() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("CARNES DE BOI");
  const [pratos, setPratos] = useState<Prato[]>([]);
  const [loading, setLoading] = useState(true);

  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

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

  const pratosExibidos = pratos.filter(p => p.categoria === categoriaAtiva);

  return (
    /* FUNDO ALTERADO PARA #f1efea */
    <section className="w-full bg-[#f1efea] py-24 px-4 flex justify-center transition-colors duration-500">
      <div className="max-w-6xl w-full">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-16">
          <span 
            style={montserrat} 
            className="text-[#05402d] text-[11px] font-bold tracking-[0.4em] uppercase"
          >
            Menu
          </span>
          <h2 
            style={cinzel} 
            className="text-[#69151f] text-[34px] leading-tight uppercase mt-4 mb-6"
          >
            Os Nossos Pratos
          </h2>
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-12 h-[1px] bg-[#05402d]"></div>
            <span className="text-2xl">🐂</span>
            <div className="w-12 h-[1px] bg-[#05402d]"></div>
          </div>
          <p 
            style={montserrat} 
            className="text-[#69151f] text-[11px] font-medium uppercase tracking-[0.1em]"
          >
            Todos os nossos grelhados são feitos no carvão.
          </p>
        </div>

        {/* BARRA DE CATEGORIAS COM CORTES TRANSPARENTES */}
        <div className="relative mb-20">
          <div 
            className="bg-[#05402d] text-white shadow-xl overflow-x-auto"
            style={{ 
              /* Máscara que cria os furos nos 4 cantos */
              WebkitMaskImage: `
                radial-gradient(circle at 0 0, transparent 15px, black 16px),
                radial-gradient(circle at 100% 0, transparent 15px, black 16px),
                radial-gradient(circle at 0 100%, transparent 15px, black 16px),
                radial-gradient(circle at 100% 100%, transparent 15px, black 16px)
              `,
              WebkitMaskComposite: 'source-in',
              maskComposite: 'intersect',
              WebkitMaskSize: '100% 100%'
            }}
          >
            <ul className="flex items-center justify-between px-16 py-6 min-w-max gap-8">
              {[
                "VEGETARIANO", "SOPAS", "ENTRADAS", "CARNES DE BOI", 
                "CARNES DE PORCO", "CARNES DE BORREGO", "PEIXES", 
                "MARISCO", "GUARNIÇÕES EXTRAS", "BEBIDAS"
              ].map((cat) => (
                <li 
                  key={cat} 
                  onClick={() => setCategoriaAtiva(cat)}
                  style={montserrat}
                  className={`text-[10px] font-bold tracking-widest cursor-pointer transition-all
                    ${categoriaAtiva === cat ? "border-b-2 border-white pb-1" : "opacity-40 hover:opacity-100"}`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* LISTA DE PRATOS */}
        {loading ? (
          <div style={montserrat} className="text-center py-20 text-[#69151f] text-[11px] uppercase tracking-widest">
            A preparar iguarias...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {pratosExibidos.map((item) => (
              <div key={item.id} className="flex items-center gap-5 group">
                
                {/* Miniatura Circular */}
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-[1px] border-[#05402d]/10 bg-white shadow-sm">
                  <img 
                    src={item.imagem || 'https://via.placeholder.com/150'} 
                    alt={item.nome} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>

                {/* Nome, Linha Reta e Preço */}
                <div className="flex-1 flex items-end gap-2 mb-1">
                  <span 
                    style={montserrat} 
                    className="text-[#69151f] text-[11px] font-bold uppercase tracking-tight leading-tight"
                  >
                    {item.nome}
                  </span>
                  
                  {/* LINHA RETA E FINA (#05402d) */}
                  <div className="flex-1 border-b-[1px] border-solid border-[#05402d]/30 mb-1.5"></div>
                  
                  <div 
                    style={montserrat} 
                    className="flex gap-4 text-[11px] font-bold text-[#69151f] whitespace-nowrap"
                  >
                    {item.preco_meia && (
                      <span className="flex items-center gap-1">
                        <small className="font-normal text-[9px] opacity-70">½</small> {item.preco_meia}
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