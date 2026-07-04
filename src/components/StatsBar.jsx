function StatsBar (){
    
    return(
        <div>
            <div className="flex ">
                <ul className="bg-black flex mx-6 rounded-sm gap-12 w-full px-4 items-center text-white  justify-between md:px-12 p-4">
                    <li className="flex flex-col ">100+ <span>Trained</span></li>
                    <li  className="flex flex-col ">100+ <span>Internship</span></li>
                    <li  className="flex flex-col ">100+ <span>On Job</span></li>
                    <li  className="flex flex-col ">100+ <span>Mentorship</span></li>
                </ul>
            </div>

        </div>

    )
}
export default StatsBar;