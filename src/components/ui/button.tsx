import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-in-out transform disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "border bg-purple-800 text-white shadow-xs hover:bg-green-800",

        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/80 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-purple-800 text-white shadow-xs hover:bg-green-800",

        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/70",
        ghost:
          "hover:bg-muted hover:text-foreground dark:hover:bg-muted/40",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        animated: "", // keep for animated handling
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    children: React.ReactNode
  }) {
  const Comp = asChild ? Slot : "button"

  if (variant === "animated") {
    return (
      <div className="relative inline-flex group">
        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt pointer-events-none" />
        <Comp
          className={cn(
            "relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer", // <-- added here
            className
          )}
          data-slot="button"
          {...props}
        >
          {children}
        </Comp>
      </div>
    )
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
