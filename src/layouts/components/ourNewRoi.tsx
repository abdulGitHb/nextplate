"use client"

import { markdownify } from "@/lib/utils/textConverter";
import { BetterROI } from "@/types";
import {motion} from 'framer-motion';

const OurNewRoiSection = ({betterRoi} : {betterRoi: BetterROI[]}) => {
    return ( 
        // <div className="container mb-10 mt-16 relative">
        //   <div className="w-full absolute bg-[#97144D]/10 left-0 h-[900px] md:h-[370px]" />
        //   <motion.h1
        //   initial={{
        //     opacity:0,
        //     scale:0.4,
        //     y:-50
        //   }}
        //   whileInView={{
        //     opacity:1,
        //     scale:1,
        //     y:0
        //   }}
        //   viewport={{once:true}}
        //   transition={{
        //     duration:1.5
        //   }}
        //   className= "ml-auto mr-auto text-[#97144D] text-4xl text-center p-4">Your Recruitment Challenges + Our Insights = Better ROI</motion.h1>
        //   {/* <div className="flex flex-col md:flex-row mt-8 gap-x-8 gap-y-10 items-center justify-center">
        //     {betterRoi.map((roi, index: number) => (
        //       <motion.div
        //       initial={{
        //         opacity:0,
        //         scale:0.5,
        //         y:50
        //       }}
        //       whileInView={{
        //         opacity:1,
        //         scale:1,
        //         y:0
        //       }}
        //       viewport={{once:true}}
        //       transition={{
        //         duration:1
        //       }}
        //       key={index} className=" flex flex-col text-center w-[250px] items-center justify-center">
        //         <div>
        //         <svg className="bg-transparent" width="230" height="114" viewBox="0 0 399 197" fill="none" xmlns="http://www.w3.org/2000/svg">
        //           <path fillRule="evenodd" clipRule="evenodd" d="M366.966 197H398.969C397.63 87.9713 308.831 0 199.485 0C90.1383 0 1.33883 87.9713 -6.86646e-05 197H32.0029C33.3394 105.645 107.812 32 199.485 32C291.157 32 365.63 105.645 366.966 197Z" fill="#D19F9E"/>
        //           <path fillRule="evenodd" clipRule="evenodd" d="M336.492 104.235L363.019 86.3323C300.917 -3.29155 178.1 -26.5346 87.4638 34.635C-3.17227 95.8046 -27.5651 218.399 32.3171 309.52L58.844 291.618C8.84677 215.147 29.3782 112.442 105.365 61.1595C181.352 9.87658 284.279 29.2595 336.492 104.235Z" fill="#97144D"/>
        //         </svg>
        //         </div>
        //       <h1 className="text-3xl -mt-8"
        //         dangerouslySetInnerHTML={markdownify(roi.title)}/>
        //       <p
        //         dangerouslySetInnerHTML={markdownify(roi.description)}/>
        //       </motion.div>
        //       ))}
        // </div> */}

        // <div className="w-full group relative flex flex-col md:flex-row justify-center items-center md:justify-around">
        //   {betterRoi.map((roi, index: number) => (
        //     <motion.div
        //     initial={{
        //       opacity:0,
        //       scale:0.5,
        //       y:50
        //     }}
        //     whileInView={{
        //       opacity:1,
        //       scale:1,
        //       y:0
        //     }}
        //     viewport={{once:true}}
        //     transition={{
        //       duration:1
        //     }}
        //     className="" key={index}>
        //       <div className="z-10">
        //         <div className="relative w-[266px] object-cover">
        //           <svg className="fill-[#97144D] group-hover:fill-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="hexagon">
        //           <rect width="150" height="150" fill="none"></rect>
        //           <path d="M219.87305,66.73828l-84-47.478a16.08654,16.08654,0,0,0-15.7461,0l-84,47.47852A16.0255,16.0255,0,0,0,28,80.668V175.332a16.02688,16.02688,0,0,0,8.127,13.92969l84,47.478a16.08782,16.08782,0,0,0,15.7461,0l84-47.47852A16.0255,16.0255,0,0,0,228,175.332V80.668A16.02688,16.02688,0,0,0,219.87305,66.73828Z"></path>
        //           </svg>
        //           <h1 className="opacity-100 group-hover:opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-center text-white"
        //           dangerouslySetInnerHTML={markdownify(roi.title)}/>
        //           <p className="opacity-0 group-hover:opacity-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-center text-[#97144D]"
        //           dangerouslySetInnerHTML={markdownify(roi.description)}/>
        //         </div>
        //       </div>

        //       {/* <div className="absolute z-0 top-0 group-hover:opacity-100" key={index}>
        //       <div className="w-[266px]  object-cover">
        //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="hexagon">
        //         <rect width="150" height="150" fill="none"></rect>
        //         <path fill="#d3d3d3" d="M219.87305,66.73828l-84-47.478a16.08654,16.08654,0,0,0-15.7461,0l-84,47.47852A16.0255,16.0255,0,0,0,28,80.668V175.332a16.02688,16.02688,0,0,0,8.127,13.92969l84,47.478a16.08782,16.08782,0,0,0,15.7461,0l84-47.47852A16.0255,16.0255,0,0,0,228,175.332V80.668A16.02688,16.02688,0,0,0,219.87305,66.73828Z"></path>
        //         </svg>
        //         <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-center text-[#97144D]"
        //           dangerouslySetInnerHTML={markdownify(roi.description)}/>
        //         </div>
        //       </div> */}
        //     </motion.div>
        //   ))}
        // </div>
        // </div>

// ______________________________________________________________________________________________

// ______________________________________________________________________________________________


        <div className="container mb-10 relative">
          {/* <div className="w-full absolute bg-[#97144D]/10 left-0 h-[900px] md:h-[370px]" /> */}

        <div className="w-full group relative py-6 grid grid-cols-1 md:grid-cols-3 justify-center items-center md:justify-between">
          <motion.div
            initial={{
                  opacity:0,
                  x:-150
            }}
            whileInView={{
                  opacity:1,
                  scale:1,
                  x:0
            }}
            viewport={{once:true}}
                transition={{
                  duration:1
            }}
          className= "ml-auto mr-auto col-span-2 grid grid-cols-4 items-center text-white text-4xl text-center p-4">
            <h1 className="text-gray-300 col-span-2">Your Recruitment Challenges <br></br> + <br></br>Our Insights</h1>
            <h1 className="text-gray-300 col-span-1">=</h1>
            <h1 className="text-gray-300 col-span-1 text-left">Better ROI</h1>
          </motion.div>
          <div className="flex flex-col col-span-1">
            {betterRoi.map((roi, index: number) => (
              <motion.div 
              initial={{
                opacity:0,
                x:150
              }}
              whileInView={{
                    opacity:1,
                    scale:1,
                    x:0
              }}
              viewport={{once:true}}
                  transition={{
                    duration:1.5
              }}
              className="" key={index}>
                <div className="flex">
                  <div className="relative w-[140px] object-cover">
                    <svg className="fill-gray-300 group-hover:fill-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="hexagon">
                    <rect width="150" height="150" fill="none"></rect>
                    <path d="M219.87305,66.73828l-84-47.478a16.08654,16.08654,0,0,0-15.7461,0l-84,47.47852A16.0255,16.0255,0,0,0,28,80.668V175.332a16.02688,16.02688,0,0,0,8.127,13.92969l84,47.478a16.08782,16.08782,0,0,0,15.7461,0l84-47.47852A16.0255,16.0255,0,0,0,228,175.332V80.668A16.02688,16.02688,0,0,0,219.87305,66.73828Z"></path>
                    </svg>
                    <h1 className="opacity-100 group-hover:text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-center text-white"
                    dangerouslySetInnerHTML={markdownify(roi.title)}/>
                  </div>
                    <p className="text-xl font-bold text-center flex items-center justify-center text-gray-300"
                    dangerouslySetInnerHTML={markdownify(roi.description)}/>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
        </div>
     );
}
 
export default OurNewRoiSection;