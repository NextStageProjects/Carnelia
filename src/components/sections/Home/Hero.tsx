import heroBg from '/src/assets/home/hero/fotos/elementossiteacernelha1.jpg';

interface HeroProps {
  onOpenReservation: () => void;
}

export function Hero({ onOpenReservation }: HeroProps) {
  const allura = { fontFamily: "'Allura', cursive" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  return (
    <section 
      id="hero" 
      style={{ height: 'clamp(500px, 43.4vw, 833px)' }}
      className="w-full bg-black flex justify-center overflow-hidden"
    >
      <div 
        className="relative w-full max-w-[1920px] h-full flex flex-col justify-end"
        style={{
          backgroundImage: `url('${heroBg}')`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          paddingBottom: '6vw' // Espaço na base proporcional
        }}
      >
        <div className="absolute inset-0 bg-black/10 z-0"></div>

        {/* Zona de conteúdo alinhada pelo padding de 4.6vw */}
        <div 
          style={{ paddingLeft: '4.6vw', paddingRight: '4.6vw' }}
          className="relative z-10 flex flex-col items-start gap-[2vw]"
        >
          
          <h1 
            style={{ 
              ...allura, 
              fontSize: 'clamp(3rem, 5.46vw, 6.56rem)',
              lineHeight: '1.1'
            }}
            className="text-white drop-shadow-lg whitespace-nowrap font-normal"
          >
            O melhor do ribatejo
          </h1>
          
          <button 
            onClick={onOpenReservation}
            style={{ 
              width: 'clamp(200px, 18.1vw, 349px)',
              height: 'clamp(60px, 5.7vw, 110px)',
              backgroundColor: '#05402d'
            }}
            className="flex items-center justify-center hover:brightness-110 transition-all active:scale-95 shadow-2xl"
          >
            <span 
              style={{ 
                ...cinzel, 
                fontSize: 'clamp(1.2rem, 2.18vw, 2.6rem)',
                fontWeight: '400' 
              }}
              className="text-white uppercase tracking-wider"
            >
              Marcações
            </span>
          </button>
        </div>
      </div>
    </section> 
  );
}