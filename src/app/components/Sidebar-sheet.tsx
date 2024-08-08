import { Button } from "./ui/button"
import { Calendar, Home, LogIn, LogOut } from "lucide-react"
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOption } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Image from "next/image"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

export function SidebarSheet() {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        <h2 className="text-lg font-bold">Olá, faça seu login.</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon" className="h-8 w-8">
              <LogIn />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90%] rounded-lg">
            <DialogHeader>
              <DialogTitle>Faça login na plataforma!</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta do Google.
              </DialogDescription>
            </DialogHeader>
            <Button
              variant="outline"
              className="flex items-center gap-2 font-bold"
            >
              <Image
                src="/Google.svg"
                width={18}
                height={18}
                alt="Logo google."
              />
              Google
            </Button>
          </DialogContent>
        </Dialog>
        {/*
        <Avatar className="h-12 w-12 border-2 border-primary">
          <AvatarImage src="https://github.com/IvolbeneH.png" />
        </Avatar>
        <div className="">
          <span className="text-base font-bold">Ivolbene Hassib</span>
          <p className="text-sm text-gray-300">ivolbene1@gmail.com</p>
        </div>
        */}
      </div>
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <Button className="justify-start gap-2" asChild>
          <Link href="/">
            <Home size={18} />
            Início
          </Link>
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
  )
}
