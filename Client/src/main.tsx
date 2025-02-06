import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App'; // Root layout with Navbar/Footer
import Home from './pages/Home';
import About from './pages/About';
import FindUs from './pages/FindUs';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Shop from './pages/Shop';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/SignUp';
import Success from './pages/Success';

import './styles/globals.css';     
import User from './pages/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App.tsx is the root layout (Navbar & Footer included)
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'find-us', element: <FindUs /> },
      { path: 'menu', element: <Menu /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact-us', element: <ContactUs /> },
      { path: 'shop', element: <Shop /> },
      { path: 'cart', element: <Cart /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: "success", element: <Success />},
      { path: "user", element: <User />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
