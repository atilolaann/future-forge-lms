import page1 from  '../assets/page1.png'
import Vector from "../assets/Vector.png"
import GraduationCap from "../assets/GraduationCap.png"
import Microphone from "../assets/Microphone.png"

function Landing (){
    return(
        <div>
            <main className=' m-16 max-w-7xl '>
                <div className=' flex  justify-center items-center min-h-[70vh] '>
                    <div className="flex-1 flex ">
                        <img src={page1} className="max-w-125 w-full h-auto" alt="" />
                                    </div>
                    <div className=' w-full max-w-xl  flex-1'>
                         <h3 className='text-5xl font-bold leading-tight '>Empowering Learners <br />Through Structured Digital Learning</h3>
                    <p className='py-4'>At Future Forge, innovation is not just a buzzword, its the heartbeat of everything
                        we do.We believe the future belongs to those who dare to create.
                    </p>
                    <button className='bg-orange-600 py-2 px-5 rounded-sm'>Learn More</button>
                    </div>
                </div>
                <div className='flex flex-col flex-1 w-full max-w-[70%]'>
                    <h3 className='font-bold text-4xl pt-6'>Explore our pages</h3>
                    <p className='w-full max-w-[50%] py-4'>Discover powerful tools designed to help forgers learn efficiently,
                        stay organised,and track their progress throughout every stage of the cohort journey </p>
                </div>
                <div className='flex gap-5'>
                    <div className='border border-orange-700 rounded-sm p-4'>
                        <img src={Vector} className='bg-orange-500 w-10 p-2 my-4 rounded-full' alt="" />
                        <h2 className='text-2xl font-semibold'>Track Progress</h2>
                        <p>Monitor your weekly cohort progress and stay on top of your learning goal.</p>
                    </div>
                    <div className='border border-orange-700 rounded-sm p-4'>
                        <img src={GraduationCap} className='bg-orange-500 w-10 p-2 my-4 rounded-full' alt="" />
                        <h2 className='text-2xl font-semibold'>Access Resources</h2>
                        <p>Monitor your weekly cohort progress and stay on top of your learning goal.</p>
                    </div>
                    <div className='border border-orange-700 rounded-sm p-4'>
                        <img src={Microphone} className='bg-orange-500 w-10 p-2 my-4 rounded-full' alt="" />
                        <h2 className='text-2xl font-semibold'>Watch Recordings</h2>
                        <p>Monitor your weekly cohort progress and stay on top of your learning goal.</p>
                    </div>
                </div>
            </main>
            
        </div>

    )
}
export default Landing