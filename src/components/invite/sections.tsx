import { useEffect, useState } from 'react'

import { CalendarPlus, Heart, Home, MapPin, Navigation } from 'lucide-react'

import {
  brideFamily,
  brideParents,
  calendarUrl,
  couple,
  events,
  family,
  groomFamily,
  groomParents,
  hashtag,
  mantra,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  residence,
  sunriseFarm,
  weddingDate,
  type Relative,
  type WeddingEvent,
} from '@/lib/wedding'

import { cn } from '@/lib/utils'
import { Divider, Petals, Reveal, cdn } from './primitives'

/* ---------------- Background ---------------- */

function Backdrop({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <img
        src={cdn(src, 1200)}
        srcSet={`${cdn(src, 640)} 640w, ${cdn(src, 1200)} 1200w, ${cdn(src, 1800)} 1800w`}
        sizes="100vw"
        alt=""
        className="ken-burns h-full w-full object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-transparent" />
    </div>
  )
}

/* ---------------- Royal Rajasthani Ornament ---------------- */
function LeafSprig({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-4 rounded-sm border border-[#D4AF62]/80',
        className,
      )}
    >
      <div className="absolute inset-[5px] rounded-sm border border-[#D4AF62]/45" />
    </div>
  )
}

/* ---------------- White Rose Decoration ---------------- */

function RoseCorner({ className }: { className?: string }) {
  return (
    <img
      src={cdn('/img/white-roses.png', 480)}
      alt=""
      aria-hidden
      className={cn(
        'pointer-events-none absolute drop-shadow-lg select-none',
        className,
      )}
    />
  )
}

/* ---------------- Envelope Opening ---------------- */

export function Opening() {
  const [opening, setOpening] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    document.body.style.overflow = gone ? '' : 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [gone])

  function open() {
    if (opening) return

    setOpening(true)
    window.setTimeout(() => setGone(true), 2000)
  }

  if (gone) return null

  return (
    <div
      className={cn(
        'envelope fixed inset-0 z-50 overflow-hidden transition-[opacity,transform] duration-700 motion-reduce:transition-none',
        opening && 'pointer-events-none translate-y-8 opacity-0 delay-[1100ms]',
      )}
      style={{ perspective: '1200px' }}
    >
      <div className="absolute inset-4 rounded-sm border border-white/40 sm:inset-6" />

      {/* <LeafSprig className="top-10 left-6 h-20 w-20" />
      <LeafSprig className="top-24 right-8 h-16 w-16 -scale-x-100" />
      <LeafSprig className="bottom-16 left-10 h-24 w-24 rotate-180 -scale-x-100" />
      <LeafSprig className="right-6 bottom-10 h-20 w-20 rotate-180" />
      <LeafSprig className="bottom-1/3 left-1/2 h-14 w-14 -translate-x-1/2 opacity-60" /> */}

      {/* Lower pocket folds */}
      <div
        className="absolute inset-0 bg-black/[0.04]"
        style={{
          clipPath: 'polygon(0 100%, 0 30%, 50% 62%, 100% 30%, 100% 100%)',
        }}
        aria-hidden
      />

      {/* Top flap */}
      <div
        className="envelope-flap absolute inset-x-0 top-0 h-[55%] bg-sage-deep/45 motion-reduce:transition-none"
        style={{
          transform: opening ? 'rotateX(180deg)' : undefined,
          boxShadow: '0 10px 30px rgb(0 0 0 / 0.15)',
        }}
        aria-hidden
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <p
          className={cn(
            'font-heading absolute top-[12%] text-sm tracking-[0.3em] text-white/90 uppercase transition-opacity duration-500',
            opening && 'opacity-0',
          )}
        >
          || Shree Ganeshaya Namah ||
        </p>

        <button
          onClick={open}
          aria-label="Open your invitation"
          className={cn(
            'wax-seal breathe mt-[10%] grid h-28 w-28 place-items-center rounded-full transition duration-700 focus-visible:ring-4 focus-visible:ring-white/70 focus-visible:outline-none motion-reduce:transition-none sm:h-32 sm:w-32',
            opening && 'scale-50 opacity-0',
          )}
        >
          <span className="font-names text-4xl text-cocoa sm:text-5xl">
            {couple.bride[0]}
            <span className="text-2xl">&</span>
            {couple.groom[0]}
          </span>
        </button>

        <div
          className={cn(
            'mt-8 transition-opacity duration-500',
            opening && 'opacity-0',
          )}
        >
          <p className="font-script text-5xl text-white drop-shadow sm:text-6xl">
            You’re Invited
          </p>

          <p className="font-heading mt-3 text-xs tracking-[0.3em] text-white/85 uppercase">
            Tap to open your invitation
          </p>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Invitation Card ---------------- */

export function InvitationCard() {
  return (
    <section className="relative flex min-h-svh flex-col items-center px-4 pt-10 pb-[48svh] sm:pt-16">
      <Backdrop src="/img/hero.jpg" />
      <Petals count={14} />

      <div className="sky-card relative mx-auto w-full max-w-xl rounded-[2rem] px-6 py-10 text-center sm:px-12">
        <Reveal>
          <img
            src={cdn('/img/ganesha.png', 240)}
            alt="Lord Ganesha within a marigold wreath"
            width={120}
            height={120}
            className="mx-auto h-40 w-40 rounded-full mix-blend-multiply sm:h-36 sm:w-36"
          />

          <p className="font-hindi mt-2 text-xl text-rust">
            {mantra.invocation}
          </p>

          <div className="font-hindi mt-3 space-y-1 text-lg leading-relaxed text-cocoa">
            {mantra.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Reveal>

        <Divider className="my-6" />

        <Reveal delay={150}>
          <p className="text-lg text-cocoa italic">With immense joy and love</p>

          <p className="font-heading mt-2 text-lg text-gold">{brideParents}</p>

          <p className="mt-2 text-lg text-cocoa italic">
            cordially invite you to the wedding of their daughter
          </p>
        </Reveal>

        <Reveal delay={250}>
          <h1 className="font-names mt-4 text-[clamp(2.25rem,11vw,4.5rem)] leading-tight whitespace-nowrap text-rust">
            {couple.brideFull}
          </h1>

          <p className="font-heading my-1 text-sm tracking-[0.4em] text-gold uppercase">
            with
          </p>

          <p className="font-names text-[clamp(2.25rem,11vw,4.5rem)] leading-tight whitespace-nowrap text-rust">
            {couple.groomFull}
          </p>

          <p className="mt-3 text-lg text-cocoa italic">son of</p>

          <p className="font-heading mt-1 text-lg text-gold">{groomParents}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Countdown ---------------- */

function useCountdown(target: Date) {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    const tick = () => setNow(Date.now())

    const first = window.setTimeout(tick, 0)
    const id = window.setInterval(tick, 1000)

    return () => {
      window.clearTimeout(first)
      window.clearInterval(id)
    }
  }, [])

  if (now === null) return null

  const diff = Math.max(0, target.getTime() - now)

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  }
}

/* ---------------- Reveal Date Card ---------------- */

function RevealCard() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="relative mx-auto h-36 w-full max-w-xs overflow-hidden rounded-2xl border border-gold/40 bg-ivory shadow-md">
      <div
        className={cn(
          'font-heading flex h-full flex-col items-center justify-center text-cocoa transition duration-700 motion-reduce:transition-none',
          !revealed && 'scale-90 opacity-0',
        )}
        aria-live="polite"
      >
        {revealed && (
          <>
            <span className="text-xs tracking-[0.4em] text-gold uppercase">
              Wednesday
            </span>

            <span className="mt-1 text-4xl text-rust">24 · 02 · 2027</span>

            <span className="mt-1 text-sm tracking-[0.2em]">
              {sunriseFarm.name}
            </span>
          </>
        )}
      </div>

      <button
        type="button"
        onClick={() => setRevealed(true)}
        disabled={revealed}
        aria-label="Tap to reveal the wedding date"
        className="group absolute inset-0 flex cursor-pointer focus-visible:ring-4 focus-visible:ring-rust/40 focus-visible:outline-none disabled:pointer-events-none"
      >
        {(['left', 'right'] as const).map((side) => (
          <span
            key={side}
            aria-hidden
            className={cn(
              'gold-foil h-full w-1/2 transition-transform duration-1000 ease-in-out motion-reduce:transition-none',
              side === 'left' ? 'origin-left' : 'origin-right',
              revealed &&
                (side === 'left' ? '-translate-x-full' : 'translate-x-full'),
            )}
          />
        ))}

        <span
          aria-hidden
          className={cn(
            'absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-300',
            revealed && 'opacity-0',
          )}
        >
          <span className="breathe grid h-14 w-14 place-items-center rounded-full border border-cocoa/30 bg-ivory/70 shadow-md transition group-hover:scale-105 motion-reduce:transition-none">
            <Heart className="h-6 w-6 fill-rust text-rust" />
          </span>

          <span className="font-heading text-base text-cocoa italic">
            Tap to reveal
          </span>
        </span>
      </button>
    </div>
  )
}

/* ---------------- Save The Date ---------------- */

export function SaveTheDate() {
  const left = useCountdown(weddingDate)

  const units: [string, number | undefined][] = [
    ['Days', left?.days],
    ['Hours', left?.hours],
    ['Minutes', left?.minutes],
    ['Seconds', left?.seconds],
  ]

  return (
    <section className="paper relative overflow-hidden px-4 py-20 text-center">
      <Reveal>
        <p className="font-script text-6xl text-rust sm:text-7xl">
          Save the date
        </p>

        <p className="mt-2 text-xl text-cocoa italic">
          {couple.bride} & {couple.groom} are getting married
        </p>

        <Divider className="my-8" />
      </Reveal>

      <Reveal delay={100}>
        <RevealCard />
      </Reveal>

      <Reveal
        delay={200}
        className="mx-auto mt-10 grid max-w-md grid-cols-4 gap-2 sm:gap-3"
      >
        {units.map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border border-gold/30 bg-white/70 px-1 py-3 shadow-sm"
          >
            <div className="font-heading text-3xl text-rust tabular-nums">
              {value === undefined ? '–' : String(value).padStart(2, '0')}
            </div>

            <div className="mt-1 text-xs tracking-widest text-cocoa uppercase">
              {label}
            </div>
          </div>
        ))}
      </Reveal>

      <Reveal delay={300}>
        <a
          href={calendarUrl}
          target="_blank"
          rel="noreferrer"
          className="font-heading mt-8 inline-flex items-center gap-2 rounded-full bg-sage-deep px-6 py-3 text-xs tracking-[0.2em] text-white uppercase transition hover:bg-cocoa motion-reduce:transition-none"
        >
          <CalendarPlus className="h-4 w-4" />
          Add to calendar
        </a>
      </Reveal>
    </section>
  )
}

/* ---------------- Events ---------------- */

export function Events() {
  return (
    <section id="events" aria-labelledby="events-heading">
      <div className="envelope px-4 py-14 text-center text-white">
        <Reveal>
          <p className="font-hindi text-xl text-white/90">मंगल कार्यक्रम</p>

          <h2
            id="events-heading"
            className="font-script mt-1 text-6xl sm:text-7xl"
          >
            Wedding Events
          </h2>

          <p className="mt-2 text-lg text-white/85 italic">
            Two days of rituals, colour and celebration
          </p>
        </Reveal>
      </div>

      <div className="paper flex flex-col gap-10 py-10 sm:gap-14 sm:py-14">
        {events.map((event, i) => (
          <EventPanel key={event.id} event={event} index={i} />
        ))}
      </div>
    </section>
  )
}

function EventPanel({ event, index }: { event: WeddingEvent; index: number }) {
  const atFarm = event.venue === 'farm'
  const place = atFarm ? sunriseFarm.name : residence.name

  return (
    <article className="relative mx-auto flex min-h-svh w-full max-w-5xl flex-col items-center overflow-hidden px-4 pt-12 pb-[48svh] shadow-lg sm:rounded-[2rem]">
      <Backdrop src={event.image} />

      <Reveal className="sky-card relative w-full max-w-xl rounded-[2rem] px-6 py-10 text-center sm:px-10">
        <p className="font-heading text-sm tracking-[0.35em] text-gold uppercase sm:text-base">
          {String(index + 1).padStart(2, '0')} · {event.day}
        </p>

        <p className="font-hindi mt-4 text-2xl text-rust/90 sm:text-3xl">
          {event.hindi}
        </p>

        <h3 className="font-script mt-1 text-7xl leading-tight text-rust sm:text-8xl">
          {event.name}
        </h3>

        <p className="font-heading mt-4 text-2xl tracking-wide text-cocoa sm:text-3xl">
          {event.date}
        </p>

        <p className="mt-2 inline-flex items-center gap-2 text-2xl text-cocoa italic">
          {atFarm ? (
            <MapPin className="h-5 w-5" />
          ) : (
            <Home className="h-5 w-5" />
          )}

          {place}
        </p>

        {atFarm && (
          <p className="mx-auto mt-1 max-w-sm text-lg text-cocoa">
            {sunriseFarm.address}
          </p>
        )}

        <p className="mt-6 text-xl leading-relaxed text-cocoa sm:text-2xl">
          {event.blurb}
        </p>
      </Reveal>
    </article>
  )
}

/* ---------------- Venue ---------------- */

export function Venue() {
  return (
    <section id="venue" className="paper flex flex-col items-center px-4 py-20">
      <Reveal className="relative w-full max-w-xl rounded-[2rem] p-6 text-center sm:p-8">
        <p className="font-hindi text-xl text-rust/90">विवाह स्थल</p>

        <h2 className="font-script text-6xl leading-tight text-rust">
          Where We Celebrate
        </h2>

        <h3 className="font-heading mt-3 text-2xl text-cocoa">
          {sunriseFarm.name}
        </h3>

        <p className="mx-auto mt-1 max-w-sm text-lg leading-snug text-cocoa">
          {sunriseFarm.address}
        </p>

        <div className="mt-5 overflow-hidden rounded-2xl border-4 border-white shadow-md">
          <iframe
            title="Map to Sunrise Farm, Ludhiana"
            src={mapsEmbedUrl}
            className="h-64 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          href={mapsDirectionsUrl}
          target="_blank"
          rel="noreferrer"
          className="font-heading mt-5 inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3 text-xs tracking-[0.2em] text-white uppercase transition hover:bg-cocoa motion-reduce:transition-none"
        >
          <Navigation className="h-4 w-4" />
          Get directions
        </a>

        <p className="mt-5 border-t border-gold/30 pt-4 text-base text-cocoa italic">
          Ganesh Pooja, Mama Swagat, Mehndi & Haldi on 23 February 2027 will be
          celebrated at our residence.
        </p>
      </Reveal>
    </section>
  )
}

/* ---------------- Families ---------------- */

export function Families() {
  return (
    <section className="paper px-4 py-20 text-center">
      <Reveal>
        <h2 className="font-script text-6xl text-rust sm:text-7xl">
          The Families
        </h2>

        <Divider className="mt-5" />
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
        {(
          [
            ['Bride’s Family', brideFamily],
            ['Groom’s Family', groomFamily],
          ] as const
        ).map(([title, relatives], i) => (
          <Reveal key={title} delay={i * 150}>
            <div className="h-full rounded-[2rem] border border-gold/30 bg-white/70 px-6 py-8 shadow-sm">
              <p className="font-heading text-xs tracking-[0.4em] text-gold uppercase">
                {title}
              </p>

              <Relatives people={relatives} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Relatives({ people }: { people: readonly Relative[] }) {
  return (
    <ul className="mt-5 space-y-2 border-t border-gold/30 pt-5">
      {people.map((person) => (
        <li key={person.name}>
          <span className="font-heading text-lg text-cocoa">{person.name}</span>

          <span className="block text-sm tracking-[0.2em] text-gold uppercase">
            {person.relation}
          </span>
        </li>
      ))}
    </ul>
  )
}

/* ---------------- Footer ---------------- */

export function Closing() {
  return (
    <footer className="envelope relative overflow-hidden px-6 py-20 text-center text-white">
      <Petals count={10} />

      {/* <LeafSprig className="top-6 left-4 h-20 w-20" />
      <LeafSprig className="right-4 bottom-6 h-20 w-20 rotate-180" /> */}

      <Reveal className="relative">
        <p className="font-hindi text-2xl">आपके आगमन की प्रतीक्षा में</p>

        <p className="font-names mt-2 text-5xl sm:text-6xl">
          Awaiting your noble presence
        </p>

        <p className="mt-8 text-lg text-white/85 italic">
          With best compliments from
        </p>

        <p className="font-heading mt-1 text-2xl">{family}</p>

        <p className="font-heading mt-2 text-sm tracking-wide text-white/85">
          {brideParents}
        </p>

        <p className="font-heading mt-10 text-xs tracking-[0.4em] text-white/80 uppercase">
          {hashtag}
        </p>
      </Reveal>
    </footer>
  )
}
