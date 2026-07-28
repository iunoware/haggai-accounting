export type ValueIndicatorType =
  | "included"
  | "limited"
  | "premium"
  | "unavailable"
  | "custom";

export interface ValueIndicator {
  type: ValueIndicatorType;
  label?: string;
}

export interface ComparisonFeature {
  id: string;
  name: string;
  category: "Core Accounting" | "Payroll & Compliance" | "Support & SLA" | "Growth & Advisory";
  tooltip?: string;
  starter: ValueIndicator;
  growth: ValueIndicator;
  enterprise: ValueIndicator;
}

export interface ComparisonCategory {
  name: "Core Accounting" | "Payroll & Compliance" | "Support & SLA" | "Growth & Advisory";
  description: string;
  features: ComparisonFeature[];
}

export const comparisonCategoriesData: ComparisonCategory[] = [
  {
    name: "Core Accounting",
    description: "Fundamental bookkeeping, ledger management, and financial reporting.",
    features: [
      {
        id: "bookkeeping",
        name: "General Ledger Bookkeeping",
        category: "Core Accounting",
        starter: { type: "included", label: "Monthly" },
        growth: { type: "included", label: "Full-Charge Daily" },
        enterprise: { type: "included", label: "Multi-Entity Daily" },
      },
      {
        id: "bank-recon",
        name: "Bank & Credit Reconciliation",
        category: "Core Accounting",
        starter: { type: "included", label: "Up to 3 Accounts" },
        growth: { type: "included", label: "Unlimited Accounts" },
        enterprise: { type: "included", label: "Unlimited Multi-Currency" },
      },
      {
        id: "financial-statements",
        name: "P&L & Balance Sheet Statements",
        category: "Core Accounting",
        starter: { type: "limited", label: "Quarterly" },
        growth: { type: "included", label: "Monthly" },
        enterprise: { type: "included", label: "Monthly + Real-time" },
      },
      {
        id: "accounts-payable",
        name: "Accounts Payable Management",
        category: "Core Accounting",
        starter: { type: "unavailable" },
        growth: { type: "included", label: "Up to 50 Bills/mo" },
        enterprise: { type: "custom", label: "Unlimited Scope" },
      },
      {
        id: "accounts-receivable",
        name: "Accounts Receivable & Invoicing",
        category: "Core Accounting",
        starter: { type: "unavailable" },
        growth: { type: "included", label: "Up to 50 Invoices/mo" },
        enterprise: { type: "custom", label: "Unlimited Scope" },
      },
    ],
  },
  {
    name: "Payroll & Compliance",
    description: "Employee payroll processing, withholding, and regulatory filings.",
    features: [
      {
        id: "payroll-processing",
        name: "Payroll Processing & Direct Deposit",
        category: "Payroll & Compliance",
        starter: { type: "unavailable" },
        growth: { type: "included", label: "Up to 25 Employees" },
        enterprise: { type: "custom", label: "Unlimited Employees" },
      },
      {
        id: "tax-preparation",
        name: "Sales Tax & 1099 Filing Support",
        category: "Payroll & Compliance",
        starter: { type: "unavailable" },
        growth: { type: "included" },
        enterprise: { type: "included", label: "Multi-State Compliance" },
      },
      {
        id: "audit-readiness",
        name: "Audit-Ready Financial Records",
        category: "Payroll & Compliance",
        starter: { type: "limited", label: "Basic" },
        growth: { type: "included" },
        enterprise: { type: "premium", label: "Institutional Grade" },
      },
      {
        id: "asc-606",
        name: "ASC 606 Revenue Recognition",
        category: "Payroll & Compliance",
        starter: { type: "unavailable" },
        growth: { type: "limited", label: "Add-on" },
        enterprise: { type: "included" },
      },
    ],
  },
  {
    name: "Support & SLA",
    description: "Communication channels, dedicated specialists, and response guarantees.",
    features: [
      {
        id: "dedicated-cpa",
        name: "Dedicated Senior CPA Manager",
        category: "Support & SLA",
        starter: { type: "unavailable" },
        growth: { type: "included" },
        enterprise: { type: "premium", label: "Dedicated Full Team" },
      },
      {
        id: "support-channels",
        name: "Communication Channels",
        category: "Support & SLA",
        starter: { type: "included", label: "Email Support" },
        growth: { type: "included", label: "Email & Dedicated Slack" },
        enterprise: { type: "premium", label: "24/7 Priority Phone & Slack" },
      },
      {
        id: "response-time",
        name: "Guaranteed SLA Response",
        category: "Support & SLA",
        starter: { type: "limited", label: "48 Hours" },
        growth: { type: "included", label: "24 Hours" },
        enterprise: { type: "premium", label: "1 Hour Priority" },
      },
      {
        id: "review-meetings",
        name: "Financial Review Meetings",
        category: "Support & SLA",
        starter: { type: "unavailable" },
        growth: { type: "included", label: "Quarterly Review" },
        enterprise: { type: "premium", label: "Monthly Executive Review" },
      },
    ],
  },
  {
    name: "Growth & Advisory",
    description: "Virtual CFO insights, business analytics, and scalable integrations.",
    features: [
      {
        id: "custom-dashboards",
        name: "Executive KPI Dashboards",
        category: "Growth & Advisory",
        starter: { type: "unavailable" },
        growth: { type: "included" },
        enterprise: { type: "premium", label: "Custom Real-time KPI" },
      },
      {
        id: "cfo-advisory",
        name: "Virtual CFO Strategic Advisory",
        category: "Growth & Advisory",
        starter: { type: "unavailable" },
        growth: { type: "limited", label: "Quarterly" },
        enterprise: { type: "premium", label: "Full Advisory & Forecasting" },
      },
      {
        id: "software-integrations",
        name: "Custom Software Integrations",
        category: "Growth & Advisory",
        starter: { type: "limited", label: "QuickBooks / Xero" },
        growth: { type: "included", label: "QuickBooks, Stripe, Gusto" },
        enterprise: { type: "custom", label: "Custom API & ERP Integrations" },
      },
      {
        id: "scalable-team",
        name: "Scalable Resource Allocation",
        category: "Growth & Advisory",
        starter: { type: "limited" },
        growth: { type: "included" },
        enterprise: { type: "premium", label: "Unlimited On-Demand" },
      },
    ],
  },
];
