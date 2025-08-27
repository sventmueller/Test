"use client";
import { cn } from "@/lib/cn";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-5 py-2.5 text-base",
};

export function Button({ className, size = "md", ...props }: Props) {
  return (
    <button
      className={cn(
        "rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition border border-white/10 shadow-sm",
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
