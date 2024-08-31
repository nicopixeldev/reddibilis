import { calculateEscenario, fetchInversionById, fetchHipotecaById } from '@/app/lib/data';
import EscenarioInfo from '@/app/ui/common/escenario-info';

export default async function WrapperResults({ selectedHipotecaId, selectedInversionId }) {
  const data = await calculateEscenario(selectedHipotecaId, selectedInversionId);

  return (
    <>
      <hr />
      <h2 className="text-xl pb-5 mt-10"></h2>

      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-15">
        <EscenarioInfo
          label="Valor total con gastos"
          textValue={`${new Intl.NumberFormat('es-ES').format(data.precioEntrada)} €`}
          description="Este es el valor total de la operación que incluye el valor de la vivienda, el impuesto de ITP, la notaría, el registro, la gestoría, la reforma y cualquier otro tipo de comisión de gasto inicial."
        />

        <EscenarioInfo
          label="Rentabilidad bruta"
          textValue={`${new Intl.NumberFormat('es-ES').format(data.rentabilidadBruta)} %`}
          description="La rentabilidad bruta nos dice qué rentabilidad estamos obteniendo cada año vía alquiler, teniendo en cuenta el dinero invertido en la compra de la vivienda. En esta métrica no se tienen en cuenta los gastos recurrentes de la vivienda. Se trata de la parte de la inversión total retorna como ingresos de alquiler."
        />

        <EscenarioInfo
          label="Cashflow"
          textValue={`${new Intl.NumberFormat('es-ES').format(data.cashflow)} €`}
          description="Se trata de una métrica muy útil cuando analizamos cualquier tipo de neogcio, porque nos permite ver lo capas que es el negocio de generar dinero tras pagar todos los gastos y la financiación. Se trata de restar a las entradas de dinero que tenemos, todas las salidas de dinero."
        />

        <EscenarioInfo
          label="Capital propio necesario"
          textValue={`${new Intl.NumberFormat('es-ES').format(data.capitalInvertido)} €`}
          description="Es el valor total que sale de nuestro bolsillo teniendo en cuenta el porcentaje del valor de la vivienda que no asume el banco y el gasto de impuestos."
        />

        <EscenarioInfo
          label="Cash-on-Cash"
          textValue={`${new Intl.NumberFormat('es-ES').format(data.cashOnCash)} %`}
          description="Esta métrica nos indica lo que realmente estamos ganando sobre nuestra inversión real. Relaciona el dinero que nos entra vía alquiler con el dinero que realmente ha salido de nuestro bolsillo (capital propio necesario). Es la parte del capital popio necesario que nos entra como beneficio cada año."
        />
      </div>
    </>
  );
}