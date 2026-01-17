import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@boldmind/ui'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PlanAI Suite - AI Business Automation',
  description: 'Complete AI business stack for Nigerian entrepreneurs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider forceProductSlug="planai">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}