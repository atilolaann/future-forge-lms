import Vector from "../assets/Vector.png";
import GraduationCap from "../assets/GraduationCap.png";
import Microphone from "../assets/Microphone.png";

function Features (){
    return (
        <div>
             <div className="py-5 w-[1440] max-w-[50%]">
          <h3 className="font-bold text-5xl pt-6 ">Explore our Features</h3>
          <p className=" py-4 max-w-[80%]">
            Discover powerful tools designed to help forgers learn efficiently,
            stay organised,and track their progress throughout every stage of
            the cohort journey.
          </p>
        </div>
        <div className="flex gap-5 w-[1440]">
          <div className="border border-orange-400 rounded-sm p-2">
            <img
              src={Vector}
              className="bg-orange-400 w-10 p-2 rounded-full my-4"
              alt=""
            />
            <h2 className="text-2xl font-semibold pt-5">Track Progress</h2>
            <p>
              Monitor your weekly cohort progress and stay on top of your
              learning goal.
            </p>
          </div>
          <div className="border border-orange-400 rounded-sm p-2">
            <img
              src={GraduationCap}
              className="bg-orange-400 w-10 p-2 rounded-full my-4"
              alt=""
            />
            <h2 className="text-2xl font-semibold pt-5">Access Resources</h2>
            <p>
              Monitor your weekly cohort progress and stay on top of your
              learning goal.
            </p>
          </div>
          <div className="border border-orange-400 rounded-sm p-2">
            <img
              src={Microphone}
              className="bg-orange-400 w-10 p-2 rounded-full my-4"
              alt=""
            />
            <h2 className="text-2xl font-semibold pt-5">Watch Recordings</h2>
            <p>
              Monitor your weekly cohort progress and stay on top of your
              learning goal.
            </p>
          </div>
        </div>

        </div>

    )
}
export default Features;