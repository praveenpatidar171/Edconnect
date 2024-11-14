import phone from '../assets/phone.svg'
import phone2 from '../assets/phone2.svg'
import personalcard from '../assets/personal-card.svg'
import personalcard2 from '../assets/personal-card2.svg'
import bookSvg from '../assets/bookSvg.svg'
import bookSvg2 from '../assets/bookSvg2.svg'
export const QuickLinks = () => {
      return <>
            <div className='hidden sm:block'>
                  <div className="w-[346px] h-[567px] flex flex-col gap-3">
                        <h1 className='font-[700] text-[24px] leading-[23.76px]'>Quick Links</h1>
                        <div className="w-full h-[170px] bg-[#4749B3] hover:bg-white text-white hover:text-[#4749B3] rounded-[20px] flex flex-col items-center justify-center group ">

                              <img className='h-[25.29px] w-[25.79px] group-hover:hidden' src={bookSvg} alt={bookSvg} />
                              <img className='hidden group-hover:block' src={bookSvg2} alt={bookSvg2} />
                              <h1 className='font-[700] text-[24px]'>Canvas LMS</h1>
                              <h2 className=' w-[223px] font-[400] text-[12px] leading-[11.88px]'>Click here to access your LMS portal for assignments, class recordings and notes.</h2>
                        </div>
                        <div className="w-full h-[170px] bg-[#E66DFF] hover:bg-white text-white hover:text-[#E66DFF] rounded-[20px] flex flex-col items-center justify-center group ">
                              <img className='h-[25.29px] w-[25.79px] group-hover:hidden' src={personalcard} alt={personalcard} />
                              <img className='hidden group-hover:block' src={personalcard2} alt={personalcard2} />
                              <h1 className='font-[700] text-[24px]'>Join Live Class</h1>
                              <h2 className=' w-[138px] font-[400] text-[12px] leading-[11.88px]'>Class 7 Math is starting in <p className=' w-[138px] text-center font-[700] text-[12px] leading-[11.88px]'>1 hour, 35 minutes.</p>
                              </h2>
                        </div>
                        <div className="w-full h-[170px] bg-[#6669FE] hover:bg-white text-white hover:text-[#6669FE] rounded-[20px] flex flex-col items-center justify-center group ">
                              <img className='h-[25.29px] w-[25.79px] group-hover:hidden' src={phone} alt={phone} />
                              <img className='hidden group-hover:block' src={phone2} alt={phone2} />
                              <h1 className='font-[700] text-[24px]'>Contact Teacher</h1>
                              <h2 className=' text-center w-[223px] font-[400] text-[12px] leading-[11.88px]'>Click here to contact your teacher for any doubts or concerns.</h2>
                        </div>
                  </div>
            </div>
            <div className='block sm:hidden'>
                  <div className='h-[238px] w-[320px] flex flex-col gap-2  '>
                        <h1 className='font-[700] text-[20px] leading-[19.8px]'>Quick Links</h1>
                        <div className="w-full h-[64px] bg-[#4749B3] hover:bg-white text-white hover:text-[#4749B3] rounded-[8px] flex flex-row items-center justify-between group ">
                              <div className='h-[64px] w-[68px] rounded-[8px] flex justify-center items-center bg-[#5F61C0] '>
                                    <img className='h-[36px] w-[36px] ' src={bookSvg} alt={bookSvg} />
                              </div>
                              <h1 className='font-[700] w-full text-[20px] text-center '>Canvas LMS</h1>
                        </div>
                        <div className="w-full h-[64px] bg-[#E66DFF] hover:bg-white text-white hover:text-[#E66DFF] rounded-[8px] flex flex-row items-center justify-between group ">
                              <div className='h-[64px] w-[68px] rounded-[8px] flex justify-center items-center bg-[#EB87FF] '>
                                    <img className='h-[36px] w-[36px] ' src={personalcard} alt={personalcard} />
                              </div>
                              <h1 className='font-[700] text-[20px] w-full text-center'>Join Live Class</h1>
                        </div>

                        <div className="w-full h-[64px] bg-[#6669FE] hover:bg-white text-white hover:text-[#6669FE] rounded-[8px] flex flex-row items-center justify-between group ">
                              <div className='h-[64px] w-[68px] rounded-[8px] flex justify-center items-center bg-[#7E81FF] '>
                                    <img className='h-[36px] w-[36px] ' src={phone} alt={phone} />
                              </div>
                              <h1 className='font-[700] text-[20px] w-full text-center'>Contact Teacher</h1>
                        </div>

                  </div>
            </div>
      </>
}