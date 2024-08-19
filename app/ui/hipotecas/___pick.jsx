import { fetchFilteredHipotecas, fetchFilteredInversiones } from '@/app/lib/data';

export default async function PickHipotecas() {
  const hipotecas = await fetchFilteredHipotecas('');
  const inversiones = await fetchFilteredInversiones('');

  return (
    <div>
      <h2>Hipotecas</h2>
      <select name="hipotecas">
        <option value="">--Elige--</option>
        {hipotecas.map((hipoteca) => <option key={hipoteca.id} value={hipoteca.id}>
          {hipoteca.nombre}
        </option>)}
      </select>

      <h2>Inversiones</h2>
      <select name="inversiones">
        <option value="">--Elige--</option>
        {inversiones.map((inversion) => <option key={inversion.id} value={inversion.id}>
          {inversion.nombre}
        </option>)}
      </select>
    </div>
  );
}
