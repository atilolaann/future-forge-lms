import page1 from "../assets/page1.png";

function About(){
    return (
        <div>
             <div className="flex  w-[1440] items-center">
                      <img src={page1} className="w-[50%]" alt="" />
                      <div className="mx-8">
                        <h3 className="text-5xl font-bold leading-tight">
                          Empowering Learners Through Structured Digital Learning
                        </h3>
                        <p className="py-6">
                          At Future Forge, innovation is not just a buzzword, its the <br />
                          heartbeat of everything we do.We believe the future belongs <br /> to
                          those who dare to create,
                        </p>
                        <button className="bg-orange-600 py-2 px-5 rounded-sm">
                          Learn More
                        </button>
                      </div>
                   
                    </div>

        </div>


    )
}
export default About;