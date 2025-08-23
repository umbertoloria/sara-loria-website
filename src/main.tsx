import React from 'react'
import ReactDOM from 'react-dom/client'
import { DefaultElement } from './DefaultElement.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page.tsx'
import { MainPageContent } from './pages/MainPageContent.tsx'
import { TupperwarePageContent } from './pages/TupperwarePageContent.tsx'

export const baseRoot = '/' as const
export const pageTupperwareHref = 'tupperware' as const

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
      ],
    },
  ],
  {
    basename: baseRoot,
  },
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
