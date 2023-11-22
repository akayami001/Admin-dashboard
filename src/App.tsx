import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import Users from "./pages/users/Users"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import './styles/global.scss'
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import {QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

function App() {

const Layout = ()=> {
  return (
    <div className="main">
      <Navbar/>
      <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
        <QueryClientProvider client={queryClient}>
          <Outlet/>
        </QueryClientProvider>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/users",
          element:<Users/>
        },
        {
          path:"/products",
          element:<Products/>
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ]
    },{
      path:"/login",
      element:<Login/>
    }
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App
