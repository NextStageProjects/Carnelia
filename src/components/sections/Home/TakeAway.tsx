import fotoCompleta from "../../../assets/home/takeaway.tsx/foto/foto_completa.png"; 
import imgTouro from "../../../assets/home/touro/tourro.png";
import imgBtnLigar from "../../../assets/home/takeaway.tsx/icone/ligar.jpg";
import imgBtnCarta from "../../../assets/home/takeaway.tsx/icone/ver_carta.jpg";

export function TakeAway() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  // Função para converter o pixel exato do Penpot em medida elástica (base 1920px)
  const pxToVw = (px: number) => `${(px / 19.2).toFixed(4)}vw`;

  // Seta branca (triângulo) conforme image_73db2b: 10x12px
  const arrowStyle = {
    width: pxToVw(10),
    height: pxToVw(12),
    backgroundColor: 'white',
    clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
    flexShrink: 0
  };

  // Recorte Estilo Ticket para os botões
  const ticketClip = {
    clipPath: "polygon(8% 0%, 92% 0%, 100% 25%, 100% 75%, 92% 100%, 8% 100%, 0% 75%, 0% 25%)"
  };

  return (
    <section id="takeaway" className="w-full bg-[#69151f] flex justify-center overflow-hidden">
      
      {/* Container Mestre 1920px */}
      <div className="relative w-full max-w-[1920px] h-[clamp(750px,44vw,900px)] mx-auto">

        {/* 1. FOTO COMPLETA (Com o volume solicitado) */}
        <div 
          style={{ 
            position: 'absolute',
            right: 0,
            top: pxToVw(60),
            bottom: pxToVw(1),
            width: pxToVw(1300),
            zIndex: 0
          }}
          className="hidden md:block"
        >
          <img 
            src={fotoCompleta} 
            alt="Take Away Background" 
            className="w-full h-full object-cover object-right" 
          />
        </div>

        {/* 2. CONTEÚDO DE TEXTO */}
        
        {/* LEVANTAMENTOS */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(80), 
            left: pxToVw(158),
            width: pxToVw(509),
            textAlign: 'center',
            ...montserrat
          }}
          className="z-10"
        >
          <span 
            style={{ 
              fontSize: pxToVw(20), 
              fontWeight: 800, 
              letterSpacing: '0.4em',
              lineHeight: '1.2' 
            }} 
            className="text-white uppercase"
          >
            LEVANTAMENTOS
          </span>
        </div>

        {/* TÍTULO: TEMOS TAKE AWAY (CENTRALIZADO no bloco) */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(135), 
            left: pxToVw(121),
            width: pxToVw(583), // Alinhado com a largura do divisor para centro perfeito
            textAlign: 'center',
            ...cinzel
          }}
          className="z-10"
        >
          <h2 
            style={{ 
              fontSize: pxToVw(64), 
              fontWeight: 400, 
              lineHeight: '1.2' 
            }} 
            className="text-white uppercase whitespace-nowrap"
          >
            Temos Take Away
          </h2>
        </div>

        {/* DIVISOR TOURO (Traços colados ao touro) */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(280), 
            left: pxToVw(121),
            width: pxToVw(583)
          }}
          className="flex items-center justify-center gap-[0.5vw] z-10" 
        >
          <div style={{ width: pxToVw(68.55), height: pxToVw(1.83), backgroundColor: 'white' }}></div>
          <img 
            src={imgTouro} 
            alt="" 
            style={{ width: pxToVw(54.36), height: pxToVw(84) }} 
            className="object-contain"
          />
          <div style={{ width: pxToVw(68.55), height: pxToVw(1.83), backgroundColor: 'white' }}></div>
        </div>

        {/* TEXTO APOIO */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(410),
            left: pxToVw(157),
            width: pxToVw(509),
            textAlign: 'center',
            ...montserrat
          }}
          className="z-10"
        >
          <p 
            style={{ 
              fontSize: pxToVw(21), 
              fontWeight: 400, 
              lineHeight: '1.2' 
            }} 
            className="text-white opacity-90"
          >
            Leve o melhor da nossa tradição para casa!
          </p>
        </div>

        {/* LISTA DE PASSOS */}
        <div 
          style={{ 
            position: 'absolute', 
            top: pxToVw(480), 
            left: pxToVw(139) 
          }}
          className="flex flex-col gap-[1.2vw] z-10"
        >
          {[
            "Consulte a nossa carta e escolha o seu pedido",
            "Entre em contato connosco para pedir o seu take away",
            "Levante o seu pedido no restaurante"
          ].map((texto, i) => (
            <div key={i} className="flex items-center gap-[1.5vw]">
              <div style={arrowStyle}></div>
              <p 
                style={{ 
                  ...montserrat, 
                  fontSize: pxToVw(19), 
                  fontWeight: 400, 
                  lineHeight: '1.2' 
                }} 
                className="text-white"
              >
                {texto}
              </p>
            </div>
          ))}
        </div>

        {/* BOTÕES */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(620),
            left: pxToVw(121),
            width: pxToVw(583)
          }}
          className="flex justify-center gap-[1.5vw] z-10"
        >
          <div 
            style={ticketClip} 
            className="w-[clamp(140px,11vw,200px)] h-[clamp(70px,5.5vw,100px)] overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-xl"
          >
            <img src={imgBtnLigar} alt="Ligar" className="w-full h-full object-cover" />
          </div>
          <div 
            style={ticketClip} 
            className="w-[clamp(140px,11vw,200px)] h-[clamp(70px,5.5vw,100px)] overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-xl"
          >
            <img src={imgBtnCarta} alt="Ver Carta" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>

      {/* MOBILE */}
      <style>{`
        @media (max-width: 1024px) {
          #takeaway .relative { height: auto; display: flex; flex-direction: column; align-items: center; padding: 60px 20px; gap: 30px; }
          #takeaway div[style*="position: absolute"] { position: static !important; width: 100% !important; text-align: center !important; }
          #takeaway h2 { font-size: 36px !important; white-space: normal !important; }
          #takeaway div[style*="flex-direction: column"] { align-items: flex-start; text-align: left; margin: 20px 0; }
        }
      `}</style>
    </section>
  );
}