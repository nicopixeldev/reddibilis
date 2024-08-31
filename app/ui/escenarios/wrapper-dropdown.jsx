'use client';

import { useState, useEffect } from 'react';
import Dropdown from '@/app/ui/common/dropdown';
import { useRouter } from 'next/navigation';

export default function WrapperDropdown({ options, selectedHipotecaId, selectedInversionId }) { 
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState({ 
    hipotecas: selectedHipotecaId,
    inversiones: selectedInversionId
  });

  const handleChange = (idValue, typeKey) => {
    setSelectedOption(prevState => ({ 
      ...prevState,
      [typeKey]: idValue
    }));
  }

  useEffect(() => {
    const { hipotecas, inversiones } = selectedOption;
    if (hipotecas && inversiones) {
      router.push(`/panel/escenarios/${hipotecas}/${inversiones}/`);
    }

    return;
  }, [selectedOption, router]);
  
  return (
    <div className="flex flex-col lg:flex-row gap-2 md:mt-8 py-8">
        <Dropdown
          options={options['hipotecas']}
          label="Hipotecas"
          selectedOption={selectedOption['hipotecas']}
          onChange={(e) => handleChange(e.target.value, 'hipotecas')} 
        />

        <Dropdown
          options={options['inversiones']}
          label="Inversiones"
          selectedOption={selectedOption['inversiones']}
          onChange={(e) => handleChange(e.target.value, 'inversiones')} 
        />
    </div>
  );
}