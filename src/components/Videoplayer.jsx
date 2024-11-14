import groupSvg from '../assets/group.svg'
import bar from '../assets/bar.svg'
import forward from '../assets/forward-15-seconds.svg'
import backward from '../assets/backward-15-seconds.svg'
import play from '../assets/play.svg'
import iconFrame from '../assets/IconFrame.svg'
import volumeCross from '../assets/volume-cross.svg'
import closeIcon from '../assets/close-circle.svg'
export const Videoplayer = ({ toggelPlayer }) => {

    return <div className=" relative w-[1119px] sm:h-[650px] h-[280px] rounded-[28px] bg-black sm:bg-[#4749B3] flex flex-col justify-between items-center  pt-2">
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 h-[46px] w-[46px]">
            <button onClick={toggelPlayer}>
                <img className="h-[40px] w-[40px]" src={closeIcon} alt={closeIcon} />
            </button>
        </div>
        <div className="w-[333px] h-[33px] flex flex-col justify-between items-center">
            <h1 className="font-[300] text-[10px] sm:text-[16px] leading-[15.84px] text-white">Class 7 Science</h1>
            <div className="font-[700] w-full text-[12px] sm:text-[19.5px] leading-[19.8px] text-white text-center ">Fundamentals of Organic Chemistry</div>
        </div>
        <div style={{ backgroundImage: `url(${groupSvg})`, backgroundSize: '100%' }} className="w-full h-[600px] rounded-[28px] bg-contain bg-no-repeat flex flex-col-reverse p-2 sm:p-6">
            <div className=" sm:space-y-3 space-y-1">
                <div className="text-white font-[300] text-[10px] sm:text-[16px] text-right pr-2 ">
                    35:28 / 1:20:21
                </div>
                <img src={bar} alt={bar} />
                <div className="flex justify-between items-center">
                    <div className="flex justify-between space-x-1 items-center">
                        <img className="h-[16px] w-[16px] sm:h-[25px] sm:w-[25px]" src={play} alt={play} />
                        <img className="h-[16px] w-[16px] sm:h-[25px] sm:w-[25px]" src={backward} alt={backward} />
                        <img className="h-[16px] w-[16px] sm:h-[25px] sm:w-[25px]" src={forward} alt={forward} />
                    </div>
                    <div className="flex justify-between space-x-2 items-center">
                        <img className="h-[16px] w-[16px] sm:h-[25px] sm:w-[25px]" src={volumeCross} alt={volumeCross} />
                        <img className="h-[16px] w-[16px] sm:h-[25px] sm:w-[25px]" src={iconFrame} alt={iconFrame} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}