export function Celebridades() {
  const celebridades = [
    {
      nome: "Miguel Rocha Vieira",
      cargo: "Chef",
      descricao: "Chef português com 3 estrelas michelin e um dos maiores embaixadores da gastronomia portuguesa no mundo.",
      imagem: "https://images.unsplash.com/photo-1577214465448-0001967201ed?q=80&w=400" // Substitua pela foto real
    },
    {
      nome: "Sónia Tavares",
      cargo: "Vocalista dos \"The Gift\"",
      descricao: "Cantora portuguesa e vocalista dos The Gift e uma das maiores vozes da música portuguesa no mundo global.",
      imagem: "https://images.unsplash.com/photo-1516575334481-f8528e946623?q=80&w=400"
    },
    {
      nome: "Tony Carreira",
      cargo: "Cantor e músico português",
      descricao: "Cantor português com carreira mundial e um dos maiores ícones da música romântica em Portugal e no mundo.",
      imagem: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=400"
    },
    {
      nome: "Flávio Furtado",
      cargo: "Comentador televisivo",
      descricao: "Ex concorrente da casa dos segredos, apresentador, comentador e uma figura conhecida na TV em Portugal.",
      imagem: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400"
    }
  ];

  return (
    <section className="w-full bg-[#f4f2ee] py-20 px-6 flex justify-center border-t border-brand-green/5">
      <div className="max-w-7xl w-full">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-[10px]">
            Curiosidades
          </span>
          <h2 className="text-brand-red text-4xl md:text-5xl font-light tracking-wide uppercase mt-2 mb-6">
            Celebridades
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-brand-green/30"></div>
            <span className="text-2xl">🐂</span>
            <div className="w-16 h-[1px] bg-brand-green/30"></div>
          </div>

          <p className="text-brand-red/80 italic text-sm">
            Algumas caras conhecidas que já visitaram o nosso espaço.
          </p>
        </div>

        {/* Grid de Celebridades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {celebridades.map((pessoa, index) => (
            <div key={index} className="flex flex-col">
              {/* Foto Vertical */}
              <div className="aspect-[3/4] overflow-hidden mb-6 shadow-md">
                <img 
                  src={pessoa.imagem} 
                  alt={pessoa.nome}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Informações */}
              <h3 className="text-brand-red font-bold text-lg uppercase tracking-tight mb-1">
                {pessoa.nome}
              </h3>
              <p className="text-brand-green italic text-xs font-medium mb-3">
                {pessoa.cargo}
              </p>
              <p className="text-brand-red/80 text-sm leading-relaxed text-justify">
                {pessoa.descricao}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}