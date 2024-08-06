import Image from "next/image"
import { Button } from "./ui/button"

interface TypeSearchProps {
  alt: string
  title: string
  src: string
}

export function TypeSearch({ alt, title, src }: TypeSearchProps) {
  return (
    <Button
      className="flex gap-2 bg-[#1A1B1F] px-6 hover:bg-zinc-800"
      variant="secondary"
    >
      <Image src={src} alt={alt} width={16} height={16} />
      <span className="font-normal">{title}</span>
    </Button>
  )
}
