import foto1 from "../../../assets/home/galeria/fotos/1.jpeg";
import foto2 from "../../../assets/home/galeria/fotos/2.jpeg";
import foto3 from "../../../assets/home/galeria/fotos/3.jpeg";
import foto4 from "../../../assets/home/galeria/fotos/4.jpeg";
import foto5 from "../../../assets/home/galeria/fotos/5.jpeg";
import foto6 from "../../../assets/home/galeria/fotos/6.jpeg";
import imgTouro from "../../../assets/home/touro/tourro.png";

export function Galeria() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  // FÓRMULA DE PRECISÃO: (Pixel / 1920) * 100
  const pctW = (px: number) => `${(px / 1920 * 100).toFixed(4)}%`;
  const pctH = (px: number) => `${(px / 1920 * 100).toFixed(4)}%`;

  return (
    <section id="galeria" className="w-full bg-[#ffffff] flex justify-center overflow-hidden">
      
      {/* Container Mestre: Definimos a altura baseada na largura (Aspect Ratio 1920x1726) */}
      <div 
        className="relative w-full max-w-[1920px] shadow-sm"
        style={{ height: 'auto', aspectRatio: '1920 / 1650', minHeight: '1100px' }}
      >
        
        {/* ========================================================= */}
        {/* CABEÇALHO (Centrado via Percentagem)                      */}
        {/* ========================================================= */}

        <div style={{ position: 'absolute', top: pctH(47), width: '100%', textAlign: 'center', ...montserrat }}>
          <span style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', fontWeight: 800, letterSpacing: '0.4em' }} className="text-[#05402d] uppercase">
            Galeria
          </span>
        </div>

        <div style={{ position: 'absolute', top: pctH(99), width: '100%', textAlign: 'center', ...cinzel }}>
          <h2 style={{ fontSize: 'clamp(32px, 3.33vw, 64px)', fontWeight: 400 }} className="text-[#69151f] uppercase">
            O Nosso Espaço
          </h2>
        </div>

        {/* Divisor Touro */}
        <div style={{ position: 'absolute', top: pctH(190), width: '100%' }} className="flex items-center justify-center gap-[1%]">
          <div style={{ width: pctW(73), height: '2px', backgroundColor: '#05402d' }}></div>
          <img src={imgTouro} alt="" style={{ width: pctW(58), height: 'auto' }} className="object-contain mix-blend-multiply" />
          <div style={{ width: pctW(73), height: '2px', backgroundColor: '#05402d' }}></div>
        </div>

        {/* Bio (REMOVIDO UPPERCASE AQUI) */}
        <div style={{ position: 'absolute', top: pctH(290), width: '100%', textAlign: 'center', ...montserrat }}>
          <p style={{ fontSize: 'clamp(14px, 1.1vw, 21px)', fontWeight: 400 }} className="text-[#69151f] tracking-[0.1em]">
            Entra dentro do nosso mundo de culinária tradicional e ambiente fantástico.
          </p>
        </div>

        {/* ========================================================= */}
        {/* MOSAICO BLINDADO (Usando % para não quebrar no Zoom)       */}
        {/* ========================================================= */}

        {/* Foto 1 (GRANDE TOP LEFT) */}
        <div 
          style={{ position: 'absolute', top: pctH(364), left: pctW(154), width: pctW(798), height: pctH(795) }}
          className="overflow-hidden shadow-xl group bg-white"
        >
          <img src={foto1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
        </div>

        {/* Foto 4 (SMALL BOTTOM LEFT 1) */}
        <div 
          style={{ position: 'absolute', top: pctH(1175), left: pctW(154), width: pctW(391), height: pctH(386) }}
          className="overflow-hidden shadow-lg group bg-white"
        >
          <img src={foto4} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
        </div>

        {/* Foto 5 (SMALL BOTTOM LEFT 2) */}
        <div 
          style={{ position: 'absolute', top: pctH(1175), left: pctW(561), width: pctW(391), height: pctH(386) }}
          className="overflow-hidden shadow-lg group bg-white"
        >
          <img src={foto5} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
        </div>

        {/* Foto 2 (SMALL TOP CENTER) */}
        <div 
          style={{ position: 'absolute', top: pctH(366), left: pctW(968), width: pctW(391), height: pctH(386) }}
          className="overflow-hidden shadow-lg group bg-white"
        >
          <img src={foto2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
        </div>

        {/* Foto 3 (SMALL TOP RIGHT) */}
        <div 
          style={{ position: 'absolute', top: pctH(366), left: pctW(1375), width: pctW(391), height: pctH(386) }}
          className="overflow-hidden shadow-lg group bg-white"
        >
          <img src={foto3} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
        </div>

        {/* Foto 6 (GRANDE BOTTOM RIGHT) */}
        <div  
          style={{ position: 'absolute', top: pctH(774), left: pctW(972), width: pctW(796), height: pctH(797) }}
          className="overflow-hidden shadow-xl group bg-white"
        >
          <img src={foto6} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
        </div>

      </div>
    </section>
  );
}