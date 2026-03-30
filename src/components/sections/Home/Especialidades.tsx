import { useState, useEffect } from 'react';
import { getEspecialidades, type Especialidade } from '../../../services/especialidades';

export function Especialidades() {
  const [pratos, setPratos] = useState<Especialidade[]>([]);
  const [loading, setLoading] = useState(true);

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
    // Reduzi o padding vertical de py-20 para py-12
    <section className="w-full bg-[#f4f2ee] py-12 flex justify-end">
      <div className="w-full max-w-[94%] ml-auto pr-0">
        
        {/* Reduzi a margem inferior do título de mb-16 para mb-10 */}
        <div className="flex items-center mb-10 gap-6 pr-12">
          <h2 className="text-brand-red text-2xl md:text-3xl font-light tracking-[0.2em] uppercase whitespace-nowrap">
            As Nossas Especialidades!
          </h2>
          <div className="flex-1 h-[1px] bg-brand-green/20"></div>
        </div>

        {loading ? (
          <div className="text-center text-brand-red py-12">A carregar especialidades...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3">
            {pratos.map((prato) => (
              // Mudei a proporção de aspect-[3/4.5] (muito alto) para aspect-[4/5] (mais equilibrado)
              <div key={prato.id} className="relative aspect-[4/5] overflow-hidden group border-l-[1px] border-[#f4f2ee]/10 bg-black">
                
                <img 
                  src={prato.imagem} 
                  alt={prato.nome}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Ajustei a caixa vermelha: menor padding (p-5) e menor altura mínima (100px) */}
                <div className="absolute bottom-0 right-0 left-8">
                  <div className="bg-brand-red text-white p-4 md:p-5 flex flex-col justify-center min-h-[100px] shadow-2xl">
                    <h3 className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] leading-tight uppercase">
                      {prato.nome}
                    </h3>
                    {prato.preco && (
                      <span className="text-xl font-light mt-2 block">{prato.preco}</span>
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