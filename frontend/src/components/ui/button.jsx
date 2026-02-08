import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  
  const variants = {
    default: "bg-primary text-white hover:bg-primary-800",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    accent: "bg-accent text-white hover:bg-accent-hover",
    ghost: "hover:bg-gray-100",
  }
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-12 px-8 text-lg",
    icon: "h-10 w-10",
  }
  
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
