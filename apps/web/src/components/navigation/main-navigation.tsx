import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    label: "Watch",
    href: "/watch",
  },
  {
    label: "Armory",
    href: "/armory",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Membership",
    href: "/membership",
  },
];
export function MainNavigation() {
  return (
    <nav
      aria-label="Main"
      className="flex flex-wrap items-center gap-3 text-sm text-zinc-600 md:gap-6"
    >
      {navItems.map((item) => (
        <Link className="transition-colors hover:text-zinc-950" key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
