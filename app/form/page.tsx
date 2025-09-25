import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { UsernameInput } from "./username-input"
import { EmailInput } from "./email-input"
import { FrameworkSelect } from "./framework-select"
import { GenderRadio } from "./gender-radio"
import { CheckboxDemo } from "./checkbox"
import { ButtonDemo } from "./button"
import { Calendar22 } from "./datepicker"
import { InputOTPDemo } from "./opt"
import { SelectDemo } from "./select"
import { SliderDemo } from "./slider"
import { TextareaDemo } from "./textarea"
import { SwitchDemo } from "./switch"
import { ToggleGroupDemo } from "./toggle-group"


export default function Form() {
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
                    {/* 2 columns, each 50% */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                        <CardTitle>Form 1</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                        <CardAction>Card Action</CardAction>
                        </CardHeader>
                        <CardContent>
                        <div className="flex flex-col gap-6">
                            <UsernameInput />
                            <EmailInput />
                            <FrameworkSelect />
                            <GenderRadio />
                            <CheckboxDemo />
                            <ButtonDemo />
                        </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Form 2</CardTitle>
                            <CardDescription>Another Card Description</CardDescription>
                            <CardAction>Another Action</CardAction>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-6">
                              <Calendar22 />
                              <InputOTPDemo /> 
                              <SelectDemo /> 
                              <SliderDemo />
                              <SwitchDemo />
                              <ToggleGroupDemo />
                              <TextareaDemo />
                              <ButtonDemo />
                            </div>
                        </CardContent>
                    </Card>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
