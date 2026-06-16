import Link from "next/link";
import { MapPin } from "lucide-react";
import { footerHighlights, navLinks, site } from "@/lib/site";

const footerLinkLabels: Record<string, string> = {
  "/terms": "Terms of Service",
  "/privacy": "Privacy Policy",
  "/refund": "Refund Policy",
};

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="text-xl font-semibold tracking-tight text-slate-950">
            {site.name}
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            {site.tagline}. A modern place to browse Reloadly-supported gift cards,
            prepaid rewards, airtime top-ups, data bundles, and payout links.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {footerHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                >
                  <Icon className="h-4 w-4 text-teal-600" aria-hidden="true" />
                  {item.label === site.email ? (
                    <a className="hover:text-slate-950" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  ) : (
                    item.label
                  )}
                </span>
              );
            })}
            <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
              <MapPin className="h-4 w-4 text-teal-600" aria-hidden="true" />
              {site.location}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:justify-items-end">
          <div className="col-span-2 sm:col-span-1">
            <h2 className="text-sm font-semibold text-slate-950">Links</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link className="hover:text-slate-950" href={link.href}>
                    {footerLinkLabels[link.href] || link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-2">
            <h2 className="text-sm font-semibold text-slate-950">Business</h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">
              For catalog requests, partnerships, and customer support, contact us at{" "}
              <a className="font-medium text-slate-950" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-5 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
