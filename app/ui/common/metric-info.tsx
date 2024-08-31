const MetricInfo = ({ label, textValue }: { label: string, textValue: string }) => <>
  <div className="w-full sm:w-1/2 mb-4">
    <dt className="text-base font-bold leading-7 text-gray-800">{label}</dt>
    <dd className="text-lg tracking-tight text-gray-800">
      {textValue}
    </dd>
  </div>
</>

export default MetricInfo;


