import { calculateEscenario, fetchInversionById, fetchHipotecaById } from '@/app/lib/data';

export default async function WrapperResults({ selectedHipotecaId, selectedInversionId }) {

  const data = await calculateEscenario(selectedHipotecaId, selectedInversionId);

  console.log('data', data);

  return (
    <div>
      <h1>Results</h1>

      <div>
        <span>Total Valor con gastos: </span>
        {new Intl.NumberFormat('es-ES').format(data.precioEntrada)}
        <span>€</span>
      </div>

      <div>
        <span>Rentabilidad bruta: </span>
        {new Intl.NumberFormat('es-ES').format(data.rentabilidadBruta)}
        <span>%</span>
      </div>

      <div>
        <span>Cashflow: </span>
        {new Intl.NumberFormat('es-ES').format(data.cashflow)}
        <span>€</span>
      </div>

      <div>
        <span>Capital propio necesario: </span>
        {new Intl.NumberFormat('es-ES').format(data.capitalInvertido)}
        <span>€</span>
      </div>

      <div>
        <span>Cash-on-Cash: </span>
        {new Intl.NumberFormat('es-ES').format(data.cashOnCash)}
        <span>%</span>
      </div>

    </div>
  );
}