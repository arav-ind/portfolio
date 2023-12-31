import Card from '@/components/Card'
import { cardData } from '@/data/data'
import TypeAnimationComponent from '@/components/TypeAnimationComponent'

export default function Home() {
  const renderCards = () => (
    cardData.map(data => (
      <Card
        key={data.id}
        id={data.id}
        background={data.background}
        icon={data.icon}
        title={data.title}
        tag={data.tag}
      />
    ))
  )

  return (
    <main className='sm:px-32 px-12 py-7 flex flex-col h-full'>
      <div className='h-7 flex md:justify-start justify-center cursor-pointer'>
        <TypeAnimationComponent />
      </div>
      <div className='flex py-10 flex-wrap gap-10 justify-center items-center'>
        {renderCards()}
      </div>
    </main>
  )
}
