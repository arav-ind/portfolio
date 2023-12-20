import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Modal from '@/components/Modal'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aravind D | Software Engineer',
  description: `Experienced Software Engineer specializing in the development of 
  sophisticated applications catering to a substantial user base.`,
  icons: {
    icon: [
      '/favicon.ico?v=4',
    ],
    apple: [
      'apple-touch-icon.png?v=4'
    ],
    shortcut: [
      'apple-touch-icon.png'
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} min-h-screen no-scrollbar`}>
        <Modal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
