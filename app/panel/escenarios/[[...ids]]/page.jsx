import { fetchFilteredHipotecas, fetchFilteredInversiones } from '@/app/lib/data';
import WrapperDropdown from '@/app/ui/escenarios/wrapper-dropdown';
import WrapperResults from '@/app/ui/escenarios/wrapper-results';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {  
  const [inversiones, hipotecas] = await Promise.all([
    fetchFilteredInversiones(''),
    fetchFilteredHipotecas('')
  ]);

  if (Object.keys(params).length && params?.ids.length === 1)
    notFound();

  const [
    selectedHipotecaId,
    selectedInversionId
  ] = params?.ids ?? [];

  return (
    <main>
      <WrapperDropdown
        options={{ inversiones, hipotecas }}
        selectedHipotecaId={selectedHipotecaId}
        selectedInversionId={selectedInversionId}
      />

      {selectedHipotecaId && selectedHipotecaId && <WrapperResults
        options={{ inversiones, hipotecas }}
        selectedHipotecaId={selectedHipotecaId}
        selectedInversionId={selectedInversionId}
      />}
    </main>
  );
}