import { AppProvider, useApp } from "./context/AppContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import TrackOrder from "./pages/TrackOrder";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import MyOrders from "./pages/MyOrders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import Warranty from "./pages/Warranty";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Search from "./pages/Search";
import Category from "./pages/Category";

function PageContent() {
  const { page } = useApp();
  switch (page) {
    case "home":               return <Home />;
    case "shop":               return <Shop />;
    case "product":            return <ProductDetail />;
    case "cart":               return <Cart />;
    case "checkout":           return <Checkout />;
    case "order-confirmation": return <OrderConfirmation />;
    case "track-order":        return <TrackOrder />;
    case "wishlist":           return <Wishlist />;
    case "account":            return <Account />;
    case "my-orders":          return <MyOrders />;
    case "about":              return <About />;
    case "contact":            return <Contact />;
    case "faq":                return <FAQ />;
    case "shipping":           return <Shipping />;
    case "returns":            return <Returns />;
    case "warranty":           return <Warranty />;
    case "privacy":            return <Privacy />;
    case "terms":              return <Terms />;
    case "search":             return <Search />;
    case "category":           return <Category />;
    default:                   return <Home />;
  }
}

function AppShell() {
  const { page } = useApp();
  const noFooter = page === "checkout";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        <PageContent />
      </main>
      {!noFooter && <Footer />}
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
