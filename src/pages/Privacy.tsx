function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-heading font-bold text-lg text-slate-900 mb-3">{title}</h2>
      <div className="text-slate-600 text-sm leading-relaxed space-y-2">{children}</div>
    </section>
  );
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-heading font-black text-4xl text-white mb-3">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: September 2026</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14 space-y-8">
        <Section title="Information We Collect">
          <p>When you place an order or create an account, we collect your name, phone number, email address, and delivery address. We also collect information about your orders and browsing behaviour on our website.</p>
        </Section>

        <Section title="How We Use Your Information">
          <ul className="list-disc list-inside space-y-1">
            <li>To process and deliver your orders</li>
            <li>To send order confirmations and delivery updates</li>
            <li>To provide customer support</li>
            <li>To send promotional offers (with your consent)</li>
            <li>To improve our website and services</li>
          </ul>
        </Section>

        <Section title="Information Sharing">
          <p>We do not sell or share your personal information with third parties, except with courier partners who require your address and phone number to deliver your order.</p>
        </Section>

        <Section title="Data Security">
          <p>We take reasonable measures to protect your personal data from unauthorised access, disclosure, or loss. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
        </Section>

        <Section title="Your Rights">
          <p>You may request access to, correction of, or deletion of your personal data by contacting us at hotline.smartpick@gmail.com. We will respond within 7 business days.</p>
        </Section>

        <Section title="Cookies">
          <p>Our website uses cookies to enhance your browsing experience. You may disable cookies in your browser settings, but this may affect website functionality.</p>
        </Section>

        <Section title="Contact">
          <p>For any privacy concerns, email us at <strong>hotline.smartpick@gmail.com</strong> or WhatsApp us at <strong>01628481484</strong>.</p>
        </Section>
      </div>
    </div>
  );
}
