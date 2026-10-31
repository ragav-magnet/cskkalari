import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import { lazy, Suspense } from 'react'

// Home loads with the first bundle; other pages load on demand
const About = lazy(() => import('@/pages/About'))
const Services = lazy(() => import('@/pages/Services'))
const Gallery = lazy(() => import('@/pages/Gallery'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const page = (C) => <Suspense fallback={<div className="min-h-screen bg-soot" />}><C /></Suspense>

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: page(About) },
      { path: '/services', element: page(Services) },
      { path: '/gallery', element: page(Gallery) },
      { path: '/contact', element: page(Contact) },
      { path: '*', element: page(NotFound) },
    ],
  },
]

// Hash routing is only for static previews without server rewrites (VITE_HASH_ROUTER=1)
const router = import.meta.env.VITE_HASH_ROUTER ? createHashRouter(routes) : createBrowserRouter(routes)

export default function App() {
  return <RouterProvider router={router} />
}
