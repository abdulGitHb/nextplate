"use client"

import { markdownify } from "@/lib/utils/textConverter";
import { BetterROI } from "@/types";
import {motion} from 'framer-motion';

const OurNewRoiSection = ({betterRoi} : {betterRoi: BetterROI[]}) => {
    return ( 
        <div className="container mb-10 -mt-8 relative">
          <div className="w-full absolute bg-[#97144D]/10 left-0 h-[760px] md:h-[350px] skew-y-6" />
          <motion.h1
          initial={{
            opacity:0,
            scale:0.4,
            y:-50
          }}
          whileInView={{
            opacity:1,
            scale:1,
            y:0
          }}
          viewport={{once:true}}
          transition={{
            duration:1.5
          }}
          className="text-white w-fit ml-auto mr-auto bg-[#97144D] text-4xl text-center p-4">Your Recruitment Challenges + Our Insights = Better ROI</motion.h1>
          <div className="flex flex-col md:flex-row mt-8 gap-x-8 gap-y-10 items-center justify-center">
            {betterRoi.map((roi, index: number) => (
              <motion.div
              initial={{
                opacity:0,
                scale:0.5,
                y:50
              }}
              whileInView={{
                opacity:1,
                scale:1,
                y:0
              }}
              viewport={{once:true}}
              transition={{
                duration:1
              }}
              key={index} className=" flex flex-col text-center w-[250px] items-center justify-center">
                <div>
                <svg className="bg-transparent" width="230" height="114" viewBox="0 0 399 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M366.966 197H398.969C397.63 87.9713 308.831 0 199.485 0C90.1383 0 1.33883 87.9713 -6.86646e-05 197H32.0029C33.3394 105.645 107.812 32 199.485 32C291.157 32 365.63 105.645 366.966 197Z" fill="#D19F9E"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M336.492 104.235L363.019 86.3323C300.917 -3.29155 178.1 -26.5346 87.4638 34.635C-3.17227 95.8046 -27.5651 218.399 32.3171 309.52L58.844 291.618C8.84677 215.147 29.3782 112.442 105.365 61.1595C181.352 9.87658 284.279 29.2595 336.492 104.235Z" fill="#97144D"/>
                </svg>
                </div>
              <h1 className="text-3xl -mt-8"
                dangerouslySetInnerHTML={markdownify(roi.title)}/>
              <p
                dangerouslySetInnerHTML={markdownify(roi.description)}/>
              </motion.div>
              ))}
        </div>
        </div>
     );
}
 
export default OurNewRoiSection;