"use client"

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
import { signIn, signOut, useSession } from "next-auth/react"

export function SidebarSheet() {
  const handleSignOut = () => signOut()

  const { data } = useSession()
  function handleLoginWithGoogle() {
    signIn("google")
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar className="h-12 w-12 border-2 border-primary">
              <AvatarImage
                src={data?.user?.image ?? ""}
                alt="Imagem do usuario"
              />
            </Avatar>
            <div className="">
              <span className="text-base font-bold">{data?.user?.name}</span>
              <p className="text-sm text-gray-300">{data?.user?.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-lg font-bold">Olá, faça seu login.</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon" className="h-8 w-8">
                  <LogIn />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[80%] rounded-lg">
                <DialogHeader>
                  <DialogTitle>Faça login na plataforma!</DialogTitle>
                  <DialogDescription>
                    Conecte-se usando sua conta do Google.
                  </DialogDescription>
                </DialogHeader>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 font-bold"
                  onClick={handleLoginWithGoogle}
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
          </>
        )}
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
      {data?.user ? (
        <div className="flex flex-col gap-2 py-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="justify-start gap-2">
                <LogOut size={18} />
                Sair da conta
              </Button>
            </DialogTrigger>
            <DialogContent className="flex w-[80%] flex-col items-center justify-center rounded-lg">
              <DialogTitle className="text-xl">Sair</DialogTitle>
              <DialogDescription className="text-base">
                Deseja mesmo sair da plataforma?
              </DialogDescription>
              <div className="flex w-full gap-3">
                <Button variant="secondary" className="w-full">
                  Cancelar
                </Button>
                <Button
                  className="w-full bg-red-500 text-zinc-50"
                  onClick={handleSignOut}
                >
                  Sair
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <></>
      )}
    </SheetContent>
  )
}
