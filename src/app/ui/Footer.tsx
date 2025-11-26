import { FC } from 'react'
import Link from 'next/link'
import {
	pageHeavyDirtySans,
	pageQ44Href,
	pageStanzaHref,
	pageTraccePassatoHref,
	pageTupperwareHref,
	pageWonderSnackHref,
} from '@/app/paths'

export const Footer: FC = () => {
	return (
		<footer>
			<div className='layout'>
				<div className='contacts-box with-projects'>
					<div>
						<Link href={pageTupperwareHref}>Tupperware</Link>
					</div>
					<div>
						<Link href={pageQ44Href}>Q44</Link>
					</div>
					<div>
						<Link href={pageStanzaHref}>Stanza</Link>
					</div>
					<div>
						<Link href={pageTraccePassatoHref}>Tracce passato</Link>
					</div>
					<div>
						<Link href={pageWonderSnackHref}>Wonder Snack</Link>
					</div>
					<div>
						<Link href={pageHeavyDirtySans}>HeavyDirtySans</Link>
					</div>
				</div>
				<div className='contacts-box'>
					<div className='linkedin'>
						<img src='/social/linkedin.png' alt='LinkedIn' />
						<a
							href='https://www.linkedin.com/in/sara-loria-b680b3305'
							target='_blank'
							style={{
								paddingTop: 8,
							}}
						>
							Sara Loria
						</a>
					</div>

					<div className='instagram'>
						<img src='/social/instagram.png' alt='Instagram' />
						<a
							href='https://www.instagram.com/sl.oreea'
							target='_blank'
							style={{
								paddingTop: 5,
							}}
						>
							@sl.oreea
						</a>
					</div>

					<div className='email'>
						<img src='/social/email.png' alt='Email' />
						<a
							href='mailto:saraloria02@gmail.com'
							style={{
								paddingTop: 2,
							}}
						>
							saraloria02@gmail.com
						</a>
					</div>
				</div>

				<div className='location'>Based in Rome, Italy</div>
			</div>
		</footer>
	)
}
