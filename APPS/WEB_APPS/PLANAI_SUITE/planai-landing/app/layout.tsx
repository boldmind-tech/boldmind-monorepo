import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider, ErrorBoundary } from '@boldmind/ui'
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
      <meta name="yandex-verification" content="c0693f1167b9c72e" />
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider forceProductSlug="planai">
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}