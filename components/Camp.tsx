import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
    bgImg: string;
    title: string;
    location: string;
    members: string;
}

const CampSite = ({bgImg, title, location, members}:CampProps) => {
    return (
        <div className={`h-full w-full min-w-[1100px] ${bgImg} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
            <div className="flex flex-col h-full items-start justify-between p-6 lg:px-20 lg:py-10">
                <div className="flexCenter gap-4">
                    <div className="rounded-full bg-green-50 p-4">
                        <Image 
                            src="/folded-map.svg"
                            alt="map"
                            width={28}
                            height={28}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="bold-18 text-stone-300">{title}</h4>
                        <p className="regular-14 text-stone-300">{location}</p>
                    </div>
                </div>
                <div className="flexCenter gap-6">
                    <span className="flex -space-x-4 overflow-hidden">
                        {PEOPLE_URL.map((url) => (
                            <Image 
                            className="inline-block h-10 w-10 rounded-full"
                            src={url}
                            key="url"
                            alt="person"
                            width={52}
                            height={52}/>
                        ))}
                    </span>
                    <p className="bold-16 md:bold-20 text-stone-300">{members}</p>
                </div>
            </div>
        </div>
    )
}

const Camp = () => {
    return(
        <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
            <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
                <CampSite
                    bgImg="bg-bg-img-1"
                    title="REI Signiture Camp"
                    location="Gattlenburg, Tennessee"
                    members="50+ Joined"
                />

                <CampSite
                    bgImg="bg-bg-img-2"
                    title="Nantahala Camp"
                    location="Topton, North Carolina"
                    members="50+ Joined"
                />
            </div>

            <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-green-50 p-8 lg:max-w-[500px] x:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
                    <h2 className="regular-24 md:regular-32 2xl:regular-64 text-white">
                        What's Included
                    </h2>
                    <p className="regular-14 xl:regular-16 mt-5 text-white">
                        Any park or other admission fees or permits, Guides and Camp Host; 
                        Round trip transportation from Gatlinburg, TN to all destinations visited during the trip; 
                        Rafting gear, including wetsuits; all meals and snacks from lunch on day 1 through lunch on day 4.
                    </p>
                    <Image 
                        src="/quote.svg"
                        alt="camp-2"
                        width={186}
                        height={219}
                        className="camp-quote"
                    />
                </div>
            </div>
        </section>
    )
}

export default Camp