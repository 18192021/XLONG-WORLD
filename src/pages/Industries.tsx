import { INDUSTRIES } from "@/lib/data";
import { ArrowRight, Factory } from "lucide-react";
import heroBg from "@/assets/concept-build.jpg";

export default function Industries() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Industries" className="w-full h-full object-cover grayscale opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="container-width relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Industries</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Deep sector knowledge across {INDUSTRIES.length} global industries.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INDUSTRIES.map((ind, idx) => (
              <div key={idx} className="group p-8 border-l-4 border-gray-100 hover:border-primary transition-all bg-white hover:bg-gray-50">
                <div className="mb-6 text-gray-400 group-hover:text-primary transition-colors">
                  <Factory className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{ind}</h3>
                <div className="w-12 h-0.5 bg-gray-200 group-hover:bg-primary/30 my-4 transition-colors" />
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Transforming value chains in {ind.toLowerCase()}.
                </p>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-primary transition-colors">
                  Explore <ArrowRight className="ml-2 w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
