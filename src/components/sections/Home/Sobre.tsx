import imgEquipa from '../../../assets/home/sobre/fotos/Fica-no-topo-a-direita.jpg';
import imgSala from '../../../assets/home/sobre/fotos/Fica-embaixo-a-esquerda-com-borda.jpeg';
import imgAssinatura from '../../../assets/home/sobre/assinatura/asssinatura.png';
import imgTouro from '../../../assets/home/touro/tourro.png';

export function Sobre() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  const pxToVw = (px: number) => `${(px / 19.2).toFixed(4)}vw`;

  return (
    <section 
      id="sobre" 
      style={{ backgroundColor: "#f1efea" }} 
      className="w-full flex justify-center overflow-hidden"
    >
      <div className="relative w-full h-[clamp(850px,56vw,1100px)] max-w-[1920px] mx-auto">

        {/* 1. TEXTO "SOBRE NÓS" */}
        <div style={{ position: 'absolute', top: pxToVw(60), left: pxToVw(380), zIndex: 30 }}>
          <span style={{ ...montserrat, fontSize: pxToVw(20), fontWeight: 800 }} className="text-[#05402d] uppercase tracking-[0.3em]">
            Sobre Nós
          </span>
        </div>

        {/* 2. TÍTULOS */}
        <h2 style={{ ...cinzel, position: 'absolute', top: pxToVw(144), left: pxToVw(89), width: pxToVw(826), fontSize: pxToVw(64), lineHeight: "1.1", textAlign: 'center' }} className="text-[#69151f] uppercase font-normal z-10">
          Somos um restaurante
        </h2>
        <h2 style={{ ...cinzel, position: 'absolute', top: pxToVw(231), left: pxToVw(42), width: pxToVw(920), fontSize: pxToVw(64), lineHeight: "1.1", textAlign: 'center' }} className="text-[#69151f] uppercase font-normal z-10">
          experiente
        </h2>

        {/* 3. DIVISOR TOURO */}
        <div style={{ position: 'absolute', top: pxToVw(340), left: pxToVw(89), width: pxToVw(826) }} className="flex items-center justify-center gap-[1.5vw] z-10">
          <div style={{ width: pxToVw(80.15), height: pxToVw(1.78), backgroundColor: '#05402D' }}></div>
          <img src={imgTouro} alt="Touro" style={{ width: pxToVw(63.56), height: pxToVw(82), objectFit: 'contain' }} className="mix-blend-multiply" />
          <div style={{ width: pxToVw(80.15), height: pxToVw(1.78), backgroundColor: '#05402D' }}></div>
        </div>

        {/* 4. PARÁGRAFO PRINCIPAL */}
        <p style={{ ...montserrat, position: 'absolute', top: pxToVw(402), left: pxToVw(110), width: pxToVw(806), fontSize: pxToVw(22), lineHeight: "1.6" }} className="text-[#69151f] text-justify font-normal opacity-90 z-10">
          A Restaurante A Cernelha é um restaurante de cozinha portuguesa que honra a nossa tradição gastronómica, privilegiando os autênticos grelhados no carvão. Somos uma referência no Ribatejo, destacando-nos pela excelente qualidade e generosas quantidades, grande variedade de pratos, atendimento simpático e preços justos. A nossa extensa carta de vinhos representa orgulhosamente a cidade que nos acolhe, o Cartaxo, conhecida como capital do vinho. Trabalhamos todos os dias, incluindo feriados, para proporcionar uma verdadeira experiência da gastronomia ribatejana.
        </p>

        {/* 5. ASSINATURA PATROA */}
        <div style={{ position: 'absolute', top: pxToVw(680), left: pxToVw(110), width: pxToVw(101.63), zIndex: 10 }} className="flex flex-col items-start">
          <img src={imgAssinatura} alt="Assinatura" style={{ width: pxToVw(101.63), height: pxToVw(161.75), objectFit: 'contain' }} className="mix-blend-multiply" />
          <div style={{ ...cinzel, fontSize: pxToVw(27), fontWeight: 900, marginTop: pxToVw(-15) }} className="text-black uppercase leading-tight">
            Ass. <br /> Patroa
          </div>
        </div>

        {/* ===================== MONTAGEM DE FOTOS (MEDIDAS DOS PRINTS) ===================== */}

        {/* FOTO 1: EQUIPA (image_4d50b8) */}
        <img 
          src={imgEquipa} 
          alt="Nossa Equipa" 
          style={{ 
            position: 'absolute',
            top: pxToVw(51), 
            left: pxToVw(1190), 
            width: pxToVw(626), 
            height: pxToVw(884),
            zIndex: 0
          }}
          className="object-cover shadow-2xl"
        />

        {/* FOTO 2: CAIXA VERMELHA (image_4d50be) */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(143), 
            left: pxToVw(973), 
            width: pxToVw(343), 
            height: pxToVw(186),
            backgroundColor: "#69151f",
            zIndex: 10
          }}
          className="flex flex-col items-center justify-center text-white shadow-xl"
        >
          <span style={{ ...cinzel, fontSize: pxToVw(55), fontWeight: 'bold' }}>+ 12</span>
          <span style={{ ...montserrat, fontSize: pxToVw(14), fontWeight: 800 }} className="uppercase tracking-[0.2em]">
            Anos de Experiência
          </span>
        </div>

        {/* FOTO 3: SALA COM BORDA (image_4d509b) */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(431), 
            left: pxToVw(974), 
            width: pxToVw(512), 
            height: pxToVw(504),
            border: `${pxToVw(12)} solid #05402d`,
            zIndex: 20
          }}
          className="shadow-2xl overflow-hidden bg-white"
        >
          <img src={imgSala} alt="Nossa Sala" className="w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
}