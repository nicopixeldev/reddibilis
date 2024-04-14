'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createHipoteca } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form() {
  // The initialState can be anything you define, in this case, create an object with two empty keys: message and errors.
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createHipoteca, initialState);
  
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* nombre */}
        <div className="mb-4">
          <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
            Crea un nombre para tu hipoteca
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Un nombre que puedas identificar"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
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

        {/* plazo_anos */}
        <div className="mb-4">
          <label htmlFor="plazo_anos" className="mb-2 block text-sm font-medium">
            Plazo en años
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="plazo_anos"
                name="plazo_anos"
                type="number"
                step="1"
                placeholder="20"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div id="plazo_anos-error" aria-live="polite" aria-atomic="true">
            {state.errors?.plazo_anos &&
              state.errors.plazo_anos.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

         {/* total_capital */}
         <div className="mb-4">
          <label htmlFor="total_capital" className="mb-2 block text-sm font-medium">
            Total capital concedido
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="total_capital"
                name="total_capital"
                type="number"
                step="1000"
                placeholder="180000"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div id="total_capital-error" aria-live="polite" aria-atomic="true">
            {state.errors?.total_capital &&
              state.errors.total_capital.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* porcentaje_sobre_compra */}
        <div className="mb-4">
          <label htmlFor="porcentaje_sobre_compra" className="mb-2 block text-sm font-medium">
            % sobre compra concedido
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="porcentaje_sobre_compra"
                name="porcentaje_sobre_compra"
                type="number"
                step="1"
                placeholder="80"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div id="porcentaje_sobre_compra-error" aria-live="polite" aria-atomic="true">
            {state.errors?.porcentaje_sobre_compra &&
              state.errors.porcentaje_sobre_compra.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* tipo */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Tipo
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="fijo"
                  name="tipo"
                  type="radio"
                  value="fijo"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="fijo"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Tipo fijo <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="variable"
                  name="tipo"
                  type="radio"
                  value="variable"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="variable"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Tipo variable <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>

          <div id="tipo-error" aria-live="polite" aria-atomic="true">
            {state.errors?.tipo &&
              state.errors.tipo.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>

        </fieldset>

        {/* interes */}
        <div className="mb-4">
          <label htmlFor="interes" className="mb-2 block text-sm font-medium">
            Interés
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="interes"
                name="interes"
                type="number"
                step="0.01"
                placeholder="2.5"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div id="interes-error" aria-live="polite" aria-atomic="true">
            {state.errors?.interes &&
              state.errors.interes.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/panel/hipotecas/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Crear hipoteca</Button>
      </div>
    </form>
  );
}
