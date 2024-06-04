import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "tracking-wide inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white border-slate-200 border-2 border-b-[4px] active:border-b-2 hover:bg-slate-50 text-black",
        defaultOutline:
          "bg-transparent border-0 text-black active:scale-[0.98] hover:scale-[1.02]",
        primary:
          "bg-sky-500 text-white hover:bg-sky-500/90 border-sky-600 border-b-4 active:border-b-0",
        primaryOutline: "text-sky-500 active:scale-[0.98] hover:scale-[1.02]",
        secondary:
          "bg-green-500 text-white hover:bg-green-500/90 border-green-600 border-b-4 active:border-b-0",
        secondaryOutline:
          "text-green-500 active:scale-[0.98] hover:scale-[1.02]",
        danger:
          "bg-rose-500 text-white hover:bg-rose-500/90 border-rose-600 border-b-4 active:border-b-0",
        dangerOutline: "text-rose-500 active:scale-[0.98] hover:scale-[1.02]",
        super:
          "bg-indigo-500 text-white hover:bg-indigo-500/90 border-indigo-600 border-b-4 active:border-b-0",
        superOutline: "text-indigo-500 active:scale-[0.98] hover:scale-[1.02]",
        sidebar:
          "bg-transparent text-slate-500 border-2 border-transparent hover:bg-slate-100 transiotion-none active:scale-[0.995] hover:scale-[1.015]",
        sidebarOutline:
          "bg-sky-500/15 text-sky-500 border-sky-300 border-2 hover:bg-sky-500/20 transition-none active:scale-[0.995] hover:scale-[1.015]",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
