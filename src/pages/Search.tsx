import { useState, useMemo } from "react";
import { useApp } from "../context/AppContext";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Search() {
  const { navParams } = useApp();
  const [query, setQuery] = useState(navParams.query || "");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-8">
          <h1 className="font-heading font-black text-3xl text-slate-900 mb-4">Search Products</h1>
          <div className="relative">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search gadgets, accessories..."
              className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
              autoFocus
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {query.trim() === "" ? (
          <div className="text-center py-16 text-slate-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-semibold text-lg text-slate-700 mb-1">Search Smart Pick</p>
            <p className="text-sm">Type a product name or category to get started.</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">😕</div>
            <p className="font-semibold text-lg text-slate-700 mb-1">No results for "{query}"</p>
            <p className="text-sm text-slate-400">Try a different keyword.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-slate-500 mb-6">{results.length} results for "<strong className="text-slate-900">{query}</strong>"</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {results.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
