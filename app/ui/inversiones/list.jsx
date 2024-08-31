import { fetchFilteredInversiones } from '@/app/lib/data';

const MetricInfo = ({ label, textValue }) => <>
  <div className="w-full sm:w-1/2 mb-4">
    <dt className="text-base font-bold leading-7 text-gray-800">{label}</dt>
    <dd className="text-lg tracking-tight text-gray-800">
      {textValue}
    </dd>
  </div>
</>

const CardInversion = ({ inversion }) => {
  return <div className="border-2 border-blue-300 p-10 lg:flex-[0_0_48%] rounded-md">
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
    <div className="flex flex-col lg:flex-row lg:flex-wrap gap-5">
      {inversiones.map((inversion) => <CardInversion inversion={inversion} key={inversion.id} />)}
    </div>
  );
}

