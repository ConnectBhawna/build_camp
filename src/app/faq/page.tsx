"use client";

import { useState } from "react";
import Nav from "../components/Nav";

const faqs = [
  {
    question: "Who can participate in Ethereum Build Camp?",
    answer:
      "Ethereum Build Camp is open to developers, designers, and builders of all experience levels from curious beginners to seasoned Ethereum engineers. If you're excited about building on Ethereum, you're welcome.",
  },
  {
    question: "Do I need a team to join?",
    answer:
      "You can apply solo or as a team. We'll also have a team-formation session at the start of camp to help solo participants find collaborators. Teams of 2–4 are ideal for the buildathon.",
  },
  {
    question: "Is there a participation fee?",
    answer:
      "No, Ethereum Build Camp is completely free to attend. We're here to support builders, not charge them.",
  },
  {
    question: "What should I build?",
    answer:
      "Pick one of the six tracks — DeFi, AI x Ethereum, Consumer Crypto, Infra Tooling, Public Goods, or Onchain Social and build a project that fits. The scope is intentionally broad so you can experiment and find your edge.",
  },
  {
    question: "What is Demo Day?",
    answer:
      "Demo Day is the final showcase of the camp where teams present their projects to judges, mentors, and the broader Ethereum community. It's your moment to shine and compete for track prizes.",
  },
  {
    question: "What are the prizes?",
    answer:
      "Each track winner receives a mechanical keyboard + goodies. Winners are selected based on creativity, technical execution, and impact.",
  },
  {
    question: "Will there be mentors available?",
    answer:
      "Yes! We have experienced Ethereum developers and ecosystem contributors available throughout the camp to guide you, answer technical questions, and help you ship.",
  },
  {
    question: "What is the format of the camp?",
    answer:
      "The camp runs over several days and includes curriculum sessions, hands-on building time, mentor office hours, and culminates in Demo Day presentations. Check the Curriculum page for the full schedule.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grain min-h-screen">
      <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <Nav />

        <section className="rounded-[2rem] border border-[var(--line)] bg-white/65 p-6 sm:p-8 lg:p-12">
          <p className="text-[0.75rem] uppercase tracking-[0.28em] text-slate-500">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Frequently asked questions.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
            Everything you need to know before you build. Can&apos;t find an answer?
            Reach out to us directly.
          </p>

          <div className="mt-12 flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-[1.4rem] border border-[var(--line)] bg-[var(--surface-strong)] overflow-hidden"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() => toggle(index)}
                >
                  <span className="text-base font-medium text-slate-950">
                    {faq.question}
                  </span>
                  <span className="ml-4 shrink-0 text-slate-400 transition-transform duration-200"
                    style={{ transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
