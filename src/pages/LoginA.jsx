import logo from '../assets/logo.png'
import login from "../assets/login.png"


function LoginA (){
    return(
        <div>
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

        </div>

    )
}
export default LoginA