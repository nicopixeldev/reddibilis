import { fetchFilteredInversiones } from '@/app/lib/data';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import { deleteInversionById } from '@/app/lib/actions/inversion';
import Link from 'next/link';

const CardInversion2 = ({ inversion }) => {
  const deleteById = deleteInversionById.bind(null, inversion.id);

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
      <form action={deleteById}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
      <Link
        href={`/panel/inversiones/${inversion.id}/editar`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PencilIcon className="w-5" />
      </Link>
      <h5 className="mb-4 text-lg font-medium text-gray-500">{inversion.nombre}</h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-xl font-semibold text-black">
          {new Intl.NumberFormat('es-ES').format(inversion.valor)}
        </span>
        <span className="text-lg font-semibold text-black">€</span>
        <span className="ms-1 text-sm font-normal text-gray-500">valor vivienda</span>
      </div>
      <ul role="list" className="space-y-5 my-7">

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(inversion.itp)} %
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">ITP</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(inversion.notaria)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">notaria</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(inversion.registro)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">registro</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(inversion.gestoria)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">gestoria</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(inversion.reforma)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">reforma</span>
        </li>


        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(inversion.comision_agencia)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">comision agencia</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(inversion.gastos_hipoteca)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">gastos hipoteca</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(inversion.alquiler_renta_mes)} € / mes
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">alquiler mensual</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(inversion.gastos_comunidad)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">gastos comunidad</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(inversion.gastos_mantenimiento)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">gastos mantenimiento</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(inversion.seguro_hogar)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">seguro hogar</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(inversion.seguro_vida)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">seguro vida</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(inversion.seguro_impago)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">seguro impago</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20} />
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(inversion.ibi)} € / año
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">IBI</span>
        </li>
      </ul>
    </div>
  );
};

const MetricInfo = ({ label, textValue }) => <>
  <div className="w-full sm:w-1/2 mb-4">
    <dt className="text-base font-bold leading-7 text-gray-800">{label}</dt>
    <dd className="text-lg tracking-tight text-gray-800">
      {textValue}
    </dd>
  </div>
</>

const CardInversion = ({ inversion }) => {
  return <div className="border-2 border-blue-300 p-10 rounded-md">
    <h2 className="text-2xl font-bold tracking-tight text-gray-800">{inversion.nombre}</h2>
    <p className="mt-1 text-gray-800">{new Intl.NumberFormat('es-ES').format(inversion.valor)} €</p>
    <h2 className="mt-4 mb-3 text-2xl font-bold tracking-tight text-white">
      {new Intl.NumberFormat('es-ES').format(inversion.alquiler_renta_mes)} € / mes
    </h2>
    <hr />
    <div className="mt-4 flex flex-wrap">
        <MetricInfo
          label="ITP"
          textValue={`${new Intl.NumberFormat('es-ES').format(inversion.itp)} %`}
        />
        <MetricInfo
          label="IBI"
          textValue={`${new Intl.NumberFormat('es-ES').format(inversion.ibi)} €`}
        />
        <MetricInfo
          label="Notaría"
          textValue={`${new Intl.NumberFormat('es-ES').format(inversion.notaria)} €`}
        />
        <MetricInfo
          label="Registro"
          textValue={`${new Intl.NumberFormat('es-ES').format(inversion.registro)} €`}
        />
        <MetricInfo
          label="Gestoría"
          textValue={`${new Intl.NumberFormat('es-ES').format(inversion.gestoria)} €`}
        />
        <MetricInfo
          label="Reforma"
          textValue={`${new Intl.NumberFormat('es-ES').format(inversion.reforma)} €`}
        />
        <MetricInfo
          label="Comisión agencia"
          textValue={`${new Intl.NumberFormat('es-ES').format(inversion.comision_agencia)} €`}
        />
        <MetricInfo
          label="Gastos comunidad"
          textValue={`${new Intl.NumberFormat('es-ES').format(inversion.comision_agencia)} € / mes`}
        />
        <MetricInfo
          label="Gastos mantenimiento"
          textValue={`${new Intl.NumberFormat('es-ES').format(inversion.gastos_comunidad)} € / mes`}
        />
        <MetricInfo
          label="Seguro hogar"
          textValue={`${new Intl.NumberFormat('es-ES').format(inversion.seguro_hogar)} € / año`}
        />
        <MetricInfo
          label="Seguro vida"
          textValue={`${new Intl.NumberFormat('es-ES').format(inversion.seguro_vida)} € / año`}
        />
        <MetricInfo
          label="Seguro impago"
          textValue={`${new Intl.NumberFormat('es-ES').format(inversion.seguro_impago)} € / año`}
        />
    </div>
  </div>
}

export default async function InversionesList({ query }) {
  const inversiones = await fetchFilteredInversiones(query);

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      {inversiones.map((inversion) => <CardInversion inversion={inversion} key={inversion.id} />)}
    </div>
  );
}

