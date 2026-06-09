import Navbar from '../components2/Navbar.jsx'
import Sidebar from '../components2/Sidebar.jsx'
import Vec1 from '../assets/Vec1.png'
import Alarm from '../assets/Alarm.png'
import Vec2 from '../assets/Vec2.png'

function Resourcescontent (){
    return(
        
           
             <div>
                <Navbar />
                <div className='flex'>
                    <Sidebar />

                    <div className='flex-1 mx-14'>
                        <div className='m-6 '>
                            <h2 className='text-3xl font-bold'>Resources</h2>
                            <p className='mb-6'>Access all links and materials for your track</p>
                        </div>
                        <div className=''>
                            <div className=' m-4 border p-6 border-gray-300 rounded-lg shadow-inner w-full'>
                              <p className='text-2xl font-bold py-4 flex justify-between'>  Track Curriculum
                                <img src={Vec1} className='w-6 h-6' alt="" />
                              </p>
                                <p>View the complete curriculum and class modules</p>
                            </div>
                            <div  className=' m-4 border p-6 border-gray-300 rounded-lg shadow-inner w-full'>
                                <p className='text-2xl font-bold py-4 flex justify-between' >Class Schedule
                                    <img src={Alarm} className='w-6 h-6' alt="" />
                                </p>
                                <p>View your class timetable and upcoming sessions</p>
                            </div>
                            <div  className=' m-4 border p-6 border-gray-300 rounded-lg shadow-inner w-full'>
                                <p className='text-2xl font-bold py-4 flex justify-between'>Cohort Calendar
                                    <img src={Vec2} className='w-6 h-6' alt="" />
                                </p>
                                <p>Important dates, deadlines and cohort events</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>


       

    )
}
export default Resourcescontent;