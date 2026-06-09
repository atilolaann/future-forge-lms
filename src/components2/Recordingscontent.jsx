import Navbar from '../components2/Navbar.jsx'
import Sidebar from '../components2/Sidebar.jsx'
import info from '../assets/info.png'

function Recordingscontent (){
    return(
        
           
             <div>
                <Navbar />
                <div className='flex'>
                    <Sidebar />
                    <div className='m-6'>
                        <div className='w-full'>
                            <h2 className='text-2xl font-bold'>Recordings</h2>
                        <p className='py-4'>All session recordings are organized in as YouTube playlist</p>
                        </div>
                        <div className='flex gap-3 border border-orange-400 py-2 items-center rounded-lg w-full px-20'>
                            <img src={info} className='w-5 h-5' alt="" />
                            <p>The playlist will open in a new tab so you can come back here anytime</p>
                           

                        </div>
                         <div >
                                <h2 className='text-xl font-bold mt-6 mb-2'>
                                    All Recorded Session
                                </h2>

                            </div>
                    </div>
                </div>
             </div>


       

    )
}
export default Recordingscontent;