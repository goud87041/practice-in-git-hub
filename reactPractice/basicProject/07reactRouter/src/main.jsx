import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {   createBrowserRouter, Route, RouterProvider } from 'react-router'
import Home from './componants/Home/Home.jsx'
import About from './componants/About/About.jsx'
import LayOut from './componants/Layout/LayOut.jsx'
import Contact  from './componants/contactUs/Contact.jsx'
import User from './componants/User/User.jsx'




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
      },
      {
        path : "contactUs",
        element : <Contact />
      },
      {
        path : "user/:userId",
        element : <User/>
      }
    ]
  }
])

// const router = createBrowserRouter(
//   <Route path="/" element={<LayOut/>}>
//     <Route path="" element={<Home />}/>
//     <Route path="about" element={<About/>}/>
//     <Route path="" element={<Contact />}/>
//     <Route path="" element={<User/>}/>

//   </Route>
// )

createRoot(document.getElementById('root')).render(



  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
