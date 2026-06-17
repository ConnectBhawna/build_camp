import Nav from "../components/Nav";

const extras = [
  "Meme challenge",
  "Best beginner project",
  "Best AI x Ethereum build",
  "Build-in-public challenge",
  "Daily check-ins",
];

export default function CommunityPage() {
  return (
    <div className="grain min-h-screen">
      <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <Nav />

        <section className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(159,228,213,0.38),rgba(255,255,255,0.78))] p-6 sm:p-8 lg:p-12">
          <p className="text-[0.75rem] uppercase tracking-[0.28em] text-slate-500">
            Community energy
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            More than sessions.
            <br />
            The camp should feel alive.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700">
            Beyond the curriculum, there is a living layer of community
            challenges, check-ins, and side quests designed to make every
            participant feel like they are part of something.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--line)] bg-white/70 px-5 py-5 text-base font-medium text-slate-800"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[#f6efe0] p-6 sm:p-8 lg:p-12">
          <p className="text-[0.75rem] uppercase tracking-[0.28em] text-slate-500">
            Join us
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Learn. Build. Ship on Ethereum.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
            This concept is built for the same people who love ETHGlobal,
            Devcon, and builder-first ecosystems: beginners who want to move
            fast, make things, and meet others doing the same.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://luma.com/gtx71tdi"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium !text-white transition-transform hover:-translate-y-0.5"
            >
              Apply to join
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
