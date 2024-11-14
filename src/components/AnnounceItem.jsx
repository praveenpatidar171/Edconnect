export const AnnounceItem = ({ image, content }) => {
    return <div className="w-[296px] sm:w-[355px] h-[42px] rounded-[4px] bg-[#F8F8F8] flex justify-around sm:mt-2">
       
       <div className=" flex items-center justify-center ">
        <img className="h-[24px] w-[24px] " src={image} alt={image} />
        </div> 
        <div className="w-[209px] h-[20px] sm:w-[268px] sm:h-[25px] text-[#4749B3] font-[300] text-[10px] sm:text-[12px] py-1 ">
            {content}
        </div>
    </div>
}