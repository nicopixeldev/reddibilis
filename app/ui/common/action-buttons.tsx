import Link from 'next/link';
import { Button } from '@/app/ui/common/button';

interface ActionButtonsProps {
  cancelHref: string;  
  cancelText?: string;
  buttonText: string;
  buttonType?: 'button' | 'submit' | 'reset';
}

export default function ActionButtons({
  cancelHref,
  cancelText = 'Cancelar',
  buttonText,
  buttonType = 'submit'
}: ActionButtonsProps) {
  return (
    <div className="mt-16 flex gap-4">
      <Button type="submit">
        {buttonText}
      </Button>
      <Link
        href={cancelHref}
        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
      >
        {cancelText}
      </Link>
    </div>
  );
}
