import Navbar from "../components2/Navbar.jsx";
import Sidebar from "../components2/Sidebar.jsx";
import Vec1 from "../assets/Vec1.png";
import Alarm from "../assets/Alarm.png";
import Vec2 from "../assets/Vec2.png";


function Resourcescontent (){
    const resources = [
        {
            title: "Track Curriculum",
            description: "View the complete curriculum and class modules",
            icon: {Vec1},
            link: "Api link"
        },
        {
            title: "Class Schedule",
            description: "View your class timetable and upcoming sessions",
            icon: {Alarm},
            link: "Api link"
        },
        {
            title: "Cohort Calendar",
            description: "Important dates, deadlines and cohort events",
            icon: {Vec2},
            link: "Api link"
        }
    ];
    return(
             <div className="w-full overflow-x-hidden">
            <Navbar />
             <div className="flex flex-col md:flex-row">
                 <Sidebar />
                  <div className="flex-1 w-full p-4 md:p-6 md:mx-14">
                     <div className='mb-8 '>
                            <h2 className="text-2xl md:text-3xl font-bold">
                                Resources
                            </h2>
                            <p className= "text-gray-600 mt-2">
                                Access all links and materials for your track
                            </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            {resources.map((item, index) =>(
                                <a
                                key={index}
                                 href={item.link}
                                 target='_blank'
                                 rel="noreferrer"
                                 className='border border-gray-300 rounded-lg p-6 shadow-inner flex
                                 items-center gap-4 cursor-pointer'
                                 >
                                    <div  className="flex justify-between items-start">
                                        <div>
                                           <div className='flex justify-between '>
                                             <h3 className="text-2xl md:text-3xl font-bold">
                                                {item.title}
                                            </h3>
                                            <img src={item.icon} className="w-6 h-6" alt={item.title} />
                                           </div>
                                            <p className='text-gray-600 mt-2'>
                                                {item.description}
                                            </p>
                                        </div>
                                         
                                    </div>
                                 </a>
                            ))
                            }
                            
                        </div>

                 </div>
                
            </div>

        </div>
    )
}         
           
export default Resourcescontent;
