 
import Heading from '../Common/Header/Heading/Heading';
import PricingCard from '../Pricing/PricingCard';

const Hprice = () => {
     return (
          <>
          <section className='hprice padding'>
            <Heading subtitle='OUR PRICING' title='Pricing & Packages' />
            <div className='price container grid'>
              <PricingCard />
            </div>
          </section>
        </>
     );
};

export default Hprice;