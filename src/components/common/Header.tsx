// src/components/common/Header.tsx
import { useState } from 'react';
import logoImg from '../../assets/common/header/Logo-da-cernelha.png';
import navIcon from '../../assets/common/header/icone-navbar.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // 30px convertido para rem para respeitar o zoom do utilizador
  // clamp permite que a fonte diminua um pouco se a tela for muito pequena
  const linkStyle = { 
    fontFamily: "'Cinzel', serif",
    fontSize: 'clamp(1.2rem, 1.56vw, 1.875rem)', 
    fontWeight: '400', 
    lineHeight: '1.2',
    textDecoration: 'none'
  };

  return (
    <div className="sticky top-0 z-[60] w-full bg-[#f1efea] border-b border-black/5">
      {/* CENTRALIZAÇÃO MESTRE:
        Em vez de 'absolute', usamos 'justify-center'. 
        Isso faz com que a Logo fique sempre no meio exato e os links 
        mantenham a distância correta, não importa o tamanho da tela.
      */}
      <header className="w-full max-w-[1920px] h-[144px] mx-auto flex items-center justify-center px-6 relative">
        
        {/* GRUPO ESQUERDA - Cor Verde #05402d
            Gap: 52px (convertido para 2.7vw para ser elástico)
        */}
        <nav className="hidden md:flex items-center gap-[clamp(20px,2.7vw,52px)] uppercase">
          <a href="#menu" style={linkStyle} className="text-[#05402d] hover:opacity-70 transition-opacity">
            Menu
          </a>
          <a href="#takeaway" style={linkStyle} className="text-[#05402d] whitespace-nowrap hover:opacity-70 transition-opacity">
            Take Away
          </a>
        </nav>

        {/* LOGO CENTRAL 
            Distância para os lados (os pink boxes do Penpot): 97px (5vw)
        */}
        <div className="mx-[clamp(30px,5vw,97px)] flex-shrink-0">
          <a href="#hero">
            <img 
              src={logoImg} 
              alt="A Cernelha" 
              className="h-[100px] md:h-[146px] w-auto object-contain" 
            />
          </a>
        </div>

        {/* GRUPO DIREITA - Cor Bordeaux #69151f
            Gap: 52px
        */}
        <nav className="hidden md:flex items-center gap-[clamp(20px,2.7vw,52px)] uppercase">
          <a href="#reservas" style={linkStyle} className="text-[#69151f] hover:opacity-70 transition-opacity">
            Reservas
          </a>
          <a href="#galeria" style={linkStyle} className="text-[#69151f] hover:opacity-70 transition-opacity">
            Galeria
          </a>
        </nav>

        {/* BOTÃO MOBILE (Apenas aparece em telas pequenas) */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none"
        >
          {isMenuOpen ? (
            <span className="text-3xl text-[#69151f] font-light px-2">✕</span>
          ) : (
            <img 
              src={navIcon} 
              alt="Abrir Menu" 
              className="w-10 h-auto object-contain" 
            />
          )}
        </button>
      </header>

      {/* MENU MOBILE */}
      <div 
        className={`md:hidden w-full bg-[#f1efea] overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-8 py-10 uppercase text-center">
          <a href="#menu" style={linkStyle} className="text-[#05402d]" onClick={toggleMenu}>Menu</a>
          <a href="#takeaway" style={linkStyle} className="text-[#05402d]" onClick={toggleMenu}>Take Away</a>
          <a href="#reservas" style={linkStyle} className="text-[#69151f]" onClick={toggleMenu}>Reservas</a>
          <a href="#galeria" style={linkStyle} className="text-[#69151f]" onClick={toggleMenu}>Galeria</a>
        </nav>
      </div>
    </div>
  );
}