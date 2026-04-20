export function Especialidades() {
  const cinzel = { fontFamily: "'Cinzel', serif" };
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };

  // FOTOS TEMPORÁRIAS
  const imgTeste1 = "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&h=800&auto=format&fit=crop";
  const imgTeste2 = "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=600&h=800&auto=format&fit=crop";
  const imgTeste3 = "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600&h=800&auto=format&fit=crop";

  // Função para converter o pixel exato do Penpot em medida elástica (base 1920px)
  const pxToVw = (px: number) => `${(px / 19.2).toFixed(4)}vw`;

  const especialidadesData = [
    {
      id: 1,
      nome: "Costeleta de boi grelhada p/2 pessoas à cernelha",
      preco: "33,50€",
      img: imgTeste1,
      left: 19,
      width: 599,
      height: 745,
      top: 227
    },
    {
      id: 2,
      nome: "Febras de porco grelhadas",
      preco: "14,95€",
      img: imgTeste2,
      left: 656.5,
      width: 606.97,
      height: 743,
      top: 228
    },
    {
      id: 3,
      nome: "Sopa da Pedra p/ 2 pessoas Stone Soup",
      preco: "6,20€",
      img: imgTeste3,
      left: 1295,
      width: 607,
      height: 744,
      top: 228
    }
  ];

  return (
    <section id="especialidades" className="w-full bg-white flex justify-center overflow-hidden">
      <div className="relative w-full max-w-[1920px] h-[clamp(800px,60vw,1150px)] mx-auto">

        {/* ========================================================= */}
        {/* CABEÇALHO (LINHAS VERDES DOS PRINTS)                      */}
        {/* ========================================================= */}
        
        {/* Linha Verde Esquerda (image_664caa) */}
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

        {/* Título Central */}
        <div style={{ position: 'absolute', top: pxToVw(93), width: '100%', textAlign: 'center' }}>
          <h2 
            style={{ ...cinzel, fontSize: `clamp(32px, ${pxToVw(64)}, 64px)`, fontWeight: 400 }} 
            className="text-[#69151f] uppercase"
          >
            As Nossas Especialidades!
          </h2>
        </div>

        {/* Linha Verde Direita (image_664ce6) */}
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
        {/* GRID DE CARDS COM ANIMAÇÃO NO HOVER                       */}
        {/* ========================================================= */}
        {especialidadesData.map((item) => (
          <div 
            key={item.id}
            style={{ 
              position: 'absolute',
              top: pxToVw(item.top),
              left: pxToVw(item.left),
              width: pxToVw(item.width),
              height: pxToVw(item.height)
            }}
            className="shadow-2xl overflow-hidden group cursor-pointer"
          >
            {/* Imagem com Zoom suave */}
            <img 
              src={item.img} 
              alt={item.nome} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />

            {/* Caixa Vermelha: Sobe ao passar o rato */}
            <div 
              style={{ 
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: pxToVw(490),
                backgroundColor: '#69151F',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              className="flex flex-col items-center justify-start p-6 h-[131px] group-hover:h-[200px]"
            >
              <p 
                style={{ ...cinzel, fontSize: pxToVw(26) }} 
                className="text-white uppercase text-center leading-tight mb-4"
              >
                {item.nome}
              </p>

              {/* Revelação do Preço */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center">
                <span 
                  style={{ ...montserrat, fontSize: pxToVw(42), fontWeight: 700 }} 
                  className="text-white"
                >
                  {item.preco}
                </span>
              </div>
            </div>
          </div>
        ))}

      </div>

      <style>{`
        .group:hover div[style*="background-color: #69151F"] {
          height: 200px !important;
        }
      `}</style>
    </section>
  );
}