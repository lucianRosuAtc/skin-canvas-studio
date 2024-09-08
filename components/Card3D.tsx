import React from 'react'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { artistsData } from './(data)/hero-data';
import Image from 'next/image';
import Link from 'next/link';

export default function Card3D() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grig-cols-3 p-10 gap-12">
            {artistsData.map((artist) => (
                <div key={artist.image}>

                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {artist.name}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {artist.desc}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={artist.image}
                                    height="100"
                                    width="300"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>


                            {/* MARK: Artist design style  
                            */}
                            <div className="flex justify-between items-center mt-20">

                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    {artist.design}
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    {artist.secondDesign}
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    {artist.thirdDesign}
                                </CardItem>
                            </div>


                            {/* MARK: Artist social media link  
                            */}
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href={artist.sm}
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="/Gallery"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Gallery
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
            ))}
        </div>
    )
}
