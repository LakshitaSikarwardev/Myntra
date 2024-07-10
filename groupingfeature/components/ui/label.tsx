"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import { Button } from "@/components/ui/button";


import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }







<section className="container mx-auto my-8 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={100}
              height={100}
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Premium Wireless Headphones</h1>
              <p className="text-muted-foreground">
                Experience the ultimate audio immersion with our top-of-the-line wireless headphones.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">$99.99</span>
              <div className="flex gap-2">
                <Button variant="outline">Add to Cart</Button>
                <Button>Create Group</Button>
              </div>
            </div>
          </div>
        </div>
      </section>