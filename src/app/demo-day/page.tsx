import Image from "next/image";
import Nav from "../components/Nav";

const flow = [
  {
    title: "Road to Devcon 8",
    detail:
      "Will discuss more around the Road to Devcon 8 & how this event is a part of the larger ecosystem of Ethereum builders. More details : https://devcon.org/en/",
  },
  {
    title: "Project showcase",
    detail:
      "Selected teams from the Ethereum Build Camp will present what they built, how it works and why it matters for Ethereum users and builders. Winners announcement will be made live on the stream. ",
  },
  {
    title: "Judging and recognition",
    detail:
      "Winning projects are highlighted live, with judges and community attention focused on clarity, execution and originality.",
  },
  {
    title: "Networking",
    detail:
      "The page is designed to make the finale feel like a real handoff into the wider builder ecosystem, not just an ending.",
  },
];

export default function DemoDayPage() {
  return (
    <div className="grain min-h-screen">
      <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <Nav />

        <section className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(145deg,#132033_0%,#1f3049_52%,#27344a_100%)] px-6 py-8 text-[#edf5ff] shadow-[0_24px_80px_rgba(19,32,51,0.16)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-[2.6rem] leading-[0.98] font-semibold tracking-[-0.05em] sm:text-[3.8rem] lg:text-[5rem]">
                Road to Devcon 8 & Demo Day.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                A dedicated finale for the builders coming out of Ethereum Build
                Camp, designed to connect the week&rsquo;s projects with the broader
                momentum of Road to Devcon 8.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://luma.com/17qwjp3b"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full bg-[#5bb8b2] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-[#4da79f]"
                >
                  Apply now for Devcon 8
                </a> 
                <a
                  href="/program"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/8"
                >
                  See the full curriculum
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/7 p-3 backdrop-blur-sm">
              <div className="relative aspect-square overflow-hidden rounded-[1.2rem]">
                <Image
                  src="/demo-day-poster.png"
                  alt="Road to Devcon 8 Demo Day poster"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-[var(--line)] bg-white/70 p-6 sm:p-8 lg:p-12">
          <div>
            <p className="text-[0.75rem] uppercase tracking-[0.28em] text-slate-500">
              What to expect at demo day
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              From build week to public momentum.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {flow.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
