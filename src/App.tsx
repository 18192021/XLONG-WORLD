import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Navbar, Footer } from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Insights from "@/pages/Insights";
import Capabilities from "@/pages/Capabilities";
import Industries from "@/pages/Industries";
import Approach from "@/pages/Approach";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-background">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/insights" component={Insights} />
            <Route path="/capabilities" component={Capabilities} />
            <Route path="/industries" component={Industries} />
            <Route path="/approach" component={Approach} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
