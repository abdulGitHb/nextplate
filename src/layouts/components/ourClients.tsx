"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { OurClients } from "@/types";
import { markdownify } from "@/lib/utils/textConverter";

const OurClientSection = ({ourClients}:{ourClients:OurClients[]}) => {
    return ( 
    <>    
    <h1 className="text-center font-serif text-[#97144d] mt-16">
        WHO WE WORK WITH
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6 gap-y-6 mb-16">
        {/* <div className=" w-72 aspect-square border-2 border-[#97144d] rounded-full group relative mx-auto">
            <div className="w-full absolute h-full flex group-hover:text-transparent items-center justify-center text-center font-serif text-4xl font-bold">
                CATEGORY <br/> A
            </div>
            <div className="w-full h-0 flex items-center justify-center text-center text-transparent group-hover:text-black bg-transparent group-hover:bg-gray-400 rounded-full group-hover:h-full transition-all ease-in-out duration-500 bg-cover bg-center"
                style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701063007/talentWorkx/hsabvaul8ja78ofpkdob.png)`}}
            >
            </div>
        </div>
        <div className=" w-72 aspect-square border-2 border-[#97144d] rounded-full group relative mx-auto">
            <div className="w-full absolute h-full flex group-hover:text-transparent items-center justify-center text-center font-serif text-4xl font-bold">
                CATEGORY <br/> B
            </div>
            <div className="w-full h-0 flex items-center justify-center text-center text-transparent group-hover:text-black group-hover:h-full transition-all ease-in-out duration-500 bg-cover bg-center"
                style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701063024/talentWorkx/zmafbur2h83tf8kmdvfw.png)`}}
            >
            </div>
        </div>
        <div className=" w-72 aspect-square border-2 border-[#97144d] rounded-full group relative mx-auto">
            <div className="w-full absolute h-full flex group-hover:text-transparent items-center justify-center text-center font-serif text-4xl font-bold">
                CATEGORY <br/> C
            </div>
            <div className="w-full h-0 flex items-center justify-center text-center text-transparent group-hover:text-black bg-transparent group-hover:bg-gray-400 rounded-full group-hover:h-full transition-all ease-in-out duration-500 bg-cover bg-center"
                style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701063022/talentWorkx/x7fd5ffyc8jdfnihicro.png)`}}
            >
            </div>
        </div> */}
        {/* {ourClients.map((ourClient, index: number) => (
        <motion.div
            initial={{opacity:0, scale:0.5,y:-100}}
            whileInView={{opacity:1, scale:1,y:0}}
            viewport={{once:true}}
            transition={{ duration:1.5 }}
            key={index}
            className="relative group mt-6 text-gray-500 hover:text-pink-500 bg-cover bg-center bg-no-repeat  hover:border-2 hover border-[#97144D] shadow-md w-72 aspect-square rounded-xl bg-clip-border mx-auto"
        >
                <div className="bg-cover bg-gray-100/90 group hover:bg-gray-300 bg-center bg-no-repeat rounded-xl bg-clip-border h-full w-full bg-blend-lighten hover:bg-blend-normal"
                style={{backgroundImage: `url(${ourClient.bgImage})`,}}>
                  <div className="h-full flex flex-col justify-center items-center overflow-hidden">
                    <h5 className="block mb-2 w-full font-sans text-6xl font-bold antialiased leading-snug tracking-normal text-[#97144D] bg-gray-300 group-hover:w-0 group-hover:text-transparent text-center transition-all ease-in-out duration-500"
                    dangerouslySetInnerHTML={markdownify(ourClient.categoryName)}/>
                  </div>
                </div>
            </motion.div>
            ))} */}
        {ourClients.map((ourClient, index: number) => (
        <motion.div
            initial={{opacity:0, scale:0.5,y:-100}}
            whileInView={{opacity:1, scale:1,y:0}}
            viewport={{once:true}}
            transition={{ duration:1.5 }}
            key={index}
            className="relative group mt-6 bg-cover bg-center bg-no-repeat shadow-lg w-72 text-[#97144d] aspect-square rounded-xl bg-clip-border mx-auto"
        >
                <div
                    after-dynamic-value={ourClient.content}
                    className="relative z-10 w-full h-[320px] bg-gray-100 flex items-center justify-center text-[25px] font-bold rounded-md cursor-pointer p-3
                    
                    before:absolute before:content-[''] before:w-[40%] before:h-[40%] before:flex before:items-center before:justify-center before:text-xl before:font-bold before:bg-[#97144d] before:top-0 before:right-0 before:transition-all before:duration-500 before:rounded-bl-full 
                    
                    
                    after:absolute after:content-[''] after:w-[40%] after:h-[40%] after:flex after:items-center after:justify-center after:text-xl after:font-bold after:bg-[#97144d] after:bottom-0 after:left-0 after:transition-all after:duration-500  after:rounded-tr-full
                    
                    hover:before:w-[100%] hover:before:h-[100%] hover:before:transition-all hover:before:rounded-lg
                    
                    hover:after:w-[100%] hover:after:h-[100%] hover:after:transition-all hover:after:duration-200 hover:after:rounded-lg
                    
                    hover:after:content-[attr(after-dynamic-value)] hover:after:text-4xl hover:after:text-center hover:after:text-gray-100
                    ">
                    {ourClient.categoryName}
                </div>
            </motion.div>
            ))}
    </div>
    </>
 );
}
 
export default OurClientSection;