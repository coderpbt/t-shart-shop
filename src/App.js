
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import GrandpaContext from './components/GrandpaContext/GrandpaContext';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Order from './components/Order/Order';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children : [
        {
          path: "/home",
          loader : () => fetch('tshirts.json'),
          element: <Home />,
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/grandpa",
          element: <GrandpaContext />,
        }
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
