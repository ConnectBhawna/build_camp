import Nav from "../components/Nav";

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
    title: "Mentor Office Hours & Iteration",
    topics: [
      "Office hours with mentors and technical debugging support",
      "UI and UX reviews, contract feedback, and pitch iteration",
      "Focused working sessions to unblock teams and sharpen demos",
    ],
    highlight: "Hands-on support designed to move projects into stronger shape.",
    outcome: "Teams leave with clearer product direction and fewer blockers.",
  },
  {
    day: "Day 7",
    date: "10 July 2026",
    title: "Buildathon Submission Day",
    topics: [
      "Submission of Build-a-thon project",
      "Final polish across product, smart contracts, and presentation",
      "Last checks to make every project demo-ready",
    ],
    highlight: "The focus shifts from building more to submitting well.",
    outcome: "Every team ships a final project for Demo Day.",
  },
  {
    day: "Day 8",
    date: "11th July 2026",
    title: "Demo Day & Winner's Announcement in the RTD",
    topics: [
      "Final project demos in front of mentors, judges, and the community",
      "Winner's announcement in the RTD",
      "Builder networking and next-step momentum after the showcase",
    ],
    highlight: "A public finale that celebrates shipping and community momentum.",
    outcome: "Projects are showcased, winners are announced, and teams leave visible.",
  },
];

const rhythm = [
  "1 educational session",
  "1 hands-on workshop",
  "1 networking or community activity",
];

export default function ProgramPage() {
  return (
    <div className="grain min-h-screen">
      <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <Nav />

        <section className="rounded-[2rem] border border-[var(--line)] bg-[#122032] px-5 py-8 text-[#edf5ff] sm:px-8 sm:py-12 lg:px-12">
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

        <section className="mt-6 rounded-[2rem] border border-[var(--line)] bg-white/60 p-6 sm:p-8">
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
        </section>
      </main>
    </div>
  );
}
