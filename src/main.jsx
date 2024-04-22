import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './Layout.jsx';
import Login from './components/Login.jsx';
import Hero from './sections/Hero.jsx';
import Home from './sections/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
      {
        path: "",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Login register/>
      },
      {
        path : "hero",
        element: <Hero />
      }
    ]

  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout/>}>
//       <Route path ="" element={<Home/>}/>
//       <Route path ="about" element={<About/>}/>
//       <Route path ="contact" element={<Contact/>}/>
//       <Route path ="user/:userid" element={<User/>}/>
//       <Route 
//       loader={githubInfoLoader}
//       path ="github" 
//       element={<Github/>}
//       />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
