import { Link } from "react-router-dom";
import youtube from '../assets/youtube.png'

function Recordingscard(){
    return(
        <div>
            <div className="m-2  p-6  w-[507] h-full  border-gray-300 rounded-lg shadow-inner">
              
                    <h2 className="text-xl font-bold py-6">Recordings</h2>
                      <div className="flex gap-4 pb-6 items-center">
                    <p>Access all recorded sessions from your track</p>
                    <img src={youtube} className='w-10  h-10' alt="youtube icon" />
                </div>
                <div>
                    <button className="bg-orange-500 text-white w-full p-2 rounded-lg">
                         <Link to="/Recordingscontent">  Watch Recordings </Link>
                      </button>
                </div>
            </div>
        </div>

    )
}
export default Recordingscard;