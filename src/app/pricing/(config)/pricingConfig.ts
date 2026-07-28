import {
  DocumentCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  ClockIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

export interface PricingFeature {
  name: string;
  icon: typeof DocumentCheckIcon;
  available: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  billingType: string;
  isRecommended: boolean;
  badge?: string;
  bestFor: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaLink: string;
  trustNote: string;
}

export const pricingPlansData: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description:
      "Essential bookkeeping and financial operations for early-stage startups and small businesses.",
    price: "$499",
    period: "/ month",
    billingType: "Billed monthly • No long-term contract",
    isRecommended: false,
    bestFor: "Best for Startups",
    ctaLabel: "Get Started",
    ctaLink: "/contact?plan=starter",
    trustNote: "No Hidden Fees • Cancel Anytime",
    features: [
      {
        name: "Monthly Ledger Bookkeeping",
        icon: DocumentCheckIcon,
        available: true,
      },
      {
        name: "Bank & Credit Card Reconciliation",
        icon: BanknotesIcon,
        available: true,
      },
      {
        name: "Quarterly P&L & Balance Sheet",
        icon: ChartBarIcon,
        available: true,
      },
      {
        name: "Standard Email Support",
        icon: ClockIcon,
        available: true,
      },
      {
        name: "Dedicated Account Manager",
        icon: UserGroupIcon,
        available: false,
      },
      {
        name: "Virtual CFO Growth Advisory",
        icon: SparklesIcon,
        available: false,
      },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    description:
      "Full-service accounting, dedicated CPA oversight, and faster month-end closes for growing companies.",
    price: "$999",
    period: "/ month",
    billingType: "Billed monthly • Flexible scaling",
    isRecommended: true,
    badge: "Most Popular",
    bestFor: "Best for Growing Businesses",
    ctaLabel: "Get Started",
    ctaLink: "/contact?plan=growth",
    trustNote: "Dedicated Support Included • Risk-Free Onboarding",
    features: [
      {
        name: "Full-Charge Daily Bookkeeping",
        icon: DocumentCheckIcon,
        available: true,
      },
      {
        name: "Monthly Financial Close & Reporting",
        icon: ChartBarIcon,
        available: true,
      },
      {
        name: "Dedicated Senior CPA Manager",
        icon: UserGroupIcon,
        available: true,
      },
      {
        name: "Payroll & Tax Compliance Support",
        icon: ShieldCheckIcon,
        available: true,
      },
      {
        name: "Priority Email & Slack Channel",
        icon: ClockIcon,
        available: true,
      },
      {
        name: "Quarterly Financial Review Meetings",
        icon: ArrowTrendingUpIcon,
        available: true,
      },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "Custom multi-entity accounting, virtual CFO advisory, and dedicated offshore teams for large organizations.",
    price: "Custom",
    period: "Tailored Scope",
    billingType: "Custom SLA • Dedicated offshore team",
    isRecommended: false,
    bestFor: "Best for Large Organizations",
    ctaLabel: "Talk to an Advisor",
    ctaLink: "/contact?plan=enterprise",
    trustNote: "Custom SLA • Dedicated Offshore Capacity",
    features: [
      {
        name: "Multi-Entity & Global Bookkeeping",
        icon: BuildingOfficeIcon,
        available: true,
      },
      {
        name: "Dedicated Full-Time Offshore Team",
        icon: UserGroupIcon,
        available: true,
      },
      {
        name: "Virtual CFO & Strategic Forecasting",
        icon: SparklesIcon,
        available: true,
      },
      {
        name: "ASC 606 & Complex Compliance",
        icon: ShieldCheckIcon,
        available: true,
      },
      {
        name: "24/7 Priority SLA Response",
        icon: ClockIcon,
        available: true,
      },
      {
        name: "Custom Software Stack Integration",
        icon: DocumentCheckIcon,
        available: true,
      },
    ],
  },
];
