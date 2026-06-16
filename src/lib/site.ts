import {
  BadgeCheck,
  CreditCard,
  Gamepad2,
  Headphones,
  Mail,
  MonitorSmartphone,
  Music,
  PackageCheck,
  RefreshCcw,
  Search,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Ticket,
  WalletCards,
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
    title: "Shopping Gift Cards",
    description: "Popular cards for marketplaces, fashion, food, and everyday shopping.",
    icon: ShoppingBag,
  },
  {
    title: "Gaming Cards",
    description: "Game wallets, subscriptions, downloadable content, and player top-ups.",
    icon: Gamepad2,
  },
  {
    title: "App Store Credit",
    description: "Digital balance cards for apps, games, music, movies, and services.",
    icon: MonitorSmartphone,
  },
  {
    title: "Fashion & Retail",
    description: "Gift cards for sneakers, clothing, accessories, and lifestyle shops.",
    icon: Shirt,
  },
  {
    title: "Entertainment",
    description: "Streaming, music, digital subscriptions, and entertainment vouchers.",
    icon: Music,
  },
  {
    title: "Rewards & Vouchers",
    description: "Flexible digital gifts for birthdays, thank-you moments, and rewards.",
    icon: Ticket,
  },
];

export const howItWorks = [
  "Browse cards and choose an amount",
  "Confirm region and delivery details",
  "Pay through a secure checkout",
  "Receive your digital code by email",
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
  "Adidas",
  "Nike",
  "Spotify",
  "Netflix",
  "Roblox",
  "Fortnite",
];

export const featuredProducts = [
  {
    name: "Amazon Gift Card",
    category: "Shopping",
    description: "A flexible digital gift for online shopping.",
    amounts: "$10 - $100",
    accent: "from-amber-400 to-orange-500",
    icon: ShoppingBag,
  },
  {
    name: "Steam Wallet",
    category: "Gaming",
    description: "Game credit for PC players and digital game purchases.",
    amounts: "$5 - $100",
    accent: "from-sky-500 to-blue-700",
    icon: Gamepad2,
  },
  {
    name: "PlayStation Store",
    category: "Gaming",
    description: "Digital credit for games, add-ons, and subscriptions.",
    amounts: "$10 - $100",
    accent: "from-blue-500 to-indigo-700",
    icon: ShoppingCart,
  },
  {
    name: "Xbox Gift Card",
    category: "Gaming",
    description: "Digital credit for console games, apps, and content.",
    amounts: "$10 - $100",
    accent: "from-emerald-400 to-green-700",
    icon: Gamepad2,
  },
  {
    name: "Apple Gift Card",
    category: "Apps & media",
    description: "Credit for apps, games, music, movies, and more.",
    amounts: "$10 - $100",
    accent: "from-slate-500 to-slate-900",
    icon: MonitorSmartphone,
  },
  {
    name: "Google Play Gift Card",
    category: "Apps & media",
    description: "Credit for apps, games, books, and digital content.",
    amounts: "$10 - $100",
    accent: "from-teal-400 to-cyan-700",
    icon: Store,
  },
  {
    name: "Adidas Gift Card",
    category: "Fashion",
    description: "A useful gift for sportswear, sneakers, and accessories.",
    amounts: "$25 - $200",
    accent: "from-violet-500 to-fuchsia-600",
    icon: Shirt,
  },
  {
    name: "Gaming Subscriptions",
    category: "Subscriptions",
    description: "Membership-style digital products for players.",
    amounts: "Monthly cards",
    accent: "from-rose-400 to-red-600",
    icon: WalletCards,
  },
];

export const storePerks = [
  {
    title: "Find the right gift",
    description: "Search by category, brand, region, or occasion.",
    icon: Search,
  },
  {
    title: "Gift in minutes",
    description: "Digital delivery means no shipping, no waiting, and no plastic card.",
    icon: Zap,
  },
  {
    title: "Simple support",
    description: `Questions and order help are available at ${site.email}.`,
    icon: Headphones,
  },
];

export const footerHighlights = [
  { label: site.tagline, icon: Sparkles },
  { label: site.email, icon: Mail },
];

export const brandDisclaimer =
  "Brand names are shown as examples of gift-card categories. Trademarks belong to their respective owners. Nverly is not affiliated with or endorsed by these brands unless explicitly stated.";
