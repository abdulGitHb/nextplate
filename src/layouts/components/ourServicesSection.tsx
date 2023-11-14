"use client"
import {motion} from 'framer-motion';
import { Services } from '@/types';
import { markdownify } from '@/lib/utils/textConverter';

const OurServicesSection = ({services}:{services: Services[]}) => {
    return ( 
        <motion.div
          initial={{
            opacity:1,
            scale:1,
            y:200
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
          className="container mb-4 -mt-6 md:mt-20">
            <div className=" place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 ">
            <div className="mb-6 h-[90%] w-[90%] flex justify-center items-center rounded-md p-4 col-span-2 bg-[url(../../public/images/solutions-image.png)]  bg-cover bg-center bg-no-repeat relative">
              <h1 className='text-[#97144D] text-6xl'>Our Solutions</h1>
            </div>
            {services.map((service, index: number) => (
              <div key={service.title} className="relative col-span-1 group flex flex-col text-gray-700 bg-gray-100 shadow-md w-72 rounded-xl bg-clip-border">
                <div className="relative object-fill h-40 mx-4 -mt-6 sm:mt-1 group-hover:-mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                  <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                    alt="img-blur-shadow"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
                  dangerouslySetInnerHTML={markdownify(service.title)}/>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="rounded-lg bg-[#97144D] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#97144D]/20 transition-all hover:shadow-lg hover:shadow-[#97144D]/40"
                    type="button"
                    data-ripple-light="true"
                  >
                    Read More
                  </button>
                </div>
              </div>
              ))}
            </div>
          </motion.div>
     );
}
 
export default OurServicesSection;