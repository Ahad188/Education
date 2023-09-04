import CorseCard from "./CorseCard"
import Back from '../Common/Back/Back'
import OnlineCourse from "./OnlineCourse"

const CourseHome = () => {
  return (
    <>
     <Back title='Explore Course'/>
     <CorseCard/>
     <OnlineCourse/>
    </>
  )
}

export default CourseHome