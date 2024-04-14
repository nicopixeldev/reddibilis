export type User = {
  id: string;
  name?: string;
  email: string;
  password: string;
};

export type Hipoteca = {
  id: string;
  user_id: string;
  nombre: string;
  plazo_anos: number;
  total_capital: number;
  porcentaje_sobre_compra: number;
  tipo: 'fijo' | 'variable';
  interes: number;
  diferencial_variable?: number;
  interes_mensual?: number;
  num_coutas?: number;
  cuota_mensual?: number;
  total_pagar?: number;
  total_intereses?: number;
  ano_media_intereses?: number;
  primer_ano_intereses?: number;
};


export type HipotecasTable = {
  id: string;
  user_id: string;
  nombre: string;
  plazo_anos: number;
  total_capital: number;
  porcentaje_sobre_compra: number;
  tipo: 'fijo' | 'variable';
  interes: number;
  diferencial_variable?: number;
  interes_mensual?: number;
  num_coutas?: number;
  cuota_mensual?: number;
  total_pagar?: number;
  total_intereses?: number;
  ano_media_intereses?: number;
  primer_ano_intereses?: number;
};

export type HipotecaForm = {
  id: string;
  nombre: string;
  plazo_anos: number;
  total_capital: number;
  porcentaje_sobre_compra: number;
  tipo: 'fijo' | 'variable';
  interes: number;
};