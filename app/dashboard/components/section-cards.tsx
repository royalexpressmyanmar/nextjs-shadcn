"use client"
import { useEffect, useState } from "react"
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface EventSummary {
  total: number
  service: string
}

export function SectionCards() {
  const [data, setData] = useState<EventSummary[]>([])
      const [loading, setLoading] = useState(true)
  
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const res = await fetch(
                  "https://sreventadminapi.royalx.biz/api/v1/statics/event-summary?refDate=2025-09-25"
                  )
                  const json = await res.json()
                  setData(json.data || [])
              } catch (err) {
                  console.error(err)
              } finally {
                  setLoading(false)
              }
          }
          fetchData()
      }, [])

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
      {loading ? (
                <div>Loading...</div>
              ) : (
                data.map((item, idx) => (
                  <Card key={idx} className="@container/card">
        <CardHeader>
          <CardDescription>{item.service}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {item.total}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <CheckCircle />
              Active
            </Badge>
          </CardAction>
        </CardHeader>
      </Card>
                ))
              )}
      
    </div>
  )
}
