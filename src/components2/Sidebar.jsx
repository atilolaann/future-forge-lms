import { Link } from "react-router-dom";
import { useState } from "react";
import List from '../assets/List.png'
import Vector1 from '../assets/Vector1.png'
import Vector2 from '../assets/Vector2.png'
import Vector3 from '../assets/Vector3.png'
import Vector4 from '../assets/Vector4.png'

function Sidebar (){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <div className={' border-r border-gray-300 transition-all duration-300 ${isSidebarOpen ? "w-56": "w-30"}'}>
            <div className='p-8  max-w-[50] flex flex-col gap-12 min-h-screen'>
               <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}
               > 
                <img src={List}  className='w-5 h-5' alt=" " /></button>
                


                <div className='flex flex-col gap-4'>

                         <Link to="/Dashboard">
                         <div className="flex items-center gap-3 py-2 hover:px-8   rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer">
                          <img src={Vector1} className='w-5 h-5 hover:text-white' alt="" />
                           {isSidebarOpen &&  <p>Dashboard</p>}
                          </div>
                         </Link>                   
                        <Link to="/Recordingscontent">     
                          <div className="flex items-center gap-3  py-2 hover:px-8   rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer">
                         <img src={Vector2} className='w-5 h-5' alt="" /> 
                          {isSidebarOpen && <p> Recordings</p> }
                    </div>
                         </Link>

                        
                    
                         <Link to="/Resourcescontent">
                         <div className="flex items-center gap-3  py-2 hover:px-8   rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer">
                           <img src={Vector3} className='w-5 h-5 hover:fill-white' alt="" />
                            {isSidebarOpen && <p>Resources</p> }
                    </div>
                         </Link>
                    
                    
                         
                    
                  
                        <Link to="/Account">
                          <div className="flex items-center gap-3  py-2 hover:px-8   rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer">
                           <img src={Vector4} className='w-5 h-5' alt="" />
                           
                          {isSidebarOpen &&  <p>Account</p>}
                    </div>
                         </Link>
                   
                       
                          
                    
                    
                </div>
                
            </div>
        </div>
        
            
    

    )
}
export default Sidebar;