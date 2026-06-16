import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Gift,
  LockKeyhole,
  Sparkles,
  Star,
} from "lucide-react";
import {
  brandDisclaimer,
  brandExamples,
  featuredProducts,
  howItWorks,
  productCategories,
  storePerks,
  trustItems,
} from "@/lib/site";
import { BrandLogo } from "@/components/brand-logo";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative border-b border-slate-200 bg-[radial-gradient(circle_at_18%_18%,rgba(20,184,166,0.18),transparent_30%),radial-gradient(circle_at_86%_8%,rgba(249,115,22,0.14),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 sm:py-18 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-md border border-teal-200 bg-white/90 px-3 py-2 text-sm font-semibold text-teal-800 shadow-sm">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Reloadly-supported digital catalog
            </div>
            <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Gift cards, prepaid rewards, and mobile top-ups in one clean store.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Nverly is being built around Reloadly-supported products: digital
              gift cards, gaming cards, prepaid payment cards, mobile airtime,
              data bundles, and Perq payout links. Availability depends on the
              recipient country and live provider catalog.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#gift-cards"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Browse Gift Cards
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400"
              >
                Request a Card
              </Link>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
              {["Country-aware catalog", "Secure checkout ready", "Email support"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-600" aria-hidden="true" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="relative z-10">
            <div className="hero-float relative">
              <Image
                src="/hero-gift-cards.png"
                alt="A premium stack of generic digital gift cards"
                width={1717}
                height={916}
                priority
                className="w-full rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-300/50"
              />
              <div className="absolute left-4 top-4 rounded-md border border-white/70 bg-white/90 px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
                Catalog varies by country
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-md border border-white/70 bg-white/90 px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
                <LockKeyhole className="h-4 w-4 text-teal-700" aria-hidden="true" />
                Secure delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Example gift card brands" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8">
          <div className="brand-marquee overflow-hidden">
            <div className="brand-track flex w-max gap-3">
              {[...brandExamples, ...brandExamples].map((brand, index) => (
                <span
                  key={`${brand}-${index}`}
                  className="inline-flex h-10 items-center rounded-md border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gift-cards" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Popular cards
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Products aligned with Reloadly support.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The cards below use product families and brand examples referenced in
              Reloadly public materials. They are storefront placeholders until live
              catalog access, pricing, and checkout are connected.
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-900">
            <Star className="h-4 w-4" aria-hidden="true" />
            Checkout coming soon
          </span>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
              <article
                key={product.name}
                className="product-card group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
              >
                <div
                  className={`relative flex aspect-[1.55] items-end overflow-hidden rounded-lg bg-gradient-to-br ${product.accent} p-4 text-white`}
                >
                  <div className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-white/20" />
                  <div className="absolute right-4 top-4 flex min-h-12 min-w-12 items-center justify-center rounded-md bg-white/90 px-3 text-slate-950 shadow-sm">
                    <BrandLogo
                      logo={product.logo}
                      label={product.name}
                      className="max-h-8 min-h-6 w-auto max-w-24"
                    />
                  </div>
                  <div className="max-w-[78%]">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                      {product.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold leading-tight">{product.name}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {product.description}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-slate-950">
                    {product.availability}
                  </span>
                  <span className="rounded-md bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">
                    Soon
                  </span>
                </div>
              </article>
            ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Shop by category
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Only product families Reloadly publicly supports.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {category.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A provider-aware digital flow.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Built for supported regions, correct recipient details, and digital
            delivery without physical shipping.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {howItWorks.map((step, index) => (
            <div key={step} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-950 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <p className="mt-4 text-base font-semibold text-slate-950">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#0f766e_52%,#7c2d12_100%)] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
              Why Nverly
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Digital distribution should feel clear, fast, and safe.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200">
              Nverly presents Reloadly-supported digital goods in a simple storefront
              experience with support, country-aware availability, and verification
              when needed.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {storePerks.map((perk) => {
              const Icon = perk.icon;

              return (
                <div key={perk.title} className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <Icon className="h-5 w-5 text-teal-200" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold">{perk.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    {perk.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Trust & support
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Clear policies before checkout goes live.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We keep the site transparent: digital delivery rules, refunds, and support
              are easy to find before customers buy.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-lg border border-slate-200 p-5">
                  <Icon className="h-5 w-5 text-teal-700" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-600">
          <div className="flex gap-3">
            <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
            <p>{brandDisclaimer}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-lg border border-slate-200 bg-slate-950 p-6 text-white sm:p-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
              <Gift className="h-5 w-5 text-teal-200" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              Need a card that is not listed?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Tell us what country, operator, gift card, or reward option you want
              to see on Nverly. Requests will be checked against provider-supported
              catalog availability before launch.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Contact Nverly
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
