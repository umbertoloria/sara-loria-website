import { FC } from 'react'
import { pageTupperwareHref } from '../main.tsx'
import { GridSectionImage } from './MainPageContent.tsx'

export const TupperwarePageContent: FC = () => {
  return (
    <>
      <section>
        <h1 className='lead'>Tupperware rebranding</h1>
        <h2>Brand Design laboratory</h2>
        <GridSectionImage projCode='p1-tupperware' to={pageTupperwareHref} />
        <div className='line' />
        <h1>concept</h1>
        <p>
          Tupperware's rebrand speaks directly to a new generation of young,
          conscious consumers. Long known for quality, durability, and bringing
          people together, the brand is determined to keep these values alive
          while reimagining itself as a champion of sustainability, that takes
          care of the planet, and the people who call it home. Tupperware's
          renewed vision invites customers to join heathy choices for a better
          future.
        </p>
        <div className='line' />
        <GridImages1 />
        <p>
          Tupperware is embracing a new chapter, moving beyond the traditional
          door-to-door model that once defined its success. By stepping into
          physical retail and partnering with trusted local outlets, the brand
          is breaking down barriers between people and products, making its
          designs more accessible then ever. This evolution isn't just about
          where is sold, it's about how it connects: immediate, visible, and
          aligned with the way consumers shop today.
        </p>
        <div className='line' />
        <GridImages2 />
      </section>
    </>
  )
}

const GridImages1: FC = () => {
  return (
    <div className='grid-real'>
      <img src='tupperware/grid0n0.jpg' alt='Open package' />
      <img src='tupperware/grid0n1.jpg' alt='Multiple boxes' />
      <img src='tupperware/grid0n2.jpg' alt='Showcase box' />
      <img src='tupperware/grid0n3.jpg' alt='Three boxes' />
    </div>
  )
}

const GridImages2: FC = () => {
  return (
    <div className='grid-real'>
      <img src='tupperware/grid1n0.jpg' alt='Mock-up logo' />
      <img src='tupperware/grid1n1.jpg' alt='Mock-up poster' />
    </div>
  )
}
