import { Card, CardContent } from "./ui/card"

export function Footer() {
  return (
    <footer>
      <Card className="rounded-none">
        <CardContent className="px-5 py-6">
          <span className="text-gray-400">
            © 2023 Copyright <span className="font-bold">FSW Barber</span>
          </span>
        </CardContent>
      </Card>
    </footer>
  )
}
