import { TypeSearch } from "./TypeSearch"

export function SearchFilter() {
  return (
    <div className="mt-6 flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
      <TypeSearch alt="Cabelo" src="/cabelo.svg" title="Cabelo" />
      <TypeSearch alt="Barba" src="/barba.svg" title="Barba" />
      <TypeSearch alt="Acabamento" src="/acabamento.svg" title="Acabamento" />
      <TypeSearch
        alt="Sobrancelha"
        src="/sobrancelha.svg"
        title="Sobrancelha"
      />
      <TypeSearch alt="Massagem" src="/massagem.svg" title="Massagem" />
      <TypeSearch alt="Hidratação" src="/hidratação.svg" title="Hidratação" />
    </div>
  )
}
