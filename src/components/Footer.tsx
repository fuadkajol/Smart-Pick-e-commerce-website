import { useApp } from "../context/AppContext"

// function Logo() {
//   return (
//     <div className="flex items-center gap-2.5">
//       <div className="w-9 h-9 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
//         <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 20 20">
//           <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
//           <path d="M6 10a4 4 0 004 4V6a4 4 0 00-4 4z" fill="currentColor" />
//           <circle cx="13" cy="7.5" r="1.5" fill="currentColor" />
//         </svg>
//       </div>
//       <div className="leading-none">
//         <span className="font-heading font-bold text-lg text-white tracking-tight">Smart</span>
//         <span className="font-heading font-bold text-lg text-blue-400 tracking-tight">Pick</span>
//       </div>
//     </div>
//   );
// }

export default function Footer() {
  const { navigate } = useApp()

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
    )
  }

  const shop = [
    { label: "All Products", page: "shop" as const },
    { label: "New Arrivals", page: "shop" as const },
    { label: "Best Sellers", page: "shop" as const },
    { label: "Deals", page: "shop" as const },
    { label: "Categories", page: "shop" as const },
  ]
  const care = [
    { label: "Track Order", page: "track-order" as const },
    { label: "Shipping & Delivery", page: "shipping" as const },
    { label: "Return & Refund", page: "returns" as const },
    { label: "Warranty", page: "warranty" as const },
    { label: "FAQ", page: "faq" as const },
    { label: "Contact Us", page: "contact" as const },
  ]
  const company = [
    { label: "About Smart Pick", page: "about" as const },
    { label: "Privacy Policy", page: "privacy" as const },
    { label: "Terms & Conditions", page: "terms" as const },
  ]

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            {/* <img src="/smartpick.png" alt="Smart Pick" className="h-10 w-auto object-contain" /> */}
            <Logo onClick={() => navigate("home")} />
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-xs">
              Smart gadgets & everyday essentials, picked for modern living.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://facebook.com/hotline.smartpick"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://pinterest.com/hotlinesmartpick"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
              <a
                href="https://wa.me/8801628481484"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {shop.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => navigate(l.page)}
                    className="text-sm hover:text-white transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5">
              {care.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => navigate(l.page)}
                    className="text-sm hover:text-white transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => navigate(l.page)}
                    className="text-sm hover:text-white transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:hotline.smartpick@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  hotline.smartpick@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801628481484"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: 01628481484
                </a>
              </li>
              <li className="pt-1">
                <p className="text-slate-500 text-xs mb-1">Facebook</p>
                <a
                  href="https://facebook.com/hotline.smartpick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  SmartPick
                </a>
              </li>
              <li>
                <p className="text-slate-500 text-xs mb-1">Pinterest</p>
                <a
                  href="https://pinterest.com/hotlinesmartpick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @hotline.smartpick
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2026 SmartPick. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {["Cash on Delivery", "bKash", "Nagad", "Card"].map((method) => (
              <span
                key={method}
                className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-md"
              >
                {method === "Cash on Delivery"
                  ? "💵"
                  : method === "bKash"
                    ? "📱"
                    : method === "Nagad"
                      ? "📱"
                      : "💳"}{" "}
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
