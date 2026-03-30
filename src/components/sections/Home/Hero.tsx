// src/components/sections/Home/Hero.tsx
import heroBg from '/src/assets/home/hero/fotos/elementossiteacernelha1.jpg';

interface HeroProps {
  onOpenReservation: () => void;
}

export function Hero({ onOpenReservation }: HeroProps) {
  // Definição das fontes
  const allura = { fontFamily: "'Allura', cursive" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  return (
    <section 
      className="relative w-full h-[90vh] flex items-end justify-start px-12 md:px-32 lg:px-48 pb-20 md:pb-32"
      style={{
        backgroundImage: `url('${heroBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative z-10 flex flex-col items-start gap-8 max-w-4xl">
        
        {/* Título com a fonte Allura aplicada aqui */}
        <h1 
          style={allura}
          className="text-white text-[56px] leading-none drop-shadow-lg"
        >
          O melhor do ribatejo
        </h1>
        
        <button 
          onClick={onOpenReservation}
          style={cinzel}
          className="bg-[#05402d] text-white text-[22px] px-10 py-4 tracking-[0.1em] uppercase hover:bg-[#043324] transition-all shadow-2xl"
        >
          Marcações
        </button>

      </div>
    </section>
  );
}