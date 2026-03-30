import { useState, useEffect } from 'react';
import { getPratos, type Prato } from '../services/menu';
import { MenuHero } from '../components/sections/MenuPage/MenuHero';
import { MenuCategories } from '../components/sections/MenuPage/MenuCategories';
import { MenuList } from '../components/sections/MenuPage/MenuList';

export function MenuPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("CARNES DE BOI");
  const [pratos, setPratos] = useState<Prato[]>([]);
  const [loading, setLoading] = useState(true);

  const categorias = [
    "VEGETARIANO", "SOPAS", "ENTRADAS", "CARNES DE BOI", 
    "CARNES DE PORCO", "CARNES DE BORREGO", "PEIXES", 
    "MARISCO", "GUARNIÇÕES EXTRAS", "BEBIDAS"
  ];

  useEffect(() => {
    async function carregarMenu() {
      try {
        const dados = await getPratos(); // Puxa tudo da DB
        if (dados) setPratos(dados);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    carregarMenu();
  }, []);

  const pratosFiltrados = pratos.filter(p => p.categoria === categoriaAtiva);

  return (
    <div className="min-h-screen bg-[#f4f2ee]">
      <MenuHero />
      
      <main className="max-w-6xl mx-auto py-16 px-4">
        <MenuCategories 
          categorias={categorias} 
          ativa={categoriaAtiva} 
          setAtiva={setCategoriaAtiva} 
        />
        
        <MenuList 
          pratos={pratosFiltrados} 
          loading={loading} 
        />
      </main>
    </div>
  );
}