import { Outlet } from "react-router-dom";
import Header from "../Component/Common/Header/Header";
import Footer from "../Component/Footer/Footer";

 

const Layout = () => {
     return (
          <div>
              <Header></Header> 
              <Outlet></Outlet>
              <Footer/>
          </div>
     );
};

export default Layout;
