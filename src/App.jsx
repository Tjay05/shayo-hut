import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import AppLayout from './layout/Index';

import Login from "./pages/account/Login"
import Register from './pages/account/Registeration';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Login/>} />
      <Route path='signup' element={<Register/>} />
      <Route element={<AppLayout/>}>
        <Route path='home' element={<Home/>} />
      </Route>
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
