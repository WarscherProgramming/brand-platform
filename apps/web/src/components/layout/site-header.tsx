import { MainNavigation } from "@/components/navigation/main-navigation";

export function SiteHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-4">
      <span className="font-semibold">DW Tactical</span>
      <MainNavigation />
    </header>
  );
}
