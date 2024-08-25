'use client';

import { useFormState } from 'react-dom';
import Input from '@/app/ui/common/input';

import ActionButtons from '@/app/ui/common/action-buttons';
import { createInversion } from '@/app/lib/actions/inversion';

export default function CreateInversion() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInversion, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col grow lg:flex-row lg:space-x-5">
        <Input
          id="nombre"
          errors={state.errors?.nombre}
          infoText="Crea un nombre para tu inversion"
          placeholder="Nombre de tu inversion"
          isRequired
        />

        <Input
          id="valor"
          errors={state.errors?.valor}
          infoText="Valor de la vivienda"
          placeholder="180.000"
          isRequired
          isCurrency
          type="number"
        />
      </div>

      <div className="flex flex-col grow lg:flex-row lg:space-x-5">
        <Input
          id="itp"
          errors={state.errors?.itp}
          infoText="ITP (%)"
          placeholder="10"
          isRequired
          isPercentage
          type="number"
        />

        <Input
          id="alquiler_renta_mes"
          errors={state.errors?.alquiler_renta_mes}
          infoText="Alquiler renta (mes)"
          placeholder="975"
          isRequired
          isCurrency
          type="number"
        />
      </div>

      <div className="mt-12">
        <h2 className="text-xl mt-5 mb-2">Gastos iniciales</h2>
        <hr />
        <div className="flex flex-col grow lg:flex-row lg:space-x-5">
          <Input
            id="ibi"
            errors={state.errors?.ibi}
            infoText="IBI (año)"
            placeholder="275"
            isRequired
            isCurrency
            type="number"
          />

          <Input
            id="notaria"
            errors={state.errors?.notaria}
            infoText="Notaría"
            placeholder="1.750"
            isRequired
            isCurrency
            type="number"
          />

          <Input
            id="registro"
            errors={state.errors?.registro}
            infoText="Registro"
            placeholder="655"
            isCurrency
            type="number"
          />
        </div>

        <div className="flex flex-col grow lg:flex-row lg:space-x-5">
          <Input
            id="gestoria"
            errors={state.errors?.gestoria}
            infoText="Gestoría"
            placeholder="655"
            isCurrency
            type="number"
          />

          <Input
            id="reforma"
            errors={state.errors?.reforma}
            infoText="Reforma"
            placeholder="7.450"
            isCurrency
            type="number"
          />

          <Input
            id="comision_agencia"
            errors={state.errors?.comision_agencia}
            infoText="Comisión de agencia"
            placeholder="3.000"
            isCurrency
            type="number"
          />

        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl mb-2">Gastos recurrentes</h2>
        <hr />
        <div className="flex flex-col grow lg:flex-row lg:space-x-5">
          <Input
            id="gastos_comunidad"
            errors={state.errors?.gastos_comunidad}
            infoText="Gastos de comunidad (mes)"
            placeholder="75"
            isCurrency
            type="number"
          />

          <Input
            id="gastos_mantenimiento"
            errors={state.errors?.gastos_mantenimiento}
            infoText="Gastos de mantenimiento (mes)"
            placeholder="95"
            isCurrency
            type="number"
          />

          <Input
            id="seguro_hogar"
            errors={state.errors?.seguro_hogar}
            infoText="Seguro hogar (año)"
            placeholder="365"
            isCurrency
            type="number"
          />
        </div>
      

        <div className="flex flex-col grow lg:flex-row lg:space-x-5">
          <Input
            id="seguro_vida"
            errors={state.errors?.seguro_vida}
            infoText="Seguro de vida (año)"
            placeholder="190"
            isCurrency
            type="number"
          />

          <Input
            id="seguro_impago"
            errors={state.errors?.seguro_impago}
            infoText="Seguro de impago (año)"
            placeholder="490"
            isCurrency
            type="number"
          />
        </div>
      </div>

      <ActionButtons 
        cancelHref="/panel/inversiones"
        buttonText="Crear inversion"
      />
    </form>
  );
}
