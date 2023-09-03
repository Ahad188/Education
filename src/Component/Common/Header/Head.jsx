import { FaFacebook,FaYoutube,FaTwitter,FaInstagramSquare} from "react-icons/fa";
import './head.css'
const Head = () => {
     return (
          <>
          <section className="head">
          <div className="container flexSB">
               <div className='logo'>
                    <h1>ACADEMIA</h1>
                    <span>ONLINE EDUCATION & LEARNING</span>
               </div>
               <div className='social'>
                    <FaFacebook className="icon"/>
                    <FaYoutube className="icon"/>
                    <FaTwitter className="icon"/>
                    <FaInstagramSquare className="icon"/>
               </div>
      

          </div>
     </section>
     </>
     );
};

export default Head;