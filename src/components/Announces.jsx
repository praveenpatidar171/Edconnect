import { announcedItems } from "../../data"
import { AnnounceItem } from "./AnnounceItem"
import pinkCamera from '../assets/LogoP.svg'
import blueCamera from '../assets/LogoB.svg'
import whiteCamera from '../assets/LogoW.svg'
export const Announces = () => {
    return <div className="h-full w-[320px] sm:h-[567px] space-y-2 sm:space-y-5  sm:w-[395px] ">
        <h1 className="font-[700] text-[20px] sm:text-[24px] leading-[19.8px] sm:leading-[23.76px] mb-2">Announcements</h1>
        <div className="w-full h-full sm:h-[144px] rounded-[12px] sm:rounded-[20px] border-[1px] border-none bg-white flex flex-col items-center justify-center p-4 gap-2 sm:gap-0 sm:p-0 ">
            {announcedItems.map((item, idx) => <AnnounceItem key={idx} image={item[0]} content={item[1]} />)}
        </div>
        <h1 className="font-[700] text-[20px] sm:text-[24px] leading-[19.8px] sm:my-6">Your Class Schedule</h1>
        <div className="w-full h-[166px] sm:h-[328px] rounded-[12px] sm:rounded-[20px] border-[1px] border-none bg-white flex flex-col items-center justify-center gap-2 ">
            <div className="w-[296px] sm:w-[354px] h-[57px] sm:h-[60px] rounded-[4px] p-[16px] bg-[#F2F2FF] flex  items-center justify-between">
                <div className="flex justify-between w-[180px] sm:w-[212px]">

                    <div className="flex items-center justify-center ">
                        <img className=" h-[20px] w-[20px] sm:h-[24px] sm:w-[24px] mt-[6px] " src={blueCamera} alt={blueCamera} />
                    </div>

                    <div className="w-[150px] sm:w-[174px] h-[22px] sm:h-[28px]">
                        <h3 className=" w-[150px] h-[8px] text-[10px] sm:text-[12px] font-[300] text-[#9899DF]">Class 7, Science | Live Class</h3>
                        <h1 className=" w-[131px] h-[8px] sm:w-full sm:h-[11px] text-[12px] sm:text-[16px] font-[600] mt-1 text-[#4749B3]">Tuesday, 5:00 - 5:50 PM</h1>
                    </div>
                </div>
                <h1 className="text-[#7577D9] text-[8px] sm:text-[10px] font-[400] ">
                    Yesterday
                </h1>
            </div>
            <div className="w-[296px] sm:w-[354px] h-[57px] sm:h-[60px] rounded-[4px] p-[16px] text-white bg-[#E66DFF] flex  items-center justify-between">
                <div className="flex justify-between w-[180px] sm:w-[212px]">

                    <div className="flex items-center justify-center ">
                        <img className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px] mt-[6px] " src={whiteCamera} alt={whiteCamera} />
                    </div>

                    <div className="w-[150px] sm:w-[174px] h-[22px] sm:h-[28px]">
                        <h3 className=" w-[150px] h-[8px] text-[10px] sm:text-[12px] font-[300] ">Class 7, Science | Live Class</h3>
                        <h1 className=" w-[131px] h-[8px] sm:w-full sm:h-[11px] text-[12px] sm:text-[16px] font-[600] mt-1 ">Tuesday, 5:00 - 5:50 PM</h1>
                    </div>
                </div>
                <h1 className=" text-[8px] sm:text-[10px] font-[400] ">
                    Today
                </h1>
            </div>
            <div className="hidden sm:block">
                <div className=" w-[354px] h-[60px] rounded-[4px] p-[16px] bg-[#F2F2FF] flex items-center justify-between">
                    <div className="flex justify-between w-[212px]">

                        <div className="flex items-center justify-center ">
                            <img className="h-[24px] w-[24px] mt-[6px] " src={blueCamera} alt={blueCamera} />
                        </div>

                        <div className="w-[174px] h-[28px]">
                            <h3 className=" w-[150px] h-[8px] text-[12px] font-[300] text-[#9899DF]">Class 7, Science | Live Class</h3>
                            <h1 className=" w-full h-[11px] text-[16px] font-[600] mt-1 text-[#4749B3]">Tuesday, 5:00 - 5:50 PM</h1>
                        </div>
                    </div>
                    <h1 className="text-[#7577D9] text-[10px] font-[400] ">
                        Tomorrow
                    </h1>
                </div>
            </div>
            <div className="hidden sm:block">
                <div className=" w-[354px] h-[60px] rounded-[4px] p-[16px] bg-[#FDF5FF] flex items-center justify-between">
                    <div className="flex justify-between w-[212px]">

                        <div className="flex items-center justify-center ">
                            <img className="h-[24px] w-[24px] mt-[6px] " src={pinkCamera} alt={pinkCamera} />
                        </div>

                        <div className="w-[174px] h-[28px]">
                            <h3 className=" w-[150px] h-[8px] text-[12px] font-[300] text-[#EFABFD]">Class 7, Science | Live Class</h3>
                            <h1 className=" w-full h-[11px] text-[16px] font-[600] mt-1 text-[#E66DFF]">Tuesday, 5:00 - 5:50 PM</h1>
                        </div>
                    </div>
                    <h1 className="text-[#E981FF] text-[10px] font-[400] ">
                        23rd Sept.  2024
                    </h1>
                </div>
            </div>
        </div>
    </div>
}