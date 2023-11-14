"use client"

import { markdownify } from "@/lib/utils/textConverter";
import {motion} from 'framer-motion';
import { AboutUs } from "@/types";
import ImageFallback from "@/helpers/ImageFallback";

const AboutUsSection = ({aboutUs}:{aboutUs: { titleOne: string; descriptionOne?: string; image: string; titleTwo: string; descriptionTwo?: string;}}) => {
    return ( 
        <div className="container overflow-hidden"
          // style={{ backgroundImage: `url(${data?.imageUrl})` }}
        >
            <div className="mb-16 text-left flex w-full">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col">
                            <h1
                            className="mb-4 text-[#97144D]"
                            dangerouslySetInnerHTML={markdownify(aboutUs.titleOne)}
                            />
                            <p
                            className="mb-8 text-[#454545]"
                            dangerouslySetInnerHTML={markdownify(aboutUs.descriptionOne ?? "")}
                            />
                        </div>
                        {aboutUs.image && (
                            <div className="">
                            <ImageFallback
                            src={aboutUs.image}
                            className="mx-auto"
                            width="600"
                            height="420"
                            alt="aboutUs image"
                            priority
                            />
                        </div>
                        )}
                        <div className="flex flex-col">
                            <h1
                            className="mb-4 text-[#97144D]"
                            dangerouslySetInnerHTML={markdownify(aboutUs.titleTwo)}
                            />
                            <p
                            className="mb-8 text-[#454545]"
                            dangerouslySetInnerHTML={markdownify(aboutUs.descriptionTwo ?? "")}
                            />
                        </div>
                    </div>      
            </div>
        </div>
     );
}
 
export default AboutUsSection;