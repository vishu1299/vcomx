import { SidebarProvider } from "@/components/ui/sidebar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <div className="flex flex-col w-full">
          {/* Main Content */}
          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
