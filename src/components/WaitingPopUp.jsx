import bell from '../assets/bell.svg'
export const WaitingPopUp = () => {
    return <div className="w-[450px] h-[261px] flex flex-col items-center justify-between">
        <div className="w-full h-[36px] rounded-[13.33px] bg-white flex justify-center items-center">
            <div className="w-[370px] h-[15.53px] flex justify-between items-center">
                <img className='h-full w-[13.67px] mt-1' src={bell} alt={bell} />
                <div className='font-[700] w-[347.33px] text-[15.03px] text-[#E66DFF] leading-[16.86px]'>Class 7 Math is starting in 1 hour, 34 minutes.</div>
            </div>
        </div>
        <div className='w-[392px] h-[213px] flex flex-col justify-around bg-white rounded-[20px]'>
            <div className='flex flex-col justify-between items-center'>
                <div className='w-[290px] h-[98px] text-[24px] font-[700] text-center text-[#6669FE] leading-[23.76px]'>
                You can join the live class 5 minutes before it starts. Please wait.
                </div>
                <button className='w-[86px] h-[31px] text-[13.91px] rounded-[21.97px] font-[700] text-white text-center bg-[#6669FE]'>Okay.</button>
            </div>

        </div>
    </div>
}