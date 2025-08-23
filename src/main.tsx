import React from 'react'
import ReactDOM from 'react-dom/client'
import { DefaultElement } from './DefaultElement.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page.tsx'
import { MainPageContent } from './pages/MainPageContent.tsx'
import { TupperwarePageContent } from './pages/TupperwarePageContent.tsx'
import { Q44PageContent } from './pages/Q44PageContent.tsx'

export const baseRoot = '/' as const
export const pageTupperwareHref = 'tupperware' as const
export const pageQ44Href = 'q44' as const

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <DefaultElement />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: <MainPageContent />,
        },
        {
          path: pageTupperwareHref,
          element: <TupperwarePageContent />,
        },
        {
          path: pageQ44Href,
          element: <Q44PageContent />,
        },
      ],
    },
  ],
  {
    basename: baseRoot,
  }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
