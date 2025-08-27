import { cn } from "@/lib/cn";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("inline-flex items-center rounded-xl px-2 py-1 text-xs border border-white/10 bg-white/10", className)} {...props} />;
}
