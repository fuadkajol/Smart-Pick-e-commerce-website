import { useState } from "react";

const steps = [
  { id: "placed", label: "Order Placed", icon: "📋", desc: "Your order has been received." },
  { id: "confirmed", label: "Confirmed", icon: "✅", desc: "Payment confirmed and order is ready." },
  { id: "processing", label: "Processing", icon: "⚙️", desc: "Your items are being packed." },
  { id: "shipped", label: "Shipped", icon: "🚚", desc: "Order picked up by courier." },
  { id: "out", label: "Out for Delivery", icon: "📍", desc: "Your order is out for delivery." },
  { id: "delivered", label: "Delivered", icon: "🎉", desc: "Order delivered successfully." },
];

const sampleOrders: Record<string, { step: number; name: string; date: string; eta: string }> = {
  "SP123456": { step: 3, name: "ProSound TWS Earbuds X5", date: "Sep 12, 2026", eta: "Sep 16, 2026" },
  "SP654321": { step: 5, name: "SmartWatch Pro GT Series 5", date: "Sep 10, 2026", eta: "Sep 14, 2026" },
};

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [result, setResult] = useState<typeof sampleOrders[string] | null | "not-found">(null);

  function handleTrack() {
    if (!orderId.trim()) return;
    const found = sampleOrders[orderId.trim().toUpperCase()];
    setResult(found || "not-found");
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="text-4xl mb-4">📦</div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 mb-3">Where's Your Order?</h1>
          <p className="text-slate-500">Track your Smart Pick order anytime.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
          <div className="flex gap-3">
            <input
              value={orderId}
              onChange={e => setOrderId(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleTrack()}
              placeholder="Enter your order number (e.g. SP123456)"
              className="flex-1 px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleTrack}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
            >
              Track →
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-3">Try: SP123456 or SP654321 for demo.</p>
        </div>

        {result === "not-found" && (
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">😕</div>
            <h3 className="font-heading font-bold text-red-800 mb-1">Order not found</h3>
            <p className="text-red-600 text-sm">Please check your order number and try again.</p>
          </div>
        )}

        {result && result !== "not-found" && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="flex justify-between items-start mb-6 pb-6 border-b border-slate-100">
              <div>
                <p className="text-xs text-slate-500 mb-1">Order ID</p>
                <p className="font-semibold text-slate-900">{orderId.toUpperCase()}</p>
                <p className="text-xs text-slate-500 mt-3 mb-1">Product</p>
                <p className="font-medium text-slate-900 text-sm">{result.name}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500 mb-1">Order Date</p>
                <p className="font-semibold text-slate-900 text-sm">{result.date}</p>
                <p className="text-xs text-slate-500 mt-3 mb-1">Est. Delivery</p>
                <p className="font-semibold text-blue-600 text-sm">{result.eta}</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {steps.map((step, i) => {
                const isCompleted = i < result.step;
                const isCurrent = i === result.step;
                const isPending = i > result.step;
                return (
                  <div key={step.id} className="flex gap-4">
                    {/* Connector */}
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 border-2 transition-colors
                        ${isCompleted ? "bg-blue-600 border-blue-600" :
                          isCurrent ? "bg-white border-blue-600 shadow-md shadow-blue-200" :
                          "bg-white border-slate-200"}`}>
                        {isCompleted ? (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        ) : (
                          <span className={isPending ? "opacity-30" : ""}>{step.icon}</span>
                        )}
                      </div>
                      {i < steps.length - 1 && (
                        <div className={`w-0.5 h-8 my-1 ${isCompleted ? "bg-blue-600" : "bg-slate-200"}`} />
                      )}
                    </div>
                    {/* Content */}
                    <div className={`pb-6 flex-1 ${isPending ? "opacity-40" : ""}`}>
                      <div className={`font-heading font-semibold text-sm ${isCurrent ? "text-blue-600" : isCompleted ? "text-slate-900" : "text-slate-500"}`}>
                        {step.label}
                        {isCurrent && <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">Current</span>}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{step.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
