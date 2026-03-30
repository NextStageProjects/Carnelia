// src/components/sections/Home/Celebridades.tsx

// Importação das fotos (Mantendo a tua estrutura)
import fotoMiguel from "../../../assets/home/celebridades/fotos/miguel-rocha-vieira.jpg";
import fotoSonia from "../../../assets/home/celebridades/fotos/sonia-taraves.jpg";
import fotoTony from "../../../assets/home/celebridades/fotos/tony-carreira.jpg";
import fotoFlavio from "../../../assets/home/celebridades/fotos/flacio-furtado.jpg";

export function Celebridades() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  const celebridades = [
    {
      nome: "Miguel Rocha Vieira",
      cargo: "Chef",
      descricao: "Chefe português com 3 estrelas michelin e um dos maiores embaixadores da gastronomia portuguesa no mundo.",
      imagem: fotoMiguel
    },
    {
      nome: "Sónia Tavares",
      cargo: "Vocalista dos \"The Gift\"",
      descricao: "Cantora portuguesa e vocalista dos The Gift e uma das maiores vozes da música portuguesa no mundo global.",
      imagem: fotoSonia
    },
    {
      nome: "Tony Carreira",
      cargo: "Cantor e músico português",
      descricao: "Cantor português com carreira mundial e um dos maiores ícones da música romântica em Portugal e no mundo.",
      imagem: fotoTony
    },
    {
      nome: "Flávio Furtado",
      cargo: "Comentador televisivo",
      descricao: "Apresentador, comentador e uma figura incontornável da televisão em Portugal.",
      imagem: fotoFlavio
    }
  ];

  return (
    <section className="w-full bg-[#f1efea] py-24 px-6 flex justify-center">
      <div className="max-w-7xl w-full">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-20">
          {/* C U R I O S I D A D E S: Montserrat 11px Negrito #05402d */}
          <span 
            style={montserrat} 
            className="text-[#05402d] text-[11px] font-bold tracking-[0.4em] uppercase"
          >
            Curiosidades
          </span>
          
          {/* CELEBRIDADES: Cinzel 34px #69151f */}
          <h2 
            style={cinzel} 
            className="text-[#69151f] text-[34px] leading-tight uppercase mt-4 mb-6"
          >
            Celebridades
          </h2>
          
          {/* Ícone Touro com traços Verdes #05402d */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-16 h-[1px] bg-[#05402d]"></div>
            <span className="text-2xl">🐂</span>
            <div className="w-16 h-[1px] bg-[#05402d]"></div>
          </div>

          {/* Subtexto: Montserrat 11px #69151f */}
          <p 
            style={montserrat} 
            className="text-[#69151f] text-[11px] font-medium uppercase tracking-[0.1em]"
          >
            Algumas caras conhecidas que já visitaram o nosso espaço.
          </p>
        </div>

        {/* GRID DE CELEBRIDADES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {celebridades.map((pessoa, index) => (
            <div key={index} className="flex flex-col group">
              
              {/* FOTO: Aspect 3/4 com sombra suave */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6 shadow-xl bg-black/5">
                <img 
                  src={pessoa.imagem} 
                  alt={pessoa.nome}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* NOME: Cinzel 17px Preto */}
              <h3 
                style={cinzel} 
                className="text-black text-[17px] font-bold uppercase tracking-tight mb-1"
              >
                {pessoa.nome}
              </h3>
              
              {/* CARGO: Montserrat 10px #05402d */}
              <p 
                style={montserrat} 
                className="text-[#05402d] text-[10px] font-bold uppercase tracking-widest mb-3"
              >
                {pessoa.cargo}
              </p>
              
              {/* DESCRIÇÃO: Montserrat 11px #69151f */}
              <p 
                style={montserrat} 
                className="text-[#69151f] text-[11px] leading-relaxed text-justify"
              >
                {pessoa.descricao}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}