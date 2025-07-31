import './App.css'
import Navbar from './component/navbar/navbar.jsx'
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/layout.jsx';

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
