import EditHipoteca from '@/app/ui/hipotecas/edit'
import { fetchHipotecaById } from '@/app/lib/data'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const [hipoteca] = await Promise.all([fetchHipotecaById(id)])

  if (!hipoteca)
    notFound()

  return (
    <main>
      <EditHipoteca hipoteca={hipoteca} />
    </main>
  )
}