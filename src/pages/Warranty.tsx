export default function Warranty() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-heading font-black text-4xl text-white mb-3">Warranty Policy</h1>
          <p className="text-slate-400">We stand behind the products we sell.</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14 space-y-8">
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[["3 months", "Cables & Accessories"], ["6 months", "Most Gadgets"], ["12 months", "Premium Products"]].map(([period, label]) => (
            <div key={label} className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <div className="font-heading font-black text-2xl text-blue-700 mb-1">{period}</div>
              <div className="text-sm text-blue-600">{label}</div>
            </div>
          ))}
        </div>

        <section>
          <h2 className="font-heading font-bold text-xl text-slate-900 mb-3">What's Covered</h2>
          <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside">
            <li>Manufacturing defects discovered during normal use</li>
            <li>Internal component failures not caused by physical damage</li>
            <li>Products that stop working under normal conditions</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-slate-900 mb-3">What's Not Covered</h2>
          <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside">
            <li>Physical damage, water damage, or accidental damage</li>
            <li>Damage from improper use, misuse, or modification</li>
            <li>Normal wear and tear (scratches, fading, etc.)</li>
            <li>Products without original packaging or proof of purchase</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-slate-900 mb-3">How to Claim Warranty</h2>
          <p className="text-slate-600 text-sm mb-3">To make a warranty claim, contact us with:</p>
          <ul className="text-slate-600 text-sm space-y-1 list-disc list-inside">
            <li>Your order ID</li>
            <li>Clear photos/video of the issue</li>
            <li>A brief description of the problem</li>
          </ul>
          <p className="text-slate-600 text-sm mt-3">We'll assess the claim and respond within 2 business days.</p>
        </section>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-600">
          🛡️ Warranty claims: WhatsApp <strong>01628481484</strong> or email <strong>hotline.smartpick@gmail.com</strong>
        </div>
      </div>
    </div>
  );
}
