import { FC } from 'react'
import Link from 'next/link'

export const GridSectionImage: FC<{
	projCode: string
	to?: string
}> = ({ projCode, to }) => {
	return (
		<div className='grid-section-image'>
			{to ? (
				<>
					<Link href={to} className={projCode} />
				</>
			) : (
				<>
					<a className={projCode} />
				</>
			)}
		</div>
	)
}
