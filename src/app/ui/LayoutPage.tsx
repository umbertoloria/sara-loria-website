'use client'

import { FC, PropsWithChildren } from 'react'
import { Header } from './Header'
import { Footer } from '@/app/ui/Footer'
import { usePathname } from 'next/navigation'

export const LayoutPage: FC<PropsWithChildren> = ({ children }) => {
	const pathname = usePathname()
	const isHomepage = pathname === '/'
	return (
		<>
			<Header isHomepage={isHomepage} />
			<main id='main'>{children}</main>
			<Footer />
		</>
	)
}
