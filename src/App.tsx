import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AdminDashboard } from './pages/AdminDashboard';
import { EmployeeDashboard } from './pages/EmployeeDashboard';
import { MenuPage } from './pages/MenuPage'; // <-- 1. Importa a nova página

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota principal - A página do Restaurante */}
        <Route path="/" element={<Home />} />

        {/* Rota da Ementa Completa */}
        <Route path="/menu" element={<MenuPage />} /> {/* <-- 2. Adiciona a rota aqui */}

        {/* Rota do Administrador */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Rota do Funcionário/Staff */}
        <Route path="/staff" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;