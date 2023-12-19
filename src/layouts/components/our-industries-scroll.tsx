"use client"
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Link from "next/link";
import { Industries } from "@/types";
import { markdownify } from "@/lib/utils/textConverter";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  industries:Industries[]
}

function ParallaxText({ children, baseVelocity = 100, industries }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(0, -55, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */

  return (
    <div className="parallax flex flex-nowrap overflow-hidden">
      <motion.div className="scroller gap-x-8 flex flex-nowrap" style={{x}}>
      {industries.map((industry, index: number) => (
              <div
              key={index} className="relative group mt-6 bg-cover bg-center bg-no-repeat  hover:border-2 hover border-[#97144D] shadow-md w-[60vw] sm:w-[60vh] aspect-square rounded-xl bg-clip-border bg-gray-300"
              >
                <Link href={industry.link} legacyBehavior>
                  <a>
                
                <div className="industry-name w-full h-1/2 px-4 font-serif text-4xl rounded-t-xl font-bold bg-[#97144d] text-gray-300">
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
                  {industry.title}
                  </div>
                <div className="industry-image group-hover:w-1/2 group-hover:h-1/2 group-hover:rounded-b-xl w-full h-full z-20 transition-all ease-in-out duration-200 absolute bottom-0 left-0 bg-cover bg-no-repeat bg-center rounded-xl"
                style={{backgroundImage: `url(${industry.image})`,}}></div>
                <div className="industry-link  w-1/2 h-1/2 absolute flex items-center justify-center bottom-0 z-10 right-0">
                  <button
                    className="flex items-center gap-2 p-4 font-sans text-xl font-bold text-center text-[#97144d] uppercase align-middle transition-all rounded-lg hover:bg-[#97144d]/30"
                    type="button"
                    data-ripple-dark="true"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                            
                  </button>
                </div>
                </a>
                </Link>
               </div>
              ))}
      </motion.div>
    </div>
  );
}

export default function OurIndustriesSectionScroll({industries}:{industries: Industries[]}) {
  return (
    <section className="">
      <h1 className="mb-6 mt-20 text-[#97144D] font-serif text-center" >Industries We Serve</h1>
      <ParallaxText baseVelocity={-3} industries={industries}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={3} industries={industries}>Scroll velocity</ParallaxText>
    </section>
  );
}
