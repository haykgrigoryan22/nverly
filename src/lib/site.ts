import {
  BadgeCheck,
  CreditCard,
  Gamepad2,
  Gift,
  Headphones,
  KeyRound,
  Mail,
  MessageCircle,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
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
  { label: "Privacy", href: "/privacy" },
  { label: "Refunds", href: "/refund" },
];

export const productCategories = [
  {
    title: "Gift Cards",
    description: "Digital gift card options for online purchases and rewards.",
    icon: Gift,
  },
  {
    title: "Game Top-Ups",
    description: "Account top-ups and digital balances for supported games.",
    icon: Gamepad2,
  },
  {
    title: "Digital Codes",
    description: "Secure delivery for digital product codes and vouchers.",
    icon: KeyRound,
  },
  {
    title: "Gaming Subscriptions",
    description: "Subscription-style digital products for gaming customers.",
    icon: WalletCards,
  },
  {
    title: "Rewards & Vouchers",
    description: "Flexible digital rewards for customers and promotions.",
    icon: Ticket,
  },
  {
    title: "Telegram Stars / Digital Services",
    description: "Selected digital services delivered through verified flows.",
    icon: MessageCircle,
  },
];

export const howItWorks = [
  "Choose a digital product",
  "Pay securely",
  "Receive your code or top-up digitally",
  "Use it instantly",
];

export const trustItems = [
  {
    title: "Secure digital delivery",
    description: "Products are fulfilled electronically with clear order status.",
    icon: Zap,
  },
  {
    title: "Fraud prevention checks",
    description: "Orders may be screened to reduce abuse and protect customers.",
    icon: ShieldCheck,
  },
  {
    title: "Order verification when needed",
    description: "Some purchases may require additional confirmation before delivery.",
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

export const footerHighlights = [
  { label: site.tagline, icon: Sparkles },
  { label: site.email, icon: Mail },
];
