import Nav from "../components/Nav";

const program = [
  {
    day: "Day 1",
    date: "4 July 2026",
    title: "Welcome to Ethereum",
    speaker: {
      name: "@Unnati_builds24",
      role: "Session speaker",
      handle: "@Unnati_builds24",
      href: "https://x.com/Unnati_builds24",
      photo: "https://unavatar.io/x/Unnati_builds24",
      bio: "Focused on helping new builders understand Ethereum basics, wallets, gas, and first onchain actions.",
    },
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
    speaker: {
      name: "@panditdhamdhere",
      role: "Session speaker",
      handle: "@panditdhamdhere",
      href: "https://x.com/panditdhamdhere",
      photo: "https://unavatar.io/x/panditdhamdhere",
      bio: "Focused on Solidity fundamentals, smart contract architecture, and helping builders deploy with confidence.",
    },
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
    speaker: {
      name: "@Viraz04",
      role: "Session speaker",
      handle: "@Viraz04",
      href: "https://x.com/Viraz04",
      photo: "https://unavatar.io/x/Viraz04",
      bio: "Focused on helping builders connect contracts to frontend experiences, handle wallets cleanly, and ship their first working dApp.",
    },
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
    speaker: {
      name: "@governingweb3",
      role: "Session speaker",
      handle: "@governingweb3",
      href: "https://x.com/governingweb3",
      photo: "https://unavatar.io/x/governingweb3",
      bio: "Focused on the modern Ethereum stack, from Layer 2s and account abstraction to the real-world builder context shaping web3 today.",
    },
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
    speaker: {
      name: "@ConnectBhawna",
      role: "Session speaker",
      handle: "@ConnectBhawna",
      href: "https://x.com/ConnectBhawna",
      photo: "https://unavatar.io/x/ConnectBhawna",
      bio: "Focused on problem framing, team formation, pitch clarity, and helping builders start the buildathon with momentum.",
    },
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
    cta: {
      label: "Apply for the event",
      href: "https://luma.com/17qwjp3b",
    },
    speaker: {
      name: "@candufaz",
      role: "Session speaker",
      handle: "@candufaz",
      href: "https://x.com/candufaz",
      photo: "https://unavatar.io/x/candufaz",
      bio: "Focused on demo-day storytelling, judging energy, and celebrating standout projects at the final showcase.",
    },
    topics: [
      "Final project demos in front of mentors, judges, and the community",
      "Winner's announcement in the RTD",
      "Builder networking and next-step momentum after the showcase",
    ],
    highlight: "A public finale that celebrates shipping and community momentum.",
    outcome: "Projects are showcased, winners are announced, and teams leave visible.",
  },
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
                <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_260px] xl:items-start">
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
                    {item.cta ? (
                      <a
                        href={item.cta.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center justify-center rounded-full bg-[#5bb8b2] px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-[#4da79f]"
                      >
                        {item.cta.label}
                      </a>
                    ) : null}
                  </div>

                  {item.speaker ? (
                    <aside className="rounded-[1.4rem] border border-white/10 bg-white/8 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                      <p className="text-[0.68rem] uppercase tracking-[0.26em] text-sky-200/75">
                        Speaker
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        {item.speaker.href !== "#" ? (
                          <img
                            src={item.speaker.photo}
                            alt={`${item.speaker.handle} profile`}
                            className="h-16 w-16 rounded-2xl border border-white/10 object-cover"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-200">
                            <div className="relative h-10 w-10">
                              <div className="absolute left-1/2 top-1 h-4 w-4 -translate-x-1/2 rounded-full bg-slate-400" />
                              <div className="absolute bottom-0 left-1/2 h-5 w-8 -translate-x-1/2 rounded-t-[999px] bg-slate-400" />
                            </div>
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {item.speaker.name}
                          </p>
                          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                            {item.speaker.role}
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-slate-300">
                        {item.speaker.bio}
                      </p>
                      {item.speaker.href !== "#" ? (
                        <a
                          href={item.speaker.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-[#9fe4d5] transition-colors hover:text-white"
                        >
                          View profile
                        </a>
                      ) : (
                        <span className="mt-4 inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-slate-300">
                          Reveal later
                        </span>
                      )}
                    </aside>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
