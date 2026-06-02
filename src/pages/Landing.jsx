import page1 from  '../assets/page1.png'
import Vector from "../assets/Vector.png"
import GraduationCap from "../assets/GraduationCap.png"
import Microphone from "../assets/Microphone.png"

function Landing (){
    return(
        <div>
            <main className='m-12'>
                <div className='flex  w-full '>
                    <img src={page1} className='w-30' alt="" />
                    <div>
                         <h3 className='text-3xl font-bold'>Empowering Learners Through Structured Digital Learning</h3>
                    <p>At Future Forge, innovation is not just a buzzword, its the heartbeat of everything
                        we do.We believe the future belongs to those who dare to create,
                    </p>
                    <button className='bg-orange-600 py-2 px-5 rounded-sm'>Learn More</button>
                    </div>
                </div>
                <div className='py-5 w-full max-w-40'>
                    <h3 className='font-bold text-4xl pt-6 '>Explore our  pages</h3>
                    <p className='w-50 py-4'>Discover powerful tools designed to help forgers learn efficiently,
                        stay organised,and track their progress throughout every stage of the cohort journey </p>
                </div>
                <div>
                    <div>
                        <img src={Vector} className='bg-orange-500 w-10 p-2 rounded-full' alt="" />
                        <h2>Track Progress</h2>
                        <p>Monitor your weekly cohort progress and stay on top of your learning goal.</p>
                    </div>
                    <div>
                        <img src={GraduationCap} className='bg-orange-500 w-10 p-2 rounded-full' alt="" />
                        <h2>Access Resources</h2>
                        <p>Monitor your weekly cohort progress and stay on top of your learning goal.</p>
                    </div>
                    <div>
                        <img src={Microphone} className='bg-orange-500 w-10 p-2 rounded-full' alt="" />
                        <h2>Watch Recordings</h2>
                        <p>Monitor your weekly cohort progress and stay on top of your learning goal.</p>
                    </div>
                </div>
            </main>
            
        </div>

    )
}
export default Landing