import Link from "next/link";

type DomainCard = {
  title: string;
  description: string;
  href: string;
};

const domainCards: DomainCard[] = [
  {
    title: "Watch",
    description: "Honest reviews, range sessions, builds, and real-world firearm content.",
    href: "/watch",
  },
  {
    title: "Armory",
    description: "Checkout our arsenal!",
    href: "/armory",
  },
  {
    title: "Projects",
    description: "Checkout our upcoming projects!",
    href: "/projects",
  },
  {
    title: "Shop",
    description: "Support our projects with exclusive merch!",
    href: "/shop",
  },
  {
    title: "Membership",
    description: "Become a member for exclusive perks!",
    href: "/membership",
  },
];

export default function Home() {
  return (
    <>
      <section className="space-y-8 py-20">
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight">DW Tactical</h1>
        <p className="max-w-2xl text-lg text-zinc-600">
          Demonstrating responsible firearm content!
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            className="rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800"
            href="/watch"
          >
            Watch
          </Link>
          <Link
            className="rounded-md border px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-100"
            href="/armory"
          >
            Armory
          </Link>
        </div>
      </section>

      <section className="space-y-6 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">Quick Links</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domainCards.map((card) => (
            <Link
              className="rounded-lg border p-6 transition-colors hover:bg-zinc-100"
              key={card.href}
              href={card.href}
            >
              <h3 className="font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
