'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { baseRoot } from '@/app/paths'

export const Header: FC = () => {
	const pathname = usePathname()
	const isHomepage = pathname === '/'
	return (
		<div className={`header ${isHomepage ? '' : 'small'}`}>
			<div className='layout'>
				<Menu isHomepage={isHomepage} />
				{isHomepage && <ImaVisual />}
			</div>
		</div>
	)
}

const Menu: FC<{
	isHomepage: boolean
}> = ({ isHomepage }) => {
	return (
		<div className='menu'>
			<ul>
				{!isHomepage ? (
					<>
						<li>
							<Link href={baseRoot}>me.</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<a
								onClick={() => {
									let mainTop = document
										.getElementById('main')
										?.getBoundingClientRect().top
									scrollTo({
										top: mainTop,
										behavior: 'smooth',
									})
								}}
							>
								projects.
							</a>
						</li>
					</>
				)}

				<li>
					<a
						onClick={() => {
							const pageHeight = document.documentElement.scrollHeight
							scrollTo({
								top: pageHeight, // Excess but not a problem.
								behavior: 'smooth',
							})
						}}
					>
						contact.
					</a>
				</li>
			</ul>
		</div>
	)
}

const ImaVisual: FC = () => {
	return (
		<div className='ima-visual'>
			<div className='ima-visual-title'>
				I'm Sara Loria.
				<br />
				I'm a <span>visual designer</span>.
			</div>
			<p className='ima-visual-text'>
				Powered by iced coffee, happy playlists, and the thrill of turning ideas
				into something people can see and get excited about.
			</p>
		</div>
	)
}
