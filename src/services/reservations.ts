import { supabase } from '../lib/supabase';

export interface ReservationData {
  id?: string;
  nome_cliente: string;
  email_cliente?: string;
  telefone_cliente: string;
  data_reserva: string;
  hora_reserva: string;
  numero_pessoas: number;
  tipo_reserva: 'carta' | 'grupo';
  estado?: 'pendente' | 'aceite' | 'cancelado';
  observacoes?: string;
}

// Criar Reserva (Site)
export async function createReservation(data: ReservationData) {
  const { data: result, error } = await supabase
    .from('reservas')
    .insert([{ ...data, estado: 'pendente' }]);
  if (error) throw error;
  return result;
}

// Ler Reservas (Dashboard)
export async function getReservations() {
  const { data, error } = await supabase
    .from('reservas')
    .select('*')
    .order('data_reserva', { ascending: true });
  if (error) throw error;
  return data;
}

// Atualizar apenas o Estado (Aceitar/Cancelar)
export async function updateReservationStatus(id: string, novoEstado: 'aceite' | 'cancelado') {
  const { data, error } = await supabase
    .from('reservas')
    .update({ estado: novoEstado })
    .eq('id', id);
  if (error) throw error;
  return data;
}

// Editar reserva completa (Para a ação Editar)
export async function updateReservationDetails(id: string, updatedData: Partial<ReservationData>) {
  const { data, error } = await supabase
    .from('reservas')
    .update(updatedData)
    .eq('id', id);
  if (error) throw error;
  return data;
}