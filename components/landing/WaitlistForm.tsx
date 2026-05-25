"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WaitlistForm() {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Action details can be handled here in the future
  };

  return (
    <form
      className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-md p-2 sm:p-1.5 pl-4 pr-4 sm:pl-6 sm:pr-1.5 bg-white border border-border rounded-2xl sm:rounded-full shadow-[0_4px_20px_rgba(2,15,49,0.04)] focus-within:border-primary/30 focus-within:shadow-[0_4px_24px_rgba(2,15,49,0.08)] transition-all z-20 mt-[18px] gap-2 sm:gap-0"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Enter Your Email"
        required
        className="flex-1 bg-transparent border-0 outline-none text-sm text-primary placeholder:text-muted-foreground py-2 px-1 sm:px-0"
      />
      <Button
        type="submit"
        className="rounded-xl sm:rounded-full bg-primary text-white hover:bg-primary/90 font-sans font-medium px-5 sm:px-6 h-10 text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 w-full sm:w-auto"
      >
        <span>Join Waitlist</span>
        <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );
}
