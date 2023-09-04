import Wrapper from '../About/Wrapper'
import Back from '../Common/Back/Back'
import './Team.css'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <>
     <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Wrapper/>
    </>
  )
}

export default Team