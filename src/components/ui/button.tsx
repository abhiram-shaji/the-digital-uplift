import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "",
      destructive: "",
      outline: "",
      secondary: "",
      ghost: "",
      link: "",
      animated: ""
    },
    size: {
      default: "px-8 py-3",
      sm: "px-4 py-2 text-sm",
      lg: "px-10 py-4 text-lg",
      icon: "size-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

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

  return (
    <div className="relative inline-flex group">
      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-sm group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt pointer-events-none" />
      <Comp
        className={cn(
          "relative inline-flex items-center justify-center text-white font-bold transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer",
          buttonVariants({ variant, size }),
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

export { Button, buttonVariants }
