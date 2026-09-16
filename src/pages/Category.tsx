import { useState, useMemo } from "react";
import { useApp } from "../context/AppContext";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Category() {
  const { navParams, navigate } = useApp();
  const selectedCat = navParams.category || categories[0].name;
  const [sortBy, setSortBy] = useState("Relevance");

  const filtered = useMemo(() => {
    let list = products.filter(p => p.category === selectedCat);
    if (sortBy === "Price: Low to High") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "Price: High to Low") list.sort((a, b) => b.price - a.price);
    else if (sortBy === "Best Rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [selectedCat, sortBy]);

  const cat = categories.find(c => c.name === selectedCat);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-slate-900 py-14 overflow-hidden">
        {cat && (
          <img src={cat.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <button onClick={() => navigate("home")} className="hover:text-white">Home</button>
            <span>/</span>
            <span className="text-white">{selectedCat}</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{cat?.icon}</span>
            <div>
              <h1 className="font-heading font-black text-3xl sm:text-4xl text-white">{selectedCat}</h1>
              <p className="text-slate-400 mt-1">{filtered.length} products available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories strip */}
      <div className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
            {categories.map(c => (
              <button
                key={c.name}
                onClick={() => navigate("category", { category: c.name })}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${c.name === selectedCat ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                {c.icon} {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-slate-500">{filtered.length} products</span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {["Relevance", "Price: Low to High", "Price: High to Low", "Best Rating"].map(o => <option key={o}>{o}</option>)}
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <div className="text-5xl mb-4">📭</div>
            <p className="font-semibold text-slate-700 text-lg">No products in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
