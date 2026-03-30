// src/components/sections/Home/Especialidades.tsx
import { useState, useEffect } from 'react';
import { getEspecialidades, type Especialidade } from '../../../services/especialidades';

export function Especialidades() {
  const [pratos, setPratos] = useState<Especialidade[]>([]);
  const [loading, setLoading] = useState(true);

  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  useEffect(() => {
    async function carregarEspecialidades() {
      try {
        const dados = await getEspecialidades();
        if (dados) setPratos(dados);
      } catch (error) {
        console.error("Falha ao carregar especialidades:", error);
      } finally {
        setLoading(false);
      }
    }
    carregarEspecialidades();
  }, []);

  return (
    <section className="w-full bg-[#f4f2ee] py-24 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[94%]">
        
        {/* TÍTULO: Centralizado com Traços Verdes #05402d */}
        <div className="flex items-center justify-center mb-16 gap-8 px-4 w-full">
          <div className="flex-1 h-[1px] bg-[#05402d]"></div>
          <h2 
            style={cinzel} 
            className="text-[#69151f] text-[34px] font-light tracking-[0.2em] uppercase whitespace-nowrap"
          >
            As nossas Especialidades!
          </h2>
          <div className="flex-1 h-[1px] bg-[#05402d]"></div>
        </div>

        {loading ? (
          <div style={montserrat} className="text-center text-[#69151f] py-12 text-[11px] uppercase">
            A carregar iguarias...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {pratos.map((prato) => (
              <div key={prato.id} className="relative aspect-[4/5] p-8">
                
                {/* A IMAGEM (com o tamanho reduzido pelo p-8) */}
                <img 
                  src={prato.imagem} 
                  alt={prato.nome}
                  className="w-full h-full object-cover shadow-lg"
                />
                
                {/* CAIXA VERMELHA (#69151f):
                    - bottom-8 e right-8: Fazem a caixa "tocar" na borda da foto.
                    - left-[55%]: Garante que ela não toca no lado esquerdo e fica com menos de metade da largura.
                */}
                <div className="absolute bottom-8 right-8 left-[30%] z-20">
                  <div className="bg-[#69151f] text-white p-5 flex flex-col justify-center min-h-[100px] shadow-xl">
                    <h3 
                      style={cinzel}
                      className="text-[12px] md:text-[14px] font-bold tracking-[0.05em] uppercase leading-tight"
                    >
                      {prato.nome}
                    </h3>
                    {prato.preco && (
                      <span 
                        style={montserrat}
                        className="text-base font-light mt-2 block opacity-90"
                      >
                        {prato.preco}
                      </span>
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