import { Children, StrictMode } from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDom from 'react-dom/client'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import NewPost from './components/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
import Posts from './routes/Posts.jsx'

const router = createBrowserRouter([
   { path:"/", element: <App /> }
   ,{path:"/", element: <RootLayout /> 
  , children: [
   {path : "/", element: <Posts />,
    children: [{path: "/newpost", element: <NewPost />}]
    }
  ,{ path: "/about", element: <h1>About Page</h1> }]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
