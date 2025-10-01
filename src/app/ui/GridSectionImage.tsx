import { FC } from 'react'
import { Link } from 'react-router-dom'

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
