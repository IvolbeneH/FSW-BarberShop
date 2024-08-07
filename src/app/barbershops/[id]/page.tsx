import { PhoneItem } from "@/app/components/Phone-item"
import { ServiceItem } from "@/app/components/Service-item"
import { SidebarSheet } from "@/app/components/Sidebar-sheet"
import { Button } from "@/app/components/ui/button"
import { Sheet, SheetTrigger } from "@/app/components/ui/sheet"
import { db } from "@/app/lib/prisma"
import {
  ChevronLeft,
  MapPin,
  MenuIcon,
  SmartphoneIcon,
  Star,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

export default async function BarbershopPage({ params }: BarbershopPageProps) {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })
  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      {/* IMAGEM */}
      <div className="relative h-[250px]">
        <Image
          src={barbershop?.imageUrl}
          alt={barbershop.name}
          className="object-cover"
          fill
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeft />
          </Link>
        </Button>
      </div>
      {/* TITULO */}
      <div className="flex flex-col gap-4 border-b border-solid p-6">
        <h1 className="text-2xl font-bold">{barbershop?.name}</h1>
        <div className="flex items-center gap-2">
          <MapPin className="text-primary" size={18} />
          <p>{barbershop?.address}</p>
        </div>
        <div className="flex items-center gap-2">
          <Star className="fill-primary text-primary" size={18} />
          <p className="text-sm font-normal">5,0 (889 avaliações)</p>
        </div>
      </div>
      {/* DESCRIÇÃO */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-sm font-bold uppercase text-gray-400">Sobre nós</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>
      {/* SERVIÇOS */}
      <div className="flex flex-col gap-4 p-5">
        <h2 className="text-sm font-bold uppercase text-gray-400">Serviços</h2>
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
      {/* PHONE */}
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem phone={phone} key={phone} />
        ))}
      </div>
    </div>
  )
}
