import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/concept-build.jpg";

export default function About() {
  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="About Us" className="w-full h-full object-cover grayscale opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="container-width relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            We are a global professional services company engineered for the future. We bridge the gap between high-level strategy and deep technical execution.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container-width grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
             <div className="sticky top-32 p-8 border border-gray-200 bg-gray-50">
               <h3 className="font-bold text-2xl text-black mb-6">Our DNA</h3>
               <ul className="space-y-4 text-gray-700">
                 <li className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-primary" />
                   <span className="font-semibold">Consulting-Led Entry</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-primary" />
                   <span className="font-semibold">Unmatched Execution Scale</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-primary" />
                   <span className="font-semibold">Defensible Moats</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-primary" />
                   <span className="font-semibold">Global Reach</span>
                 </li>
               </ul>
             </div>
          </div>

          <div className="lg:col-span-8 space-y-10 text-lg leading-relaxed text-gray-600">
            <div className="max-w-none">
              <h2 className="text-3xl font-bold text-black mb-6">Redefining the Model</h2>
              <p className="mb-6">
                XLONG WORLD pioneers a consulting-based growth model designed for an era of complexity. Traditional firms often stop at the roadmap. We don't. We use consulting as the critical entry point to align with leadership and build trust—then we leverage our unmatched execution muscle to deliver the outcome.
              </p>
              
              <div className="py-8 my-8 border-y border-gray-100">
                <p className="text-2xl font-light italic text-gray-900 leading-normal">
                  "We integrate, implement, and manage the complex technology landscape on behalf of our clients. This is their defensible moat and our growth engine."
                </p>
              </div>
              
              <h2 className="text-3xl font-bold text-black mb-6">Architects of What's Next</h2>
              <p className="mb-6">
                In a world defined by relentless disruption, adaptation is not enough. You must engineer change. As a global professional services company, we bring leading capabilities across:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base font-medium text-gray-800 mb-8">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Strategy & Corporate Finance</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Technology & AI</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Operations & Implementation</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> People & Organizational Performance</li>
              </ul>

              <p>
                From Artificial Intelligence to Risk & Resilience, we integrate any platform the client needs to ensure they don't just survive the future—they define it.
              </p>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-black mb-3 text-lg">Trust-Builder</h4>
                  <p className="text-sm text-gray-600">We work shoulder-to-shoulder with leadership to define the ambition.</p>
                </div>
                <div className="p-8 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-black mb-3 text-lg">Execution Engine</h4>
                  <p className="text-sm text-gray-600">We take over the ongoing management to drive continuous improvement.</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-200">
              <Link href="/contact">
                <Button size="lg" className="rounded-none bg-primary text-white hover:bg-black px-8">
                  Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
