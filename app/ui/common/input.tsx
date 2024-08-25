import {
  CurrencyEuroIcon,
  ReceiptPercentIcon
} from '@heroicons/react/24/outline';

interface InputProps {
  id: string;
  errors?: any;
  infoText?: string;
  isRequired?: boolean;
  placeholder: string;
  isCurrency?: boolean;
  isPercentage?: boolean;
  type?: 'text' | 'number';
}

const Input = ({
  id,
  errors,
  infoText,
  isRequired = false,
  placeholder,
  isCurrency = false,
  isPercentage = false,
  type = 'text',
}: InputProps) => {
  return (
    <div className="grow mt-8 flex-col">
      <label htmlFor={id} className="mb-2 block grow text-sm font-medium">
        {isRequired && '* '}
        {infoText}
      </label>
      <div className="relative mt-2 grow rounded-md">
        <div className="relative flex grow">
          <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            className="grow block rounded-md border border-gray-200 py-4 text-md outline-2 placeholder:text-gray-500"
          />
          {isCurrency && (
            <CurrencyEuroIcon className="pointer-events-none absolute right-3 top-1/2 h-[25px] w-[25px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          )}
          {isPercentage && (
            <ReceiptPercentIcon className="pointer-events-none absolute right-3 top-1/2 h-[25px] w-[25px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          )}
        </div>
      </div>

      <div id={`${id}-error`} aria-live="polite" aria-atomic="true">
        {errors &&
          errors.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Input;