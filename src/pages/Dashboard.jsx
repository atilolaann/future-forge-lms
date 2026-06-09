import { Link } from "react-router-dom";
import Navbar from '../components2/Navbar.jsx'
import Sidebar from '../components2/Sidebar.jsx'
import Welcomecard from '../components2/Welcomecard.jsx'
import Progresschart from '../components2/Progresschart.jsx'
import Recordingscard from '../components2/Recordingscard.jsx'
import Resourcescard from '../components2/Resourcescard.jsx'
import Summarycard from '../components2/Summarycard.jsx'


function Dashboard (){
    return (
        <div className=''>
            <Navbar />

           <div className='flex'>
             <Sidebar />
            <div className='flex flex-col gap-4 p-4 w-full justify-center'>
                <div className='m-4'>
                     <h1 className='text-3xl font-bold'>Welcome back Miniat</h1>
            <p>Frontend Development Track</p>
                </div>
                <div className=''>
                <div className='grid grid-cols-2 gap-6 items-stretch'>
                <Welcomecard />
                <Progresschart/>
                </div>
                <div className='grid grid-cols-2 gap-6 mt-6 items-stretch'>
                    <Recordingscard/>
                    <Resourcescard />
                </div>
            </div>
            <Summarycard/>
        
            </div>
           </div>
           
        </div>

    )
}
export default Dashboard;