import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import About from "../Component/About/About";
import CourseHome from "../Component/AllCourse/CourseHome";
import Team from "../Component/Team/Team";

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
               },
               {
                    path:'/team',
                    element:<Team/>
               }
          ]
     }
])
export default router;