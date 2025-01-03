import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react"; // Import ArrowLeft or correct the icon source

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <br />
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          The page you're looking for might have been removed, had its name
          changed, or is temporarily unavailable. Please try your search again
          or contact support if you believe this to be an error.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back Home
          </Link>
        </div>
      </div>
      <footer className="mt-12 text-center  text-sm text-muted-foreground">
        Feel Free to Contact Us For any assistance
      </footer>
    </div>
  );
}

export default NotFoundPage;
