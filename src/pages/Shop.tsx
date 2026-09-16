import { useState, useMemo } from "react";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";

const sortOptions = ["Relevance", "Price: Low to High", "Price: High to Low", "Newest", "Best Rating"];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("Relevance");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = selectedCategory ? products.filter(p => p.category === selectedCategory) : [...products];
    list = list.filter(p => p.price <= maxPrice);
    if (sortBy === "Price: Low to High") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "Price: High to Low") list.sort((a, b) => b.price - a.price);
    else if (sortBy === "Newest") list = list.filter(p => p.isNew).concat(list.filter(p => !p.isNew));
    else if (sortBy === "Best Rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [selectedCategory, sortBy, maxPrice]);

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-3xl sm:text-4xl text-white">Shop All Products</h1>
          <p className="text-slate-400 mt-2">Discover smart gadgets and accessories for modern life.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className={`${showFilters ? "fixed inset-0 z-50 bg-white overflow-y-auto p-6" : "hidden"} lg:block lg:static lg:z-auto lg:p-0 lg:bg-transparent w-64 flex-shrink-0`}>
            {showFilters && (
              <button onClick={() => setShowFilters(false)} className="lg:hidden mb-4 flex items-center gap-2 text-slate-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                Close Filters
              </button>
            )}

            <div className="space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">Categories</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${!selectedCategory ? "bg-blue-600 text-white font-medium" : "text-slate-600 hover:bg-slate-50"}`}
                  >
                    All Products <span className="float-right">{products.length}</span>
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between transition-colors ${selectedCategory === cat.name ? "bg-blue-600 text-white font-medium" : "text-slate-600 hover:bg-slate-50"}`}
                    >
                      <span>{cat.icon} {cat.name}</span>
                      <span>{products.filter(p => p.category === cat.name).length}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div>
                <h3 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">Max Price</h3>
                <input type="range" min={300} max={10000} step={100} value={maxPrice} onChange={e => setMaxPrice(+e.target.value)} className="w-full accent-blue-600" />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>৳300</span>
                  <span className="font-semibold text-blue-600">৳{maxPrice.toLocaleString()}</span>
                  <span>৳10,000</span>
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">Availability</h3>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded accent-blue-600" defaultChecked />
                  <span className="text-sm text-slate-600">In Stock Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 gap-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm text-slate-600 hover:bg-slate-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                  Filters
                </button>
                <span className="text-sm text-slate-500">{filtered.length} products</span>
              </div>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="px-4 py-2 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {sortOptions.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24 text-slate-400">
                <div className="text-5xl mb-4">🔍</div>
                <p className="font-semibold text-lg text-slate-700 mb-1">No products found</p>
                <p className="text-sm">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {filtered.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
