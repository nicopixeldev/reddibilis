import Form from '@/app/ui/hipotecas/create-form';
import Breadcrumbs from '@/app/ui/hipotecas/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
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
      <Form />
    </main>
  );
}