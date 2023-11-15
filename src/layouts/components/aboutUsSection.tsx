"use client"

import { markdownify } from "@/lib/utils/textConverter";
import {motion} from 'framer-motion';
import { AboutUs } from "@/types";
import ImageFallback from "@/helpers/ImageFallback";

const AboutUsSection = ({aboutUs}:{aboutUs: { titleOne: string; descriptionOne?: string; image: string; titleTwo: string; descriptionTwo?: string;}}) => {
    return ( 
        <div className="container relative"
          // style={{ backgroundImage: `url(${data?.imageUrl})` }}
          >
          {/* <div className="w-full absolute -top-6 bg-[#97144D]/10 left-0 h-[760px] md:h-[350px] -skew-y-6" /> */}
            <div className="mb-16 mt-4 text-left flex  flex-col w-full">
                        <h1 className="text-[#97144D] mx-auto mt-4 w-fit">Search can be a Tyrant in the Journey of Selection! </h1>
                    <div className="mt-6 flex flex-col md:flex-row gap-x-3 gap-y-3 text-center">
                        <motion.div
                        initial={{
                            opacity:0,
                            x:-150
                        }}
                        whileInView={{
                            opacity:1,
                            x:0
                        }}
                        viewport={{once:true}}
                        transition={{
                            duration:1
                        }}
                        className="grid grid-cols-3 border-2 border-[#97144D] place-items-stretch ">
                            <h1
                            className="col-span-1 text-4xl flex items-center justify-center text-gray-100 p-2 bg-gradient-to-b from-[#97144D] via-[#d61c6d] to-[#97144D]"
                            dangerouslySetInnerHTML={markdownify(aboutUs.titleOne)}
                            />
                            <motion.p
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            viewport={{once:true}}
                            transition={{duration:1}}
                            className="col-span-2 p-4 text-2xl flex items-center justify-center text-[#454545]"
                            dangerouslySetInnerHTML={markdownify(aboutUs.descriptionOne ?? "")}
                            />
                        </motion.div>
                        {/* {aboutUs.image && (
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
                        )} */}
                        <motion.div
                        initial={{
                            opacity:0,
                            x:150
                        }}
                        whileInView={{
                            opacity:1,
                            x:0
                        }}
                        viewport={{once:true}}
                        transition={{
                            duration:1
                        }}
                        className="grid grid-cols-3 border-2 border-[#97144D] place-items-stretch ">
                            <h1
                            className="col-span-1 order-2 p-4 flex items-center justify-center text-gray-100 bg-gradient-to-b from-[#97144D] via-[#d61c6d] to-[#97144D]"
                            dangerouslySetInnerHTML={markdownify(aboutUs.titleTwo)}
                            />
                            <motion.p
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            viewport={{once:true}}
                            transition={{duration:1}}
                            className="col-span-2 p-4 order-1 flex items-center justify-center text-2xl text-[#454545]"
                            dangerouslySetInnerHTML={markdownify(aboutUs.descriptionTwo ?? "")}
                            />
                        </motion.div>
                    </div>      
            </div>
        </div>
     );
}
 
export default AboutUsSection;