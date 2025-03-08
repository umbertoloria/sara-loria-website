import { FC } from 'react'
import { BaseLayout } from '../layout/BaseLayout.tsx'
import portraitImage from '../assets/portrait.png'

export default function HomePage() {
  return (
    <BaseLayout>
      <InnerPage />
    </BaseLayout>
  )
}

const PortfolioPortrait: FC = () => {
  return (
    <div
      className="flex flex-wrap flex-col justify-center"
    >
      <img
        src={portraitImage}
        alt="Portfolio"
        className="rounded-full mt-20 mr-6"
        style={{
          overflow: 'hidden',
          objectFit: 'cover',
          width: 230,
          height: 230,
          boxShadow: '0 0 0 16px rgba(0, 0, 0, .3)',
        }}
      />
    </div>
  )
}

const InnerPage: FC = () => {
  return (
    <div className="mx-auto pt-32 text-center">
      <div
        className="flex flex-wrap gap-5 mx-auto"
        style={{
          width: 800,
        }}
      >
        <PortfolioPortrait />
        <div className="pr-24">
          <h1
            className="mt-32 text-7xl font-bold text-indigo-50"
            style={{
              textShadow: '5px 5px 0 rgba(0, 0, 0, .3)',
            }}
          >
            Sara Loria
          </h1>
          <p
            className="mt-12 text-3xl font-bold text-indigo-50"
            style={{
              textShadow: '2px 2px 0 rgba(0, 0, 0, .3)',
              textTransform: 'uppercase',
              letterSpacing: 3,
            }}
          >
            Visual Designer
          </p>
        </div>
      </div>
    </div>
  )
}
