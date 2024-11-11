import React from "react";

export default function FrontPage({ setfirst }) {
  return (
    <div className="h-full w-full flex justify-center pt-36 md:pt-32">
      <div className="md:w-[80%] w-full  h-[50%]  rounded-xl p-2 ">
        <div className="text-2xl md:text-4xl h-[20%] mb-4  md:mb-8 ">Good afternoon, Brian</div>
        <div className="h-[80%] border flex flex-col gap-2 p-2 rounded-xl">
          <div className="text-start h-[20%] p-2">
            <span className="p-2 bg-[#f5f7fa] rounded-md text-start ">
              Flights
            </span>
          </div>
          <div className="flex justify-between h-[40%] p-2 flex-wrap gap-2 ">
            <div className="">
              <div className="rounded-lg border w-full  md:p-3 p-2 flex items-center">
                <i className="md:me-2 text-xs md:text-sm text-gray-600 font-extralight fa-solid fa-location-crosshairs"></i>
                <input
                  className=" focus:outline-none text-xs md:text-sm "
                  placeholder=" From to ?"
                />
              </div>
            </div>
            <div className="bg-[#f5f7fa] p-3 h-10 w-10 rounded-full hidden md:block">
              <i class="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
            <div className="">
              <div className="rounded-lg border w-full md:p-3 flex items-center p-2">
                <i className="md:me-2 text-xs md:text-sm text-gray-600 font-extralight fa-solid fa-location-crosshairs"></i>
                <input
                  className=" focus:outline-none  text-xs md:text-sm"
                  placeholder=" Where to ?"
                />
              </div>
            </div>
            <div className="">
              <div className="rounded-lg border w-full md:p-3 flex items-center p-2">
                <i class="text-xs md:text-sm md:me-2  text-gray-600 font-extralight fa-regular fa-calendar"></i>
                <input
                  className=" focus:outline-none text-xs md:text-sm"
                  placeholder=" From to ?"
                />
              </div>
            </div>
            <div className="">
              <div className="rounded-lg border  w-full md:p-3 flex items-center p-2">
                <i class="text-xs md:text-sm md:me-2 text-gray-600 font-extralight fa-regular fa-calendar"></i>
                <input
                  className=" focus:outline-none text-xs md:text-sm "
                  placeholder=" Where to ?"
                />
              </div>
            </div>
          </div>
          <div className="h-[40%] text-end  p-2 flex justify-end items-center">
            {" "}
            <button
              onClick={() => setfirst(true)}
              className="py-2 px-6 text-white text-sm md:text-md font-semibold bg-[#003e39] hover:bg-green-900 transition duration-300 rounded-lg uppercase"
            >
              <span className=" me-2">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>{" "}
              Search flights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
