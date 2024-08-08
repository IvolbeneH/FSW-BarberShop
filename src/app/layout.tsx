import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { Footer } from "./components/Footer"
import { Toaster } from "./components/ui/sonner"
import { AuthProvider } from "./_providers/auth"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: "FSW Barber",
  description: "Site de gerenciamento de barbearias.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={nunito.className}>
        <AuthProvider>
          {children}
          <Footer />
          <Toaster richColors />
        </AuthProvider>
      </body>
    </html>
  )
}
