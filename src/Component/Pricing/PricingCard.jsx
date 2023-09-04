import {price } from '../../../public/Data/Data'
import './Pricing.css'

const PricingCard = () => {
  return (
    <>
     {price.map((val,index) => (
        <div className='items shadow' key={index}>
          <h4>{val.name}</h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className='outline-btn'>GET STARTED</button>
        </div>
      ))}
    </>
  )
}

export default PricingCard