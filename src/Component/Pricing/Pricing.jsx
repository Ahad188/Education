import Back from '../Common/Back/Back'
import Faq from './Faq'
import PricingCard from './PricingCard'
import './pricing.css'

const Pricing = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PricingCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing