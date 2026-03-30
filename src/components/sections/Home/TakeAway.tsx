export function TakeAway() {
  return (
    <section id="takeaway" className="w-full bg-[#69151f] py-16 flex justify-center overflow-hidden">
      <div className="max-w-[1400px] w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LADO ESQUERDO: CONTEÚDO (Mantido como estavas a gostar) */}
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start text-center md:text-left text-white">
          <span className="tracking-[0.8em] uppercase text-[11px] font-bold mb-4 opacity-90">
            L E V A N T A M E N T O S
          </span>
          
          <h2 className="text-5xl md:text-7xl font-serif italic mb-6">
            Take away
          </h2>

          <div className="text-4xl mb-8">🐂</div>

          <div className="space-y-2 mb-10 text-sm md:text-base font-light opacity-95">
            <p className="font-bold text-lg mb-4">Leve o melhor da nossa tradição para casa!</p>
            <p>Consulte a nossa carta e escolha o seu pedido</p>
            <p>Entre em contato connosco para pedir o seu take away</p>
            <p>Levante o seu pedido no restaurante</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-white text-[#69151f] px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-black hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
              <span className="text-base">📞</span> Ligar
            </button>
            <button className="bg-white text-[#69151f] px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-black hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
              <span className="text-base">📖</span> Ver Carta
            </button>
          </div>
        </div>

        {/* LADO DIREITO: FOTO RETANGULAR COMPRIDA COM CONTORNO VERDE */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-end relative">
           {/* Ajustes chave:
              - aspect-[16/9] ou [2/1]: Torna o retângulo bem mais comprido (largo).
              - border-8 border-[#05402d]: Adiciona o contorno verde grosso (usando a tua cor brand-green).
              - rounded-[100px]: Mantém as bordas fortemente arredondadas.
           */}
          <div className="relative w-full max-w-[600px] aspect-[16/9] md:aspect-[2/1] rounded-[100px] overflow-hidden shadow-2xl border-8 border-[#05402d]">
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop" 
              alt="Take Away" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}