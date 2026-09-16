import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, navigate } = useApp();
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const delivery = cartTotal > 2000 ? 0 : 80;
  const discount = couponApplied ? Math.floor(cartTotal * 0.1) : 0;
  const total = cartTotal - discount + delivery;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center py-24">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="font-heading font-bold text-2xl text-slate-900 mb-3">Your cart is empty</h2>
          <p className="text-slate-500 mb-8">Add some smart picks to get started!</p>
          <button onClick={() => navigate("shop")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors">
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-black text-3xl text-slate-900 mb-8">Shopping Cart <span className="text-slate-400 font-normal text-xl">({cartItems.length} items)</span></h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.product.id} className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm flex gap-4">
                <div
                  className="w-24 h-24 rounded-xl overflow-hidden bg-slate-50 flex-shrink-0 cursor-pointer"
                  onClick={() => navigate("product", { product: item.product })}
                >
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-heading font-semibold text-slate-900 text-sm sm:text-base leading-snug mb-1 cursor-pointer hover:text-blue-600 truncate"
                    onClick={() => navigate("product", { product: item.product })}
                  >
                    {item.product.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-3">{item.product.category}</p>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-9 h-9 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-lg">−</button>
                      <span className="w-10 text-center font-semibold text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-9 h-9 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-lg">+</button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-heading font-bold text-slate-900">৳{(item.product.price * item.quantity).toLocaleString()}</span>
                      <button onClick={() => removeFromCart(item.product.id)} className="text-slate-400 hover:text-red-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue shopping */}
            <button
              onClick={() => navigate("shop")}
              className="flex items-center gap-2 text-blue-600 font-medium text-sm hover:gap-3 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Continue Shopping
            </button>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24">
              <h2 className="font-heading font-bold text-slate-900 text-lg mb-5">Order Summary</h2>

              {/* Coupon */}
              <div className="mb-5">
                <div className="flex gap-2">
                  <input
                    value={coupon}
                    onChange={e => setCoupon(e.target.value)}
                    placeholder="Coupon code"
                    className="flex-1 px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => coupon.length > 0 && setCouponApplied(true)}
                    className="px-4 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {couponApplied && <p className="text-emerald-600 text-xs mt-1.5 font-medium">✓ Coupon SMART10 applied — 10% off!</p>}
              </div>

              <div className="space-y-3 text-sm mb-5">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>৳{cartTotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount (10%)</span>
                    <span>-৳{discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600">
                  <span>Delivery</span>
                  <span>{delivery === 0 ? <span className="text-emerald-600 font-medium">Free</span> : `৳${delivery}`}</span>
                </div>
                {cartTotal < 2000 && (
                  <p className="text-xs text-blue-600 bg-blue-50 rounded-lg px-3 py-2">
                    Add ৳{(2000 - cartTotal).toLocaleString()} more for free delivery!
                  </p>
                )}
                <div className="border-t border-slate-100 pt-3 flex justify-between font-heading font-bold text-slate-900 text-base">
                  <span>Total</span>
                  <span>৳{total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => navigate("checkout")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-colors"
              >
                Proceed to Checkout →
              </button>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
                {["Cash on Delivery", "bKash", "Nagad"].map(m => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
