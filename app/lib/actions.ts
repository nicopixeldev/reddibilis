'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

// you'll need to extract the values of formData, there are (https://developer.mozilla.org/en-US/docs/Web/API/FormData/append) a couple of methods you can use
export async function createInvoice(prevState: State, formData: FormData) {
  // Tip: If you're working with forms that have many fields, you may want to consider using the entries() method with JavaScript's Object.fromEntries(). For example: const rawFormData = Object.fromEntries(formData.entries())

  // safeParse() will return an object containing either a success or error field. This will help handle validation more gracefully without having put this logic inside the try/catch block.

  // Validate form fields using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  // it's usually good practice to store monetary values in cents in your database to eliminate JavaScript floating-point errors and ensure greater accuracy.
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
  // Next.js has a Client-side Router Cache that stores the route segments in the user's browser for a time.
  // Along with prefetching, this cache ensures that users can quickly navigate between routes while reducing the number of requests made to the server.

  // Since you're updating the data displayed in the invoices route, you want to clear this cache and trigger a new request to the server
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }
 
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
 
  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}


// reddibilis

const HipotecaSchema = z.object({
  id: z.string(),
  nombre: z
    .string()
    .min(1, { message: 'El nombre debe ser de al menos un carácter' })
    .max(30, { message: 'Este nombre es muy largo (máximo 30 carácteres)' }),
  plazo_anos: z.coerce
    .number()
    .gt(0, { message: 'El plazo no puede ser 0' })
    .lte(99, { message: 'El plazo de años no puede ser superior a 99 años' }), 
  total_capital: z.coerce
    .number()
    .gt(0, { message: 'El capital concedido no puede ser 0' })
    .lte(900000000, { message: 'El máximo de capital concedido debe ser inferior a 90M' }),
  porcentaje_sobre_compra: z.coerce
    .number()
    .gt(0, { message: 'El % compra no puede ser 0' })
    .lte(100, { message: 'El máximo % compra es de 100%' }),
  tipo: z.enum(['variable', 'fijo'], {
      invalid_type_error: '¿Fijo o variable?',
    }),
  interes: z.coerce
    .number()
    .gt(0, { message: 'El tipo de interés no puede ser 0' })
    .lte(99, { message: 'El tipo de interés máximo es de 99%' }),
});

const CreateHipoteca = HipotecaSchema.omit({ id: true });

export type CreateHipotecaState = {
  errors?: {
    nombre?: string[];
    plazo_anos?: string[];
    total_capital?: string[];
    porcentaje_sobre_compra?: string[];
    tipo?: string[];
    interes?: string[];
  };
  message?: string | null;
};

function PMT(ir: number, np: number, pv: number, fv?: number, type?: number): number {
  /*
    * ir   - interest rate per month
    * np   - number of periods (months)
    * pv   - present value
    * fv   - future value
    * type - when the payments are due:
    *        0: end of the period, e.g. end of month (default)
    *        1: beginning of period
    */

  var pmt, pvif;

  fv || (fv = 0);
  type || (type = 0);

  if (ir === 0)
      return -(pv + fv)/np;

  pvif = Math.pow(1 + ir, np);
  pmt = - ir * (pv * pvif + fv) / (pvif - 1);

  if (type === 1)
      pmt /= (1 + ir);

  return pmt;
}

function IPMT(rate: number, per: number, pv: number, pmt: number): number {
  var tmp = Math.pow(1 + rate, per);
  return 0 - (pv * tmp * rate + pmt * (tmp - 1));
}

export async function createHipoteca(prevState: CreateHipotecaState, formData: FormData) {

  const validatedFields = CreateHipoteca.safeParse({
    nombre: formData.get('nombre'),
    plazo_anos: formData.get('plazo_anos'),
    total_capital: formData.get('total_capital'),
    porcentaje_sobre_compra: formData.get('porcentaje_sobre_compra'),
    tipo: formData.get('tipo'),
    interes: formData.get('interes')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos requiridos. Error al crear hipoteca.',
    };
  }

  const { nombre, plazo_anos, total_capital, porcentaje_sobre_compra, tipo, interes } = validatedFields.data;
  
  const interes_base_decimal = +(interes/100).toFixed(6);
  const interes_mensual = interes_base_decimal / 12 ;
  const num_coutas = plazo_anos * 12;
  const cuota_mensual = PMT(interes_mensual, num_coutas,-total_capital);
  const total_pagar = num_coutas * cuota_mensual;
  const total_intereses = total_pagar - total_capital;
  const ano_media_intereses = total_intereses / plazo_anos;
  const primer_ano_intereses = IPMT(interes_base_decimal, 1, plazo_anos, -total_capital);

  const myHipoteca = {
    nombre,
    plazo_anos,
    total_capital,
    porcentaje_sobre_compra,
    tipo,
    interes: interes,
    interes_mensual: (interes/12),
    num_coutas,
    cuota_mensual,
    total_pagar,
    total_intereses,
    ano_media_intereses,
    primer_ano_intereses,
  };

  const userId = '410544b2-4001-4271-9855-fec4b6a6442a';

  try {
    await sql`
    INSERT INTO hipotecas (
      user_id,
      nombre,
      plazo_anos,
      total_capital,
      porcentaje_sobre_compra,
      tipo,
      interes,
      interes_mensual,
      num_coutas,
      cuota_mensual,
      total_pagar,
      total_intereses,
      ano_media_intereses,
      primer_ano_intereses
    )
    VALUES (
      ${userId},
      ${myHipoteca.nombre},
      ${myHipoteca.plazo_anos},
      ${myHipoteca.total_capital},
      ${myHipoteca.porcentaje_sobre_compra},
      ${myHipoteca.tipo},
      ${myHipoteca.interes},
      ${myHipoteca.interes_mensual},
      ${myHipoteca.num_coutas},
      ${myHipoteca.cuota_mensual},
      ${myHipoteca.total_pagar},
      ${myHipoteca.total_intereses},
      ${myHipoteca.ano_media_intereses},
      ${myHipoteca.primer_ano_intereses} )
  `;

  } catch (error) {
    console.log(error);
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/panel/hipotecas');
  redirect('/panel/hipotecas');
}


export async function deleteHipotecaById(id: string) {
  try {
    await sql`DELETE FROM hipotecas WHERE id = ${id}`;
    revalidatePath('/panel/hipotecas');

    return { message: 'Hipoteca Borrada' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

const UpdateHipoteca = HipotecaSchema.omit({
  id: true,
  user_id: true,
  diferencial_variable: true, 
  interes_mensual: true, 
  num_coutas: true, 
  cuota_mensual: true, 
  total_pagar: true, 
  total_intereses: true, 
  ano_media_intereses: true, 
  primer_ano_intereses: true,
});

export async function updateHipoteca(
  id: string,
  prevState: CreateHipotecaState,
  formData: FormData,
) {

  const validatedFields = UpdateHipoteca.safeParse({
    nombre: formData.get('nombre'),
    plazo_anos: formData.get('plazo_anos'),
    total_capital: formData.get('total_capital'),
    porcentaje_sobre_compra: formData.get('porcentaje_sobre_compra'),
    tipo: formData.get('tipo'),
    interes: formData.get('interes')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos requiridos. Error al crear hipoteca.',
    };
  }
 
  const { nombre, plazo_anos, total_capital, porcentaje_sobre_compra, tipo, interes } = validatedFields.data;
  
  const interes_base_decimal = +(interes/100).toFixed(6);
  const interes_mensual = interes_base_decimal / 12 ;
  const num_coutas = plazo_anos * 12;
  const cuota_mensual = PMT(interes_mensual, num_coutas,-total_capital);
  const total_pagar = num_coutas * cuota_mensual;
  const total_intereses = total_pagar - total_capital;
  const ano_media_intereses = total_intereses / plazo_anos;
  const primer_ano_intereses = IPMT(interes_base_decimal, 1, plazo_anos, -total_capital);

  const myHipoteca = {
    nombre,
    plazo_anos,
    total_capital,
    porcentaje_sobre_compra,
    tipo,
    interes: interes,
    interes_mensual: (interes/12),
    num_coutas,
    cuota_mensual,
    total_pagar,
    total_intereses,
    ano_media_intereses,
    primer_ano_intereses,
  };

  const userId = '410544b2-4001-4271-9855-fec4b6a6442a';
 
  try {
    await sql`
    UPDATE hipotecas
    SET
        user_id = ${userId},
        nombre = ${myHipoteca.nombre},
        plazo_anos = ${myHipoteca.plazo_anos},
        total_capital = ${myHipoteca.total_capital},
        porcentaje_sobre_compra = ${myHipoteca.porcentaje_sobre_compra},
        tipo = ${myHipoteca.tipo},
        interes = ${myHipoteca.interes},
        interes_mensual = ${myHipoteca.interes_mensual},
        num_coutas = ${myHipoteca.num_coutas},
        cuota_mensual = ${myHipoteca.cuota_mensual},
        total_pagar = ${myHipoteca.total_pagar},
        total_intereses = ${myHipoteca.total_intereses},
        ano_media_intereses = ${myHipoteca.ano_media_intereses},
        primer_ano_intereses = ${myHipoteca.primer_ano_intereses}
    WHERE
        id = ${id};
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }
 
  revalidatePath('/panel/hipotecas');
  redirect('/panel/hipotecas');
}