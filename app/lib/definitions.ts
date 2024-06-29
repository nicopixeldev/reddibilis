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

export type InversionesTable = {
  id: string;
  user_id: string;
  nombre: string;
  valor: number;
  itp: number;
  notaria: number;
  registro: number;
  gestoria: number;
  reforma?: number;
  comision_agencia?: number;
  gastos_hipoteca?: number;
  alquiler_renta_mes: number;
  gastos_comunidad?: number;
  gastos_mantenimiento?: number;
  seguro_hogar?: number;
  seguro_vida?: number;
  seguro_impago?: number;
  ibi: number;
  beneficio_bruto_ano?: number;
  beneficio_neto_ano?: number;
  rentabilidad_bruta?: number;
  rentabilidad_neta?: number;
  cashflow_ano?: number;
  roce?: number;
  alquiler_minimo?: number;
};

export type InversionForm = {
  id: string;
  nombre: string;
  valor: number;
  itp: number;
  notaria: number;
  registro: number;
  gestoria: number;
  reforma?: number;
  comision_agencia?: number;
  gastos_hipoteca?: number;
  alquiler_renta_mes: number;
  gastos_comunidad?: number;
  gastos_mantenimiento?: number;
  seguro_hogar?: number;
  seguro_vida?: number;
  seguro_impago?: number;
  ibi: number;
};