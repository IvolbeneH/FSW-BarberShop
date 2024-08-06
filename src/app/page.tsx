import { SearchIcon } from "lucide-react"
import { Header } from "./components/Header"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Avatar, AvatarImage } from "./components/ui/avatar"
import { db } from "./lib/prisma"
import { BarbershopItem } from "./components/Barbershop-item"
import { Footer } from "./components/Footer"
import { TypeSearch } from "./components/TypeSearch"

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Ivolbene!</h2>
        <p>Terça feira, 06 de agosto.</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Search" />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="mt-6 flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
          <TypeSearch alt="Cabelo" src="/cabelo.svg" title="Cabelo" />
          <TypeSearch alt="Barba" src="/barba.svg" title="Barba" />
          <TypeSearch
            alt="Acabamento"
            src="/acabamento.svg"
            title="Acabamento"
          />
          <TypeSearch
            alt="Sobrancelha"
            src="/sobrancelha.svg"
            title="Sobrancelha"
          />
          <TypeSearch alt="Massagem" src="/massagem.svg" title="Massagem" />
          <TypeSearch
            alt="Hidratação"
            src="/hidratação.svg"
            title="Hidratação"
          />
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores com FSW Barber"
          />
        </div>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit bg-[#221C3D] text-[#8162FF]">
                Confirmado
              </Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm font-light">Vintage Barber</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-8">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">09:45</p>
            </div>
          </CardContent>
        </Card>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
