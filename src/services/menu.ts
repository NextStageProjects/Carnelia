import { supabase } from '../lib/supabase';

export interface Prato {
  id: string;
  nome: string;
  preco: string | null;
  preco_meia: string | null;
  categoria: string;
  imagem: string | null;
  destaque: boolean;
}

// 1. Ler os pratos (podemos pedir só os destaques ou todos)
export async function getPratos(somenteDestaques = false) {
  let query = supabase.from('pratos').select('*').order('categoria').order('nome');
  
  if (somenteDestaques) {
    query = query.eq('destaque', true);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

// 2. Criar um prato novo
export async function createPrato(prato: Omit<Prato, 'id'>) {
  const { data, error } = await supabase.from('pratos').insert([prato]).select().single();
  if (error) throw error;
  return data;
}

// 3. Atualizar um prato
export async function updatePrato(id: string, updates: Partial<Prato>) {
  const { data, error } = await supabase.from('pratos').update(updates).eq('id', id).select().single();
  if (error) throw error;
  return data;
}

// 4. Apagar um prato
export async function deletePrato(id: string) {
  const { error } = await supabase.from('pratos').delete().eq('id', id);
  if (error) throw error;
  return true;
}

// 5. Upload de Imagem para o Menu
export async function uploadImagemMenu(file: File) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `menu/${fileName}`;

  const { error: uploadError } = await supabase.storage.from('imagens').upload(filePath, file);
  if (uploadError) throw uploadError;

  const { data } = supabase.storage.from('imagens').getPublicUrl(filePath);
  return data.publicUrl;
}