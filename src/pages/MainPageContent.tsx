import { FC } from 'react'
import { pageTupperwareHref } from '../main.tsx'

export const MainPageContent: FC = () => {
  return (
    <section className="grid-section">
      <h1>Projects</h1>
      <GridSectionImage projCode="p1-tupperware" href={pageTupperwareHref} />
      <GridSectionImage projCode="p2-q44" href="." />
    </section>
  )
}

export const GridSectionImage: FC<{
  projCode: string
  href: string
}> = ({ projCode, href }) => {
  return (
    <div className="grid-section-image">
      <a href={href} className={projCode} />
    </div>
  )
}
