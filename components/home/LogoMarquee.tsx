import { CompanyLogoMark } from "./CompanyLogo";
import { companyLogos } from "./company-logos";

/**
 * A slow, endless strip of company logos under the hero. The list is drawn twice so the loop is
 * seamless; the copy is hidden from screen readers. Stops for reduced motion and on hover.
 */
export function LogoMarquee() {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="m-0 flex shrink-0 list-none items-center gap-10 p-0 pr-10 sm:gap-14 sm:pr-14"
    >
      {companyLogos.map((c) => (
        <li key={c.name} className="flex items-center">
          <CompanyLogoMark
            logo={c}
            height={c.wordmark ? 22 : 34}
            className={c.wordmark ? "h-[17px] w-auto sm:h-[22px]" : "h-[26px] w-auto sm:h-[34px]"}
          />
        </li>
      ))}
    </ul>
  );
  return (
    <section
      aria-label="Companies whose rounds ask the second question"
      className="flex flex-col gap-2 pb-10"
    >
      <p className="label m-0 px-4 text-center">// prep for rounds like these</p>
      <div className="marquee group relative overflow-hidden py-2">
        <div className="marquee-track flex w-max group-hover:[animation-play-state:paused]">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
