import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-8 py-20">
      <h1 className="max-w-4xl text-5xl font-bold tracking-tight">DW Tactical</h1>
      <p className="max-w-2xl text-lg text-zinc-600">Demonstrating responsible firearm content!</p>
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
  );
}
