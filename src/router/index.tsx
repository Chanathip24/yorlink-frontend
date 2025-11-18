import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'

import { Layout } from '@/component/layout'
import { ROUTES } from '@/constant'
import EntryPoint from '@/pages/EntryPoint'
import HomePage from '@/pages/Home'

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <Layout />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.ENTRY_POINT.path,
        element: <EntryPoint />,
      },
    ],
  },
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
