import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import { DeleteHipoteca, UpdateHipoteca } from '@/app/ui/hipotecas/buttons';
import { fetchFilteredHipotecas } from '@/app/lib/data';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CardHipoteca = ({ hipoteca }) => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
		<DeleteHipoteca id={hipoteca.id} />
		<UpdateHipoteca id={hipoteca.id} />
      <h5 className="mb-4 text-lg font-medium text-gray-500">{hipoteca.nombre}</h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
          	<span className="text-xl font-semibold text-black">
		  		{new Intl.NumberFormat('es-ES').format(hipoteca.total_capital)}
			</span>
          	<span className="text-lg font-semibold text-black">€</span>
          	<span className="ms-1 text-sm font-normal text-gray-500">capital concedido</span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <ArrowRightIcon width={20}/>
          <span className="text-base font-normal leading-tight text-gray-800 ms-3">{hipoteca.plazo_anos}</span>
          <span className="ms-1 text-sm font-normal text-gray-500">años</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20}/>
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(hipoteca.interes)} %
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">interés</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20}/>
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(hipoteca.interes_mensual)} %</span>
          <span className="ms-1 text-sm font-normal text-gray-500">interés mensual</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20}/>
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(hipoteca.cuota_mensual)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">/mes cuota</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20}/>
          	<span className="text-base font-semibold leading-tight text-gray-800 ms-3">
		  		{hipoteca.num_coutas}
			</span>
          <span className="ms-1 text-sm font-normal text-gray-500">cuotas totales</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20}/>
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(hipoteca.total_pagar)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">total a pagar</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20}/>
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(hipoteca.total_intereses)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">total intereses</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20}/>
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES').format(hipoteca.ano_media_intereses)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">/año intereses (media)</span>
        </li>

        <li className="flex items-center">
          <ArrowRightIcon width={20}/>
          <span className="text-base font-semibold leading-tight text-gray-800 ms-3">
            {new Intl.NumberFormat('es-ES', { style: 'decimal' }).format(hipoteca.primer_ano_intereses)} €
          </span>
          <span className="ms-1 text-sm font-normal text-gray-500">intereses 1er año</span>
        </li>
      </ul>
    </div>
  );
};

export default async function HipotecasTable({
  query,
  currentPage,
}) {
  const hipotecas = await fetchFilteredHipotecas(query, currentPage);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 gap-4">
      {hipotecas.map((hipoteca) => <CardHipoteca hipoteca={hipoteca} key={hipoteca.id}/>)}
    </div>
  );
}


 // <div className="max-w-[85rem] px-4 py-10">
    //   <div className="flex flex-col">
    //     <div className="-m-1.5 overflow-x-auto">
    //       <div className="p-1.5 min-w-full inline-block align-middle">
    //         <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            
    //           {/** TABLE TITLE */}
    //           <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
    //             <div>
    //               <h2 className="text-xl font-semibold text-gray-800">
    //                 Tus hipotecas
    //               </h2>
    //             </div>
    //           </div>

    //           <table className="min-w-full divide-y divide-gray-200">

    //             {/** TABLE HEADER */}
    //             <thead className="bg-gray-50">
    //               <tr>
    //                 <th scope="col" className="px-6 py-3 text-start">
    //                   <div className="flex items-center gap-x-2">
    //                     <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
    //                       Hipoteca
    //                     </span>
    //                   </div>
    //                 </th>

    //                 <th scope="col" className="px-6 py-3 text-start">
    //                   <div className="flex items-center gap-x-2">
    //                     <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
    //                       Interés
    //                     </span>
    //                   </div>
    //                 </th>

    //                 <th scope="col" className="px-6 py-3 text-start">
    //                   <div className="flex items-center gap-x-2">
    //                     <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
    //                       Cuota
    //                     </span>
    //                   </div>
    //                 </th>

    //                 <th scope="col" className="px-6 py-3 text-start">
    //                   <div className="flex items-center gap-x-2">
    //                     <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
    //                       Capital
    //                     </span>
    //                   </div>
    //                 </th>

    //                 <th scope="col" className="px-6 py-3 text-start">
    //                   <div className="flex items-center gap-x-2">
    //                     <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
    //                       Intereses
    //                     </span>
    //                   </div>
    //                 </th>
    //               </tr>
    //             </thead>

    //             <tbody className="divide-y divide-gray-200">
    //             {hipotecas.map((h) => 
    //               (
    //                 <tr key={h.id}>
    //                   {/** HIPOTECA */}
    //                   <td className="size-px whitespace-nowrap">
    //                     <div className="px-6 py-3">
    //                       <div className="flex items-center gap-x-3">
    //                         <div className="flex flex-col gap-y-1">
    //                           <span className="block text-xl font-semibold text-gray-800">{h.nombre}</span>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </td>

    //                   {/** INTERÉS */}
    //                   <td className="size-px whitespace-nowrap">
    //                     <div className="px-6 py-3">
    //                       <div className="flex items-center gap-x-3">
    //                         <div className="flex flex-col gap-y-1">
    //                           <span className="flex inline-flex">
    //                               <span className="text-md font-semibold text-gray-800">{h.interes}%</span>
    //                               <span className="py-1 px-1.5 ml-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
    //                                 <ArrowRightIcon className="w-4" />
    //                                 {h.tipo}
    //                             </span>
    //                           </span>
    //                           <span className="flex inline-flex table-cell">
    //                               <span className="text-md font-semibold text-gray-800">{h.porcentaje_sobre_compra}%</span>
    //                               <span className="pl-2 text-xs text-gray-500">sobre compra</span>
    //                           </span>

    //                         </div>

    //                       </div>
    //                     </div>
    //                   </td>

    //                   {/** CUOTA */}
    //                   <td className="h-px w-72 whitespace-nowrap">
    //                     <div className="px-6 py-3">
    //                       <div className="flex items-center gap-x-3">
    //                         <div className="flex flex-col gap-y-1">
    //                         <span className="flex inline-flex table-cell">
    //                           <span className="text-md font-semibold text-gray-800">{h.cuota_mensual}€</span>
    //                           <span className="pl-2 text-xs text-gray-500">/ mes</span>
    //                         </span>
    //                         <span className="flex inline-flex table-cell">
    //                           <span className="text-md font-semibold text-gray-800">{h.num_cuotas}</span>
    //                           <span className="pl-2 text-xs text-gray-500">cuotas</span>
    //                         </span>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </td>

    //                   {/** CAPITAL */}
    //                   <td className="size-px whitespace-nowrap">
    //                     <div className="px-6 py-3">
    //                       <div className="flex items-center gap-x-3">
    //                         <div className="flex flex-col gap-y-1">
    //                           <span className="flex inline-flex table-cell">
    //                             <span className="text-md font-semibold text-gray-800">{h.total_capital}€</span>
    //                             <span className="pl-2 text-xs text-gray-500">concedido</span>
    //                           </span>
    //                           <span className="flex inline-flex table-cell">
    //                             <span className="text-md font-semibold text-gray-800">{h.total_pagar}€</span>
    //                             <span className="pl-2 text-xs text-gray-500">total por pagar</span>
    //                           </span>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </td>

    //                   {/** INTERESES */}
    //                   <td className="size-px whitespace-nowrap"> 
    //                     <div className="px-6 py-3">
    //                       <div className="flex items-center gap-x-3">
    //                         <div className="flex flex-col gap-y-1">
    //                         <span className="flex inline-flex table-cell">
    //                           <span className="text-md font-semibold text-gray-800">{h.total_intereses}€</span>
    //                           <span className="pl-2 text-xs text-gray-500">total</span>
    //                         </span>
    //                         <span className="flex inline-flex table-cell">
    //                           <span className="text-md font-semibold text-gray-800">{h.ano_media_intereses}€</span>
    //                           <span className="pl-2 text-xs text-gray-500">/ año</span>
    //                         </span>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </td>

    //                   {/** ACTIONS */}
    //                   <td className="size-px whitespace-nowrap">
    //                     <div className="px-6 py-1.5">
    //                       <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium px-1" href="#">
    //                         Editar
    //                       </a>
    //                       <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium px-1" href="#">
    //                         Borrar
    //                       </a>
    //                     </div>
    //                   </td>
    //                 </tr>
    //               )
    //             )}
    //             </tbody>
    //           </table>

    //           <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
    //             <div>
    //               <p className="text-sm text-gray-600 dark:text-gray-400">
    //                 <span className="font-semibold text-gray-800">6</span> resultados
    //               </p>
    //             </div>
    //             <Pagination totalPages={totalPages} />
    //           </div>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>