import { fetchFilteredHipotecas } from '@/app/lib/data';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import { deleteHipotecaById } from '@/app/lib/actions/hipoteca';
import Link from 'next/link';
import MetricInfo from '@/app/ui/common/metric-info';

const CardHipoteca = ({ hipoteca }) => {
  const deleteById = deleteHipotecaById.bind(null, hipoteca.id);

  return (
    <div className="border-2 border-blue-300 p-10 lg:flex-[0_0_48%] rounded-md">
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

      <h2 className="text-2xl font-bold tracking-tight text-gray-800 mb-5">{hipoteca.nombre}</h2>
      <hr />

      <div className="mt-4 flex flex-wrap">
        <MetricInfo
          label="Total capital"
          textValue={`${new Intl.NumberFormat('es-ES').format(hipoteca.total_capital)} €`}
        />

        <MetricInfo
          label="Plazo"
          textValue={`${hipoteca.plazo_anos} años`}
        />

        <MetricInfo
          label="Interés"
          textValue={`${new Intl.NumberFormat('es-ES').format(hipoteca.interes)} %`}
        />

        <MetricInfo
          label="Interés mensual"
          textValue={`${new Intl.NumberFormat('es-ES').format(hipoteca.interes_mensual)} %`}
        />

        <MetricInfo
          label="Cuota mensual"
          textValue={`${new Intl.NumberFormat('es-ES').format(hipoteca.cuota_mensual)} €`}
        />

        <MetricInfo
          label="Nº de cuotas"
          textValue={`${new Intl.NumberFormat('es-ES').format(hipoteca.num_coutas)}`}
        />

        <MetricInfo
          label="Total a pagar"
          textValue={`${new Intl.NumberFormat('es-ES').format(hipoteca.total_pagar)} €`}
        />

        <MetricInfo
          label="Total de intereses"
          textValue={`${new Intl.NumberFormat('es-ES').format(hipoteca.total_intereses)} €`}
        />

        <MetricInfo
          label="Intereses al año (media)"
          textValue={`${new Intl.NumberFormat('es-ES').format(hipoteca.ano_media_intereses)} €`}
        />

        <MetricInfo
          label="Intereses 1er año"
          textValue={`${new Intl.NumberFormat('es-ES', { style: 'decimal' }).format(hipoteca.primer_ano_intereses)} €`}
        />

      </div>
    </div>
  );
};

export default async function HipotecasList({ query }) {
  const hipotecas = await fetchFilteredHipotecas(query);

  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap gap-5">
      {hipotecas.map((hipoteca) => <CardHipoteca hipoteca={hipoteca} key={hipoteca.id} />)}
    </div>
  );
}

