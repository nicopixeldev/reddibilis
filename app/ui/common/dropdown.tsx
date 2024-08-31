
export default function Dropdown({ options, onChange, label, selectedOption }: { options: any, onChange: any, label: string, selectedOption: string }) {

  return (
    <div className="flex gap-3 items-center mx-5">
      <label htmlFor="myDropdown" className="w-32">{label}</label>
      <select name="myDropdown" onChange={onChange} defaultValue={selectedOption} className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-6 text-sm outline-2 placeholder:text-gray-500">
        <option value="">--Elige--</option>
        {options.map((option: any) => (
          <option key={option.id} value={option.id}>
            {option.nombre}
          </option>
        ))}
      </select>
    </div>
  )
}
