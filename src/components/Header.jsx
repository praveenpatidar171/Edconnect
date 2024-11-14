import logo from '../assets/logo.svg'
export const Header = () => {
    return <div className="h-[98px] w-full bg-[#6669FE] flex  justify-between items-center px-4 sm:px-10 ">
        <img className="h-[45.3px] w-[92px] sm:h-[49.03px] sm:w-[96.67px]" src={logo} alt="logo" />
        <h1 className='text-white font-[700] text-[20px] sm:text-[32px] ' >Student Portal</h1>
        <div className='hidden sm:block'>
            <h1 className='text-white font-[600] text-[23.33px] '>Hello, Gabrisa!</h1>
            <h3 className='text-white font-[400] text-[12px]  '>class 7, Math + Science</h3>
        </div>
    </div>
}