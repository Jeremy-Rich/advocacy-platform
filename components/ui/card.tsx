import * as React from "react"

<<<<<<< HEAD
=======
import { cn } from "@/lib/utils"

>>>>>>> origin/main
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
<<<<<<< HEAD
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
=======
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
>>>>>>> origin/main
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
<<<<<<< HEAD
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
=======
    className={cn("flex flex-col space-y-1.5 p-6", className)}
>>>>>>> origin/main
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
<<<<<<< HEAD
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
=======
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
>>>>>>> origin/main
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

<<<<<<< HEAD
=======
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

>>>>>>> origin/main
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
<<<<<<< HEAD
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardHeader, CardTitle, CardContent }
=======
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
>>>>>>> origin/main
