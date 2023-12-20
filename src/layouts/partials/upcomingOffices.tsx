"use client"

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const UpcomingOfficeComponent = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const accordionItems = [
    {
      question: 'Upcoming Offices',
      answer: [{
        name: 'Noida',
        date: 'Coming in the next 3 months'
      },
      {
        name: 'Chandigarh',
        date: 'Coming in the next 3 months'
      },
      {
        name: 'Indore',
        date: 'Coming in the next 3 months'
      },
      {
        name: 'Jaipur',
        date: 'Coming in the next 3 months'
      }
    ],
    },
    {
      question: 'Upcoming International Offices',
      answer: [{
        name: 'Dubai',
        date: 'Coming Soon'
      },
      {
        name: 'Singapore',
        date: 'Coming Soon'
      },
      {
        name: 'Malaysia',
        date: 'Coming Soon'
      },
      {
        name: 'Hong Kong',
        date: 'Coming Soon'
      }
    ],
    },
  ];

    return ( <>
    {/* <div className="grid gap-12 grid-cols-3 mt-8">
                <h1 className="col-span-3 text-[#97144D]">Upcoming Offices</h1>
                        <div>
                            <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            
                            <h2 className="mt-4 text-base text-2xl font-semibold text-[#97144D] ">Noida</h2>
                            <p className="mt-2 text-sm text-[#97144D]">Coming Soon</p>
                        </div>

                        <div>
                            <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            
                            <h2 className="mt-4 text-base text-2xl font-semibold text-[#97144D] ">Delhi</h2>
                            <p className="mt-2 text-sm text-[#97144D]">Coming Soon</p>
                        </div>
                        <div>
                            <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            
                            <h2 className="mt-4 text-base text-2xl font-semibold text-[#97144D] ">Mumbai</h2>
                            <p className="mt-2 text-sm text-[#97144D]">Coming Soon</p>
                        </div>
                <h1 className="col-span-3 text-[#97144D]">Upcoming International Offices</h1>
                        <div>
                            <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            
                            <h2 className="mt-4 text-base text-2xl font-semibold text-[#97144D] dark:text-white">Dubai</h2>
                            <p className="mt-2 text-sm text-[#97144D]">Coming Soon</p>
                        </div>

                        <div>
                            <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            
                            <h2 className="mt-4 text-base text-2xl font-semibold text-[#97144D] dark:text-white">Singapore</h2>
                            <p className="mt-2 text-sm text-[#97144D]">Coming Soon</p>
                        </div>
                        <div>
                            <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            
                            <h2 className="mt-4 text-base text-2xl font-semibold text-[#97144D] dark:text-white">Malaysia</h2>
                            <p className="mt-2 text-sm text-[#97144D]">Coming Soon</p>
                        </div>
            </div> */}




            <div className="w-full mx-auto mt-8">
                {accordionItems.map((item, index) => (
                    <div key={index} className="mb-4 ">
                    <div
                        onClick={() => toggleAccordion(index)}
                        className="cursor-pointer flex justify-between items-center bg-gray-200 p-4 rounded-md"
                    >
                        <div className="font-bold text-[#97144D] text-2xl">{item.question}</div>
                        <div>{activeIndex === index ? <FaChevronUp color="#97144d"/> :<FaChevronDown color="#97144d"/> }</div>
                    </div>
                    {activeIndex === index && (
                        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-8 transition-all ease-in-out">
                            {item.answer.map((ans, index) => (
                                <div key={index}>
                                    <div className="flex items-center gap-x-2">
                                        <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </span>
                                        
                                        <h2 className="text-3xl font-semibold text-[#97144D] ">{ans.name}</h2>
                                    </div>
                                    <p className="mt-2 text-sm text-[#97144D]">{ans.date}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    </div>
                ))}
            </div>

    </> );
}
 
export default UpcomingOfficeComponent;