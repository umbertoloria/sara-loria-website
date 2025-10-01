import { Header } from './components/Header.tsx'
import { FC, PropsWithChildren } from 'react'

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
