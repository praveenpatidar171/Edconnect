import searchlogo from '../assets/search-normal.svg'
import vector from '../assets/Vector.svg'
import groupPhoto from '../assets/groupPhoto.png'
import videocircle from '../assets/video-circle.svg'
import { useState } from 'react'
import { Videoplayer } from './Videoplayer'

export const Recordings = () => {

    const [isOpen, seTisOpen] = useState(false);

    const toggelPlayer = () => {
        seTisOpen(!isOpen);
    }

    return <div className="h-[492px] w-[320px] sm:w-[371px] sm:h-[567px] flex flex-col gap-4">

        {/*videoplayer pop up  */}
        {isOpen && <div className='fixed sm:inset-0 top-12 left-1 right-1 flex items-center justify-center bg-black bg-opacity-50'>
            <Videoplayer toggelPlayer={toggelPlayer} />
        </div>}

        <h1 className='font-[700] text-[20px] sm:text-[24px] leading-[19.8px] sm:leading-[23.76px]'>Access Class Recordings</h1>
        <div className="w-full h-[462px] sm:h-[530px] rounded-[12px] sm:rounded-[20px] bg-white flex flex-col items-center justify-around p-2">
            <div className="w-[296px] sm:w-[323px] h-[42px] sm:h-[32px] bg-[#F6F6FB] rounded-[4px] flex items-center gap-4 p-2">
                <img className='h-4 w-4  ' src={searchlogo} alt={searchlogo} />
                <input className="w-[143px] font-[300] text-[12px] bg-[#F6F6FB] border-none" type="text" placeholder="Search for class recordings" />
            </div>
            <div className="w-[296px] sm:w-[323px] h-[36px] sm:h-[24px] flex justify-between  items-center ">
                <h1 className='text-[10px] font-[400] text-[#000000CC]'>Filter By:</h1>
                <div className='flex space-x-2'>
                    <div className='w-[100px] h-[36px] sm:w-[86px] rounded-[4px] sm:h-[24px] flex justify-around items-center bg-[#F6F6FB]'>
                        <button className=' text-[#979797] font-[400] text-[10px]'>This week</button>
                        <img className='h-[4.82px] w-[9.49px]' src={vector} alt={vector} />
                    </div>
                    <div className=' w-[100px] h-[36px] sm:w-[86px] rounded-[4px] sm:h-[24px] flex justify-around items-center bg-[#F6F6FB]'>
                        <button className=' text-[#979797] font-[400] text-[10px]'>All subjects</button>
                        <img className='h-[4.82px] w-[9.49px]' src={vector} alt={vector} />
                    </div>
                </div>
            </div>
            <div onClick={toggelPlayer} className='h-[76px] w-[296px] sm:w-[323px] border-b-2 group hover:border-[#4749B3] hover:cursor-pointer'>
                <div className='h-[64px] w-full flex justify-between '>
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-[500] text-[12px] text-[#4749B3] group-hover:text-[#A3A4D9] leading-[11.88px]'>Class 7 Math</h1>
                            <h1 className='font-[700] text-[16px] leading-[15.84px] group-hover:text-[#4749B3]'>Algebraic Equations </h1>
                        </div>
                        <h1 className='font-[400] text-[10px] text-[#727272] leading-[9.9px]'>24th October, 2024</h1>
                    </div>
                    <div className='h-[64px] w-[100px] relative rounded-[10px]'>
                        <img className='h-full w-full' src={groupPhoto} alt={groupPhoto} />
                        <div class="absolute inset-0 bg-[#4749B3] mix-blend-multiply opacity-80 rounded-[10px]"></div>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <img className=' h-[24px] w-[24px] group-hover:opacity-0' src={videocircle} alt={videocircle} />
                        </div>
                        <div className=' text-white absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300  flex justify-center items-center font-[500] text-[12px] '>
                            play now
                        </div>

                    </div>
                </div>
            </div>
            <div onClick={toggelPlayer} className='h-[76px] w-[296px] sm:w-[323px] border-b-2 group hover:border-[#4749B3] hover:cursor-pointer '>
                <div className='h-[64px] w-full flex justify-between'>
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-[500] text-[12px] text-[#4749B3] group-hover:text-[#A3A4D9] leading-[11.88px]'>Class 7 Math</h1>
                            <h1 className='font-[700] text-[16px] group-hover:text-[#4749B3] leading-[15.84px]'>Inert Gases </h1>
                        </div>
                        <h1 className='font-[400] text-[10px] text-[#727272] leading-[9.9px]'>24th October, 2024</h1>
                    </div>
                    <div className='h-[64px] w-[100px] relative rounded-[10px]'>
                        <img className='h-full w-full' src={groupPhoto} alt={groupPhoto} />
                        <div class="absolute inset-0 bg-[#4749B3] mix-blend-multiply opacity-80 rounded-[10px]"></div>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <img className='h-[24px] w-[24px] group-hover:opacity-0' src={videocircle} alt={videocircle} />
                        </div>
                        <div className=' text-white absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300  flex justify-center items-center font-[500] text-[12px] '>
                            play now
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={toggelPlayer} className='h-[76px] w-[296px] sm:w-[323px] border-b-2 group hover:border-[#E66DFF] hover:cursor-pointer'>
                <div className='h-[64px] w-full flex justify-between'>
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-[500] text-[12px] text-[#E66DFF] group-hover:text-[#F2B6FF] leading-[11.88px]'>Class 7 Science</h1>
                            <h1 className='font-[700] text-[15px] w-[139px] group-hover:text-[#E66DFF] leading-[15.84px]'>Fundamentals of Organic Chemistry </h1>
                        </div>
                        <h1 className='font-[400] text-[10px] text-[#727272] leading-[9.9px]'>24th October, 2024</h1>
                    </div>
                    <div className='h-[64px] w-[100px] relative rounded-[10px]'>
                        <img className='h-full w-full' src={groupPhoto} alt={groupPhoto} />
                        <div class="absolute inset-0 bg-[#E66DFF] mix-blend-multiply opacity-80 rounded-[10px]"></div>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <img className='h-[24px] w-[24px] group-hover:opacity-0' src={videocircle} alt={videocircle} />
                        </div>
                        <div className=' text-white absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300  flex justify-center items-center font-[500] text-[12px] '>
                            play now
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={toggelPlayer} className='hidden sm:block h-[76px] w-[323px] border-b-2  group hover:border-[#4749B3] hover:cursor-pointer'>
                <div className='h-[64px] w-[323px] flex justify-between'>
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-[500] text-[12px] text-[#4749B3] group-hover:text-[#A3A4D9] leading-[11.88px]'>Class 7 Math</h1>
                            <h1 className='font-[700] text-[16px] group-hover:text-[#4749B3] leading-[15.84px]'>Trigonometry 101 </h1>
                        </div>
                        <h1 className='font-[400] text-[10px] text-[#727272] leading-[9.9px]'>24th October, 2024</h1>
                    </div>
                    <div className='h-[64px] w-[100px] relative rounded-[10px]'>
                        <img className='h-full w-full' src={groupPhoto} alt={groupPhoto} />
                        <div class="absolute inset-0 bg-[#4749B3] mix-blend-multiply opacity-80 rounded-[10px]"></div>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <img className='h-[24px] w-[24px] group-hover:opacity-0' src={videocircle} alt={videocircle} />
                        </div>
                        <div className=' text-white absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300  flex justify-center items-center font-[500] text-[12px] '>
                            play now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
