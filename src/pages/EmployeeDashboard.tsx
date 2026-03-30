import { useState } from 'react';
import { Sidebar } from '../components/sections/EmployeeDashboard/Sidebar';
import { ReservationsList } from '../components/sections/EmployeeDashboard/ReservationsList';

export function EmployeeDashboard() {
  // Staff só tem reservas, logo este estado é fixo
  const [activeSection, setActiveSection] = useState('reservations');

  return (
    <div className="flex min-h-screen bg-[#f1efea] font-sans text-gray-900 overflow-hidden">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        {activeSection === 'reservations' && <ReservationsList />}
      </main>
    </div>
  );
}