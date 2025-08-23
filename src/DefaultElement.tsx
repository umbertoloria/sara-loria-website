import { Outlet } from 'react-router-dom'
import { BaseLayout } from './layout/BaseLayout.tsx'
import { Header } from './components/Header.tsx'

export const DefaultElement = () => {
  return (
    <>
      <BaseLayout>
        <div id='layout'>
          <Header />
          <Outlet />
        </div>
      </BaseLayout>
    </>
  )
}
