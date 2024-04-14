import CreateHipoteca from '@/app/ui/hipotecas/create';
import Breadcrumbs from '@/app/ui/common/breadcrumbs';
 
export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Hipotecas', href: '/panel/hipotecas' },
          {
            label: 'Crear Hipoteca',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <CreateHipoteca />
    </main>
  );
}