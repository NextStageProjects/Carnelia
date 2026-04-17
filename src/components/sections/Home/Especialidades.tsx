// src/components/sections/Home/Especialidades.tsx

export function Especialidades() {
  const cinzel = { fontFamily: "'Cinzel', serif" };
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };

  // FOTOS TEMPORÁRIAS (Mantendo os links que forneceste)
  const imgTeste1 = "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=401&h=496&auto=format&fit=crop";
  const imgTeste2 = "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=401&h=496&auto=format&fit=crop";
  const imgTeste3 = "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=401&h=496&auto=format&fit=crop";

  // Função para converter o pixel exato do Penpot em medida elástica (base 1920px)
  const pxToVw = (px: number) => `${(px / 19.2).toFixed(4)}vw`;

  return (
    <section id="especialidades" className="w-full bg-white flex justify-center overflow-hidden">
      {/* Container Mestre 1920px para travar o layout com as coordenadas do Penpot */}
      <div className="relative w-full max-w-[1920px] h-[clamp(800px,60vw,1150px)] mx-auto">

        {/* ========================================================= */}
        {/* CABEÇALHO (Título e Linhas Verdes laterais)              */}
        {/* ========================================================= */}
        
        {/* Linha Verde Esquerda: W 473px | T 134px | L 30px */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(134),
            left: pxToVw(30),
            width: pxToVw(473),
            height: pxToVw(5),
            backgroundColor: '#05402D'
          }}
          className="hidden md:block"
        />

        {/* Título Central: Top 93px | Font 64px */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(93),
            width: '100%',
            textAlign: 'center'
          }}
        >
          <h2 
            style={{ ...cinzel, fontSize: `clamp(32px, ${pxToVw(64)}, 64px)`, fontWeight: 400 }} 
            className="text-[#69151f] uppercase"
          >
            As Nossas Especialidades!
          </h2>
        </div>

        {/* Linha Verde Direita: W 473px | T 131px | L 1413px */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(131),
            left: pxToVw(1413),
            width: pxToVw(473),
            height: pxToVw(5),
            backgroundColor: '#05402D'
          }}
          className="hidden md:block"
        />

        {/* ========================================================= */}
        {/* GRID DE CARDS (Costeleta, Febras e Sopa)                  */}
        {/* ========================================================= */}

        {/* CARD 1: COSTELETA (Left 19px | Top 227px | Width 599px) */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(227),
            left: pxToVw(19),
            width: pxToVw(599),
            height: pxToVw(745)
          }}
          className="shadow-2xl overflow-hidden group"
        >
          <img src={imgTeste1} alt="Costeleta" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          
          {/* Caixa Vermelha (Bottom-Right): Width 484px | Height 131px */}
          <div 
            style={{ 
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: pxToVw(483.98),
              height: pxToVw(130.68),
              backgroundColor: '#69151F'
            }}
            className="flex items-center justify-center p-6"
          >
            <p style={{ ...cinzel, fontSize: pxToVw(28) }} className="text-white uppercase text-center leading-tight">
              Costeleta de boi grelhada <br /> p/2 pessoas à cernelha
            </p>
          </div>
        </div>

        {/* CARD 2: FEBRAS (Left 656.5px | Top 228px | Width 607px) */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(228),
            left: pxToVw(656.5), 
            width: pxToVw(606.97),
            height: pxToVw(743)
          }}
          className="shadow-2xl overflow-hidden group"
        >
          <img src={imgTeste2} alt="Febras" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          
          <div 
            style={{ 
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: pxToVw(490.42),
              height: pxToVw(130.32),
              backgroundColor: '#69151F'
            }}
            className="flex items-center justify-center p-6"
          >
            <p style={{ ...cinzel, fontSize: pxToVw(28) }} className="text-white uppercase text-center leading-tight">
              Febras de porco <br /> grelhadas
            </p>
          </div>
        </div>

        {/* CARD 3: SOPA (Left 1295px | Top 228px | Width 607px) */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(228),
            left: pxToVw(1295),
            width: pxToVw(607),
            height: pxToVw(744)
          }}
          className="shadow-2xl overflow-hidden group"
        >
          <img src={imgTeste3} alt="Sopa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          
          {/* Caixa Vermelha mais alta para o preço */}
          <div 
            style={{ 
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: pxToVw(490),
              height: pxToVw(200),
              backgroundColor: '#69151F'
            }}
            className="flex flex-col items-center justify-center p-6"
          >
            <p style={{ ...cinzel, fontSize: pxToVw(26) }} className="text-white uppercase text-center leading-tight mb-2">
              Sopa da Pedra p/ 2 pessoas <br /> Stone Soup
            </p>
            <span style={{ ...montserrat, fontSize: pxToVw(32), fontWeight: 700 }} className="text-white">
              6,20€
            </span>
          </div>
        </div>

      </div>

      {/* MOBILE VERSION (Mantida de forma simples para telas pequenas) */}
      <style>{`
        @media (max-width: 768px) {
          #especialidades .relative { height: auto; display: flex; flex-direction: column; align-items: center; padding: 40px 20px; gap: 40px; }
          #especialidades h2 { position: static; font-size: 28px !important; margin-bottom: 20px; }
          #especialidades .shadow-2xl { position: static; width: 100% !important; height: 400px !important; }
          #especialidades div[style*="background-color: rgb(105, 21, 31)"] { width: 100% !important; height: auto !important; padding: 20px !important; font-size: 16px !important; }
        }
      `}</style>
    </section>
  );
}