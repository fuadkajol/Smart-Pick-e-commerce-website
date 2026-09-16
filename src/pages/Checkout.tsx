import { useState } from "react";
import { useApp } from "../context/AppContext";

const divisions = ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"];
const paymentMethods = [
  { id: "cod", label: "Cash on Delivery", icon: "💵", desc: "Pay when your order arrives" },
  { id: "bkash", label: "bKash", icon: "📱", desc: "Pay via bKash mobile banking" },
  { id: "nagad", label: "Nagad", icon: "📲", desc: "Pay via Nagad mobile banking" },
  { id: "card", label: "Card / Online", icon: "💳", desc: "Debit or credit card" },
];

export default function Checkout() {
  const { cartItems, cartTotal, navigate } = useApp();
  const [payment, setPayment] = useState("cod");
  const [delivery, setDelivery] = useState("standard");
  const delivery_cost = delivery === "express" ? 120 : cartTotal > 2000 ? 0 : 80;
  const total = cartTotal + delivery_cost;

  const [form, setForm] = useState({
    name: "", phone: "", email: "", division: "", district: "", thana: "", address: "", note: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate("order-confirmation");
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 pb-24 lg:pb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-black text-3xl text-slate-900 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Customer details */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="font-heading font-bold text-slate-900 text-lg mb-5">Customer Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <input required name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                    <input required name="phone" value={form.phone} onChange={handleChange} placeholder="01XXXXXXXXX" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="your@email.com" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </div>

              {/* Delivery address */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="font-heading font-bold text-slate-900 text-lg mb-5">Delivery Address</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Division *</label>
                    <select required name="division" value={form.division} onChange={handleChange} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                      <option value="">Select division</option>
                      {divisions.map(d => <option key={d}>{d}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">District *</label>
                    <input required name="district" value={form.district} onChange={handleChange} placeholder="e.g. Dhaka" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Upazila / Thana *</label>
                    <input required name="thana" value={form.thana} onChange={handleChange} placeholder="e.g. Mirpur" className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Address *</label>
                    <input required name="address" value={form.address} onChange={handleChange} placeholder="House, road, area..." className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Order Note <span className="text-slate-400 font-normal">(optional)</span></label>
                    <textarea name="note" value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} placeholder="Any special instructions..." rows={2} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                  </div>
                </div>
              </div>

              {/* Delivery method */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="font-heading font-bold text-slate-900 text-lg mb-5">Delivery Method</h2>
                <div className="space-y-3">
                  {[
                    { id: "standard", label: "Standard Delivery", desc: "2–5 business days", cost: cartTotal > 2000 ? "Free" : "৳80" },
                    { id: "express", label: "Express Delivery", desc: "1–2 business days", cost: "৳120" },
                  ].map(opt => (
                    <label key={opt.id} className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${delivery === opt.id ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-slate-300"}`}>
                      <input type="radio" name="delivery" value={opt.id} checked={delivery === opt.id} onChange={() => setDelivery(opt.id)} className="accent-blue-600" />
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 text-sm">{opt.label}</div>
                        <div className="text-xs text-slate-500">{opt.desc}</div>
                      </div>
                      <div className={`font-bold text-sm ${opt.cost === "Free" ? "text-emerald-600" : "text-slate-900"}`}>{opt.cost}</div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="font-heading font-bold text-slate-900 text-lg mb-5">Payment Method</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {paymentMethods.map(m => (
                    <label key={m.id} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${payment === m.id ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-slate-300"}`}>
                      <input type="radio" name="payment" value={m.id} checked={payment === m.id} onChange={() => setPayment(m.id)} className="accent-blue-600" />
                      <span className="text-xl">{m.icon}</span>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{m.label}</div>
                        <div className="text-xs text-slate-500">{m.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24">
                <h2 className="font-heading font-bold text-slate-900 text-lg mb-5">Order Summary</h2>
                <div className="space-y-3 mb-5 max-h-48 overflow-y-auto">
                  {cartItems.map(item => (
                    <div key={item.product.id} className="flex gap-3">
                      <img src={item.product.image} alt="" className="w-12 h-12 rounded-lg object-cover bg-slate-50 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-slate-900 line-clamp-1">{item.product.name}</p>
                        <p className="text-xs text-slate-400">× {item.quantity}</p>
                      </div>
                      <span className="text-xs font-semibold text-slate-900 whitespace-nowrap">৳{(item.product.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-slate-100 pt-4 space-y-2 text-sm mb-5">
                  <div className="flex justify-between text-slate-600"><span>Subtotal</span><span>৳{cartTotal.toLocaleString()}</span></div>
                  <div className="flex justify-between text-slate-600"><span>Delivery</span><span>{delivery_cost === 0 ? <span className="text-emerald-600">Free</span> : `৳${delivery_cost}`}</span></div>
                  <div className="flex justify-between font-heading font-bold text-slate-900 text-base border-t border-slate-100 pt-2">
                    <span>Total</span><span>৳{total.toLocaleString()}</span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors text-sm"
                >
                  Place Order →
                </button>
                <p className="text-center text-xs text-slate-400 mt-3">🔒 Secure checkout</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
