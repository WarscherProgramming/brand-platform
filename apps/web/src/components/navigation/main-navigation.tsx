import Link from "next/link";

export function MainNavigation() {
  return (
    <nav aria-label="Main" className="flex items-center gap-6 text-sm text-zinc-600">
      <Link href="/watch">Watch</Link>
      <Link href="/armory">Armory</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/membership">Membership</Link>
    </nav>
  );
}
