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

const ImgPortfolioPortrait: FC = () => {
  return <img className='img-portfolio' src={portraitImage} alt='Portfolio' />
}

const InnerPage: FC = () => {
  return (
    <div className='header'>
      <div className='header-flex'>
        <ImgPortfolioPortrait />
        <div className='md:pl-20 md:text-left'>
          <div className='mt-16 md:mt-0'>
            <h1 className='font-bold text-gray-600'>
              Sara
              <br />
              Loria
            </h1>
            <p
              className='mt-12 mb-8 font-bold text-gray-500
                text-2xl md:text-4xl'
              style={{
                textShadow: '2px 2px 0 rgba(0, 0, 0, .15)',
                letterSpacing: 2,
              }}
            >
              Portfolio | Visual Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
