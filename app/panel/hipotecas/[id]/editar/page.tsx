import EditHipotecaForm from '@/app/ui/hipotecas/edit-form';
import { fetchHipotecaById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [hipoteca] = await Promise.all([
    fetchHipotecaById(id),
  ]);
  console.log('asdcads', hipoteca);
  if (!hipoteca) {
    // <Page> will now throw an error if a specific invoice is not found. To show an error UI to the user. Create a not-found.tsx file inside the /edit folder.
    notFound();
  }


  
  return (
    <main>
      <EditHipotecaForm hipoteca={hipoteca} />
    </main>
  );
}
