import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import { cardData } from '@/data/data'
import Footer from '@/components/Footer'
import TypeAnimationComponent from '@/components/TypeAnimationComponent'

export default function Home() {
  const renderCards = () => (
    cardData.map(data => (
      <Card
        key={data.id}
        background={data.background}
        icon={data.icon}
        title={data.title}
        tag={data.tag}
      />
    ))
  )

  return (
    <>
      <Navbar />
      <main className='sm:px-32 px-12 py-7 flex flex-col h-full'>
        <div className='h-7'>
          <TypeAnimationComponent />
        </div>
        <div className='flex pt-10 flex-wrap gap-10 justify-center'>
          {renderCards()}
        </div>
      </main>
      <Footer />
    </>
  )
}
