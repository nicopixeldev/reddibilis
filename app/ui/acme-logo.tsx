import { GlobeAltIcon, HomeIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <HomeIcon className="h-10 w-10 mb-2" />
      <p className="text-[35px]">Reddibilis</p>
    </div>
  );
}
