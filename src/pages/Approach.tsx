import { PILLARS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBg from "@/assets/concept-run.jpg";

export default function Approach() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Our Approach" className="w-full h-full object-cover grayscale opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="container-width relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Approach</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            We don't just advise. We imagine, build, run, and optimize—creating a continuous cycle of value.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-32 bg-white">
        <div className="container-width space-y-32">
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className={`flex flex-col gap-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] overflow-hidden relative group shadow-2xl border border-gray-100">
                  {/* Image overlay for style */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500 z-10" />
                  <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                   <span className="text-6xl font-bold text-gray-100">0{idx+1}</span>
                   <span className="text-primary font-bold tracking-widest uppercase text-sm">{pillar.subtitle}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">{pillar.title}</h2>
                <div className="w-20 h-1 bg-primary mb-8" />
                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                  {pillar.desc}
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="rounded-none border-black text-black hover:bg-black hover:text-white px-8 h-12">
                    Start {pillar.title.replace("We ", "")}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gray-50 text-center border-t border-gray-200">
        <div className="container-width max-w-4xl">
           <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">End-to-End Transformation</h2>
           <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
             From the boardroom strategy to the server room implementation, we are the single partner you need to navigate the future.
           </p>
           <Link href="/contact">
             <Button size="lg" className="rounded-none bg-primary text-white h-16 px-12 text-lg hover:bg-black shadow-lg">
               Start the Conversation
             </Button>
           </Link>
        </div>
      </section>
    </div>
  );
}
