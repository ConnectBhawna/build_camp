import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 mb-8">
      <div className="flex items-center justify-between rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-3 backdrop-blur-xl sm:px-6">
        <div>
          <Link href="/">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-500">
              Ethereum Build Camp
            </p>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          <Link href="/program" className="hover:text-slate-950 transition-colors">Schedule</Link>
          <Link href="/tracks" className="hover:text-slate-950 transition-colors">Tracks</Link>
          <Link href="/community" className="hover:text-slate-950 transition-colors">Community</Link>
        </nav>
        <Link
          href="/#join"
          className="rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-medium !text-white transition-transform hover:-translate-y-0.5"
        >
          Join the camp
        </Link>
      </div>
    </header>
  );
}
