"use client"

import { useSession } from "next-auth/react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export function UserName() {
  const dataAtual = new Date()

  const dataFormatada = format(dataAtual, "EEEE, dd 'de' MMMM.", {
    locale: ptBR,
  })
  const dataFinal =
    dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1)

  const { data } = useSession()
  return (
    <>
      {data?.user ? (
        <h2 className="text-xl">
          Olá, <span className="font-bold">{data?.user?.name}!</span>
        </h2>
      ) : (
        <h2 className="text-xl">
          Olá, <span className="font-bold">faça seu login!</span>
        </h2>
      )}
      <p>{dataFinal}</p>
    </>
  )
}
