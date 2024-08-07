import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { SidebarSheet } from "./Sidebar-sheet"

export function Header() {
  return (
    <header>
      <Card>
        <CardContent className="flex flex-row items-center justify-between p-5">
          <Image
            src="/logo.png"
            alt="Logo FSW Barber"
            height={18}
            width={120}
          />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SidebarSheet />
          </Sheet>
        </CardContent>
      </Card>
    </header>
  )
}
