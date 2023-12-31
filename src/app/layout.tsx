import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/template/header'
import Navigation from '@/components/template/navigation'
import Footer from '@/components/template/footer'

const inter = Inter({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
