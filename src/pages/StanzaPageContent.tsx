import { FC } from 'react'
import { GridSectionImage } from './MainPageContent.tsx'
import { GridReal } from '../components/GridReal.tsx'
import { SectionReal } from '../components/SectionReal.tsx'

export const StanzaPageContent: FC = () => {
  return (
    <>
      <section>
        <h1 className='lead'>Stanza</h1>
        <h2>Graphic Design laboratory</h2>
        <GridSectionImage projCode='p3-stanza' />
        <div className='line' />
        <h1>concept</h1>
        <p>
          Born in London during the cultural upheaval of the 1960s, this
          community emerged as a response to the growing dominance of record
          labels and the uniformity they imposed on artists. Its mission has
          always been clear: to champion independent music and preserve artistic
          freedom against the pressures of the mainstream.
        </p>
        <div className='line' />
        <SectionReal>
          <img src='stanza/sec0n0.jpg' alt='Poster' />
        </SectionReal>
        <p>
          From jam sessions and live concerts to open mic nights, it continues
          to celebrate music not only as art, but as a way of connecting people
          and building lasting scenes.
        </p>
        <GridReal>
          <img src='stanza/grid0n0.jpg' alt='Custom guitar picks' />
          <img src='stanza/grid0n1.jpg' alt='Hat with logo' />
          <img src='stanza/grid0n2.jpeg' alt='T-shirt with logo' />
          <img src='stanza/grid0n3.jpeg' alt='Cards with logo' />
        </GridReal>
        <p>
          The flower, this its many petals - close to one another yet each rich
          in its own individuality - perfectly symbolizes the spirit of this
          community. It embodies unity without uniformity, strength born from
          diversity. Every petal represents an artist, a voice, an idea, all
          contributing to a collective bloom.
        </p>
      </section>
    </>
  )
}
