import Search from '@/app/ui/common/search';
import HipotecasList from '@/app/ui/hipotecas/list';
import { lusitana } from '@/app/ui/fonts';
import { HipotecasTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hipotecas',
};

export default async function HipotecasPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Hipotecas</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar hipotecas..." />
        <Link
          href="/panel/hipotecas/crear"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span className="hidden md:block">Crear Hipoteca</span>{' '}
          <PlusIcon className="h-5 md:ml-4" />
        </Link>
      </div>
      <Suspense key={query} fallback={<HipotecasTableSkeleton />}>
        <HipotecasList query={query} />
      </Suspense>
    </div>
  );
}