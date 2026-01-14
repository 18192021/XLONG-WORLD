import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    toast.success("Message sent successfully. We will be in touch shortly.");
    reset();
  };

  return (
    <div className="w-full pt-32 pb-20 bg-white min-h-screen">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-5xl font-bold text-black mb-8">Let's Engineer Your Future</h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Ready to build your defensible moat? Connect with our global leadership team to discuss your transformation journey.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gray-50 border border-gray-200 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-xl mb-1">Global Headquarters</h3>
                  <p className="text-gray-600">Shanghai / New York / London</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-gray-50 border border-gray-200 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-xl mb-1">Email Us</h3>
                  <p className="text-gray-600">contact@xlongworld.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-gray-50 border border-gray-200 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-xl mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (888) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 border border-gray-200 p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl font-bold text-black mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">First Name</label>
                  <Input {...register("firstName")} required placeholder="Jane" className="bg-white border-gray-300 text-black rounded-none h-12 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Last Name</label>
                  <Input {...register("lastName")} required placeholder="Doe" className="bg-white border-gray-300 text-black rounded-none h-12 focus-visible:ring-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Work Email</label>
                <Input {...register("email")} type="email" required placeholder="jane@company.com" className="bg-white border-gray-300 text-black rounded-none h-12 focus-visible:ring-primary" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Company</label>
                <Input {...register("company")} required placeholder="Company Name" className="bg-white border-gray-300 text-black rounded-none h-12 focus-visible:ring-primary" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <Textarea {...register("message")} required placeholder="How can we help you?" className="bg-white border-gray-300 text-black rounded-none min-h-[150px] focus-visible:ring-primary" />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-none text-lg bg-primary text-white hover:bg-black font-bold shadow-md">
                {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
