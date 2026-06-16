import {
  BadgeCheck,
  CreditCard,
  Globe2,
  Gamepad2,
  Headphones,
  Mail,
  MonitorSmartphone,
  PackageCheck,
  Phone,
  RefreshCcw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Ticket,
  Zap,
} from "lucide-react";

export const site = {
  name: "Nverly",
  domain: "nverly.com",
  email: "support@nverly.com",
  tagline: "Digital gifts, instantly",
  url: "https://nverly.com",
  location: "Armenia",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
];

export const productCategories = [
  {
    title: "Digital Gift Cards",
    description: "Provider-backed gift cards for shopping, apps, gaming, and entertainment.",
    icon: ShoppingBag,
  },
  {
    title: "Gaming Gift Cards",
    description: "Gaming cards for supported platforms and game communities.",
    icon: Gamepad2,
  },
  {
    title: "Payment Cards",
    description: "Supported prepaid card options such as Visa and Mastercard where available.",
    icon: CreditCard,
  },
  {
    title: "Mobile Airtime Top-Ups",
    description: "Airtime recharges through supported mobile operators.",
    icon: Phone,
  },
  {
    title: "Mobile Data Bundles",
    description: "Data bundle purchases through supported mobile networks.",
    icon: MonitorSmartphone,
  },
  {
    title: "Perq Payout Links",
    description: "Reward links that let recipients choose from supported catalog options.",
    icon: Ticket,
  },
];

export const howItWorks = [
  "Browse supported products by country",
  "Confirm recipient and delivery details",
  "Pay through a secure checkout",
  "Receive a code, top-up, or reward link digitally",
];

export const trustItems = [
  {
    title: "Fast digital delivery",
    description: "Gift cards and codes are designed for quick electronic fulfillment.",
    icon: PackageCheck,
  },
  {
    title: "Secure checkout",
    description: "Payment and order flows are designed with security checks in mind.",
    icon: ShieldCheck,
  },
  {
    title: "Order verification",
    description: "Some orders may be reviewed to protect customers and prevent fraud.",
    icon: BadgeCheck,
  },
  {
    title: "Clear refund policy",
    description: "Refund eligibility is documented before live checkout launch.",
    icon: RefreshCcw,
  },
  {
    title: "Customer support by email",
    description: `Support is available at ${site.email}.`,
    icon: Headphones,
  },
  {
    title: "Business registered in Armenia",
    description: "Nverly is built as an Armenia-based digital goods marketplace.",
    icon: CreditCard,
  },
];

export const contactReasons = [
  "Partnerships",
  "Provider access",
  "Customer support",
  "Compliance review",
];

export const brandExamples = [
  "Amazon",
  "Steam",
  "PlayStation",
  "Xbox",
  "Apple",
  "Google Play",
  "Nintendo",
  "Roblox",
  "Spotify",
  "Visa",
  "Mastercard",
  "Mobile Airtime",
  "Data Bundles",
  "Perq Links",
];

export const featuredProducts = [
  {
    name: "Amazon Gift Card",
    category: "Shopping",
    description: "A supported gift-card example in Reloadly's public gift-card materials.",
    availability: "Country catalog varies",
    accent: "from-amber-400 to-orange-500",
    logo: "amazon",
  },
  {
    name: "Steam Gift Card",
    category: "Gaming",
    description: "Gaming credit example referenced in Reloadly's gaming gift-card content.",
    availability: "Country catalog varies",
    accent: "from-sky-500 to-blue-700",
    logo: "steam",
  },
  {
    name: "PlayStation Gift Card",
    category: "Gaming",
    description: "Gaming gift-card example referenced in Reloadly's catalog content.",
    availability: "Country catalog varies",
    accent: "from-blue-500 to-indigo-700",
    logo: "playstation",
  },
  {
    name: "Xbox Gift Card",
    category: "Gaming",
    description: "Gaming gift-card example referenced in Reloadly's public materials.",
    availability: "Country catalog varies",
    accent: "from-emerald-400 to-green-700",
    logo: "xbox",
  },
  {
    name: "Apple Gift Card",
    category: "Apps & media",
    description: "Digital gift-card example listed by Reloadly for supported regions.",
    availability: "Country catalog varies",
    accent: "from-slate-500 to-slate-900",
    logo: "apple",
  },
  {
    name: "Google Play Gift Card",
    category: "Apps & media",
    description: "Digital app-store card example listed in Reloadly materials.",
    availability: "Country catalog varies",
    accent: "from-teal-400 to-cyan-700",
    logo: "googleplay",
  },
  {
    name: "Nintendo Gift Card",
    category: "Gaming",
    description: "Gaming gift-card example referenced in Reloadly's public catalog writing.",
    availability: "Country catalog varies",
    accent: "from-red-500 to-rose-700",
    logo: "nintendo",
  },
  {
    name: "Roblox Gift Card",
    category: "Gaming",
    description: "Gaming gift-card example referenced in Reloadly's gaming rewards content.",
    availability: "Country catalog varies",
    accent: "from-violet-500 to-fuchsia-600",
    logo: "roblox",
  },
  {
    name: "Spotify Gift Card",
    category: "Entertainment",
    description: "Entertainment gift-card example shown in Reloadly's current product copy.",
    availability: "Country catalog varies",
    accent: "from-lime-400 to-green-700",
    logo: "spotify",
  },
  {
    name: "Visa Prepaid Card",
    category: "Payment card",
    description: "Prepaid payment-card option mentioned by Reloadly for supported rewards.",
    availability: "Availability varies",
    accent: "from-blue-600 to-indigo-900",
    logo: "visa",
  },
  {
    name: "Mastercard Prepaid Card",
    category: "Payment card",
    description: "Prepaid payment-card option mentioned by Reloadly for supported rewards.",
    availability: "Availability varies",
    accent: "from-orange-500 to-red-700",
    logo: "mastercard",
  },
  {
    name: "Mobile Airtime Top-Up",
    category: "Mobile",
    description: "Airtime recharge through supported operators in Reloadly's network.",
    availability: "Operator coverage varies",
    accent: "from-cyan-500 to-blue-700",
    logo: "airtime",
  },
  {
    name: "Mobile Data Bundle",
    category: "Mobile",
    description: "Mobile data packages through supported operators and countries.",
    availability: "Operator coverage varies",
    accent: "from-teal-500 to-emerald-700",
    logo: "data",
  },
  {
    name: "Perq Payout Link",
    category: "Rewards",
    description: "A reward link where recipients can pick supported gift-card options.",
    availability: "Catalog varies",
    accent: "from-purple-500 to-indigo-700",
    logo: "perq",
  },
];

export const storePerks = [
  {
    title: "Real provider catalog",
    description: "Nverly is shaped around supported Reloadly product types and country coverage.",
    icon: Search,
  },
  {
    title: "Digital delivery paths",
    description: "Codes, top-ups, bundles, and reward links are prepared for online fulfillment.",
    icon: Zap,
  },
  {
    title: "Country-aware availability",
    description: "Product access, operators, currencies, and denominations may vary by recipient country.",
    icon: Globe2,
  },
];

export const footerHighlights = [
  { label: site.tagline, icon: Sparkles },
  { label: site.email, icon: Mail },
];

export const brandDisclaimer =
  "Brand names and logos are shown as catalog examples based on Reloadly public materials. Availability varies by country, currency, supplier, and live provider catalog. Trademarks belong to their respective owners. Nverly is not affiliated with or endorsed by these brands unless explicitly stated.";
