import { GridSectionImage } from '../ui/GridSectionImage'
import { GridReal } from '../ui/GridReal'

export default function TraccePassatoPageContent() {
	return (
		<div className='layout'>
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
				<GridReal>
					<img src='/tracce-passato/0.jpg' alt='Window with grid' />
					<img
						src='/tracce-passato/1.jpg'
						alt='Mosaic representing Baronissi'
					/>
					<img src='/tracce-passato/2.jpg' alt='Ancient walled-up arch' />
					<img
						src='/tracce-passato/3.jpg'
						alt='New fresco next to an old arch'
					/>
					<img src='/tracce-passato/4.jpg' alt='Door no longer accessible' />
					<img
						src='/tracce-passato/5.jpg'
						alt='Decaying wall next to a wall under construction'
					/>
					<img src='/tracce-passato/6.jpg' alt='Ancient unknown tool' />
					<img
						src='/tracce-passato/7.jpg'
						alt='Old one-story building renovated'
					/>
					<img
						src='/tracce-passato/8.jpg'
						alt='Ancient wall next to a newly built wall'
					/>
					<img src='/tracce-passato/9.jpg' alt='Old walled-up door' />
					<img
						src='/tracce-passato/10.jpg'
						alt='Grass growing spontaneoulsy on the walls of a house'
					/>
					<img
						src='/tracce-passato/11.jpg'
						alt='Remains of a Roman villa imprisoned'
					/>
					<img
						src='/tracce-passato/12.jpg'
						alt='Recently built bench leaning against a decayed wall'
					/>
					<img
						src='/tracce-passato/13.jpg'
						alt='Decayed building, except for one balcony that is completely new and renovated'
					/>
					<img src='/tracce-passato/14.jpg' alt='Ancient walled-up doorway' />
					<img
						src='/tracce-passato/15.jpg'
						alt='Remains of an old wall and small wall in constract with the new houses'
					/>
					<img
						src='/tracce-passato/16.jpg'
						alt='Closed gallery with rough equipment'
					/>
					<img
						src='/tracce-passato/17.jpg'
						alt='Ancient doorway next to a new wall'
					/>
				</GridReal>
			</section>
		</div>
	)
}
