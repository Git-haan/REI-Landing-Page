import Image from "next/image"

const Guide = () => {
    return(
        <section className="flexCenter flex-col">
            <div className="padding-container max-container w-full pb-24">
                <p className="regular-18 -mt-1 mb-3 text-stone-500">WE ARE HERE FOR YOU</p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Your Personal Guide</h2>
                    <p className="regular-16 text-stone-700 xl:max-w-[520px]">
                        Only with the REI Guide App will you no longer get lost. 
                        Our support for offline maps ensures safe traveling with a built in gps tracker for ensured saftey. 
                        Invite your friends and relatives to have fun in the wilderness without the fear of getting lost.
                    </p>
                </div>
            </div>

            <div>
                <Image 
                    src="/boat.png"
                    alt="boat"
                    width={1440}
                    height={580}
                    className="w-full object-cover object-center 2xl:rounded-5xl"
                />
            </div>
        </section>
    )
}

export default Guide