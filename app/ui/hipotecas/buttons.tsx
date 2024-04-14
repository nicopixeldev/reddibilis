import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteHipoteca } from '@/app/lib/actions';

export function CreateHipoteca() {
  return (
    <Link
      href="/panel/hipotecas/crear"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Crear Hipoteca</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}


export function DeleteHipoteca({ id }: { id: string }) {
  const deleteHipotecaWithId = deleteHipoteca.bind(null, id);

  return (
    <form action={deleteHipotecaWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

export function UpdateHipoteca({ id }: { id: string }) {
  return (
    <Link
      href={`/panel/hipotecas/${id}/editar`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}
