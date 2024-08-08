import { SearchIcon } from "lucide-react"
import { Header } from "./components/Header"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import Image from "next/image"
import { db } from "./lib/prisma"
import { BarbershopItem } from "./components/Barbershop-item"
import { BookingItem } from "./components/Booking-item"
import { quickSearchOption } from "./_constants/search"
import { UserName } from "./components/User-name"
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
      <div>
        <div className="p-5 lg:h-[460px] lg:w-full lg:bg-[url('/fundopc.png')] lg:bg-cover lg:bg-center lg:p-0">
          <div>
            <UserName />
          </div>
          <div className="mt-6 flex items-center gap-2">
            <Input placeholder="Search" />
            <Button>
              <SearchIcon />
            </Button>
          </div>
          <div className="mt-6 flex gap-3 overflow-x-scroll lg:hidden [&::-webkit-scrollbar]:hidden">
            {quickSearchOption.map((option) => (
              <Button
                className="flex gap-2 bg-[#1A1B1F] px-6 hover:bg-zinc-800"
                variant="secondary"
              >
                <Image
                  src={option.imageUrl}
                  alt={option.title}
                  width={16}
                  height={16}
                />
                <span className="font-normal">{option.title}</span>
              </Button>
            ))}
          </div>
          <div className="relative mt-6 h-[150px] w-full lg:hidden">
            <Image
              src="/banner-01.png"
              fill
              className="rounded-xl object-cover"
              alt="Agende nos melhores com FSW Barber"
            />
          </div>
          <BookingItem />
        </div>
        {/* DIVISÃO */}
        <div className="px-5 pb-5">
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
      </div>
    </div>
  )
}
