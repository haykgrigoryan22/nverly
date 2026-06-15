import { PageShell } from "@/components/page-shell";
import { site } from "@/lib/site";

const sections = [
  {
    title: "Information we collect",
    body: "Nverly may collect basic contact and order information, such as name, email address, order details, product selection, billing status, support messages, and technical information needed to operate the service.",
  },
  {
    title: "How we use information",
    body: "We use information to process orders, deliver digital products, prevent fraud, verify transactions, provide customer support, improve the service, and communicate important account or order updates.",
  },
  {
    title: "Data sharing",
    body: "We do not sell personal data. We may share limited information with payment processors, digital product suppliers, fraud prevention services, hosting providers, or compliance partners when needed to operate Nverly and support customer orders.",
  },
  {
    title: "Security",
    body: "Nverly uses reasonable administrative and technical measures to protect customer information. No online service can guarantee complete security, but we design our systems to reduce unnecessary data exposure.",
  },
  {
    title: "Contact",
    body: `Privacy questions can be sent to ${site.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="Privacy Policy"
      description="This policy explains the basic information Nverly may collect and how it is used to operate a digital goods marketplace."
    >
      <div className="space-y-5">
        {sections.map((section) => (
          <section key={section.title} className="rounded-lg border border-slate-200 p-5">
            <h2 className="text-lg font-semibold text-slate-950">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
