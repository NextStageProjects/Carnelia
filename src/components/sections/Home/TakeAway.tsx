// src/components/sections/Home/TakeAway.tsx
import fotoMotoboy from "../../../assets/home/takeaway.tsx/foto/motoboy.jpg";
import fotoPrato from "../../../assets/home/takeaway.tsx/foto/prato.png";
import imgTouro from "../../../assets/home/touro/tourro.png";
import { Phone } from "lucide-react";

export function TakeAway() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  const ticketClip = {
    clipPath: "polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 100% 85%, 95% 100%, 5% 100%, 0% 85%)"
  };

  return (
    <section 
      id="takeaway" 
      className="relative w-full bg-[#69151f] py-12 md:py-24 flex flex-col items-center md:justify-center overflow-hidden min-h-[600px] md:min-h-[700px]"
    >
      <div className="max-w-6xl w-full px-6 flex flex-col items-center md:flex-row z-10">
        
        {/* TEXTO E BOTÕES */}
        <div className="w-full md:w-[45%] md:translate-x-[-8%] flex flex-col items-center text-center md:items-start md:text-left mb-12 md:mb-0">
          <span style={montserrat} className="text-white text-[10px] font-bold tracking-[0.5em] uppercase opacity-80 mb-3">
            L E V A N T A M E N T O S
          </span>
          
          <h2 style={cinzel} className="text-white text-[28px] md:text-[38px] leading-tight uppercase mt-2 mb-5">
            Temos Take Away
          </h2>

          <div className="flex items-center justify-center md:justify-start gap-4 mb-6 w-full">
            <div className="w-12 h-[1px] bg-white/20"></div>
            <img src={imgTouro} alt="Touro" className="h-7 w-auto object-contain opacity-90" />
            <div className="w-12 h-[1px] bg-white/20"></div>
          </div>

          <p style={montserrat} className="text-white text-[13px] md:text-[15px] font-light mb-8 tracking-wide opacity-90">
            Leve o melhor da nossa tradição para casa!
          </p>

          <div style={montserrat} className="w-full max-w-[280px] md:max-w-none space-y-3 mb-10 text-white/80 text-[11px] md:text-[12px] uppercase tracking-wider flex flex-col items-start">
            <div className="flex items-center gap-3">
              <span className="text-white text-[8px]">▶</span> 
              <p>Consulte a nossa carta e escolha o seu pedido</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white text-[8px]">▶</span> 
              <p>Entre em contato para pedir o seu take away</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white text-[8px]">▶</span> 
              <p>Levante o seu pedido no restaurante</p>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <button style={ticketClip} className="bg-[#05402d] text-white px-5 py-2.5 flex items-center gap-2 hover:scale-105 transition-all shadow-lg text-sm">
              <Phone size={14} fill="white" />
              <span style={montserrat} className="font-bold uppercase tracking-wider">Ligar</span>
            </button>
            <button style={ticketClip} className="bg-[#05402d] text-white px-5 py-2.5 flex items-center justify-center hover:scale-105 transition-all shadow-lg min-w-[120px] text-sm">
              <span style={montserrat} className="font-bold uppercase tracking-wider">Ver Carta</span>
            </button>
          </div>
        </div>

        {/* MOLDURA TÚNEL - COMPRIMENTO AUMENTADO NO MOBILE (w-[150%]) */}
        <div className={`
          relative bg-[#05402d] rounded-l-full shadow-xl z-0 overflow-hidden flex items-center justify-end
          /* Mobile: Muito mais comprida para a frente */
          w-[200%] h-[250px] translate-x-32 mt-4
          /* PC: Mantido conforme a versão que estavas satisfeito */
          md:absolute md:right-[-8%] md:w-[60%] md:h-[450px] md:top-[18%] md:translate-x-0 md:mt-0
          p-[3px] md:p-[6px]
        `}>
          <div className="w-full h-full rounded-l-full overflow-hidden">
            <img 
              src={fotoMotoboy} 
              alt="Serviço Take Away" 
              className="w-full h-full object-cover" 
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
        </div>

        {/* FOTO DO PRATO */}
        <div className={`
          absolute pointer-events-none z-20
          right-[-15px] bottom-[-15px] w-[210px]
          md:right-0 md:bottom-[-.4px] md:w-[380px]
        `}>
          <img 
            src={fotoPrato} 
            alt="Prato" 
            className="w-full h-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.8)]" 
          />
        </div>
      </div>
    </section>
  );
}