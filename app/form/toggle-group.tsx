import { Bold, Italic, Underline } from "lucide-react"
import { Label } from "@/components/ui/label"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function ToggleGroupDemo() {
  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor="email">Toggle</Label>
        <ToggleGroup variant="outline" type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
            <Underline className="h-4 w-4" />
        </ToggleGroupItem>
        </ToggleGroup>
    </div>
  )
}
