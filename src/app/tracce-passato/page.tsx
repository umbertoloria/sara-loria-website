import { GridSectionImage } from '../ui/GridSectionImage'
import { GridReal } from '../ui/GridReal'

export default function TraccePassatoPageContent() {
  return (
    <>
      <section>
        <h1 className='lead'>Tracce di un passato</h1>
        <h2>Image and storytelling laboratory</h2>
        <GridSectionImage projCode='p4-tracce-passato' />
        <div className='line' />
        <h1>concept</h1>
        <p>
          Born from the desire to sense the suspended breath of places, this
          project explores Baronissi, my hometown, where some traces endure
          while others crumble. The photographs follow fragile signs - hidden
          arches, wounded walls, forgotten objects - evoking a time that lingers
          and fades. Ruins and remnants intertwine as memory and wound, inviting
          the gaze to slow, listen, and discover echoes of a past still alive.
        </p>
        <div className='line' />
        {/* TODO: Put "alt"s here */}
        <GridReal>
          <img src='/tracce-passato/0.jpg' alt='' />
          <img src='/tracce-passato/1.jpg' alt='' />
          <img src='/tracce-passato/2.jpg' alt='' />
          <img src='/tracce-passato/3.jpg' alt='' />
          <img src='/tracce-passato/4.jpg' alt='' />
          <img src='/tracce-passato/5.jpg' alt='' />
          <img src='/tracce-passato/6.jpg' alt='' />
          <img src='/tracce-passato/7.jpg' alt='' />
          <img src='/tracce-passato/8.jpg' alt='' />
          <img src='/tracce-passato/9.jpg' alt='' />
          <img src='/tracce-passato/10.jpg' alt='' />
          <img src='/tracce-passato/11.jpg' alt='' />
          <img src='/tracce-passato/12.jpg' alt='' />
          <img src='/tracce-passato/13.jpg' alt='' />
          <img src='/tracce-passato/14.jpg' alt='' />
          <img src='/tracce-passato/15.jpg' alt='' />
          <img src='/tracce-passato/16.jpg' alt='' />
          <img src='/tracce-passato/17.jpg' alt='' />
        </GridReal>
      </section>
    </>
  )
}
