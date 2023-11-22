"use client"
import {motion, useScroll} from 'framer-motion';
// import { Services } from '@/types';
import { markdownify } from '@/lib/utils/textConverter';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import styles from "./styles.module.css";
import Card from './card';

const OurServicesSection = ({services}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })


  console.log(services, "services here")
    return ( 
        <motion.div
          initial={{
            opacity:1,
            scale:1,
            y:-250
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
          className="container mb-4 mt-6 md:mt-20">
            <div className=" place-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 ">
            <h1 className="mb-6 text-[#97144D] text-6xl h-[90%] w-[100%] flex justify-center items-center rounded-md p-4 col-span-1 sm:col-span-2 bg-[url(../../public/images/solutions-image.png)]  bg-cover bg-center bg-no-repeat bg-gray-200/80 bg-blend-lighten relative">
            Our Solutions
            </h1>
            {services.map((service, index) => (
              <div key={service.title} className="relative col-span-1 group flex flex-col text-gray-700 bg-gray-100 shadow-md w-72 aspect-square rounded-xl bg-clip-border">
                <div className="relative bg-cover bg-center h-40 mx-4 -mt-6 sm:mt-1 group-hover:-mt-8 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40"
                style={{backgroundImage: `url(${service.image})`}}
                >
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans  text-xl antialiased font-bold leading-snug tracking-normal text-[#97144D]"
                  dangerouslySetInnerHTML={markdownify(service.title)}/>
                </div>
                <div className="p-6 pt-0">
                  <Link href={service.link}>
                    <button
                      className="rounded-lg bg-[#97144D] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#97144D]/20 transition-all hover:shadow-lg hover:shadow-[#97144D]/40"
                      type="button"
                      data-ripple-light="true"
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
              ))}
            </div>
          </motion.div>
        // <main ref={container} className={styles.main}>
        //   <h1 className='text-center text-[#97144D] font-serif'>Our Solutions</h1>
        //   {
        //     services.map( (service, i) => {
        //       const targetScale = 1 - ( (services.length - i) * 0.05);
        //       return <Card key={`p_${i}`} i={i} {...service} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        //     })
        //   }
        // </main>
     );
}
 
export default OurServicesSection;