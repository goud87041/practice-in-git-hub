import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {   createBrowserRouter, RouterProvider } from 'react-router'
import Home from './componants/Home/Home.jsx'
import About from './componants/About/About.jsx'
import LayOut from './componants/Layout/LayOut.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element : <LayOut />,
    children :[
      {
        path : "",
        element : <Home />
      },
      {
        path : "about",
        element : <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(



  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
