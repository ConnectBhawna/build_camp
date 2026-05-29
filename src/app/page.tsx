import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="grain min-h-screen">
      <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <Nav />

        <section className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)] shadow-[0_24px_80px_rgba(19,32,51,0.08)]">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/eth-build-camp-hero.png"
              alt="Illustrated Ethereum Build Camp hero artwork"
              fill
              priority
              className="object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,244,234,0.97)_0%,rgba(248,244,234,0.88)_28%,rgba(248,244,234,0.38)_58%,rgba(248,244,234,0.16)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_46%)]" />
            <div className="absolute inset-y-0 right-0 w-[44%] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
          </div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />

          {/* Hero content */}
          <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="max-w-4xl">
                <p className="mb-5 text-[0.72rem] uppercase tracking-[0.3em] text-slate-500">
                  Virtual bootcamp for the next wave of Ethereum builders
                </p>
                <h1 className="max-w-5xl text-[2.7rem] leading-[0.98] font-semibold tracking-[-0.05em] text-slate-950 sm:text-[3.8rem] lg:text-[5.4rem] xl:text-[6.1rem]">
                  <span className="block lg:whitespace-nowrap">
                    Learn the stack.
                  </span>
                  <span className="block lg:whitespace-nowrap">
                    Build onchain.
                  </span>
                  <span className="block lg:whitespace-nowrap">
                    Ship with people.
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                  Ethereum Build Camp is a seven-day online bootcamp for curious
                  builders who want to go from first wallet interaction to demo
                  day momentum in one focused week.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:hello@ethereumbuildcamp.xyz?subject=Ethereum%20Build%20Camp"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium !text-white transition-transform hover:-translate-y-0.5"
                  >
                    Apply to join
                  </a>
                  <a
                    href="/program"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-white/70"
                  >
                    Explore the week
                  </a>
                </div>
              </div>

              <div className="ml-auto w-full max-w-[38rem] space-y-5 rounded-[1.6rem] border border-white/60 bg-white/74 p-7 shadow-[0_20px_60px_rgba(19,32,51,0.08)] backdrop-blur-md sm:p-8 lg:p-9">
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                  <span className="text-[0.75rem] uppercase tracking-[0.25em] text-slate-500">
                    Dates
                  </span>
                  <span className="text-base font-medium text-slate-800 sm:text-[1.1rem]">
                    4 July - 10 July 2026
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                  <span className="text-[0.75rem] uppercase tracking-[0.25em] text-slate-500">
                    Format
                  </span>
                  <span className="text-base font-medium text-slate-800 sm:text-[1.1rem]">
                    Fully virtual
                  </span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-[0.75rem] uppercase tracking-[0.25em] text-slate-500">
                    Outcome
                  </span>
                  <span className="max-w-[13rem] text-right text-base font-medium text-slate-800 sm:text-[1.1rem]">
                    From first wallet to first dApp
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-700">
              {[
                "Workshops",
                "Mentorship",
                "Buildathon",
                "Demo Day",
                "Ethereum culture",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line)] bg-white/65 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Join / CTA — seamlessly appended inside the same card */}
          <div
            id="join"
            className="relative z-10 border-t border-[var(--line)] bg-[#f6efe0]/90 px-5 py-8 backdrop-blur-sm sm:px-8 sm:py-10 lg:px-12 lg:py-12"
          >
            <blockquote className="mt-6 border-l-2 border-slate-400 pl-5">
              <p className="max-w-2xl text-lg font-medium italic leading-8 text-slate-700 sm:text-xl">
                &ldquo;Built for the same people who love ETHGlobal, Devcon and builder-first ecosystems. Beginners who want to move fast, make things and meet others doing the same.&rdquo;
              </p>
            </blockquote>
            <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                  Learn. Build. Ship on Ethereum.
                </h2>
              </div>
          </div>
        </div>
        </section>
      </main>
    </div>
  );
}
