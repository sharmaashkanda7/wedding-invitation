// All invitation copy lives here so names, dates and venues can be edited in one place.

export const couple = {
  bride: 'Ashkanda',
  brideFull: 'Ashkanda Sharma',
  groom: 'Rohit',
  groomFull: 'Rohit Jadon',
}

export const brideParents = 'Smt. Sangita Sharma & Sh. Ram Chand Sharma'
export const groomParents = 'Smt. Anita Devi & Sh. Ajay Pal Singh'
export const family = 'Sharma Family'

export type Relative = { name: string; relation: string }

export const brideFamily: Relative[] = [
  { name: 'Sangita Sharma', relation: 'Mother' },
  { name: 'Ram Chand Sharma', relation: 'Father' },
  { name: 'Aniket Sharma', relation: 'Brother' },
]

export const groomFamily: Relative[] = [
  { name: 'Anita Devi', relation: 'Mother' },
  { name: 'Ajay Pal Singh', relation: 'Father' },
  { name: 'Yogita Arora', relation: 'Sister' },
  { name: 'Shubham Arora', relation: 'Brother-in-law' },
  { name: 'Kimaya', relation: 'Niece' },
]
export const hashtag = '#AshkandaWedsRohit'

export const mantra = {
  invocation: '॥ श्री गणेशाय नमः ॥',
  lines: [
    'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।',
    'निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥',
  ],
}

export const residence = {
  name: 'Our Residence',
  address: 'Sharma Residence',
}

export const sunriseFarm = {
  name: 'Sunrise Farm',
  address: 'NH 5, VPO, Chandigarh Rd, Jandiali, Ludhiana, Punjab 141123, India',
}

// Search by place name so Google opens the Sunrise Farm listing with its
// address and a Directions button, instead of an unlabelled pin.
export const mapsPlace = encodeURIComponent(
  'Sunrise Farm, Jandiali, Ludhiana, Punjab 141123',
)
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsPlace}&output=embed`
export const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsPlace}`

// Wedding day, local time in India (IST, UTC+05:30).
export const weddingDate = new Date('2027-02-24T00:00:00+05:30')

export type WeddingEvent = {
  id: string
  name: string
  hindi: string
  date: string
  day: string
  venue: 'residence' | 'farm'
  blurb: string
  /** Painted backdrop for the event's full-screen panel. */
  image: string
}

export const events: WeddingEvent[] = [
  {
    id: 'ganesh-pooja',
    name: 'Ganesh Pooja',
    hindi: 'गणेश पूजन',
    date: '23 February 2027',
    day: 'Tuesday',
    venue: 'residence',
    blurb:
      'We begin the celebrations by seeking the blessings of Lord Ganesha, the remover of obstacles.',
    image: '/img/ganesh.jpg',
  },
  {
    id: 'mama-swagat',
    name: 'Mama Swagat',
    hindi: 'मामा स्वागत',
    date: '23 February 2027',
    day: 'Tuesday',
    venue: 'residence',
    blurb:
      "A warm, joyous welcome for the bride's maternal uncles and their family as they arrive with love and blessings.",
    image: '/img/mama.jpg',
  },
  {
    id: 'mehndi',
    name: 'Mehndi',
    hindi: 'मेहंदी',
    date: '23 February 2027',
    day: 'Tuesday',
    venue: 'residence',
    blurb:
      'An evening of henna, music and dance as the bride’s hands bloom with intricate designs.',
    image: '/img/mehndi.jpg',
  },
  {
    id: 'haldi',
    name: 'Haldi',
    hindi: 'हल्दी',
    date: '23 February 2027',
    day: 'Tuesday',
    venue: 'residence',
    blurb:
      'Turmeric, laughter and marigolds — a golden ceremony to bless the bride with radiance.',
    image: '/img/haldi.jpg',
  },
  {
    id: 'wedding',
    name: 'Shubh Vivah',
    hindi: 'शुभ विवाह',
    date: '24 February 2027',
    day: 'Wednesday',
    venue: 'farm',
    blurb:
      'Ashkanda and Rohit take the seven sacred pheras and begin their journey together. Your presence will make it complete.',
    image: '/img/wedding.jpg',
  },
]

export const calendarUrl = (() => {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Wedding of Ashkanda & Rohit',
    dates: '20270224/20270225',
    details: `${brideParents} cordially invite you to the wedding of their daughter ${couple.brideFull} with ${couple.groomFull}.`,
    location: `${sunriseFarm.name}, ${sunriseFarm.address}`,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
})()
