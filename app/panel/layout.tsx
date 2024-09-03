// @ts-ignore  
import SideNav from '@/app/ui/common/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <main className="w-full p-10 overflow-auto">
        <div className="max-w-5xl">
          {children}
        </div>
      </main>
    </div>
  );
}