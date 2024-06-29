'use client';

import { useFormState } from 'react-dom';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInversion } from '@/app/lib/actions/inversion';

export default function CreateInversion() {
  // The initialState can be anything you define, in this case, create an object with two empty keys: message and errors.
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInversion, initialState);
  
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        
      <div className="flex">
        {/* nombre */}
        <div className="grow">
          <label htmlFor="nombre" className="mb-2 grow block text-sm font-medium">
            * Crea un nombre para tu inversion
          </label>
          <div className="relative grow mt-2 rounded-md">
            <div className="relative flex grow">
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre de tu inversion"
                className="peer block grow rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div id="nombre-error" aria-live="polite" aria-atomic="true">
            {state.errors?.nombre &&
              state.errors.nombre.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

         {/* valor */}
         <div className="ml-4">
          <label htmlFor="valor" className="mb-2 block text-sm font-medium">
            * Valor de la vivienda
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="valor"
                name="valor"
                type="number"
                placeholder="180000"
                className="peer block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="valor-error" aria-live="polite" aria-atomic="true">
            {state.errors?.valor &&
              state.errors.valor.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div>
      
      <div className="flex">
        {/* itp */}
        <div className="mt-4">
          <label htmlFor="itp" className="mb-2 block text-sm font-medium">
            * ITP (%)
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="itp"
                name="itp"
                type="number"
                placeholder="2.5"
                className="peer block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div id="itp-error" aria-live="polite" aria-atomic="true">
            {state.errors?.itp &&
              state.errors.itp.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* alquiler_renta_mes */}
        <div className="m-4">
          <label htmlFor="alquiler_renta_mes" className="mb-2 block text-sm font-medium">
            * Alquiler Renta (mes)
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="alquiler_renta_mes"
                name="alquiler_renta_mes"
                type="number"
                step="100"
                placeholder="500"
                className="peer block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="alquiler_renta_mes-error" aria-live="polite" aria-atomic="true">
            {state.errors?.alquiler_renta_mes &&
              state.errors.alquiler_renta_mes.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* ibi */}
        <div className="m-4">
          <label htmlFor="ibi" className="mb-2 block text-sm font-medium">
            * IBI
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="ibi"
                name="ibi"
                type="number"
                step="100"
                placeholder="500"
                className="peer block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="ibi-error" aria-live="polite" aria-atomic="true">
            {state.errors?.ibi &&
              state.errors.ibi.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div>
        
        {/* notaria */}
        <div className="mb-4">
          <label htmlFor="notaria" className="mb-2 block text-sm font-medium">
            Notaria
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="notaria"
                name="notaria"
                type="number"
                step="10"
                placeholder="500"
                className="peer block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="notaria-error" aria-live="polite" aria-atomic="true">
            {state.errors?.notaria &&
              state.errors.notaria.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* registro */}
        <div className="mb-4">
          <label htmlFor="registro" className="mb-2 block text-sm font-medium">
            Registro
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="registro"
                name="registro"
                type="number"
                step="10"
                placeholder="500"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="registro-error" aria-live="polite" aria-atomic="true">
            {state.errors?.registro &&
              state.errors.registro.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* gestoria */}
        <div className="mb-4">
          <label htmlFor="gestoria" className="mb-2 block text-sm font-medium">
            Gestoria
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="gestoria"
                name="gestoria"
                type="number"
                step="10"
                placeholder="500"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="gestoria-error" aria-live="polite" aria-atomic="true">
            {state.errors?.gestoria &&
              state.errors.gestoria.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* reforma */}
        <div className="mb-4">
          <label htmlFor="reforma" className="mb-2 block text-sm font-medium">
            Reforma
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="reforma"
                name="reforma"
                type="number"
                step="100"
                placeholder="500"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="reforma-error" aria-live="polite" aria-atomic="true">
            {state.errors?.reforma &&
              state.errors.reforma.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* comision_agencia */}
        <div className="mb-4">
          <label htmlFor="comision_agencia" className="mb-2 block text-sm font-medium">
            Comision agencia
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="comision_agencia"
                name="comision_agencia"
                type="number"
                step="100"
                placeholder="500"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="comision_agencia-error" aria-live="polite" aria-atomic="true">
            {state.errors?.comision_agencia &&
              state.errors.comision_agencia.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* gastos_hipoteca */}
        <div className="mb-4">
          <label htmlFor="gastos_hipoteca" className="mb-2 block text-sm font-medium">
            Gastos de Hipoteca
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="gastos_hipoteca"
                name="gastos_hipoteca"
                type="number"
                step="100"
                placeholder="500"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="gastos_hipoteca-error" aria-live="polite" aria-atomic="true">
            {state.errors?.gastos_hipoteca &&
              state.errors.gastos_hipoteca.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* gastos_comunidad */}
        <div className="mb-4">
          <label htmlFor="gastos_comunidad" className="mb-2 block text-sm font-medium">
            Gastos comunidad (año)
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="gastos_comunidad"
                name="gastos_comunidad"
                type="number"
                step="100"
                placeholder="500"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="gastos_comunidad-error" aria-live="polite" aria-atomic="true">
            {state.errors?.gastos_comunidad &&
              state.errors.gastos_comunidad.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* gastos_mantenimiento */}
        <div className="mb-4">
          <label htmlFor="gastos_mantenimiento" className="mb-2 block text-sm font-medium">
            Seguro de hogar (año)
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="gastos_mantenimiento"
                name="gastos_mantenimiento"
                type="number"
                step="100"
                placeholder="500"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="gastos_mantenimiento-error" aria-live="polite" aria-atomic="true">
            {state.errors?.gastos_mantenimiento &&
              state.errors.gastos_mantenimiento.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* seguro_hogar */}
        <div className="mb-4">
          <label htmlFor="seguro_hogar" className="mb-2 block text-sm font-medium">
            Seguro de hogar (año)
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="seguro_hogar"
                name="seguro_hogar"
                type="number"
                step="100"
                placeholder="500"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="seguro_hogar-error" aria-live="polite" aria-atomic="true">
            {state.errors?.seguro_hogar &&
              state.errors.seguro_hogar.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* seguro_vida */}
        <div className="mb-4">
          <label htmlFor="seguro_vida" className="mb-2 block text-sm font-medium">
            Seguro de vida (año)
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="seguro_vida"
                name="seguro_vida"
                type="number"
                step="100"
                placeholder="500"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="seguro_vida-error" aria-live="polite" aria-atomic="true">
            {state.errors?.seguro_vida &&
              state.errors.seguro_vida.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* seguro_impago */}
        <div className="mb-4">
          <label htmlFor="seguro_impago" className="mb-2 block text-sm font-medium">
            Seguro de impagos (año)
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="seguro_impago"
                name="seguro_impago"
                type="number"
                step="100"
                placeholder="500"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="seguro_impago-error" aria-live="polite" aria-atomic="true">
            {state.errors?.seguro_impago &&
              state.errors.seguro_impago.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/panel/inversiones/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Crear inversion</Button>
      </div>
    </form>
  );
}
