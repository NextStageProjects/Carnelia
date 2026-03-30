export function Galeria() {
  return (
    <section className="w-full bg-[#f4f2ee] py-20 px-4 flex justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Cabeçalho da Galeria */}
        <div className="text-center mb-12">
          <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-[10px]">
            Galeria
          </span>
          <h2 className="text-brand-red text-4xl md:text-5xl font-light tracking-wide uppercase mt-2 mb-6">
            O Nosso Espaço
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-brand-green/30"></div>
            <span className="text-2xl">🐂</span>
            <div className="w-16 h-[1px] bg-brand-green/30"></div>
          </div>

          <p className="text-brand-red/80 italic text-sm">
            Entra dentro do nosso mundo de culinária tradicional e ambiente fantástico.
          </p>
        </div>

        {/* Layout de Mosaico (Grid Assimétrico) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* LADO ESQUERDO (2 Colunas no Desktop) */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* Foto Grande da Entrada */}
            <div className="aspect-[3/4] overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                alt="Entrada A Cernelha"
              />
            </div>
            
            {/* Duas fotos pequenas em baixo da entrada */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400" className="w-full h-full object-cover" alt="Interior 1" />
              </div>
              <div className="aspect-square overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1550966842-28c2e27ad271?q=80&w=400" className="w-full h-full object-cover" alt="Detalhe" />
              </div>
            </div>
          </div>

          {/* LADO DIREITO (2 Colunas no Desktop) */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* Duas fotos pequenas no topo direito */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=400" className="w-full h-full object-cover" alt="Esplanada" />
              </div>
              <div className="aspect-square overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400" className="w-full h-full object-cover" alt="Esplanada 2" />
              </div>
            </div>

            {/* Foto Grande do Salão/Interior */}
            <div className="flex-1 aspect-square md:aspect-auto overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                alt="Salão de Jantar"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}