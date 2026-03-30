import { supabase } from '../lib/supabase';

// Define o formato dos dados de uma especialidade
export interface Especialidade {
  id: string;
  nome: string;
  preco: string | null;
  imagem: string;
  ordem: number;
}

// ==========================================
// 1. Função para o site LER as especialidades (Home)
// ==========================================
export async function getEspecialidades() {
  const { data, error } = await supabase
    .from('especialidades')
    .select('*')
    .order('ordem', { ascending: true })
    .limit(3); // Garante que puxa só as 3 principais para não estragar o design

  if (error) {
    console.error('Erro ao procurar especialidades:', error);
    throw error;
  }

  return data;
}

// ==========================================
// 2. Função para o Admin ATUALIZAR uma especialidade (Dashboard)
// ==========================================
export async function updateEspecialidade(id: string, updates: Partial<Especialidade>) {
  const { data, error } = await supabase
    .from('especialidades')
    .update(updates)
    .eq('id', id);

  if (error) {
    console.error('Erro ao atualizar especialidade:', error);
    throw error;
  }
  
  return data;
}
// ==========================================
// 3. Função para Fazer Upload da Imagem para o Storage
// ==========================================
export async function uploadImagemEspecialidade(file: File) {
  // Cria um nome único para a imagem (ex: 1698765432-foto.jpg)
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `especialidades/${fileName}`;

  // Faz o upload para o bucket 'imagens'
  const { error: uploadError } = await supabase.storage
    .from('imagens')
    .upload(filePath, file);

  if (uploadError) {
    console.error('Erro ao fazer upload da imagem:', uploadError);
    throw uploadError;
  }

  // Vai buscar o link público da imagem que acabou de ser guardada
  const { data } = supabase.storage
    .from('imagens')
    .getPublicUrl(filePath);

  return data.publicUrl;
}