import Image from "next/image"
import Button from "./Button"

const Hero = () => {
    return(
        <section id="home"
        className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row">
            <div className="hero-map"/>

            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <h1 className="bold-52 lg:bold-88">
                    Great Smoky Mountains
                </h1>
                <p className="regular-16 mt-6 text-stone-500 lg:max-w-[520px]">
                    Book a 4-day adventure guide that brings you face to face with the many facets and hidden wonders of the Great Smoky Mountains.
                </p>

                <div className="my-11 flex flex-wrap gap-5">
                        <div className="flex items-center gap-2">
                            {Array(5).fill(1).map((_, index) => (
                                <Image src="/star.svg" key={index} alt="star" width={24} height={24}/>
                            ))}
                        </div>

                        <p className="bold-16 lg:bold-20">
                            2k+ 
                            <a href="https://www.tripadvisor.com/Attraction_Review-g60842-d12833528-Reviews-Great_Smoky_Mountains_National_Park-Gatlinburg_Tennessee.html">
                                <span className="regular-16 lg:regular-20 ml-1 underline">Reviews</span>
                            </a>
                        </p>
                    </div>

                    <div className="flex flex-col w-full gap-3 sm:flex-row">
                        <Button 
                            type="button"
                            title="Book Now"
                            variant="btn_green"
                        />
                        <Button 
                            type="button"
                            title="How We Work?"
                            icon="/play.svg"
                            variant="btn_white_text"
                        />
                    </div>
                </div>

                <div className="relative flex flex-1 items-start">
                    <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
                        
                        <div className="flex flex-col">
                            <div className="flexBetween">
                                <p className="regular-16 text-stone-300">Location</p>
                                <Image src="/close.svg" alt="close" width={24} height={24} />
                            </div>

                            <p className="bold-20 text-white">Nantahala Center</p>
                        </div>

                        <div className="flexBetween">
                            <div className="flex flex-col">
                                <p className="regular-16 text-stone-300">Distance</p>
                                <p className="bold-20 text-white">173.28 mi</p>
                            </div>

                            <div className="flex flex-col">
                                <p className="regular-16 text-stone-300">Elevation</p>
                                <p className="bold-20 text-white">600 ft</p>
                            </div>
                        </div>

                    </div>
            </div>

        </section>
    )
}

export default Hero