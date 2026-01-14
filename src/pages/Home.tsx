import { ArrowRight, ChevronRight, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CAPABILITIES, INDUSTRIES, PILLARS } from "@/lib/data";
import heroBg from "@/assets/hero-corporate.jpg";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Modern corporate architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent" />
        </div>

        <div className="container-width relative z-10 pt-20">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest animate-fade-in">
              Global Professional Services
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-black">
              ARCHITECTS OF <br />
              <span className="text-primary">
                WHAT'S NEXT
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-xl font-light leading-relaxed">
              We don't just adapt to disruption—we engineer it. Transforming high-level strategy into unmatched execution scale to build your defensible moat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/approach">
                <Button size="lg" className="h-14 px-8 text-base rounded-none bg-primary text-white hover:bg-black transition-colors shadow-xl shadow-orange-500/20">
                  Our Approach
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-none border-black text-black hover:bg-black hover:text-white bg-transparent">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROP / INTRO */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container-width">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-6">The XLONG Model</h2>
               <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
                 Strategy is the Entry Point.<br/>Execution is the Engine.
               </h3>
               <p className="text-lg text-gray-600 leading-relaxed mb-6">
                 XLONG WORLD pioneers a consulting-led growth model. We bridge the gap between advisory and implementation, using our execution muscle to integrate the complex technology landscapes that define modern business.
               </p>
               <Link href="/about">
                 <div className="flex items-center text-black font-bold border-b-2 border-primary pb-1 w-fit cursor-pointer hover:text-primary transition-colors">
                   Read Our Story <ArrowRight className="ml-2 w-4 h-4" />
                 </div>
               </Link>
             </div>
             <div className="bg-gray-50 p-10 border-l-4 border-primary">
               <blockquote className="text-xl md:text-2xl font-light text-gray-800 italic leading-relaxed">
                 "In a world defined by relentless disruption, we create the certainty of execution. We integrate, implement, and manage so you can lead."
               </blockquote>
             </div>
           </div>
        </div>
      </section>

      {/* APPROACH PILLARS */}
      <section className="py-32 bg-white relative">
        <div className="container-width">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">How We Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              From Ambition to <br/>Total Reinvention
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-200">
            {PILLARS.map((pillar, idx) => (
              <div key={idx} className="group relative border-r border-b border-gray-200 p-10 h-[480px] flex flex-col justify-between overflow-hidden transition-all hover:bg-gray-50 hover:shadow-2xl hover:shadow-black/5 hover:z-10 bg-white">
                
                <div className="relative z-10">
                  <span className="text-6xl font-bold text-gray-100 group-hover:text-primary/10 transition-colors">0{idx + 1}</span>
                  <h4 className="text-2xl font-bold text-black mt-8 mb-3 group-hover:text-primary transition-colors">{pillar.title}</h4>
                  <p className="text-primary font-bold text-xs uppercase tracking-wider mb-6">{pillar.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-gray-900 transition-colors">{pillar.desc}</p>
                </div>
                
                <div className="relative z-10 flex justify-end">
                   <div className="w-12 h-12 border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                     <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-32 bg-gray-50">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Capabilities</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Comprehensive Expertise
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We integrate any platform the client needs. Our defensible moat is built on deep domain expertise across strategy, technology, and operations.
              </p>
            </div>
            <Link href="/capabilities">
              <Button variant="outline" className="rounded-none border-black hover:bg-black hover:text-white px-8 h-12">
                View All Capabilities
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAPABILITIES.slice(0, 6).map((cap, idx) => (
              <div key={idx} className="group p-8 bg-white border border-transparent shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-gray-50 text-primary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors">{cap}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Driving measurable value through precision and scale.</p>
              </div>
            ))}
            
            <Link href="/capabilities">
              <div className="p-8 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center hover:border-primary hover:bg-white transition-all cursor-pointer h-full min-h-[240px] bg-transparent">
                <span className="text-5xl font-bold text-gray-200 mb-2 group-hover:text-primary">+{CAPABILITIES.length - 6}</span>
                <p className="text-black font-bold">More Capabilities</p>
                <p className="text-sm text-muted-foreground mt-2">Explore full list</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-32 bg-white">
        <div className="container-width">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Industries We Serve</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Deep Sector Knowledge
            </h3>
            <p className="text-muted-foreground text-lg">
              From Financial Services to Life Sciences, we navigate the nuance of your industry to unlock new value.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-6">
            {INDUSTRIES.map((ind, idx) => (
              <Link key={idx} href="/industries">
                <a className="group flex items-center py-4 border-b border-gray-100 hover:border-primary transition-colors">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 mr-3 transition-opacity" />
                  <span className="text-gray-600 font-medium group-hover:text-black transition-colors">{ind}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="container-width relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Ready to Engineer Change?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-medium">
            Join the architects of what's next. Let's build your defensible moat together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact">
              <Button size="lg" className="h-16 px-12 text-lg rounded-none bg-white text-primary hover:bg-black hover:text-white border-2 border-transparent shadow-xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
