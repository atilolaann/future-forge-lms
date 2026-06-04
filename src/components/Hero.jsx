import landingpage2 from '../assets/landingpage2.png'
function Hero (){
    return(
        <div>
             <main className=" flex gap-2 justify-between items-center min-h-[70vh] ">
                <div className="flex-1 max-w-xl">
                    <h3 className="text-5xl font-semibold leading-tight">
                        Learn, Track Progess,<br/> Build Your Future
                    </h3>
                    <p className="mt-6 text-lg text-gray-600">One central space for Forgers to access learning resources, <br />
                    Watch session recordings, track cohort progress.</p>
                    <button className="bg-orange-400 text-white px-6 py-3 rounded-lg mt-6">Begin Journey</button>
                </div>
                <div className="flex-1 flex justify-end">
                    <img src={landingpage2} className="max-w-137.5 w-full h-auto" alt="" />
                </div>
            </main>
        </div>

    )


}
export default Hero;