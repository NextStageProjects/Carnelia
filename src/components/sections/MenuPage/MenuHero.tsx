// src/components/sections/MenuPage/MenuHero.tsx

export function MenuHero() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  return (
    <section className="w-full bg-[#f4f2ee] pt-28 pb-10 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center">
        
        {/* M E N U - Mais pequeno e com mais ar */}
        <span 
          style={montserrat}
          className="text-[#05402d] font-bold tracking-[0.7em] uppercase text-[9px] mb-3 block"
        >
          Menu
        </span>

        {/* Título - Reduzido para ser mais elegante */}
        <h1 
          style={cinzel}
          className="text-[#69151f] text-2xl md:text-4xl font-medium uppercase tracking-[0.1em] mb-6"
        >
          Os nossos pratos
        </h1>

        <div className="flex items-center justify-center gap-5 mb-6">
          <div className="w-12 h-[1px] bg-[#05402d]/20"></div>
          <span className="text-xl opacity-60">🐂</span>
          <div className="w-12 h-[1px] bg-[#05402d]/20"></div>
        </div>

        {/* Subtítulo - Tamanho reduzido (estilo nota de rodapé) */}
        <p 
          style={cinzel}
          className="text-[#69151f] text-[10px] md:text-xs tracking-[0.15em] uppercase opacity-80"
        >
          Todos os nossos grelhados são feitos no carvão.
        </p>

      </div>
    </section>
  );
}