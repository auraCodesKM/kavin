"use client"
import { cn } from "@/lib/utils"

export const BackgroundBoxes = ({ className }: { className?: string }) => {
  const rows = new Array(150).fill(1)
  const cols = new Array(100).fill(1)
  const colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--purple-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
  ]
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div
      className={cn(
        "absolute left-0 top-0 flex h-full w-full -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
        className,
      )}
    >
      {rows.map((_, i) => (
        <div key={`row` + i} className="w-16 h-16 border-l border-slate-700 relative">
          {cols.map((_, j) => (
            <div key={`col` + j} className="w-16 h-16 border-r border-t border-slate-700 relative">
              {Math.random() > 0.97 && (
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-[0.15] blur-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, var(${getRandomColor()}), transparent)`,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
