import { MainNavigation } from "@/components/navigation/main-navigation";

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-4 border-b px-4 py-4 md:h-16 md:flex-row md:items-center md:justify-between md:py-0">
      <span className="font-semibold">DW Tactical</span>
      <MainNavigation />
    </header>
  );
}
