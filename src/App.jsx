import Navbar from './components/navbar/navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Layout from './components/layout/layout.jsx';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Contact from './components/contact/contact.jsx';

function App() {
  const router = createBrowserRouter([{
    path: "",
    element: <Layout />,
    children: [
      {index: true, element: <Home />},
      {path: "home" , element: <Home />},
      {path: "about",element: <About />},
      {path: "portfolio",element: <Portfolio />},
      {path: "contact",element: <Contact />},
    ],
  }]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
