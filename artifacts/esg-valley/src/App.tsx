import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { AuthProvider } from "@/lib/auth";
import { LangProvider } from "@/lib/lang";
import { CartProvider } from "@/lib/cart";
import { OrdersProvider } from "@/lib/orders";
import { AuthModal } from "@/components/ui/AuthModal";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { AppLayout } from "./components/layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Ecosystem from "./pages/Ecosystem";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Events from "./pages/Events";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ve-esg-valley" component={About} />
      <Route path="/san-pham" component={Products} />
      <Route path="/san-pham/:slug" component={ProductDetail} />
      <Route path="/he-sinh-thai" component={Ecosystem} />
      <Route path="/tin-tuc" component={News} />
      <Route path="/tin-tuc/:slug" component={NewsDetail} />
      <Route path="/lien-he" component={Contact} />
      <Route path="/ho-tro" component={Support} />
      <Route path="/su-kien" component={Events} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <AuthProvider>
          <OrdersProvider>
            <CartProvider>
              <TooltipProvider>
                <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
                  <AppLayout>
                    <Router />
                  </AppLayout>
                  <AuthModal />
                  <CartDrawer />
                </WouterRouter>
                <Toaster />
              </TooltipProvider>
            </CartProvider>
          </OrdersProvider>
        </AuthProvider>
      </LangProvider>
    </QueryClientProvider>
  );
}

export default App;
