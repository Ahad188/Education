 
import { FaBars ,FaAngleDoubleUp} from "react-icons/fa";
import { useState } from "react";
import Head from "./Head";
import './header.css'
import { Link } from "react-router-dom";
 

const Header = () => {
     const[click,SetClick] = useState(false)
     return (
          <>
              <Head/> 
           <header>
               <nav className="flexSB">
                    <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => SetClick(false)}>
                         <li> <Link to="/">Home</Link></li>
                         <li> <Link to="/all-courses">All Courses</Link></li>
                         <li> <Link to="/about">About</Link></li>
                         <li> <Link to="/team">Team</Link></li>
                         <li> <Link to="/pricing">Pricing</Link></li>
                         <li> <Link to="/journal">Journal</Link></li>
                         <li> <Link to="/contact">Contact</Link></li>
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