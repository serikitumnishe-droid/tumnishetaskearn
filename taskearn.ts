/**
 * Shared constants and helpers for TaskEarn Nigeria.
 */

/** Minimum balance (in Naira) required before a withdrawal can be requested. */
export const MIN_WITHDRAWAL = 500;

/** Flat fee (in Naira) deducted from every withdrawal. */
export const WITHDRAWAL_FEE = 50;

/** Support contact details shown in the footer. */
export const SUPPORT_WHATSAPP = "09135054964";
export const SUPPORT_EMAIL = "support@taskearn.com";

/** Nigerian banks users can withdraw to. */
export const NIGERIAN_BANKS = [
  "Access Bank",
  "GTBank",
  "First Bank",
  "UBA",
  "Zenith Bank",
  "Union Bank",
  "Fidelity Bank",
  "Stanbic IBTC",
  "FCMB",
  "Sterling Bank",
  "Wema Bank",
  "Polaris Bank",
  "Keystone Bank",
  "Ecobank",
  "Unity Bank",
  "Heritage Bank",
  "Providus Bank",
  "Moniepoint MFB",
  "Kuda Bank",
  "Opay",
  "PalmPay",
  "VFD Microfinance Bank",
] as const;

/** Subject options for the support form. */
export const SUPPORT_SUBJECTS = [
  "Task Issue",
  "Withdrawal Issue",
  "Account Issue",
  "Other",
] as const;

/** Formats any numeric amount as Naira, e.g. 1250 -> "₦1,250.00". */
export function formatNaira(value: number | string | null | undefined): string {
  const amount = Number(value ?? 0);
  return `₦${(Number.isFinite(amount) ? amount : 0).toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

/** Short human date, e.g. "19 Aug 2026". */
export function formatDate(value: string | null | undefined): string {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("en-NG", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
