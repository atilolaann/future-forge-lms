import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import login from "../assets/login.png"

function Login (){
    return(
        <div>
            
               <main className="bg-gray-100 flex  justify-center  max-h-[90%] h-screen">
                <section className="bg-orange-600 p-10 text-white flex flex-col 
                 justify-center w-full max-w-92 my-5 ml-6">
                <div className="w-full ">
                     <img src={logo} className="w-full max-w-80 h-15" alt="futureforge logo" />
                </div>
                <div>
                    <img src={login} className="w-full max-w-92 my-2" alt="login image"/>

                </div>
                <h2 className="text-2xl font-semibold py-5">Onboard into our LMS</h2>
                <p>Your personalized learning hub for resources,
                    recordings, progress tracking, and cohort collaboration,all in one place.
                </p>
                </section>

                <section className="bg-white p-6 max-w-92 flex flex-col my-5">
                    <h2 className="text-2xl font-bold ">Welcome back</h2>
                    <p className="font-semibold">Sign in to your account</p>

                   <div className="flex flex-col my-2 ">
                     <label className="font-normal mt-6">Email</label>
                    <input type="email" className="border rounded-sm border-orange-600" />

                   </div>
                   <div className="flex flex-col my-2">
                     <label>Password</label>
                    <input type="password" className="border rounded-sm border-orange-600 mb-12"/>

                    <button className="bg-orange-600 text-white rounded-sm py-1.5 ">Log in</button>
                    <p className="pt-2">Don't have access to LMS? Go back <span className="text-orange-600"> <Link to ="/">Home</Link></span></p>
                   </div>
                </section>
               </main>


                
        
        </div>

    

    );
}
export default Login;