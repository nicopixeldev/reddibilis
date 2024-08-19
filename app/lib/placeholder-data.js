// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

// reddibilis

const hipotecas = [
  {
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    nombre: 'BBVA',
    plazo_anos: 25,
    total_capital: 80000,
    porcentaje_sobre_compra: 80,
    tipo: 'fijo',
    interes: 1.5,
    diferencial_variable: undefined,
    interes_mensual: 0.342,
    num_coutas: 360,
    cuota_mensual: 333,
    total_pagar: 119874,
    total_intereses: 39874,
    ano_media_intereses: 1329,
    primer_ano_intereses: 2320
  },
];

const inversiones = [
  {
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    nombre: 'Escultor Palau',
    valor: 122000.00,
    itp: 12000.00,
    notaria: 500.00,
    registro: 250.00,
    gestoria: 0.00,
    reforma: 3000.00,
    comision_agencia: 2500.00,
    gastos_hipoteca: 333.00,
    alquiler_renta_mes: 750.00,
    gastos_comunidad: 360.00,
    gastos_mantenimiento: 900.00,
    seguro_hogar: 475.00,
    seguro_vida: 490.00,
    seguro_impago: 450.00,
    ibi: 260.00,
    beneficio_bruto_ano: 4110.56,
    beneficio_neto_ano: 3601.00,
    rentabilidad_bruta: 8.8,
    rentabilidad_neta: 7.6,
    cashflow_ano: 2983.88,
    roce: 5.0,
    alquiler_minimo: 590.00,
  },
];

module.exports = {
  users,
  customers,
  hipotecas,
  inversiones
};
