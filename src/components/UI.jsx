import { Announces } from "./Announces"
import { QuickLinks } from "./QuickLinks"
import { Recordings } from "./Recordings"
import bgImage from '../assets/bgImage.svg'
export const UI = () => {
    return <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }} className="w-full h-full  flex flex-col sm:flex-row space-y-3 sm:justify-around p-1 px-4 sm:p-6 relative ">
        <Announces />
        <QuickLinks />
        <Recordings />
    </div>
}