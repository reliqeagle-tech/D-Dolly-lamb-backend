import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const PillowAds = () => {
    return (
        <div className="w-full m-auto bg-[#faf0e6] mt-6">
            <img className="h-[50vh] md:h-[100vh] w-full md:w-[90%] m-auto" src={assets.pillowBanner} alt="#" />

        </div>
    )
}

export default PillowAds