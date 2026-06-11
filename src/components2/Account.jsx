import { useState, useEffect } from 'react'
import Navbar from '../components2/Navbar.jsx'
import Sidebar from '../components2/Sidebar.jsx'
import Lock from '../assets/Lock.png'
import edit from '../assets/edit.png'

function Account (){
    const [nickname, setNickname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

     const token = localStorage.getItem("token");
     console.log(token);

    const [userData, setUserData] = useState(null);
   
    useEffect(() =>{
        fetch("https://lms-be-kc72.onrender.com/api/auth/me",{
            headers:{
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data.data.user)
            setUserData(data.data.user)
            setNickname(data.data.user.nickname || "");
            setPhoneNumber(data.data.user.phoneNumber)
    });
    }, []);

    const handleUpdate = async () => {
        const response = await fetch (
            "https://lms-be-kc72.onrender.com/api/users/me",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    nickname,
                    phoneNumber,
                }),
            }
        );
        const data = await response.json();
        console.log(data)
    };
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
                             <p className=''>{userData?.fullName}</p>
                            <img src={Lock} className='w-5 h-5' alt="" />
                           </div>
                        </div>
                     
                        <div  className='flex w-full items-center '>
                            <p className='w-48 text-gray-800 py-6'>Email Address</p>
                           <div className='flex items-center gap-2 justify-between flex-1'>
                             <p>{userData?.email}</p>
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
                             <input type="text"
                             value={nickname}
                             onChange={(e) => setNickname(e.target.value)}
                             className='border rounded p-2'
                             />
                              <img src={edit} className='w-5 h-5' alt="" />
                           </div>
                        </div>
                        <div className='flex  w-full items-center py-6'>
                            <p className='w-48 text-gray-800'>Phone Number</p>
                           <div className='flex items-center gap-2 justify-between flex-1'>

                            <input type="text"
                             value={phoneNumber}
                             onChange={(e) => setPhoneNumber(e.target.value)}
                             className='border rounded p-2'
                             />
                            
                             <img src={edit} className='w-5 h-5' alt="" />
                           </div>
                        </div>
                        <button
                        onClick={handleUpdate}
                        className='bg-orange-500 text-white px-4 py-2 rounded'>
                            Save Changes
                        </button>
                        </div>
                       </div>
                    </div>
                </div>
             </div>


       

    )
}
export default Account;