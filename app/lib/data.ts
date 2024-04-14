import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {
  HipotecasTable,
  HipotecaForm,
} from './definitions';


// reddibilis
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
        hipotecas.porcentaje_sobre_compra
      FROM hipotecas
      WHERE hipotecas.id = ${id};
    `;

    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}
