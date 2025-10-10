import { GridSectionImage } from '../ui/GridSectionImage'
import { SectionReal } from '../ui/SectionReal'

export default function HeavyDirtySansPageContent() {
	return (
		<div className='layout'>
			<section>
				<h1 className='lead'>Heavy Dirty Sans</h1>
				<h2>Typography laboratory</h2>
				<GridSectionImage projCode='p6-heavy-dirty-sans' />
				<div className='line' />
				<h1>concept</h1>
				<p>
					Heavy Dirty Sans is a visual and conceptual tribute to{' '}
					<i>Twenty One Pilots</i> and their unique way of communicating through
					symbols, codes and hidden messages. Inspired by the shapes of ancient
					alphabets, the font reinterprets them in a contemporary key to capture
					the band's identity through a distinct typography system. Referencing
					the song <i>Heavydirtysoul</i>, it channels the raw energy and
					emotional depth of their music, visually connecting typography, color
					and atmosphere into a cohesive design language.
				</p>
				<div className='line' />
				<SectionReal>
					<img src='/heavy-dirty-sans/sec0n0.jpg' alt='Specimen' />
					<img src='/heavy-dirty-sans/sec0n1.jpg' alt='Customized poster' />
				</SectionReal>
				<p>
					The typeface presents a strong, structured identity. Built within tall
					rectangular forms, its sharp geometry and segmented strokes create a
					solid yet dynamic visual rhythm. Slightly softened corners balance its
					austere character, giving it a contemporary edge. With a low media
					line in uppercase and a central one in lowercase, the font maintains
					both tension and readability. Designed for impact, it's ideal for
					titles and visual compositions that seek a bold, distinctive presence.
				</p>
			</section>
		</div>
	)
}
