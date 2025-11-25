import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const PillowAds = () =>{
    return(
        <div className="w-full h-[100vh] bg-[#674c47]">
            <img className=" h-full w-full" src={assets.Pillow_banner} alt="#" />

        </div>
    )
}

export default PillowAds


{/* <div className="w-2/3 h-full bg-[#674c47]">
            <h1 className="text-white text-5xl font-semibold mb-20">
                100% Lambskin Leather Pillow Covers
            </h1>

            <div className="w-[80%] h-1/2 border-solid border-[12px] border-white py-10 z-[9] absolute flex bg-[#674c47] justify-between px-10">
                <div className="p-10 ">
                    <div className="mb-20">
                        <h1 className="text-5xl text-white text-left">
                        NEW <br />
                        <span className="text-[5rem]">
                            PILLOW COVER
                        </span>
                        <br />
                        Arrivals
                    </h1>
                    </div>

                    <Link  className=" bg-[#f7c568] hover:bg-[#800000] p-5 text-2xl hover:text-[#f7c568]" to={'/collection'}>SHOP NOW 
                    </Link>
                </div>
                <div className="border-solid w-[50%] h-full border-white border-[12px] pt-10 relative overflow-visible">
    <img 
        className="w-[200%] absolute left-[-150px] top-1/2 -translate-y-1/2" 
        src={assets.Pillows} 
        alt="" 
    />
</div>
            </div>

            </div>
            <div className="w-1/3 h-full bg-[#f7c568] relative">
            <h1 className="text-5xl text-white font-bold text-right py-10 rotate-90">
                D DOLLY LAMB
            </h1>
            </div> */}