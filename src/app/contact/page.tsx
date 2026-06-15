import { Mail, MapPin, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageShell } from "@/components/page-shell";
import { contactReasons, site } from "@/lib/site";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Contact Nverly"
      description={`For partnerships, provider access, and customer support, contact us at ${site.email}.`}
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <Mail className="h-5 w-5 text-teal-700" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-slate-950">Email</h2>
            <a
              className="mt-2 block text-sm font-medium text-slate-700 hover:text-slate-950"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <MapPin className="h-5 w-5 text-teal-700" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-slate-950">Location</h2>
            <p className="mt-2 text-sm text-slate-700">{site.location}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <ShieldCheck className="h-5 w-5 text-teal-700" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-slate-950">Contact reasons</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {contactReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </aside>
        <ContactForm />
      </div>
    </PageShell>
  );
}
