import { useState } from 'react'; // <--- ESTA LINHA RESOLVE O ERRO
import { Header } from '../components/common/Header';
import { Hero } from '../components/sections/Home/Hero';
import { Sobre } from '../components/sections/Home/Sobre';
import { Especialidades } from '../components/sections/Home/Especialidades';
import { Menu } from '../components/sections/Home/Menu';
import { TakeAway } from '../components/sections/Home/TakeAway';
import { Celebridades } from '../components/sections/Home/Celebridades';
import { Reservas } from '../components/sections/Home/Reservas';
import { Galeria } from '../components/sections/Home/Galeria';
import { Reviews } from '../components/sections/Home/Reviews';
import { Footer } from '../components/common/Footer';
import { ReservationModal } from '../components/modals/ReservationModal';

export function Home() {
  // Estado para controlar se o modal está aberto ou fechado
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f2ee] flex flex-col font-sans text-gray-900 overflow-x-hidden">
      
      <Header />
      
      <main className="flex-1 flex flex-col w-full">
        {/* Passamos a função de abrir o modal para o Hero */}
        <Hero onOpenReservation={() => setIsModalOpen(true)} />
        
        <Sobre />
        <Especialidades />
        <Menu />
        <Celebridades />
        <Reservas />
        <Galeria />
        <TakeAway />
        <Reviews />
      </main>

      <Footer />

      {/* Modal de Reserva */}
      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}