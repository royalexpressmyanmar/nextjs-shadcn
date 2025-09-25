import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function UsernameInput() {
  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor="username">Username</Label>
      <Input type="text" id="username" placeholder="Username" />
    </div>
  )
}
