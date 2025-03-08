import { FC } from 'react'
import { BaseLayout } from '../layout/BaseLayout.tsx'

export default function HomePage() {
  return (
    <BaseLayout>
      <InnerPage />
    </BaseLayout>
  )
}

const InnerPage: FC = () => {
  return <section className='p-8'>Sara Loria</section>
}
