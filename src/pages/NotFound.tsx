import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-9xl font-heading font-bold text-primary opacity-20">404</h1>
        <h2 className="text-3xl font-heading font-bold text-white">Page Not Found</h2>
        <p className="text-muted-foreground">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/">
          <Button size="lg" className="rounded-none bg-primary text-background hover:bg-white">
            <ArrowLeft className="mr-2 w-4 h-4" /> Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
