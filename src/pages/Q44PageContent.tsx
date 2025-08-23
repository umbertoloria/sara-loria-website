import { FC } from 'react'
import { pageQ44Href } from '../main.tsx'
import { GridSectionImage } from './MainPageContent.tsx'

export const Q44PageContent: FC = () => {
  return (
    <>
      <section className="grid-section">
        <h1>Q44</h1>
        <h2>Graphic Languages laboratory</h2>
        <GridSectionImage projCode="p2-q44" to={pageQ44Href} />
        <div className="line" />
        <h1>concept</h1>
        <p>
          Created to keep alive the memory of the Quadraro, a Roman neighborhood
          that became a symbol of resistance during World War II. It is a
          journey through the sites of the roundup of April 17, 1944, places
          transformed over time, yet still marked by the echoes of what happened
          there. It is an invitation to listen to the voices of those who
          resisted, to be moved by their strength, and to recognize that
          collective memory is the key to understanding the present and shaping
          a more conscious future.
        </p>
        <div className="line" />
        <img src="q44/sec0n0.jpg" alt="Open box" />
        <img src="q44/sec0n1.jpg" alt="Playing the game" />
        <p>
          A letter firstly greets those who approach, a guide to the deeper
          meaning of the exploration ahead. Then come maps, clues and physical
          materials: slightly yellow papers, handwritten notes, stamps, and
          objects carrying traces of the past. Through these elements, an
          activity invites reflection of the places and their connections to the
          roundup. Later, when visiting these sites, now transformed, it becomes
          possible to sense what happened there, observing the streets and
          spaces with awareness and respect for their history.
        </p>
        <img src="q44/q44-cover.jpg" alt="Leporello" />
        <p>
          At the end of the activity, the leporello becomes a companion through
          the streets of the Quadraro. Through its illustrations, it traces step
          by step the faith of the residence who were rounded up: the places
          they were taken, what they endured, and their deportation. The story
          ends with the day of liberation, marked by the joy of some and the
          absence of many others. The leporello acts as a map of meaning,
          guiding the gaze, weaving together memory and place, and making
          history tangible as one moves through the spaces that carry it.
        </p>
        <div className="line" />
        <GridImages1 />
      </section>
    </>
  )
}

const GridImages1: FC = () => {
  return (
    <div className="grid-real">
      <img src="q44/grid0n0.jpg" alt="Label" />
      <img src="q44/grid0n1.jpg" alt="Datemark" />
    </div>
  )
}
