import { useState } from "react";
import { useApp } from "../context/AppContext";
import { categories } from "../data/products";

const navLinks = [
  { label: "Home", page: "home" as const },
  { label: "Shop", page: "shop" as const },
  { label: "New Arrivals", page: "shop" as const },
  { label: "Best Sellers", page: "shop" as const },
  { label: "Deals", page: "shop" as const },
];

function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center focus:outline-none"
    >
      <img
        src="/smartpick.png"
        alt="Smart Pick"
        className="h-10 w-auto object-contain"
      />
    </button>
  );
}

export default function Header() {
  const { navigate, cartCount, wishlist, page, setSearchQuery, searchQuery, mobileMenuOpen, setMobileMenuOpen } = useApp();
  const [catOpen, setCatOpen] = useState(false);
  const [localQuery, setLocalQuery] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!localQuery.trim()) return;
    setSearchQuery(localQuery.trim());
    navigate("search", { query: localQuery.trim() });
  }

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 text-center tracking-wide">
        🚚 Nationwide Delivery &nbsp;•&nbsp; 💳 Cash on Delivery &nbsp;•&nbsp; ⚡ New Deals Every Week
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            {/* Logo */}
            <Logo onClick={() => navigate("home")} />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1 ml-6">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => navigate(link.page)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    page === link.page && link.label === "Home"
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              {/* Categories dropdown */}
              <div className="relative" onMouseLeave={() => setCatOpen(false)}>
                <button
                  onMouseEnter={() => setCatOpen(true)}
                  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg flex items-center gap-1"
                >
                  Categories
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {catOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-slate-100 rounded-xl shadow-xl w-56 py-2 z-50">
                    {categories.map(cat => (
                      <button
                        key={cat.name}
                        onClick={() => { navigate("category", { category: cat.name }); setCatOpen(false); }}
                        className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2"
                      >
                        <span className="text-base">{cat.icon}</span>
                        <span>{cat.name}</span>
                        <span className="ml-auto text-xs text-slate-400">{cat.count}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Search bar (desktop) */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <input
                  value={localQuery}
                  onChange={e => setLocalQuery(e.target.value)}
                  placeholder="Search gadgets, accessories..."
                  className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </form>

            {/* Right icons */}
            <div className="flex items-center gap-1 ml-auto">
              {/* Mobile search */}
              <button
                onClick={() => navigate("search")}
                className="md:hidden w-9 h-9 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Wishlist */}
              <button
                onClick={() => navigate("wishlist")}
                className="relative w-9 h-9 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">{wishlist.length}</span>
                )}
              </button>

              {/* Account */}
              <button
                onClick={() => navigate("account")}
                className="hidden sm:flex w-9 h-9 items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Cart */}
              <button
                onClick={() => navigate("cart")}
                className="relative flex items-center gap-2 pl-2 pr-3 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
              >
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm font-semibold">{cartCount}</span>
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-lg ml-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {mobileMenuOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1">
            <form onSubmit={handleSearch} className="mb-3">
              <div className="relative">
                <input
                  value={localQuery}
                  onChange={e => setLocalQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </form>
            {navLinks.map(link => (
              <button key={link.label} onClick={() => navigate(link.page)} className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg">{link.label}</button>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">Categories</p>
              <div className="grid grid-cols-2 gap-1 mt-1">
                {categories.map(cat => (
                  <button key={cat.name} onClick={() => navigate("category", { category: cat.name })} className="text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-1.5">
                    <span>{cat.icon}</span><span>{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
              <button onClick={() => navigate("account")} className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> My Account
              </button>
              <button onClick={() => navigate("track-order")} className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> Track Order
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-100 flex lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        {[
          { label: "Home", page: "home" as const, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
          { label: "Categories", page: "shop" as const, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /> },
          { label: "Search", page: "search" as const, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> },
          { label: "Wishlist", page: "wishlist" as const, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> },
          { label: "Cart", page: "cart" as const, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> },
        ].map(item => (
          <button
            key={item.label}
            onClick={() => navigate(item.page)}
            className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium transition-colors relative ${page === item.page ? "text-blue-600" : "text-slate-500"}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">{item.icon}</svg>
            {item.label}
            {item.label === "Cart" && cartCount > 0 && (
              <span className="absolute top-1.5 right-5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">{cartCount}</span>
            )}
          </button>
        ))}
      </nav>
    </>
  );
}
