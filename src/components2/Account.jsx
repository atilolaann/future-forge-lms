import Navbar from '../components2/Navbar.jsx'
import Sidebar from '../components2/Sidebar.jsx'
import Lock from '../assets/Lock.png'
import edit from '../assets/edit.png'

function Account (){
    return(
             <div>
                <Navbar />
                <div className='flex'>
                    <Sidebar />
                    <div className='m-8 '>
                        <div className=''>
                            <h2 className='text-3xl font-bold pb-3'>Account</h2>
                        <p className='pb-8'>Manage your profile and account setting</p>
                        </div>
                        

                       <div className=''>
                         <h2 className='text-2xl font-bold py-6'>Profile Information</h2>
                            <div className="m-2  p-6  w-[507] border-gray-300 rounded-lg shadow-inner h-full">

                        <div className='flex  w-full items-center'>
                            <p className='w-48 text-gray-800 py-6'>Full name</p>
                           <div className='flex items-center gap-2 justify-between flex-1'>
                             <p className=''>Miniat Keshinro</p>
                            <img src={Lock} className='w-5 h-5' alt="" />
                           </div>
                        </div>
                     
                        <div  className='flex w-full items-center '>
                            <p className='w-48 text-gray-800 py-6'>Email Address</p>
                           <div className='flex items-center gap-2 justify-between flex-1'>
                             <p>miniat@gmail.com</p>
                              <img src={Lock} className='w-5 h-5' alt="" />
                           </div>
                        </div>
                        <div className='flex  w-full items-center py-6'>
                            <p className='w-48 text-gray-800 '>Enrolled Track</p>
                           <div className='flex items-center gap-2 justify-between flex-1'>
                             <p>Frontend Engineering</p>
                              <img src={Lock} className='w-5 h-5' alt="" />
                           </div>
                        </div>
                        <div className='flex  w-full items-center py-6 '>
                            <p className='w-48 text-gray-800'>Username</p>
                           <div className='flex items-center gap-2 justify-between flex-1'>
                             <p>Minnie</p>
                              <img src={edit} className='w-5 h-5' alt="" />
                           </div>
                        </div>
                        <div className='flex  w-full items-center py-6'>
                            <p className='w-48 text-gray-800'>Phone Number</p>
                           <div className='flex items-center gap-2 justify-between flex-1'>
                             <p>+2348023789999</p>
                             <img src={edit} className='w-5 h-5' alt="" />
                           </div>
                        </div>
                        </div>
                       </div>
                    </div>
                </div>
             </div>


       

    )
}
export default Account;