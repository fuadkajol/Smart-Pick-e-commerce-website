import { useApp } from "../context/AppContext";

export default function About() {
  const { navigate } = useApp();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-white mb-4">About Smart Pick</h1>
          <p className="text-slate-400 text-lg leading-relaxed">Smart gadgets & everyday essentials, picked for modern living.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        {/* Story */}
        <section>
          <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">Our Story</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Smart Pick was founded with a simple belief — that useful, high-quality technology should be accessible to everyone in Bangladesh. We started as a small team of tech enthusiasts who were tired of overpriced gadgets and unreliable service.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Today, Smart Pick is one of Bangladesh's fastest-growing online gadget stores, delivering to all 64 districts with a commitment to quality, honesty, and genuine customer care.
          </p>
        </section>

        {/* Values */}
        <section>
          <h2 className="font-heading font-bold text-2xl text-slate-900 mb-6">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: "✅", title: "Genuine Products", desc: "Every item we sell is tested and verified for quality before reaching your hands." },
              { icon: "🚚", title: "Nationwide Reach", desc: "We proudly deliver to all 64 districts of Bangladesh — no one left behind." },
              { icon: "💬", title: "Real Support", desc: "Our customer team responds promptly via WhatsApp, email, and social media." },
              { icon: "💰", title: "Honest Pricing", desc: "No hidden fees, no inflated prices. What you see is what you pay." },
            ].map(v => (
              <div key={v.title} className="bg-slate-50 rounded-2xl p-5">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-heading font-semibold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 rounded-3xl p-10 text-center">
          <h2 className="font-heading font-bold text-2xl text-white mb-3">Ready to Shop Smart?</h2>
          <p className="text-blue-100 mb-6">Discover our full range of gadgets and accessories.</p>
          <button onClick={() => navigate("shop")} className="bg-white text-blue-600 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
            Browse Products
          </button>
        </section>
      </div>
    </div>
  );
}
