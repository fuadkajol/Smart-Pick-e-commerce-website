import { useApp } from "../context/AppContext";

const orders = [
  { id: "SP198423", product: "ProSound TWS Earbuds X5", image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=100&h=100&fit=crop", status: "Delivered", date: "Sep 8, 2026", amount: 1890 },
  { id: "SP241056", product: "SmartWatch Pro GT Series 5", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=100&h=100&fit=crop", status: "Shipped", date: "Sep 12, 2026", amount: 3490 },
  { id: "SP307189", product: "BassBoom 360 BT Speaker", image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=100&h=100&fit=crop", status: "Processing", date: "Sep 14, 2026", amount: 2190 },
];

const statusColors: Record<string, string> = {
  Delivered: "bg-emerald-50 text-emerald-700",
  Shipped: "bg-blue-50 text-blue-700",
  Processing: "bg-amber-50 text-amber-700",
};

export default function MyOrders() {
  const { navigate } = useApp();
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate("account")} className="text-blue-600 hover:underline text-sm">← Back</button>
          <h1 className="font-heading font-black text-2xl text-slate-900">My Orders</h1>
        </div>

        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex gap-4 items-center">
              <img src={order.image} alt={order.product} className="w-16 h-16 rounded-xl object-cover bg-slate-50 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-slate-900 text-sm truncate">{order.product}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{order.id} · {order.date}</p>
                <span className={`inline-block mt-2 text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusColors[order.status]}`}>{order.status}</span>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-heading font-bold text-slate-900">৳{order.amount.toLocaleString()}</div>
                <button
                  onClick={() => navigate("track-order")}
                  className="text-xs text-blue-600 hover:underline mt-1 block"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
