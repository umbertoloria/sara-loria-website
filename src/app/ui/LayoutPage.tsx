import { FC, PropsWithChildren } from 'react'
import { Header } from './Header'
import { ContactsBox } from '@/app/ui/ContactsBox'

export const LayoutPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main id='main'>{children}</main>
      <ContactsBox />
    </>
  )
}
