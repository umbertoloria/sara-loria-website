import { FC } from 'react'
import { pageTupperwareHref, pageQ44Href } from '../main.tsx'
import { Link } from 'react-router-dom'

export const MainPageContent: FC = () => {
  return (
    <section className='grid-section'>
      <h1>Projects</h1>
      <GridSectionImage projCode='p1-tupperware' to={pageTupperwareHref} />
      <GridSectionImage projCode='p2-q44' to={pageQ44Href} />
    </section>
  )
}

export const GridSectionImage: FC<{
  projCode: string
  to: string
}> = ({ projCode, to }) => {
  return (
    <div className='grid-section-image'>
      <Link to={to} className={projCode} />
    </div>
  )
}
