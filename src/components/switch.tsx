"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitives.Root>) {
  return (
    <SwitchPrimitives.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-[1.15rem] w-9 shrink-0 items-center rounded-full border border-transparent shadow-sm transition-all outline-none",
        
        // ACTIVE STATE
        "data-[state=checked]:bg-primary",

        // INACTIVE STATE (still primary based)
        "data-[state=unchecked]:bg-primary/30",

        // FOCUS
        "focus-visible:ring-2 focus-visible:ring-primary/40",

        // DISABLED
        "disabled:cursor-not-allowed disabled:opacity-50",

        className
      )}
      {...props}
    >
      <SwitchPrimitives.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-4 rounded-full bg-white shadow-md ring-0 transition-transform",

          "data-[state=checked]:translate-x-[calc(100%-2px)]",
          "data-[state=unchecked]:translate-x-[2px]"
        )}
      />
    </SwitchPrimitives.Root>
  )
}

export { Switch }