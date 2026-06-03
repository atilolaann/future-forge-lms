import mission from "../assets/mission.png"

function Mission () {
    return (
       <main>
        <div className="bg-orange-600 p-4  text-white flex items-center justify-between ">
            <div className="flex flex-col flex-1 m-12">
                <div className="w-full min-w-150">
                    <p className=" text-black bg-white rounded-sm w-30 text-center ">Our Mission</p>

                <h1 className="text-5xl font-bold py-4 leading-16">
                    Building A Smarter <br /> Future Through <br />Learning
                </h1>
                <p className="text-xl" >
                    FutureForge LMS exists to make learning more <br /> engaging
                    ,organised, and accessible for every <br /> Forger. We are committed to supporting Learners <br /> with structured tools

                </p>
                </div>
            </div>
              <div className="flex flex-1 justify-end">
                <img src={mission} className=' w-full max-w-137.5 self-center h-auto' alt="" />
              </div>
        </div>
       </main>

    )
}
export default Mission;