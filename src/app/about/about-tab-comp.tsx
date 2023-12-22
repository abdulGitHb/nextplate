"use client"

import { useState } from "react";
import { FaChartLine, FaUsers } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";


const AboutTabComp = () => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };


  const tabs = [
    { label: 'ABOUT', heading:'About Us', image: 'https://res.cloudinary.com/dmquwnaeb/image/upload/v1700672718/talentWorkx/t80ecqmorlgqrfjx2yaw.jpg', 
    content:["150 Years of Combined Experience in the Industry empowers us with the","“Art of Search Curation”", "leading to near perfection in Selection. Our DNA- Deliver Not Await! We promise to Deliver results irrespective of challenges we come across. We don't await answers from our Client's rather WE present them with solutions and insights to achieve", "“Better ROI”"]},
    { label: 'MISSION', heading:'Our Mission', image: 'https://res.cloudinary.com/dmquwnaeb/image/upload/f_auto,q_auto/v1/talentWorkx/bzfgsm2fgljt2vwkbcsq', 
    content:["Our mission 2030:","“$100 billion company by 2030”.", "Fueled by innovation and a commitment to excellence, we're on a transformative journey to make a change in the industry. Our dynamic team, cutting-edge tech, and strategic foresight propel us towards this ambitious milestone. Beyond financial success, it's about cultivating trust, partnerships, and a culture of", "“Growth and innovation”."]
    },
    { label: 'VISION', heading:'Our Vision', image:'https://res.cloudinary.com/dmquwnaeb/image/upload/f_auto,q_auto/v1/talentWorkx/qiszucnmrtpquko28nhp', 
    content:["TalentWorkx aspires to be the","“World's most admired Human Capital Management Company”.", "We're not just about business; we're about shaping global workplaces. With a commitment to diversity, inclusivity, and continuous learning, we champion human potential. Join us in creating an environment where organizations thrive, and individuals flourish—shaping a future where the", "“Human spirit knows no bounds”."],
    }    
  ];
    return ( 
      <div>
      <h1 className="flex justify-center mb-2 md:mb-8 mt-2 items-center font-serif bg-gradient-to-r from-stone-100 via-[#97144d] to-stone-100 text-[4vh] md:text-[4vw] font-bold text-gray-200 headerImg h-[20]">{tabs[activeTab].heading}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 mb-8">
            <div className="col-span-1">
                {activeTab !== null && (
                  <div className="break-words p-5">
                      <p className="mb-6 text-lg md:text-2xl text-gray-500">
                        {tabs[activeTab].content[0]} <br />
                        <span className="text-2xl lg:text-3xl font-bold text-[#97144D]">{tabs[activeTab].content[1]}</span> <br /> {tabs[activeTab].content[2]} <br /> <span className="text-2xl md:text-4xl font-bold text-[#97144D]">{tabs[activeTab].content[3]}</span>.
            </p>
                  </div>
                )}
            </div>
            <div className="col-span-1 rounded-lg aspect-square bg-cover bg-center bg-no-repeat relative"
            style={{backgroundImage: `url(${tabs[activeTab].image})`}}
            >
              <div className="absolute bottom-0 left-0 z-10 p-8 bg-white border-4 border-[#97144D] rounded shadow lg:-mb-8 lg:-ml-14 sm:p-8 dark:text-gray-300  ">
                <p className=" text-lg md:text-xl font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    className="absolute top-0 left-0 w-16 h-16 text-[#97144d] dark:text-gray-300 opacity-10"
                    viewBox="0 0 16 16">
                          <path
                              d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                          </path>
                      </svg> <span className="text-xl md:text-3xl xl:text-5xl text-[#97144D]">150 Years</span><br /> Of Combined Experience
                  </p>
              </div>
            
            </div>
            <div className="h-[70vw] md:h-[70vh] col-span-1 grid grid-rows-3 gap-y-4 p-5">
                {tabs.map((tab, index) => (
                    <div
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`px-6 py-3 gap-x-3 row-span-1 col-span-1 hover:scale-105 transition-all ease-in-out duration-200 rounded cursor-pointer flex justify-center items-center ${
                        activeTab === index ? 'bg-[#97144d] text-gray-200 text-4xl font-extrabold' : 'bg-gray-300 text-[#97144d]'
                    }`}
                    >
                    {index===0?<FaUsers/>:index===1?<FaChartLine/>:<TbTargetArrow/>}
                    {tab.label}
                    </div>
                ))}
            </div>
    </div>
    </div>
     );
}
 
export default AboutTabComp;