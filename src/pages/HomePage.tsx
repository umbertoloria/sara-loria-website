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
  return (
    <div>
      <Header />
      <GridSection />
    </div>
  )
}

const Header: FC = () => {
  return (
    <div className='header'>
      <Menu />
      <ImaVisual />
    </div>
  )
}

const Menu: FC = () => {
  return (
    <div className='menu'>
      <ul>
        <MenuItem label='about me.' />
        <MenuItem label='projects.' />
        <MenuItem label='contact.' />
      </ul>
    </div>
  )
}

const MenuItem: FC<{
  label: string
}> = ({ label }) => {
  return (
    <li>
      <a>{label}</a>
    </li>
  )
}

const ImaVisual: FC = () => {
  return (
    <div className='ima-visual'>
      <div className='ima-visual-title'>
        I'm Sara Loria.
        <br />
        I'm a <span>visual designer</span>.
      </div>
      <p className='ima-visual-text'>
        Powered by iced coffee, happy playlists, and the thrill of turning ideas
        into something people can see and get excited about.
      </p>
    </div>
  )
}

const GridSection: FC = () => {
  return (
    <section className='grid-section'>
      <h1>Projects</h1>
      <GridSectionImage projCode='p1-tupperware' />
      <GridSectionImage projCode='p2-q44' />
    </section>
  )
}

const GridSectionImage: FC<{
  projCode: string
}> = ({ projCode }) => {
  return (
    <div className='grid-section-image'>
      <a href='#' className={projCode} />
    </div>
  )
}
