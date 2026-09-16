import { useApp } from "../context/AppContext";

const menuItems = [
  { icon: "📦", label: "My Orders", page: "my-orders" as const },
  { icon: "🤍", label: "Wishlist", page: "wishlist" as const },
  { icon: "📍", label: "Track Order", page: "track-order" as const },
  { icon: "🛡️", label: "Warranty", page: "warranty" as const },
  { icon: "↩️", label: "Return & Refund", page: "returns" as const },
  { icon: "❓", label: "FAQ", page: "faq" as const },
];

const sampleOrders = [
  { id: "SP198423", product: "ProSound TWS Earbuds X5", status: "Delivered", date: "Sep 8, 2026", amount: 1890 },
  { id: "SP241056", product: "SmartWatch Pro GT Series 5", status: "Shipped", date: "Sep 12, 2026", amount: 3490 },
  { id: "SP307189", product: "BassBoom 360 BT Speaker", status: "Processing", date: "Sep 14, 2026", amount: 2190 },
];

const statusColors: Record<string, string> = {
  Delivered: "bg-emerald-50 text-emerald-700",
  Shipped: "bg-blue-50 text-blue-700",
  Processing: "bg-amber-50 text-amber-700",
  Cancelled: "bg-red-50 text-red-700",
};

export default function Account() {
  const { navigate } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6 flex items-center gap-5">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 flex-shrink-0">R</div>
          <div>
            <h2 className="font-heading font-bold text-xl text-slate-900">Rakibul Islam</h2>
            <p className="text-slate-500 text-sm">rakib@example.com</p>
            <p className="text-slate-400 text-xs mt-0.5">Member since August 2025</p>
          </div>
          <button className="ml-auto text-sm text-blue-600 font-medium hover:underline">Edit Profile</button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Quick menu */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
            <h3 className="font-heading font-bold text-slate-900 text-sm mb-3 px-2">Quick Links</h3>
            <nav className="space-y-1">
              {menuItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => navigate(item.page)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 rounded-xl transition-colors text-left"
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                  <svg className="w-4 h-4 text-slate-300 ml-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              ))}
            </nav>
          </div>

          {/* Recent orders */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-heading font-bold text-slate-900">Recent Orders</h3>
              <button onClick={() => navigate("my-orders")} className="text-xs text-blue-600 font-medium hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {sampleOrders.map(order => (
                <div key={order.id} className="flex items-center gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900 text-sm truncate">{order.product}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{order.id} · {order.date}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[order.status]}`}>{order.status}</span>
                    <p className="font-semibold text-slate-900 text-sm mt-1">৳{order.amount.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
