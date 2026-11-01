import { useEffect, useRef, useState, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

/** Serve originals through the Netlify Image CDN at a sensible width. */
export function cdn(path: string, width: number) {
  if (import.meta.env.DEV) return path

  return `/.netlify/images?url=${encodeURIComponent(path)}&w=${width}&fm=webp&q=80`
}

/** Fades children in when they scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/** Gold ornamental divider. */
export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-3 text-gold',
        className,
      )}
      aria-hidden
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold sm:w-24" />
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c.6 3.2 2.3 5.6 5 7-2.7 1.4-4.4 3.8-5 7-.6-3.2-2.3-5.6-5-7 2.7-1.4 4.4-3.8 5-7Z" />
        <circle cx="12" cy="20" r="1.6" />
        <circle cx="4" cy="9" r="1.2" />
        <circle cx="20" cy="9" r="1.2" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold sm:w-24" />
    </div>
  )
}

/** Corner flourish for ornate frames. */
export function Corner({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={cn('absolute h-10 w-10 text-gold sm:h-14 sm:w-14', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <path d="M2 58V20C2 10 10 2 20 2h38" />
      <path d="M8 58V24c0-9 7-16 16-16h34" opacity=".6" />
      <circle cx="20" cy="20" r="4" />
      <path d="M20 12c3 3 3 13 0 16M12 20c3-3 13-3 16 0" opacity=".7" />
    </svg>
  )
}

const PETAL_COLORS = ['#f4a7b9', '#f7c6d0', '#e88aa0', '#fbd5a5', '#f9b8c5']

/** Gently falling marigold and rose petals. Deterministic so SSR and client match. */
export function Petals({ count = 18 }: { count?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {Array.from({ length: count }, (_, i) => {
        const left = (i * 37) % 100
        const duration = 9 + ((i * 7) % 8)
        const delay = (i * 1.3) % 10
        const drift = ((i % 5) - 2) * 30
        return (
          <span
            key={i}
            className="petal"
            style={
              {
                left: `${left}%`,
                background: PETAL_COLORS[i % PETAL_COLORS.length],
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                '--drift': `${drift}px`,
                transform: 'translateY(-10vh)',
              } as React.CSSProperties
            }
          />
        )
      })}
    </div>
  )
}
