import personalcard from '../assets/personal-card.svg'
export const NoLiveclass = () => {
    return <div className="w-[346px] h-[170px] bg-[#6F6F6F] text-white rounded-[20px] flex flex-col gap-2 items-center justify-center ">
        <img className='h-[25.29px] w-[25.79px]' src={personalcard} alt={personalcard} />
        <h1 className='font-[700] text-[24px] leading-[23.76px]'>No Live Classes</h1>
        <h2 className=' w-[223px] text-center font-[400] text-[11.91px] leading-[11.79px]'>You have no live classes scheduled for today.</h2>
    </div>
}