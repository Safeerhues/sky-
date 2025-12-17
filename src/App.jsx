import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from "./pages/home";
import Contact from './pages/contact';
import About from './pages/about';
import Services from './pages/services';
import AppLayout from './assets/components/AppLayout'; // Make sure this path is correctz

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ]
  }
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;