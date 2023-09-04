import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import About from "../Component/About/About";
import CourseHome from "../Component/AllCourse/CourseHome";

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
                    path:'/all-courses',
                    element:<CourseHome/>
               },
               {
                    path:'/about',
                    element:<About/>
               }
          ]
     }
])
export default router;