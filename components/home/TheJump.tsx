import Link from "next/link";
import { CompanyLogoMark } from "./CompanyLogo";
import { companyLogos } from "./company-logos";

const steps = [
  { n: 1, title: "Find your weak spot", note: "2-min check", href: "/check", tag: "free" },
  {
    n: 2,
    title: "Fill the basics",
    note: "System Design roadmap",
    href: "/roadmap/system-design",
    tag: "free",
  },
  {
    n: 3,
    title: "Drill the follow-ups",
    note: "the backend guide",
    href: "/guides/backend",
    tag: "₹499",
  },
  {
    n: 4,
    title: "Say it out loud",
    note: "mock with the follow-ups",
    href: "/guides/backend#buy",
    tag: "included",
  },
];

/** "The jump": from clearing the first question to holding up on the second, in four steps. */
export function TheJump() {
  return (
    <section className="border-ink bg-card border-y-[1.5px]">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-8 px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-2">
          <span className="label">// the jump</span>
          <h2 className="h-display m-0 text-[clamp(30px,4vw,44px)]">
            From <span className="text-muted">“answered fine”</span> to{" "}
            <span className="marker">holds up on the second question</span>.
          </h2>
        </div>

        <div className="grid items-end gap-5 lg:grid-cols-[250px_1fr_300px]">
          {/* Where you are */}
          <div className="border-ink bg-paper flex flex-col gap-2 self-end rounded-[14px] border-[1.5px] p-5 shadow-[5px_5px_0_var(--ink)]">
            <span className="label !text-xs">// today</span>
            <p className="font-head m-0 text-[22px] leading-tight font-bold">
              You clear the first question.
            </p>
            <p className="hand text-red m-0 -rotate-2 text-[22px] leading-tight">
              then “why?”… and it goes quiet
            </p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              <span className="border-rule text-muted rounded-full border px-2.5 py-0.5 font-mono text-[11px]">
                service company
              </span>
              <span className="border-rule text-muted rounded-full border px-2.5 py-0.5 font-mono text-[11px]">
                rehearsed answers
              </span>
            </div>
          </div>

          {/* The steps, rising */}
          <ol className="relative m-0 grid list-none grid-cols-2 gap-3 p-0 lg:grid-cols-4 lg:gap-4">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 98 C 25 92, 30 70, 50 55 S 80 20, 100 4"
                fill="none"
                stroke="var(--blue)"
                strokeWidth="0.6"
                strokeDasharray="1.6 1.6"
                vectorEffect="non-scaling-stroke"
                style={{ strokeWidth: 2 }}
              />
            </svg>
            {steps.map((s, i) => (
              <li key={s.n} className="relative" style={{ marginTop: 0 }}>
                <Link
                  href={s.href}
                  className={`border-ink bg-card text-ink relative flex flex-col gap-1 rounded-[12px] border-[1.5px] p-3.5 no-underline shadow-[4px_4px_0_var(--ink)] hover:-translate-y-px lg:mt-[var(--rise)]`}
                  style={{ ["--rise" as string]: `${(3 - i) * 46}px` }}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className="bg-blue text-card flex h-7 w-7 items-center justify-center rounded-full font-mono text-sm font-semibold">
                      {s.n}
                    </span>
                    <span
                      className={
                        s.tag === "free"
                          ? "bg-green-wash text-green-dark rounded px-1.5 py-0.5 font-mono text-[11px] font-semibold"
                          : "bg-amber-wash text-amber-dark rounded px-1.5 py-0.5 font-mono text-[11px] font-semibold"
                      }
                    >
                      {s.tag}
                    </span>
                  </span>
                  <span className="font-head text-[17px] leading-tight font-bold">{s.title}</span>
                  <span className="text-muted text-[13px]">{s.note} →</span>
                </Link>
              </li>
            ))}
          </ol>

          {/* Where you're going */}
          <div className="border-blue bg-card flex flex-col gap-2.5 self-start rounded-[14px] border-[1.5px] p-5 shadow-[5px_5px_0_var(--blue)] lg:-mt-6">
            <span className="label !text-blue !text-xs">// the round you’re aiming for</span>
            <p className="font-head m-0 text-[22px] leading-tight font-bold">
              Product-company rounds that ask the second question.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 py-1">
              {companyLogos.map((c) => (
                <CompanyLogoMark key={c.name} logo={c} height={c.wordmark ? 18 : 30} />
              ))}
            </div>
            <span className="hand text-blue -rotate-1 text-[20px]">
              where “why?” is the real question
            </span>
          </div>
        </div>

        <p className="text-faint m-0 font-mono text-[11px]">
          Logos show the kind of interview round and belong to their owners. secondquestion is not
          affiliated with or endorsed by any of them.
        </p>
      </div>
    </section>
  );
}
