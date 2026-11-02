import Hero from '@/components/sections/home/Hero'
import Intro from '@/components/sections/home/Intro'
import PracticeBand from '@/components/sections/home/PracticeBand'
import Stages from '@/components/sections/home/Stages'
import Programmes from '@/components/sections/home/Programmes'
import Moments from '@/components/sections/home/Moments'
import Locations from '@/components/sections/home/Locations'
import Closing from '@/components/sections/home/Closing'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <PracticeBand />
      <Stages />
      <Programmes />
      <Moments />
      <Closing />
      <Locations />
    </>
  )
}
