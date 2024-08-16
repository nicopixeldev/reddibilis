
export default function Dropdown({ options, onChange, label, selectedOption }: { options: any, onChange: any, label: string, selectedOption: string }) {

  return (
    <>
      <label htmlFor="myDropdown">{label}</label>
      <select name="myDropdown" onChange={onChange} defaultValue={selectedOption}>
        <option value="">--Elige--</option>
        {options.map((option: any) => (
          <option key={option.id} value={option.id}>
            {option.nombre}
          </option>
        ))}
      </select>
    </>
  )
}
