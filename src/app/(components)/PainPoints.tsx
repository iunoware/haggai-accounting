import {
  AlertCircle,
  BarChart3,
  Clock3,
  FileWarning,
  ReceiptText,
  TrendingDown,
} from "lucide-react";

const painPoints = [
  {
    icon: FileWarning,
    title: "Unreliable Financial Records",
    description:
      "Incomplete or inaccurate books make it difficult to understand your true financial position.",
  },
  {
    icon: Clock3,
    title: "Time-Consuming Accounting",
    description:
      "Managing daily transactions and reconciliations takes valuable time away from growing your business.",
  },
  {
    icon: ReceiptText,
    title: "Delayed Payments and Collections",
    description:
      "Disorganized payables and receivables can create unnecessary pressure on your cash flow.",
  },
  {
    icon: BarChart3,
    title: "Limited Financial Visibility",
    description:
      "Without clear and timely reports, making confident business decisions becomes challenging.",
  },
  {
    icon: AlertCircle,
    title: "Stressful Month-End Closing",
    description:
      "Inconsistent processes often result in delayed reports, overlooked entries, and last-minute corrections.",
  },
  {
    icon: TrendingDown,
    title: "Accounting That Cannot Scale",
    description:
      "Manual processes and disconnected systems can struggle to support your business as it grows.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute -right-28 top-10 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            Challenges We Solve
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Accounting challenges should not hold your{" "}
            <span className="text-sky-700">business back.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Growing businesses often struggle with unclear records, delayed reporting, and
            time-consuming financial processes. Haggai helps bring clarity, control, and
            consistency to your accounting.
          </p>
        </div>

        {/* Pain-point cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {painPoints.map((painPoint, index) => {
            const Icon = painPoint.icon;

            return (
              <article
                key={painPoint.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-7"
              >
                <div className="absolute right-5 top-5 text-5xl font-semibold text-slate-100 transition-colors duration-300 group-hover:text-sky-50">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-700 transition-colors duration-300 group-hover:bg-sky-700 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 pr-10 text-lg font-semibold text-slate-900">
                    {painPoint.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                    {painPoint.description}
                  </p>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-sky-600 transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white px-6 py-6 text-center shadow-sm sm:flex-row sm:text-left lg:px-8">
          <div>
            <p className="font-semibold text-slate-900">
              Your accounting should support your growth—not slow it down.
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              We simplify your financial operations so you can focus on running your
              business.
            </p>
          </div>

          <a
            href="#solutions"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
          >
            See How We Help
          </a>
        </div>
      </div>
    </section>
  );
}
