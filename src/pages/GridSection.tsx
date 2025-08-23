import { FC } from 'react'

export const GridSection: FC = () => {
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
