import { Outlet } from 'react-router-dom'
import { BaseLayout } from './layout/BaseLayout.tsx'
import { Header } from './components/Header.tsx'

export const DefaultElement = () => {
  return (
    <>
      <BaseLayout>
        <div>
          <Header />
          <Outlet />
        </div>
      </BaseLayout>
    </>
  )
}
