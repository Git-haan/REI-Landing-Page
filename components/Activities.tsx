import Image from "next/image"

const Activities = () => {
    return(
        <section id="activities"
        className="flexCenter flex-col">
            <div className="padding-container max-container w-full pb-24">
                <p className="regular-18 -mt-1 mb-3 text-stone-500">4 DAYS | 12 PEOPLE</p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Trip Highlights & Activities</h2>
                    <p className="regular-16 text-stone-700 w-full lg:w-1/2 lg:regular-20">
                    This trip is rated Moderate <span className="text-green-50 font-medium">[3]</span>. 
                    Trip members should be capable of hiking <span className="text-green-50 font-medium"> 5-8 hours</span> each day (up to 11 miles) with as much as 3,000' elevation gain and 
                    loss. <span className="text-green-50 font-medium">Zip-lining</span> is suitable for beginners. Weight ranges for zip-lining are 60 pounds minimum and 250 pounds 
                    maximum. <span className="text-green-50 font-medium">Rafting</span> is suitable for beginners although comfort in/around water is recommended. 
                    Rafting is on rapids classified II-IV whitewater.
                    </p>
                </div>
            </div>

            <div className="flexCenter max-container relative w-full">
                <Image 
                    src="/boat.png"
                    alt="boat"
                    width={1440}
                    height={580}
                    className="w-full object-cover object-center lg:rounded-5xl"
                />

                <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
                    <Image 
                    src="/meter.svg"
                    alt="meter"
                    width={16}
                    height={158}
                    className="h-full w-auto"/>
                    <div className="flexBetween flex-col">
                        <div className="flex w-full flex-col">
                            <div className="flexBetween w-full">
                                <p className="regular-16 text-stone-300">End</p>
                                <p className="bold-16 text-green-50">48 min</p>
                            </div>
                            <p className="bold-20 mt-2">Nantahala River</p>
                        </div>

                        <div className="flex w-full flex-col">
                            <p className="regular-16 text-stone-300">Start</p>
                            <h4 className="bold-20 mt-2 whitespace-nowrap">REI Base</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activities