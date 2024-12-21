import { createBrowserRouter, RouterProvider } from "react-router-dom"
import styles from './App.module.css'

import Urll from './Components/urlMain'
import Home from './Components/homePage'
import Prod from './Components/product'
import RootLayout from './Components/Root'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {path: '/home', element: <Home />},
            {path: '/product', element: <Prod />},
            {path: '/url-shortner', element: <Urll />}
        ]
    },
]);

const App = () => {
    return (
    <>
        <div className={styles.container}>
            
        <RouterProvider router={router} />
        {/* <Link to="/"> Home</Link> */}
        </div>
    </>
    );
}
export default App