"use client"

import { markdownify } from "@/lib/utils/textConverter";
import {motion} from 'framer-motion';
import styles from "@/components/styles.module.css";

const AboutUsSection = ({aboutUs}:{aboutUs: { titleOne: string; descriptionOne?: string; image: string; titleTwo: string; descriptionTwo?: string;}}) => {
    return ( 
        <div className="container relative"
          // style={{ backgroundImage: `url(${data?.imageUrl})` }}
          >
          {/* <div className="w-full absolute -top-6 bg-[#97144D]/10 left-0 h-[760px] md:h-[350px] -skew-y-6" /> */}
            <div className="mb-16 mt-4 text-left flex  flex-col w-full">
                        <h1 className="text-[#97144D] mx-auto mt-4 w-fit">Search can be a Tyrant in the Journey of Selection! </h1>
                    <div className="mt-6 flex flex-col gap-x-3 text-center px-6 md:px-16">
                        <div className="flex flex-col md:grid md:grid-cols-2 mr-2 md:place-items-stretch ">
                            <motion.h1
                            initial={{
                                x:150
                            }}
                            whileInView={{
                                x:0
                            }}
                            viewport={{once:true}}
                            transition={{
                                duration:1
                            }}
                            className={`${styles.animatedTxt} w-full md:col-span-1 mx-auto text-gray-200`}
                            dangerouslySetInnerHTML={markdownify(aboutUs.titleOne)}
                            />
                            <motion.p
                            initial={{y:200, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{duration:1, delay:0.5}}
                            className="col-span-1 md:p-4 text-lg md:text-2xl border-l-8 border-gray-600 flex items-center justify-center text-[#454545]"
                            dangerouslySetInnerHTML={markdownify(aboutUs.descriptionOne ?? "")}
                            />
                        </div>
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
                        <div
                        className="flex flex-col md:grid md:grid-cols-2 ml-2 md:place-items-stretch ">
                            <motion.h1
                            initial={{
                                x:-150
                            }}
                            whileInView={{
                                x:0
                            }}
                            viewport={{once:true}}
                            transition={{
                                duration:1.5
                            }}
                            className={`${styles.animatedTxt} col-span-1 order-2 mx-auto py-4 flex items-center justify-center text-gray-100`}
                            dangerouslySetInnerHTML={markdownify(aboutUs.titleTwo)}
                            />
                            <motion.p
                            initial={{y:-200, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{duration:1.5, delay:0.5}}
                            className="col-span-1 md:p-4 order-1 border-r-8 border-gray-600 flex items-center justify-center text-lg md:text-2xl text-[#454545]"
                            dangerouslySetInnerHTML={markdownify(aboutUs.descriptionTwo ?? "")}
                            />
                        </div>
                    </div>      
            </div>
            {/* <div className={styles.animatedTxt}>
                <span className="text-[150px]">
                    15
                </span>years
            </div> */}
        </div>
     );
}
 
export default AboutUsSection;