import { FC, PropsWithChildren } from 'react'
import { Header } from './Header'

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
