import { cn } from "@/lib/utils"

interface SectionDecorationProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  className?: string
}

export function SectionDecoration({ position, className }: SectionDecorationProps) {
  return (
    <div
      className={cn(
        "absolute w-32 h-32 opacity-10 pointer-events-none",
        position === "top-left" && "top-0 left-0",
        position === "top-right" && "top-0 right-0",
        position === "bottom-left" && "bottom-0 left-0",
        position === "bottom-right" && "bottom-0 right-0",
        className,
      )}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-green-800">
        <path
          fill="currentColor"
          d="M42.8,-73.2C54.9,-67.1,64.3,-55.4,70.7,-42.3C77.2,-29.2,80.6,-14.6,79.8,-0.5C79,13.7,73.9,27.3,66.4,39.5C58.9,51.7,48.9,62.4,36.8,69.5C24.7,76.6,10.4,80.1,-3.2,84.8C-16.8,89.5,-29.7,95.5,-42.3,93.2C-54.9,90.9,-67.3,80.4,-75.6,67.2C-83.9,54,-88.1,38.1,-89.5,22.8C-90.9,7.5,-89.5,-7.2,-84.2,-19.8C-78.9,-32.4,-69.7,-42.9,-58.3,-49.5C-46.9,-56.1,-33.4,-58.8,-21.2,-65.5C-9,-72.2,1.9,-82.9,14.4,-84.5C26.9,-86.1,40.9,-78.6,42.8,-73.2Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  )
}
