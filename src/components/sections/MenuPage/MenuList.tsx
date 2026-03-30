// Caminho: src/components/sections/MenuPage/MenuList.tsx

import { type Prato } from '../../../services/menu';

// Definimos a interface para o TypeScript saber o que o componente recebe
interface Props {
  pratos: Prato[];
  loading: boolean;
}

export function MenuList({ pratos, loading }: Props) {
  const cinzel = { fontFamily: "'Cinzel', serif" };
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };

  if (loading) {
    return (
      <div 
        style={montserrat} 
        className="text-center py-10 text-[10px] uppercase tracking-widest text-[#69151f]"
      >
        A preparar a mesa...
      </div>
    );
  }

  if (pratos.length === 0) {
    return (
      <div 
        style={montserrat} 
        className="text-center py-10 text-gray-400 text-[10px] uppercase tracking-widest italic"
      >
        Esta categoria ainda está a ser preparada pelo Chef.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 animate-fade-in">
      {pratos.map((item: Prato) => (
        <div key={item.id} className="flex items-center gap-4 group">
          
          {/* Miniatura Circular */}
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm bg-white">
            <img 
              src={item.imagem || 'https://via.placeholder.com/100?text=Sem+Foto'} 
              alt={item.nome} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
          </div>

          <div className="flex-1 flex items-end gap-2">
            <div className="flex flex-col flex-1">
              {/* Nome do Prato - Cinzel | #69151f | Pequeno e elegante */}
              <span 
                style={cinzel}
                className="text-[#69151f] text-[11px] md:text-xs font-bold uppercase leading-tight tracking-wide"
              >
                {item.nome}
              </span>
            </div>

            {/* Linha pontilhada de ligação */}
            <div className="flex-1 border-b border-[#05402d]/10 border-dotted mb-1"></div>

            <div className="flex flex-col items-end min-w-fit">
              {/* Meia dose (se existir) */}
              {item.preco_meia && (
                <span className="text-[9px] text-gray-400 font-bold mb-0.5">
                  ½ {item.preco_meia}
                </span>
              )}
              {/* Preço Inteiro - Cinzel | #69151f */}
              <span 
                style={cinzel}
                className="text-[11px] md:text-xs font-bold text-[#69151f]"
              >
                {item.preco}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}