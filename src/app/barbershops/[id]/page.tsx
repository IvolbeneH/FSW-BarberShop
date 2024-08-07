import { Button } from "@/app/components/ui/button"
import { db } from "@/app/lib/prisma"
import { ChevronLeft, MapPin, MenuIcon, Star } from "lucide-react"
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
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
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
      {/* ENDEREÇO / AVALIAÇÕES */}
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
    </div>
  )
}
