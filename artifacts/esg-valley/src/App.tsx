import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { AuthProvider } from "@/lib/auth";
import { LangProvider } from "@/lib/lang";
import { AuthModal } from "@/components/ui/AuthModal";
import { AppLayout } from "./components/layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Ecosystem from "./pages/Ecosystem";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ve-esg-valley" component={About} />
      <Route path="/san-pham" component={Products} />
      <Route path="/he-sinh-thai" component={Ecosystem} />
      <Route path="/tin-tuc" component={News} />
      <Route path="/lien-he" component={Contact} />
      <Route path="/ho-tro" component={Support} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <AuthProvider>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <AppLayout>
                <Router />
              </AppLayout>
              <AuthModal />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </AuthProvider>
      </LangProvider>
    </QueryClientProvider>
  );
}

export default App;
