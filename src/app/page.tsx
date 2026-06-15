import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import {
  contactReasons,
  howItWorks,
  productCategories,
  site,
  trustItems,
} from "@/lib/site";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative border-b border-slate-200 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.16),transparent_28%),radial-gradient(circle_at_85%_0%,rgba(124,58,237,0.14),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-teal-200 bg-white px-3 py-2 text-sm font-medium text-teal-800 shadow-sm">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Secure digital goods marketplace
            </div>
            <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Digital gifts, cards, and game top-ups — delivered instantly.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Nverly helps customers buy digital gift cards, gaming top-ups, vouchers,
              and digital codes through a simple and secure online experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <span className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm">
                Coming Soon
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Marketplace status</p>
                  <p className="mt-1 text-xl font-semibold text-slate-950">Pre-launch</p>
                </div>
                <span className="rounded-md bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">
                  Provider review ready
                </span>
              </div>
              <div className="mt-5 grid gap-3">
                {[
                  { label: "Digital delivery", icon: Clock3 },
                  { label: "Secure payment flow", icon: LockKeyhole },
                  { label: "Regional product checks", icon: Globe2 },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"
                    >
                      <span className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <Icon className="h-4 w-4 text-teal-600" aria-hidden="true" />
                        {item.label}
                      </span>
                      <CheckCircle2 className="h-5 w-5 text-teal-600" aria-hidden="true" />
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 rounded-lg border border-dashed border-slate-300 p-4">
                <p className="text-sm font-semibold text-slate-950">Product catalog</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Placeholder product cards are shown for review. Checkout and fulfillment
                  will be enabled after supplier, compliance, and payment setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Product categories
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Digital products with clear, compliant positioning.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Nverly is preparing a marketplace experience for common digital goods.
            These categories are placeholders and do not represent live checkout.
          </p>
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
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A simple flow from product selection to digital delivery.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {howItWorks.map((step, index) => (
              <div
                key={step}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="mt-4 text-base font-semibold text-slate-950">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Trust & safety
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Designed for customer confidence and business review.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Nverly emphasizes clear policies, secure fulfillment, and careful order
              handling before enabling live transactions.
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
      </section>

      <section className="border-y border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#134e4a_55%,#1e1b4b_100%)] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.7fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
              Business & providers
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for reliable digital distribution
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200">
              Nverly works with digital product suppliers and API providers to offer a
              secure and compliant digital goods experience for customers.
            </p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
            <h3 className="text-base font-semibold">Review-friendly foundation</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
              <li>Clear policy pages and support contact</li>
              <li>Transparent supplier and payment onboarding</li>
              <li>Pre-launch catalog language until checkout is enabled</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Talk to Nverly
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              For partnerships, provider access, and customer support, contact us at{" "}
              <a className="font-semibold text-slate-950" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {contactReasons.map((reason) => (
              <span
                key={reason}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
              >
                {reason}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
