import { createFileRoute } from '@tanstack/react-router'

import {
  Closing,
  Events,
  Families,
  InvitationCard,
  Opening,
  SaveTheDate,
  Venue,
} from '@/components/invite/sections'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="overflow-x-hidden">
      <Opening />
      <div>
        <InvitationCard />
        <SaveTheDate />
        <Events />
        <Venue />
        <Families />
        <Closing />
      </div>
    </main>
  )
}
