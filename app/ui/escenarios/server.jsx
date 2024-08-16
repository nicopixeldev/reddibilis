import { fetchFilteredHipotecas, fetchFilteredInversiones } from "@/app/lib/data";
import WrapperDropdown from '@/app/ui/escenarios/wrapper-dropdown';

export default async function ServerComponent() {  
  const [inversiones, hipotecas] = await Promise.all([
    fetchFilteredInversiones(''),
    fetchFilteredHipotecas('')
  ]);

  const options = {
    inversiones,
    hipotecas
  };

  console.log('ServerComponent', options);

  return (
    <main>
      <WrapperDropdown options={options} />
    </main>
  );
}