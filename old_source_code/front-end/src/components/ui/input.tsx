import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div
        className={cn(
          "group relative flex items-center w-full rounded-md border border-input bg-transparent text-base shadow-sm transition-colors focus-within:ring-1 focus-within:ring-[#18181b]"
        )}
      >
        {
          icon && (
            <span
              className={cn(
                "absolute left-3 text-muted-foreground transition-colors",
                "group-focus-within:text-[#18181b]"
              )}
            >
              {icon}
            </span>
          )
        }
        <input
          type={type}
          className={cn(
            `peer w-full ${ icon ? 'pl-10': 'pl-3' } pr-3 py-2 text-sm rounded-md border-none outline-none bg-transparent placeholder:text-muted-foreground focus:ring-0`,
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
