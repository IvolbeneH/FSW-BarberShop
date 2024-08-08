import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Calendar, MenuIcon, UserCircle } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { SidebarSheet } from "./Sidebar-sheet"

export function Header() {
  return (
    <header>
      <Card>
        <CardContent className="flex flex-row items-center justify-between p-5 lg:mx-16">
          <Image
            src="/logo.png"
            alt="Logo FSW Barber"
            height={18}
            width={120}
          />
          {/* TELAS GRANDES */}
          <div className="hidden gap-7 lg:flex">
            <Button variant="ghost" className="flex items-center gap-2">
              <Calendar size={18} />
              Agendamentos
            </Button>
            <Button className="flex items-center gap-2">
              <UserCircle size={18} />
              Perfil
            </Button>
          </div>
          {/* TELAS PEQUENAS */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
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
