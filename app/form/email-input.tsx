import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function EmailInput() {
  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}
