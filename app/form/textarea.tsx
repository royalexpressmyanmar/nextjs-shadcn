import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
export function TextareaDemo() {
  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor="email">Description</Label>
      <Textarea className="min-h-24 resize-y" placeholder="Type your message here." />
    </div>
  )
}
