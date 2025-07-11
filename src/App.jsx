import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Login from "./pages/account/Login"
import Register from './pages/account/Registeration';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Login/>} />
      <Route path='signup' element={<Register/>} />
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
