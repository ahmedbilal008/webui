import { cn } from "@/component-library/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-neutral-800", className)}
      {...props}
    />
  )
}

export { Skeleton }
