import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Industries", href: "/industries" },
  { name: "Approach", href: "/approach" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-border py-3 shadow-sm"
          : "bg-white border-transparent py-5"
      )}
    >
      <div className="container-width flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary flex items-center justify-center transition-colors">
              <span className="text-white font-bold text-lg leading-none tracking-tight">XL</span>
            </div>
            <span className="font-sans font-bold text-xl tracking-tight text-foreground">
              XLONG WORLD
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-primary relative py-2",
                  location === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
                {location === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                )}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button className="ml-4 rounded-none bg-black text-white hover:bg-primary transition-colors px-6">
              Contact Us <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-foreground">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white border-l border-border sm:max-w-xs">
            <div className="flex flex-col gap-6 mt-10">
              {NAV_ITEMS.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="text-xl font-bold text-foreground hover:text-primary transition-colors flex items-center justify-between group border-b border-border pb-4">
                    {item.name}
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </a>
                </Link>
              ))}
              <Link href="/contact">
                <Button className="w-full mt-4 bg-primary text-white hover:bg-primary/90 h-12 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary pt-24 pb-12 border-t border-border">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1 pr-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                 <span className="text-white font-bold text-sm leading-none">XL</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground">
                XLONG WORLD
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Architects of what's next. Engineering change through strategy, technology, and operations.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-foreground text-sm uppercase tracking-wider">Capabilities</h4>
            <ul className="space-y-4">
              {["Strategy", "Technology", "Operations", "Transformation"].map(item => (
                <li key={item}>
                  <Link href="/capabilities">
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground text-sm uppercase tracking-wider">Industries</h4>
            <ul className="space-y-4">
              {["Financial Services", "Healthcare", "Public Sector", "Energy"].map(item => (
                <li key={item}>
                  <Link href="/industries">
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground text-sm uppercase tracking-wider">Connect</h4>
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground block mb-1">Global Headquarters</strong>
                Shanghai / New York / London
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full rounded-none border-foreground/20 hover:bg-foreground hover:text-white transition-colors">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} XLONG WORLD. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Use</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
