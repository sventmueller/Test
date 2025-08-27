import { cn } from "@/lib/cn";
import React from "react";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(function Textarea({ className, ...props }, ref) {
  return <textarea ref={ref} className={cn("w-full rounded-xl border border-white/10 bg-neutral-950/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/50", className)} {...props} />;
});
