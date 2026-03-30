// src/components/common/Header.tsx
import { Link } from 'react-router-dom';
import logoImg from '../../assets/common/header/Logo da cernelha.png';

export function Header() {
  const cinzel = { fontFamily: "'Cinzel', serif" };

  return (
    <header className="w-full py-8 bg-[#f1efea] flex items-center justify-center px-8 sticky top-0 z-50 shadow-sm/5">
      <div className="flex items-center gap-4 md:gap-16 max-w-7xl w-full justify-center">
        
        {/* Links da Esquerda - Verdes (#05402d) */}
        <nav className="hidden md:block flex-1 text-right">
          <ul style={cinzel} className="flex justify-end gap-12 text-[15px] font-bold tracking-[0.2em] uppercase">
            <li className="text-[#05402d] hover:opacity-70 transition-all">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="text-[#05402d] hover:opacity-70 transition-all">
              <Link to="/take-away">Take Away</Link>
            </li>
          </ul>
        </nav>

        {/* Logo Central */}
        <div className="px-6 md:px-12 flex-shrink-0">
          <Link to="/">
            <img 
              src={logoImg} 
              alt="A Cernelha" 
              className="h-20 md:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300" 
            />
          </Link>
        </div>

        {/* Links da Direita - Vermelhos (#69151f) */}
        <nav className="hidden md:block flex-1 text-left">
          <ul style={cinzel} className="flex justify-start gap-12 text-[15px] font-bold tracking-[0.2em] uppercase">
            <li className="text-[#69151f] hover:opacity-70 transition-all">
              <Link to="/reservas">Reservas</Link>
            </li>
            <li className="text-[#69151f] hover:opacity-70 transition-all">
              <Link to="/galeria">Galeria</Link>
            </li>
          </ul>
        </nav>

        {/* Menu Mobile simplificado */}
        <div className="md:hidden absolute right-8">
           <button style={cinzel} className="text-[#05402d] text-[15px] font-bold tracking-widest uppercase">
              Menu
           </button>
        </div>
      </div>
    </header>
  );
}