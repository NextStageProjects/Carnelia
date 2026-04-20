import { useState, useEffect } from 'react';
import { getPratos, type Prato } from '../../../services/menu';
import imgTouro from '../../../assets/home/touro/tourro.png';

export function Menu() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("CARNES DE BOI");
  const [pratos, setPratos] = useState<Prato[]>([]);
  const [loading, setLoading] = useState(true);

  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  const pxToVw = (px: number) => `${(px / 19.2).toFixed(4)}vw`;

  useEffect(() => {
    async function carregarMenu() {
      try {
        const dados = await getPratos();
        if (dados) setPratos(dados);
      } catch (error) {
        console.error("Erro ao carregar o menu:", error);
      } finally {
        setLoading(false);
      }
    }
    carregarMenu();
  }, []);

  const categorias = [
    "VEGETARIANO", "SOPAS", "ENTRADAS", "CARNES DE BOI", 
    "CARNES DE PORCO", "CARNES DE BORREGO", "PEIXES", 
    "MARISCO", "GUARNIÇÕES EXTRAS", "BEBIDAS"
  ];

  const pratosExibidos = pratos.filter(p => p.categoria === categoriaAtiva);

  return (
    <section 
      id="menu" 
      style={{ backgroundColor: "#f1efea" }} 
      className="w-full flex flex-col items-center overflow-hidden"
    >
      {/* CONTENTOR MESTRE */}
      <div className="relative w-full max-w-[1920px] h-[clamp(1000px,62vw,1250px)] mx-auto">
        
        {/* 1. Label: MENU */}
        <div 
          style={{ 
            position: 'absolute', 
            top: pxToVw(52), 
            left: '50%',
            transform: 'translateX(-50%)',
            width: pxToVw(1280),
            textAlign: 'center', 
            ...montserrat 
          }}
        >
          <span style={{ fontSize: pxToVw(20), fontWeight: 800, letterSpacing: '0.5em' }} className="text-[#05402d] uppercase">
            MENU
          </span>
        </div>

        {/* 2. Título: OS NOSSOS PRATOS */}
        <div 
          style={{ 
            position: 'absolute', 
            top: pxToVw(105), 
            left: '50%',
            transform: 'translateX(-50%)',
            width: pxToVw(1280),
            textAlign: 'center', 
            ...cinzel 
          }}
        >
          <h2 style={{ fontSize: pxToVw(64), fontWeight: 400 }} className="text-[#69151f] uppercase leading-none">
            Os Nossos Pratos
          </h2>
        </div>

        {/* 3. Divisor Touro */}
        <div style={{ position: 'absolute', top: pxToVw(190), width: '100%' }} className="flex items-center justify-center gap-[1.5vw]">
          <div style={{ width: pxToVw(80), height: '2px', backgroundColor: '#05402d' }}></div>
          <img 
            src={imgTouro} 
            alt="Touro" 
            style={{ width: pxToVw(63.56), height: pxToVw(82) }} 
            className="object-contain mix-blend-multiply" 
          />
          <div style={{ width: pxToVw(80), height: '2px', backgroundColor: '#05402d' }}></div>
        </div>

        {/* 4. TEXTO CENTRALIZADO: GRELHADOS NO CARVÃO 
            - Mantemos Top 276px e Width 591px
            - Forçamos o centro com left 50% e transform
        */}
        <div 
          style={{ 
            position: 'absolute', 
            top: pxToVw(276), 
            left: '50%',
            transform: 'translateX(-50%)',
            width: pxToVw(591),
            textAlign: 'center',
            ...montserrat 
          }}
        >
          <p style={{ fontSize: pxToVw(21), fontWeight: 400 }} className="text-[#69151f]">
            Todos os nossos grelhados são feitos no carvão
          </p>
        </div>

        {/* 5. Barra de Categorias */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(360),
            left: '50%',
            transform: 'translateX(-50%)',
            width: pxToVw(1389.72), 
            height: pxToVw(101.27), 
            backgroundColor: '#05402D',
            clipPath: "polygon(0% 25%, 2% 0%, 98% 0%, 100% 25%, 100% 75%, 98% 100%, 2% 100%, 0% 75%)",
            zIndex: 20
          }}
          className="flex items-center justify-center shadow-xl"
        >
          <ul className="flex items-center justify-center gap-x-[2vw] w-full px-[4vw]">
            {categorias.map((cat) => (
              <li 
                key={cat} 
                onClick={() => setCategoriaAtiva(cat)} 
                style={{ ...montserrat, fontWeight: 700, fontSize: pxToVw(13) }} 
                className={`tracking-widest cursor-pointer transition-all text-white flex flex-col items-center uppercase ${categoriaAtiva === cat ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
              >
                <span>{cat}</span>
                <div className={`h-[2px] bg-white transition-all duration-300 mt-1 ${categoriaAtiva === cat ? "w-full" : "w-0"}`} />
              </li>
            ))}
          </ul>
        </div>

        {/* 6. Grid de Pratos */}
        <div 
          style={{ 
            position: 'absolute',
            top: pxToVw(520),
            width: '100%',
            padding: `0 ${pxToVw(180)}`
          }}
        >
          {loading ? (
            <div style={montserrat} className="text-center py-20 text-[#69151f] text-xl uppercase tracking-widest">A carregar o menu...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[10vw] gap-y-[3vw]">
              {pratosExibidos.map((item) => (
                <div key={item.id} className="flex items-center gap-[1.5vw] group w-full">
                  <div style={{ width: pxToVw(80), height: pxToVw(80) }} className="rounded-full overflow-hidden flex-shrink-0 border-2 border-white bg-[#B1B2B5] shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <img src={item.imagem || imgTouro} alt={item.nome} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex items-center justify-between overflow-hidden">
                    <span style={{ ...montserrat, fontSize: pxToVw(21), fontWeight: 400 }} className="text-[#69151f] uppercase leading-tight whitespace-nowrap pr-[1vw]">
                      {item.nome}
                    </span>
                    <div className="flex-1 border-b-[1.5px] border-[#05402d] opacity-30 relative top-[-4px]"></div>
                    <div style={{ ...montserrat, fontSize: pxToVw(21), fontWeight: 700 }} className="flex gap-[1.5vw] text-[#69151f] whitespace-nowrap pl-[1vw]">
                      {item.preco_meia && <span className="flex items-center gap-1"><span className="text-[1vw] font-medium opacity-80">½</span> {item.preco_meia}€</span>}
                      {item.preco && <span className="min-w-[5vw] text-right">{item.preco}€</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}