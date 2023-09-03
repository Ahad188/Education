import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import About from "../Component/About/About";

const router = createBrowserRouter([
     {
          path:'/',
          element:<Layout/>,
          children:[
               {
                  path:'/'  ,
                  element:<Home/>
               },
               {
                    path:'/about',
                    element:<About/>
               }
          ]
     }
])
export default router;