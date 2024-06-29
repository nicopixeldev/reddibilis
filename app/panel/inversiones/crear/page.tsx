import CreateInversion from '@/app/ui/inversiones/create';
import Breadcrumbs from '@/app/ui/common/breadcrumbs';
 
export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Inversiones', href: '/panel/inversiones' }
        ]}
      />
      <CreateInversion />
    </main>
  );
}