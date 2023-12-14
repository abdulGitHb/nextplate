"use client"

import { markdownify } from "@/lib/utils/textConverter";
import {motion} from 'framer-motion';
import { Industries } from "@/types";
import Link from "next/link";


const OurIndustriesSection = ({industries}:{industries: Industries[]}) => {
    return ( 
        <div className="container mb-12 mt-6 md:mt-20">
            <h1 className="mb-6 text-[#97144D] font-serif text-center" >Industries We Serve</h1>
            <div className=" place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
            {industries.map((industry, index: number) => (
              <motion.div
                initial={{
                  opacity:0,
                  scale:0.5,
                  x:-100
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
              key={index} className="relative group mt-6 text-gray-700 hover:text-pink-500 bg-cover bg-center bg-no-repeat  hover:border-2 hover border-[#97144D] shadow-md w-72 aspect-square rounded-xl bg-clip-border"
              >
                <div className="bg-cover bg-gray-200/70 hover:bg-[#97144D] bg-center bg-no-repeat rounded-xl bg-clip-border h-full w-full bg-blend-lighten hover:bg-blend-multiply"
                style={{backgroundImage: `url(${industry.image})`,}}>
                <Link href={industry.link}>
                  <div className="p-6 h-full flex flex-col justify-between">
                    <svg fill="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-16 h-12 mb-4 text-[#97144d] group-hover:text-gray-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M 20 5 L 20 10.46875 L 17 12.25 L 17 9.21875 L 15.5 10.15625 L 12 12.25 L 12 9.21875 L 10.5 10.15625 L 5.5 13.15625 L 5 13.4375 L 5 27 L 27 27 L 27 5 Z M 22 7 L 25 7 L 25 25 L 7 25 L 7 14.53125 L 10 12.75 L 10 15.78125 L 11.5 14.84375 L 15 12.75 L 15 15.78125 L 16.5 14.84375 L 21.5 11.84375 L 22 11.5625 Z M 9 17 L 9 19 L 11 19 L 11 17 Z M 13 17 L 13 19 L 15 19 L 15 17 Z M 17 17 L 17 19 L 19 19 L 19 17 Z M 21 17 L 21 19 L 23 19 L 23 17 Z M 9 21 L 9 23 L 11 23 L 11 21 Z M 13 21 L 13 23 L 15 23 L 15 21 Z M 17 21 L 17 23 L 19 23 L 19 21 Z M 21 21 L 21 23 L 23 23 L 23 21 Z"
                        clipRule="evenodd"></path>
                    </svg>
                    <h5 className="block mb-2 font-sans text-3xl font-bold antialiased leading-snug tracking-normal text-[#97144d] group-hover:text-gray-300"
                    dangerouslySetInnerHTML={markdownify(industry.title)}
                    />
                    {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit"
                      dangerouslySetInnerHTML={markdownify(industry.link)}
                    /> */}
                      <div className="">
                          <button
                            className="flex items-center gap-2 font-sans text-xs font-bold text-center text-[#97144d] uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                          >
                              Learn More
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                              </svg>
                            
                          </button>
                      </div>
                  </div>
                </Link>
                </div>
            </motion.div>
              ))}
            </div>
          </div>
     );
}
 
export default OurIndustriesSection;