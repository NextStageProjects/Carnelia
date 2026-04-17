import touroPng from '../../../assets/home/touro/tourro.png';
// Importa as tuas 4 fotos aqui
import img1 from '../../../assets/home/celebridades/fotos/miguel.jpg'; 
import img2 from '../../../assets/home/celebridades/fotos/sonia.jpg';
import img3 from '../../../assets/home/celebridades/fotos/tony.jpg';
import img4 from '../../../assets/home/celebridades/fotos/flacio.jpg'; 

export function Celebridades() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  // Função para converter o pixel exato do Penpot em medida elástica (base 1920px)
  const pxToVw = (px: number) => `${(px / 19.2).toFixed(4)}vw`;

  const celebridadesData = [
    {
      nome: "MIGUEL ROCHA VIEIRA",
      cargo: "Chef",
      descricao: "Chefe português com 3 estrelas michelin e um dos maiores embaixadores da gastronomia portuguesa no mundo.",
      img: img1,
      left: 43 // Original
    },
    {
      nome: "SÓNIA TAVARES",
      cargo: "Vocalista dos \"The Gift\"",
      descricao: "Cantora portuguesa e vocalista dos The Gift e uma das maiores vozes da música portuguesa no mundo global.",
      img: img2,
      left: 507 // Ajustado para 4 colunas
    },
    {
      nome: "TONY CARREIRA",
      cargo: "Cantor e músico português",
      descricao: "Cantor português com carreira mundial e um dos maiores ícones da música romântica em Portugal e no mundo.",
      img: img3,
      left: 971 // Ajustado para 4 colunas
    },
    {
      nome: "NOME DA CELEBRIDADE 4",
      cargo: "Cargo/Profissão",
      descricao: "Descrição detalhada da quarta celebridade seguindo o mesmo padrão das anteriores.",
      img: img4,
      left: 1435 // Ajustado para 4 colunas
    }
  ];

  return (
    <section id="celebridades" className="w-full bg-[#f1efea] flex justify-center overflow-hidden">
      
      {/* Container Mestre 1920px */}
      <div className="relative w-full max-w-[1920px] h-[clamp(1100px,72vw,1450px)] mx-auto">

        {/* 1. Subtítulo: CURIOSIDADES 
            Top: 48px | Font: 20px | Montserrat Bold (800) | Cor: #05402d
        */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(48),
            width: '100%',
            textAlign: 'center',
            ...montserrat
          }}
        >
          <span 
            style={{ fontSize: pxToVw(20), fontWeight: 800, letterSpacing: '0.4em' }} 
            className="text-[#05402d] uppercase pl-[0.4em]"
          >
            CURIOSIDADES
          </span>
        </div>

        {/* 2. Título: CELEBRIDADES
            Top: 100px | Font: 64px | Cinzel | Cor: #69151f
        */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(100),
            width: '100%',
            textAlign: 'center'
          }}
        >
          <h2 
            style={{ ...cinzel, fontSize: pxToVw(64), fontWeight: 400 }} 
            className="text-[#69151f] uppercase"
          >
            Celebridades
          </h2>
        </div>

        {/* 3. DIVISOR TOURO
            Touro: 63.56px x 82px | Linhas: 80.15px
        */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(195),
            width: '100%'
          }}
          className="flex items-center justify-center gap-[1.5vw]"
        >
          <div style={{ width: pxToVw(80.15), height: pxToVw(1.78), backgroundColor: '#05402d' }}></div>
          <img 
            src={touroPng} 
            alt="" 
            style={{ width: pxToVw(63.56), height: pxToVw(82) }} 
            className="object-contain mix-blend-multiply"
          />
          <div style={{ width: pxToVw(80.15), height: pxToVw(1.78), backgroundColor: '#05402d' }}></div>
        </div>

        {/* 4. Texto Apoio
            Top: 265px | Font: 21px | Montserrat | Cor: #69151f
        */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(265),
            width: '100%',
            textAlign: 'center',
            ...montserrat
          }}
        >
          <p style={{ fontSize: pxToVw(21), fontWeight: 400 }} className="text-[#69151f]">
            Algumas caras conhecidas que já visitaram o nosso espaço.
          </p>
        </div>

        {/* ========================================================= */}
        {/* GALERIA DE 4 CELEBRIDADES (PIXEL PERFECT)                 */}
        {/* ========================================================= */}

        {celebridadesData.map((item, index) => (
          <div 
            key={index}
            style={{ 
              position: 'absolute',
              left: pxToVw(item.left),
              top: pxToVw(352.52),
              width: pxToVw(429)
            }}
            className="flex flex-col"
          >
            {/* Imagem (SEM EFEITOS): 429px x 524.86px */}
            <div 
              style={{ 
                width: pxToVw(429), 
                height: pxToVw(524.86), 
                overflow: 'hidden'
              }}
              className="shadow-xl mb-[2vw] bg-gray-200"
            >
              <img 
                src={item.img} 
                alt={item.nome} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Nome: Font 32px | Cinzel | Cor: #000000 (Preto) */}
            <h3 
              style={{ 
                ...cinzel, 
                fontSize: pxToVw(32), 
                color: '#000000', 
                marginBottom: pxToVw(8) 
              }}
              className="uppercase font-normal leading-[1.2]"
            >
              {item.nome}
            </h3>

            {/* Cargo: Font 20px | Montserrat Italic | Cor: #05402D (Verde) */}
            <span 
              style={{ 
                ...montserrat, 
                fontSize: pxToVw(20), 
                fontStyle: 'italic', 
                color: '#05402D',
                display: 'block',
                marginBottom: pxToVw(12)
              }}
            >
              {item.cargo}
            </span>

            {/* Descrição: Font 21px | Montserrat | Cor: #69151F (Bordeaux) */}
            <p 
              style={{ 
                ...montserrat, 
                fontSize: pxToVw(21), 
                color: '#69151F', 
                lineHeight: 1.3,
                textAlign: 'left'
              }}
            >
              {item.descricao}
            </p>
          </div>
        ))}

      </div>

      {/* MOBILE RESPONSIVE */}
      <style>{`
        @media (max-width: 1200px) {
          #celebridades .relative { height: auto; display: flex; flex-direction: column; align-items: center; padding: 60px 20px; gap: 40px; }
          #celebridades div[style*="position: absolute"] { position: static !important; width: 100% !important; text-align: center !important; }
          #celebridades .flex-center { position: static !important; margin: 20px 0; }
          #celebridades div[style*="width: 22.3438vw"] { width: 100% !important; max-width: 429px; margin-bottom: 40px; }
        }
      `}</style>
    </section>
  );
}