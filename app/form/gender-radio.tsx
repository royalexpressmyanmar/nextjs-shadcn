import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

export function GenderRadio() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="username">Select Gender</Label>
        <RadioGroup defaultValue="comfortable">
        <div className="flex items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Male</Label>
        </div>
        <div className="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Female</Label>
        </div>
        <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Other</Label>
        </div>
        </RadioGroup>
    </div>
  )
}
