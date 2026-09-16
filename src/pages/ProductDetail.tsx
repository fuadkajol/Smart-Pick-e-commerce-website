import { useState } from "react";
import { useApp } from "../context/AppContext";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Stars } from "../components/ProductCard";

export default function ProductDetail() {
  const { navParams, navigate, addToCart, toggleWishlist, isInWishlist } = useApp();
  const product = navParams.product || products[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"description" | "specs" | "reviews">("description");

  const inWishlist = isInWishlist(product.id);
  const allImages = product.images.length > 0 ? product.images : [product.image];
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <button onClick={() => navigate("home")} className="hover:text-blue-600">Home</button>
            <span>/</span>
            <button onClick={() => navigate("category", { category: product.category })} className="hover:text-blue-600">{product.category}</button>
            <span>/</span>
            <span className="text-slate-900 font-medium truncate max-w-xs">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div>
            <div className="relative bg-slate-50 rounded-2xl overflow-hidden aspect-square mb-4">
              <img src={allImages[selectedImage]} alt={product.name} className="w-full h-full object-contain p-8" />
              {product.discount > 0 && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-lg">-{product.discount}%</span>
              )}
              {product.badge && (
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-lg">{product.badge}</span>
              )}
            </div>
            {allImages.length > 1 && (
              <div className="flex gap-3">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors flex-shrink-0 ${selectedImage === i ? "border-blue-600" : "border-slate-200"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">{product.category}</p>
            <h1 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mb-3 leading-tight">{product.name}</h1>

            <div className="flex items-center gap-3 mb-4">
              <Stars rating={product.rating} />
              <span className="text-sm text-slate-500">{product.rating} ({product.reviews} reviews)</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${product.inStock ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-heading font-black text-3xl text-slate-900">৳{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-slate-400 text-lg line-through">৳{product.originalPrice.toLocaleString()}</span>
                  <span className="bg-red-50 text-red-600 text-sm font-bold px-2 py-0.5 rounded-md">Save ৳{(product.originalPrice - product.price).toLocaleString()}</span>
                </>
              )}
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">{product.description}</p>

            {/* Key features */}
            <div className="mb-6">
              <h3 className="font-heading font-semibold text-slate-900 text-sm mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.slice(0, 4).map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery & warranty */}
            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-3 flex-1">
                <span className="text-xl">🚚</span>
                <div>
                  <div className="text-xs font-semibold text-slate-900">Delivery</div>
                  <div className="text-xs text-slate-500">{product.delivery}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-3 flex-1">
                <span className="text-xl">🛡️</span>
                <div>
                  <div className="text-xs font-semibold text-slate-900">Warranty</div>
                  <div className="text-xs text-slate-500">{product.warranty}</div>
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold text-slate-700">Quantity</span>
              <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-lg">−</button>
                <span className="w-12 text-center font-semibold text-slate-900 text-sm">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-lg">+</button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => addToCart(product, qty)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-colors active:scale-95"
              >
                Add to Cart
              </button>
              <button
                onClick={() => { addToCart(product, qty); navigate("checkout"); }}
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 rounded-xl transition-colors"
              >
                Buy Now
              </button>
            </div>
            <button
              onClick={() => toggleWishlist(product)}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-medium transition-colors ${inWishlist ? "bg-red-50 border-red-200 text-red-600" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}
            >
              <svg className={`w-4 h-4 ${inWishlist ? "fill-current" : ""}`} fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {inWishlist ? "Saved to Wishlist" : "Save to Wishlist"}
            </button>

            {/* Whats in box */}
            {product.whatsIn && product.whatsIn.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="font-heading font-semibold text-slate-900 text-sm mb-3">What's in the Box</h3>
                <div className="flex flex-wrap gap-2">
                  {product.whatsIn.map(item => (
                    <span key={item} className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg">{item}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex border-b border-slate-200 gap-6">
            {(["description", "specs", "reviews"] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-3 text-sm font-semibold capitalize transition-colors border-b-2 -mb-px ${tab === t ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-700"}`}
              >
                {t === "description" ? "Description" : t === "specs" ? "Specifications" : "Reviews"}
              </button>
            ))}
          </div>

          <div className="py-8">
            {tab === "description" && (
              <div className="prose max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">{product.description}</p>
                <h4 className="font-heading font-bold text-slate-900 mb-3">All Features</h4>
                <ul className="space-y-2">
                  {product.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-slate-600 text-sm">
                      <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tab === "specs" && (
              <div className="max-w-lg">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(product.specs).map(([key, val]) => (
                      <tr key={key} className="border-b border-slate-100">
                        <td className="py-3 pr-8 font-semibold text-slate-700 w-40">{key}</td>
                        <td className="py-3 text-slate-600">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {tab === "reviews" && (
              <div className="space-y-4 max-w-2xl">
                {[
                  { name: "Rahim Uddin", rating: 5, text: "Absolutely love it! Great quality and fast delivery. Will order again.", date: "Sep 10, 2026" },
                  { name: "Fatima K.", rating: 4, text: "Good product, well packed. Exactly as described. Shipping was 3 days.", date: "Sep 5, 2026" },
                  { name: "Imran H.", rating: 5, text: "Best purchase I've made in a while. Really happy with Smart Pick.", date: "Aug 29, 2026" },
                ].map(r => (
                  <div key={r.name} className="bg-slate-50 rounded-xl p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{r.name}</div>
                        <div className="text-xs text-slate-400">{r.date}</div>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">{r.text}</p>
                    <span className="inline-block mt-2 text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">✓ Verified Purchase</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-8">
            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
