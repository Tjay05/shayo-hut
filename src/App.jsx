import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Signup from "./components/Signup"
import Login from "./pages/account/Login"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />
    </Route>
  )
)

function App() {
  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
