import { fetchFilteredHipotecas } from '@/app/lib/data';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import { deleteHipotecaById } from '@/app/lib/actions/hipoteca';
import Link from 'next/link';

const CardHipoteca = ({ hipoteca }) => {
  const deleteById = deleteHipotecaById.bind(null, hipoteca.id);

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
      <form action={deleteById}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
      <Link
        href={`/panel/hipotecas/${hipoteca.id}/editar`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PencilIcon className="w-5" />
      </Link>
      <h5 className="mb-4 text-lg font-medium text-gray-500">{hipoteca.nombre}</h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-xl font-semibold text-black">
          {new Intl.NumberFormat('es-ES').format(hipoteca.total_capital)}
        </span>
        <span className="text-lg font-semibold text-black">€</span>
        <span className="ms-1 text-sm font-normal text-gray-500">capital concedido</span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-normal leading-tight text-gray-800 ms-3">{hipoteca.plazo_anos}</span>
          <span className="ms-1 text-sm font-normal text-gray-500">años</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(hipoteca.interes)} %
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">interés</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(hipoteca.interes_mensual)} %</span>
          <span className="ms-1 text-sm font-normal text-gray-500">interés mensual</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(hipoteca.cuota_mensual)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">/mes cuota</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {hipoteca.num_coutas}
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">cuotas totales</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(hipoteca.total_pagar)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">total a pagar</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(hipoteca.total_intereses)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">total intereses</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(hipoteca.ano_media_intereses)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">/año intereses (media)</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES', { style: 'decimal' }).format(hipoteca.primer_ano_intereses)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">intereses 1er año</span>
        </li>
      </ul>
    </div>
  );
};

export default async function HipotecasList({ query }) {
  const hipotecas = await fetchFilteredHipotecas(query);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 gap-4">
      {hipotecas.map((hipoteca) => <CardHipoteca hipoteca={hipoteca} key={hipoteca.id} />)}
    </div>
  );
}

