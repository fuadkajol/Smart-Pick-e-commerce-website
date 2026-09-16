import { useState } from "react";

const faqs = [
  { q: "How do I place an order?", a: "Browse products, add items to cart, then proceed to checkout. Fill in your delivery details and choose a payment method. Your order will be confirmed immediately." },
  { q: "What payment methods do you accept?", a: "We accept Cash on Delivery (COD), bKash, Nagad, and card/online payment. COD is available nationwide." },
  { q: "How long does delivery take?", a: "Standard delivery takes 2–5 business days. Express delivery is available in 1–2 business days for select areas." },
  { q: "Do you deliver across all of Bangladesh?", a: "Yes! Smart Pick delivers to all 64 districts of Bangladesh. Delivery charges may vary by location." },
  { q: "What is your return policy?", a: "We offer a 7-day return policy for defective or incorrect products. Items must be unused and in original packaging." },
  { q: "How do I track my order?", a: "After placing your order, use the Track Order feature on our website with your order ID. You'll also receive SMS updates." },
  { q: "Are the products genuine and quality-checked?", a: "Absolutely. Every product we carry is verified for authenticity and quality before being listed on our platform." },
  { q: "Can I cancel my order after placing it?", a: "Orders can be cancelled before they are shipped. Please contact us via WhatsApp (01628481484) immediately after placing." },
  { q: "Does Smart Pick offer warranty?", a: "Yes. Most products come with 3 to 12 months warranty. Specific warranty details are listed on each product page." },
  { q: "How do I contact customer support?", a: "Reach us via WhatsApp at 01628481484, email at hotline.smartpick@gmail.com, or message us on Facebook (Smartpickk)." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-heading font-black text-4xl text-white mb-3">Frequently Asked Questions</h1>
          <p className="text-slate-400">Everything you need to know about Smart Pick.</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-heading font-semibold text-slate-900 text-sm pr-4">{faq.q}</span>
                <svg className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="font-heading font-bold text-slate-900 text-xl mb-2">Still have questions?</h3>
          <p className="text-slate-500 text-sm mb-5">Our team is ready to help via WhatsApp or email.</p>
          <a href="https://wa.me/8801628481484" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
