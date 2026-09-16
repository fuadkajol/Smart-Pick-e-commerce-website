import { useApp } from "../context/AppContext";

export default function OrderConfirmation() {
  const { navigate } = useApp();
  const orderId = "SP" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-16">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-heading font-black text-3xl text-slate-900 mb-3">Order Placed!</h1>
        <p className="text-slate-500 mb-2">Thank you for shopping with Smart Pick.</p>
        <p className="text-slate-500 mb-6">Your order has been confirmed and will be delivered soon.</p>

        <div className="bg-slate-50 rounded-2xl p-6 mb-8 text-left">
          <div className="flex justify-between mb-3">
            <span className="text-sm text-slate-500">Order ID</span>
            <span className="font-semibold text-slate-900 text-sm">{orderId}</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-sm text-slate-500">Status</span>
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">Confirmed</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-sm text-slate-500">Estimated Delivery</span>
            <span className="font-semibold text-slate-900 text-sm">2–5 Business Days</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-slate-500">Payment</span>
            <span className="font-semibold text-slate-900 text-sm">Cash on Delivery</span>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-8 text-sm text-blue-700">
          📦 We'll notify you via SMS when your order is shipped. For any queries, WhatsApp us at <strong>01628481484</strong>.
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("track-order")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-colors"
          >
            Track Your Order
          </button>
          <button
            onClick={() => navigate("shop")}
            className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 font-semibold py-3.5 rounded-xl transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
