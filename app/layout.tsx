import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'
import { Header } from '@/components/layout/header'

const font = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Magik Blog',
  description: 'The best blog in the world!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen w-screen flex flex-col gap-6 px-24 py-6">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
