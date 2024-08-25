import CreateInversion from '@/app/ui/inversiones/create';
 
export default async function Page() {
 
  return (
    <>
      <h1 className="text-2xl pb-5">Crear Inversión</h1>
      <hr />
      <CreateInversion />
    </>
  );
}