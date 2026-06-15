import { PageShell } from "@/components/page-shell";
import { site } from "@/lib/site";

const sections = [
  {
    title: "Before delivery",
    body: "Refunds may be possible before a digital code is delivered or before a top-up is processed. If an order is still pending and has not been fulfilled, contact support as soon as possible.",
  },
  {
    title: "Delivered digital products",
    body: "Delivered or redeemed digital codes are usually non-refundable because digital goods can be copied, transferred, redeemed, or consumed immediately after delivery.",
  },
  {
    title: "Failed orders",
    body: "Failed orders will be refunded or replaced when verified. Nverly may review supplier status, payment status, delivery records, and customer details before approving a refund or replacement.",
  },
  {
    title: "Wrong customer input",
    body: "Wrong customer input, including incorrect account IDs, emails, regions, product choices, or recipient details, may not be refundable after processing or delivery.",
  },
  {
    title: "Support",
    body: `For refund questions, email ${site.email}. Include your order reference, email address, product, and a short description of the issue.`,
  },
];

export default function RefundPage() {
  return (
    <PageShell
      eyebrow="Policy"
      title="Refund Policy"
      description="This policy explains when digital goods orders may be eligible for refund, replacement, or support review."
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
