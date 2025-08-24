import { FC } from 'react'
import { pageQ44Href, pageTupperwareHref } from '../main.tsx'
import { Link } from 'react-router-dom'

export const MainPageContent: FC = () => {
  return (
    <section>
      <h1>Projects</h1>
      <GridSectionImage projCode='p1-tupperware' to={pageTupperwareHref} />
      <GridSectionImage projCode='p2-q44' to={pageQ44Href} />
    </section>
  )
}

export const GridSectionImage: FC<{
  projCode: string
  to?: string
}> = ({ projCode, to }) => {
  return (
    <div className='grid-section-image'>
      {to ? (
        <>
          <Link to={to} className={projCode} />
        </>
      ) : (
        <>
          <a className={projCode} />
        </>
      )}
    </div>
  )
}
