import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { products, categories, trendingProducts, flashSaleProducts, newArrivals, bestSellers } from "../data/products";
import ProductCard from "../components/ProductCard";

/* ── Countdown timer ── */
function useCountdown() {
  const getTime = () => {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 0);
    const diff = Math.max(0, end.getTime() - now.getTime());
    return {
      h: Math.floor(diff / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(getTime);
  useEffect(() => {
    const id = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Pad({ n }: { n: number }) {
  return (
    <div className="bg-slate-900 text-white rounded-lg w-12 h-12 flex items-center justify-center font-heading font-bold text-xl tabular-nums">
      {String(n).padStart(2, "0")}
    </div>
  );
}

/* ── Hero ── */
function HeroSection() {
  const { navigate } = useApp();
  const U = "https://images.unsplash.com/photo-";
  return (
    <section className="bg-white pt-12 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="py-8 lg:py-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              New deals every week
            </div>
            <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl text-slate-900 leading-[1.05] tracking-tight mb-6">
              Smart<br />
              Gadgets.<br />
              <span className="text-blue-600">Smarter</span><br />
              Everyday.
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md">
              Discover useful gadgets, accessories and smart products designed to make everyday life easier.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("shop")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-600/20 active:scale-95"
              >
                Shop Now
              </button>
              <button
                onClick={() => navigate("shop")}
                className="bg-white hover:bg-slate-50 text-slate-900 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 transition-colors active:scale-95"
              >
                Explore Categories
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-slate-100">
              {[["5000+", "Products"], ["98%", "Happy Customers"], ["64", "Districts Covered"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-heading font-bold text-2xl text-slate-900">{num}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Product collage */}
          <div className="relative hidden lg:flex items-end justify-center h-[580px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-white rounded-3xl" />

            {/* Large image */}
            <div className="absolute top-8 right-8 w-64 h-64 rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-100 z-10">
              <img src={`${U}1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&auto=format`} alt="Earbuds" className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 bg-white rounded-lg shadow px-3 py-1.5">
                <div className="font-heading font-bold text-slate-900 text-sm">ProSound X5</div>
                <div className="text-blue-600 font-semibold text-xs">৳1,890</div>
              </div>
            </div>

            {/* Smartwatch */}
            <div className="absolute top-0 left-4 w-44 h-44 rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-100 z-20">
              <img src={`${U}1579586337278-3befd40fd17a?w=300&h=300&fit=crop&auto=format`} alt="Smartwatch" className="w-full h-full object-cover" />
            </div>

            {/* Speaker */}
            <div className="absolute bottom-16 left-2 w-48 h-48 rounded-2xl overflow-hidden shadow-lg bg-slate-800 z-10">
              <img src={`${U}1589256469067-ea99122bbdc4?w=300&h=300&fit=crop&auto=format`} alt="Speaker" className="w-full h-full object-cover opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-3">
                <div className="text-white font-semibold text-xs">BassBoom 360</div>
                <div className="text-emerald-400 text-xs font-bold">-22% OFF</div>
              </div>
            </div>

            {/* Cable */}
            <div className="absolute bottom-8 right-4 w-36 h-36 rounded-2xl overflow-hidden shadow-md bg-white border border-slate-100">
              <img src={`${U}1756576357688-c637013d3483?w=200&h=200&fit=crop&auto=format`} alt="Cable" className="w-full h-full object-cover" />
            </div>

            {/* Floating badge */}
            <div className="absolute top-32 right-0 bg-white rounded-xl shadow-lg px-4 py-3 z-30 border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Cash on Delivery</div>
                  <div className="text-xs text-slate-400">Nationwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits strip */}
      <div className="mt-12 border-t border-b border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
            {[
              { icon: "🚚", title: "Fast Delivery", sub: "Across Bangladesh" },
              { icon: "🔒", title: "Secure Payment", sub: "Safe checkout" },
              { icon: "⭐", title: "Quality Products", sub: "Carefully selected" },
              { icon: "💬", title: "Customer Support", sub: "Always available" },
            ].map(b => (
              <div key={b.title} className="flex items-center gap-3 px-6 py-5">
                <span className="text-2xl">{b.icon}</span>
                <div>
                  <div className="font-heading font-semibold text-slate-900 text-sm">{b.title}</div>
                  <div className="text-xs text-slate-500">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Categories ── */
function CategoriesSection() {
  const { navigate } = useApp();
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 mb-2">Explore Our Categories</h2>
          <p className="text-slate-500">Shop by category and find exactly what you need.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => navigate("category", { category: cat.name })}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-100 hover:shadow-lg transition-all duration-200"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="text-white font-heading font-semibold text-sm leading-tight">{cat.name}</div>
                <div className="text-slate-300 text-xs mt-0.5">{cat.count} items</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Trending ── */
function TrendingSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 mb-1">Trending Now</h2>
            <p className="text-slate-500">Smart picks that everyone's talking about.</p>
          </div>
          <button onClick={() => {}} className="hidden sm:flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
            View All <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {trendingProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}

/* ── Flash Sale ── */
function FlashSaleSection() {
  const { navigate } = useApp();
  const { h, m, s } = useCountdown();
  const saleProducts = flashSaleProducts.slice(0, 4);

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">⚡</span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">Flash Sale</h2>
            </div>
            <p className="text-slate-400">Limited-time deals. Don't miss out.</p>
          </div>
          {/* Countdown */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-sm mr-1">Ends in</span>
            <Pad n={h} />
            <span className="text-white font-bold text-xl">:</span>
            <Pad n={m} />
            <span className="text-white font-bold text-xl">:</span>
            <Pad n={s} />
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {saleProducts.map(p => (
            <FlashCard key={p.id} product={p} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate("shop")}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Shop All Deals →
          </button>
        </div>
      </div>
    </section>
  );
}

function FlashCard({ product }: { product: typeof products[0] }) {
  const { navigate, addToCart } = useApp();
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden group">
      <div
        className="relative bg-slate-700 overflow-hidden cursor-pointer"
        style={{ paddingBottom: "100%" }}
        onClick={() => navigate("product", { product })}
      >
        <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">-{product.discount}%</span>
      </div>
      <div className="p-4">
        <h3
          className="font-heading font-semibold text-white text-sm leading-snug mb-2 cursor-pointer hover:text-blue-400 line-clamp-2"
          onClick={() => navigate("product", { product })}
        >
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="font-heading font-bold text-white text-base">৳{product.price.toLocaleString()}</span>
          <span className="text-slate-400 text-xs line-through">৳{product.originalPrice.toLocaleString()}</span>
        </div>
        {/* Progress bar */}
        <div className="mb-3">
          <div className="text-xs text-slate-400 mb-1">62% sold</div>
          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-red-500 rounded-full" style={{ width: "62%" }} />
          </div>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

/* ── New Arrivals ── */
function NewArrivalsSection() {
  const { navigate } = useApp();
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 mb-1">Fresh Picks, Just In</h2>
            <p className="text-slate-500">The latest additions to Smart Pick.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {newArrivals.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("shop")}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all text-sm"
          >
            View All New Arrivals
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ── Promo Banner ── */
function PromoBanner() {
  const { navigate } = useApp();
  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 min-h-[300px] flex items-center">
          <img
            src="https://images.unsplash.com/photo-1626218174358-7769486c4b79?w=1400&h=500&fit=crop&auto=format"
            alt="Upgrade Your Everyday"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 px-8 py-12 sm:px-16 max-w-xl">
            <div className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Limited Collection</div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mb-4 leading-tight">Upgrade Your<br />Everyday</h2>
            <p className="text-slate-300 text-base mb-8">Discover smart products made for modern living.</p>
            <button
              onClick={() => navigate("shop")}
              className="bg-white text-slate-900 hover:bg-blue-50 font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Explore Collection →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Best Sellers ── */
function BestSellersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 mb-2">Customer Favourites</h2>
          <p className="text-slate-500">Products our customers keep coming back for.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestSellers.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}

/* ── Why Smart Pick ── */
function WhySection() {
  const features = [
    { icon: "✅", title: "Quality Checked", desc: "We carefully select every product we carry for our customers." },
    { icon: "🚚", title: "Nationwide Delivery", desc: "We deliver across all 64 districts of Bangladesh." },
    { icon: "🔒", title: "Secure Shopping", desc: "Safe, reliable checkout with multiple payment options." },
    { icon: "💬", title: "Customer Support", desc: "Our support team is ready to help whenever you need us." },
  ];
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 mb-2">Why Shop With Smart Pick?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(f => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-heading font-semibold text-slate-900 text-base mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Track Order Widget ── */
function TrackOrderWidget() {
  const { navigate } = useApp();
  const [orderId, setOrderId] = useState("");
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-4xl mb-4">📦</div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 mb-2">Where's Your Order?</h2>
          <p className="text-slate-500 mb-8">Track your Smart Pick order anytime, anywhere.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              value={orderId}
              onChange={e => setOrderId(e.target.value)}
              placeholder="Enter your order number"
              className="flex-1 px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => navigate("track-order")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
            >
              Track Order →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Reviews ── */
function ReviewsSection() {
  const reviews = [
    { name: "Rakibul Islam", location: "Dhaka", rating: 5, text: "The earbuds are excellent. Clear sound, great noise cancellation, and the delivery was fast. Very happy with Smart Pick.", product: "ProSound TWS X5" },
    { name: "Nusrat Jahan", location: "Chittagong", rating: 5, text: "My smartwatch arrived well-packed and exactly as described. The quality is really good for the price. Highly recommend.", product: "SmartWatch Pro GT" },
    { name: "Tanvir Ahmed", location: "Sylhet", rating: 5, text: "Ordered a power bank and cable combo. Both arrived the next day. Cash on delivery was super convenient. Will order again!", product: "VoltMax Power Bank" },
    { name: "Fahmida Begum", location: "Rajshahi", rating: 4, text: "The LED strip is very easy to set up. App works well, colors are vivid. A little pricey but worth every taka.", product: "GlowStrip LED 5m" },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 mb-2">Loved by Our Customers</h2>
          <p className="text-slate-500">Real reviews from real Smart Pick shoppers.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map(r => (
            <div key={r.name} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }, (_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{r.name}</div>
                  <div className="text-xs text-slate-400">{r.location}</div>
                </div>
                <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full">✓ Verified</span>
              </div>
              <div className="mt-2 text-xs text-slate-400 border-t border-slate-100 pt-2">{r.product}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Newsletter ── */
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-3">Get the Smart Pick</h2>
        <p className="text-blue-100 mb-8">New arrivals, exclusive deals and special offers — straight to your inbox.</p>
        {sent ? (
          <div className="bg-white/20 text-white rounded-xl px-6 py-4 font-semibold">
            🎉 You're subscribed! Watch your inbox.
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              type="email"
              className="flex-1 px-4 py-3 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              onClick={() => email && setSent(true)}
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
            >
              Subscribe →
            </button>
          </div>
        )}
        <p className="text-blue-200 text-xs mt-4">No spam. Unsubscribe any time.</p>
      </div>
    </section>
  );
}

/* ── Home page ── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <TrendingSection />
      <FlashSaleSection />
      <NewArrivalsSection />
      <PromoBanner />
      <BestSellersSection />
      <WhySection />
      <TrackOrderWidget />
      <ReviewsSection />
      <NewsletterSection />
    </>
  );
}
