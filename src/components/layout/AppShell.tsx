import { Footer } from "@/components/layout/Footer";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-brand-950 text-white">
      <main>{children}</main>
      <Footer />
    </div>
  );
}
