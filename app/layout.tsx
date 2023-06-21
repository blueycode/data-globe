import Nav from './components/Nav'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: "Data Globe - Explore the World's Wonders",
  description: "Explore the World's Wonders",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main
          className="bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen py-8 px-56"
        >
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
