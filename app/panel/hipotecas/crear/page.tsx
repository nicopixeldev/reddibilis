import CreateHipoteca from '@/app/ui/hipotecas/create';
// @ts-ignore  
import Breadcrumbs from '@/app/ui/common/breadcrumbs';
 
export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Hipotecas', href: '/panel/hipotecas' }
        ]}
      />
      <CreateHipoteca />
    </main>
  );
}