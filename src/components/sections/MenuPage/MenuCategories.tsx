// src/components/sections/MenuPage/MenuCategories.tsx

interface Props {
  categorias: string[];
  ativa: string;
  setAtiva: (cat: string) => void;
}

export function MenuCategories({ categorias, ativa, setAtiva }: Props) {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };

  return (
    <nav className="bg-[#05402d] rounded-sm mb-10 shadow-lg overflow-hidden w-full">
      {/* Container de scroll */}
      <div className="scroll-container no-scrollbar w-full">
        
        {/* O 'w-max' é obrigatório para o scroll funcionar */}
        <ul className="flex flex-nowrap items-center px-6 py-5 gap-8 w-max">
          {categorias.map((cat) => (
            <li 
              key={cat} 
              onClick={() => setAtiva(cat)}
              style={montserrat}
              className={`text-[10px] font-bold tracking-[0.15em] cursor-pointer transition-all uppercase whitespace-nowrap
                ${ativa === cat 
                  ? "text-white border-b-2 border-white pb-1" 
                  : "text-white/40 hover:text-white"
                }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}