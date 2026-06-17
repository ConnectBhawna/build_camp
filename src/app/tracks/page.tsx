import Nav from "../components/Nav";

const tracks = [
  {
    name: "Best use of DeFi",
    description:
      "Build a project around decentralized finance think lending, borrowing, DEXs, yield strategies, or novel financial primitives on-chain",
    prize: "Mechanical keyboard + goodies + surprize",
  },
  {
    name: "Best use of AI x Ethereum",
    description:
      "Combine AI and Ethereum to create something new autonomous agents, AI-driven smart contracts, on-chain inference or verifiable ML outputs.",
    prize: "Mechanical keyboard, goodies & surprize",
  },
  {
    name: "Best use of Consumer crypto",
    description:
      "Build a crypto product designed for everyday users focus on seamless UX, real-world utility, and making web3 accessible to the mainstream.",
    prize: "Mechanical keyboard, goodies & surprize",
  },
  {
    name: "Best use of Infra tooling",
    description:
      "Create tools and infrastructure that help developers build better on Ethereum SDKs, dev tooling, indexers, RPC improvements or protocol primitives.",
    prize: "Mechanical keyboard, goodies & surprize",
  },
  {
    name: "Best use of Public goods",
    description:
      "Build something that benefits the broader ecosystem open-source tools, community resources, or projects that prioritize impact over profit.",
    prize: "Mechanical keyboard, goodies & surprize",
  },
];

export default function TracksPage() {
  return (
    <div className="grain min-h-screen">
      <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <Nav />

        <section className="rounded-[2rem] border border-[var(--line)] bg-white/65 p-6 sm:p-8 lg:p-12">
          <p className="text-[0.75rem] uppercase tracking-[0.28em] text-slate-500">
            Buildathon tracks
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Choose a direction, then build something people can feel.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {tracks.map((track) => (
              <span
                key={track.name}
                className="rounded-full border border-[var(--line)] bg-[var(--background)] px-5 py-2.5 text-base text-slate-800"
              >
                {track.name}
              </span>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-base leading-8 text-slate-700">
            The format is intentionally broad enough for experimentation and focused enough to keep teams moving toward an MVP by demo day.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track) => (
              <div
                key={track.name}
                className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {track.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {track.description}
                </p>
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-[var(--line)] bg-white/70 px-4 py-3">
                  <span className="text-lg">🏆</span>
                  <p className="text-xs font-medium text-slate-700">{track.prize}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
