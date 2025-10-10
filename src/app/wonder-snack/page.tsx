import { GridSectionImage } from '../ui/GridSectionImage'
import { SectionReal } from '../ui/SectionReal'
import { GridReal } from '../ui/GridReal'

export default function WonderSnackPageContent() {
	return (
		<div className='layout'>
			<section>
				<h1 className='lead'>Wonder Snack</h1>
				<h2>Ergonomics laboratory</h2>
				<GridSectionImage projCode='p5-wonder-snack' />
				<div className='line' />
				<h1>concept</h1>
				<p>
					A snack container designed primarily for nuts, Wonder Snack was
					created to highlight two essential moments for everyday wellbeing:
					snacking and hydration. Often treated as separate habits, these two
					gestures come together in a single, natural routine: drinking and
					healthy eating blend into a daily practice that combines energy and
					lightness.
				</p>
				<div className='line' />
				<SectionReal>
					<img
						src='/wonder-snack/sec0.png'
						alt='Illustrations showing how to use the product'
					/>
				</SectionReal>
				<p>
					Its mechanism is inspired by slap wrap bracelets: with a quick and
					playful motion, Wonder Snack attaches to the water bottle, always
					staying within reach. When needed, it detaches just as easily,
					offering a healthy snack like nuts or dried fruit, before snapping
					back into place, ready to be used again.
				</p>
				<div className='line' />
				<SectionReal>
					<img
						src='/wonder-snack/sec1.jpg'
						alt='Showcase of the product prototype'
					/>
				</SectionReal>
				<p>
					Wonder Snack is the winning project of the competition launched by
					AIRC (the Italian Association for Cancer Research), and has been
					envisioned as a product to be distributed during fundraising days
					dedicated to donations.
				</p>
				<div className='line' />
				<GridReal>
					<img
						src='/wonder-snack/grid0n0.jpeg'
						alt='Award presentation by AIRC'
					/>
					<img
						src='/wonder-snack/grid0n1.jpg'
						alt='Close-up shots of the prototypes'
					/>
				</GridReal>
			</section>
		</div>
	)
}
