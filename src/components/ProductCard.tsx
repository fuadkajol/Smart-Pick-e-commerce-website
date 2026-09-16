import { Product } from "../data/products";
import { useApp } from "../context/AppContext";

interface Props {
  product: Product;
  compact?: boolean;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? "text-amber-400" : "text-slate-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export { Stars };

export default function ProductCard({ product, compact = false }: Props) {
  const { navigate, addToCart, toggleWishlist, isInWishlist } = useApp();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="group relative bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <div
        className="relative bg-slate-50 overflow-hidden cursor-pointer"
        style={{ paddingBottom: "100%" }}
        onClick={() => navigate("product", { product })}
      >
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-md
            ${product.badge === "Best Seller" ? "bg-blue-600 text-white" :
              product.badge === "Hot Deal" || product.badge === "Featured" ? "bg-amber-500 text-white" :
              product.badge === "New" ? "bg-emerald-500 text-white" :
              "bg-slate-700 text-white"}`}>
            {product.badge}
          </span>
        )}
        {/* Discount */}
        {product.discount > 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            -{product.discount}%
          </span>
        )}
        {/* Wishlist button */}
        <button
          onClick={e => { e.stopPropagation(); toggleWishlist(product); }}
          className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-slate-50"
        >
          <svg className={`w-4 h-4 ${inWishlist ? "text-red-500 fill-current" : "text-slate-500"}`} fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Info */}
      <div className={`p-4 ${compact ? "p-3" : ""}`}>
        <p className="text-xs text-slate-400 mb-1">{product.category}</p>
        <h3
          className="font-heading font-semibold text-slate-900 text-sm leading-snug mb-2 cursor-pointer hover:text-blue-600 transition-colors line-clamp-2"
          onClick={() => navigate("product", { product })}
        >
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 mb-3">
          <Stars rating={product.rating} />
          <span className="text-xs text-slate-400">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="font-heading font-bold text-slate-900 text-base">৳{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-slate-400 line-through">৳{product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors duration-150 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
