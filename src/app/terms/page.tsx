import { PageShell } from "@/components/page-shell";
import { site } from "@/lib/site";

const sections = [
  {
    title: "Digital goods marketplace",
    body: "Nverly sells or facilitates supported digital goods such as gift cards, gaming gift cards, prepaid reward cards, mobile airtime top-ups, mobile data bundles, vouchers, and payout links. Product availability may vary by region, supplier, provider catalog, and operational status.",
  },
  {
    title: "Electronic delivery",
    body: "Digital products are usually delivered electronically by email, account top-up, customer account, or another digital delivery method shown during purchase. Delivery times may vary when manual review, supplier processing, or payment verification is required.",
  },
  {
    title: "Customer details",
    body: "Customers are responsible for entering correct account, email, region, product, and recipient details. Incorrect information can delay fulfillment or make a product unusable, and may limit refund eligibility.",
  },
  {
    title: "Order verification",
    body: "Some orders may require manual verification before fulfillment. Nverly may request additional information, delay delivery, cancel an order, or refund a payment when an order cannot be verified or appears suspicious.",
  },
  {
    title: "Third-party brands",
    body: "Brand names, product names, logos, and trademarks belong to their respective owners. Nverly is not affiliated with or endorsed by third-party brands unless explicitly stated in writing.",
  },
  {
    title: "Support",
    body: `Questions about these terms can be sent to ${site.email}.`,
  },
];

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Service"
      description="These terms describe how Nverly presents, processes, and supports digital goods orders."
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
