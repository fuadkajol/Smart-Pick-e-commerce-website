import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-heading font-black text-4xl text-white mb-3">Contact Us</h1>
          <p className="text-slate-400">We're always happy to hear from you.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="font-heading font-bold text-xl text-slate-900 mb-6">Get in Touch</h2>
            <div className="space-y-5">
              {[
                { icon: "📧", title: "Email", value: "hotline.smartpick@gmail.com", href: "mailto:hotline.smartpick@gmail.com" },
                { icon: "💬", title: "WhatsApp", value: "01628481484", href: "https://wa.me/8801628481484" },
                { icon: "📘", title: "Facebook", value: "Smartpickk", href: "https://facebook.com/Smartpickk" },
                { icon: "📌", title: "Pinterest", value: "@hotline.smartpick", href: "https://pinterest.com/hotline.smartpick" },
              ].map(c => (
                <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-xl group-hover:bg-blue-100 transition-colors flex-shrink-0">{c.icon}</div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{c.title}</div>
                    <div className="text-slate-900 font-medium text-sm group-hover:text-blue-600 transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <h3 className="font-heading font-semibold text-amber-900 mb-1">Support Hours</h3>
              <p className="text-amber-700 text-sm">Saturday – Thursday: 9:00 AM – 9:00 PM</p>
              <p className="text-amber-700 text-sm">Friday: 2:00 PM – 9:00 PM</p>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Name *</label>
                    <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Full name" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="your@email.com" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Subject *</label>
                  <input required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} placeholder="How can we help?" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Write your message here..." className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-colors">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
