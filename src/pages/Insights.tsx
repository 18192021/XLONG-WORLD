import { ArrowRight, Calendar, Download } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/concept-strategy.jpg";
import report1 from "@/assets/concept-build.jpg";
import report2 from "@/assets/concept-run.jpg";
import report3 from "@/assets/concept-experience.jpg";

const REPORTS = [
  {
    id: 1,
    title: "The State of AI 2026: From Pilot to Production",
    category: "Technology",
    date: "October 15, 2025",
    excerpt: "Why 80% of enterprises are failing to scale their AI initiatives, and the architectural shifts required to succeed.",
    image: report1
  },
  {
    id: 2,
    title: "Navigating Geopolitical Risk in Supply Chains",
    category: "Operations",
    date: "September 28, 2025",
    excerpt: "Strategies for building resilience in a fragmented global economy. Moving from 'just-in-time' to 'just-in-case'.",
    image: report2
  },
  {
    id: 3,
    title: "The Future of Organizational Performance",
    category: "People & Talent",
    date: "September 10, 2025",
    excerpt: "How leading companies are redesigning their operating models to unlock human potential in the age of automation.",
    image: report3
  }
];

export default function Insights() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Our Insights" className="w-full h-full object-cover grayscale opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="container-width relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Insights</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            Latest thinking on strategy, technology, and operations. We decode the complexity of the future.
          </p>
        </div>
      </section>

      {/* Featured Reports Grid */}
      <section className="py-24 bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {REPORTS.map((report) => (
              <div key={report.id} className="group cursor-pointer flex flex-col h-full">
                {/* Image Card */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-6 border border-gray-100">
                  <img 
                    src={report.image} 
                    alt={report.title} 
                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-3 text-xs font-bold uppercase tracking-widest">
                    <span className="text-primary">{report.category}</span>
                    <span className="text-gray-400 border-l border-gray-200 pl-4">{report.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-primary transition-colors leading-tight">
                    {report.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {report.excerpt}
                  </p>
                  
                  <div className="flex items-center text-black font-bold border-b-2 border-transparent group-hover:border-primary pb-1 w-fit transition-all">
                    Read Report <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Newsletter / Stay Updated */}
          <div className="mt-24 bg-gray-50 border border-gray-200 p-12 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Stay Ahead of the Curve</h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Subscribe to receive our latest insights and perspectives directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
               <input 
                 type="email" 
                 placeholder="Email Address" 
                 className="h-12 px-4 bg-white border border-gray-300 w-full focus:outline-none focus:border-primary"
               />
               <Button className="h-12 px-8 bg-black text-white hover:bg-primary rounded-none">
                 Subscribe
               </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
