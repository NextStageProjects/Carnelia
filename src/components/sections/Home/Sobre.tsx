// src/components/sections/Home/Sobre.tsx
export function Sobre() {
  return (
    <section className="w-full bg-[#f4f2ee] py-24 px-8 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* COLUNA DA ESQUERDA: Textos */}
        <div className="flex flex-col items-center text-center">
          
          <span className="text-brand-green font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
            Sobre Nós
          </span>
          
          <h2 className="text-brand-red text-3xl md:text-[2.75rem] leading-tight font-light tracking-wide uppercase mb-6">
            Somos um restaurante <br /> experiente
          </h2>
          
          {/* Divisor com o ícone */}
          <div className="w-full flex items-center justify-center mb-8">
            <div className="w-16 h-[1px] bg-brand-green/40"></div>
            <div className="px-4 text-brand-green text-2xl">
              {/* Substitua por um ícone real (ex: touro) depois */}
              🐂
            </div>
            <div className="w-16 h-[1px] bg-brand-green/40"></div>
          </div>

          <p className="text-[#5a4a42] text-sm md:text-base leading-relaxed text-justify w-full mb-12">
            O Restaurante A Cernelha é um restaurante de cozinha portuguesa que honra a nossa tradição gastronómica, privilegiando os autênticos grelhados no carvão. Somos uma referência no Ribatejo, destacando-nos pela excelente qualidade e generosas quantidades, grande variedade de pratos, atendimento simpático e preços justos. A nossa extensa carta de vinhos representa orgulhosamente a cidade que nos acolhe, o Cartaxo, conhecida como capital do vinho. Trabalhamos todos os dias, incluindo feriados, para proporcionar uma verdadeira experiência da gastronomia ribatejana.
          </p>

          {/* Assinatura alinhada à esquerda */}
          <div className="w-full flex flex-col items-start">
            {/* Usando uma fonte cursiva genérica para simular a assinatura */}
            <span className="text-4xl md:text-5xl text-gray-800" style={{ fontFamily: 'cursive' }}>
              Assinatura
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-gray-900 mt-2">
              Ass. Patroa
            </span>
          </div>

        </div>

        {/* COLUNA DA DIREITA: Colagem de Imagens */}
        <div className="relative h-[450px] md:h-[550px] w-full mt-12 md:mt-0">
          
          {/* Caixa "+12 Anos" (Posicionada por cima de tudo, invadindo um pouco a esquerda) */}
          <div className="absolute top-[20%] -left-4 md:-left-12 bg-brand-red text-white p-6 md:px-10 md:py-8 flex flex-col items-center justify-center z-30 shadow-lg">
            <span className="text-4xl md:text-5xl font-bold mb-1">+12</span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-center leading-relaxed">
              Anos de<br/>Experiência
            </span>
          </div>

          {/* Foto Fundo (Equipe) - Fica no topo à direita */}
          <div className="absolute top-0 right-0 w-[80%] h-[60%] z-10 bg-gray-300">
             <img 
               src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop" 
               alt="Equipe A Cernelha" 
               className="w-full h-full object-cover" 
             />
          </div>

          {/* Foto Frente (Salão) - Fica embaixo à esquerda com borda */}
          <div className="absolute bottom-0 left-0 w-[75%] h-[55%] z-20 border-[10px] border-brand-green bg-gray-400">
            <img 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop" 
              alt="Salão A Cernelha" 
              className="w-full h-full object-cover" 
            />
          </div>

        </div>

      </div>
    </section>
  );
}