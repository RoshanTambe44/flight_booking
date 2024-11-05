import React, { useState } from 'react'
import planAnim from "../assets/gif/Animation - 1727986597888 (1).gif"
import loadingGIF from "../assets/gif/loading.gif"
import done from "../assets/gif/pngwing.com.png"
import book1 from "../assets/image/116X116-airindia-express-12345.webp"
import book2 from "../assets/image/116X116-airindia-express-12122023.webp"
import book3 from "../assets/image/indigo.avif"


export default function SecondPage({setfirst}) {

    const [loading, setloading] = useState(true)
    const [cardLoading1, setcardLoading1] = useState(true)
    const [cardLoading2, setcardLoading2] = useState(true)
    const [cardLoading3, setcardLoading3] = useState(true)
    





    function loadingFunc() {
        setTimeout(() => {
            setcardLoading1(false)
        }, 1000);
        setTimeout(() => {
            setcardLoading2(false)
        }, 2000);
        setTimeout(() => {
            setcardLoading3(false)
        }, 3000);
        setTimeout(() => {
            setloading(false)
        }, 4000);
    }
    loadingFunc()

  return (
    <div className=' h-full w-full flex justify-center items-center' >
        <div className="w-full h-full flex flex-col items-center px-2 md:px-0 ">
            <div className="flex md:h-[20%] h-[10%] md:w-[80%] w-full justify-between items-center p-2  ">
                <div className="rounded-3xl flex border py-2 ps-6 pe-1 gap-4 items-center shadow-md text-[6px] md:text-sm "> 
                    <div className="border-r pe-2"><span className="">CDG</span> Paris Charlies De Gu..    </div>
                    <div className="border-r pe-2"><span className="">CDG</span> Paris Charlies De Gu..    </div>
                    <div className="border-r pe-2"> Jun 25 - Jul 2    </div>
                    <div className="rounded-full bg-[#f0f0f0] p-1 h-full w-8  "><i class="text-sm fa-solid fa-magnifying-glass"></i></div>
                </div>
                <div onClick={()=>setfirst(false)} className="cursor-pointer rounded-full border p-2 h-10 w-10 shadow-md"><i class="fa-solid fa-xmark"></i></div>
            </div>
            <div className="w-[100vw] h-[0.5%]  "></div>
            
            {loading === true ? <div className="flex  md:h-[80%] h-[90%] md:w-[80%] w-full justify-center items-center">
                <div className="absolute h-72 border-2 bg-white shadow-lg w-72 rounded-xl z-40  ">
                    <div className="h-[50%] flex justify-center items-center"><img className="" alt='PlanGIF' src={planAnim} /> </div>
                    <div className="h-[50%] flex flex-col items-center  gap-4"> 
                        <div className="w-[72%] text-start flex items-center gap-2 "> 
                            <img className="h-5 " alt='loading' src={cardLoading1 === true ? loadingGIF : done} /> Searching 400+ flights</div> 
                        <div className="w-[72%] text-start flex items-center gap-2 "><img className="h-5" alt='loading' src={cardLoading2 === true ? loadingGIF : done} />Attaching company rules</div> 
                        <div className="w-[72%] text-start flex items-center gap-2 "><img className="h-5 " alt='loading' src={cardLoading3 === true ? loadingGIF : done} />Serving best result</div> 
                    </div>
                </div>
                <div className="h-full w-full flex flex-col justify-between items-center gap-2 ">
                   <div className="md:h-[10%] w-full flex justify-start items-center ps-2 text-gray-400"><span className="ms-2 text-sm">Showing 356 of 756 results</span></div>
                   <div className="h-[30%] w-full p-2  rounded-lg shadow-lg border flex justify-between animate-pulse">
                   <div className="p-2 w-[12%]  h-full"><div className=" rounded-lg w-28 h-28 bg-gray-200"  > </div></div>
                    <div className=" flex w-[88%] p-2 h-full gap-4">
                        <div className=" flex flex-col  text-start h-full w-[90%] rounded-lg bg-gray-200">
                            <div className="text-gray-400 text-sm   "></div>
                            {/* <h1 className="font-bold text-lg mt-2 "></h1> */}
                            <hr className='w-[50%] mt-1'/>
                            <p className= "  text-gray-500 text-sm mt-4 w-full "> </p>
                        </div>
                        <div className="flex flex-col justify-between rounded-lg p-2 bg-gray-200 w-[10%]">
                            <div className="text-sm text-gray-400   "> </div>
                            <div className="text-blue-500 font-bold  "></div>

                        </div>
                    </div>
                   </div>
                   <div className="h-[30%] w-full p-2 rounded-lg shadow-lg flex justify-between animate-pulse border">
                   <div className="p-2 w-[12%]  h-full"><div className=" rounded-lg w-28 h-28 bg-gray-200"  > </div></div>
                    <div className=" flex w-[88%] p-2 h-full gap-4">
                        <div className=" flex flex-col  text-start h-full w-[90%] rounded-lg bg-gray-200">
                            <div className="text-gray-400 text-sm   "></div>
                            {/* <h1 className="font-bold text-lg mt-2 "></h1> */}
                            <hr className='w-[50%] mt-1'/>
                            <p className= "  text-gray-500 text-sm mt-4 w-full "> </p>
                        </div>
                        <div className="flex flex-col justify-between rounded-lg p-2 bg-gray-200 w-[10%]">
                            <div className="text-sm text-gray-400   "> </div>
                            <div className="text-blue-500 font-bold  "></div>

                        </div>
                    </div>
                   </div>
                   <div className="h-[30%] w-full p-2 rounded-lg shadow-lg flex justify-between animate-pulse border">
                   <div className="p-2 w-[12%]  h-full"><div className=" rounded-lg w-28 h-28 bg-gray-200"  > </div></div>
                    <div className=" flex w-[88%] p-2 h-full gap-4">
                        <div className=" flex flex-col  text-start h-full w-[90%] rounded-lg bg-gray-200">
                            <div className="text-gray-400 text-sm   "></div>
                            {/* <h1 className="font-bold text-lg mt-2 "></h1> */}
                            <hr className='w-[50%] mt-1'/>
                            <p className= "  text-gray-500 text-sm mt-4 w-full "> </p>
                        </div>
                        <div className="flex flex-col justify-between rounded-lg p-2 bg-gray-200 w-[10%]">
                            <div className="text-sm text-gray-400   "> </div>
                            <div className="text-blue-500 font-bold  "></div>

                        </div>
                    </div>
                   </div>
                </div>
            </div> :
            <div className="flex   md:h-[80%] h-[90%] md:w-[80%] w-full justify-center items-center ">
                
                <div className="h-full w-full flex flex-col justify-between items-center gap-2 ">
                   <div className="md:h-[10%] w-full flex justify-start items-center ps-2 text-gray-400"><span className="ms-2 text-sm">Showing 356 of 756 results</span></div>
                   <div className="h-[30%] w-full p-2 border rounded-lg shadow-lg flex justify-between">
                    <div className="p-2 md:w-[12%] w-[32%]  h-full"><img className=" rounded-lg md:w-28 md:h-28 w-24 h-24" alt='booking' src={book1} /></div>
                    <div className=" flex md:w-[88%] w-[68%] p-2 h-full justify-between flex-col md:flex-row ">
                        <div className=" flex flex-col  text-start">
                            <div className="text-gray-400 text-sm">DOM FLIGHTS</div>
                            <h1 className="font-bold md:text-lg mt-2 cursor-pointer  ">LIVE NOW: Sale by Air India </h1>
                            <hr className='w-[50%] mt-1'/>
                            <p className= "  text-gray-500 text-sm mt-4">with domestic flight fares starting @ JUST ₹1,499*. </p>
                        </div>
                        <div className="flex md:flex-col  justify-between p-2">
                            <div className=" text-sm  text-gray-400"> T&C'S APPLY </div>
                            <div className="text-blue-500 font-bold cursor-pointer ">BOOK NOW</div>

                        </div>
                    </div>
                   </div>
                   <div className="h-[30%] w-full p-2 border rounded-lg shadow-lg flex justify-between">
                    <div className="p-2 md:w-[12%] w-[32%]  h-full"><img className=" rounded-lg md:w-28 md:h-28 w-24 h-24" alt='booking' src={book2} /></div>
                    <div className=" flex md:w-[88%] w-[68%] p-2 h-full justify-between flex-col md:flex-row ">
                        <div className=" flex flex-col  text-start">
                            <div className="text-gray-400 text-sm">DOM FLIGHTS</div>
                            <h1 className="font-bold md:text-lg mt-2 cursor-pointer ">LIVE NOW: Sale by Air India </h1>
                            <hr className='w-[50%] mt-1'/>
                            <p className= "  text-gray-500 text-sm mt-4">with domestic flight fares starting @ JUST ₹1,499*. </p>
                        </div>
                        <div className="flex md:flex-col  justify-between p-2">
                            <div className=" text-sm  text-gray-400"> T&C'S APPLY </div>
                            <div className="text-blue-500 font-bold cursor-pointer">BOOK NOW</div>

                        </div>
                    </div>
                   </div>
                   <div className="h-[30%] w-full p-2 border rounded-lg shadow-lg flex justify-between">
                    <div className="p-2 md:w-[12%] w-[32%]  h-full"><img className=" rounded-lg md:w-28 md:h-28 w-24 h-24" alt='booking' src={book3} /></div>
                    <div className=" flex md:w-[88%] w-[68%] p-2 h-full justify-between flex-col md:flex-row ">
                        <div className=" flex flex-col  text-start">
                            <div className="text-gray-400 text-sm">DOM FLIGHTS</div>
                            <h1 className="font-bold md:text-lg mt-2 cursor-pointer ">LIVE NOW: Sale by Air India </h1>
                            <hr className='w-[50%] mt-1'/>
                            <p className= "  text-gray-500 text-sm mt-4">with domestic flight fares starting @ JUST ₹1,499*. </p>
                        </div>
                        <div className="flex md:flex-col  justify-between p-2">
                            <div className=" text-sm  text-gray-400"> T&C'S APPLY </div>
                            <div className="text-blue-500 font-bold cursor-pointer">BOOK NOW</div>

                        </div>
                    </div>
                   </div>
                </div>
            </div>}
        </div>
    </div>
  )
}
