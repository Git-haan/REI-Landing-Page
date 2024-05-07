import { FEATURES } from "@/constants"
import Image from "next/image"

const Features = () => {
    return(
        <section id="itinerary"
        className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
            <div className="flex max-container padding-container relative w-full justify-end">
                <div className="flex flex-1 lg:min-h-[900px]">
                    <Image 
                    src="/phone.png"
                    alt="phone"
                    width={440}
                    height={1000}
                    className="feature-phone"
                    />
                </div>
                <div className="z-20 flex w-full flex-col lg:w-[60%]">
                    <div className="relative">
                        <h2 className="bold-40 lg:bold-64">
                            Your Adventure Itinerary
                        </h2>

                    </div>
                    <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20 ">
                        {FEATURES.map((feature) => (
                            <FeatureItem 
                                key={feature.title}
                                title={feature.title}
                                icon={feature.icon}
                                variant={feature.variant}
                                description={feature.description}
                            />
                        ))}
                    </ul>
                </div>
            </div>

        </section>
    )
}

type FeatureItem = {
    title: string;
    icon: string;
    variant: string;
    description: string;
}

const FeatureItem = ({ title, icon, variant, description }:
FeatureItem) => {
    return (
        <li className="flex w-full flex-1 flex-col items-start">
            <div className="rounded-full p-4 lg:p-7 bg-green-50">
                <Image 
                src={icon}
                alt="map"
                width={28}
                height={28}/>
            </div>
            <h2 className="bold-20 lg:bold-32 mt-5">
                {title}
            </h2>
            <p className="regualr-16  mt-5 bg-white/80">
                {description}
            </p>
        </li>
    )
}

export default Features