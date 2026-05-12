import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-emerald-300 text-neutral-950 shadow-[0_18px_50px_rgba(110,231,183,0.24)] hover:bg-emerald-200 focus-visible:ring-emerald-300",
  secondary:
    "border border-white/15 bg-white/10 text-white backdrop-blur-xl hover:bg-white/15 focus-visible:ring-white/50",
  ghost: "text-white/80 hover:bg-white/10 focus-visible:ring-white/40",
};

export function Button({
  className,
  variant = "primary",
  asChild,
  children,
  ...props
}: ButtonProps) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
      className: cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        (children.props as { className?: string }).className,
        className
      ),
    });
  }

  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
