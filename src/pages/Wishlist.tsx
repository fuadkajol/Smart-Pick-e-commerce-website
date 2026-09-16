import { useApp } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const { wishlist, navigate } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-black text-3xl text-slate-900 mb-2">My Wishlist</h1>
        <p className="text-slate-500 mb-8">{wishlist.length} saved items</p>

        {wishlist.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-6">🤍</div>
            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">Your wishlist is empty</h2>
            <p className="text-slate-500 mb-8">Save items you love while browsing.</p>
            <button
              onClick={() => navigate("shop")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Start Browsing
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {wishlist.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
