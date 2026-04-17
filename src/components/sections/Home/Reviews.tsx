import imgTouroPequeno from "../../../assets/home/touro/tourro.png";
import logoCirculo from "../../../assets/home/reviews/icone/icone-da-parte-a-carta.png"; 

export function Reviews() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  // Função para converter o pixel exato do Penpot em medida elástica (base 1920px)
  const pxToVw = (px: number) => `${(px / 19.2).toFixed(4)}vw`;

  const reviewsData = [
    {
      nome: "Fernando L",
      cargo: "Cliente",
      texto: "Este restaurante tem vindo a ganhar prestígio, no Cartaxo, e vem na linha do Restaurante O Toucinho - Almeirim, no que respeita à sopa de Pedra, que era a referência da Região. Aqui ..",
      left: 154,
      foto: "https://i.pravatar.cc/150?u=1"
    },
    {
      nome: "Tony Serafim",
      cargo: "Guia local",
      texto: "Went here for lunch after visiting the headquarters of Casa das Peles, what a lovely surprise! Cernelha is a truly authentic Portuguese restaurant with great food and wonderful staff. We...",
      left: 561,
      foto: "https://i.pravatar.cc/150?u=2"
    },
    {
      nome: "Shirley \"Muse Faery\" NKL",
      cargo: "Guia local",
      texto: "Delicious traditional Portuguese food! Very popular with the locals. We ate grilled octopus as the main dish and espetada de lulas e camarão (grilled squid and prawns with...",
      left: 968,
      foto: "https://i.pravatar.cc/150?u=3"
    },
    {
      nome: "João Meijinhos",
      cargo: "Guia local",
      texto: "Good food for a low price. Portions are huge, easily feeds 2. Service is okay.",
      left: 1375,
      foto: "https://i.pravatar.cc/150?u=4"
    }
  ];

  return (
    <section id="reviews" className="w-full bg-white flex justify-center overflow-hidden">
      
      {/* Container Mestre 1920px */}
      <div className="relative w-full max-w-[1920px] h-[clamp(900px,53vw,1100px)] mx-auto">

        {/* 1. LOGO CIRCULAR (CORRIGIDO: OPACIDADE 100%)
            Width/Height: 350px | Left 47px | Top 48px
        */}
        <div 
          style={{ 
            position: 'absolute', 
            left: pxToVw(47), 
            top: pxToVw(48), 
            width: pxToVw(350), 
            height: pxToVw(350),
            zIndex: 0,
            opacity: 1 // Cor natural do ícone
          }}
        >
          <img src={logoCirculo} alt="" className="w-full h-full object-contain" />
        </div>

        {/* 2. CABEÇALHO */}
        
        {/* Label REVIEWS: Top 66px */}
        <div style={{ position: 'absolute', top: pxToVw(66), width: '100%', textAlign: 'center', ...montserrat }}>
          <span 
            style={{ fontSize: pxToVw(20), fontWeight: 800, letterSpacing: '0.4em' }} 
            className="text-[#05402d] uppercase"
          >
            REVIEWS
          </span>
        </div>

        {/* Título COMENTÁRIOS: Top 119px */}
        <div style={{ position: 'absolute', top: pxToVw(119), width: '100%', textAlign: 'center', ...cinzel }}>
          <h2 style={{ fontSize: pxToVw(64), fontWeight: 400 }} className="text-[#69151f] uppercase">
            Comentários
          </h2>
        </div>

        {/* Divisor Touro e Linhas */}
        <div 
          style={{ position: 'absolute', top: pxToVw(225), width: '100%' }}
          className="flex items-center justify-center gap-[1vw]"
        >
          <div style={{ width: pxToVw(80), height: pxToVw(2), backgroundColor: '#05402d' }}></div>
          <img src={imgTouroPequeno} alt="" style={{ width: pxToVw(58), height: 'auto' }} className="object-contain mix-blend-multiply" />
          <div style={{ width: pxToVw(80), height: pxToVw(2), backgroundColor: '#05402d' }}></div>
        </div>

        {/* Bio: Top 320px */}
        <div style={{ position: 'absolute', top: pxToVw(320), width: '100%', textAlign: 'center', ...montserrat }}>
          <p style={{ fontSize: pxToVw(21), fontWeight: 400 }} className="text-[#69151f]">
            Alguns comentários e avaliações deixados pelos nossos clientes.
          </p>
        </div>

        {/* ========================================================= */}
        {/* CARDS DE REVIEW                                           */}
        {/* ========================================================= */}

        {reviewsData.map((review, index) => (
          <div 
            key={index}
            style={{ 
              position: 'absolute', 
              top: pxToVw(450), 
              left: pxToVw(review.left), 
              width: pxToVw(340), 
              height: pxToVw(454), 
              backgroundColor: '#f1efea'
            }}
            className="flex flex-col items-center shadow-lg rounded-sm z-10"
          >
            {/* Avatar: 90x91px | Top -45px */}
            <div 
              style={{ 
                width: pxToVw(90.17), 
                height: pxToVw(91.23), 
                marginTop: pxToVw(-45),
                backgroundColor: '#B1B2B5',
                overflow: 'hidden' 
              }} 
              className="rounded-full shadow-md border-2 border-white"
            >
              <img src={review.foto} alt={review.nome} className="w-full h-full object-cover" />
            </div>

            {/* Estrelas */}
            <div 
              style={{ width: pxToVw(118), height: pxToVw(60) }} 
              className="flex justify-center items-center text-[#FFB800] text-xl"
            >
              ★★★★★
            </div>

            {/* Texto do Comentário */}
            <div 
              className="px-6 flex-1 flex items-start justify-center" 
              style={{ marginTop: pxToVw(10) }}
            >
              <p 
                style={{ 
                  ...montserrat, 
                  fontSize: pxToVw(19), 
                  lineHeight: 1.4,
                  textAlign: 'center'
                }}
                className="text-[#69151f] italic opacity-90"
              >
                "{review.texto}"
              </p>
            </div>

            {/* Nome e Cargo */}
            <div className="pb-8 flex flex-col items-center">
              <h4 style={{ ...montserrat, fontSize: pxToVw(20), fontWeight: 800 }} className="text-[#69151f] uppercase">
                {review.nome}
              </h4>
              <span 
                style={{ ...montserrat, fontSize: pxToVw(16), opacity: 0.6 }} 
                className="text-[#69151f] uppercase tracking-widest mt-1"
              >
                {review.cargo}
              </span>
            </div>
          </div>
        ))}

      </div>

      {/* MOBILE FIX */}
      <style>{`
        @media (max-width: 1024px) {
          #reviews .relative { height: auto; display: flex; flex-direction: column; align-items: center; padding: 100px 20px 60px; gap: 80px; }
          #reviews div[style*="position: absolute"] { position: static !important; width: 100% !important; text-align: center !important; }
          #reviews h2 { font-size: 32px !important; }
          #reviews div[style*="background-color: rgb(241, 239, 234)"] { position: relative !important; width: 100% !important; max-width: 340px; height: auto !important; padding: 40px 20px !important; }
          #reviews div[style*="margin-top: -"] { position: absolute !important; top: 0; left: 50%; transform: translate(-50%, -50%); margin-top: 0 !important; }
        }
      `}</style>
    </section>
  );
}