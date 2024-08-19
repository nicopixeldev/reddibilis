import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {
  HipotecasTable,
  HipotecaForm,
  InversionesTable,
  InversionForm
} from './definitions';
import { precioEntradaTotal, convertObjToNum } from '@/app/lib/utils'

// hipotecas
export async function fetchHipotecasPages(query: string) {
  noStore();
  const ITEMS_PER_PAGE = 6;
  try {
    const count = await sql`SELECT COUNT(*)
    FROM hipotecas
    JOIN users ON hipotecas.user_id = users.id
    WHERE
      hipotecas.nombre::text ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchFilteredHipotecas(query: string) {
  noStore();

  try {
    const hipotecas = await sql<HipotecasTable>`
      SELECT
        hipotecas.id,
        hipotecas.nombre,
        hipotecas.plazo_anos,
        hipotecas.total_capital,
        hipotecas.porcentaje_sobre_compra,
        hipotecas.tipo,
        hipotecas.interes,
        hipotecas.diferencial_variable,
        hipotecas.interes_mensual,
        hipotecas.num_coutas,
        hipotecas.cuota_mensual,
        hipotecas.total_pagar,
        hipotecas.total_intereses,
        hipotecas.ano_media_intereses,
        hipotecas.primer_ano_intereses
      FROM hipotecas
      JOIN users ON hipotecas.user_id = users.id
      WHERE
        hipotecas.nombre ILIKE ${`%${query}%`}
      ORDER BY hipotecas.nombre DESC
    `;
    return hipotecas.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch hipotecas.');
  }
}

export async function fetchHipotecaById(id: string) {
  noStore();

  try {
    const data = await sql<HipotecaForm>`
      SELECT
        hipotecas.id,
        hipotecas.nombre,
        hipotecas.plazo_anos,
        hipotecas.total_capital,
        hipotecas.interes,
        hipotecas.tipo,
        hipotecas.porcentaje_sobre_compra,
        hipotecas.cuota_mensual
      FROM hipotecas
      WHERE hipotecas.id = ${id};
    `;

    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

// inversiones
export async function fetchFilteredInversiones(query: string) {
  noStore();

  try {
    const inversiones = await sql<InversionesTable>`
      SELECT
        inversiones.id,
        inversiones.nombre,
        inversiones.valor,
        inversiones.itp,
        inversiones.notaria,
        inversiones.registro,
        inversiones.gestoria,
        inversiones.reforma,
        inversiones.comision_agencia,
        inversiones.gastos_hipoteca,
        inversiones.alquiler_renta_mes,
        inversiones.gastos_comunidad,
        inversiones.gastos_mantenimiento,
        inversiones.seguro_hogar,
        inversiones.seguro_vida,
        inversiones.seguro_impago,
        inversiones.ibi,
        inversiones.beneficio_bruto_ano,
        inversiones.beneficio_neto_ano,
        inversiones.rentabilidad_bruta,
        inversiones.rentabilidad_neta,
        inversiones.cashflow_ano,
        inversiones.roce,
        inversiones.alquiler_minimo
      FROM inversiones
      JOIN users ON inversiones.user_id = users.id
      WHERE
        inversiones.nombre ILIKE ${`%${query}%`}
      ORDER BY inversiones.nombre DESC
    `;
    return inversiones.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Error al obtener inversiones.');
  }
}

export async function fetchInversionById(id: string) {
  noStore();

  try {
    const data = await sql<InversionForm>`
      SELECT
        inversiones.id,
        inversiones.nombre,
        inversiones.valor,
        inversiones.itp,
        inversiones.notaria,
        inversiones.registro,
        inversiones.gestoria,
        inversiones.reforma,
        inversiones.comision_agencia,
        inversiones.gastos_hipoteca,
        inversiones.alquiler_renta_mes,
        inversiones.gastos_comunidad,
        inversiones.seguro_hogar,
        inversiones.seguro_vida,
        inversiones.seguro_impago,
        inversiones.ibi
      FROM inversiones
      WHERE inversiones.id = ${id};
    `;

    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function checkHipotecaById(id: string): Promise<boolean> {
  noStore();

  try {
    const data = await sql`
      SELECT
        1
      FROM hipotecas
      WHERE hipotecas.id = ${id};
    `;

    // Si la consulta retorna algún registro, devolvemos true
    return data.rows.length > 0;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to check hipoteca.');
  }
}

// escenarios
export async function calculateEscenario(hipotecaId: string, inversionId: string) {
  noStore();

  try {
    const [
      hipoteca,
      inversion
    ] = await Promise.all([ fetchHipotecaById(hipotecaId), fetchInversionById(inversionId) ]);

    const { 
      valor,
      itp,
      notaria,
      registro,
      gestoria,
      reforma,
      comision_agencia,
      gastos_hipoteca,
      alquiler_renta_mes,
      gastos_comunidad,
      seguro_hogar,
      seguro_vida,
      seguro_impago,
      ibi
    } = convertObjToNum(inversion);

    const {
      cuota_mensual,
      total_capital,
      porcentaje_sobre_compra,
    } = convertObjToNum(hipoteca);

    const precioEntrada = precioEntradaTotal({ valor, itp, notaria, registro, gestoria, reforma, comision_agencia });

    const ingresos = alquiler_renta_mes*12;
    const rentabilidadBruta = parseFloat(((ingresos/precioEntrada)*100).toFixed(2));

    const gastos = ((gastos_comunidad + cuota_mensual)*12) + seguro_hogar + seguro_vida + seguro_impago + ibi;

    const cashflow = parseFloat((ingresos - gastos).toFixed(2));

    const valorITP = valor * (itp/100);
    const porcentajeValorHipoteca = parseFloat((total_capital * (1 - (porcentaje_sobre_compra / 100))).toFixed(2));
    const capitalInvertido = valorITP + porcentajeValorHipoteca;

    const cashOnCash =parseFloat(((cashflow / capitalInvertido) * 100).toFixed(2));

    const data = {
      precioEntrada,
      rentabilidadBruta,
      cashflow,
      capitalInvertido,
      cashOnCash
    };

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to check hipoteca.');
  }
}