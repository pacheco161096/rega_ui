import { createBrowserRouter, Navigate } from "react-router-dom"
import Home from "../routes/home"
import MisServicios from '../routes/misServicios'
import PaymentSuccess from '../routes/paymentSuccess'
import Dashboard from "../routes/dashboard"



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="/es-mx" />
  },
  {
    path:"/:lang",
    element:<Home/>
  },
  {
    path:"/:lang/micuenta",
    element:<Dashboard/>,
    children: [
      {
        index:true,
        element:<MisServicios/>,
      },
      {
        path:'paymentsuccess',
        element:<PaymentSuccess/>
      }
    ]
  }
])