import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Calendar, Home, LogOut, MenuIcon, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOption } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"

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
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex items-center gap-3 border-b border-solid py-5">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage src="https://github.com/IvolbeneH.png" />
                </Avatar>
                <div className="">
                  <span className="text-base font-bold">Ivolbene Hassib</span>
                  <p className="text-sm text-gray-300">ivolbene1@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 border-b border-solid py-5">
                <Button className="justify-start gap-2">
                  <Home size={18} />
                  Início
                </Button>
                <Button className="justify-start gap-2" variant="ghost">
                  <Calendar size={18} />
                  Agendamentos
                </Button>
              </div>
              <div className="flex flex-col gap-2 border-b border-solid py-5">
                {quickSearchOption.map((option) => (
                  <Button
                    className="justify-start gap-2"
                    variant="ghost"
                    key={option.title}
                  >
                    <Image
                      src={option.imageUrl}
                      height={18}
                      width={18}
                      alt={option.title}
                    />
                    {option.title}
                  </Button>
                ))}
              </div>
              <div className="flex flex-col gap-2 py-5">
                <Button variant="ghost" className="justify-start gap-2">
                  <LogOut size={18} />
                  Sair da conta
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>
    </header>
  )
}
