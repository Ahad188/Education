import Heading from "../Common/Header/heading/Heading"
import {homeAbout} from '../../../public/Data/home'
import './About.css'
import Wrapper from "./Wrapper"
 
 

const AboutCard = () => {
  return (
    <>
       <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src="../../assets/images/about.jpg" alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
                {homeAbout?.map((val,index)=>(<div className="item flexSB" key={index}>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                </div>))}
            </div>
          </div>
        </div>
      </section>
      <Wrapper/>
    </>
  )
}

export default AboutCard