import { FC, PropsWithChildren } from 'react'
import { Header } from './Header.tsx'

export const LayoutPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <div id='layout'>
        <Header />
        {children}
      </div>
    </main>
  )
}
