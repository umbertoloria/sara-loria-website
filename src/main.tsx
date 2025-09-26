import React from 'react'
import ReactDOM from 'react-dom/client'
import { DefaultElement } from './DefaultElement.tsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page.tsx'
import { MainPageContent } from './pages/MainPageContent.tsx'
import { TupperwarePageContent } from './pages/TupperwarePageContent.tsx'
import { Q44PageContent } from './pages/Q44PageContent.tsx'
import { StanzaPageContent } from './pages/StanzaPageContent.tsx'

export const baseRoot = '/' as const
export const pageTupperwareHref = '/tupperware' as const
export const pageQ44Href = '/q44' as const
export const pageStanzaHref = '/stanza' as const

const router = createHashRouter(
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
        {
          path: pageStanzaHref,
          element: <StanzaPageContent />,
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
