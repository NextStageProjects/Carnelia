export function Reviews() {
  const avaliacoes = [
    {
      nome: "Fernando L",
      tipo: "Cliente",
      texto: "Este restaurante tem vindo a ganhar prestígio, no Cartaxo, e vem na linha do Restaurante O Toucinho - Almeirim, no que respeita à sopa de Pedra, que era a referência da Região. Aqui ..",
      estrelas: 4,
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      nome: "Tony Serafim",
      tipo: "Guia local",
      texto: "Went here for lunch after visiting the headquarters of Casa das Peles, what a lovely surprise! Cernelha is a truly authentic Portuguese restaurant with great food and wonderful staff. We...",
      estrelas: 5,
      inicial: "T",
      corFundo: "bg-[#1a4d4e]"
    },
    {
      nome: "Shirley \"Muse Faery\" NKL",
      tipo: "Guia local",
      texto: "Delicious traditional Portuguese food! Very popular with the locals. We ate grilled octopus as the main dish and espetada de lulas e camarão (grilled squid and prawns with...",
      estrelas: 5,
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      nome: "João Meijinhos",
      tipo: "Guia local",
      texto: "Good food for a low price. Portions are huge, easily feeds 2. Service is okay.",
      estrelas: 4,
      inicial: "J",
      corFundo: "bg-[#d48c2c]"
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-4 flex justify-center relative overflow-hidden">
      {/* Carimbo "A Cernelha" à esquerda */}
      <div className="absolute left-10 top-10 hidden xl:block opacity-20">
        <div className="w-40 h-40 rounded-full border border-black flex items-center justify-center p-4 rotate-[-15deg]">
          <span className="text-black text-center text-xs font-serif italic">
            Restaurante<br/>A Cernelha
          </span>
        </div>
      </div>

      <div className="max-w-7xl w-full">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-[10px]">
            Reviews
          </span>
          <h2 className="text-brand-red text-4xl md:text-5xl font-light tracking-wide uppercase mt-2 mb-6">
            Comentários
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-brand-green/30"></div>
            <span className="text-2xl">🐂</span>
            <div className="w-16 h-[1px] bg-brand-green/30"></div>
          </div>
          <p className="text-brand-red/80 italic text-sm">
            Alguns comentários e avaliações deixados pelos nossos clientes.
          </p>
        </div>

        {/* Grid de Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {avaliacoes.map((item, index) => (
            <div key={index} className="bg-[#f4f2ee] p-8 flex flex-col items-center text-center rounded-sm shadow-sm h-full">
              {/* Avatar ou Inicial */}
              <div className="mb-6">
                {item.img ? (
                  <img src={item.img} alt={item.nome} className="w-16 h-16 rounded-full object-cover shadow-md" />
                ) : (
                  <div className={`w-16 h-16 rounded-full ${item.corFundo} flex items-center justify-center text-white text-2xl font-bold shadow-md`}>
                    {item.inicial}
                  </div>
                )}
              </div>

              {/* Estrelas */}
              <div className="flex gap-1 mb-6 text-yellow-500 text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < item.estrelas ? "★" : "☆"}</span>
                ))}
              </div>

              {/* Texto do Comentário */}
              <p className="text-brand-green/80 text-[13px] leading-relaxed mb-8 flex-1">
                "{item.texto}"
              </p>

              {/* Assinatura */}
              <div className="mt-auto">
                <h4 className="text-brand-red font-bold text-sm uppercase tracking-tight">{item.nome}</h4>
                <p className="text-brand-green/60 text-[10px] uppercase tracking-widest mt-1">{item.tipo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Paginação (Visual) */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-brand-red"></div>
          <div className="w-2 h-2 rounded-full bg-brand-red/20"></div>
          <div className="w-2 h-2 rounded-full bg-brand-red/20"></div>
        </div>
      </div>
    </section>
  );
}