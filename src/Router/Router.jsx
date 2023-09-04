import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import About from "../Component/About/About";
import CourseHome from "../Component/AllCourse/CourseHome";
import Team from "../Component/Team/Team";
import Pricing from "../Component/Pricing/Pricing";
import Blog from "../Component/Blog/Blog";
import Contact from "../Component/Contact/Contact";

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
               },
               {
                    path:'/pricing',
                    element:<Pricing/>
               },
               {
                    path:'/journal',
                    element:<Blog/>
               },
               {
                    path:'/contact',
                    element:<Contact/>
               }
          ]
     }
])
export default router;