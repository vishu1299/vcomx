import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./mainsidebar";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-5">
        <Navbar />
        {children}
      </main>
    </SidebarProvider>
  );
}
