import './globals.css'
import { ReactNode } from 'react'
import { LayoutPage } from '@/app/ui/LayoutPage'

export default function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>Sara Loria</title>
				<link rel='icon' href='/favicon.png' sizes='any' />
			</head>
			<body>
				<LayoutPage>{children}</LayoutPage>
			</body>
		</html>
	)
}
