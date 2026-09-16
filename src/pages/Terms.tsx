function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-heading font-bold text-lg text-slate-900 mb-3">{title}</h2>
      <div className="text-slate-600 text-sm leading-relaxed space-y-2">{children}</div>
    </section>
  );
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-heading font-black text-4xl text-white mb-3">Terms & Conditions</h1>
          <p className="text-slate-400">Last updated: September 2026</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14 space-y-8">
        <Section title="Acceptance of Terms">
          <p>By accessing or using the Smart Pick website (smartpick.com), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.</p>
        </Section>

        <Section title="Product Information">
          <p>We make every effort to display products accurately, including images, descriptions, and pricing. However, we do not warrant that product descriptions or other content is complete, accurate, or error-free.</p>
        </Section>

        <Section title="Pricing & Payment">
          <p>All prices are displayed in Bangladeshi Taka (BDT). Smart Pick reserves the right to change prices at any time without notice. We accept Cash on Delivery, bKash, Nagad, and card payments.</p>
        </Section>

        <Section title="Order Cancellation">
          <p>Orders may be cancelled before they are shipped. Once shipped, the order cannot be cancelled but may be eligible for return under our Return Policy. Smart Pick reserves the right to cancel any order at its discretion.</p>
        </Section>

        <Section title="Intellectual Property">
          <p>All content on this website — including text, graphics, logos, and images — is the property of Smart Pick and is protected by applicable copyright laws. You may not reproduce or distribute any content without written permission.</p>
        </Section>

        <Section title="Limitation of Liability">
          <p>Smart Pick shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or products. Our liability is limited to the original purchase price of the product in question.</p>
        </Section>

        <Section title="Governing Law">
          <p>These terms are governed by the laws of Bangladesh. Any disputes arising from these terms or your use of Smart Pick's services shall be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh.</p>
        </Section>

        <Section title="Changes to Terms">
          <p>Smart Pick may update these Terms & Conditions at any time. Continued use of the website after changes constitutes acceptance of the new terms.</p>
        </Section>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-600">
          Questions? Contact us at <strong>hotline.smartpick@gmail.com</strong> or WhatsApp <strong>01628481484</strong>.
        </div>
      </div>
    </div>
  );
}
