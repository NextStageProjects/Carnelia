import iconeCarta from '../../../assets/home/reservas/icones/icone-da-parte-a-carta.png';
import touroPng from '../../../assets/home/touro/tourro.png';

interface ReservasProps {
  onOpenReservation: (type: 'carta' | 'grupo') => void;
}

export function Reservas({ onOpenReservation }: ReservasProps) {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  // Função para converter o pixel exato do Penpot em medida elástica (base 1920px)
  const pxToVw = (px: number) => `${(px / 19.2).toFixed(4)}vw`;

  return (
    <section id="reservas" className="w-full bg-[#69151f] flex justify-center overflow-hidden">
      
      {/* Container Mestre 1920px */}
      <div className="relative w-full max-w-[1920px] h-[clamp(900px,58vw,1150px)] mx-auto">

        {/* 1. Subtítulo: MARCAÇÕES (image_669d5e)
            Top: 50px | Font: 20px | Montserrat Bold (800)
        */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(50),
            width: '100%',
            textAlign: 'center',
            ...montserrat
          }}
        >
          <span 
            style={{ fontSize: pxToVw(20), fontWeight: 800, letterSpacing: '0.4em' }} 
            className="text-white uppercase pl-[0.4em]"
          >
            MARCAÇÕES
          </span>
        </div>

        {/* 2. Título: RESERVAS (image_669d64)
            Top: 96px | Font: 64px | Cinzel
        */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(96),
            width: '100%',
            textAlign: 'center'
          }}
        >
          <h2 
            style={{ ...cinzel, fontSize: pxToVw(64), fontWeight: 400 }} 
            className="text-white uppercase"
          >
            Reservas
          </h2>
        </div>

        {/* 3. DIVISOR: Touro e Linhas (image_669d80, 669d9c, 669dba)
            Touro: W 66.07px | H 77px
            Linhas: W 83.31px | H 1.67px
        */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(190),
            width: '100%'
          }}
          className="flex items-center justify-center gap-[1.5vw]"
        >
          <div style={{ width: pxToVw(83.31), height: pxToVw(1.67), backgroundColor: 'white' }}></div>
          <img 
            src={touroPng} 
            alt="" 
            style={{ width: pxToVw(66.07), height: pxToVw(77) }} 
            className="object-contain"
          />
          <div style={{ width: pxToVw(83.31), height: pxToVw(1.67), backgroundColor: 'white' }}></div>
        </div>

        {/* 4. Texto Apoio: (image_669ddc)
            Top: 273px | Font: 21px
        */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(273),
            width: '100%',
            textAlign: 'center',
            ...montserrat
          }}
        >
          <p style={{ fontSize: pxToVw(21), fontWeight: 400 }} className="text-white">
            Faz as tuas reservas e marca já a tua mesa.
          </p>
        </div>

        {/* ========================================================= */}
        {/* CARDS GIGANTES (image_669e17, 66a0bf, 66a0df)             */}
        {/* ========================================================= */}

        {/* CARD 1: À CARTA (L 90px | T 380px | W 819px | H 434px) */}
        <div 
          onClick={() => onOpenReservation('carta')}
          style={{ 
            position: 'absolute',
            left: pxToVw(90),
            top: pxToVw(380),
            width: pxToVw(819),
            height: pxToVw(434),
            backgroundColor: '#F1EFEA',
            border: `${pxToVw(14)} solid #05402D`,
            borderRadius: pxToVw(26)
          }}
          className="flex items-center justify-between p-[4vw] cursor-pointer hover:scale-[1.01] transition-transform shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            <h3 style={{ ...montserrat, fontSize: pxToVw(48), fontWeight: 800 }} className="text-black leading-tight">
              À Carta
            </h3>
            <p style={{ ...montserrat, fontSize: pxToVw(20), lineHeight: 1.4 }} className="text-black/80 max-w-[15vw]">
              Reserva normal, escolha do prato através da carta, no restaurante.
            </p>
          </div>
          <img src={iconeCarta} alt="" style={{ width: pxToVw(250) }} className="object-contain" />
        </div>

        {/* CARD 2: GRUPO (R 90px | T 380px | W 826px | H 434px) */}
        <div 
          onClick={() => onOpenReservation('grupo')}
          style={{ 
            position: 'absolute',
            right: pxToVw(90),
            top: pxToVw(380),
            width: pxToVw(826),
            height: pxToVw(434),
            backgroundColor: '#F1EFEA',
            border: `${pxToVw(14)} solid #05402D`,
            borderRadius: pxToVw(26)
          }}
          className="flex items-center justify-between p-[4vw] cursor-pointer hover:scale-[1.01] transition-transform shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            <h3 style={{ ...montserrat, fontSize: pxToVw(48), fontWeight: 800 }} className="text-black leading-tight">
              Grupo
            </h3>
            <p style={{ ...montserrat, fontSize: pxToVw(20), lineHeight: 1.4 }} className="text-black/80 max-w-[15vw]">
              Reserva coletiva com menu pré-definido e preço p/pessoa estipulado.
            </p>
          </div>
          {/* Usando o Touro como ícone do Grupo conforme o design anterior ou ilustrações */}
          <img src={touroPng} alt="" style={{ width: pxToVw(250) }} className="object-contain" />
        </div>

      </div>

      {/* MOBILE FIX */}
      <style>{`
        @media (max-width: 1024px) {
          #reservas .relative { height: auto; display: flex; flex-direction: column; align-items: center; padding: 60px 20px; gap: 30px; }
          #reservas div[style*="position: absolute"] { position: static !important; width: 100% !important; text-align: center !important; }
          #reservas h2 { font-size: 32px !important; }
          #reservas .flex-center { position: static !important; margin: 20px 0; }
          #reservas div[style*="border-radius"] { width: 100% !important; height: auto !important; flex-direction: column; padding: 30px !important; border-width: 8px !important; }
          #reservas h3 { font-size: 28px !important; }
          #reservas p { max-width: 100% !important; font-size: 16px !important; }
          #reservas img { width: 120px !important; margin-top: 20px; }
        }
      `}</style>
    </section>
  );
}