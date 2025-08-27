import { cn } from "@/lib/cn";
import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cn("w-full rounded-xl border border-white/10 bg-neutral-950/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/50", className)} {...props} />;
});
