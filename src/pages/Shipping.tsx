function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-heading font-bold text-xl text-slate-900 mb-3">{title}</h2>
      <div className="text-slate-600 text-sm leading-relaxed space-y-2">{children}</div>
    </section>
  );
}

export default function Shipping() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-heading font-black text-4xl text-white mb-3">Shipping & Delivery</h1>
          <p className="text-slate-400">Everything about how we get your order to you.</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14 space-y-10">
        <Section title="Delivery Areas">
          <p>Smart Pick delivers to all 64 districts of Bangladesh. We partner with reliable courier services to ensure your order reaches you safely and on time.</p>
        </Section>

        <Section title="Delivery Timeframes">
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
            <table className="w-full text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Delivery Type</th>
                  <th className="text-left px-5 py-3 font-semibold">Timeframe</th>
                  <th className="text-left px-5 py-3 font-semibold">Charge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-5 py-3">Standard (Inside Dhaka)</td><td className="px-5 py-3">1–3 business days</td><td className="px-5 py-3">৳60</td></tr>
                <tr><td className="px-5 py-3">Standard (Outside Dhaka)</td><td className="px-5 py-3">3–5 business days</td><td className="px-5 py-3">৳100</td></tr>
                <tr><td className="px-5 py-3">Express Delivery</td><td className="px-5 py-3">1–2 business days</td><td className="px-5 py-3">৳120</td></tr>
                <tr><td className="px-5 py-3">Free Delivery</td><td className="px-5 py-3">Standard timeframe</td><td className="px-5 py-3 text-emerald-600 font-medium">Free (orders ৳2,000+)</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Tracking Your Order">
          <p>Once your order is shipped, you will receive an SMS with your tracking details. You can also track your order anytime using the Track Order feature on our website.</p>
        </Section>

        <Section title="Important Notes">
          <ul className="list-disc list-inside space-y-1">
            <li>Delivery times may be longer during public holidays and special events.</li>
            <li>Smart Pick is not responsible for delays caused by courier partners.</li>
            <li>Ensure your address and phone number are correct at checkout.</li>
            <li>For bulk orders (10+ items), please contact us before ordering.</li>
          </ul>
        </Section>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <p className="text-blue-800 text-sm font-medium">📦 Questions about your delivery? WhatsApp us at <strong>01628481484</strong> or email <strong>hotline.smartpick@gmail.com</strong>.</p>
        </div>
      </div>
    </div>
  );
}
