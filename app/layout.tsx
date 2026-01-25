import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Aryan Srivatsava - AI Automation Portfolio',
  description: 'AI Automation Engineer & Product Builder | 2+ years experience in AI automation, workflows, and internal tools | Master\'s in Computer Science | Specializing in IT operations, HR/recruiting, sales & marketing automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

