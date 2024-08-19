'use server'

import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const InversionSchema = z.object({
  id: z.string(),
  nombre: z
    .string()
    .min(1, { message: 'El nombre debe ser de al menos un carácter' })
    .max(255, { message: 'Este nombre es muy largo (máximo 255 carácteres)' }),
  valor: z.coerce
    .number()
    .gt(0, { message: 'El valor no puede ser 0' }),
  itp: z.coerce
    .number()
    .gt(0, { message: 'El ITP no puede ser 0' }),
  notaria: z.coerce
    .number()
    .optional(),
  registro: z.coerce
    .number()
    .optional(),
  gestoria: z.coerce
    .number()
    .optional(),
  reforma: z.coerce
    .number()
    .optional(),
  comision_agencia: z.coerce
    .number()
    .optional(),
  gastos_hipoteca: z.coerce
    .number()
    .optional(),
  alquiler_renta_mes: z.coerce
    .number()
    .gt(0, { message: 'La renta de alquiler mensual no puede ser 0' }),
  gastos_comunidad: z.coerce
    .number()
    .optional(),
  gastos_mantenimiento: z.coerce
    .number()
    .optional(),
  seguro_hogar: z.coerce
    .number()
    .optional(),
  seguro_vida: z.coerce
    .number()
    .optional(),
  seguro_impago: z.coerce
    .number()
    .optional(),
  ibi: z.coerce
    .number()
    .gt(0, { message: 'El IBI no puede ser 0' }),
  beneficio_bruto_ano: z.coerce
    .number()
    .optional(),
  beneficio_neto_ano: z.coerce
    .number()
    .optional(),
  rentabilidad_bruta: z.coerce
    .number()
    .optional(),
  rentabilidad_neta: z.coerce
    .number()
    .optional(),
  cashflow_ano: z.coerce
    .number()
    .optional(),
  roce: z.coerce
    .number()
    .optional(),
  alquiler_minimo: z.coerce
    .number()
    .optional(),
});

const CreateInversion = InversionSchema.omit({ id: true });

export type CreateInversionState = {
  errors?: {
    nombre?: string[]
    valor?: string[]
    itp?: string[]
    notaria?: string[]
    registro?: string[]
    gestoria?: string[]
    reforma?: string[]
    comision_agencia?: string[]
    gastos_hipoteca?: string[]
    alquiler_renta_mes?: string[]
    gastos_comunidad?: string[]
    gastos_mantenimiento?: string[]
    seguro_hogar?: string[]
    seguro_vida?: string[]
    seguro_impago?: string[]
    ibi?: string[]
    beneficio_bruto_ano?: string[]
    beneficio_neto_ano?: string[]
    rentabilidad_bruta?: string[]
    rentabilidad_neta?: string[]
    cashflow_ano?: string[]
    roce?: string[]
    alquiler_minimo?: string[]
  },
  message?: string | null
}

export async function createInversion(
  prevState: CreateInversionState,
  formData: FormData,
) {
  const validatedFields = CreateInversion.safeParse({
    nombre: formData.get('nombre'),
    valor: formData.get('valor'),
    itp: formData.get('itp'),
    notaria: formData.get('notaria'),
    registro: formData.get('registro'),
    gestoria: formData.get('gestoria'),
    reforma: formData.get('reforma'),
    comision_agencia: formData.get('comision_agencia'),
    gastos_hipoteca: formData.get('gastos_hipoteca'),
    alquiler_renta_mes: formData.get('alquiler_renta_mes'),
    gastos_comunidad: formData.get('gastos_comunidad'),
    gastos_mantenimiento: formData.get('gastos_mantenimiento'),
    seguro_hogar: formData.get('seguro_hogar'),
    seguro_vida: formData.get('seguro_vida'),
    seguro_impago: formData.get('seguro_impago'),
    ibi: formData.get('ibi')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos requeridos. Error al crear la inversión.',
    };
  }

  const {
    nombre,
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
    gastos_mantenimiento,
    seguro_hogar,
    seguro_vida,
    seguro_impago,
    ibi,
  } = validatedFields.data

  const userId = '410544b2-4001-4271-9855-fec4b6a6442a'


  const beneficio_bruto_ano = 0.000
  const beneficio_neto_ano = 0.000
  const rentabilidad_bruta = 0.000
  const rentabilidad_neta = 0.000
  const cashflow_ano = 0.000
  const roce = 0.000
  const alquiler_minimo = 0.000

  const myInversion = {
    nombre,
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
    gastos_mantenimiento,
    seguro_hogar,
    seguro_vida,
    seguro_impago,
    ibi,
    beneficio_bruto_ano,
    beneficio_neto_ano,
    rentabilidad_bruta,
    rentabilidad_neta,
    cashflow_ano,
    roce,
    alquiler_minimo,
  }

  try {
    // Consulta SQL explícita
    await sql`
      INSERT INTO inversiones (
        user_id,
        nombre,
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
        gastos_mantenimiento,
        seguro_hogar,
        seguro_vida,
        seguro_impago,
        ibi,
        beneficio_bruto_ano,
        beneficio_neto_ano,
        rentabilidad_bruta,
        rentabilidad_neta,
        cashflow_ano,
        roce,
        alquiler_minimo
      ) VALUES (
        ${userId},
        ${nombre},
        ${valor},
        ${itp},
        ${notaria},
        ${registro},
        ${gestoria},
        ${reforma},
        ${comision_agencia},
        ${gastos_hipoteca},
        ${alquiler_renta_mes},
        ${gastos_comunidad},
        ${gastos_mantenimiento},
        ${seguro_hogar},
        ${seguro_vida},
        ${seguro_impago},
        ${ibi},
        ${beneficio_bruto_ano},
        ${beneficio_neto_ano},
        ${rentabilidad_bruta},
        ${rentabilidad_neta},
        ${cashflow_ano},
        ${roce},
        ${alquiler_minimo}
      )
    `;
  } catch (error) {
    console.error(error);
    return {
      message: 'Database Error: Failed to Create Inversion.',
    };
  }

  revalidatePath('/panel/inversiones');
  redirect('/panel/inversiones');
}

export async function deleteInversionById(id: string) {
  try {
    await sql`DELETE FROM inversiones WHERE id = ${id}`
    revalidatePath('/panel/inversiones')

    return { message: 'Inversión Borrada' }
  } catch (error) {
    return { message: 'Error de la BD: fallo al borrar inversión' }
  }
}

const UpdateInversion = InversionSchema.omit({
  id: true,
  user_id: true,
  beneficio_bruto_ano: true,
  beneficio_neto_ano: true,
  rentabilidad_bruta: true,
  rentabilidad_neta: true,
  roce: true,
  alquiler_minimo: true
})

export async function updateInversion(
  id: string,
  prevState: CreateInversionState,
  formData: FormData,
) {
  const validatedFields = UpdateInversion.safeParse({
    nombre: formData.get('nombre'),
    valor: formData.get('valor'),
    itp: formData.get('itp'),
    notaria: formData.get('notaria'),
    registro: formData.get('registro'),
    gestoria: formData.get('gestoria'),
    reforma: formData.get('reforma'),
    comision_agencia: formData.get('comision_agencia'),
    gastos_hipoteca: formData.get('gastos_hipoteca'),
    alquiler_renta_mes: formData.get('alquiler_renta_mes'),
    gastos_comunidad: formData.get('gastos_comunidad'),
    gastos_mantenimiento: formData.get('gastos_mantenimiento'),
    seguro_hogar: formData.get('seguro_hogar'),
    seguro_vida: formData.get('seguro_vida'),
    seguro_impago: formData.get('seguro_impago'),
    ibi: formData.get('ibi')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos requiridos. Error al crear hipoteca.',
    }
  }

  const {
    nombre,
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
    gastos_mantenimiento,
    seguro_hogar,
    seguro_vida,
    seguro_impago,
    ibi,
  } = validatedFields.data


  const beneficio_bruto_ano = 0.000
  const beneficio_neto_ano = 0.000
  const rentabilidad_bruta = 0.000
  const rentabilidad_neta = 0.000
  const cashflow_ano = 0.000
  const roce = 0.000
  const alquiler_minimo = 0.000

  const myInversion = {
    nombre,
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
    gastos_mantenimiento,
    seguro_hogar,
    seguro_vida,
    seguro_impago,
    ibi,
    beneficio_bruto_ano,
    beneficio_neto_ano,
    rentabilidad_bruta,
    rentabilidad_neta,
    cashflow_ano,
    roce,
    alquiler_minimo,
  }

  const userId = '410544b2-4001-4271-9855-fec4b6a6442a'

  try {
    await sql`
      UPDATE inversiones
      SET
          user_id = ${userId},
          nombre = ${myInversion.nombre},
          valor = ${myInversion.valor},
          itp = ${myInversion.itp},
          notaria = ${myInversion.notaria},
          registro = ${myInversion.registro},
          gestoria = ${myInversion.gestoria},
          reforma = ${myInversion.reforma},
          comision_agencia = ${myInversion.comision_agencia},
          gastos_hipoteca = ${myInversion.gastos_hipoteca},
          alquiler_renta_mes = ${myInversion.alquiler_renta_mes},
          gastos_comunidad = ${myInversion.gastos_comunidad},
          gastos_mantenimiento = ${myInversion.gastos_mantenimiento},
          seguro_hogar = ${myInversion.seguro_hogar}
          seguro_vida = ${myInversion.seguro_vida}
          seguro_impago = ${myInversion.seguro_impago}
          ibi = ${myInversion.ibi}
          beneficio_bruto_ano = ${myInversion.beneficio_bruto_ano}
          beneficio_neto_ano = ${myInversion.beneficio_neto_ano}
          rentabilidad_bruta = ${myInversion.rentabilidad_bruta}
          rentabilidad_neta = ${myInversion.rentabilidad_neta}
          cashflow_ano = ${myInversion.cashflow_ano}
          roce = ${myInversion.roce}
          alquiler_minimo = ${myInversion.alquiler_minimo}
      WHERE
          id = ${id}
      `
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' }
  }

  revalidatePath('/panel/inversiones')
  redirect('/panel/inversiones')
}
