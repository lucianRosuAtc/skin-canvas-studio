

import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";
import { ourJourney2020, ourJourney2021, ourJourney2022, ourJourney2023, ourJourney2024 } from "./(data)/about-data";


export function TimelineComp() {
    const data = [
        // MARK: "Early 2024"
        {
            title: "Early 2024",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 mb-8 ">
                        Skin Canvas Studio celebrates reaching over 5,000 satisfied clients and 100 partnered artists.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {ourJourney2024.map((image, index) => (
                            <Image
                                key={index}
                                src={image.image}
                                alt={image.desc}
                                width={300}
                                height={300}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        ))}
                    </div>
                </div>
            ),
        },
        // MARK: "Early 2023"
        {
            title: "Early 2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 mb-8">
                        We introduce virtual consultations, making tattoo planning accessible worldwide.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {ourJourney2023.map((image, index) => (
                            <Image
                                key={index}
                                src={image.image}
                                alt={image.desc}
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        ))}
                    </div>
                </div>
            ),
        },
        // MARK: "Early 2022"
        {
            title: "Early 2022",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 mb-8">
                        Skin Cannvas Studio hosts its first international tattoo convention in London.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {ourJourney2022.map((image, index) => (
                            <Image
                                key={index}
                                src={image.image}
                                alt={image.desc}
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        ))}
                    </div>
                </div>
            ),
        },
        // MARK: "Early 2021"
        {
            title: "Early 2021",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 mb-8">
                        Skin Cannvas Studio hosts its first international tattoo convention in London.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {ourJourney2021.map((image, index) => (
                            <Image
                                key={index}
                                src={image.image}
                                alt={image.desc}
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        ))}
                    </div>
                </div>
            ),
        },
        // MARK: "Early 2020"
        {
            title: "Early 2020",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 mb-8">
                        Skin Canvas Studio is founded in a small studio in Exeter, Devon, Uk, by a group of tattoo enthusiasts and artists.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {ourJourney2020.map((image, index) => (
                            <Image
                                key={index}
                                src={image.image}
                                alt={image.desc}
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        ))}
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}


