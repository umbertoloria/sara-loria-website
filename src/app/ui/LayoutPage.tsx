import { FC, PropsWithChildren } from 'react'
import { Header } from './Header'
import { ContactsBox } from '@/app/ui/ContactsBox'

export const LayoutPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <ContactsBox />
    </main>
  )
}
