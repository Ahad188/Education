import Heading from '../../Common/Header/heading/Heading';
import { FaArrowRight } from "react-icons/fa";
import './Hore.css'

const Hero = () => {
     return (
          <>
          <section className='hero'>
            <div className='container'>
              <div className='row'>
                <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className='button'>
                  <button className='primary-btn'>
                    GET STARTED NOW  <FaArrowRight className='ic'/>
                  </button>
                  <button>
                    VIEW COURSE  <FaArrowRight className='ic '/>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className='margin'></div>
        </>
     );
};

export default Hero;