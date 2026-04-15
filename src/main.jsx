import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootFile from './rootFile/rootFile.jsx'
import HomePage from './component/homePage/HomePage.jsx'
import TimeLine from './component/timeline/TimeLine.jsx'
import Stats from './component/stats/Stats.jsx'
import CardDetails from './component/Cardss/CardDetails.jsx'
import MoreDetails from './component/Cardss/MoreDetails.jsx'
import InteractionProvider from './Context/InteractionContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <InteractionProvider>
        <RootFile />
      </InteractionProvider>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/timeline',
        element: <TimeLine />
      },
      {
        path: '/stats',
        element: <Stats />
      },
      {
        path: '/moredetails/:id',
        element: <MoreDetails></MoreDetails>,
        loader: () => fetch('/Data.json')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
