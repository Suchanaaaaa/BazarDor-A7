const BENGALI_DIGITS = "০১২৩৪৫৬৭৮৯";
const WEEKDAYS_BN = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
const MONTHS_BN = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];

/** Convert western digits to Bengali digits. */
export const bn = (value: string | number) =>
  String(value).replace(/[0-9]/g, (digit) => BENGALI_DIGITS[Number(digit)]);

/** Parse numeric API values, including Bengali digits and formatted prices. */
export function toNum(value: unknown): number {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  if (typeof value !== "string") return 0;

  const westernized = value
    .replace(/[০-৯]/g, (digit) => String(BENGALI_DIGITS.indexOf(digit)))
    .replace(/,/g, "")
    .replace(/[^0-9.\-]/g, "");
  const parsed = Number.parseFloat(westernized);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function bnPrice(amount: number) {
  const formatted = Number.isInteger(amount)
    ? amount.toLocaleString("en-US")
    : amount.toLocaleString("en-US", { maximumFractionDigits: 2 });
  return bn(formatted);
}

export const bnPct = (amount: number) => bn(Math.abs(amount).toFixed(1));

export function bnDate(date: Date = new Date()) {
  const dhakaDate = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
  const weekday = WEEKDAYS_BN[dhakaDate.getDay()];
  const day = bn(dhakaDate.getDate());
  const month = MONTHS_BN[dhakaDate.getMonth()];
  const year = bn(dhakaDate.getFullYear());
  return `${weekday}, ${day} ${month}, ${year}`;
}
