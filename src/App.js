import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ViewOrders from './views/ViewOrders';
import ViewAccount from './views/ViewAccounts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/orders",
    element: <ViewOrders />
  },
  {
    path: "/accounts",
    element: <ViewAccount/>
  }

])

function App() {
  return (
    <div className="w-full flex flex-col">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
