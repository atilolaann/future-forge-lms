import Navbar from '../components2/Navbar.jsx'
import Sidebar from '../components2/Sidebar.jsx'
import info from '../assets/info.png'
import Group from '../assets/Group.png'

function Recordingscontent (){
    const recordings = [
        {
            title: "Introduction to Software Engineering",
            description: "Overview of the course, expectations and the lifecycle of the program",
            date: "May 7th, 2025",
            week: "Week 1",
            part: "Part 1",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            title: "Introduction to Software Engineering",
            description: "Overview of the course, expectations and the lifecycle of the program",
            date: "May 14th, 2025",
            week: "Week 2",
            part: "Part 1",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            title: "Problem Solving with Algorithms",
            description: "Understanding problem-solving techniques and algorithmic thinking",
            date: "May 21st, 2025",
            week: "Week 3",
            part: "Part 1",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            title: "Version Control with Git",
            description: "Understanding git control and best practices.",
            date: "May 7th, 2025",
            week: "Week 1",
            part: "Part 1",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
    ]
    return(
        
           
             <div>
                <Navbar />
                <div className='flex'>
                    <Sidebar />
                    <div className='m-6'>
                        <div className='w-full'>
                            <h2 className='text-2xl font-bold'>Recordings</h2>
                        <p className='py-4'>All session recordings are organized in as YouTube playlist</p>
                        </div>
                        <div className='flex gap-3 border border-orange-400 py-2 items-center rounded-lg w-full px-20'>
                            <img src={info} className='w-5 h-5' alt="" />
                            <p>The playlist will open in a new tab so you can come back here anytime</p>
                           

                        </div>
                         <div >
                                <h2 className='text-xl font-bold mt-6 mb-2'>
                                    All Recorded Session
                                </h2>
                                <div className='flex flex-col gap-4'>
                                    {recordings.map((recording, index) =>(
                                    <div
                                    key={index}
                                    className="border border-gray-300 rounded-lg p-4 w-full shadow-inner flex items-center justify-between cursor-pointer">
                                        <div className='flex gap-4'>
                                        <img 
                                        src={recording.thumbnail}
                                        className='w-24 h-20 rounded-lg'
                                        alt={recording.title} />
                                        <div className="flex flex-col gap-2">
                                            <h3 className='text-lg font-semibold'>{recording.title}</h3>
                                            <p className='text-gray-600'>{recording.description}</p>
                                            <p
                                             className='text-gray-500 text-sm px-2'>
                                                {recording.date}.{recording.week}.{recording.part}
                                                </p>
                                        </div>
                                        </div>
                                       <button className ="flex gap-2 border border-orange-400 p-2 rounded-lg mx-4">
                                        <img src={Group} className='w-7 h-5' alt="play icon" />
                                         <a href={recording.link}
                                         target="_blank"
                                          rel="noopener noreferrer">
                                            Watch on YouTube
                                        </a>
                                       </button>
                                    </div>
                                    ))}
                                </div>

                            </div>
                    </div>
                </div>
             </div>


       

    )
}
export default Recordingscontent;