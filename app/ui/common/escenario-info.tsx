const EscenarioInfo = ({ label, textValue, description }: { label: string, textValue: string, description: string }) => <>
  <div className="w-full mb-4 lg:flex-[0_0_44%]">
    <dt className="text-lg font-bold leading-7 text-gray-800 mb-3">
      {label}
    </dt>
    <dd className="text-5xl tracking-tight text-gray-800 mb-3">
      {textValue}
    </dd>
    <dd className="text-base tracking-tight text-gray-800">
      {description}
    </dd>
  </div>
</>

export default EscenarioInfo;


