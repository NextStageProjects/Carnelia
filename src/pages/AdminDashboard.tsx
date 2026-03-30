// Caminho: src/pages/AdminDashboard.tsx

import { useState } from 'react';
import { Sidebar } from '../components/sections/AdminDashboard/Sidebar';
import { Overview } from '../components/sections/AdminDashboard/Overview';
import { ReservationsList } from '../components/sections/AdminDashboard/ReservationsList';
import { SpecialtiesEditor } from '../components/sections/AdminDashboard/SpecialtiesEditor'; // <-- O editor das 3 fotos
import { MenuEditor } from '../components/sections/AdminDashboard/MenuEditor'; // <-- O gestor do cardápio completo

export function AdminDashboard() {
  // Estado que controla qual página está aberta na Dashboard
  const [activeSection, setActiveSection] = useState('overview');

  // Função "inteligente" que mostra o componente certo com base no botão clicado na Sidebar
  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'reservations':
        return <ReservationsList />;
      case 'specialties':
        return <SpecialtiesEditor />; // Abre o editor das 3 especialidades
      case 'menu':
        return <MenuEditor />; // Abre o ecrã "Em construção" do menu completo
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f4f2ee]">
      {/* A Sidebar fica na esquerda e enviamos-lhe o estado para ela saber qual botão pintar de verde */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* O conteúdo principal fica na direita e muda dinamicamente */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto h-screen">
        {renderContent()}
      </main>
    </div>
  );
}