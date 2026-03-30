// src/components/sections/Home/Sobre.tsx
import imgTopoDireita from '/src/assets/home/sobre/fotos/Fica-no-topo-a-direita.jpg';
import imgBaixoEsquerda from '/src/assets/home/sobre/fotos/Fica-embaixo-a-esquerda-com-borda.jpeg';

export function Sobre() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  return (
    <section className="w-full bg-[#f4f2ee] py-24 px-8 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* COLUNA DA ESQUERDA: Textos */}
        <div className="flex flex-col items-center text-center">
          
          {/* S O B R E   N Ó S - Montserrat 11px #05402d */}
          <span 
            style={montserrat}
            className="text-[#05402d] font-bold tracking-[0.4em] uppercase text-[11px] mb-4"
          >
            Sobre Nós
          </span>
          
          <h2 className="text-[#69151f] text-3xl md:text-[2.75rem] leading-tight font-light tracking-wide uppercase mb-6">
            Somos um restaurante <br /> experiente
          </h2>
          
          {/* Divisor com o ícone */}
          <div className="w-full flex items-center justify-center mb-8">
            <div className="w-16 h-[1px] bg-[#05402d]/40"></div>
            <div className="px-4 text-[#05402d] text-2xl">
              🐂
            </div>
            <div className="w-16 h-[1px] bg-[#05402d]/40"></div>
          </div>

          <p className="text-[#5a4a42] text-sm md:text-base leading-relaxed text-justify w-full mb-12">
            O Restaurante A Cernelha é um restaurante de cozinha portuguesa que honra a nossa tradição gastronómica, privilegiando os autênticos grelhados no carvão. Somos uma referência no Ribatejo, destacando-nos pela excelente qualidade e generosas quantidades, grande variedade de pratos, atendimento simpático e preços justos. A nossa extensa carta de vinhos representa orgulhosamente a cidade que nos acolhe, o Cartaxo, conhecida como capital do vinho. Trabalhamos todos os dias, incluindo feriados, para proporcionar uma verdadeira experiência da gastronomia ribatejana.
          </p>

          {/* Assinatura */}
          <div className="w-full flex flex-col items-start">
            <span className="text-4xl md:text-5xl text-gray-800" style={{ fontFamily: 'cursive' }}>
              Assinatura
            </span>
            <span style={montserrat} className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-900 mt-2">
              Ass. Patroa
            </span>
          </div>

        </div>

        {/* COLUNA DA DIREITA: Colagem de Imagens */}
        <div className="relative h-[450px] md:h-[550px] w-full mt-12 md:mt-0">
          
          {/* Caixa "+12 Anos" */}
          <div className="absolute top-[20%] -left-4 md:-left-12 bg-[#69151f] text-white p-6 md:px-10 md:py-8 flex flex-col items-center justify-center z-30 shadow-lg">
            <span className="text-4xl md:text-5xl font-bold mb-1">+12</span>
            <span style={cinzel} className="text-[10px] font-bold tracking-[0.15em] uppercase text-center leading-relaxed">
              Anos de<br/>Experiência
            </span>
          </div>

          {/* Foto Fundo - Fica no topo à direita */}
          <div className="absolute top-0 right-0 w-[80%] h-[65%] z-10">
             <img 
               src={imgTopoDireita} 
               alt="Restaurante A Cernelha vista superior" 
               className="w-full h-full object-cover shadow-xl" 
             />
          </div>

          {/* Foto Frente - Fica embaixo à esquerda com borda verde */}
          <div className="absolute bottom-0 left-0 w-[75%] h-[60%] z-20 border-[12px] border-[#05402d] shadow-2xl">
            <img 
              src={imgBaixoEsquerda} 
              alt="Detalhe A Cernelha" 
              className="w-full h-full object-cover" 
            />
          </div>

        </div>

      </div>
    </section>
  );
}