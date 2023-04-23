import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/signup',
        element: <Signup />,
    }
])

export default router