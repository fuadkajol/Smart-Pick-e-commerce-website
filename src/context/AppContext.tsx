import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Product, CartItem } from "../data/products";

export type Page =
  | "home" | "shop" | "product" | "cart" | "checkout" | "order-confirmation"
  | "track-order" | "wishlist" | "account" | "my-orders" | "about" | "contact"
  | "faq" | "shipping" | "returns" | "warranty" | "privacy" | "terms"
  | "search" | "category";

interface NavParams {
  product?: Product;
  category?: string;
  query?: string;
}

interface AppContextType {
  page: Page;
  navParams: NavParams;
  navigate: (page: Page, params?: NavParams) => void;
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: number) => boolean;
  cartTotal: number;
  cartCount: number;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<Page>("home");
  const [navParams, setNavParams] = useState<NavParams>({});
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useCallback((newPage: Page, params: NavParams = {}) => {
    setPage(newPage);
    setNavParams(params);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const addToCart = useCallback((product: Product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { product, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCartItems(prev => prev.filter(i => i.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(prev =>
      prev.map(i => i.product.id === productId ? { ...i, quantity } : i)
    );
  }, []);

  const toggleWishlist = useCallback((product: Product) => {
    setWishlist(prev =>
      prev.find(p => p.id === product.id)
        ? prev.filter(p => p.id !== product.id)
        : [...prev, product]
    );
  }, []);

  const isInWishlist = useCallback((productId: number) =>
    wishlist.some(p => p.id === productId), [wishlist]);

  const cartTotal = cartItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <AppContext.Provider value={{
      page, navParams, navigate,
      cartItems, addToCart, removeFromCart, updateQuantity,
      wishlist, toggleWishlist, isInWishlist,
      cartTotal, cartCount,
      searchQuery, setSearchQuery,
      mobileMenuOpen, setMobileMenuOpen,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
}
