import Image from "next/image";
import Nav from "../components/Nav";

const team = [
  {
    name: "Krishna Agarwal",
    initials: "KA",
    href: "https://www.linkedin.com/in/krishna-agarwal13?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    note: "LinkedIn profile",
    imageSrc: "/krishna_image.jpg",
  },
  {
    name: "Khushi Bhardwaj",
    initials: "KB",
    href: "https://www.linkedin.com/in/khushi-bhardwaj-907673322",
    note: "LinkedIn profile",
    imageSrc: "/khushi_image.jpg",
  },
  {
    name: "Surya Gupta",
    initials: "SG",
    href: "https://www.linkedin.com/in/surya-gupta-ai",
    note: "LinkedIn profile",
    imageSrc: "/surya_image.jpg",
  },
  {
    name: "Umesh",
    initials: "U",
    href: "https://www.linkedin.com/in/umeshxkataria/",
    note: "LinkedIn profile",
    imageSrc: "/umesh.jpeg",
  },
] as const;

export default function PeoplePage() {
  return (
    <div className="grain min-h-screen">
      <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <Nav />

        <section className="mt-6 rounded-[2rem] border border-[var(--line)] bg-white/70 p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[0.75rem] uppercase tracking-[0.28em] text-slate-500">
                Team behind the camp
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                The team helping shape the Build Week
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((person) => (
              <article
                key={person.href}
                className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5 shadow-[0_18px_40px_rgba(19,32,51,0.06)]"
              >
                <div className="overflow-hidden rounded-[1.4rem] bg-[linear-gradient(160deg,rgba(222,236,246,0.9),rgba(249,244,233,0.95))]">
                  {person.imageSrc ? (
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={person.imageSrc}
                        alt={`${person.name} portrait`}
                        fill
                        sizes="(max-width: 1280px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/5] items-center justify-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#132033] text-3xl font-semibold text-white">
                       
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5">
                  <p className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                    {person.name}
                  </p>
                  <a
                    href={person.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium !text-white transition-transform hover:-translate-y-0.5"
                  >
                    Connect with me
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
