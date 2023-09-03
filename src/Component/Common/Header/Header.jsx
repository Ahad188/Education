 
import { FaBars ,FaAngleDoubleUp} from "react-icons/fa";
import { useState } from "react";
import Head from "./Head";
import './header.css'
 

const Header = () => {
     const[click,SetClick] = useState(false)
     return (
          <>
              <Head/> 
           <header>
               <nav className="flexSB">
                    <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => SetClick(false)}>
                         <li> <a href="/">Home</a></li>
                         <li> <a href="/">Home</a></li>
                         <li> <a href="/">Home</a></li>
                         <li> <a href="/">Home</a></li>
                         <li> <a href="/">Home</a></li>
                         <li> <a href="/">Home</a></li>
                    </ul>
                    <div className="start">
                         <div className="button">Get Certificate</div>
                    </div>
                    <button className='toggle' onClick={() => SetClick(!click)}>
            {click ? <FaAngleDoubleUp/> :  <FaBars/>}
          </button>
               </nav>
           </header>
         
         
          </>
     );
};

export default Header;