import { Link } from "react-router-dom";
import doc from '../assets/doc.png'

function Resourcescard(){
    return(
        <div>
            <div className="m-2  p-6  w-[507] border-gray-300 rounded-lg shadow-inner h-full">
              
                    <h2 className="text-xl font-bold py-6">Resources</h2>
                      <div className="flex gap-4 pb-6"> 
                    <p>Find important links curriculum, schedules and more</p>
                    <img src={doc} className='w-10 h-10 items-center' alt="document icon" />
                </div>
                <div>
                    <button className="bg-orange-500 text-white w-full p-2 rounded-lg">
                        <Link to="/Resourcescontent">View Resources</Link>
                        </button>
                </div>
            </div>
        </div>

    )
}
export default Resourcescard;