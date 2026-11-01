import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { NotFoundPage } from '@/components/error-pages'

import '../styles.css'

const siteName = 'Ashkanda weds Rohit · 24 February 2027'
const siteDescription =
  'Smt. Sangita Sharma & Sh. Ram Chand Sharma cordially invite you to the wedding of their daughter Ashkanda with Rohit on 24 February 2027 at Sunrise Farm, Ludhiana.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Great+Vibes&family=Alex+Brush&family=Tiro+Devanagari+Hindi&display=swap',
      },
      {
        rel: 'icon',
        href: import.meta.env.DEV
          ? '/img/ganesha.png'
          : '/.netlify/images?url=/img/ganesha.png&w=64&h=64&fm=png',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFoundPage,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
        <Scripts />
      </body>
    </html>
  )
}
