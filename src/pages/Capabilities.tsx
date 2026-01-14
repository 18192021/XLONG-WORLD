import { CAPABILITIES } from "@/lib/data";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import heroBg from "@/assets/concept-strategy.jpg";

export default function Capabilities() {
  const [filter, setFilter] = useState("");

  const filtered = CAPABILITIES.filter(c => 
    c.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Capabilities" className="w-full h-full object-cover grayscale opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="container-width relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Capabilities</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Leading capabilities to drive transformation at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-[72px] z-40 shadow-sm">
        <div className="container-width">
          <div className="relative max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search capabilities..." 
              className="pl-12 bg-gray-50 border-gray-200 text-black placeholder:text-gray-500 rounded-none h-14 focus-visible:ring-primary text-lg"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((cap, idx) => (
              <div key={idx} className="group p-8 border border-transparent bg-white shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col justify-between h-[280px]">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-primary transition-colors">
                    {cap}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Delivering measurable value through deep expertise in {cap.toLowerCase()} and integrated execution.
                  </p>
                </div>
                
                <div className="flex items-center text-primary font-bold text-sm mt-8 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 uppercase tracking-wider">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            ))}
            
            {filtered.length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-500 text-lg">
                No capabilities found matching "{filter}"
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
