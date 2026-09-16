function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-heading font-bold text-xl text-slate-900 mb-3">{title}</h2>
      <div className="text-slate-600 text-sm leading-relaxed space-y-2">{children}</div>
    </section>
  );
}

export default function Returns() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-heading font-black text-4xl text-white mb-3">Return & Refund Policy</h1>
          <p className="text-slate-400">Your satisfaction is our priority.</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14 space-y-10">
        <Section title="Return Window">
          <p>Smart Pick offers a <strong>7-day return policy</strong> from the date of delivery for products that are defective, damaged, or incorrectly shipped.</p>
        </Section>

        <Section title="Eligible for Return">
          <ul className="list-disc list-inside space-y-1">
            <li>Product received is different from what was ordered</li>
            <li>Product is defective or not functioning on arrival</li>
            <li>Product is physically damaged upon delivery</li>
            <li>Missing items from the box</li>
          </ul>
        </Section>

        <Section title="Not Eligible for Return">
          <ul className="list-disc list-inside space-y-1">
            <li>Products returned after 7 days of delivery</li>
            <li>Items that are used, damaged by the customer, or missing original packaging</li>
            <li>Products with broken seals (unless defective)</li>
            <li>Change of mind or incorrect product selection by the customer</li>
          </ul>
        </Section>

        <Section title="How to Request a Return">
          <p>Contact us within 7 days of delivery via:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>WhatsApp: 01628481484</li>
            <li>Email: hotline.smartpick@gmail.com</li>
            <li>Facebook: Smartpickk</li>
          </ul>
          <p className="mt-2">Provide your order ID, a brief description of the issue, and clear photos of the product.</p>
        </Section>

        <Section title="Refund Process">
          <p>Once we approve your return, refunds are processed within <strong>5–7 business days</strong> via bKash, Nagad, or bank transfer. For COD orders, refunds are made via mobile banking.</p>
        </Section>

        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
          <p className="text-amber-800 text-sm font-medium">⚠️ Please do not send products back without prior approval from our team. Unauthorised returns will not be accepted.</p>
        </div>
      </div>
    </div>
  );
}
