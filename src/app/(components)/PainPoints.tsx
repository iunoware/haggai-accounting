import {
  ExclamationTriangleIcon,
  ClockIcon,
  // DocumentTextIcon,
  ChartBarIcon,
  // ExclamationCircleIcon,
  ArrowTrendingDownIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

const painPoints = [
  {
    icon: ClockIcon,
    title: "Slow Month-End Closes",
    description:
      "Books that take 10+ days to close, with no clear visibility into what's holding things up.",
  },
  {
    icon: ExclamationTriangleIcon,
    title: "Payroll Risk",
    description:
      "Compliance gaps and processing errors put leadership's time — and the company's reputation — on the line.",
  },
  {
    icon: ArrowTrendingDownIcon,
    title: "Supply Chains That Don't Scale",
    description:
      "Procurement and logistics processes built for a smaller business can start straining under growth.",
  },
  {
    icon: ChartBarIcon,
    title: "Overpaying for Underused Headcount",
    description:
      "Full in-house teams staffed for peak workloads can sit idle during slower periods, increasing unnecessary costs.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-slate-50/60 py-20 font-body">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-soft/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-sm sm:text-sm">
            <CheckIcon
              className="h-4 w-4 stroke-[2.5] text-primary"
              aria-hidden="true"
            />
            Challenges We Solve
          </div>

          <h2 className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl lg:text-4xl leading-tight">
            Running a growing business shouldn&apos;t mean drowning in{" "}
            <span className="text-primary">back-office work.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-md">
            Growing businesses often struggle with unclear records, delayed
            reporting, and time-consuming financial processes. Haggai helps
            bring clarity, control, and consistency to your accounting.
          </p>
        </div>

        {/* Pain-point cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16">
          {painPoints.map((painPoint, index) => {
            const Icon = painPoint.icon;

            return (
              <article
                key={painPoint.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/5 sm:p-7"
              >
                <div className="absolute right-5 top-5 text-5xl font-heading font-semibold text-slate-100 transition-colors duration-300 group-hover:text-soft/80">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 pr-10 font-heading text-xl font-semibold text-slate-950">
                    {painPoint.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {painPoint.description}
                  </p>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200/90 bg-white px-6 py-6 text-center shadow-xs sm:flex-row sm:text-left lg:px-8">
          <div>
            <p className="font-heading text-lg font-semibold text-slate-950">
              If any of this sounds familiar, you don&apos;t need more people -
              you need the right partner.
            </p>

            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              We simplify your financial operations so you can focus on running
              your business.
            </p>
          </div>

          <a
            href="#our-solutions"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#004870] hover:scale-[1.02] active:scale-[0.98]"
          >
            See How We Help
          </a>
        </div>
      </div>
    </section>
  );
}
