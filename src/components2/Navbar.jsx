import { Link } from 'react-router-dom'
import logo2 from '../assets/logo2.png'
import Frame from '../assets/Frame.png'
import Avatar from '../assets/Avatar.png'
function Navbar (){
    return (
        <div>
            <nav className='flex justify-between p-4 border-b border-gray-300'>
                <Link to ="/">
                 <img src={logo2} className='w-30 h-10' alt="futureforge logo " />
                 </Link>
                <div className='flex'>
                    <img src={Frame} className='w-10 h-10' alt="" />
                    <img src={Avatar} className='w-10 h-10' alt="" />
                    
                </div>
            </nav>
        </div>
        
            
    

    )
}
export default Navbar;