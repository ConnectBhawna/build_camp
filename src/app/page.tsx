const program = [
  {
    day: "Day 1",
    date: "4 July 2026",
    title: "Welcome to Ethereum",
    topics: [
      "What Ethereum is and why it matters",
      "Blockchain fundamentals, wallets, gas fees, and transactions",
      "Ethereum ecosystem overview and smart contract basics",
    ],
    highlight: "Hands-on: MetaMask setup, testnet transactions, and Etherscan.",
    outcome: "Everyone makes their first onchain interaction.",
  },
  {
    day: "Day 2",
    date: "5 July 2026",
    title: "Solidity & Smart Contracts",
    topics: [
      "Solidity basics, variables, functions, and mappings",
      "ERC20s, NFTs, contract architecture, and security basics",
      "Remix plus a practical intro to Foundry or Hardhat",
    ],
    highlight: "Hands-on: Deploy your first smart contract.",
    outcome: "Participants deploy their first contract.",
  },
  {
    day: "Day 3",
    date: "6 July 2026",
    title: "Building Your First dApp",
    topics: [
      "Frontend and smart contract interaction",
      "ethers.js or viem, wallet connection, and event handling",
      "Reading and writing onchain data with confidence",
    ],
    highlight: "Hands-on: Build a mini dApp from scratch.",
    outcome: "Participants ship their first working Ethereum app.",
  },
  {
    day: "Day 4",
    date: "7 July 2026",
    title: "Modern Ethereum Stack",
    topics: [
      "Layer 2s, account abstraction, and onchain identity",
      "DeFi primitives, AI x Ethereum, and public goods culture",
      "A fireside chat with ecosystem builders and founders",
    ],
    highlight: "Live context from people already building in the ecosystem.",
    outcome: "Builders understand real-world Ethereum opportunities.",
  },
  {
    day: "Day 5",
    date: "8 July 2026",
    title: "Buildathon Kickoff",
    topics: [
      "Problem statements, team formation, and pitch craft",
      "MVP thinking and what judges actually look for",
      "Track selection across DeFi, consumer, infra, and public goods",
    ],
    highlight: "Teams finalize ideas and begin building.",
    outcome: "Every team leaves with momentum and a clear build direction.",
  },
  {
    day: "Day 6",
    date: "9 July 2026",
    title: "Mentorship & Shipping Day",
    topics: [
      "Office hours with mentors and technical debugging support",
      "UI and UX reviews, contract feedback, and pitch iteration",
      "A mini session on shipping fast without overengineering",
    ],
    highlight: "Focused support designed to move projects into demo shape.",
    outcome: "Projects move from idea to demo-ready.",
  },
  {
    day: "Day 7",
    date: "10 July 2026",
    title: "Demo Day + Community Meetup",
    topics: [
      "Final demos, winner announcement, and builder networking",
      "Road to Devcon discussion and future Ethereum opportunities",
      "Optional hybrid meetup stream for standout projects",
    ],
    highlight: "A finale that rewards shipping and keeps the community moving.",
    outcome: "Projects are showcased publicly and connections deepen.",
  },
];

const tracks = [
  "DeFi",
  "AI x Ethereum",
  "Consumer crypto",
  "Infra tooling",
  "Public goods",
  "Onchain social",
];

const extras = [
  "Meme challenge",
  "Best beginner project",
  "Best AI x Ethereum build",
  "Build-in-public challenge",
  "Daily check-ins",
];

const rhythm = [
  "1 educational session",
  "1 hands-on workshop",
  "1 networking or community activity",
];

export default function Home() {
  return (
    <div className="grain min-h-screen">
      <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-20 mb-8">
          <div className="flex items-center justify-between rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-3 backdrop-blur-xl sm:px-6">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-500">
                Ethereum Build Camp
              </p>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
              <a href="#program">Program</a>
              <a href="#tracks">Tracks</a>
              <a href="#community">Community</a>
            </nav>
            <a
              href="#join"
              className="rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-[var(--background)] transition-transform hover:-translate-y-0.5"
            >
              Join the camp
            </a>
          </div>
        </header>

        <section className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-8 shadow-[0_24px_80px_rgba(19,32,51,0.08)] sm:px-8 sm:py-12 lg:px-12 lg:py-16">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-5 text-[0.72rem] uppercase tracking-[0.3em] text-slate-500">
                Virtual bootcamp for the next wave of Ethereum builders
              </p>
              <h1 className="max-w-4xl text-5xl leading-[0.94] font-semibold tracking-[-0.05em] text-slate-950 sm:text-7xl lg:text-[6.8rem]">
                Learn the stack.
                <br />
                Build onchain.
                <br />
                Ship with people.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                Ethereum Build Camp is a seven-day online bootcamp for curious
                builders who want to go from first wallet interaction to demo
                day momentum in one focused week.
              </p>
            </div>

            <div className="space-y-4 rounded-[1.75rem] border border-[var(--line)] bg-white/70 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                <span className="text-[0.75rem] uppercase tracking-[0.25em] text-slate-500">
                  Dates
                </span>
                <span className="text-sm font-medium text-slate-800">
                  4 July - 10 July 2026
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                <span className="text-[0.75rem] uppercase tracking-[0.25em] text-slate-500">
                  Format
                </span>
                <span className="text-sm font-medium text-slate-800">
                  Fully virtual
                </span>
              </div>
              <div className="flex items-center justify-between pb-1">
                <span className="text-[0.75rem] uppercase tracking-[0.25em] text-slate-500">
                  Outcome
                </span>
                <span className="text-right text-sm font-medium text-slate-800">
                  From first wallet to first dApp
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-700">
            {[
              "Talks",
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
        </section>

        <section className="grid gap-6 py-8 md:grid-cols-3">
          {[
            {
              value: "7 days",
              label: "Structured learning from foundations to shipping",
            },
            {
              value: "3 beats daily",
              label: "Education, hands-on practice, and community connection",
            },
            {
              value: "1 clear path",
              label: "Learn, build, and present an Ethereum project by the end",
            },
          ].map((item) => (
            <div
              key={item.value}
              className="rounded-[1.6rem] border border-[var(--line)] bg-white/55 p-6"
            >
              <p className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                {item.value}
              </p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-700">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        <section
          id="program"
          className="rounded-[2rem] border border-[var(--line)] bg-[#122032] px-5 py-8 text-[#edf5ff] sm:px-8 sm:py-12 lg:px-12"
        >
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[0.75rem] uppercase tracking-[0.28em] text-sky-200/75">
                Suggested flow
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                A builder-first week,
                <br />
                paced for real momentum.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300">
              Every day pairs context with doing: one learning session, one
              hands-on workshop, and one community moment designed to keep
              people shipping together.
            </p>
          </div>

          <div className="grid gap-4">
            {program.map((item) => (
              <article
                key={item.day}
                className="grid gap-5 rounded-[1.6rem] border border-white/10 bg-white/6 p-5 md:grid-cols-[180px_1fr] md:p-6"
              >
                <div className="border-b border-white/10 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
                  <p className="text-[0.72rem] uppercase tracking-[0.25em] text-sky-200/75">
                    {item.day}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{item.date}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <ul className="mt-4 grid gap-2 text-sm leading-7 text-slate-300">
                    {item.topics.map((topic) => (
                      <li key={topic}>• {topic}</li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm font-medium text-[#9fe4d5]">
                    {item.highlight}
                  </p>
                  <p className="mt-2 text-sm text-slate-200">
                    Outcome: {item.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            id="tracks"
            className="rounded-[2rem] border border-[var(--line)] bg-white/65 p-6 sm:p-8"
          >
            <p className="text-[0.75rem] uppercase tracking-[0.28em] text-slate-500">
              Buildathon tracks
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Choose a direction, then build something people can feel.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {tracks.map((track) => (
                <span
                  key={track}
                  className="rounded-full border border-[var(--line)] bg-[var(--background)] px-4 py-2 text-sm text-slate-800"
                >
                  {track}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-xl text-sm leading-7 text-slate-700">
              The format is intentionally broad enough for experimentation and
              focused enough to keep teams moving toward an MVP by demo day.
            </p>
          </div>

          <div
            id="community"
            className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(159,228,213,0.38),rgba(255,255,255,0.78))] p-6 sm:p-8"
          >
            <p className="text-[0.75rem] uppercase tracking-[0.28em] text-slate-500">
              Community energy
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              More than sessions.
              <br />
              The camp should feel alive.
            </h2>
            <div className="mt-8 grid gap-3">
              {extras.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--line)] bg-white/70 px-4 py-4 text-sm text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white/60 p-6 sm:p-8">
            <p className="text-[0.75rem] uppercase tracking-[0.28em] text-slate-500">
              Daily structure
            </p>
            <div className="mt-6 grid gap-3">
              {rhythm.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--background)] px-4 py-4 text-sm font-medium text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            id="join"
            className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[#f6efe0] p-6 sm:p-8"
          >
            <p className="text-[0.75rem] uppercase tracking-[0.28em] text-slate-500">
              Suggested CTA
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
                href="mailto:hello@ethereumbuildcamp.xyz?subject=Ethereum%20Build%20Camp"
                className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:-translate-y-0.5"
              >
                Apply to join
              </a>
              <a
                href="#program"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-white/70"
              >
                Explore the week
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
