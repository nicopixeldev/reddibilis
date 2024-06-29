import EditInversion from '@/app/ui/inversiones/edit'
import { fetchInversionById } from '@/app/lib/data'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const [inversion] = await Promise.all([fetchInversionById(id)])

  if (!inversion)
    notFound()

  return (
    <main>
      <EditInversion inversion={inversion} />
    </main>
  )
}