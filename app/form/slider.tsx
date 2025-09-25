import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor="email">Slider</Label>
        <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[100%]", className)}
        {...props}
        />
    </div>
  )
}
