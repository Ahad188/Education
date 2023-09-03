 import {wrapper} from '../../../public/Data/wrapper'
 import './about.css'
 const Wrapper = () => {
     // console.log(wrapper);
     return (
          <>
              <section className='wrapper'>
        <div className='container grid'>
        {wrapper.map((val,index)=>
         <div className='box flex' key={index}>
         <div className='img'>
           <img src={val.cover} alt='' />
         </div>
         <div className='text'>
           <h1>{val.data}</h1>
           <h3>{val.title}</h3>
         </div>
       </div>
        )}
        </div>
      </section> 
          </>
     );
 };
 
 export default Wrapper;