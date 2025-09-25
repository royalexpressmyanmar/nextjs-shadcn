import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Calendar22 } from "./components/datepicker"
import data from "./data.json"
import { TabsDemo } from "./components/tabs"
import { SectionCards } from "./components/section-cards"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const cardData = [
  { left: "Running Courier", right: "Service Waygroup", total: 120 },
  { left: "Stop Courier", right: "Service Waygroup", total: 80 }
];

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <Calendar22 />
              </div>
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              
              <div className="px-4 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {cardData.map((item, index) => (

                  <Card key={index} className="@container/card">
        <CardContent className="flex-col items-start gap-1.5 text-sm">
          <div
                    
                    className="shadow-md rounded-lg p-4 w-full"
                  >
                    {/* First Row: Two Columns */}
                    <div className="flex justify-between mb-4">
                      <div className="w-1/2 text-xl text-center">
                        {item.left}
                        <p className="text-center text-2xl">50</p>
                      </div>
                      <div className="w-1/2 text-xl text-center">
                        {item.right}
                        <p className="text-center text-2xl">50</p>
                      </div>
                    </div>

                    {/* Second Row: Full width, centered */}
                    <div className="w-full text-center pt-4 text-3xl border-t-2 font-bold">{item.total}</div>
                  </div>
        </CardContent>
      </Card>
                  
                ))}
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
