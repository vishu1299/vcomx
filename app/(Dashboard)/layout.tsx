import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/(Dashboard)/sidebar";
import Navbar from "@/app/(Dashboard)/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <AppSidebar />

        <div className="flex flex-col w-full">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
